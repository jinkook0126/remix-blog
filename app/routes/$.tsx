import { Link } from "@remix-run/react";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export const meta = () => [
  { title: "페이지를 찾을 수 없습니다 - Dairium Blog" },
  { name: "description", content: "요청하신 페이지를 찾을 수 없습니다." },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary-200 mb-4">404</h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              페이지를 찾을 수 없습니다
            </h2>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
              <br />
              URL을 다시 확인해주시거나 홈으로 돌아가세요.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary px-8 py-3 text-lg">
              홈으로 돌아가기
            </Link>
            <Link to="/blog" className="btn-secondary px-8 py-3 text-lg">
              블로그 둘러보기
            </Link>
          </div>

          <div className="mt-12">
            <div className="w-32 h-32 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
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
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
