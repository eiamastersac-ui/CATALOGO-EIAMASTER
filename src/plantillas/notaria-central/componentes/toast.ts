// Aviso flotante reutilizable. Sus estilos (.nc-toast) viven en estilos.css
// porque el nodo se crea en runtime y no recibe el atributo scoped de Astro.
let timer: number | undefined;

export function toast(msg: string) {
  const raiz = document.querySelector('.tpl-notaria-central') || document.body;
  let el = raiz.querySelector<HTMLElement>('.nc-toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'nc-toast';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    raiz.appendChild(el);
  }
  el.textContent = msg;
  el.classList.remove('is-on');
  void el.offsetWidth;
  el.classList.add('is-on');
  if (timer) window.clearTimeout(timer);
  timer = window.setTimeout(() => el?.classList.remove('is-on'), 3800);
}
