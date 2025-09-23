import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getAllTags } from "~/lib/database";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import type { Tag } from "~/types";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const tags = await getAllTags();
  return json({ tags });
};

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
  const { tags } = useLoaderData<typeof loader>();

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
            {tags.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tags.map((tag: Tag, index: number) => (
                  <Link
                    key={tag.id}
                    to={`/tags/${tag.slug}`}
                    className="card-hover text-center group"
                  >
                    <div className="p-6">
                      <div
                        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-secondary-100 group-hover:scale-110 transition-transform duration-200"
                        style={{ backgroundColor: tag.color + "20" }}
                      >
                        <span
                          className="text-2xl font-bold"
                          style={{ color: tag.color }}
                        >
                          {tag.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                        {tag.name}
                      </h3>
                      <p className="text-sm text-secondary-500">
                        {tag.description || "태그 설명"}
                      </p>
                    </div>
                  </Link>
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
                  아직 태그가 없습니다
                </h2>
                <p className="text-secondary-600 mb-8">
                  곧 흥미로운 태그들로 찾아뵙겠습니다.
                </p>
                <Link to="/blog" className="btn-primary px-6 py-3">
                  블로그 둘러보기
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
