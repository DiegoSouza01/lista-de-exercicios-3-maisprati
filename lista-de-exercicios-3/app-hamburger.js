/*

7. Menu Hamburger - implemente um menu “hamburger” que:
- Apareça apenas em telas com largura ≤ 600 px.
- Oculte a navegação padrão e abra/feche o menu ao ser clicado.

*/

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;
const mainContent = document.querySelector('.main-content');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
    mainContent.classList.toggle('menu-open');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
        mainContent.classList.remove('menu-open');
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
        mainContent.classList.remove('menu-open');
    }
});