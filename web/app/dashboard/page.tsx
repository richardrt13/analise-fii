import React, { useEffect, useState } from 'react';
import { supabase } from '../../src/lib/supabaseClient';

export default function DashboardPage() {
  const [holdings, setHoldings] = useState<any[]>([]);
  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const { data: h } = await supabase.from('holdings').select('*,assets(*)');
      const { data: a } = await supabase.from('alerts').select('*').order('created_at', { ascending: false }).limit(10);
      setHoldings(h || []);
      setAlerts(a || []);
    }
    load();
  }, []);

  return (
    <main style={{padding:24}}>
      <h1>Dashboard</h1>
      <section>
        <h2>Posições</h2>
        <ul>
          {holdings.map(h => (
            <li key={h.id}>{h.assets?.ticker} — {h.quantity} cotas</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Alertas recentes</h2>
        <ul>
          {alerts.map(al => (
            <li key={al.id}>{al.type} — {al.created_at}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

