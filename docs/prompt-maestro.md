# Prompt maestro — web corporativa MAXNOVA & LUCI GLOBAL LLC

Estado: **aprobado por Walter el 18-oct-2026**. Fuente de verdad del encargo de la web.
Origen: entrevista bloques 1-3 de la guía "Tu primera web con un agente" (`03 - Formacion/domina-ia/guia-primera-web/`) + auditoría del 18-oct-2026.

---

## 1. Rol y resultado
Actuá como director de arte, diseñador UX/UI y desarrollador frontend con criterio de SEO técnico y de contenido para búsqueda con IA. Rehacé la web corporativa de MAXNOVA & LUCI GLOBAL LLC en el repo `maxnovaluciglobal-a11y/maxnova-luci-global` (Vercel `maxnova-luci-global`).
**Acción principal:** que el visitante envíe el formulario de contacto y que el mensaje llegue de verdad.
**Qué tiene que entender en 5 segundos:** es una empresa de Florida que **construye y opera productos de software en producción** y que, con esa experiencia, **ayuda a otras empresas** a construir software con IA y a entrar al mercado de EE. UU.

## 2. Negocio y evidencia

**Datos confirmados**
- Entidad: MAXNOVA & LUCI GLOBAL LLC, a Florida limited liability company. Presencia declarada: USA & Chile.
- Posicionamiento: **holding de productos + consultoría**. Los productos son la prueba; la consultoría es la oferta comercial.
- Públicos (en este orden de prioridad para la primera pantalla):
  1. Clientes B2B y 2. inversores/socios → primera pantalla, portfolio y servicios.
  3. Bancos y plataformas (banco de la empresa, Stripe, Amazon, proveedores) → bloque "Company" con datos legales y de contacto verificables.
  4. Talento → una línea en el footer.
- Portfolio (estado verificado el 18-oct-2026):
  | Producto | Qué es | URL | Estado |
  |---|---|---|---|
  | DypOS | SaaS para gastronomía (restaurantes) | https://www.dypos.app | En producción, clientes reales |
  | MOY IQ | Finanzas personales | https://moyiq.app | En producción |
  | Esmalia | SaaS para clínicas dentales de LatAm | https://esmalia.com | En producción con cobro |
  | MedOS | SaaS médico | — | "Coming soon", **sin nombre ni logo** (nombre provisional) |
  | Amazon FBA | Venta en Amazon con FBA, Seller Central Professional | — | Activo en EE. UU. |
- Servicios de consultoría (los cuatro, confirmados por Walter):
  1. Construcción de SaaS y automatizaciones con IA.
  2. Entrada a EE. UU.: LLC, banca, Stripe y cuentas de plataforma.
  3. Amazon FBA / e-commerce.
  4. Telecom e importación desde China.
- Precio: **cotización por proyecto** después de una llamada de diagnóstico. No publicar montos.
- Diferencial: "productos reales en producción". Nada de humo: todo lo que se afirme se puede abrir con un clic.
- Idiomas: **inglés (por defecto) + español**, con hreflang.
- Contacto: formulario → `maxnovaluciglobal@gmail.com` (Gmail por ahora; dominio propio pendiente).
- Quién da la cara: **Walter La Madriz**, founder. Foto: `02 - Marca Personal/04 - Imagen/2026-06-28-foto-perfil.png`. Bio a partir de `02 - Marca Personal/02 - CV y Perfil/CV WMLG v.3.6.pdf` (trayectoria telecom + IA). Link a su LinkedIn.

**Se eliminan:** los casos "+$2.1M", "3 Markets", el testimonio anónimo, las métricas repetidas "14+ / 5+ / 8" y los artículos de "Insights" que llevan a `#cta`.

**Pendientes (Walter los pasa; mientras tanto el bloque se diseña sin ellos y no se inventa nada)**
- [ ] Dirección postal pública (registered agent u oficina).
- [ ] Teléfono público.
- [ ] Cifras de uso por producto (clientes, países, transacciones). Solo se publica lo que Walter confirme por escrito.
- [ ] Qué operación hay en Chile (para describirla con precisión o sacarla).
- [ ] URL de LinkedIn de Walter y de la empresa (el `sameAs` actual da 404).
- [ ] Logo de MOY IQ en SVG/PNG (no está en una carpeta de marca; tomarlo del repo o del sitio público de MOY IQ y confirmar).
- [ ] Dominio propio (lo compra Walter). Hasta entonces el canónico sigue siendo `.vercel.app`.

