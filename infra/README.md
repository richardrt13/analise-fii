Infra & CI

This folder will contain infra-as-code, GitHub Actions workflows and deployment notes for Vercel and Supabase.

Steps to configure:
1. Create GitHub repository and push code.
2. Create Supabase project and run migrations in `supabase/migrations/001_init.sql`.
3. In Vercel/GitHub, add necessary secrets (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, GEMINI_KEY, TWILIO_SID, TWILIO_TOKEN, TWILIO_FROM).

