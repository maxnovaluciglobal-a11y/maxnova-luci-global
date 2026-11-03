// Vercel serverless function — receives the contact form and sends it via Resend.
// Env vars (set in the Vercel dashboard, never in the repo):
//   RESEND_API_KEY       required
//   CONTACT_TO_EMAIL     optional, defaults to the company Gmail
//   CONTACT_FROM_EMAIL   optional; set it to web@maxnovaluci.com once the domain is verified in Resend.
//                        The onboarding@resend.dev default only delivers to the Resend account owner.
// JS clients post JSON and get JSON back. Without JS the browser posts a regular form and
// is redirected to /sent/ (or /es/sent/) on success, or back to the form on failure.

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'maxnovaluciglobal@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Maxnova & Luci Global <onboarding@resend.dev>';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_ORIGINS = new Set(['https://maxnovaluci.com']);
const LIMIT = 5; // messages per IP per window, per function instance. The Vercel Firewall rule is the real limit.
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map();

function overLimit(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > LIMIT;
}

function allowedOrigin(origin) {
  if (!origin) return true; // no-JS form posts from some browsers omit it; the honeypot and limits still apply
  if (ALLOWED_ORIGINS.has(origin)) return true;
  return /^https:\/\/maxnova-luci-global-[a-z0-9-]+\.vercel\.app$/.test(origin); // preview deployments
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function field(body, key, max) {
  return (body?.[key] ?? '').toString().trim().slice(0, max);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const wantsJson = (req.headers['content-type'] || '').includes('application/json');
  if (!allowedOrigin(req.headers.origin)) return res.status(403).json({ error: 'Forbidden' });

  let body = {};
  try {
    body = req.body || {};
  } catch {
    return res.status(400).json({ error: 'Invalid body.' });
  }
  const lang = field(body, 'lang', 2) === 'es' ? 'es' : 'en';
  const reply = (ok, status, error) => {
    if (wantsJson) return res.status(status).json(ok ? { ok: true } : { error });
    const base = lang === 'es' ? '/es/' : '/';
    res.setHeader('Location', ok ? `${base}sent/` : `${base}?error=1#contact`);
    return res.status(303).end();
  };

  if (field(body, '_gotcha', 200)) return reply(true, 200); // honeypot filled: pretend success

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  if (ip && overLimit(ip)) return reply(false, 429, 'Too many messages.');

  const name = field(body, 'name', 120);
  const company = field(body, 'company', 160);
  const email = field(body, 'email', 200);
  const service = field(body, 'service', 120);
  const message = field(body, 'message', 5000);

  if (!name || !EMAIL_RE.test(email) || !service || !message) return reply(false, 400, 'Missing required fields.');

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not set');
    return reply(false, 500, 'Contact form is not configured yet.');
  }

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || '—')}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Topic:</strong> ${escapeHtml(service || '—')}</p>
    <p><strong>Page language:</strong> ${lang}</p>
    <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New inquiry — Maxnova & Luci Global (${name.replace(/[\r\n]+/g, ' ')})`,
        html,
      }),
    });

    if (!resendRes.ok) {
      console.error('Resend error:', resendRes.status, await resendRes.text());
      return reply(false, 502, 'Could not send message.');
    }
    return reply(true, 200);
  } catch (err) {
    console.error('Contact form error:', err);
    return reply(false, 500, 'Unexpected error.');
  }
}
