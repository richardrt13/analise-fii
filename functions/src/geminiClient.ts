import fetch from 'node-fetch';

const GEMINI_URL = 'https://api.gemini.example/v2.5/flash'; // replace with real endpoint

export async function callGeminiFlash(apiKey: string, content: string | Buffer) {
  const res = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content })
  });
  if (!res.ok) throw new Error(`Gemini call failed: ${res.status}`);
  return await res.json();
}

