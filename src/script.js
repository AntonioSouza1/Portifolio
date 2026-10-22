'use strict';

const sections = ['inicio', 'sobre', 'trajetoria', 'stack', 'experiencia', 'projetos', 'formacao', 'contato'];
const menu = document.querySelector('.nav');
const menuButton = document.querySelector('.menu-button');
const navButtons = Array.from(document.querySelectorAll('.nav [data-scroll]'));

function closeMenu() {
  menu?.classList.remove('open');
  menuButton?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}

menuButton?.addEventListener('click', () => {
  const opened = menu?.classList.toggle('open') ?? false;
  menuButton.classList.toggle('open', opened);
  menuButton.setAttribute('aria-expanded', String(opened));
});

document.querySelectorAll('[data-scroll]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.scroll);
    target?.scrollIntoView({behavior: 'smooth', block: 'start'});
    closeMenu();
  });
});

function updateActiveNav() {
  let active = 'inicio';
  for (const id of sections) {
    const target = document.getElementById(id);
    if (target && window.scrollY >= target.offsetTop - 150) active = id;
  }
  navButtons.forEach(button => button.classList.toggle('active', button.dataset.scroll === active));
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
window.addEventListener('resize', () => { if (window.innerWidth > 820) closeMenu(); }, { passive: true });
updateActiveNav();

const roleText = document.getElementById('role-text');
const roles = ['Web Developer', 'Backend Developer', 'SQL Developer', 'AI Enthusiast'];
if (roleText && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let index = 0;
  window.setInterval(() => {
    index = (index + 1) % roles.length;
    roleText.textContent = roles[index];
  }, 2200);
}

const contactEmail = 'souzaantonio4020@gmail.com';
const copyButton = document.getElementById('copy-email');
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(contactEmail);
    copyButton.textContent = 'E-mail copiado ✓';
    window.setTimeout(() => { copyButton.textContent = 'Copiar e-mail'; }, 1800);
  } catch {
    window.location.href = `mailto:${contactEmail}`;
  }
});

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
