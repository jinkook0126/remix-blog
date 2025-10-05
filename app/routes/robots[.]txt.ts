import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("🤖 Robots.txt loader called for:", request.url);
  const baseUrl = process.env.SITE_URL ?? new URL(request.url).origin;
  console.log("Base URL:", baseUrl);

  const content = `User-agent: *
Allow: /

# 허용할 주요 경로들 (블로그 콘텐츠)
Allow: /blog/
Allow: /tags/
Allow: /sitemap.xml
Allow: /robots.txt

# 검색엔진이 크롤링하지 않아야 할 경로
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /draft/
Disallow: /build/
Disallow: /node_modules/
Disallow: /.env
Disallow: /.env.local
Disallow: /scripts/
Disallow: /prisma/

# 특정 파일 형식 제한
Disallow: /*.json$
Disallow: /*.log$
Disallow: /*.sql$
Disallow: /*.md$
Disallow: /*.ts$
Disallow: /*.js$
Disallow: /*.config.js$
Disallow: /*.config.ts$

# 개발 및 빌드 관련 파일들
Disallow: /vite.config.ts
Disallow: /tailwind.config.js
Disallow: /postcss.config.js
Disallow: /tsconfig.json
Disallow: /package.json
Disallow: /package-lock.json

# 사이트맵 위치 명시
Sitemap: ${baseUrl}/sitemap.xml

# 크롤링 지연 (서버 부하 방지)
Crawl-delay: 1

# 특별한 크롤러 설정 (선택사항)
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2`.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
