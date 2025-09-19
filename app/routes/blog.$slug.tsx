import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getBlogPostBySlug, getRelatedPosts } from "~/lib/supabase";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import BlogCard from "~/components/BlogCard";
import type { BlogPost } from "~/lib/supabase";

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
    return [
      { title: "포스트를 찾을 수 없습니다 - Dairium Blog" },
    ];
  }

  const { post } = data;
  
  return [
    { title: `${post.title} - Dairium Blog` },
    { name: "description", content: post.excerpt },
    { name: "keywords", content: post.tags.join(", ") },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.excerpt },
    { property: "og:type", content: "article" },
    { property: "og:url", content: `https://dairium-blog.com/blog/${post.slug}` },
    { property: "og:image", content: post.featured_image || "https://dairium-blog.com/og-image.jpg" },
    { property: "article:published_time", content: post.published_at },
    { property: "article:author", content: post.author.name },
    { property: "article:tag", content: post.tags.join(", ") },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: post.title },
    { property: "twitter:description", content: post.excerpt },
    { property: "twitter:image", content: post.featured_image || "https://dairium-blog.com/og-image.jpg" },
  ];
};

export default function BlogPost() {
  const { post, relatedPosts } = useLoaderData<typeof loader>();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getHighlightColor = (index: number) => {
    const colors = ['highlight-blue', 'highlight-green', 'highlight-purple', 'highlight-orange', 'highlight-pink'];
    return colors[index % colors.length];
  };

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
                    className={`px-3 py-1 text-sm font-medium rounded-full bg-secondary-100 text-secondary-700 ${getHighlightColor(index)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* 제목 */}
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* 요약 */}
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* 메타 정보 */}
            <div className="flex items-center justify-between py-6 border-t border-b border-secondary-200 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-medium">
                    {post.author.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-secondary-900">
                    {post.author.name}
                  </p>
                  <p className="text-sm text-secondary-500">
                    {formatDate(post.published_at)}
                  </p>
                </div>
              </div>
              
              <div className="text-sm text-secondary-500">
                {Math.ceil(post.content.length / 500)}분 읽기
              </div>
            </div>

            {/* 대표 이미지 */}
            {post.featured_image && (
              <div className="mb-8">
                <img
                  src={post.featured_image}
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
                      className={`px-3 py-1 text-sm font-medium rounded-full bg-secondary-100 text-secondary-700 hover:bg-secondary-200 transition-colors duration-200 ${getHighlightColor(index)}`}
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost: BlogPost, index: number) => (
                  <div key={relatedPost.id} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
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
              <Link
                to="/blog"
                className="btn-secondary px-6 py-3"
              >
                ← 블로그 목록으로
              </Link>
              <Link
                to="/"
                className="btn-primary px-6 py-3"
              >
                홈으로 →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
