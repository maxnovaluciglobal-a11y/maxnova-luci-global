// All site copy lives here, one object per language. Edit text here, not in the components.
// Only publish facts that can be verified (see PRODUCT.md → Evidence on Hand).

export type Lang = 'en' | 'es';
export type PageKey = 'home' | 'products' | 'services' | 'company' | 'log' | 'privacy' | 'terms';

export const SITE_URL = 'https://maxnovaluci.com';
// Switch to 'hola@maxnovaluci.com' (also in public/llms.txt) once Cloudflare Email Routing forwards it.
export const CONTACT_EMAIL = 'maxnovaluciglobal@gmail.com';
export const LEGAL_NAME = 'MAXNOVA & LUCI GLOBAL LLC';
export const BRAND_NAME = 'Maxnova & Luci Global';
export const DOC_NUMBER = 'L26000222229';
export const FILED_ISO = '2026-04-20';
export const EFFECTIVE_ISO = '2026-04-21';
export const FOUNDER = 'Walter La Madriz';
export const SUNBIZ_URL =
  'https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail?inquiryType=DocumentNumber&aggregateId=flal-l26000222229-008c3fa8-b3e4-4293-ab13-3261c8b1f5b3&directionType=Initial&searchNameOrder=MAXNOVALUCIGLOBAL%20L260002222290&searchTerm=L26000222229';

export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { en: '/', es: '/es/' },
  products: { en: '/products/', es: '/es/productos/' },
  services: { en: '/services/', es: '/es/servicios/' },
  company: { en: '/company/', es: '/es/empresa/' },
  log: { en: '/log/', es: '/es/registro/' },
  privacy: { en: '/privacy/', es: '/es/privacidad/' },
  terms: { en: '/terms/', es: '/es/terminos/' },
};

/** Date of the last real content change per page. Used by the sitemap: update it when the page changes. */
export const lastmod: Record<PageKey, string> = {
  home: '2026-11-03',
  products: '2026-11-03',
  services: '2026-11-03',
  company: '2026-11-03',
  log: '2026-11-03',
  privacy: '2026-11-03',
  terms: '2026-11-03',
};

export type ProductId = 'dypos' | 'moyiq' | 'esmalia';

export interface Product {
  id: ProductId;
  name: string;
  url: string;
  urlLabel: string;
  demo: string;
  sector: Record<Lang, string>;
  market: Record<Lang, string>;
  price: Record<Lang, string>;
  summary: Record<Lang, string>;
  notYet: Record<Lang, string>;
  /** schema.org applicationCategory */
  category: string;
  /** Lowest public monthly price in USD, as a schema.org value. */
  lowPrice: string;
  highPrice: string;
  offersUrl: string;
}

export const products: Product[] = [
  {
    id: 'dypos',
    name: 'DypOS',
    url: 'https://www.dypos.app',
    urlLabel: 'dypos.app',
    demo: 'https://app.dypos.app/demo?view=owner',
    sector: { en: 'Restaurants', es: 'Restaurantes' },
    market: { en: 'Latin America and Spain', es: 'Latinoamérica y España' },
    price: {
      en: 'From US$49 a month. 14 days free, no card.',
      es: 'Desde US$49 al mes. 14 días gratis, sin tarjeta.',
    },
    summary: {
      en: 'Point of sale, live kitchen, inventory and finance on one platform. At the end of the month a restaurant sees its real P&L, with cost per dish and payroll.',
      es: 'Punto de venta, cocina en vivo, inventario y finanzas en una sola plataforma. A fin de mes el restaurante ve su P&L real, con costo por plato y nómina.',
    },
    notYet: {
      en: 'Direct submission to the Spanish tax agency is still in development.',
      es: 'El envío directo a la agencia tributaria de España sigue en desarrollo.',
    },
    category: 'BusinessApplication',
    lowPrice: '49',
    highPrice: '89',
    offersUrl: 'https://www.dypos.app/#precios',
  },
  {
    id: 'moyiq',
    name: 'MOY IQ',
    url: 'https://moyiq.app',
    urlLabel: 'moyiq.app',
    demo: 'https://demo.moyiq.app/app/?demo=true',
    sector: { en: 'Personal finance', es: 'Finanzas personales' },
    market: { en: '11 countries in the Americas and Europe', es: '11 países de América y Europa' },
    price: {
      en: 'Free plan. Pro at US$4.99 a month or US$39.99 a year.',
      es: 'Plan gratis. Pro a US$4,99 al mes o US$39,99 al año.',
    },
    summary: {
      en: 'Log expenses or import a bank file and see where the money goes, with an IQ Score from 0 to 100 that explains every number. No bank login required.',
      es: 'Registras tus gastos o importas el archivo del banco y ves en qué se va el dinero, con un IQ Score de 0 a 100 que explica cada número. Sin conectar el banco.',
    },
    notYet: {
      en: 'It does not sync with banks automatically. That is a privacy decision: you import the file.',
      es: 'No se sincroniza sola con los bancos. Es una decisión de privacidad: tú importas el archivo.',
    },
    category: 'FinanceApplication',
    lowPrice: '0',
    highPrice: '39.99',
    offersUrl: 'https://moyiq.app/',
  },
  {
    id: 'esmalia',
    name: 'Esmalia',
    url: 'https://esmalia.com',
    urlLabel: 'esmalia.com',
    demo: 'https://esmalia.com/demo',
    sector: { en: 'Dental clinics', es: 'Clínicas dentales' },
    market: { en: 'Chile, Peru, Mexico, Colombia, Argentina', es: 'Chile, Perú, México, Colombia, Argentina' },
    price: {
      en: 'From US$19.99 a month. 14 days free, no card.',
      es: 'Desde US$19,99 al mes. 14 días gratis, sin tarjeta.',
    },
    summary: {
      en: 'Appointment confirmations over WhatsApp, the patient chart and odontogram in one place, and a daily view of what was collected and who still owes.',
      es: 'Confirmación de citas por WhatsApp, ficha y odontograma en un mismo lugar, y una vista diaria de lo cobrado y de quién debe.',
    },
    notYet: {
      en: 'Reception sends each WhatsApp reminder with one tap. The official sender is still in approval with Meta.',
      es: 'Recepción envía cada recordatorio de WhatsApp con un toque. El remitente oficial sigue en habilitación con Meta.',
    },
    category: 'BusinessApplication',
    lowPrice: '19.99',
    highPrice: '49.99',
    offersUrl: 'https://esmalia.com/precios',
  },
];

