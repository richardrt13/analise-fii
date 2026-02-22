import fetch from 'node-fetch';

export async function fetchCvmFundsList(cvmApiUrl: string) {
  // This is a small helper to fetch from a configurable CVM endpoint.
  // The exact endpoint and parsing should be adapted to the CVM dataset you want to consume.
  const url = cvmApiUrl;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`CVM fetch failed: ${res.status}`);
  const text = await res.text();
  // TODO: parse CSV/JSON depending on endpoint
  return { raw: text };
}

