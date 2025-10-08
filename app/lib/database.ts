import { PrismaClient } from "@prisma/client";
import type { BlogPost, Tag } from "../types";

// Prisma 클라이언트 인스턴스 생성
const prisma = new PrismaClient();

// 블로그 포스트 관련 함수들
export const getBlogPosts = async (
  limit = 10,
  offset = 0
): Promise<BlogPost[]> => {
  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        published: true,
      },
      orderBy: {
        publishedAt: "desc",
      },
      skip: offset,
      take: limit,
    });

    // Date 객체를 문자열로 변환하여 JSON 직렬화 가능하게 만듦
    return posts.map((post) => ({
      ...post,
      publishedAt: post.publishedAt?.toISOString() || null,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

export const getBlogPostBySlug = async (
  slug: string
): Promise<BlogPost | null> => {
  try {
    const post = await prisma.blogPost.findFirst({
      where: {
        slug: slug,
        published: true,
      },
    });

    if (!post) return null;

    // Date 객체를 문자열로 변환하여 JSON 직렬화 가능하게 만듦
    return {
      ...post,
      publishedAt: post.publishedAt?.toISOString() || null,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
};

export const getRelatedPosts = async (
  currentPostId: number,
  tags: string[],
  limit = 3
): Promise<BlogPost[]> => {
  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        published: true,
        id: {
          not: currentPostId,
        },
        tags: {
          hasSome: tags,
        },
      },
      orderBy: {
        publishedAt: "desc",
      },
      take: limit,
    });

    // Date 객체를 문자열로 변환하여 JSON 직렬화 가능하게 만듦
    return posts.map((post) => ({
      ...post,
      publishedAt: post.publishedAt?.toISOString() || null,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }
};

// 태그 관련 함수들
export const getAllTags = async (): Promise<Tag[]> => {
  try {
    // 모든 게시글의 태그를 가져와서 중복 제거
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { tags: true },
    });

    // 모든 태그를 평탄화하고 중복 제거
    const allTags = posts.flatMap((post) => post.tags);
    const uniqueTags = [...new Set(allTags)];

    // Tag 타입에 맞게 변환
    return uniqueTags.sort().map((tagName, index) => ({
      id: index + 1, // 임시 ID
      name: tagName,
      slug: tagName,
      description: `${tagName} 관련 포스트`,
      color: getTagColorFromName(tagName),
      createdAt: new Date().toISOString(),
    }));
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
};

// 태그 이름을 기반으로 일관된 색상 반환
function getTagColorFromName(tagName: string): string {
  const colors = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#ec4899"];
  let hash = 0;
  for (let i = 0; i < tagName.length; i++) {
    hash = tagName.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export const getPostsByTag = async (
  tagSlug: string,
  limit = 10,
  offset = 0
): Promise<BlogPost[]> => {
  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        published: true,
        tags: {
          has: tagSlug,
        },
      },
      orderBy: {
        publishedAt: "desc",
      },
      skip: offset,
      take: limit,
    });

    // Date 객체를 문자열로 변환하여 JSON 직렬화 가능하게 만듦
    return posts.map((post) => ({
      ...post,
      publishedAt: post.publishedAt?.toISOString() || null,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error("Error fetching posts by tag:", error);
    return [];
  }
};

// Prisma 클라이언트 내보내기 (필요시 직접 사용)
export { prisma };
