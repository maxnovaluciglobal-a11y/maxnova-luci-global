// Live product checks, shared by the home page and the products page.
// Every [data-status] block carries its own labels; every [data-node] and [data-dot] inside it is updated.
// A node turns green only after /api/status measured an answer; anything else reads as "no data" or "not responding".

type Node = { id: string; ok: boolean; ms: number | null };
type Result = { checkedAt: string; nodes: Node[] };

const POLL = 60_000;
const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function apply(block: HTMLElement, data: Result | null) {
  const d = block.dataset;
  const sum = block.querySelector<HTMLElement>('[data-status-sum]');
  if (sum) {
    if (!data) sum.textContent = d.unavailable!;
    else {
      const up = data.nodes.filter((n) => n.ok).length;
      const time = new Date(data.checkedAt).toISOString().slice(11, 16);
      sum.textContent = d.sum!.replace('{up}', String(up)).replace('{total}', String(data.nodes.length)).replace('{t}', time);
    }
  }
  block.querySelectorAll<HTMLElement>('[data-dot]').forEach((el) => {
    const node = data?.nodes.find((n) => n.id === el.dataset.dot);
    el.dataset.state = !node ? 'unknown' : node.ok ? 'online' : 'offline';
  });
  block.querySelectorAll<HTMLElement>('[data-node]').forEach((el) => {
    const node = data?.nodes.find((n) => n.id === el.dataset.node);
    const label = el.querySelector('[data-node-label]');
    const ms = el.querySelector('[data-node-ms]');
    if (!node) {
      el.dataset.state = 'unknown';
      if (label) label.textContent = d.nodata!;
      if (ms) ms.textContent = '';
      return;
    }
    el.dataset.state = node.ok ? 'online' : 'offline';
    if (label) label.textContent = node.ok ? d.online! : d.offline!;
    if (ms) ms.textContent = node.ok && node.ms != null ? `· ${node.ms} ms` : '';
    if (!reduce()) {
      el.classList.remove('is-ping');
      void el.offsetWidth;
      el.classList.add('is-ping');
    }
  });
}

export function startStatus() {
  const blocks = [...document.querySelectorAll<HTMLElement>('[data-status]')];
  if (!blocks.length) return;
  let timer: number | undefined;

  const check = async (fresh = false) => {
    let data: Result | null = null;
    try {
      const res = await fetch(fresh ? `/api/status?t=${Math.floor(Date.now() / 10_000)}` : '/api/status', { headers: { Accept: 'application/json' } });
      if (res.ok) data = await res.json();
    } catch {
      data = null;
    }
    blocks.forEach((b) => apply(b, data));
  };

  const schedule = () => {
    clearInterval(timer);
    if (!document.hidden) timer = window.setInterval(check, POLL);
  };

  blocks.forEach((b) => {
    const sum = b.querySelector<HTMLElement>('[data-status-sum]');
    if (sum) sum.textContent = b.dataset.checking!;
    b.querySelectorAll<HTMLButtonElement>('[data-recheck]').forEach((btn) => {
      btn.hidden = false;
      btn.addEventListener('click', async () => {
        btn.classList.add('is-busy');
        btn.disabled = true;
        const sum2 = b.querySelector<HTMLElement>('[data-status-sum]');
        if (sum2) sum2.textContent = b.dataset.checking!;
        await check(true);
        btn.disabled = false;
        setTimeout(() => btn.classList.remove('is-busy'), 600);
        schedule();
      });
    });
  });
  check();
  schedule();
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) check();
    schedule();
  });
}