/** Honest caption for each product screen: what it is and when it was captured. */
export const screenCaptions: Record<ProductId, Record<Lang, string>> = {
  dypos: { en: 'Real screen from the public demo, with sample data. Captured November 2, 2026.', es: 'Pantalla real de la demo pública, con datos de ejemplo. Capturada el 2 de noviembre de 2026.' },
  moyiq: { en: 'Public home page, captured November 3, 2026. The demo asks for a name and email.', es: 'Página pública de inicio, capturada el 3 de noviembre de 2026. La demo pide nombre y email.' },
  esmalia: { en: 'Public home page, captured November 3, 2026. The demo asks for a name and email.', es: 'Página pública de inicio, capturada el 3 de noviembre de 2026. La demo pide nombre y email.' },
};

export interface LogEntry {
  date: string;
  scope: 'DypOS' | 'MOY IQ' | 'Esmalia' | 'Company';
  text: Record<Lang, string>;
}

// Dated, public-safe facts only. Newest first. Never add customer names, security details or revenue.
export const log: LogEntry[] = [
  {
    date: '2026-11-03',
    scope: 'DypOS',
    text: {
      en: 'Sales periods and targets, tip sharing, internal consumption and expense categories per supplier.',
      es: 'Períodos y metas de venta, reparto de propinas, consumo interno y categoría de gasto por proveedor.',
    },
  },
  {
    date: '2026-11-03',
    scope: 'Company',
    text: {
      en: 'New corporate site on maxnovaluci.com, with live checks of each product.',
      es: 'Nueva web corporativa en maxnovaluci.com, con chequeos en vivo de cada producto.',
    },
  },
  {
    date: '2026-11-02',
    scope: 'DypOS',
    text: {
      en: 'Offline operation: kitchen tickets by area, and cash or external card terminal payments with no internet.',
      es: 'Operación sin internet: comandas por área y cobro en efectivo o datáfono externo sin conexión.',
    },
  },
  {
    date: '2026-10-31',
    scope: 'MOY IQ',
    text: {
      en: 'One-task expense entry with recent categories, tested on a real iPhone.',
      es: 'Registro de gastos en una sola tarea, con categorías recientes, probado en un iPhone real.',
    },
  },
  {
    date: '2026-10-30',
    scope: 'MOY IQ',
    text: {
      en: 'Calendar of movements and due dates, a budget assistant and tracking of money people owe you.',
      es: 'Calendario de movimientos y vencimientos, asistente de presupuesto y seguimiento de lo que te deben.',
    },
  },
  {
    date: '2026-10-28',
    scope: 'Esmalia',
    text: {
      en: 'Large 3D dental images: resumable uploads up to 200 MB, with 3D and DICOM viewers.',
      es: 'Imágenes dentales 3D grandes: subida reanudable de hasta 200 MB, con visores 3D y DICOM.',
    },
  },
  {
    date: '2026-10-27',
    scope: 'Esmalia',
    text: {
      en: 'Uptime monitoring of the service every minute, with alerts.',
      es: 'Monitoreo de disponibilidad del servicio cada minuto, con alertas.',
    },
  },
  {
    date: '2026-10-19',
    scope: 'DypOS',
    text: {
      en: 'Isolated staging, deploys through CI with smoke tests, and a tested restore from offsite backups.',
      es: 'Staging aislado, despliegues con CI y pruebas de humo, y restauración probada desde respaldos externos.',
    },
  },
  {
    date: '2026-10-13',
    scope: 'DypOS',
    text: {
      en: 'Digital menu with pairing suggestions, nine languages and margin analytics.',
      es: 'Carta digital con sugerencias de maridaje, nueve idiomas y analítica de margen.',
    },
  },
  {
    date: '2026-10-08',
    scope: 'MOY IQ',
    text: {
      en: 'App available in English, Portuguese and German, with recurring movements.',
      es: 'App disponible en inglés, portugués y alemán, con movimientos fijos.',
    },
  },
  {
    date: '2026-04-20',
    scope: 'Company',
    text: {
      en: 'MAXNOVA & LUCI GLOBAL LLC filed in Florida, document number L26000222229.',
      es: 'MAXNOVA & LUCI GLOBAL LLC registrada en Florida, número de documento L26000222229.',
    },
  },
];

