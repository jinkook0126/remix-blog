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
  currentPostId: string,
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
    const tags = await prisma.tag.findMany({
      orderBy: {
        name: "asc",
      },
    });

    // Date 객체를 문자열로 변환하여 JSON 직렬화 가능하게 만듦
    return tags.map((tag) => ({
      ...tag,
      createdAt: tag.createdAt.toISOString(),
    }));
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
};

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
