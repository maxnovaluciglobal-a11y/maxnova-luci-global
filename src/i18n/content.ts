// All site copy lives here, one object per language. Edit text here, not in the components.
// Only publish facts Walter has confirmed (see PRODUCT.md → Evidence on Hand).

export type Lang = 'en' | 'es';

export const SITE_URL = 'https://maxnova-luci-global.vercel.app';
export const CONTACT_EMAIL = 'maxnovaluciglobal@gmail.com';
export const LEGAL_NAME = 'MAXNOVA & LUCI GLOBAL LLC';
export const BRAND_NAME = 'Maxnova & Luci Global';

export type Status = 'live' | 'active' | 'building';

export interface Holding {
  id: string;
  name: string;
  logo?: 'dypos' | 'moyiq' | 'esmalia';
  shot?: 'dypos' | 'moyiq' | 'esmalia';
  url?: string;
  urlLabel?: string;
  status: Status;
  sector: Record<Lang, string>;
  market: Record<Lang, string>;
  summary: Record<Lang, string>;
}

export const holdings: Holding[] = [
  {
    id: 'dypos',
    name: 'DypOS',
    logo: 'dypos',
    shot: 'dypos',
    url: 'https://www.dypos.app',
    urlLabel: 'dypos.app',
    status: 'live',
    sector: { en: 'Restaurants', es: 'Restaurantes' },
    market: { en: 'Latin America', es: 'Latinoamérica' },
    summary: {
      en: 'Point of sale, live kitchen, inventory and finance on one platform. At the end of the month a restaurant sees its real P&L, with cost per dish and payroll.',
      es: 'Punto de venta, cocina en vivo, inventario y finanzas en una sola plataforma. A fin de mes el restaurante ve su P&L real, con costo por plato y nómina.',
    },
  },
  {
    id: 'moyiq',
    name: 'MOY IQ',
    logo: 'moyiq',
    shot: 'moyiq',
    url: 'https://moyiq.app',
    urlLabel: 'moyiq.app',
    status: 'live',
    sector: { en: 'Personal finance', es: 'Finanzas personales' },
    market: { en: 'United States and Latin America', es: 'Estados Unidos y Latinoamérica' },
    summary: {
      en: 'Log expenses or import a bank file and see where the money goes, with an IQ Score from 0 to 100 that explains every number. No bank login required.',
      es: 'Registras tus gastos o importas el archivo del banco y ves en qué se va el dinero, con un IQ Score de 0 a 100 que explica cada número. Sin conectar el banco.',
    },
  },
  {
    id: 'esmalia',
    name: 'Esmalia',
    logo: 'esmalia',
    shot: 'esmalia',
    url: 'https://esmalia.com',
    urlLabel: 'esmalia.com',
    status: 'live',
    sector: { en: 'Dental clinics', es: 'Clínicas dentales' },
    market: { en: 'Chile, Peru, Mexico, Colombia, Argentina', es: 'Chile, Perú, México, Colombia, Argentina' },
    summary: {
      en: 'Appointment confirmations over WhatsApp, the patient chart and odontogram in one place, and a daily view of what was collected and who still owes.',
      es: 'Confirmación de citas por WhatsApp, ficha y odontograma en un mismo lugar, y una vista diaria de lo cobrado y de quién debe.',
    },
  },
  {
    id: 'amazon',
    name: 'Amazon FBA',
    status: 'active',
    sector: { en: 'E-commerce', es: 'E-commerce' },
    market: { en: 'United States', es: 'Estados Unidos' },
    summary: {
      en: 'A Seller Central Professional account held by the company, selling through Fulfillment by Amazon in the United States.',
      es: 'Una cuenta Seller Central Professional a nombre de la empresa, que vende con Fulfillment by Amazon en Estados Unidos.',
    },
  },
  {
    id: 'health',
    name: 'Healthcare SaaS',
    status: 'building',
    sector: { en: 'Medical practices', es: 'Consultorios médicos' },
    market: { en: 'Latin America', es: 'Latinoamérica' },
    summary: {
      en: 'Practice software for general medicine, built on the same foundation as Esmalia. Not yet public.',
      es: 'Software para consultorios de medicina general, construido sobre la misma base que Esmalia. Todavía no es público.',
    },
  },
];

