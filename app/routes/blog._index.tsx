import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getBlogPosts } from "~/lib/database";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import BlogCard from "~/components/BlogCard";
import type { BlogPost } from "~/types";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = 12;
  const offset = (page - 1) * limit;

  const posts = await getBlogPosts(limit, offset);
  return json({ posts, currentPage: page, hasMore: posts.length === limit });
};

export const meta = () => [
  { title: "블로그 - Dairium Blog" },
  {
    name: "description",
    content:
      "최신 기술 트렌드와 인사이트를 담은 블로그 포스트들을 확인해보세요.",
  },
  { property: "og:title", content: "블로그 - Dairium Blog" },
  {
    property: "og:description",
    content:
      "최신 기술 트렌드와 인사이트를 담은 블로그 포스트들을 확인해보세요.",
  },
];

export default function BlogIndex() {
  const { posts, currentPage, hasMore } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* 헤더 섹션 */}
        <section className="gradient-bg py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
                <span className="highlight-blue">블로그</span>
              </h1>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                최신 기술 트렌드와 인사이트를 담은 포스트들을 만나보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 포스트 목록 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post: BlogPost, index: number) => (
                    <div
                      key={post.id}
                      className="slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <BlogCard post={post} />
                    </div>
                  ))}
                </div>

                {/* 페이지네이션 */}
                <div className="flex justify-center items-center space-x-4 mt-12">
                  {currentPage > 1 && (
                    <Link
                      to={`/blog?page=${currentPage - 1}`}
                      className="btn-secondary px-6 py-2"
                    >
                      이전 페이지
                    </Link>
                  )}

                  <span className="text-secondary-600">
                    페이지 {currentPage}
                  </span>

                  {hasMore && (
                    <Link
                      to={`/blog?page=${currentPage + 1}`}
                      className="btn-primary px-6 py-2"
                    >
                      다음 페이지
                    </Link>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-32 h-32 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-16 h-16 text-secondary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                  아직 포스트가 없습니다
                </h2>
                <p className="text-secondary-600 mb-8">
                  곧 흥미로운 내용으로 찾아뵙겠습니다.
                </p>
                <Link to="/" className="btn-primary px-6 py-3">
                  홈으로 돌아가기
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
