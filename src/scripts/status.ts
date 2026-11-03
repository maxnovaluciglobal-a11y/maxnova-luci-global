// Live product checks, shared by the network map and the products page.
// Every [data-status] block carries its own labels; every [data-node] inside it is updated.
// A node turns green only after /api/status measured an answer; anything else reads as "no data" or "not responding".

type Node = { id: string; ok: boolean; ms: number | null };
type Result = { checkedAt: string; nodes: Node[] };

const POLL = 60_000;

function apply(block: HTMLElement, data: Result | null) {
  const d = block.dataset;
  const time = block.querySelector<HTMLElement>('[data-net-time]');
  if (time) {
    time.classList.toggle('is-measured', !!data);
    time.textContent = data ? d.checked!.replace('{t}', new Date(data.checkedAt).toISOString().slice(11, 19)) : d.unavailable!;
  }
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
    if (ms) ms.textContent = node.ok && node.ms != null ? `${node.ms} ms` : '';
    if (node.ok && node.ms != null) {
      const travel = `${Math.min(2400, 500 + node.ms)}ms`;
      block.querySelectorAll<SVGPathElement | HTMLElement>(`[data-trace="${node.id}"] .trace--pulse, [data-node="${node.id}"] .node__pulse`).forEach((p) => {
        p.style.setProperty('--travel', travel);
        p.classList.remove('is-running');
        void p.getBoundingClientRect();
        p.classList.add('is-running');
      });
    }
  });
}

export function startStatus() {
  const blocks = [...document.querySelectorAll<HTMLElement>('[data-status]')];
  if (!blocks.length) return;
  let timer: number | undefined;

  const check = async () => {
    let data: Result | null = null;
    try {
      const res = await fetch('/api/status', { headers: { Accept: 'application/json' } });
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
    const time = b.querySelector<HTMLElement>('[data-net-time]');
    if (time) time.textContent = b.dataset.checking!;
  });
  check();
  schedule();
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) check();
    schedule();
  });
}
