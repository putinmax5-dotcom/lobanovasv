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

    // Создаём фон
    const overlay = document.createElement('div');
    overlay.classList.add('zoom-overlay');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0,0,0,0.6)';
    overlay.style.zIndex = '999';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.4s ease';
    document.body.appendChild(overlay);

    // Создаём копию картинки
    const copy = img.cloneNode();
    copy.classList.add('zoomed-copy');
    copy.style.position = 'fixed';
    copy.style.top = '50%';
    copy.style.left = '50%';
    copy.style.transform = 'translate(-50%, -50%) scale(0.1)';
    copy.style.maxWidth = '90vw';
    copy.style.maxHeight = '90vh';
    copy.style.zIndex = '1000';
    copy.style.cursor = 'zoom-out';
    copy.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    copy.style.opacity = '0';
    document.body.appendChild(copy);

    // Плавное появление
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      copy.style.transform = 'translate(-50%, -50%) scale(3)';
      copy.style.opacity = '1';
    });

    // Функция закрытия
    const closeZoom = () => {
      overlay.style.opacity = '0';
      copy.style.transform = 'translate(-50%, -50%) scale(0.1)';
      copy.style.opacity = '0';
      setTimeout(() => {
        overlay.remove();
        copy.remove();
      }, 400);
    };

    // Закрытие по клику на фон или картинку
    overlay.addEventListener('click', closeZoom);
    copy.addEventListener('click', closeZoom);
  });
});


// Текущий год в футере
document.getElementById('year').textContent = new Date().getFullYear();
