import { Link } from "@remix-run/react";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export const meta = () => [
  { title: "태그 - Dairium Blog" },
  {
    name: "description",
    content: "블로그 포스트를 태그별로 분류하여 확인해보세요.",
  },
  { property: "og:title", content: "태그 - Dairium Blog" },
  {
    property: "og:description",
    content: "블로그 포스트를 태그별로 분류하여 확인해보세요.",
  },
];

export default function Tags() {
  // 실제 구현에서는 Supabase에서 태그 데이터를 가져와야 합니다
  const tags = [
    { name: "웹개발", count: 5, color: "highlight-blue" },
    { name: "React", count: 3, color: "highlight-green" },
    { name: "TypeScript", count: 4, color: "highlight-purple" },
    { name: "디자인", count: 2, color: "highlight-orange" },
    { name: "UX", count: 3, color: "highlight-pink" },
    { name: "튜토리얼", count: 6, color: "highlight-blue" },
    { name: "접근성", count: 2, color: "highlight-green" },
    { name: "성능", count: 3, color: "highlight-purple" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* 헤더 섹션 */}
        <section className="gradient-bg py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
                <span className="highlight-blue">태그</span>
              </h1>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                관심 있는 주제별로 포스트를 찾아보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 태그 목록 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {tags.map((tag, index) => (
                <Link
                  key={tag.name}
                  to={`/tags/${tag.name}`}
                  className="card-hover text-center group"
                >
                  <div className="p-6">
                    <div
                      className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-secondary-100 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <span className={`text-2xl font-bold ${tag.color}`}>
                        {tag.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      {tag.name}
                    </h3>
                    <p className="text-sm text-secondary-500">
                      {tag.count}개 포스트
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
