import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 블로그 포스트 타입 정의
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  tags: string[];
  featured_image?: string;
  author: {
    name: string;
    email: string;
    avatar?: string;
  };
}

// 블로그 포스트 관련 함수들
export const getBlogPosts = async (limit = 10, offset = 0) => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      author:profiles(name, email, avatar_url)
    `)
    .eq('published', true)
    .order('published_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  return data || [];
};

export const getBlogPostBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      author:profiles(name, email, avatar_url)
    `)
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  return data;
};

export const getRelatedPosts = async (currentPostId: string, tags: string[], limit = 3) => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      author:profiles(name, email, avatar_url)
    `)
    .eq('published', true)
    .neq('id', currentPostId)
    .overlaps('tags', tags)
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }

  return data || [];
};