const en = {
  lang: 'en' as Lang,
  locale: 'en_US',
  altLang: 'es' as Lang,
  altLabel: 'Español',
  altShort: 'ES',
  skip: 'Skip to content',
  nav: {
    label: 'Main',
    menu: 'Menu',
    products: 'Products',
    services: 'Services',
    company: 'Company',
    log: 'Log',
    cta: 'Talk to us',
  },
  dateFmt: 'en-US',
  meta: {
    home: {
      title: 'Maxnova & Luci Global | Florida software company',
      description: 'Florida LLC that builds and runs its own software: DypOS, MOY IQ and Esmalia. We also build AI software and support Latin American firms entering the US.',
    },
    products: {
      title: 'DypOS, MOY IQ and Esmalia | Maxnova & Luci Global',
      description: 'Three software products in production from one Florida LLC: restaurants, personal finance and dental clinics. Prices, demos and current limits.',
    },
    services: {
      title: 'AI Software and US Market Entry | Maxnova & Luci Global',
      description: 'AI software and SaaS built with the process behind our own products, plus US market entry support for Latin American companies. Quoted per project.',
    },
    company: {
      title: 'About MAXNOVA & LUCI GLOBAL LLC | Company facts',
      description: 'Legal name, Florida document number, filing date, founder and products of MAXNOVA & LUCI GLOBAL LLC, with a link to verify the record on Sunbiz.',
    },
    log: {
      title: 'Shipping log | Maxnova & Luci Global',
      description: 'A dated record of what we ship across DypOS, MOY IQ, Esmalia and the company.',
    },
    privacy: {
      title: 'Privacy policy | Maxnova & Luci Global',
      description: 'What this website collects, why, who processes it and how to ask us to delete it.',
    },
    terms: {
      title: 'Terms of use | Maxnova & Luci Global',
      description: 'Terms for using the website of MAXNOVA & LUCI GLOBAL LLC.',
    },
  },
  home: {
    h1: 'Three live software products. One Florida company.',
    lead: 'Restaurants, personal finance and dental clinics. Try each demo. We also build software for other companies.',
    primary: 'See the products',
    secondary: 'Work with us',
    registryTitle: 'Public registration',
    productsH2: 'What we run',
    productsIntro: 'You can open every product below today. Judge the work before you write to us.',
    doorsH2: 'Two reasons to be here',
    doors: [
      {
        title: 'You need software, or a way into the US',
        text: 'We build AI software and help Latin American companies set up in the United States. Same process we use for our own products.',
        link: 'See the services',
        page: 'services' as PageKey,
      },
      {
        title: 'You need to verify who we are',
        text: 'Banks, platforms and partners: legal name, registration and how to check it in the official registry, on one page.',
        link: 'See the company details',
        page: 'company' as PageKey,
      },
    ],
    logH2: 'Latest from the log',
    logLink: 'See the full log',
  },
  network: {
    title: 'Network status',
    method: 'Measured by this site’s server, in Washington, D.C.',
    checking: 'Checking…',
    checkedAt: (s: string) => `Checked at ${s} UTC`,
    unavailable: 'Check unavailable',
    online: 'Online',
    offline: 'Not responding',
    noData: 'No data',
    noScript: 'Live checks need JavaScript.',
    open: 'Open',
    core: 'Florida LLC',
    others: [
      { id: 'amazon', name: 'Amazon seller account', state: 'Account open, no sales yet' },
      { id: 'health', name: 'Medical practice software', state: 'In development, not public' },
    ],
  },
  productsPage: {
    h1: 'Products',
    lead: 'Each product belongs to the same Florida LLC. Each one is in production, with public prices and a demo.',
    status: 'Status now',
    sector: 'Sector',
    market: 'Market',
    price: 'Price',
    notYet: 'Still missing',
    openDemo: 'Open demo',
    openSite: 'Visit',
    screenAlt: (name: string, what: string) => `${name}: ${what}, with sample data`,
    caption: (date: string) => `Real screen with sample data, captured ${date}.`,
    otherH2: 'Also in the company',
    other: [
      { title: 'Amazon seller account', text: 'A Seller Central Professional account in the company’s name, open in the United States. No sales yet.' },
      { title: 'Medical practice software', text: 'Software for general medicine, in development. Not public yet.' },
    ],
    earlyH2: 'Where we are',
    early: 'We are early. The products are real and open to try, and we do not publish customer numbers yet. When we do, they will be numbers we can back up.',
  },
  servicesPage: {
    h1: 'We built ours before offering to build yours.',
    lead: 'Two services, both drawn from what we already did for our own products. Quoted per project, after a diagnostic call.',
    items: [
      {
        id: 'ai-software',
        title: 'AI software and SaaS',
        who: 'For companies that need a product, an internal tool or an automation built and running.',
        does: [
          'Scope the problem and decide what is worth building',
          'Design, build and put it in production',
          'Add AI where it does a real job, not as decoration',
          'Hand over the code, the documentation and the accounts',
        ],
        proof: 'DypOS, MOY IQ and Esmalia run on this process.',
        limitsTitle: 'What we do not do',
        limits: ['Work without a written scope and price', 'Promise results we cannot measure'],
      },
      {
        id: 'us-market-entry',
        title: 'US market entry',
        who: 'For Latin American companies that want to sell to, or operate from, the United States.',
        does: [
          'Share how we set up and run our own US company',
          'Map the operational steps: banking, payments and platform accounts',
          'Work alongside the licensed attorneys and accountants you engage',
        ],
        proof: 'We set up and run our own Florida company, filed in 2026.',
        limitsTitle: 'What we do not do',
        limits: ['Prepare company formation documents or give legal or tax advice', 'Guarantee approval by a bank or platform'],
      },
    ],
    disclaimer: 'We share operating experience, not legal or tax advice. Maxnova & Luci Global is not a law firm or an accounting firm. Company formation documents, legal opinions and tax filings belong with licensed professionals.',
    doesTitle: 'What we do',
    proofTitle: 'Where it comes from',
    processH2: 'How an engagement works',
    steps: [
      { title: 'Diagnostic call', text: 'We learn what you need and tell you plainly whether we are the right fit.' },
      { title: 'Quoted proposal', text: 'Scope, timeline and price in writing, before any work starts.' },
      { title: 'Build', text: 'Short cycles with a working preview you can open at any time.' },
      { title: 'Handover', text: 'You receive the result, the documentation and the access to run it.' },
    ],
    faqH2: 'Common questions',
    faq: [
      { q: 'How is the work priced?', a: 'Each engagement is quoted per project after a diagnostic call. There are no fixed public prices.' },
      { q: 'Do you work with companies outside Latin America?', a: 'Software, yes. US market entry is meant for Latin American companies.' },
      { q: 'Who does the work?', a: 'Walter La Madriz leads every engagement directly.' },
      { q: 'Do you give legal or tax advice?', a: 'No. We share what we learned setting up our own company and work alongside your licensed attorney and accountant.' },
    ],
    cta: 'Request a diagnostic call',
  },
  companyPage: {
    h1: 'The company',
    lead: `${LEGAL_NAME} (Maxnova & Luci Global) is a Florida limited liability company, formed in April 2026, that builds and operates its own software products, DypOS, MOY IQ and Esmalia, and offers AI software development and US market entry support to Latin American companies.`,
    factsH2: 'Company details',
    facts: [
      { k: 'Legal name', v: LEGAL_NAME },
      { k: 'Entity type', v: 'Florida limited liability company' },
      { k: 'Document number', v: DOC_NUMBER, mono: true },
      { k: 'Filed', v: 'April 20, 2026' },
      { k: 'Effective', v: 'April 21, 2026' },
      { k: 'Status', v: 'Active (Sunbiz, checked November 2, 2026)' },
      { k: 'Founder', v: FOUNDER },
      { k: 'Presence', v: 'United States · Chile' },
      { k: 'Email', v: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    ],
    verifyH2: 'Verify it yourself',
    verify: 'The Florida Division of Corporations publishes this registration. Principal address, registered agent and authorized persons are in that record.',
    verifyLink: 'Open the record on Sunbiz',
    founderH2: 'Founder',
    founderName: FOUNDER,
    founderRole: 'Founder',
    founder: [
      'I am a telecommunications engineer. I spent fifteen years in carrier telecom in Venezuela and Chile, across network engineering, product and B2B sales.',
      'I run these products the way a network is run: everything is monitored, every change is dated, and if something is not working we say so.',
      'When we work with you, we use the same process and hold the work to the same standard.',
    ],
    faqH2: 'Questions',
    faq: [
      { q: 'What is Maxnova & Luci Global?', a: `${LEGAL_NAME} is a Florida limited liability company that builds and operates software products: DypOS for restaurants, MOY IQ for personal finance and Esmalia for dental clinics.` },
      { q: 'How can I verify the company?', a: `Search document number ${DOC_NUMBER} on Sunbiz, the Florida Division of Corporations registry. The company was filed on April 20, 2026.` },
      { q: 'Does it give legal or tax advice?', a: 'No. We are not a law firm or an accounting firm. Legal and tax matters belong with licensed professionals.' },
      { q: 'Are you a holding company?', a: 'The products belong to a single LLC. They are not separate subsidiaries.' },
      { q: 'Where is the company based?', a: 'It is registered in Florida, United States, and also operates from Chile.' },
      { q: 'How many customers do you have?', a: 'We are early and do not publish customer numbers yet. Every product can be tried today.' },
      { q: 'How do I get in touch?', a: `Use the contact form or write to ${CONTACT_EMAIL}.` },
    ],
  },
  logPage: {
    h1: 'Shipping log',
    lead: 'What we shipped, with its date. A company that operates leaves a record.',
    date: 'Date',
    scope: 'Where',
    what: 'What',
  },
  contact: {
    h2: 'Tell us what you are working on',
    intro: 'We read every message and reply by email within two business days.',
    fields: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      optional: 'optional',
      topic: 'Topic',
      choose: 'Choose a topic',
      message: 'Message',
    },
    topics: ['AI software and SaaS', 'US market entry', 'Bank or platform verification', 'Partnership', 'Something else'],
    privacyNote: 'We only use your details to answer you.',
    privacyLink: 'Privacy policy',
    submit: 'Send message',
    sending: 'Sending…',
    sent: 'Thank you. Your message reached us, and we will reply by email.',
    error: 'We could not send your message. Please try again, or write to',
    invalid: 'Please fill in your name, a valid email, a topic and a message.',
  },
  footer: {
    rights: 'All rights reserved.',
    registered: 'Registered in Florida',
    legal: 'Legal',
    privacy: 'Privacy',
    terms: 'Terms',
    sections: 'Site',
  },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist. The home page has everything we publish.',
    back: 'Go to the home page',
  },
  legal: {
    updated: 'Last updated',
    privacy: {
      h1: 'Privacy policy',
      sections: [
        { h: 'Who is responsible', p: [`${LEGAL_NAME}, a Florida limited liability company, document number ${DOC_NUMBER}. For anything about your data, write to ${CONTACT_EMAIL}.`] },
        { h: 'What we collect', p: ['When you send the contact form: your name, email, company if you give it, the topic and your message.', 'When you visit: anonymous visit statistics, without cookies and without identifying you. Our hosting keeps basic technical logs, such as IP address, for security.'] },
        { h: 'Why we use it', p: ['To answer your message and follow up on the conversation you started. We do not sell your data and we do not use it for advertising.'] },
        { h: 'Who processes it', p: ['Vercel hosts this site and Resend delivers form messages to our inbox. Both may process data in the United States. If you become a client, other providers may apply, and we will tell you which.'] },
        { h: 'How long we keep it', p: ['We keep form messages while the conversation is useful, and no more than 24 months, unless a legal duty requires longer.'] },
        { h: 'Your rights', p: [`You can ask us to access, correct or delete your data, or to stop using it, by writing to ${CONTACT_EMAIL}. We reply within 30 days. You may also complain to the data protection authority of your country.`] },
        { h: 'Our products', p: ['DypOS, MOY IQ and Esmalia each have their own privacy policy, published on their own sites. This page only covers maxnovaluci.com.'] },
      ],
    },
    terms: {
      h1: 'Terms of use',
      sections: [
        { h: 'About this site', p: [`This site belongs to ${LEGAL_NAME}. By using it you accept these terms.`] },
        { h: 'Information only', p: ['What we publish is general information about the company and its products. It is not legal, tax or financial advice, and it is not an offer. Any service is governed by a written agreement.'] },
        { h: 'Live checks', p: ['The status shown on this site is an automatic measurement from our server. It may differ from what you experience and it is not a service level commitment.'] },
        { h: 'Products', p: ['DypOS, MOY IQ and Esmalia have their own terms, published on their own sites.'] },
        { h: 'Intellectual property', p: ['Names, logos, text and screens on this site belong to the company or to their owners. Do not reuse them without permission.'] },
        { h: 'Liability', p: ['The site is provided as is. To the extent the law allows, we are not liable for damages arising from its use.'] },
        { h: 'Governing law', p: ['These terms are governed by the laws of the State of Florida, United States.'] },
      ],
    },
  },
};

