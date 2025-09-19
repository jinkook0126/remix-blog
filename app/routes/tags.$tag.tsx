import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getBlogPosts } from "~/lib/supabase";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import BlogCard from "~/components/BlogCard";
import type { BlogPost } from "~/lib/supabase";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { tag } = params;

  if (!tag) {
    throw new Response("Not Found", { status: 404 });
  }

  // 실제 구현에서는 특정 태그로 필터링된 포스트를 가져와야 합니다
  const allPosts = await getBlogPosts(50, 0);
  const filteredPosts = allPosts.filter(
    (post: BlogPost) => post.tags && post.tags.includes(tag)
  );

  return json({ posts: filteredPosts, tag });
};

export const meta = ({ data }: { data: { tag: string } }) => {
  if (!data) {
    return [{ title: "태그를 찾을 수 없습니다 - Dairium Blog" }];
  }

  const { tag } = data;

  return [
    { title: `#${tag} - Dairium Blog` },
    {
      name: "description",
      content: `${tag} 태그가 포함된 블로그 포스트들을 확인해보세요.`,
    },
    { property: "og:title", content: `#${tag} - Dairium Blog` },
    {
      property: "og:description",
      content: `${tag} 태그가 포함된 블로그 포스트들을 확인해보세요.`,
    },
  ];
};

export default function TagPage() {
  const { posts, tag } = useLoaderData<typeof loader>();

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* 헤더 섹션 */}
        <section className="gradient-bg py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-3 mb-6">
                <Link
                  to="/tags"
                  className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                >
                  ← 태그 목록
                </Link>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
                <span className={`${getHighlightColor(0)}`}>#{tag}</span>
              </h1>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                {tag} 태그가 포함된 포스트 {posts.length}개를 찾았습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 포스트 목록 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length > 0 ? (
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
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                  #{tag} 태그의 포스트가 없습니다
                </h2>
                <p className="text-secondary-600 mb-8">
                  다른 태그를 확인해보시거나 블로그 목록을 둘러보세요.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/tags" className="btn-secondary px-6 py-3">
                    태그 목록으로
                  </Link>
                  <Link to="/blog" className="btn-primary px-6 py-3">
                    블로그 둘러보기
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
