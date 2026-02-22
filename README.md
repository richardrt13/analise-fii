# Análise e Gestão de Carteira de FIIs

Aplicação para análise e gestão de fundos imobiliários (FIIs).

Stack principal:
- Frontend: Next.js + TypeScript
- Backend: Supabase (Postgres + Auth + Realtime)
- Serverless: Edge functions para ingestão, parsing (Gemini) e regras
- Notificações: Twilio (SMS)

Este repositório contém múltiplos pacotes: `web/`, `supabase/`, `functions/` e `infra/`.

Veja o plano de implementação em `.cursor/plans/analise-gestao-fiis_6e53ff32.plan.md`.

## Getting started (local)

1. Instalar dependências (no monorepo raiz ou em cada pacote):
   - Node >= 18
2. Configurar variáveis de ambiente e secrets (Supabase, Gemini, Twilio, GitHub token).
3. Rodar o frontend:
   - cd web && npm install && npm run dev