## 3. Arquitectura y copy
Dos páginas espejo: `/` (EN) y `/es/` (ES). Una sección = una pregunta del visitante.

| # | Sección | Pregunta que responde | Contenido | CTA |
|---|---|---|---|---|
| 1 | Hero | ¿Qué es y por qué creerles? | H1 + subtítulo + franja con los logos del portfolio | "Talk to us" → #contact · "See the portfolio" → #portfolio |
| 2 | Portfolio | ¿Qué construyeron de verdad? | Una ficha por producto: logo, captura real, una línea, estado, enlace externo | Enlace a cada producto |
| 3 | Services | ¿Qué pueden hacer por mí? | Los 4 servicios: para quién es, qué entregan, qué no incluye | "Request a diagnostic call" |
| 4 | How we work | ¿Cómo es trabajar con ustedes? | Diagnóstico → propuesta cotizada → construcción → entrega y traspaso | — |
| 5 | Founder | ¿Quién está detrás? | Foto, bio de 3-4 líneas, LinkedIn | — |
| 6 | Company | ¿Es una empresa real? (bancos) | Nombre legal, Florida LLC, presencia, dirección, teléfono, email | — |
| 7 | FAQ | Dudas y búsqueda con IA | 6 preguntas autocontenidas (abajo) | — |
| 8 | Contact | Siguiente paso | Formulario: nombre, email, empresa, tipo de consulta (servicio / inversión / alianza / otro), mensaje | "Send message" |
| — | Footer | Talento y legal | "Want to build with us? Write to …", © LLC, idioma | — |

**Copy de la primera pantalla (EN, propuesta)**
- Eyebrow: `MAXNOVA & LUCI GLOBAL LLC · Florida, USA`
- H1: **We build and run software companies.**
- Subtítulo: *DypOS, MOY IQ and Esmalia are live products serving real customers across Latin America. We bring that same playbook to your company: AI software, US market entry and e-commerce.*
- CTA: **Talk to us** · See the portfolio

**Copy de la primera pantalla (ES, propuesta)**
- H1: **Construimos y operamos empresas de software.**
- Subtítulo: *DypOS, MOY IQ y Esmalia son productos en producción con clientes reales en Latinoamérica. Llevamos esa misma forma de trabajar a tu empresa: software con IA, entrada a EE. UU. y e-commerce.*
- CTA: **Hablemos** · Ver el portfolio

**FAQ (respuesta directa primero, después el detalle)**
1. What is MAXNOVA & LUCI GLOBAL LLC?
2. Which products does it operate?
3. Where is the company based and where does it work?
4. What consulting services do you offer?
5. How is consulting priced? → "Quoted per project after a diagnostic call."
6. How do I get in touch?

## 4. Dirección de arte
**Concepto: "carta anual de un operador".** Claridad editorial de memoria anual con la evidencia en primer plano: las capturas reales de los productos son la imagen principal, no las partículas.
- Composición: retícula de 12 columnas, mucho aire, titulares grandes y una columna de datos al costado (estado, país, enlace), como un informe.
- Tipografía: una serif editorial para titulares y una sans legible para texto e interfaz, con escala fluida (`clamp`). Elegir y verificar la licencia (Google Fonts).
- Color: fondo claro cálido con tinta casi negra y un acento tomado del `logo-mark.svg` actual. Modo oscuro opcional. Contraste AA mínimo.
- Lo que se reutiliza: `logo-mark.svg` y la idea del globo, que pasa a un mapa discreto USA–LatAm–Chile dentro de "Company".
- Lo que se evita: partículas genéricas, cursor custom, tarjetas con degradado, métricas sin respaldo.
- Cada producto con sus propios colores dentro de su ficha (logo y captura), y todo lo demás en la paleta de Maxnova.

## 5. 3D y movimiento
- **Hero:** una pila de 3 capturas reales (DypOS, MOY IQ, Esmalia) en marcos de dispositivo, con profundidad leve en CSS 3D (`perspective` + `translateZ`) y parallax suave atado al scroll y al puntero. **Sin WebGL**: no aporta y pesa.
- **Portfolio:** cada ficha entra con fade + desplazamiento corto (200-300 ms, una sola curva para todo el sitio).
- **Reducido:** con `prefers-reduced-motion` no hay parallax ni entradas, y las capturas quedan estáticas.
- **Sin JS:** todo el contenido visible por defecto. Las clases de animación solo se aplican con `html.js`.
- **Móvil:** sin parallax de puntero. La pila de capturas pasa a un carrusel horizontal nativo con `scroll-snap`.

