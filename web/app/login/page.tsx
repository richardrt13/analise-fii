import React from 'react';
import { supabase } from '../../src/lib/supabaseClient';

export default function LoginPage() {
  async function signIn(email: string) {
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

