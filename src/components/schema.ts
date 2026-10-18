import { holdings, SITE_URL, CONTACT_EMAIL, LEGAL_NAME, BRAND_NAME, type Copy } from '../i18n/content';

// JSON-LD mirrors only what the page shows. Add address, phone and sameAs when Walter confirms them.
export function schema(t: Copy): object[] {
  const orgId = `${SITE_URL}/#organization`;
  const live = holdings.filter((h) => h.url);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': orgId,
      name: BRAND_NAME,
      legalName: LEGAL_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/apple-touch-icon.png`,
      email: CONTACT_EMAIL,
      description: t.meta.description,
      areaServed: ['US', 'Latin America'],
      founder: { '@type': 'Person', name: 'Walter La Madriz', jobTitle: t.letter.role },
      brand: live.map((h) => ({ '@type': 'Brand', name: h.name, url: h.url })),
      knowsAbout: t.services.items.map((s) => s.title),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: BRAND_NAME,
      url: new URL(t.path, SITE_URL).href,
      inLanguage: t.lang,
      publisher: { '@id': orgId },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: t.lang,
      mainEntity: t.faq.items.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];
}