export type Copy = typeof en;

const es: Copy = {
  lang: 'es',
  locale: 'es_419',
  altLang: 'en',
  altLabel: 'English',
  altShort: 'EN',
  skip: 'Saltar al contenido',
  nav: {
    label: 'Principal',
    menu: 'Menú',
    products: 'Productos',
    services: 'Servicios',
    company: 'Empresa',
    log: 'Registro',
    cta: 'Hablemos',
  },
  dateFmt: 'es-419',
  meta: {
    home: {
      title: 'Maxnova & Luci Global | Empresa de software en Florida',
      description: 'LLC de Florida que construye y opera su propio software: DypOS, MOY IQ y Esmalia. También hacemos software con IA y apoyamos la entrada a EE. UU.',
    },
    products: {
      title: 'DypOS, MOY IQ y Esmalia | Maxnova & Luci Global',
      description: 'Tres productos de software en producción de una LLC de Florida: restaurantes, finanzas personales y clínicas dentales. Precios, demos y límites.',
    },
    services: {
      title: 'Software con IA y entrada a EE. UU. | Maxnova & Luci',
      description: 'Software con IA y SaaS, con el proceso de nuestros productos, y apoyo para empresas latinoamericanas que entran a EE. UU. Cotización por proyecto.',
    },
    company: {
      title: 'Sobre MAXNOVA & LUCI GLOBAL LLC | Datos de la empresa',
      description: 'Nombre legal, número de documento en Florida, fecha de registro, fundador y productos de MAXNOVA & LUCI GLOBAL LLC, verificables en Sunbiz.',
    },
    log: {
      title: 'Registro de entregas | Maxnova & Luci Global',
      description: 'Lo que entregamos en DypOS, MOY IQ, Esmalia y la empresa, con su fecha.',
    },
    privacy: {
      title: 'Política de privacidad | Maxnova & Luci Global',
      description: 'Qué recoge este sitio, para qué, quién lo procesa y cómo pedirnos que lo borremos.',
    },
    terms: {
      title: 'Términos de uso | Maxnova & Luci Global',
      description: 'Términos para usar el sitio de MAXNOVA & LUCI GLOBAL LLC.',
    },
  },
  home: {
    h1: 'Tres productos de software en producción. Una empresa de Florida.',
    lead: 'Restaurantes, finanzas personales y clínicas dentales. Prueba cada demo. También construimos software para otras empresas.',
    primary: 'Ver los productos',
    secondary: 'Trabajar con nosotros',
    registryTitle: 'Registro público',
    productsH2: 'Lo que operamos',
    productsIntro: 'Puedes abrir hoy cada producto de esta lista. Juzga el trabajo antes de escribirnos.',
    doorsH2: 'Dos razones para estar aquí',
    doors: [
      {
        title: 'Necesitas software, o una forma de entrar a EE. UU.',
        text: 'Construimos software con IA y ayudamos a empresas de Latinoamérica a instalarse en Estados Unidos. Con el mismo proceso de nuestros productos.',
        link: 'Ver los servicios',
        page: 'services',
      },
      {
        title: 'Necesitas verificar quiénes somos',
        text: 'Bancos, plataformas y socios: razón social, registro y cómo comprobarlo en la fuente oficial, en una sola página.',
        link: 'Ver los datos de la empresa',
        page: 'company',
      },
    ],
    logH2: 'Lo último del registro',
    logLink: 'Ver el registro completo',
  },
  network: {
    title: 'Estado de la red',
    method: 'Medido por el servidor de este sitio, en Washington, D.C.',
    checking: 'Comprobando…',
    checkedAt: (s: string) => `Comprobado a las ${s} UTC`,
    unavailable: 'Comprobación no disponible',
    online: 'En línea',
    offline: 'No responde',
    noData: 'Sin dato',
    noScript: 'Los chequeos en vivo necesitan JavaScript.',
    open: 'Abrir',
    core: 'LLC de Florida',
    others: [
      { id: 'amazon', name: 'Cuenta de vendedor en Amazon', state: 'Cuenta abierta, sin ventas todavía' },
      { id: 'health', name: 'Software para consultorios', state: 'En desarrollo, no es público' },
    ],
  },
  productsPage: {
    h1: 'Productos',
    lead: 'Cada producto pertenece a la misma LLC de Florida. Todos están en producción, con precios públicos y una demo.',
    status: 'Estado ahora',
    sector: 'Sector',
    market: 'Mercado',
    price: 'Precio',
    notYet: 'Lo que falta',
    openDemo: 'Abrir demo',
    openSite: 'Visitar',
    screenAlt: (name: string, what: string) => `${name}: ${what}, con datos de ejemplo`,
    caption: (date: string) => `Pantalla real con datos de ejemplo, capturada el ${date}.`,
    otherH2: 'También en la empresa',
    other: [
      { title: 'Cuenta de vendedor en Amazon', text: 'Una cuenta Seller Central Professional a nombre de la empresa, abierta en Estados Unidos. Sin ventas todavía.' },
      { title: 'Software para consultorios', text: 'Software para medicina general, en desarrollo. Todavía no es público.' },
    ],
    earlyH2: 'Dónde estamos',
    early: 'Estamos al comienzo. Los productos son reales y se pueden probar, y todavía no publicamos cifras de clientes. Cuando lo hagamos, serán números que podamos respaldar.',
  },
  servicesPage: {
    h1: 'Construimos los nuestros antes de ofrecerte el tuyo.',
    lead: 'Dos servicios, ambos sacados de lo que ya hicimos para nuestros productos. Se cotizan por proyecto, después de una llamada de diagnóstico.',
    items: [
      {
        id: 'software-con-ia',
        title: 'Software con IA y SaaS',
        who: 'Para empresas que necesitan un producto, una herramienta interna o una automatización construida y funcionando.',
        does: [
          'Definir el problema y decidir qué vale la pena construir',
          'Diseñarlo, construirlo y ponerlo en producción',
          'Sumar IA donde hace un trabajo real, no como adorno',
          'Entregar el código, la documentación y las cuentas',
        ],
        proof: 'DypOS, MOY IQ y Esmalia funcionan con este proceso.',
        limitsTitle: 'Lo que no hacemos',
        limits: ['Trabajar sin alcance y precio por escrito', 'Prometer resultados que no se pueden medir'],
      },
      {
        id: 'entrada-a-eeuu',
        title: 'Entrada a EE. UU.',
        who: 'Para empresas de Latinoamérica que quieren venderle a Estados Unidos u operar desde allá.',
        does: [
          'Compartir cómo montamos y operamos nuestra propia empresa en EE. UU.',
          'Ordenar los pasos operativos: banca, cobros y cuentas de plataforma',
          'Trabajar junto a los abogados y contadores con licencia que contrates',
        ],
        proof: 'Montamos y operamos nuestra propia empresa en Florida, registrada en 2026.',
        limitsTitle: 'Lo que no hacemos',
        limits: ['Preparar documentos de constitución ni dar asesoría legal o tributaria', 'Garantizar la aprobación de un banco o una plataforma'],
      },
    ],
    disclaimer: 'Compartimos experiencia operativa, no asesoría legal ni tributaria. Maxnova & Luci Global no es un estudio de abogados ni una firma contable. Los documentos de constitución, las opiniones legales y las declaraciones de impuestos corresponden a profesionales con licencia.',
    doesTitle: 'Qué hacemos',
    proofTitle: 'De dónde sale',
    processH2: 'Cómo es trabajar con nosotros',
    steps: [
      { title: 'Llamada de diagnóstico', text: 'Entendemos qué necesitas y te decimos con franqueza si somos la opción correcta.' },
      { title: 'Propuesta cotizada', text: 'Alcance, plazos y precio por escrito, antes de empezar.' },
      { title: 'Construcción', text: 'Ciclos cortos con una versión de prueba que puedes abrir en cualquier momento.' },
      { title: 'Entrega', text: 'Recibes el resultado, la documentación y los accesos para operarlo.' },
    ],
    faqH2: 'Preguntas frecuentes',
    faq: [
      { q: '¿Cómo se cobra el trabajo?', a: 'Cada trabajo se cotiza por proyecto después de una llamada de diagnóstico. No hay precios públicos fijos.' },
      { q: '¿Trabajan con empresas fuera de Latinoamérica?', a: 'En software, sí. La entrada a EE. UU. está pensada para empresas de Latinoamérica.' },
      { q: '¿Quién hace el trabajo?', a: 'Walter La Madriz lidera cada trabajo directamente.' },
      { q: '¿Dan asesoría legal o tributaria?', a: 'No. Compartimos lo que aprendimos al instalar nuestra propia empresa y trabajamos junto a tu abogado y tu contador con licencia.' },
    ],
    cta: 'Pedir una llamada de diagnóstico',
  },
  companyPage: {
    h1: 'La empresa',
    lead: `${LEGAL_NAME} (Maxnova & Luci Global) es una sociedad de responsabilidad limitada de Florida, constituida en abril de 2026, que construye y opera sus propios productos de software, DypOS, MOY IQ y Esmalia, y ofrece desarrollo de software con IA y apoyo para entrar a Estados Unidos a empresas latinoamericanas.`,
    factsH2: 'Datos de la empresa',
    facts: [
      { k: 'Razón social', v: LEGAL_NAME },
      { k: 'Tipo de entidad', v: 'Sociedad de responsabilidad limitada (LLC) de Florida' },
      { k: 'Número de documento', v: DOC_NUMBER, mono: true },
      { k: 'Registrada', v: '20 de abril de 2026' },
      { k: 'Vigente desde', v: '21 de abril de 2026' },
      { k: 'Estado', v: 'Activa (Sunbiz, revisado el 2 de noviembre de 2026)' },
      { k: 'Fundador', v: FOUNDER },
      { k: 'Presencia', v: 'Estados Unidos · Chile' },
      { k: 'Email', v: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    ],
    verifyH2: 'Compruébalo tú mismo',
    verify: 'La División de Corporaciones de Florida publica este registro. La dirección principal, el agente registrado y las personas autorizadas están en esa ficha.',
    verifyLink: 'Abrir la ficha en Sunbiz',
    founderH2: 'Fundador',
    founderName: FOUNDER,
    founderRole: 'Fundador',
    founder: [
      'Soy ingeniero en telecomunicaciones. Pasé quince años en telecomunicaciones para operadores en Venezuela y Chile, entre ingeniería de redes, producto y ventas B2B.',
      'Opero estos productos como se opera una red: todo se monitorea, cada cambio queda fechado y, si algo no funciona, lo decimos.',
      'Cuando trabajamos contigo, usamos la misma forma de trabajo y le exigimos al resultado lo mismo.',
    ],
    faqH2: 'Preguntas',
    faq: [
      { q: '¿Qué es Maxnova & Luci Global?', a: `${LEGAL_NAME} es una sociedad de responsabilidad limitada de Florida que construye y opera productos de software: DypOS para restaurantes, MOY IQ para finanzas personales y Esmalia para clínicas dentales.` },
      { q: '¿Cómo verifico la empresa?', a: `Busca el número de documento ${DOC_NUMBER} en Sunbiz, el registro de la División de Corporaciones de Florida. La empresa se registró el 20 de abril de 2026.` },
      { q: '¿Da asesoría legal o tributaria?', a: 'No. No somos un estudio de abogados ni una firma contable. Los temas legales y tributarios corresponden a profesionales con licencia.' },
      { q: '¿Son un holding?', a: 'Los productos pertenecen a una sola LLC. No son filiales separadas.' },
      { q: '¿Dónde está la empresa?', a: 'Está registrada en Florida, Estados Unidos, y también opera desde Chile.' },
      { q: '¿Cuántos clientes tienen?', a: 'Estamos al comienzo y todavía no publicamos cifras de clientes. Cada producto se puede probar hoy.' },
      { q: '¿Cómo los contacto?', a: `Con el formulario de contacto o escribiendo a ${CONTACT_EMAIL}.` },
    ],
  },
  logPage: {
    h1: 'Registro de entregas',
    lead: 'Lo que entregamos, con su fecha. Una empresa que opera deja constancia.',
    date: 'Fecha',
    scope: 'Dónde',
    what: 'Qué',
  },
  contact: {
    h2: 'Cuéntanos en qué estás trabajando',
    intro: 'Leemos cada mensaje y respondemos por email en un máximo de dos días hábiles.',
    fields: {
      name: 'Nombre',
      email: 'Email',
      company: 'Empresa',
      optional: 'opcional',
      topic: 'Tema',
      choose: 'Elige un tema',
      message: 'Mensaje',
    },
    topics: ['Software con IA y SaaS', 'Entrada a EE. UU.', 'Verificación de banco o plataforma', 'Alianza', 'Otro tema'],
    privacyNote: 'Usamos tus datos solo para responderte.',
    privacyLink: 'Política de privacidad',
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    sent: 'Gracias. Tu mensaje nos llegó y te respondemos por email.',
    error: 'No pudimos enviar tu mensaje. Prueba de nuevo o escríbenos a',
    invalid: 'Completa tu nombre, un email válido, el tema y el mensaje.',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    registered: 'Registrada en Florida',
    legal: 'Legal',
    privacy: 'Privacidad',
    terms: 'Términos',
    sections: 'Sitio',
  },
  notFound: {
    title: 'Página no encontrada',
    text: 'Esta página no existe. En el inicio está todo lo que publicamos.',
    back: 'Ir al inicio',
  },
  legal: {
    updated: 'Última actualización',
    privacy: {
      h1: 'Política de privacidad',
      sections: [
        { h: 'Quién es responsable', p: [`${LEGAL_NAME}, sociedad de responsabilidad limitada de Florida, número de documento ${DOC_NUMBER}. Para cualquier tema sobre tus datos, escribe a ${CONTACT_EMAIL}.`] },
        { h: 'Qué recogemos', p: ['Cuando envías el formulario de contacto: tu nombre, tu email, tu empresa si la indicas, el tema y tu mensaje.', 'Cuando visitas el sitio: estadísticas anónimas de visitas, sin cookies y sin identificarte. Nuestro alojamiento guarda registros técnicos básicos, como la dirección IP, por seguridad.'] },
        { h: 'Para qué lo usamos', p: ['Para responder tu mensaje y seguir la conversación que iniciaste. No vendemos tus datos ni los usamos para publicidad.'] },
        { h: 'Quién los procesa', p: ['Vercel aloja este sitio y Resend entrega los mensajes del formulario a nuestra casilla. Ambos pueden procesar datos en Estados Unidos. Si te vuelves cliente pueden aplicar otros proveedores, y te diremos cuáles.'] },
        { h: 'Cuánto tiempo los guardamos', p: ['Guardamos los mensajes mientras la conversación sea útil, y no más de 24 meses, salvo que una obligación legal exija más.'] },
        { h: 'Tus derechos', p: [`Puedes pedirnos acceder a tus datos, corregirlos, borrarlos o dejar de usarlos, escribiendo a ${CONTACT_EMAIL}. Respondemos en un máximo de 30 días. También puedes reclamar ante la autoridad de protección de datos de tu país.`] },
        { h: 'Nuestros productos', p: ['DypOS, MOY IQ y Esmalia tienen cada uno su propia política de privacidad, publicada en su sitio. Esta página cubre solo maxnovaluci.com.'] },
      ],
    },
    terms: {
      h1: 'Términos de uso',
      sections: [
        { h: 'Sobre este sitio', p: [`Este sitio pertenece a ${LEGAL_NAME}. Al usarlo aceptas estos términos.`] },
        { h: 'Solo información', p: ['Lo que publicamos es información general sobre la empresa y sus productos. No es asesoría legal, tributaria ni financiera, ni una oferta. Todo servicio se rige por un acuerdo escrito.'] },
        { h: 'Chequeos en vivo', p: ['El estado que muestra este sitio es una medición automática desde nuestro servidor. Puede diferir de lo que tú experimentes y no es un compromiso de nivel de servicio.'] },
        { h: 'Productos', p: ['DypOS, MOY IQ y Esmalia tienen sus propios términos, publicados en sus sitios.'] },
        { h: 'Propiedad intelectual', p: ['Los nombres, logos, textos y pantallas de este sitio pertenecen a la empresa o a sus dueños. No los reutilices sin permiso.'] },
        { h: 'Responsabilidad', p: ['El sitio se ofrece tal como está. En la medida que la ley lo permita, no respondemos por daños derivados de su uso.'] },
        { h: 'Ley aplicable', p: ['Estos términos se rigen por las leyes del Estado de Florida, Estados Unidos.'] },
      ],
    },
  },
};

export const copy: Record<Lang, Copy> = { en, es };

export const formatDate = (iso: string, lang: Lang, dateFmt: string) =>
  new Intl.DateTimeFormat(dateFmt, {
    day: 'numeric',
    month: lang === 'es' ? 'short' : 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`));
