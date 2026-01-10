const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && e.target !== hamburger) {
    menu.style.display = 'none';
  }
});

// Example: Grid click events (optional, for Home page)
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
  item.addEventListener('click', () => {
    const category = item.getAttribute('data-category');
    window.location.href = 'shop.html#' + category;
  });
});
