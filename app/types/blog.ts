// 블로그 관련 타입 정의

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published: boolean;
  publishedAt: string | null; // Remix JSON 직렬화로 인해 string으로 변경
  createdAt: string; // Remix JSON 직렬화로 인해 string으로 변경
  updatedAt: string; // Remix JSON 직렬화로 인해 string으로 변경
  tags: string[];
  featuredImage: string | null;
  readingTime: number;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  color: string;
  createdAt: string; // Remix JSON 직렬화로 인해 string으로 변경
}

// 블로그 포스트 생성/수정용 타입
export interface CreateBlogPost {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published?: boolean;
  publishedAt?: string | null; // Remix JSON 직렬화로 인해 string으로 변경
  tags?: string[];
  featuredImage?: string | null;
  readingTime?: number;
}

export interface UpdateBlogPost extends Partial<CreateBlogPost> {
  id: number;
}

// 태그 생성/수정용 타입
export interface CreateTag {
  name: string;
  slug: string;
  description?: string | null;
  color?: string;
}

export interface UpdateTag extends Partial<CreateTag> {
  id: number;
}

// API 응답 타입
export interface BlogPostResponse {
  posts: BlogPost[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface TagResponse {
  tags: Tag[];
  total: number;
}
