// Vercel serverless function — receives the contact form and sends it via Resend.
// Env vars (set in the Vercel dashboard, never in the repo):
//   RESEND_API_KEY       required
//   CONTACT_TO_EMAIL     optional, defaults to the company Gmail
//   CONTACT_FROM_EMAIL   optional; until a domain is verified in Resend, onboarding@resend.dev
//                        only delivers to the email that owns the Resend account.
// JS clients post JSON and get JSON back. Without JS the browser posts a regular form and
// is redirected to /sent/ (or /es/sent/) on success, or back to the form on failure.

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'maxnovaluciglobal@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Maxnova & Luci Global <onboarding@resend.dev>';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const body = req.body || {};
  const lang = field(body, 'lang', 2) === 'es' ? 'es' : 'en';
  const reply = (ok, status, error) => {
    if (wantsJson) return res.status(status).json(ok ? { ok: true } : { error });
    const base = lang === 'es' ? '/es/' : '/';
    res.setHeader('Location', ok ? `${base}sent/` : `${base}#contact`);
    return res.status(303).end();
  };

  if (field(body, '_gotcha', 200)) return reply(true, 200); // honeypot filled: pretend success

  const name = field(body, 'name', 120);
  const company = field(body, 'company', 160);
  const email = field(body, 'email', 200);
  const service = field(body, 'service', 120);
  const message = field(body, 'message', 5000);

  if (!name || !EMAIL_RE.test(email) || !message) return reply(false, 400, 'Missing required fields.');

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
        subject: `New inquiry — Maxnova & Luci Global (${name})`,
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
