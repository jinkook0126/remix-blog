# Dairium Blog

현대적이고 눈이 편안한 디자인의 블로그 플랫폼입니다. Remix와 Supabase를 사용하여 구축되었습니다.

## 🚀 주요 특징

- **눈이 편안한 디자인**: 과학적으로 검증된 색상 팔레트와 타이포그래피
- **완벽한 반응형**: 모든 디바이스에서 최적화된 경험
- **빠른 성능**: Remix와 Supabase의 강력한 조합
- **SEO 최적화**: 검색 엔진 최적화를 통한 가시성 향상
- **현대적인 기술 스택**: TypeScript, Tailwind CSS, ESLint (Airbnb 스타일)

## 🛠 기술 스택

- **프론트엔드**: Remix, React, TypeScript
- **스타일링**: Tailwind CSS
- **데이터베이스**: Prisma + PostgreSQL
- **ORM**: Prisma
- **코드 품질**: ESLint (Airbnb 설정)

## 📦 설치 및 실행

### 1. 저장소 클론

```bash
git clone <repository-url>
cd dairium-blog
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

`.env` 파일을 생성하고 다음 변수들을 설정하세요:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/dairium_blog"
SITE_URL=https://dairium-blog.com
SITE_NAME=Dairium Blog
SITE_DESCRIPTION=A modern blog built with Remix and Prisma
```

### 4. 데이터베이스 설정

1. PostgreSQL 데이터베이스를 설정하세요.
2. Prisma 마이그레이션을 실행하세요:

```bash
npx prisma migrate dev
```

3. 시드 데이터를 추가하세요:

```bash
npm run db:seed
```

### 5. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 확인하세요.

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: 파란색 계열 (#0ea5e9)
- **Secondary**: 회색 계열 (#64748b)
- **Accent**: 노란색 계열 (#eab308)
- **Highlight**: 다양한 강조 색상 (파란색, 초록색, 보라색, 주황색, 분홍색)

### 타이포그래피

- **Sans**: Inter (본문)
- **Serif**: Georgia (제목)
- **Mono**: JetBrains Mono (코드)

## 📁 프로젝트 구조

```
dairium-blog/
├── app/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── BlogCard.tsx
│   ├── lib/                 # 유틸리티 및 설정
│   │   └── database.ts
│   ├── routes/              # 페이지 라우트
│   │   ├── _index.tsx       # 홈페이지
│   │   ├── blog._index.tsx  # 블로그 목록
│   │   ├── blog.$slug.tsx   # 개별 포스트
│   │   ├── tags._index.tsx  # 태그 목록
│   │   └── tags.$tag.tsx    # 태그별 포스트
│   ├── styles/              # 스타일 파일
│   │   └── globals.css
│   ├── types/               # TypeScript 타입 정의
│   │   ├── blog.ts
│   │   └── index.ts
│   └── root.tsx             # 루트 컴포넌트
├── prisma/                  # Prisma 스키마
│   └── schema.prisma
├── scripts/                 # 유틸리티 스크립트
│   └── seed.ts
└── README.md
```

## 🚀 배포

### Vercel 배포

1. Vercel에 프로젝트를 연결하세요.
2. 환경 변수를 설정하세요.
3. 자동 배포가 시작됩니다.

### 기타 플랫폼

Remix는 다양한 플랫폼에서 배포할 수 있습니다:

- Netlify
- Railway
- Fly.io
- AWS

## 📝 블로그 포스트 작성

Prisma를 통해 데이터베이스에 직접 데이터를 추가하거나, 관리자 인터페이스를 구축할 수 있습니다.

### 필수 필드

- `title`: 포스트 제목
- `slug`: URL 슬러그 (고유해야 함)
- `content`: HTML 형태의 포스트 내용
- `excerpt`: 포스트 요약
- `published`: 발행 여부 (boolean)
- `publishedAt`: 발행 날짜
- `authorId`: 작성자 ID
- `tags`: 태그 배열

### 데이터베이스 관리

```bash
# 데이터베이스 리셋 및 시드
npm run db:reset

# 시드 데이터만 추가
npm run db:seed
```

## 🔧 개발

### 코드 스타일

이 프로젝트는 Airbnb ESLint 설정을 사용합니다:

```bash
npm run lint        # 린트 검사
npm run lint:fix    # 린트 자동 수정
```

### 타입 체크

```bash
npm run typecheck
```

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 연락처

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.

---

Made with ❤️ using Remix & Prisma
