import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getBlogPosts } from "~/lib/database";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import BlogCard from "~/components/BlogCard";
import type { BlogPost } from "~/types";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const posts = await getBlogPosts(6, 0);
  return json({ posts });
};

export const meta = () => [
  { title: "Dairium Blog - 현대적인 블로그 플랫폼" },
  {
    name: "description",
    content:
      "눈이 편안한 디자인과 반응형 레이아웃을 갖춘 현대적인 블로그 플랫폼입니다.",
  },
  { property: "og:title", content: "Dairium Blog" },
  {
    property: "og:description",
    content:
      "눈이 편안한 디자인과 반응형 레이아웃을 갖춘 현대적인 블로그 플랫폼입니다.",
  },
];

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="gradient-bg py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6 fade-in">
                <span className="highlight-blue">Dairium</span> 블로그에
                <br />
                오신 것을 환영합니다
              </h1>
              <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                현대적이고 눈이 편안한 디자인으로 제작된 블로그에서
                <span className="highlight-green"> 흥미로운 이야기</span>와
                <span className="highlight-purple"> 유용한 정보</span>를
                만나보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/blog" className="btn-primary px-8 py-3 text-lg">
                  블로그 둘러보기
                </Link>
                <Link to="/tags" className="btn-secondary px-8 py-3 text-lg">
                  태그 둘러보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 최신 포스트 섹션 */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
                최신 <span className="highlight-orange">포스트</span>
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                최신 기술 트렌드와 인사이트를 담은 포스트들을 확인해보세요.
              </p>
            </div>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {posts.map((post: BlogPost, index: number) => (
                  <div
                    key={post.id}
                    className="slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <BlogCard post={post} featured={index === 0} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-secondary-400"
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
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  아직 포스트가 없습니다
                </h3>
                <p className="text-secondary-600">
                  곧 흥미로운 내용으로 찾아뵙겠습니다.
                </p>
              </div>
            )}

            {posts.length > 0 && (
              <div className="text-center mt-12">
                <Link to="/blog" className="btn-primary px-8 py-3 text-lg">
                  모든 포스트 보기
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* 특징 섹션 */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
                <span className="highlight-pink">특별한</span> 경험
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Dairium 블로그만의 특별한 기능들을 만나보세요.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  눈이 편안한 디자인
                </h3>
                <p className="text-secondary-600">
                  과학적으로 검증된 색상과 타이포그래피로 장시간 읽어도 피로감이
                  적습니다.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-accent-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  완벽한 반응형
                </h3>
                <p className="text-secondary-600">
                  모든 디바이스에서 최적화된 경험을 제공합니다. 모바일부터
                  데스크톱까지 완벽하게 대응합니다.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-highlight-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-highlight-purple"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  읽기 편의성
                </h3>
                <p className="text-secondary-600">
                  명확한 구조와 적절한 여백으로 읽기 편한 글을 제공하여 독자의
                  이해도를 높입니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
