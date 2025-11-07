// app/routes/sitemap.xml.ts
import type { LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "~/lib/database";
import crypto from "crypto";

// ── utils ─────────────────────────────────────────────────────────────
const iso = (d: Date) => new Date(d).toISOString();

// 이중 인코딩 방지: 이미 %xx가 있으면 그대로, 아니면 encodeURIComponent
const encodePathSegment = (s: string) =>
  /%[0-9A-Fa-f]{2}/.test(s) ? s : encodeURIComponent(s);

// 최근/오래된 글에 따라 changefreq 다르게
const changefreqForPost = (date: Date) => {
  const days = Math.floor((Date.now() - date.getTime()) / 86400000);
  return days <= 14 ? "weekly" : "monthly";
};

// ── loader ────────────────────────────────────────────────────────────
export async function loader({ request }: LoaderFunctionArgs) {
  const baseFromEnv = process.env.SITE_URL;
  const baseUrl = baseFromEnv ?? new URL(request.url).origin;

  try {
    // 1) 게시글 목록
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: {
        slug: true,
        tags: true,
        updatedAt: true,
        publishedAt: true,
      },
      orderBy: { publishedAt: "desc" },
    });

    // 2) 태그 목록 + 태그별 최신 시각 (해당 태그를 가진 포스트 중 최댓값)
    const tagLatestMap = new Map<string, Date>();
    for (const p of posts) {
      const lm = p.updatedAt ?? p.publishedAt!;
      for (const t of p.tags ?? []) {
        const prev = tagLatestMap.get(t);
        if (!prev || lm > prev) tagLatestMap.set(t, lm);
      }
    }
    const tags = Array.from(tagLatestMap.entries())
      .map(([slug, lastmod]) => ({ slug, lastmod }))
      .sort((a, b) => a.slug.localeCompare(b.slug, "ko"));

    // 3) 사이트 레벨 lastmod (홈/블로그 목록용)
    const siteLatest =
      posts.length > 0
        ? new Date(
            Math.max(
              ...posts.map((p) => (p.updatedAt ?? p.publishedAt!)?.getTime())
            )
          )
        : new Date();

    // 4) XML 생성
    const urls: string[] = [];

    // 홈
    urls.push(`
  <url>
    <loc>${baseUrl}</loc>
    <priority>1.0</priority>
    <changefreq>daily</changefreq>
    <lastmod>${iso(siteLatest)}</lastmod>
  </url>`);

    // 블로그 목록
    urls.push(`
  <url>
    <loc>${baseUrl}/blog</loc>
    <priority>0.9</priority>
    <changefreq>daily</changefreq>
    <lastmod>${iso(siteLatest)}</lastmod>
  </url>`);

    // 태그 인덱스
    urls.push(`
  <url>
    <loc>${baseUrl}/tags</loc>
    <priority>0.7</priority>
    <changefreq>weekly</changefreq>
    <lastmod>${iso(siteLatest)}</lastmod>
  </url>`);

    // 포스트들
    for (const p of posts) {
      const lastmod = p.updatedAt ?? p.publishedAt!;
      const changefreq = changefreqForPost(lastmod);
      const encodedSlug = encodePathSegment(p.slug);

      urls.push(`
  <url>
    <loc>${baseUrl}/blog/${encodedSlug}</loc>
    <lastmod>${iso(lastmod)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>0.8</priority>
  </url>`);
    }

    // 태그 페이지들 (태그별 최신 포스트 시각 사용)
    for (const t of tags) {
      const encodedTag = encodePathSegment(t.slug);
      urls.push(`
  <url>
    <loc>${baseUrl}/tags/${encodedTag}</loc>
    <lastmod>${iso(t.lastmod)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`);
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls.join("\n")}
</urlset>`;

    // 5) 캐시/조건부 요청 (ETag/Last-Modified)
    const etag = crypto.createHash("sha1").update(sitemap).digest("hex");
    const ifNoneMatch = request.headers.get("If-None-Match");
    if (ifNoneMatch && ifNoneMatch === etag) {
      return new Response(null, {
        status: 304,
        headers: {
          ETag: etag,
          "Cache-Control":
            "public, max-age=3600, s-maxage=3600, stale-while-revalidate=60",
        },
      });
    }

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control":
          "public, max-age=3600, s-maxage=3600, stale-while-revalidate=60",
        "Last-Modified": siteLatest.toUTCString(),
        ETag: etag,
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);

    const fallback = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  <url>
    <loc>${baseUrl}</loc>
    <priority>1.0</priority>
    <changefreq>daily</changefreq>
    <lastmod>${iso(new Date())}</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <priority>0.9</priority>
    <changefreq>daily</changefreq>
    <lastmod>${iso(new Date())}</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/tags</loc>
    <priority>0.7</priority>
    <changefreq>weekly</changefreq>
    <lastmod>${iso(new Date())}</lastmod>
  </url>
</urlset>`;

    return new Response(fallback, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=300",
      },
    });
  }
}
