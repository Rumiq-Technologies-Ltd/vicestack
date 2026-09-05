-- Leads captured from the contact form, growth audit and growth stack tool.
-- One table for all three sources; `payload` holds the source-specific extras.

create table if not exists public.leads (
  id               uuid primary key default gen_random_uuid(),
  source           text not null check (source in ('contact', 'growth-audit', 'growth-stack')),
  name             text not null,
  email            text not null,
  phone            text,
  company          text,
  website          text,
  country          text,
  industry         text,
  services_needed  text[] not null default '{}',
  budget_band      text,
  message          text,
  payload          jsonb not null default '{}'::jsonb,
  status           text not null default 'new'
                   check (status in ('new', 'contacted', 'qualified', 'won', 'lost', 'spam')),
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

comment on table public.leads is 'Inbound enquiries from every ViceStack lead-capture surface.';
comment on column public.leads.payload is 'Source-specific data: growth audit areas, or the full growth stack questionnaire answers.';

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx     on public.leads (status);
create index if not exists leads_source_idx     on public.leads (source);
create index if not exists leads_email_idx      on public.leads (email);

-- Keep updated_at honest.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- No anonymous access. Writes happen server-side with the service role key,
-- which bypasses RLS; enabling it with no policy denies everything else.
alter table public.leads enable row level security;
