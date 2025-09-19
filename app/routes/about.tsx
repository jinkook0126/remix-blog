import { Link } from "@remix-run/react";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export const meta = () => [
  { title: "소개 - Dairium Blog" },
  { name: "description", content: "Dairium 블로그에 대해 알아보세요. 현대적이고 눈이 편안한 디자인의 블로그 플랫폼입니다." },
  { property: "og:title", content: "소개 - Dairium Blog" },
  { property: "og:description", content: "Dairium 블로그에 대해 알아보세요. 현대적이고 눈이 편안한 디자인의 블로그 플랫폼입니다." },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="gradient-bg py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6 fade-in">
              <span className="highlight-blue">Dairium</span>에 대해
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              현대적이고 눈이 편안한 디자인으로 제작된 블로그 플랫폼입니다.
            </p>
          </div>
        </section>

        {/* 메인 콘텐츠 */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-12">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-4xl">D</span>
                </div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                  Dairium이란?
                </h2>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  <span className="highlight-green">Dairium</span>은 현대적인 웹 기술을 활용하여 
                  제작된 블로그 플랫폼입니다. 사용자의 눈 건강을 고려한 색상 팔레트와 
                  <span className="highlight-purple"> 반응형 디자인</span>을 통해 
                  최적의 읽기 경험을 제공합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="card">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    빠른 성능
                  </h3>
                  <p className="text-secondary-600">
                    Remix와 Supabase의 강력한 조합으로 빠르고 안정적인 성능을 보장합니다.
                  </p>
                </div>

                <div className="card">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    반응형 디자인
                  </h3>
                  <p className="text-secondary-600">
                    모든 디바이스에서 최적화된 경험을 제공합니다.
                  </p>
                </div>

                <div className="card">
                  <div className="w-12 h-12 bg-highlight-purple/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-highlight-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    눈이 편안한 디자인
                  </h3>
                  <p className="text-secondary-600">
                    과학적으로 검증된 색상과 타이포그래피를 사용합니다.
                  </p>
                </div>

                <div className="card">
                  <div className="w-12 h-12 bg-highlight-green/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-highlight-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    SEO 최적화
                  </h3>
                  <p className="text-secondary-600">
                    검색 엔진 최적화를 통해 더 많은 독자에게 도달합니다.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-secondary-200">
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  기술 스택
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 font-bold text-lg">R</span>
                    </div>
                    <p className="text-sm font-medium text-secondary-700">Remix</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 font-bold text-lg">S</span>
                    </div>
                    <p className="text-sm font-medium text-secondary-700">Supabase</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-cyan-600 font-bold text-lg">T</span>
                    </div>
                    <p className="text-sm font-medium text-secondary-700">Tailwind</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 font-bold text-lg">TS</span>
                    </div>
                    <p className="text-sm font-medium text-secondary-700">TypeScript</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link
                  to="/blog"
                  className="btn-primary px-8 py-3 text-lg"
                >
                  블로그 둘러보기
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
