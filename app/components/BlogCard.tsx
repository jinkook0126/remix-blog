import { Link } from "@remix-run/react";
import dayjs from "dayjs";
import type { BlogPost } from "~/types";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
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
    <article
      className={`card-hover flex flex-col h-full ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* 이미지 - 항상 동일한 높이로 표시 */}
      <div className={`mb-4 h-48 overflow-hidden rounded-lg flex-shrink-0`}>
        {post.featuredImage ? (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-secondary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* 콘텐츠 */}
      <div className="flex flex-col flex-grow space-y-3">
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

        {/* 메타 정보 - 카드 하단에 고정 */}
        <div className="flex items-center justify-between pt-2 mt-auto">
          <div className="text-xs text-secondary-500">
            {dayjs(post.publishedAt).format("YYYY년 MM월 DD일")}
          </div>

          {/* 읽기 시간 */}
          <div className="text-xs text-secondary-500">
            {post.readingTime}분 읽기
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
