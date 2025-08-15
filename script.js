// Мобильное меню
document.querySelector('.menu-drawer').classList.toggle;
document.querySelector('.menu-drawer').open = false;
document.querySelector('.menu-drawer').addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    e.currentTarget.style.display = 'none';
  }
});
document.querySelector('.mobile')?.addEventListener('click', () => {
  const d = document.querySelector('.menu-drawer');
  d.style.display = d.style.display === 'block' ? 'none' : 'block';
});

// Текущий год в футере
document.getElementById('year').textContent = new Date().getFullYear();
