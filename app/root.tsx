import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import "~/styles/globals.css";
import faviconList from "./lib/faviconList";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://hangeul.pstatic.net/hangeul_static/css/nanum-square-neo.css",
  },
  {
    rel: "alternate",
    type: "application/rss+xml",
    title: "다이어리움 RSS Feed",
    href: "https://dairium.com/feed.xml",
  },
  ...faviconList,
];

export const meta: MetaFunction = () => [
  { title: "Dairium - Modern Blog Platform" },
  {
    name: "description",
    content:
      "현대적이고 눈이 편안한 디자인으로 제작된 블로그에서 흥미로운 이야기와 유용한 정보를 만나보세요",
  },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "theme-color", content: "#0ea5e9" },
  { property: "og:title", content: "Dairium" },
  {
    property: "og:description",
    content:
      "현대적이고 편안한 디자인 속에서 흥미로운 이야기와 유용한 정보를 전합니다.",
  },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://dairium.com" },
  { property: "og:image", content: "https://dairium.com/og-image.jpg" },
  { property: "twitter:card", content: "summary_large_image" },
  { property: "twitter:title", content: "Dairium" },
  {
    property: "twitter:description",
    content:
      "현대적이고 편안한 디자인 속에서 흥미로운 이야기와 유용한 정보를 전합니다.",
  },
  {
    property: "twitter:image",
    content: "https://dairium.com/og-image.jpg",
  },
];

export default function App() {
  const location = useLocation();
  const isBlogPost = location.pathname.startsWith("/blog/");
  return (
    <html lang="ko" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3023499308009046"
          crossOrigin="anonymous"
        ></script> */}
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-secondary-50">
        <Outlet />
        {!isBlogPost && <ScrollRestoration />}
        <Scripts />
      </body>
    </html>
  );
}
