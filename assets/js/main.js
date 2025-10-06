import { qs, qsa } from '/assets/js/lib/dom.js';
import { wireThemeToggle, loadStoredTheme } from '/assets/js/components/theme-toggle.js';
import '/assets/js/components/nav.js';
import '/assets/js/components/form.js';

async function include(selector, url){
  const host = qs(selector);
  if (!host) return;
  const html = await fetch(url, {cache: 'no-cache'}).then(r => r.text());
  host.innerHTML = html;
}
function markActiveNav(){
  const path = location.pathname.toLowerCase();
  qsa('.nav a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (path.endsWith(href)) a.setAttribute('aria-current','page');
  });
}
function setYear(){
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

loadStoredTheme();
await include('header[data-include]', '/components/header.html');
await include('footer[data-include]', '/components/footer.html');
wireThemeToggle();
markActiveNav();
setYear();
