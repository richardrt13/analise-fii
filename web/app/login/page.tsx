'use client';
import React from 'react';
import { getSupabase } from '../../src/lib/supabaseClient';

export default function LoginPage() {
  async function signIn(email: string) {
    const supabase = getSupabase();
    if (!supabase) {
      alert('Supabase não configurado. Defina NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY.');
      return;
    }
    await supabase.auth.signInWithOtp({ email });
    alert('Verifique seu email para login (magic link / OTP).');
  }

  return (
    <main style={{padding:24}}>
      <h2>Login</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget as HTMLFormElement);
        const email = data.get('email') as string;
        signIn(email);
      }}>
        <input name="email" type="email" placeholder="seu@exemplo.com" required />
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}

