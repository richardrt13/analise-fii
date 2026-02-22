// Minimal Twilio helper — uses REST API directly to avoid adding twilio SDK by default.
import fetch from 'node-fetch';

export async function sendSms(accountSid: string, authToken: string, from: string, to: string, body: string) {
  const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
  const params = new URLSearchParams();
  params.append('From', from);
  params.append('To', to);
  params.append('Body', body);

  const res = await fetch(url, {
    method: 'POST',
    body: params,
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Twilio send failed: ${res.status} ${txt}`);
  }
  return await res.json();
}

