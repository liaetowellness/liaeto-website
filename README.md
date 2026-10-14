# 리애토 웰니스 센터 — GitHub / Vercel 업로드용

현재 홈페이지를 Next.js 실행 구성으로 준비한 버전입니다. 기존 Sites 프로젝트는 별도 백업 ZIP에 보존했습니다.

## GitHub에 올리기
1. ZIP을 풀고 liaeto-vercel-ready 폴더 안의 파일을 GitHub 저장소 루트에 올리세요. ZIP 파일 자체를 올리는 방식이 아닙니다.
2. package.json, app, components, data, public, vercel.json이 저장소 루트에 있어야 합니다.
3. .env.example은 설정 예시입니다. 실제 비밀키가 있는 .env.local은 올리지 마세요.

## Vercel 배포
1. Vercel에서 Add New Project를 선택하고 위 GitHub 저장소를 Import합니다.
2. Framework Preset: Next.js, Root Directory: 저장소 루트, Build Command: npm run build. Output Directory는 기본값으로 둡니다.
3. Node 버전은 22 이상을 사용합니다.
4. 상담 연결 전에는 CONSULTATION_ENABLED=false로 유지하세요. 전화 문의 안내가 제공됩니다.
5. 실제 도메인이 정해지면 SITE_URL 환경변수에 https://도메인 형태로 입력하고 다시 배포합니다. canonical과 sitemap에 적용됩니다.

## 로컬 실행
Node.js 22 이상 설치 후 이 폴더에서 npm install, npm run dev를 실행합니다. 기본 주소 http://localhost:3000
검사: npm run typecheck / npm run build

## 상담 기능 연결
.env.example과 db/consultation-setup.sql을 참고하세요. Supabase 서버 전용 키, 보유 기간, 개인정보 정책 확정 후 연결합니다. 실제 저장이 확인된 경우에만 접수 완료를 표시합니다. 현재 실접수 DB 검증은 수행하지 않았습니다.
서버 전용 키를 NEXT_PUBLIC_ 변수로 만들지 마세요. 공개 전 남용 방지, 파기 운영과 실제 접근 권한을 검증하세요.

## 콘텐츠 관리
data/wellness.ts: 연락처·주소·이미지·서비스. components/wellness-page.tsx: 구성과 문구. app/wellness.css: 디자인.
사진은 제공 사진과 생성·편집 연출 이미지가 혼합되어 있습니다. 실제 센터·수업 기록으로 오인되지 않도록 안내를 유지하고 공개 사용 여부를 확인하세요.

Vercel 공식 안내: https://vercel.com/docs/frameworks/full-stack/nextjs
