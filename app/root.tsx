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

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://hangeul.pstatic.net/hangeul_static/css/nanum-square-neo.css",
  },
];

export const meta: MetaFunction = () => [
  { title: "Dairium Blog - Modern Blog Platform" },
  {
    name: "description",
    content:
      "A modern blog built with Remix and Supabase featuring eye-friendly design and responsive layout.",
  },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "theme-color", content: "#0ea5e9" },
  { property: "og:title", content: "Dairium Blog" },
  {
    property: "og:description",
    content: "A modern blog built with Remix and Supabase",
  },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://dairium-blog.com" },
  { property: "og:image", content: "https://dairium-blog.com/og-image.jpg" },
  { property: "twitter:card", content: "summary_large_image" },
  { property: "twitter:title", content: "Dairium Blog" },
  {
    property: "twitter:description",
    content: "A modern blog built with Remix and Supabase",
  },
  {
    property: "twitter:image",
    content: "https://dairium-blog.com/og-image.jpg",
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
