// The three home mini-demos. All data is sample data and is labelled so on the page.
// Each demo is usable by hand; a gentle autoplay runs only while the bento is on screen,
// stops for good on that demo once the visitor touches it, and never runs with reduced motion.

type Copy = {
  dy: { buttons: string[]; states: string[]; table: string; footLabel: string; closed: string[]; closedLine: string; profit: string };
  mq: { empty: string; other: string; noAmount: string; now: string; samples: string[]; lang: 'en' | 'es' };
  es: { ok: string; pending: string; simulate: string; reset: string; of: string };
};

const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel)!;
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export function startDemos() {
  const raw = document.getElementById('demo-copy');
  if (!raw) return;
  const c: Copy = JSON.parse(raw.textContent || '{}');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touched = { dy: false, mq: false, es: false };

  /* DypOS: a ticket moves from received to kitchen to ready */
  const tk = $('[data-dy-ticket]');
  const btn = $<HTMLButtonElement>('[data-dy-btn]');
  const cols = [...document.querySelectorAll<HTMLElement>('.dy__col')];
  const foot = $('[data-dy-foot]');
  const footIdle = foot.innerHTML;
  const state = $('[data-dy-state]');
  const base = [1, 1, 0];
  const tables = [4, 7, 3, 9];
  let stage = 0, sec = 42, num = 61870, ti = 0;
  const counts = () => cols.forEach((col, i) => ($('[data-count]', col).textContent = String(base[i] + (i === stage ? 1 : 0))));
  const moveTo = (s: number) => {
    const first = tk.getBoundingClientRect();
    stage = s;
    tk.dataset.stage = String(s);
    const drop = $('.dy__drop', cols[s]);
    drop.insertBefore(tk, drop.firstChild);
    btn.textContent = c.dy.buttons[s];
    state.textContent = c.dy.states[s];
    if (!reduce) {
      const last = tk.getBoundingClientRect();
      tk.animate([{ transform: `translate(${first.left - last.left}px, ${first.top - last.top}px)` }, { transform: 'none' }], { duration: 420, easing: 'cubic-bezier(.2,.8,.2,1)' });
    }
    counts();
    if (s === 2) foot.innerHTML = `<span class="dy__lbl">${esc(c.dy.closed[ti])}</span> ${esc(c.dy.closedLine)} <strong>${esc(c.dy.profit)}</strong>`;
    else if (s === 0) foot.innerHTML = footIdle;
  };
  const nextDy = () => {
    if (stage < 2) return moveTo(stage + 1);
    num++;
    ti = (ti + 1) % tables.length;
    sec = 0;
    $('[data-dy-num]').textContent = `#${num}`;
    $('[data-dy-table]').textContent = `${c.dy.table} ${tables[ti]}`;
    moveTo(0);
  };
  btn.addEventListener('click', () => { touched.dy = true; nextDy(); });
  setInterval(() => {
    if (stage < 2) sec++;
    $('[data-dy-time]').textContent = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
  }, 1000);
  const clock = () => {
    const d = new Date();
    $('[data-dy-clock]').textContent = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  };
  clock();
  setInterval(clock, 30_000);

  /* moyiq: an expense typed as spoken is categorized while you type */
  const es_ = c.mq.lang === 'es';
  const cats = [
    { re: /uber|taxi|cabify|didi|metro|bus|subway|nafta|gasolina|bencina|gas station|fuel|peaje|toll|parking|estacionamiento/i, c: es_ ? 'Transporte' : 'Transport', s: es_ ? 'Taxi por app' : 'Ride app', col: '#7C4DFF', L: 'T' },
    { re: /super|mercado|grocer|walmart|jumbo|lider|almuerzo|lunch|cena|dinner|pizza|restaurant|cafe|café|coffee|starbucks|panader|bakery/i, c: es_ ? 'Comida' : 'Food', s: es_ ? 'Supermercado y comidas' : 'Groceries and meals', col: '#F28C28', L: es_ ? 'C' : 'F' },
    { re: /farmacia|pharmacy|medic|doctor|dentist|clinic|clínica/i, c: es_ ? 'Salud' : 'Health', s: es_ ? 'Farmacia y consultas' : 'Pharmacy and visits', col: '#2BB673', L: es_ ? 'S' : 'H' },
    { re: /netflix|spotify|disney|hbo|youtube|icloud|prime|chatgpt|gym|gimnasio/i, c: es_ ? 'Suscripciones' : 'Subscriptions', s: es_ ? 'Servicios digitales' : 'Digital services', col: '#E5484D', L: 'S' },
    { re: /luz|agua|water|electric|internet|telefono|teléfono|phone|celular|arriendo|alquiler|rent/i, c: es_ ? 'Hogar' : 'Home', s: es_ ? 'Cuentas del hogar' : 'Household bills', col: '#3B82F6', L: es_ ? 'H' : 'B' },
    { re: /cine|movie|concierto|concert|bar|cerveza|beer|salida|juego|game/i, c: es_ ? 'Ocio' : 'Leisure', s: es_ ? 'Salidas' : 'Going out', col: '#D946EF', L: 'O' },
  ];
  const sub: Record<string, string> = es_
    ? { uber: 'Taxi por app', taxi: 'Taxi', metro: 'Transporte público', bus: 'Transporte público', cafe: 'Café', café: 'Café', netflix: 'Streaming', spotify: 'Música', farmacia: 'Farmacia' }
    : { uber: 'Ride app', taxi: 'Taxi', subway: 'Public transport', bus: 'Public transport', coffee: 'Coffee', netflix: 'Streaming', spotify: 'Music', pharmacy: 'Pharmacy' };
  let left = 166825; // cents
  const inp = $<HTMLInputElement>('#mq-in');
  const cat = $('[data-mq-cat]');
  const amt = $('[data-mq-amt]');
  const parse = (v: string) => {
    const m = v.match(/(\d+(?:[.,]\d{1,2})?)/);
    const a = m ? parseFloat(m[1].replace(',', '.')) : 0;
    const word = v.replace(/[\d.,$]/g, ' ').trim().split(/\s+/)[0] || '';
    return { a, word, hit: cats.find((k) => k.re.test(v)) };
  };
  const guess = () => {
    const p = parse(inp.value);
    if (!inp.value.trim()) {
      cat.className = 'mq__cat is-none';
      cat.innerHTML = `<i style="background:#A3AAB5">?</i><span>${esc(c.mq.empty)}</span>`;
      amt.textContent = '';
      return p;
    }
    if (p.hit) {
      cat.className = 'mq__cat';
      cat.innerHTML = `<i style="background:${p.hit.col}">${p.hit.L}</i><span>${esc(p.hit.c)} · ${esc(sub[p.word.toLowerCase()] || p.hit.s)}</span>`;
    } else {
      cat.className = 'mq__cat is-none';
      cat.innerHTML = `<i style="background:#8B8FA3">O</i><span>${esc(c.mq.other)}</span>`;
    }
    amt.textContent = p.a ? `−$${p.a.toFixed(2)}` : c.mq.noAmount;
    return p;
  };
  const add = () => {
    const p = guess();
    if (!p.a) return inp.focus();
    const h = p.hit || { c: es_ ? 'Otros' : 'Other', col: '#8B8FA3', L: 'O' };
    const li = document.createElement('li');
    li.className = 'is-new';
    const label = p.word ? p.word.charAt(0).toUpperCase() + p.word.slice(1).toLowerCase() : 'Gasto';
    li.innerHTML = `<span class="mq__ic" style="background:${h.col}">${h.L}</span><span class="mq__t">${esc(label)}<small>${esc(h.c)} · ${esc(c.mq.now)}</small></span><span class="mq__a">−$${p.a.toFixed(2)}</span>`;
    const list = $('[data-mq-list]');
    list.insertBefore(li, list.firstChild);
    while (list.children.length > 3) list.lastElementChild!.remove();
    left = Math.max(0, left - Math.round(p.a * 100));
    const [i, d] = (left / 100).toFixed(2).split('.');
    $('[data-mq-int]').textContent = i.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    $('[data-mq-dec]').textContent = `.${d}`;
    $('[data-mq-bar]').style.width = `${Math.max(4, (left / 269073) * 100).toFixed(1)}%`;
    const big = $('[data-mq-big]');
    big.classList.remove('is-bump');
    void big.offsetWidth;
    big.classList.add('is-bump');
    inp.value = '';
    guess();
  };
  inp.addEventListener('input', () => { touched.mq = true; guess(); });
  $('[data-mq-form]').addEventListener('submit', (e) => { e.preventDefault(); touched.mq = true; add(); });

  /* Esmalia: the patient answers the WhatsApp reminder and the visit is confirmed */
  const esBtn = $<HTMLButtonElement>('[data-es-btn]');
  const esIn = $('[data-es-in]');
  const esRow = $('[data-es-row]');
  const esSt = $('[data-es-st]');
  const esConf = $('[data-es-conf]');
  let esDone = false;
  const toggleEs = () => {
    esDone = !esDone;
    if (esDone) {
      esIn.hidden = false;
      esIn.classList.add('is-show');
      setTimeout(() => {
        esSt.className = 'st st--ok';
        esSt.textContent = c.es.ok;
        esRow.classList.add('is-done');
        esConf.textContent = `8 ${c.es.of} 9`;
      }, reduce ? 0 : 450);
      esBtn.textContent = c.es.reset;
    } else {
      esIn.hidden = true;
      esIn.classList.remove('is-show');
      esRow.classList.remove('is-done');
      esSt.className = 'st st--pend';
      esSt.textContent = c.es.pending;
      esConf.textContent = `7 ${c.es.of} 9`;
      esBtn.textContent = c.es.simulate;
    }
  };
  esBtn.addEventListener('click', () => { touched.es = true; toggleEs(); });

  /* Gentle autoplay while visible; never under the pointer or while typing */
  if (reduce || !('IntersectionObserver' in window)) return;
  const bento = $('.bento');
  let visible = false, hovering = false, tick = 0;
  new IntersectionObserver((e) => { visible = e[0].isIntersecting; }).observe(bento);
  bento.addEventListener('pointerenter', () => { hovering = true; });
  bento.addEventListener('pointerleave', () => { hovering = false; });
  setTimeout(() => {
    setInterval(() => {
      if (!visible || hovering || document.hidden || document.activeElement === inp) return;
      tick++;
      if (!touched.dy && tick % 2 === 0) nextDy();
      if (!touched.es && tick % 4 === 1) toggleEs();
      if (!touched.mq && tick % 6 === 3) {
        const s = c.mq.samples[Math.floor(tick / 6) % c.mq.samples.length];
        let k = 0;
        inp.value = '';
        guess();
        const typing = setInterval(() => {
          if (touched.mq) return clearInterval(typing);
          inp.value = s.slice(0, ++k);
          guess();
          if (k >= s.length) {
            clearInterval(typing);
            setTimeout(() => { if (!touched.mq) add(); }, 700);
          }
        }, 90);
      }
    }, 1800);
  }, 4000);
}
