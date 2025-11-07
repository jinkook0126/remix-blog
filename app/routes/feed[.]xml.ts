import type { LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "~/lib/database";
import crypto from "crypto";

const xmlEscape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const toRfc822 = (d: Date) => d.toUTCString();

const getLastBuildDate = (dates: Date[]) =>
  dates.length
    ? new Date(Math.max(...dates.map((d) => d.getTime())))
    : new Date();

export async function loader({ request }: LoaderFunctionArgs) {
  const baseUrl = process.env.SITE_URL ?? new URL(request.url).origin;
  const siteName = process.env.SITE_NAME ?? "다이어리움";
  const siteDescription =
    process.env.SITE_DESCRIPTION ??
    "다양한 소식과 지식을 전하는 Dairium 블로그";

  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      take: 50, // 최신 50개
      select: {
        title: true,
        slug: true,
        excerpt: true,
        tags: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    const lastBuild = getLastBuildDate(
      posts.map((p) => p.updatedAt ?? p.publishedAt ?? p.createdAt)
    );

    const selfUrl = `${baseUrl}/feed.xml`;

    const feedItems = posts
      .map((post) => {
        const postUrl = `${baseUrl}/blog/${encodeURIComponent(post.slug)}`;
        const pub = toRfc822(post.publishedAt ?? post.createdAt);
        const categories = (post.tags ?? [])
          .map((tag) => `<category><![CDATA[${tag}]]></category>`)
          .join("");

        const descriptionCdata = `<![CDATA[${post.excerpt ?? ""}]]>`;
        const contentEncoded = `<content:encoded><![CDATA[${
          post.excerpt ?? ""
        }]]></content:encoded>`;

        return `
  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${postUrl}</link>
    <guid isPermaLink="true">${postUrl}</guid>
    <pubDate>${pub}</pubDate>
    ${categories}
    <description>${descriptionCdata}</description>
    ${contentEncoded}
  </item>`;
      })
      .join("");

    const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
  <title><![CDATA[${siteName}]]></title>
  <link>${baseUrl}</link>
  <atom:link href="${selfUrl}" rel="self" type="application/rss+xml" />
  <description><![CDATA[${siteDescription}]]></description>
  <language>ko</language>
  <lastBuildDate>${toRfc822(lastBuild)}</lastBuildDate>
  <generator>Remix RSS Generator</generator>
  ${feedItems}
</channel>
</rss>`;

    const lastModified = new Date().toUTCString();
    const etag = crypto.createHash("sha1").update(rssFeed).digest("hex");

    const ifNoneMatch = request.headers.get("If-None-Match");
    if (ifNoneMatch && ifNoneMatch === etag) {
      return new Response(null, {
        status: 304,
        headers: {
          ETag: etag,
          "Cache-Control":
            "public, max-age=300, s-maxage=300, stale-while-revalidate=60",
        },
      });
    }

    return new Response(rssFeed, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control":
          "public, max-age=300, s-maxage=300, stale-while-revalidate=60",
        ETag: etag,
        "Last-Modified": lastModified,
      },
    });
  } catch (error) {
    console.error("Error generating RSS feed:", error);
    const fallbackFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title><![CDATA[${siteName}]]></title>
  <link>${baseUrl}</link>
  <description><![CDATA[${siteDescription}]]></description>
  <language>ko</language>
  <lastBuildDate>${toRfc822(new Date())}</lastBuildDate>
  <generator>Remix RSS Generator</generator>
</channel>
</rss>`;
    return new Response(fallbackFeed, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=120",
      },
    });
  }
}