## 6. Implementación
- Stack recomendado: **Astro (salida estática)** en Vercel, con i18n `en` (por defecto) y `es`, optimización de imágenes (AVIF/WebP + `srcset`) y cero JS por defecto. **Antes de instalar, verificar con context7 la versión actual de Astro y que la carpeta `api/` de Vercel siga funcionando junto a Astro estático.** Si no funciona, usar el adaptador de Vercel con un endpoint.
- Formulario: reutilizar `api/contact.js` (Resend). Variables en Vercel (las carga Walter en el dashboard; nunca por chat): `RESEND_API_KEY`, `CONTACT_TO_EMAIL=maxnovaluciglobal@gmail.com`. Mientras no haya dominio verificado, el remitente `onboarding@resend.dev` solo entrega al email dueño de la cuenta de Resend: confirmar que es `maxnovaluciglobal@gmail.com`. Agregar honeypot y límite básico contra spam. El mensaje de éxito solo aparece si la API responde 200, y el de error ofrece el email como alternativa.
- Assets: logos desde la carpeta de marca de cada proyecto (DypOS `logo/`, Esmalia `guia-logo-2026-10-09/`; MOY IQ pendiente). Capturas reales tomadas con el navegador en 1440 px, sin datos de clientes (usar cuentas demo).
- Archivos: `README.md` (comandos verificados, variables, deploy, dónde cambiar textos, imágenes y enlaces), `docs/prompt-maestro.md` (este archivo) y `docs/QA.md` (informe de pruebas).
- Mantenimiento: lo actualiza Claude a pedido de Walter. Los textos viven en archivos de contenido por idioma (`src/content/` o `src/i18n/`), no mezclados con el markup.
- Headers en `vercel.json`: CSP, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`.

## 7. SEO y GEO
- Title y meta description por idioma. Un solo H1 por página. `canonical` y `og:url` apuntan al dominio final; mientras tanto, a `.vercel.app`, y se cambian el día que se conecte el dominio.
- `hreflang` en ↔ es + `x-default`. Sitemap con las 2 URLs. robots.txt coherente.
- `favicon.ico` + SVG + `apple-touch-icon`. Open Graph de 1200×630 por idioma. `404` propia en ambos idiomas.
- JSON-LD: `Organization` con `legalName`, `address` (cuando esté), `founder` (Person: Walter), `sameAs` válidos y `subOrganization`/`brand` para DypOS, MOY IQ y Esmalia con su URL; `FAQPage` igual a la FAQ visible; `WebSite`. **Nada que no se vea en la página.**
- robots.txt con reglas explícitas para OAI-SearchBot, GPTBot, ClaudeBot y PerplexityBot: **permitir** (Walter quiere que lo encuentren). `llms.txt` breve con qué es la empresa, el portfolio, los servicios y el contacto.
- Identidad idéntica en todas partes: "MAXNOVA & LUCI GLOBAL LLC" (texto) y "Maxnova & Luci Global" (marca).

## 8. Calidad y entrega
- Accesibilidad WCAG 2.2 AA: teclado, foco visible, skip link, labels y errores claros en el formulario, alt con función, contraste medido.
- Rendimiento (laboratorio, móvil): LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1. JS total < 50 KB comprimido. Imagen del hero < 150 KB.
- Pruebas: 360/390/768/1440 px, teclado, zoom 200 %, movimiento reducido, sin JS, cambio de idioma, formulario en éxito y en error (envío real a la casilla de prueba), consola sin errores, enlaces externos que abren. Validar el JSON-LD y el HTML. Correr Lighthouse y anotar dispositivo y condiciones en `docs/QA.md`.
- Revisión de arte con capturas reales de móvil y escritorio antes de entregar.
- Medición: Vercel Web Analytics con eventos `contact_submit_success`, `cta_click` (con origen) y `portfolio_outbound` (con producto). Search Console: dejar documentado el alta por DNS para cuando esté el dominio.
- Entrega: preview de Vercel verificado → Walter aprueba → merge a producción → verificar HTTPS, formulario, metadatos, canonical e indexabilidad en la URL final. Distinguir *preparado / preview verificado / producción publicada*.
- Git: autor `maxnovaluciglobal@gmail.com` (si no, Vercel Hobby bloquea el deploy). Trabajo en una rama y un PR.
