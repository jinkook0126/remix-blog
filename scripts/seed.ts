import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 데이터베이스 시딩을 시작합니다...");

  // 기존 데이터 삭제 (개발 환경에서만)
  await prisma.blogPost.deleteMany();
  await prisma.tag.deleteMany();

  // 태그 생성
  const tags = await prisma.tag.createMany({
    data: [
      {
        name: "웹개발",
        slug: "web-development",
        description: "웹 개발 관련 포스트",
        color: "#3b82f6",
      },
      {
        name: "React",
        slug: "react",
        description: "React 라이브러리 관련 포스트",
        color: "#61dafb",
      },
      {
        name: "TypeScript",
        slug: "typescript",
        description: "TypeScript 관련 포스트",
        color: "#3178c6",
      },
      {
        name: "블로그",
        slug: "blog",
        description: "블로그 운영 관련 포스트",
        color: "#10b981",
      },
      {
        name: "디자인",
        slug: "design",
        description: "UI/UX 디자인 관련 포스트",
        color: "#f59e0b",
      },
    ],
  });

  console.log(`✅ ${tags.count}개의 태그가 생성되었습니다.`);

  // 블로그 포스트 생성
  const posts = await prisma.blogPost.createMany({
    data: [
      {
        title: "Dairium 블로그에 오신 것을 환영합니다",
        slug: "welcome-to-dairium-blog",
        content: `
          <h2>환영합니다!</h2>
          <p>Dairium 블로그에 오신 것을 환영합니다. 이곳에서는 현대적인 웹 기술과 개발에 관한 다양한 이야기를 공유합니다.</p>
          
          <h3>주요 특징</h3>
          <ul>
            <li>눈이 편안한 디자인</li>
            <li>반응형 레이아웃</li>
            <li>빠른 성능</li>
            <li>SEO 최적화</li>
          </ul>
          
          <p>앞으로도 많은 관심과 사랑 부탁드립니다!</p>
        `,
        excerpt:
          "Dairium 블로그에 오신 것을 환영합니다. 현대적인 웹 기술과 개발에 관한 다양한 이야기를 공유합니다.",
        published: true,
        publishedAt: new Date(),
        tags: ["블로그", "환영", "소개"],
        featuredImage:
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
        readingTime: 3,
      },
      {
        title: "Remix와 Prisma로 블로그 만들기",
        slug: "building-blog-with-remix-prisma",
        content: `
          <h2>시작하기</h2>
          <p>Remix와 Prisma를 사용하여 현대적인 블로그를 구축하는 방법을 알아보겠습니다.</p>
          
          <h3>기술 스택</h3>
          <ul>
            <li>Remix - React 기반 풀스택 프레임워크</li>
            <li>Prisma - 현대적인 ORM</li>
            <li>Tailwind CSS - 유틸리티 우선 CSS 프레임워크</li>
            <li>TypeScript - 타입 안전성</li>
          </ul>
          
          <h3>Prisma 설정</h3>
          <p>Prisma를 사용하면 데이터베이스 스키마를 코드로 관리할 수 있고, 타입 안전한 쿼리를 작성할 수 있습니다.</p>
          
          <pre><code>npx prisma generate
npx prisma db push</code></pre>
          
          <p>이 조합을 통해 빠르고 안정적인 웹 애플리케이션을 구축할 수 있습니다.</p>
        `,
        excerpt:
          "Remix와 Prisma를 사용하여 현대적인 블로그를 구축하는 방법을 알아보겠습니다.",
        published: true,
        publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1일 전
        tags: ["웹개발", "Remix", "Prisma", "튜토리얼"],
        featuredImage:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
        readingTime: 8,
      },
      {
        title: "TypeScript로 타입 안전한 코드 작성하기",
        slug: "type-safe-code-with-typescript",
        content: `
          <h2>TypeScript의 장점</h2>
          <p>TypeScript는 JavaScript에 정적 타입을 추가한 언어로, 개발 시점에 오류를 잡을 수 있습니다.</p>
          
          <h3>주요 기능</h3>
          <ul>
            <li>정적 타입 검사</li>
            <li>자동 완성 및 IntelliSense</li>
            <li>리팩토링 안전성</li>
            <li>문서화 효과</li>
          </ul>
          
          <h3>실제 사용 예시</h3>
          <pre><code>interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): Promise<User> {
  // 타입 안전한 함수
}</code></pre>
          
          <p>TypeScript를 사용하면 더 안전하고 유지보수하기 쉬운 코드를 작성할 수 있습니다.</p>
        `,
        excerpt:
          "TypeScript를 사용하여 타입 안전한 코드를 작성하는 방법과 그 장점에 대해 알아보겠습니다.",
        published: true,
        publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2일 전
        tags: ["TypeScript", "웹개발", "프로그래밍"],
        featuredImage:
          "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
        readingTime: 6,
      },
      {
        title: "눈이 편안한 웹 디자인 가이드",
        slug: "eye-friendly-web-design-guide",
        content: `
          <h2>색상 선택</h2>
          <p>웹 디자인에서 사용자의 눈 건강을 고려한 색상 선택이 중요합니다.</p>
          
          <h3>색상 팔레트</h3>
          <ul>
            <li>배경색: 부드러운 회색 톤</li>
            <li>텍스트: 높은 대비의 어두운 색상</li>
            <li>강조색: 차분한 파란색 계열</li>
          </ul>
          
          <h3>폰트 선택</h3>
          <p>가독성이 좋은 폰트를 선택하고, 적절한 크기와 줄 간격을 설정하는 것이 중요합니다.</p>
          
          <h3>다크 모드 지원</h3>
          <p>사용자의 선호도에 따라 다크 모드와 라이트 모드를 지원하면 더 좋습니다.</p>
          
          <p>이러한 요소들을 고려하면 장시간 사용해도 피로감을 줄일 수 있습니다.</p>
        `,
        excerpt:
          "웹 디자인에서 사용자의 눈 건강을 고려한 색상 선택과 디자인 가이드입니다.",
        published: true,
        publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3일 전
        tags: ["디자인", "UX", "색상", "접근성"],
        featuredImage:
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop",
        readingTime: 5,
      },
      {
        title: "React Hooks 완벽 가이드",
        slug: "complete-guide-to-react-hooks",
        content: `
          <h2>React Hooks란?</h2>
          <p>React Hooks는 함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있게 해주는 기능입니다.</p>
          
          <h3>주요 Hooks</h3>
          <ul>
            <li>useState - 상태 관리</li>
            <li>useEffect - 사이드 이펙트 처리</li>
            <li>useContext - 컨텍스트 사용</li>
            <li>useReducer - 복잡한 상태 관리</li>
          </ul>
          
          <h3>실제 사용 예시</h3>
          <pre><code>function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}</code></pre>
          
          <p>Hooks를 사용하면 더 간결하고 재사용 가능한 컴포넌트를 만들 수 있습니다.</p>
        `,
        excerpt:
          "React Hooks의 기본 개념부터 실제 사용법까지 완벽하게 정리한 가이드입니다.",
        published: true,
        publishedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4일 전
        tags: ["React", "웹개발", "JavaScript"],
        featuredImage:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
        readingTime: 10,
      },
    ],
  });

  console.log(`✅ ${posts.count}개의 블로그 포스트가 생성되었습니다.`);
  console.log("🎉 데이터베이스 시딩이 완료되었습니다!");
}

main()
  .catch((e) => {
    console.error("❌ 시딩 중 오류가 발생했습니다:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
