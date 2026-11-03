import { products, routes, SITE_URL, CONTACT_EMAIL, LEGAL_NAME, BRAND_NAME, DOC_NUMBER, FILED_ISO, FOUNDER, SUNBIZ_URL, type Copy, type PageKey } from '../i18n/content';

// JSON-LD mirrors only what the page shows. Add address, phone and sameAs when Walter confirms them.
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const FOUNDER_ID = `${SITE_URL}/#founder`;
const url = (key: PageKey, t: Copy) => new URL(routes[key][t.lang], SITE_URL).href;

const organization = (t: Copy) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: BRAND_NAME,
  legalName: LEGAL_NAME,
  alternateName: ['Maxnova & Luci', 'Maxnova Luci Global'],
  url: SITE_URL,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  email: CONTACT_EMAIL,
  description: t.meta.home.description,
  foundingDate: FILED_ISO,
  foundingLocation: { '@type': 'AdministrativeArea', name: 'Florida, United States' },
  identifier: { '@type': 'PropertyValue', propertyID: 'Florida Department of State document number', value: DOC_NUMBER, url: SUNBIZ_URL },
  areaServed: ['United States', 'Latin America'],
  founder: { '@id': FOUNDER_ID },
  brand: products.map((p) => ({ '@type': 'Brand', name: p.name, url: p.url })),
  knowsAbout: t.servicesPage.items.map((s) => s.title),
});

const founder = (t: Copy) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': FOUNDER_ID,
  name: FOUNDER,
  jobTitle: t.companyPage.founderRole,
  worksFor: { '@id': ORG_ID },
  knowsAbout: ['Telecommunications', 'Software', 'SaaS'],
});

const website = (t: Copy) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': SITE_ID,
  name: BRAND_NAME,
  url: `${SITE_URL}/`,
  inLanguage: ['en', 'es'],
  publisher: { '@id': ORG_ID },
});

const breadcrumbs = (t: Copy, key: PageKey) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: BRAND_NAME, item: url('home', t) },
    { '@type': 'ListItem', position: 2, name: t.meta[key].title.split(' | ')[0], item: url(key, t) },
  ],
});

const faq = (items: { q: string; a: string }[], t: Copy) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: t.lang,
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

const productApps = (t: Copy) =>
  products.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${url('products', t)}#${p.id}`,
    name: p.name,
    url: p.url,
    applicationCategory: p.category,
    operatingSystem: 'Web',
    description: p.summary[t.lang],
    publisher: { '@id': ORG_ID },
    offers: { '@type': 'Offer', price: p.lowPrice, priceCurrency: 'USD', url: p.url },
  }));

const services = (t: Copy) =>
  t.servicesPage.items.map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url('services', t)}#${s.id}`,
    name: s.title,
    description: s.who,
    provider: { '@id': ORG_ID },
    areaServed: ['United States', 'Latin America'],
    url: `${url('services', t)}#${s.id}`,
  }));

export function schema(t: Copy, key: PageKey): object[] {
  switch (key) {
    case 'home':
      return [organization(t), website(t), founder(t)];
    case 'products':
      return [organization(t), ...productApps(t), breadcrumbs(t, key)];
    case 'services':
      return [organization(t), ...services(t), faq(t.servicesPage.faq, t), breadcrumbs(t, key)];
    case 'company':
      return [organization(t), founder(t), { '@context': 'https://schema.org', '@type': 'AboutPage', url: url('company', t), mainEntity: { '@id': ORG_ID } }, faq(t.companyPage.faq, t), breadcrumbs(t, key)];
    default:
      return [breadcrumbs(t, key)];
  }
}