const en = {
  lang: 'en' as Lang,
  locale: 'en_US',
  path: '/',
  altPath: '/es/',
  altLabel: 'Español',
  altShort: 'ES',
  meta: {
    title: 'Maxnova & Luci Global — We build and run software companies',
    description:
      'Florida company behind DypOS, MOY IQ and Esmalia, live software products in Latin America. We also build AI software, help companies enter the US market and sell on Amazon.',
  },
  skip: 'Skip to content',
  nav: { portfolio: 'Portfolio', services: 'Services', company: 'Company', cta: 'Talk to us', label: 'Main' },
  status: { live: 'Live', active: 'Active', building: 'In development' } as Record<Status, string>,
  cover: {
    h1: 'We build and run software companies.',
    lead:
      'DypOS, MOY IQ and Esmalia are live products serving real customers. We bring the same way of working to your company: AI software, US market entry and e-commerce.',
    primary: 'Talk to us',
    secondary: 'See the portfolio',
    scheduleTitle: 'Operating companies',
    cols: { company: 'Company', sector: 'Sector', status: 'Status' },
  },
  portfolio: {
    h2: 'Portfolio',
    intro: 'Every company below is ours. The live ones are a click away, so you can judge the work before you write to us.',
    market: 'Market',
    open: 'Open',
    shotAlt: (name: string) => `Home page of ${name}, captured October 2026`,
    indexLabel: 'Portfolio index',
  },
  services: {
    h2: 'What we do for other companies',
    intro: 'Each engagement is quoted per project, after a diagnostic call.',
    items: [
      {
        title: 'AI software and SaaS',
        who: 'For companies that need a product, an internal tool or an automation built and running.',
        what: 'We scope it, build it and put it in production with the same stack and process behind DypOS, MOY IQ and Esmalia.',
      },
      {
        title: 'US market entry',
        who: 'For Latin American companies that want to sell to, or operate from, the United States.',
        what: 'Florida LLC, US banking, Stripe and platform accounts. We set all of this up for our own companies first.',
      },
      {
        title: 'Amazon FBA and e‑commerce',
        who: 'For brands and importers that want to sell on Amazon in the United States.',
        what: 'Seller Central setup, listings and Fulfillment by Amazon logistics, from an account we operate ourselves.',
      },
      {
        title: 'Telecom and sourcing',
        who: 'For operators and companies with network projects or suppliers in China.',
        what: 'Technical and commercial support drawn from fifteen years in carrier telecom, and sourcing from Chinese suppliers.',
      },
    ],
    cta: 'Request a diagnostic call',
  },
  process: {
    h2: 'How an engagement works',
    steps: [
      { title: 'Diagnostic call', text: 'We learn what you need and tell you plainly whether we are the right fit.' },
      { title: 'Quoted proposal', text: 'Scope, timeline and price in writing, before any work starts.' },
      { title: 'Build', text: 'Short cycles with a working preview you can open at any time.' },
      { title: 'Handover', text: 'You receive the result, the documentation and the access to run it.' },
    ],
  },
  letter: {
    h2: 'A note from the founder',
    body: [
      'I am a telecommunications engineer. I spent fifteen years in carrier telecom in Venezuela and Chile, across network engineering, product and B2B sales.',
      'Maxnova & Luci Global is where I build my own companies: DypOS for restaurants, MOY IQ for personal finance, Esmalia for dental clinics. Each one is live and you can open it today.',
      'When we work with you, we use the same process and hold the work to the same standard.',
    ],
    name: 'Walter La Madriz',
    role: 'Founder',
  },
  company: {
    h2: 'Company information',
    rows: [
      { k: 'Legal name', v: LEGAL_NAME },
      { k: 'Entity', v: 'Florida limited liability company' },
      { k: 'Presence', v: 'United States · Chile' },
      { k: 'Email', v: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
  faq: {
    h2: 'Questions',
    items: [
      {
        q: 'What is Maxnova & Luci Global?',
        a: `${LEGAL_NAME} is a Florida limited liability company that builds and operates software products, and offers consulting based on that experience.`,
      },
      {
        q: 'Which products does it operate?',
        a: 'DypOS (software for restaurants), MOY IQ (personal finance) and Esmalia (software for dental clinics) are live. It also runs an Amazon FBA operation in the United States and has a healthcare product in development.',
      },
      {
        q: 'Where is the company based and where does it work?',
        a: 'The company is registered in Florida, United States, and also operates from Chile. Its products serve customers across Latin America and the United States.',
      },
      {
        q: 'What consulting services do you offer?',
        a: 'AI software and SaaS development, US market entry (LLC, banking, Stripe and platform accounts), Amazon FBA and e-commerce, and telecom and sourcing support.',
      },
      {
        q: 'How is consulting priced?',
        a: 'Each engagement is quoted per project after a diagnostic call. There are no fixed public prices.',
      },
      {
        q: 'How do I get in touch?',
        a: `Use the contact form on this page or write to ${CONTACT_EMAIL}.`,
      },
    ],
  },
  contact: {
    h2: 'Tell us what you are working on',
    intro: 'We read every message and reply by email.',
    fields: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      optional: 'optional',
      topic: 'Topic',
      message: 'Message',
    },
    topics: [
      'AI software and SaaS',
      'US market entry',
      'Amazon FBA and e-commerce',
      'Telecom and sourcing',
      'Investment or partnership',
      'Something else',
    ],
    submit: 'Send message',
    sending: 'Sending…',
    sent: 'Thank you. Your message reached us, and we will reply by email.',
    error: 'We could not send your message. Please try again, or write to',
    invalid: 'Please fill in your name, a valid email and a message.',
  },
  footer: {
    talent: 'Want to build with us? Write to',
    rights: 'All rights reserved.',
  },
  notFound: {
    title: 'Page not found',
    text: 'This page does not exist. The home page has everything we publish.',
    back: 'Go to the home page',
  },
};

export type Copy = typeof en;

const es: Copy = {
  lang: 'es',
  locale: 'es_419',
  path: '/es/',
  altPath: '/',
  altLabel: 'English',
  altShort: 'EN',
  meta: {
    title: 'Maxnova & Luci Global — Construimos y operamos empresas de software',
    description:
      'Empresa de Florida detrás de DypOS, MOY IQ y Esmalia, productos de software en producción en Latinoamérica. También construimos software con IA, ayudamos a entrar a EE. UU. y a vender en Amazon.',
  },
  skip: 'Saltar al contenido',
  nav: { portfolio: 'Portfolio', services: 'Servicios', company: 'Empresa', cta: 'Hablemos', label: 'Principal' },
  status: { live: 'En producción', active: 'Activo', building: 'En desarrollo' },
  cover: {
    h1: 'Construimos y operamos empresas de software.',
    lead:
      'DypOS, MOY IQ y Esmalia son productos en producción con clientes reales. Llevamos esa misma forma de trabajar a tu empresa: software con IA, entrada a EE. UU. y e-commerce.',
    primary: 'Hablemos',
    secondary: 'Ver el portfolio',
    scheduleTitle: 'Empresas en operación',
    cols: { company: 'Empresa', sector: 'Sector', status: 'Estado' },
  },
  portfolio: {
    h2: 'Portfolio',
    intro: 'Todas las empresas de esta lista son nuestras. Las que están en producción se abren con un clic, así puedes juzgar el trabajo antes de escribirnos.',
    market: 'Mercado',
    open: 'Abrir',
    shotAlt: (name: string) => `Página de inicio de ${name}, capturada en octubre de 2026`,
    indexLabel: 'Índice del portfolio',
  },
  services: {
    h2: 'Qué hacemos para otras empresas',
    intro: 'Cada trabajo se cotiza por proyecto, después de una llamada de diagnóstico.',
    items: [
      {
        title: 'Software con IA y SaaS',
        who: 'Para empresas que necesitan un producto, una herramienta interna o una automatización construida y funcionando.',
        what: 'Lo definimos, lo construimos y lo ponemos en producción con el mismo stack y la misma forma de trabajo de DypOS, MOY IQ y Esmalia.',
      },
      {
        title: 'Entrada a EE. UU.',
        who: 'Para empresas latinoamericanas que quieren venderle a Estados Unidos u operar desde allá.',
        what: 'LLC en Florida, banca en EE. UU., Stripe y cuentas de plataforma. Todo esto lo armamos primero para nuestras propias empresas.',
      },
      {
        title: 'Amazon FBA y e‑commerce',
        who: 'Para marcas e importadores que quieren vender en Amazon Estados Unidos.',
        what: 'Alta en Seller Central, publicaciones y logística con Fulfillment by Amazon, desde una cuenta que operamos nosotros.',
      },
      {
        title: 'Telecom e importación',
        who: 'Para operadores y empresas con proyectos de red o proveedores en China.',
        what: 'Apoyo técnico y comercial con quince años de experiencia en telecomunicaciones, e importación desde proveedores chinos.',
      },
    ],
    cta: 'Pedir una llamada de diagnóstico',
  },
  process: {
    h2: 'Cómo es trabajar con nosotros',
    steps: [
      { title: 'Llamada de diagnóstico', text: 'Entendemos qué necesitas y te decimos con franqueza si somos la opción correcta.' },
      { title: 'Propuesta cotizada', text: 'Alcance, plazos y precio por escrito, antes de empezar.' },
      { title: 'Construcción', text: 'Ciclos cortos con una versión de prueba que puedes abrir en cualquier momento.' },
      { title: 'Entrega', text: 'Recibes el resultado, la documentación y los accesos para operarlo.' },
    ],
  },
  letter: {
    h2: 'Unas líneas del fundador',
    body: [
      'Soy ingeniero en telecomunicaciones. Pasé quince años en telecomunicaciones para operadores en Venezuela y Chile, entre ingeniería de redes, producto y ventas B2B.',
      'Maxnova & Luci Global es donde construyo mis propias empresas: DypOS para restaurantes, MOY IQ para finanzas personales y Esmalia para clínicas dentales. Todas están en producción y puedes abrirlas hoy.',
      'Cuando trabajamos contigo, usamos la misma forma de trabajo y le exigimos al resultado lo mismo.',
    ],
    name: 'Walter La Madriz',
    role: 'Fundador',
  },
  company: {
    h2: 'Datos de la empresa',
    rows: [
      { k: 'Razón social', v: LEGAL_NAME },
      { k: 'Tipo de entidad', v: 'Limited liability company de Florida' },
      { k: 'Presencia', v: 'Estados Unidos · Chile' },
      { k: 'Email', v: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
  faq: {
    h2: 'Preguntas',
    items: [
      {
        q: '¿Qué es Maxnova & Luci Global?',
        a: `${LEGAL_NAME} es una limited liability company de Florida que construye y opera productos de software, y ofrece consultoría basada en esa experiencia.`,
      },
      {
        q: '¿Qué productos opera?',
        a: 'DypOS (software para restaurantes), MOY IQ (finanzas personales) y Esmalia (software para clínicas dentales) están en producción. También opera una cuenta de Amazon FBA en Estados Unidos y tiene un producto de salud en desarrollo.',
      },
      {
        q: '¿Dónde está la empresa y dónde trabaja?',
        a: 'La empresa está registrada en Florida, Estados Unidos, y también opera desde Chile. Sus productos atienden clientes en Latinoamérica y Estados Unidos.',
      },
      {
        q: '¿Qué servicios de consultoría ofrecen?',
        a: 'Desarrollo de software con IA y SaaS, entrada a EE. UU. (LLC, banca, Stripe y cuentas de plataforma), Amazon FBA y e-commerce, y apoyo en telecomunicaciones e importación.',
      },
      {
        q: '¿Cómo se cobra la consultoría?',
        a: 'Cada trabajo se cotiza por proyecto después de una llamada de diagnóstico. No hay precios públicos fijos.',
      },
      {
        q: '¿Cómo los contacto?',
        a: `Con el formulario de esta página o escribiendo a ${CONTACT_EMAIL}.`,
      },
    ],
  },
  contact: {
    h2: 'Cuéntanos en qué estás trabajando',
    intro: 'Leemos cada mensaje y respondemos por email.',
    fields: {
      name: 'Nombre',
      email: 'Email',
      company: 'Empresa',
      optional: 'opcional',
      topic: 'Tema',
      message: 'Mensaje',
    },
    topics: [
      'Software con IA y SaaS',
      'Entrada a EE. UU.',
      'Amazon FBA y e-commerce',
      'Telecom e importación',
      'Inversión o alianza',
      'Otro tema',
    ],
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    sent: 'Gracias. Tu mensaje nos llegó y te respondemos por email.',
    error: 'No pudimos enviar tu mensaje. Prueba de nuevo o escríbenos a',
    invalid: 'Completa tu nombre, un email válido y el mensaje.',
  },
  footer: {
    talent: '¿Quieres construir con nosotros? Escríbenos a',
    rights: 'Todos los derechos reservados.',
  },
  notFound: {
    title: 'Página no encontrada',
    text: 'Esta página no existe. En el inicio está todo lo que publicamos.',
    back: 'Ir al inicio',
  },
};

export const copy: Record<Lang, Copy> = { en, es };
