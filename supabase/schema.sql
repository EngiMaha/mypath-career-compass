-- MyPath — admin analytics schema
-- One-time setup: Supabase Dashboard → SQL Editor → New query → paste this
-- whole file → Run.
--
-- What this creates:
--   1. A `page_views` table that stores anonymous visit events
--      (no IP address, no name/email, no cookies).
--   2. Row Level Security so that:
--      - anyone (the "anon" role used by the public site) can INSERT a row
--        (that's how a visit gets logged), but can NOT read any rows back.
--      - only a signed-in ("authenticated") user — i.e. the admin account
--        you create under Authentication → Users — can SELECT (read) rows.
--   This is what makes admin.html safe to ship publicly: the data is only
--   ever readable after a real login, regardless of who finds the URL.

create table if not exists page_views (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  path text not null,
  referrer text,
  device text,
  session_id text
);

alter table page_views enable row level security;

drop policy if exists "Allow anonymous insert" on page_views;
create policy "Allow anonymous insert"
  on page_views
  for insert
  to anon
  with check (true);

drop policy if exists "Allow authenticated read" on page_views;
create policy "Allow authenticated read"
  on page_views
  for select
  to authenticated
  using (true);

-- Optional: keep the table from growing forever on the free tier.
-- Run manually whenever you like, or set up a Supabase cron job for it:
--   delete from page_views where created_at < now() - interval '180 days';
