create table public.learner_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb check (jsonb_typeof(data) = 'object' and octet_length(data::text) < 1048576),
  updated_at timestamptz not null default now()
);
alter table public.learner_state enable row level security;
revoke all on public.learner_state from anon;
grant select, insert, update, delete on public.learner_state to authenticated;
create policy "Read own learning data" on public.learner_state for select to authenticated using ((select auth.uid()) = user_id);
create policy "Insert own learning data" on public.learner_state for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Update own learning data" on public.learner_state for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Delete own learning data" on public.learner_state for delete to authenticated using ((select auth.uid()) = user_id);
