import React from 'react';

export const metadata = {
  title: 'Análise e Gestão de FIIs',
  description: 'Dashboard para análise e gestão de carteira de FIIs'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <body style={{ fontFamily: 'Inter, system-ui, sans-serif', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}

