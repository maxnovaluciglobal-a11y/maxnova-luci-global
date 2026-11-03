// Vercel serverless function — measures whether each product answers right now.
// The result is cached at the edge for 60 s, so visitors never trigger a burst of requests.
// It reports only what it measured: a failed or missing check is never shown as online.

const TARGETS = [
  { id: 'dypos', url: 'https://www.dypos.app/' },
  { id: 'moyiq', url: 'https://moyiq.app/' },
  { id: 'esmalia', url: 'https://esmalia.com/' },
];
const TIMEOUT_MS = 4000;

async function probe({ id, url }) {
  const started = performance.now();
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { 'User-Agent': 'maxnovaluci-status/1.0 (+https://maxnovaluci.com)' },
    });
    await res.body?.cancel();
    return { id, ok: res.ok, status: res.status, ms: Math.round(performance.now() - started) };
  } catch {
    return { id, ok: false, status: 0, ms: null };
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const nodes = await Promise.all(TARGETS.map(probe));
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
  return res.status(200).json({ checkedAt: new Date().toISOString(), region: process.env.VERCEL_REGION || null, nodes });
}
