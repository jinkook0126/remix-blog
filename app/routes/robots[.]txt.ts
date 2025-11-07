// app/routes/robots.txt.ts
import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  const baseUrl = process.env.SITE_URL ?? new URL(request.url).origin;

  const content = `User-agent: *
# ✅ 기본은 허용
Allow: /

# ✅ 주요 공개 경로(명시적 허용은 선택 사항)
Allow: /blog/
Allow: /tags/
Allow: /feed.xml
Allow: /sitemap.xml

# ❌ 내부/비공개 경로만 최소 차단
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /draft/

# ❗ JS/CSS/이미지/빌드 자산은 차단하지 마세요 (렌더링 필수)
# Disallow: /*.js$   <-- 절대 사용 금지
# Disallow: /build/  <-- 자산 차단 금지

# ℹ️ Google은 crawl-delay를 무시합니다. (Bing만 부분 지원)
# Crawl-delay: 1

# 🔗 사이트맵 위치(분할 시 여러 줄 기재 가능)
Sitemap: ${baseUrl}/sitemap.xml
`.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
