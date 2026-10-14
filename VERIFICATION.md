# ZIP 검증

- 현재 프로젝트의 최종 페이지와 이미지를 복사했습니다.
- Next.js 16.3.4 production build --webpack 통과.
- 빌드 중 TypeScript 검사 통과.
- 홈, 소개, 프로그램, 교육, 개인정보, 상담 API, sitemap, robots 구성 포함.
- node_modules, .next, .git, 실제 .env 비밀키, Sites 계정 설정은 업로드용 ZIP에서 제외.
- 실제 Vercel 계정 배포와 Supabase 실접수 검증은 수행하지 않았습니다.
- npm install로 설치할 의존성을 package.json에 선언했습니다. 기존 PC의 설치 의존성으로 로컬 빌드를 검증했으며 새 환경의 의존성 재설치는 수행하지 않았습니다.
