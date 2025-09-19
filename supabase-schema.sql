-- Dairium Blog Database Schema
-- Supabase에서 실행할 SQL 스크립트

-- 프로필 테이블 (사용자 정보)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 블로그 포스트 테이블
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  author_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  tags TEXT[] DEFAULT '{}',
  featured_image TEXT,
  reading_time INTEGER DEFAULT 0
);

-- 태그 테이블 (선택사항 - 태그 관리용)
CREATE TABLE IF NOT EXISTS tags (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#3b82f6',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 댓글 테이블 (선택사항)
CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  content TEXT NOT NULL,
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_tags ON blog_posts USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_comments_post ON comments(post_id);
CREATE INDEX IF NOT EXISTS idx_comments_approved ON comments(approved, created_at DESC);

-- RLS (Row Level Security) 정책 설정
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- 프로필 정책
CREATE POLICY "프로필은 모든 사용자가 읽을 수 있음" ON profiles FOR SELECT USING (true);
CREATE POLICY "사용자는 자신의 프로필을 업데이트할 수 있음" ON profiles FOR UPDATE USING (auth.uid() = id);

-- 블로그 포스트 정책
CREATE POLICY "발행된 포스트는 모든 사용자가 읽을 수 있음" ON blog_posts FOR SELECT USING (published = true);
CREATE POLICY "작성자는 자신의 포스트를 관리할 수 있음" ON blog_posts FOR ALL USING (auth.uid() = author_id);

-- 태그 정책
CREATE POLICY "태그는 모든 사용자가 읽을 수 있음" ON tags FOR SELECT USING (true);

-- 댓글 정책
CREATE POLICY "승인된 댓글은 모든 사용자가 읽을 수 있음" ON comments FOR SELECT USING (approved = true);
CREATE POLICY "사용자는 댓글을 작성할 수 있음" ON comments FOR INSERT WITH CHECK (true);

-- 함수: updated_at 자동 업데이트
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- 트리거: updated_at 자동 업데이트
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_comments_updated_at BEFORE UPDATE ON comments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 함수: 사용자 생성 시 프로필 자동 생성
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'name', NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 트리거: 사용자 생성 시 프로필 자동 생성
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 샘플 데이터 삽입 (개발용)
INSERT INTO profiles (id, name, email, bio) VALUES 
  ('00000000-0000-0000-0000-000000000001', 'Dairium Admin', 'admin@dairium.com', 'Dairium 블로그 관리자입니다.')
ON CONFLICT (id) DO NOTHING;

INSERT INTO blog_posts (title, slug, content, excerpt, published, published_at, author_id, tags, featured_image) VALUES 
  (
    'Dairium 블로그에 오신 것을 환영합니다',
    'welcome-to-dairium-blog',
    '<h2>환영합니다!</h2><p>Dairium 블로그에 오신 것을 환영합니다. 이곳에서는 현대적인 웹 기술과 개발에 관한 다양한 이야기를 공유합니다.</p><h3>주요 특징</h3><ul><li>눈이 편안한 디자인</li><li>반응형 레이아웃</li><li>빠른 성능</li><li>SEO 최적화</li></ul><p>앞으로도 많은 관심과 사랑 부탁드립니다!</p>',
    'Dairium 블로그에 오신 것을 환영합니다. 현대적인 웹 기술과 개발에 관한 다양한 이야기를 공유합니다.',
    true,
    NOW(),
    '00000000-0000-0000-0000-000000000001',
    ARRAY['환영', '소개', '블로그'],
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop'
  ),
  (
    'Remix와 Supabase로 블로그 만들기',
    'building-blog-with-remix-supabase',
    '<h2>시작하기</h2><p>Remix와 Supabase를 사용하여 현대적인 블로그를 구축하는 방법을 알아보겠습니다.</p><h3>기술 스택</h3><ul><li>Remix - React 기반 풀스택 프레임워크</li><li>Supabase - 오픈소스 Firebase 대안</li><li>Tailwind CSS - 유틸리티 우선 CSS 프레임워크</li><li>TypeScript - 타입 안전성</li></ul><p>이 조합을 통해 빠르고 안정적인 웹 애플리케이션을 구축할 수 있습니다.</p>',
    'Remix와 Supabase를 사용하여 현대적인 블로그를 구축하는 방법을 알아보겠습니다.',
    true,
    NOW() - INTERVAL '1 day',
    '00000000-0000-0000-0000-000000000001',
    ARRAY['Remix', 'Supabase', '웹개발', '튜토리얼'],
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop'
  ),
  (
    '눈이 편안한 웹 디자인 가이드',
    'eye-friendly-web-design-guide',
    '<h2>색상 선택</h2><p>웹 디자인에서 사용자의 눈 건강을 고려한 색상 선택이 중요합니다.</p><h3>색상 팔레트</h3><ul><li>배경색: 부드러운 회색 톤</li><li>텍스트: 높은 대비의 어두운 색상</li><li>강조색: 차분한 파란색 계열</li></ul><p>이러한 색상 조합은 장시간 읽어도 피로감을 줄여줍니다.</p>',
    '웹 디자인에서 사용자의 눈 건강을 고려한 색상 선택과 디자인 가이드입니다.',
    true,
    NOW() - INTERVAL '2 days',
    '00000000-0000-0000-0000-000000000001',
    ARRAY['디자인', 'UX', '색상', '접근성'],
    'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop'
  )
ON CONFLICT (slug) DO NOTHING;
