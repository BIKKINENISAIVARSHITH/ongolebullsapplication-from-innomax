-- Run this in Supabase SQL Editor to create the leads table.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  mobile text not null,
  investment_amount text default '',
  source text default 'ELSS Landing Page',
  created_at timestamptz default now()
);

-- Optional: enable RLS and add a policy if you want row-level security.
-- alter table public.leads enable row level security;
-- create policy "Service role can do all" on public.leads for all using (true);
