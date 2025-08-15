// Мобильное меню
document.querySelector('.menu-drawer').addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    e.currentTarget.style.display = 'none';
  }
});

document.querySelector('.mobile')?.addEventListener('click', () => {
  const d = document.querySelector('.menu-drawer');
  d.style.display = d.style.display === 'block' ? 'none' : 'block';
});

// Клик по картинке — увеличение/уменьшение
document.querySelectorAll('.diploma').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoomed');
  });
});

// Текущий год в футере
document.getElementById('year').textContent = new Date().getFullYear();
