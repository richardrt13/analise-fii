-- Inicialização do schema principal para aplicação de gestão de FIIs
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz default now()
);

create table if not exists assets (
  id uuid primary key default gen_random_uuid(),
  ticker text not null,
  name text,
  vpa numeric,
  created_at timestamptz default now()
);

create table if not exists quotes (
  id uuid primary key default gen_random_uuid(),
  asset_id uuid references assets(id) on delete cascade,
  price numeric not null,
  recorded_at timestamptz not null
);

create table if not exists holdings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  asset_id uuid references assets(id) on delete cascade,
  quantity numeric not null,
  avg_price numeric,
  created_at timestamptz default now()
);

create table if not exists reports (
  id uuid primary key default gen_random_uuid(),
  asset_id uuid references assets(id) on delete cascade,
  source text,
  raw jsonb,
  parsed jsonb,
  published_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists alerts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  asset_id uuid references assets(id),
  type text,
  severity int,
  meta jsonb,
  created_at timestamptz default now(),
  acknowledged boolean default false
);

create table if not exists risk_rules (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  name text,
  config jsonb,
  enabled boolean default true,
  created_at timestamptz default now()
);

create table if not exists jobs_log (
  id uuid primary key default gen_random_uuid(),
  name text,
  status text,
  details jsonb,
  created_at timestamptz default now()
);

