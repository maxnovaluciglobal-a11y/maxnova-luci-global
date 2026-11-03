import { routes, lastmod, SITE_URL, type PageKey } from '../i18n/content';

// Generated from the route table, so every page and its translation stay paired.
export const GET = () => {
  const alts = (key: PageKey) =>
    `<xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${routes[key].en}"/>` +
    `<xhtml:link rel="alternate" hreflang="es" href="${SITE_URL}${routes[key].es}"/>` +
    `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${routes[key].en}"/>`;
  const urls = (Object.keys(routes) as PageKey[]).flatMap((key) =>
    (['en', 'es'] as const).map((lang) => `<url><loc>${SITE_URL}${routes[key][lang]}</loc><lastmod>${lastmod[key]}</lastmod>${alts(key)}</url>`),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
