// Vercel serverless function — receives the contact form and sends it via
// Resend. Needs RESEND_API_KEY set in the Vercel project's env vars (same
// provider already used by financeospro.com/moyiq.app). Without that key
// configured, this returns 500 and the form's own JS falls back to mailto,
// so the form never dead-ends either way.

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'maxnovaluciglobal@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'MAXNOVA & Luci Global <onboarding@resend.dev>';

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Contact form is not configured yet.' });
  }

  if ((req.body?._gotcha || '').toString().trim()) {
    // Honeypot field filled in — silently pretend success, don't email it.
    return res.status(200).json({ ok: true });
  }

  const name = (req.body?.name || '').toString().trim();
  const company = (req.body?.company || '').toString().trim();
  const email = (req.body?.email || '').toString().trim();
  const service = (req.body?.service || '').toString().trim();
  const message = (req.body?.message || '').toString().trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || '—')}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Area of interest:</strong> ${escapeHtml(service || '—')}</p>
    <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New inquiry — MAXNOVA & Luci Global (${name})`,
        html
      })
    });

    if (!resendRes.ok) {
      const detail = await resendRes.text();
      console.error('Resend error:', resendRes.status, detail);
      return res.status(502).json({ error: 'Could not send message.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return res.status(500).json({ error: 'Unexpected error.' });
  }
};
