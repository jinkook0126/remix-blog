import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link, useLocation } from "@remix-run/react";
import { getBlogPostBySlug, getRelatedPosts } from "~/lib/database";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import BlogCard from "~/components/BlogCard";
import type { BlogPost } from "~/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ko";
import { useEffect } from "react";
import { AdsenseAutoScript } from "~/components/AdsenseAutoScript";
import { AdsenseAutoRefresh } from "~/components/AdsenseAutoRefresh";

// dayjs 플러그인 및 로케일 설정
dayjs.extend(utc);
dayjs.locale("ko");

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;

  if (!slug) {
    throw new Response("Not Found", { status: 404 });
  }

  const post = await getBlogPostBySlug(slug);

  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  const relatedPosts = await getRelatedPosts(post.id, post.tags, 3);

  return json({ post, relatedPosts });
};

export const meta = ({ data }: { data: { post: BlogPost } }) => {
  if (!data) {
    return [{ title: "포스트를 찾을 수 없습니다 - Dairium Blog" }];
  }

  const { post } = data;

  return [
    { title: `${post.title} - Dairium Blog` },
    { name: "description", content: post.excerpt },
    { name: "keywords", content: post.tags.join(", ") },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.excerpt },
    { property: "og:type", content: "article" },
    {
      property: "og:url",
      content: `https://dairium-blog.com/blog/${post.slug}`,
    },
    {
      property: "og:image",
      content: post.featuredImage || "https://dairium-blog.com/og-image.jpg",
    },
    { property: "article:published_time", content: post.publishedAt || "" },
    { property: "article:author", content: "Dairium" },
    { property: "article:tag", content: post.tags.join(", ") },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: post.title },
    { property: "twitter:description", content: post.excerpt },
    {
      property: "twitter:image",
      content: post.featuredImage || "https://dairium-blog.com/og-image.jpg",
    },
  ];
};

export default function BlogPost() {
  const { post, relatedPosts } = useLoaderData<typeof loader>();
  const location = useLocation();
  const getHighlightColor = (index: number) => {
    const colors = [
      "highlight-blue",
      "highlight-green",
      "highlight-purple",
      "highlight-orange",
      "highlight-pink",
    ];
    return colors[index % colors.length];
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* 포스트 헤더 */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 태그 */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-sm font-medium rounded-full bg-secondary-100 text-secondary-700 ${getHighlightColor(
                      index
                    )}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* 제목 */}
            <h1 className="text-4xl lg:text-5xl lg:leading-snug font-bold text-secondary-900 mb-6">
              {post.title}
            </h1>

            {/* 요약 */}
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* 메타 정보 */}
            <div className="flex items-center justify-between py-6 border-t border-b border-secondary-200 mb-8">
              <div className="text-sm text-secondary-500">
                {post.publishedAt
                  ? dayjs.utc(post.publishedAt).format("YYYY년 MM월 DD일")
                  : "날짜 미정"}
              </div>

              <div className="text-sm text-secondary-500">
                {post.readingTime}분 읽기
              </div>
            </div>

            {/* 대표 이미지 */}
            {post.featuredImage && (
              <div className="mb-8">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            )}

            {/* 포스트 내용 */}
            <div className="prose prose-lg max-w-none">
              <div
                className="text-secondary-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* 태그 목록 */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  태그
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link
                      key={tag}
                      to={`/tags/${tag}`}
                      className={`px-3 py-1 text-sm font-medium rounded-full bg-secondary-100 text-secondary-700 hover:bg-secondary-200 transition-colors duration-200 ${getHighlightColor(
                        index
                      )}`}
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* 관련 포스트 */}
        {relatedPosts.length > 0 && (
          <section className="bg-secondary-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                  관련 <span className="highlight-orange">포스트</span>
                </h2>
                <p className="text-lg text-secondary-600">
                  이 포스트와 관련된 다른 글들을 확인해보세요.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {relatedPosts.map((relatedPost: BlogPost, index: number) => (
                  <div
                    key={relatedPost.id}
                    className="slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <BlogCard post={relatedPost} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 네비게이션 */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between">
              <Link to="/blog" className="btn-secondary px-6 py-3">
                ← 블로그 목록으로
              </Link>
              <Link to="/" className="btn-primary px-6 py-3">
                홈으로 →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AdsenseAutoScript client="ca-pub-3023499308009046" />
      <AdsenseAutoRefresh />
    </div>
  );
}
