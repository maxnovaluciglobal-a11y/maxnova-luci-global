// All site copy lives here, one object per language. Edit text here, not in the components.
// Only publish facts that can be verified (see PRODUCT.md → Evidence on Hand).

export type Lang = 'en' | 'es';
export type PageKey = 'home' | 'products' | 'services' | 'company' | 'log' | 'studio' | 'founder' | 'privacy' | 'terms';

export const SITE_URL = 'https://maxnovaluci.com';
// Forwarded to the company Gmail by Cloudflare Email Routing (since 2026-11-03).
export const CONTACT_EMAIL = 'hola@maxnovaluci.com';
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
  studio: { en: '/software-studio/', es: '/es/estudio-de-software/' },
  founder: { en: '/founder/', es: '/es/fundador/' },
  privacy: { en: '/privacy/', es: '/es/privacidad/' },
  terms: { en: '/terms/', es: '/es/terminos/' },
};

/** Date of the last real content change per page. Used by the sitemap: update it when the page changes. */
export const lastmod: Record<PageKey, string> = {
  home: '2026-11-20',
  products: '2026-11-20',
  services: '2026-11-20',
  company: '2026-11-20',
  log: '2026-11-20',
  studio: '2026-11-20',
  founder: '2026-11-20',
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
    name: 'moyiq',
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
  dypos: { en: 'Public home page, captured November 19, 2026. The demo asks for a name, WhatsApp and email.', es: 'Página pública de inicio, capturada el 19 de noviembre de 2026. La demo pide nombre, WhatsApp y email.' },
  moyiq: { en: 'Public home page, captured November 19, 2026. The demo opens with sample data.', es: 'Página pública de inicio, capturada el 19 de noviembre de 2026. La demo abre con datos de ejemplo.' },
  esmalia: { en: 'Public home page, captured November 19, 2026. The demo asks for a name and email.', es: 'Página pública de inicio, capturada el 19 de noviembre de 2026. La demo pide nombre y email.' },
};

export interface LogEntry {
  date: string;
  scope: 'DypOS' | 'moyiq' | 'Esmalia' | 'Company';
  text: Record<Lang, string>;
}

