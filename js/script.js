document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu ul');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
