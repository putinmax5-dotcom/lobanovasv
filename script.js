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
    if (document.querySelector('.zoomed-copy')) return;

    const copy = img.cloneNode();
    copy.classList.add('zoomed-copy');

    // Стили для плавного появления
    copy.style.position = 'fixed';
    copy.style.top = '50%';
    copy.style.left = '50%';
    copy.style.transform = 'translate(-50%, -50%) scale(0.1)'; // стартовое маленькое
    copy.style.maxWidth = '90vw';
    copy.style.maxHeight = '90vh';
    copy.style.zIndex = '1000';
    copy.style.cursor = 'zoom-out';
    copy.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    copy.style.opacity = '0';

    document.body.appendChild(copy);

    // Плавное увеличение
    requestAnimationFrame(() => {
      copy.style.transform = 'translate(-50%, -50%) scale(3)';
      copy.style.opacity = '1';
    });

    // Клик по увеличенной картинке — плавное закрытие
    copy.addEventListener('click', () => {
      copy.style.transform = 'translate(-50%, -50%) scale(0.1)';
      copy.style.opacity = '0';
      copy.addEventListener('transitionend', () => copy.remove(), { once: true });
    });
  });
});

// Текущий год в футере
document.getElementById('year').textContent = new Date().getFullYear();
