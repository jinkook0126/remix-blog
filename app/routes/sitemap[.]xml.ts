// app/routes/sitemap.xml.ts
import type { LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "~/lib/database";

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("🚀 Sitemap loader called for:", request.url);

  // 1️⃣ 사이트 기본 URL 감지 (배포 환경에서도 자동)
  const baseUrl = new URL(request.url).origin;
  console.log("Base URL:", baseUrl);

  try {
    // 2️⃣ 게시글 목록 불러오기
    console.log("Fetching blog posts...");
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: {
        slug: true,
        tags: true,
        updatedAt: true,
        publishedAt: true,
      },
      orderBy: {
        publishedAt: "desc",
      },
    });
    console.log("Found posts:", posts.length);

    // 3️⃣ 태그 목록 불러오기 (게시글의 태그들을 중복 제거)
    console.log("Fetching tags...");
    const allTags = posts.flatMap((post) => post.tags);
    const uniqueTags = [...new Set(allTags)].sort();
    const tags = uniqueTags.map((tag) => ({
      slug: tag,
      createdAt: new Date(),
    }));
    console.log("Found tags:", tags.length);

    // 4️⃣ XML 생성
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  <!-- 홈 -->
  <url>
    <loc>${baseUrl}</loc>
    <priority>1.0</priority>
    <changefreq>daily</changefreq>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>

  <!-- 블로그 목록 -->
  <url>
    <loc>${baseUrl}/blog</loc>
    <priority>0.9</priority>
    <changefreq>daily</changefreq>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>

  <!-- 태그 목록 -->
  <url>
    <loc>${baseUrl}/tags</loc>
    <priority>0.7</priority>
    <changefreq>weekly</changefreq>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>

  <!-- 블로그 포스트들 -->
  ${posts
    .map(
      (post) => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.updatedAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}

  <!-- 태그 페이지들 -->
  ${tags
    .map(
      (tag) => `
  <url>
    <loc>${baseUrl}/tags/${tag.slug}</loc>
    <lastmod>${new Date(tag.createdAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
    .join("")}
</urlset>`;

    // 5️⃣ 응답 반환
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600", // 1시간 캐시
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    console.error("Error details:", error);

    // 에러 발생 시 기본 사이트맵 반환
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  <url>
    <loc>${baseUrl}</loc>
    <priority>1.0</priority>
    <changefreq>daily</changefreq>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <priority>0.9</priority>
    <changefreq>daily</changefreq>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  <url>
    <loc>${baseUrl}/tags</loc>
    <priority>0.7</priority>
    <changefreq>weekly</changefreq>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
</urlset>`;

    return new Response(fallbackSitemap, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=300", // 5분 캐시 (에러 시 더 짧게)
      },
    });
  }
}
