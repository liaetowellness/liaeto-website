-- 신규 상담 테이블만 추가. 기존 데이터는 변경하지 않습니다.
create table if not exists public.consultation_requests (
 id uuid primary key,
 name text not null,
 phone text not null,
 inquiry_type text not null,
 program text not null,
 preferred_date date,
 message text not null,
 consent boolean not null check (consent = true),
 privacy_version text not null,
 created_at timestamptz not null default now()
);
alter table public.consultation_requests enable row level security;
revoke all on public.consultation_requests from anon, authenticated;
-- 공개 SELECT/INSERT 정책을 만들지 않습니다. 서버 service_role만 접근합니다.
grant insert on public.consultation_requests to service_role;
