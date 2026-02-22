import { createClient, SupabaseClient } from '@supabase/supabase-js';

declare global {
  interface Window {
    __supabase?: SupabaseClient;
  }
}

export function getSupabase(): SupabaseClient | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) return null;
  if (typeof window === 'undefined') return null;
  if (!window.__supabase) {
    window.__supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return window.__supabase;
}

