import { Link } from "@remix-run/react";
import type { BlogPost } from "~/types";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
    <article className={`card-hover ${featured ? "lg:col-span-2" : ""}`}>
      {/* 이미지 */}
      {post.featured_image && (
        <div
          className={`mb-4 ${
            featured ? "h-64" : "h-48"
          } overflow-hidden rounded-lg`}
        >
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* 콘텐츠 */}
      <div className="space-y-3">
        {/* 태그 */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={tag}
                className={`px-2 py-1 text-xs font-medium rounded-full bg-secondary-100 text-secondary-700 ${getHighlightColor(
                  index
                )}`}
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary-100 text-secondary-500">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* 제목 */}
        <h2
          className={`font-bold text-secondary-900 leading-tight ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          <Link
            to={`/blog/${post.slug}`}
            className="hover:text-primary-600 transition-colors duration-200"
          >
            {post.title}
          </Link>
        </h2>

        {/* 요약 */}
        <p className="text-secondary-600 text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* 메타 정보 */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-3">
            {/* 작성자 아바타 */}
            <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {post.author.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-secondary-900">
                {post.author.name}
              </p>
              <p className="text-xs text-secondary-500">
                {formatDate(post.published_at)}
              </p>
            </div>
          </div>

          {/* 읽기 시간 (추정) */}
          <div className="text-xs text-secondary-500">
            {Math.ceil(post.content.length / 500)}분 읽기
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