// Dated, public-safe facts only. Newest first. Never add customer names, security details or revenue.
export const log: LogEntry[] = [
  {
    date: '2026-11-20',
    scope: 'Company',
    text: {
      en: 'Redesigned corporate site: the three products can be tried on the home page, with live status and a dated log.',
      es: 'Web corporativa rediseñada: los tres productos se prueban en la portada, con estado en vivo y registro fechado.',
    },
  },
  {
    date: '2026-11-19',
    scope: 'DypOS',
    text: {
      en: 'Book a 15-minute demo with the team, or explore the demo alone after confirming your email.',
      es: 'Agenda una demo de 15 minutos con el equipo, o recorre la demo por tu cuenta tras confirmar tu correo.',
    },
  },
  {
    date: '2026-11-19',
    scope: 'Esmalia',
    text: {
      en: 'Public changelog page, read from the same list the app shows.',
      es: 'Página pública de novedades, leída de la misma lista que muestra la app.',
    },
  },
  {
    date: '2026-11-18',
    scope: 'moyiq',
    text: {
      en: 'MOY IQ becomes moyiq: new identity across the site, emails and the app.',
      es: 'MOY IQ pasa a llamarse moyiq: identidad nueva en la web, los correos y la app.',
    },
  },
  {
    date: '2026-11-16',
    scope: 'DypOS',
    text: {
      en: 'New brand in production: one vivid orange, new logo and typography in the app and the site.',
      es: 'Marca nueva en producción: un solo naranja vivo, logo y tipografía nuevos en la app y la web.',
    },
  },
  {
    date: '2026-11-16',
    scope: 'Esmalia',
    text: {
      en: 'New logo: the m drawn as a molar, on the existing lettering.',
      es: 'Logo nuevo: la m dibujada como una muela, sobre la letra de siempre.',
    },
  },
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
    scope: 'moyiq',
    text: {
      en: 'One-task expense entry with recent categories, tested on a real iPhone.',
      es: 'Registro de gastos en una sola tarea, con categorías recientes, probado en un iPhone real.',
    },
  },
  {
    date: '2026-10-30',
    scope: 'moyiq',
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
    scope: 'moyiq',
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
      description: 'Florida LLC that builds and runs its own software: DypOS, moyiq and Esmalia. We also build AI software and support Latin American firms entering the US.',
    },
    products: {
      title: 'DypOS, moyiq and Esmalia | Maxnova & Luci Global',
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
      description: 'A dated record of what we ship across DypOS, moyiq, Esmalia and the company.',
    },
    studio: {
      title: 'Florida software studio running its own SaaS for Latin America',
      description: 'MAXNOVA & LUCI GLOBAL LLC, a Florida company, builds and runs DypOS, moyiq and Esmalia for Latin America, and builds AI software for other companies.',
    },
    founder: {
      title: 'Walter La Madriz, telecom engineer and software founder',
      description: 'Walter La Madriz, telecommunications engineer with 15 years in telecom, founded MAXNOVA & LUCI GLOBAL LLC in Florida to build SaaS for Latin America.',
    },
    privacy: {
      title: 'Privacy policy | Maxnova & Luci Global',
      description: 'What this website collects, why, who processes it and how to ask us to delete it.',
    },
    terms: {
      title: 'Terms of use | Maxnova & Luci Global',
      description: 'Terms for using maxnovaluci.com, the website of MAXNOVA & LUCI GLOBAL LLC, a Florida company.',
    },
  },
  home: {
    h1: 'We build our own before we build yours.',
    h1Accent: 'our own',
    lead: 'We run three software products in production. With that experience we build AI software for other companies and help Latin American firms enter the US.',
    primary: 'See the products',
    secondary: 'Talk about your project',
    bentoH2: 'Try them right here',
    bentoIntro: 'The three demos below use sample data. Each product opens in full on its own site.',
    sample: 'Sample data',
    open: (name: string) => `Open ${name}`,
    from: 'From',
    perMonth: '/mo',
    freeTrial: '14 days free',
    dypos: {
      label: 'DypOS demo: live kitchen, with sample data',
      title: 'Kitchen',
      titleAccent: 'live',
      cols: ['Received', 'In the kitchen', 'Ready'],
      table: 'Table',
      noTickets: 'No tickets',
      items: [
        ['2×', 'House burger', 'No onion'],
        ['1×', 'Ginger lemonade', ''],
      ],
      ghost1: ['1×', 'Lager'],
      ghost2: [['2×', 'Grilled ribs'], ['1×', 'Nachos with guacamole']],
      inKitchen: 'Being prepared',
      ready: 'Ready to serve',
      buttons: ['Send to kitchen', 'Mark ready', 'New ticket'],
      footIdle: 'every sale subtracts its cost: that is how you see the real profit of the day.',
      footLabel: 'On close',
      closed: (table: number) => `Table ${table} closed`,
      closedLine: 'sale $18.40 · cost $6.15 ·',
      profit: 'profit $12.25',
      what: 'Point of sale, kitchen, inventory and finance connected: the real profit of the day, not just sales.',
      price: 'US$49',
    },
    moyiq: {
      label: 'moyiq demo: log an expense, with sample data',
      date: 'Thursday, November 20',
      left: 'Left this month',
      inputLabel: 'Type an expense the way you would say it',
      inputValue: 'uber 12',
      add: 'Add',
      empty: 'Type what and how much',
      other: 'Other · check the category',
      noAmount: 'Amount missing',
      now: 'Now',
      list: [
        ['C', '#F28C28', 'Groceries', 'Food · Today', '−$42.90'],
        ['H', '#2BB673', 'Pharmacy', 'Health · Yesterday', '−$15.20'],
      ],
      samples: ['netflix 9.99', 'groceries 38.50', 'coffee 4.20', 'pharmacy 15'],
      what: 'Private personal finance with no bank login, and an IQ Score from 0 to 100.',
      free: 'Free',
      pro: 'Pro',
      proPrice: 'US$4.99',
      proYear: 'US$39.99',
      perYear: '/yr',
      or: 'or',
    },
    esmalia: {
      label: 'Esmalia demo: confirm an appointment over WhatsApp, with sample data',
      day: 'Tomorrow',
      date: 'Friday, November 21',
      count: '9 visits',
      chairs: '2 chairs',
      confirmed: 'Confirmed',
      of: 'of',
      rows: [
        ['09:00', 'Andrea M.', 'Check-up · Dr. Paz'],
        ['10:30', 'Camila R.', 'Cleaning · Dr. Soto'],
        ['11:15', 'Jorge L.', 'Root canal · Dr. Paz'],
      ],
      ok: 'Confirmed',
      pending: 'To confirm',
      wa: 'WhatsApp reminder',
      msgOut: 'Hi Camila. We expect you tomorrow at 10:30 for your cleaning. Can you confirm?',
      msgIn: 'Yes, I confirm. Thank you!',
      simulate: 'Simulate the patient’s reply',
      reset: 'Reset the example',
      what: 'Scheduling, chart with odontogram, the day’s cash and WhatsApp confirmations.',
      price: 'US$19.99',
    },
    ai: {
      kicker: 'Quoted per project',
      title: 'AI software, built for you',
      text: 'The same team and method we use to run our products, applied to your company’s process.',
      casesLabel: 'Pick your case to start the message',
      cases: [
        { label: 'A manual process eats hours every week', msg: 'We have a manual process that takes hours every week and we want to automate it.' },
        { label: 'We need a custom internal system', msg: 'We need a custom internal system for our company.' },
        { label: 'We want AI in the tools we already use', msg: 'We want to add AI to the software we already use.' },
      ],
      write: 'Write',
      note: 'Proposal with scope and price in writing, after a diagnostic call.',
      builtTitle: 'Pieces we already run in production',
      built: [
        { color: '#D4F25A', text: 'Expenses typed as spoken, then categorized', who: 'moyiq' },
        { color: '#FF7A00', text: 'Cost subtracted on every sale', who: 'DypOS' },
        { color: '#FF6B7F', text: 'Appointment confirmation over WhatsApp', who: 'Esmalia' },
      ],
    },
    usa: {
      kicker: 'Quoted per project',
      title: 'Entering the US market',
      intro: 'What we already did for ourselves:',
      done: [
        { t: 'LLC filed in Florida', s: 'April 20, 2026' },
        { t: 'Subscriptions billed in dollars', s: 'moyiq and Esmalia' },
        { t: 'Amazon seller account open', s: 'first purchase in preparation' },
      ],
      case: { label: 'I want to sell in the US', msg: 'I want to sell or get paid in the US and your operating experience would help.' },
      disclaimer: 'Operating experience, not legal or tax advice.',
    },
    prep: {
      title: 'Also in the company, not public',
      foot: 'This site’s server checks every minute whether each product answers. A dot turns green only after a measurement.',
    },
    registry: { kind: 'Florida LLC', doc: 'Document', filed: 'Filed', verify: 'Verify on Sunbiz' },
    processH2: 'How we work with you',
    processIntro: 'The same for AI software and for entering the US. No packages: every project is quoted in writing once we understand the problem.',
    moneyTitle: 'How we make money',
    money: 'We make money from subscriptions to our own products and from custom projects quoted in writing. We do not sell data or charge hidden fees.',
    pricesLabel: 'Published prices',
    customRow: 'Custom projects',
    customValue: 'quoted in writing',
    founderBio: 'Telecommunications engineer with 15 years in telecom, across engineering, product and B2B sales to carriers in Venezuela and Chile. Today he builds and runs software for Latin America.',
    closing: 'Software we run, not just sell.',
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
    sumChecking: 'Checking the products now…',
    sum: (up: number | string, total: number | string, time: string) => `${up} of ${total} products answering · checked at\u00a0${time}\u00a0UTC`,
    sumUnavailable: 'Live check unavailable right now.',
    recheck: 'Check again',
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
    h1: 'Two services, drawn from our own products.',
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
        proof: 'DypOS, moyiq and Esmalia run on this process.',
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
    lead: `${LEGAL_NAME} (Maxnova & Luci Global) is a Florida limited liability company, formed in April 2026, that builds and operates its own software products, DypOS, moyiq and Esmalia, and offers AI software development and US market entry support to Latin American companies.`,
    factsH2: 'Company details',
    facts: [
      { k: 'Legal name', v: LEGAL_NAME },
      { k: 'Entity type', v: 'Florida limited liability company' },
      { k: 'Document number', v: DOC_NUMBER, mono: true },
      { k: 'Filed', v: 'April 20, 2026' },
      { k: 'Effective', v: 'April 21, 2026' },
      { k: 'Status', v: 'Active (Sunbiz, checked November 2, 2026)' },
      { k: 'Founder', v: FOUNDER },
      { k: 'Reach', v: 'Companies and people across Latin America, from the United States' },
      { k: 'Email', v: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    ],
    verifyH2: 'Verify it yourself',
    verify: 'The Florida Division of Corporations publishes this registration. Principal address, registered agent and authorized persons are in that record.',
    verifyLink: 'Open the record on Sunbiz',
    founderH2: 'Founder',
    founderName: FOUNDER,
    founderRole: 'Founder',
    founderAlt: 'Walter La Madriz, founder of Maxnova & Luci Global',
    founder: [
      'I am a telecommunications engineer. I spent fifteen years in carrier telecom in Venezuela and Chile, across network engineering, product and B2B sales.',
      'I run these products the way a network is run: everything is monitored, every change is dated, and if something is not working we say so.',
      'When we work with you, we use the same process and hold the work to the same standard.',
    ],
    faqH2: 'Questions',
    faq: [
      { q: 'What is Maxnova & Luci Global?', a: `${LEGAL_NAME} is a Florida limited liability company that builds and operates software products: DypOS for restaurants, moyiq for personal finance and Esmalia for dental clinics.` },
      { q: 'How can I verify the company?', a: `Search document number ${DOC_NUMBER} on Sunbiz, the Florida Division of Corporations registry. The company was filed on April 20, 2026.` },
      { q: 'Does it give legal or tax advice?', a: 'No. We are not a law firm or an accounting firm. Legal and tax matters belong with licensed professionals.' },
      { q: 'Are you a holding company?', a: 'The products belong to a single LLC. They are not separate subsidiaries.' },
      { q: 'Where is the company based?', a: 'It is registered in Florida, United States, and builds for companies and people across Latin America. The principal address is in the Sunbiz record.' },
      { q: 'How many customers do you have?', a: 'We are early and do not publish customer numbers yet. Every product can be tried today.' },
      { q: 'How do I get in touch?', a: `Use the contact form or write to ${CONTACT_EMAIL}.` },
    ],
  },
  studioPage: {
    h1: 'A Florida software studio that runs its own SaaS for Latin America',
    lead: `${LEGAL_NAME} is a software company registered in Florida. Before selling software work to anyone, it built three SaaS products of its own for Latin America, DypOS, moyiq and Esmalia, and it runs them today.`,
    productsH2: 'Which products does it run?',
    productsCols: ['Product', 'For', 'Public price'],
    sections: [
      { h: 'What kind of company is it?', p: ['A product studio inside one legal entity. DypOS, moyiq and Esmalia belong to the same Florida LLC; they are not separate subsidiaries. The company designs, builds, sells and supports each product, and uses that experience to build AI software for other companies.'] },
      { h: 'Why build its own products first?', p: ['Running software in production teaches what a pitch cannot: billing in dollars from Latin America, support in Spanish, uptime, privacy and shipping every week. Each product is live, priced and open to try, so a client can judge the work before writing.'] },
      { h: 'Who does it build software for?', p: ['Companies across Latin America that need an internal system, a SaaS product, or AI added to the software they already use. It also shares its operating experience with Latin American companies that want to sell to the United States; that is not legal or tax advice.', 'Every project is quoted in writing after a diagnostic call.'] },
      { h: 'How is it different from an agency or a nearshore firm?', p: ['It is small and it operates its own products. The founder, Walter La Madriz, leads every engagement directly, with no sales layer between the client and the people who build. It is not the right fit for large staff augmentation.'] },
      { h: 'How can I verify it?', p: [`Search document number ${DOC_NUMBER} on Sunbiz, the Florida Division of Corporations registry: the company was filed on April 20, 2026. This site also checks every minute whether each product answers, and keeps a dated log of what ships.`] },
    ],
    more: 'Keep reading',
  },
  founderPage: {
    h1: 'Walter La Madriz: from telecom engineer to software founder in Florida',
    lead: `Walter La Madriz is a telecommunications engineer and the founder of ${LEGAL_NAME}, a Florida software company that builds and runs DypOS, moyiq and Esmalia for Latin America.`,
    sections: [
      { h: 'Fifteen years in telecom', p: ['He spent fifteen years in carrier telecom in Venezuela and Chile, across network engineering, product and B2B sales to operators.'] },
      { h: 'Why software for Latin America', p: ['In April 2026 he registered the company in Florida to build software products for Latin America and bill them in dollars. Today the company runs a point of sale for restaurants, a personal finance app and a system for dental clinics.'] },
      { h: 'How he runs the products', p: ['The way a network is run: every product is monitored, every change is dated in a public log, and when something does not work it is said plainly. Client projects are held to the same standard.'] },
      { h: 'How to reach him', p: [`Write to ${CONTACT_EMAIL} or use the contact form. He leads every client engagement directly.`] },
    ],
    timelineH2: 'Timeline',
    timeline: [
      { d: '2026-04-20', t: `${LEGAL_NAME} filed in Florida (document ${DOC_NUMBER}).` },
      { d: '2026-11-03', t: 'Corporate site with live checks of each product.' },
      { d: '2026-11-18', t: 'moyiq, formerly MOY IQ, launches its new identity.' },
      { d: '2026-11-20', t: 'Three products in production: DypOS, moyiq and Esmalia.' },
    ],
  },
  logPage: {
    h1: 'Shipping log',
    lead: 'What we shipped, with its date. A company that operates leaves a record.',
    days: 'days since filing',
    entries: 'dated entries',
    productsLive: 'products in production',
    asOf: (d: string) => `As of ${d}.`,
    filterLabel: 'Show',
    all: 'All',
    company: 'Company',
    start: 'Filed in Florida',
    today: 'Today',
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
        { h: 'Our products', p: ['DypOS, moyiq and Esmalia each have their own privacy policy, published on their own sites. This page only covers maxnovaluci.com.'] },
      ],
    },
    terms: {
      h1: 'Terms of use',
      sections: [
        { h: 'About this site', p: [`This site belongs to ${LEGAL_NAME}. By using it you accept these terms.`] },
        { h: 'Information only', p: ['What we publish is general information about the company and its products. It is not legal, tax or financial advice, and it is not an offer. Any service is governed by a written agreement.'] },
        { h: 'Live checks', p: ['The status shown on this site is an automatic measurement from our server. It may differ from what you experience and it is not a service level commitment.'] },
        { h: 'Products', p: ['DypOS, moyiq and Esmalia have their own terms, published on their own sites.'] },
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
      description: 'LLC de Florida que construye y opera su propio software: DypOS, moyiq y Esmalia. También hacemos software con IA y apoyamos la entrada a EE. UU.',
    },
    products: {
      title: 'DypOS, moyiq y Esmalia | Maxnova & Luci Global',
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
      description: 'Lo que entregamos en DypOS, moyiq, Esmalia y la empresa, con su fecha.',
    },
    studio: {
      title: 'Estudio de software en Florida con SaaS propios para Latinoamérica',
      description: 'MAXNOVA & LUCI GLOBAL LLC, empresa de Florida, construye y opera DypOS, moyiq y Esmalia para Latinoamérica, y hace software con IA para otras empresas.',
    },
    founder: {
      title: 'Walter La Madriz, ingeniero de telecom y fundador de software',
      description: 'Walter La Madriz, ingeniero de telecomunicaciones con 15 años en telecom, fundó MAXNOVA & LUCI GLOBAL LLC en Florida para construir SaaS para Latinoamérica.',
    },
    privacy: {
      title: 'Política de privacidad | Maxnova & Luci Global',
      description: 'Qué recoge este sitio, para qué, quién lo procesa y cómo pedirnos que lo borremos.',
    },
    terms: {
      title: 'Términos de uso | Maxnova & Luci Global',
      description: 'Términos para usar maxnovaluci.com, el sitio de MAXNOVA & LUCI GLOBAL LLC, empresa de Florida.',
    },
  },
  home: {
    h1: 'Construimos los nuestros antes que el tuyo.',
    h1Accent: 'los nuestros',
    lead: 'Operamos tres productos de software en producción. Con esa experiencia construimos software con IA a medida y ayudamos a empresas latinoamericanas a entrar a EE. UU.',
    primary: 'Ver los productos',
    secondary: 'Hablemos de tu proyecto',
    bentoH2: 'Pruébalos aquí mismo',
    bentoIntro: 'Las tres demos de abajo usan datos de ejemplo. Cada producto se abre completo en su propio sitio.',
    sample: 'Datos de ejemplo',
    open: (name: string) => `Abrir ${name}`,
    from: 'Desde',
    perMonth: '/mes',
    freeTrial: '14 días gratis',
    dypos: {
      label: 'Demo de DypOS: cocina en vivo, con datos de ejemplo',
      title: 'Cocina',
      titleAccent: 'en vivo',
      cols: ['Recibido', 'En cocina', 'Listo'],
      table: 'Mesa',
      noTickets: 'Sin comandas',
      items: [
        ['2×', 'Hamburguesa de la casa', 'Sin cebolla'],
        ['1×', 'Limonada de jengibre', ''],
      ],
      ghost1: ['1×', 'Cerveza rubia'],
      ghost2: [['2×', 'Costillar a la brasa'], ['1×', 'Nachos con guacamole']],
      inKitchen: 'En preparación',
      ready: 'Listo para servir',
      buttons: ['Enviar a cocina', 'Marcar listo', 'Nueva comanda'],
      footIdle: 'cada venta descuenta su costo: así se ve la ganancia real del día.',
      footLabel: 'Al cerrar',
      closed: (table: number) => `Mesa ${table} cerrada`,
      closedLine: 'venta $18.400 · costo $6.150 ·',
      profit: 'ganancia $12.250',
      what: 'Punto de venta, cocina, inventario y finanzas conectados: la ganancia real del día, no solo lo vendido.',
      price: 'US$49',
    },
    moyiq: {
      label: 'Demo de moyiq: registrar un gasto, con datos de ejemplo',
      date: 'Jueves 20 de noviembre',
      left: 'Te quedan este mes',
      inputLabel: 'Escribe un gasto, como lo dirías',
      inputValue: 'uber 12',
      add: 'Agregar',
      empty: 'Escribe qué y cuánto',
      other: 'Otros · revisa la categoría',
      noAmount: 'Falta el monto',
      now: 'Ahora',
      list: [
        ['C', '#F28C28', 'Supermercado', 'Comida · Hoy', '−$42.90'],
        ['S', '#2BB673', 'Farmacia', 'Salud · Ayer', '−$15.20'],
      ],
      samples: ['netflix 9.99', 'super 38.50', 'cafe 4.20', 'farmacia 15'],
      what: 'Finanzas personales privadas, sin conectar el banco, con un IQ Score de 0 a 100.',
      free: 'Gratis',
      pro: 'Pro',
      proPrice: 'US$4,99',
      proYear: 'US$39,99',
      perYear: '/año',
      or: 'o',
    },
    esmalia: {
      label: 'Demo de Esmalia: confirmar una cita por WhatsApp, con datos de ejemplo',
      day: 'Mañana',
      date: 'viernes 21 de noviembre',
      count: '9 citas',
      chairs: '2 sillones',
      confirmed: 'Confirmadas',
      of: 'de',
      rows: [
        ['09:00', 'Andrea M.', 'Control · Dra. Paz'],
        ['10:30', 'Camila R.', 'Limpieza · Dr. Soto'],
        ['11:15', 'Jorge L.', 'Endodoncia · Dra. Paz'],
      ],
      ok: 'Confirmada',
      pending: 'Por confirmar',
      wa: 'Recordatorio por WhatsApp',
      msgOut: 'Hola, Camila. Te esperamos mañana a las 10:30 para tu limpieza. ¿Confirmas tu cita?',
      msgIn: 'Sí, confirmo. ¡Gracias!',
      simulate: 'Simular la respuesta de la paciente',
      reset: 'Reiniciar el ejemplo',
      what: 'Agenda, ficha con odontograma, caja del día y confirmaciones por WhatsApp.',
      price: 'US$19,99',
    },
    ai: {
      kicker: 'Se cotiza por proyecto',
      title: 'Software con IA a medida',
      text: 'El mismo equipo y el mismo método con que operamos nuestros productos, aplicados al proceso de tu empresa.',
      casesLabel: 'Elige tu caso para empezar el mensaje',
      cases: [
        { label: 'Un proceso manual nos come horas cada semana', msg: 'Tenemos un proceso manual que nos come horas cada semana y queremos automatizarlo.' },
        { label: 'Necesitamos un sistema interno a medida', msg: 'Necesitamos un sistema interno a medida para nuestra empresa.' },
        { label: 'Queremos sumar IA a lo que ya usamos', msg: 'Queremos sumar IA al software que ya usamos.' },
      ],
      write: 'Escribir',
      note: 'Propuesta con alcance y precio por escrito, después de una llamada de diagnóstico.',
      builtTitle: 'Piezas que ya operamos en producción',
      built: [
        { color: '#D4F25A', text: 'Gastos escritos como se dicen, categorizados', who: 'moyiq' },
        { color: '#FF7A00', text: 'Costo descontado en cada venta', who: 'DypOS' },
        { color: '#FF6B7F', text: 'Confirmación de citas por WhatsApp', who: 'Esmalia' },
      ],
    },
    usa: {
      kicker: 'Se cotiza por proyecto',
      title: 'Entrar al mercado de EE. UU.',
      intro: 'Lo que ya hicimos para nosotros:',
      done: [
        { t: 'LLC registrada en Florida', s: '20 de abril de 2026' },
        { t: 'Suscripciones cobrando en dólares', s: 'moyiq y Esmalia' },
        { t: 'Cuenta de vendedor de Amazon abierta', s: 'primera compra en preparación' },
      ],
      case: { label: 'Quiero vender en EE. UU.', msg: 'Quiero vender o cobrar en EE. UU. y me sirve su experiencia operativa.' },
      disclaimer: 'Experiencia operativa, no asesoría legal ni tributaria.',
    },
    prep: {
      title: 'También en la empresa, no público',
      foot: 'El servidor de este sitio mide cada minuto si cada producto responde. El punto se pone verde solo después de medir.',
    },
    registry: { kind: 'LLC de Florida', doc: 'Documento', filed: 'Presentada el', verify: 'Verificar en Sunbiz' },
    processH2: 'Cómo trabajamos contigo',
    processIntro: 'Igual para software con IA que para entrar a EE. UU. No hay paquetes: cada proyecto se cotiza por escrito después de entender el problema.',
    moneyTitle: 'Cómo ganamos dinero',
    money: 'Ganamos dinero con las suscripciones de nuestros productos y con proyectos a medida cotizados por escrito. No vendemos datos ni cobramos comisiones ocultas.',
    pricesLabel: 'Precios publicados',
    customRow: 'Proyectos a medida',
    customValue: 'cotizados por escrito',
    founderBio: 'Ingeniero de telecomunicaciones con 15 años en telecom: ingeniería, producto y ventas B2B a operadores, en Venezuela y Chile. Hoy construye y opera software para Latinoamérica.',
    closing: 'Software que operamos, no solo que vendemos.',
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
    sumChecking: 'Midiendo los productos ahora…',
    sum: (up: number | string, total: number | string, time: string) => `${up} de ${total} productos responden · medido a las\u00a0${time}\u00a0UTC`,
    sumUnavailable: 'La medición en vivo no está disponible ahora.',
    recheck: 'Medir de nuevo',
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
    h1: 'Dos servicios, sacados de nuestros propios productos.',
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
        proof: 'DypOS, moyiq y Esmalia funcionan con este proceso.',
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
    lead: `${LEGAL_NAME} (Maxnova & Luci Global) es una sociedad de responsabilidad limitada de Florida, constituida en abril de 2026, que construye y opera sus propios productos de software, DypOS, moyiq y Esmalia, y ofrece desarrollo de software con IA y apoyo para entrar a Estados Unidos a empresas latinoamericanas.`,
    factsH2: 'Datos de la empresa',
    facts: [
      { k: 'Razón social', v: LEGAL_NAME },
      { k: 'Tipo de entidad', v: 'Sociedad de responsabilidad limitada (LLC) de Florida' },
      { k: 'Número de documento', v: DOC_NUMBER, mono: true },
      { k: 'Registrada', v: '20 de abril de 2026' },
      { k: 'Vigente desde', v: '21 de abril de 2026' },
      { k: 'Estado', v: 'Activa (Sunbiz, revisado el 2 de noviembre de 2026)' },
      { k: 'Fundador', v: FOUNDER },
      { k: 'Alcance', v: 'Empresas y personas de toda Latinoamérica, desde Estados Unidos' },
      { k: 'Email', v: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    ],
    verifyH2: 'Compruébalo tú mismo',
    verify: 'La División de Corporaciones de Florida publica este registro. La dirección principal, el agente registrado y las personas autorizadas están en esa ficha.',
    verifyLink: 'Abrir la ficha en Sunbiz',
    founderH2: 'Fundador',
    founderName: FOUNDER,
    founderRole: 'Fundador',
    founderAlt: 'Walter La Madriz, fundador de Maxnova & Luci Global',
    founder: [
      'Soy ingeniero en telecomunicaciones. Pasé quince años en telecomunicaciones para operadores en Venezuela y Chile, entre ingeniería de redes, producto y ventas B2B.',
      'Opero estos productos como se opera una red: todo se monitorea, cada cambio queda fechado y, si algo no funciona, lo decimos.',
      'Cuando trabajamos contigo, usamos la misma forma de trabajo y le exigimos al resultado lo mismo.',
    ],
    faqH2: 'Preguntas',
    faq: [
      { q: '¿Qué es Maxnova & Luci Global?', a: `${LEGAL_NAME} es una sociedad de responsabilidad limitada de Florida que construye y opera productos de software: DypOS para restaurantes, moyiq para finanzas personales y Esmalia para clínicas dentales.` },
      { q: '¿Cómo verifico la empresa?', a: `Busca el número de documento ${DOC_NUMBER} en Sunbiz, el registro de la División de Corporaciones de Florida. La empresa se registró el 20 de abril de 2026.` },
      { q: '¿Da asesoría legal o tributaria?', a: 'No. No somos un estudio de abogados ni una firma contable. Los temas legales y tributarios corresponden a profesionales con licencia.' },
      { q: '¿Son un holding?', a: 'Los productos pertenecen a una sola LLC. No son filiales separadas.' },
      { q: '¿Dónde está la empresa?', a: 'Está registrada en Florida, Estados Unidos, y construye para empresas y personas de toda Latinoamérica. La dirección principal figura en la ficha de Sunbiz.' },
      { q: '¿Cuántos clientes tienen?', a: 'Estamos al comienzo y todavía no publicamos cifras de clientes. Cada producto se puede probar hoy.' },
      { q: '¿Cómo los contacto?', a: `Con el formulario de contacto o escribiendo a ${CONTACT_EMAIL}.` },
    ],
  },
  studioPage: {
    h1: 'Un estudio de software en Florida que opera sus propios SaaS para Latinoamérica',
    lead: `${LEGAL_NAME} es una empresa de software registrada en Florida. Antes de venderle software a nadie, construyó tres productos SaaS propios para Latinoamérica, DypOS, moyiq y Esmalia, y hoy los opera.`,
    productsH2: '¿Qué productos opera?',
    productsCols: ['Producto', 'Para', 'Precio público'],
    sections: [
      { h: '¿Qué tipo de empresa es?', p: ['Un estudio de productos dentro de una sola entidad legal. DypOS, moyiq y Esmalia pertenecen a la misma LLC de Florida; no son filiales separadas. La empresa diseña, construye, vende y da soporte a cada producto, y usa esa experiencia para construir software con IA para otras empresas.'] },
      { h: '¿Por qué construir primero sus propios productos?', p: ['Operar software en producción enseña lo que una presentación no: cobrar en dólares desde Latinoamérica, dar soporte en español, mantener el servicio arriba, cuidar la privacidad y entregar cada semana. Cada producto está en línea, con precio y abierto para probar, así que un cliente puede juzgar el trabajo antes de escribir.'] },
      { h: '¿Para quién construye software?', p: ['Para empresas de toda Latinoamérica que necesitan un sistema interno, un producto SaaS o sumar IA al software que ya usan. También comparte su experiencia operativa con empresas latinoamericanas que quieren venderle a Estados Unidos; eso no es asesoría legal ni tributaria.', 'Cada proyecto se cotiza por escrito después de una llamada de diagnóstico.'] },
      { h: '¿En qué se diferencia de una agencia o de una firma nearshore?', p: ['Es chica y opera sus propios productos. El fundador, Walter La Madriz, lidera cada trabajo directamente, sin una capa comercial entre el cliente y quienes construyen. No es la opción correcta para aumentar equipos a gran escala.'] },
      { h: '¿Cómo lo verifico?', p: [`Busca el número de documento ${DOC_NUMBER} en Sunbiz, el registro de la División de Corporaciones de Florida: la empresa se registró el 20 de abril de 2026. Este sitio además mide cada minuto si cada producto responde y lleva un registro fechado de lo que se entrega.`] },
    ],
    more: 'Sigue leyendo',
  },
  founderPage: {
    h1: 'Walter La Madriz: de ingeniero de telecomunicaciones a fundador de software en Florida',
    lead: `Walter La Madriz es ingeniero de telecomunicaciones y fundador de ${LEGAL_NAME}, una empresa de software de Florida que construye y opera DypOS, moyiq y Esmalia para Latinoamérica.`,
    sections: [
      { h: 'Quince años en telecomunicaciones', p: ['Pasó quince años en telecomunicaciones para operadores en Venezuela y Chile, entre ingeniería de redes, producto y ventas B2B a operadores.'] },
      { h: 'Por qué software para Latinoamérica', p: ['En abril de 2026 registró la empresa en Florida para construir productos de software para Latinoamérica y cobrarlos en dólares. Hoy la empresa opera un punto de venta para restaurantes, una app de finanzas personales y un sistema para clínicas dentales.'] },
      { h: 'Cómo opera los productos', p: ['Como se opera una red: cada producto se monitorea, cada cambio queda fechado en un registro público y, cuando algo no funciona, se dice claramente. Los proyectos para clientes se hacen con la misma exigencia.'] },
      { h: 'Cómo contactarlo', p: [`Escribe a ${CONTACT_EMAIL} o usa el formulario de contacto. Él lidera directamente cada trabajo con clientes.`] },
    ],
    timelineH2: 'Línea de tiempo',
    timeline: [
      { d: '2026-04-20', t: `${LEGAL_NAME} se registra en Florida (documento ${DOC_NUMBER}).` },
      { d: '2026-11-03', t: 'Web corporativa con chequeos en vivo de cada producto.' },
      { d: '2026-11-18', t: 'moyiq, antes MOY IQ, estrena su identidad nueva.' },
      { d: '2026-11-20', t: 'Tres productos en producción: DypOS, moyiq y Esmalia.' },
    ],
  },
  logPage: {
    h1: 'Registro de entregas',
    lead: 'Lo que entregamos, con su fecha. Una empresa que opera deja constancia.',
    days: 'días desde el registro',
    entries: 'entregas fechadas',
    productsLive: 'productos en producción',
    asOf: (d: string) => `Al ${d}.`,
    filterLabel: 'Mostrar',
    all: 'Todo',
    company: 'Empresa',
    start: 'Registro en Florida',
    today: 'Hoy',
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
        { h: 'Nuestros productos', p: ['DypOS, moyiq y Esmalia tienen cada uno su propia política de privacidad, publicada en su sitio. Esta página cubre solo maxnovaluci.com.'] },
      ],
    },
    terms: {
      h1: 'Términos de uso',
      sections: [
        { h: 'Sobre este sitio', p: [`Este sitio pertenece a ${LEGAL_NAME}. Al usarlo aceptas estos términos.`] },
        { h: 'Solo información', p: ['Lo que publicamos es información general sobre la empresa y sus productos. No es asesoría legal, tributaria ni financiera, ni una oferta. Todo servicio se rige por un acuerdo escrito.'] },
        { h: 'Chequeos en vivo', p: ['El estado que muestra este sitio es una medición automática desde nuestro servidor. Puede diferir de lo que tú experimentes y no es un compromiso de nivel de servicio.'] },
        { h: 'Productos', p: ['DypOS, moyiq y Esmalia tienen sus propios términos, publicados en sus sitios.'] },
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

/** "November 2026" / "noviembre de 2026" from "2026-11". */
export const formatMonth = (ym: string, lang: Lang) =>
  new Intl.DateTimeFormat(lang === 'es' ? 'es-419' : 'en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${ym}-01T00:00:00Z`));

/** "Nov 19" / "19 nov" from an ISO date. */
export const formatDay = (iso: string, lang: Lang) =>
  new Intl.DateTimeFormat(lang === 'es' ? 'es-419' : 'en-US', { day: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`)).replace('.', '');

/** Labels the live-status script reads from a [data-status] block. */
export const statusData = (t: Copy) => ({
  'data-status': '',
  'data-checking': t.network.sumChecking,
  'data-online': t.network.online,
  'data-offline': t.network.offline,
  'data-nodata': t.network.noData,
  'data-unavailable': t.network.sumUnavailable,
  'data-sum': t.network.sum('{up}', '{total}', '{t}' as string),
});
