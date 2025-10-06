export function loadStoredTheme(){
  const t=localStorage.getItem('theme'); if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}
}
export function wireThemeToggle(){
  const b=document.getElementById('theme-toggle'); if(!b) return;
  b.addEventListener('click',()=>{const cur=document.documentElement.dataset.theme||'dark'; const nxt=cur==='dark'?'light':'dark'; document.documentElement.dataset.theme=nxt; localStorage.setItem('theme',nxt); b.setAttribute('aria-pressed', String(nxt==='light'));});
}
