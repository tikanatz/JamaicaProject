// Navigation
const body = document.body;
const btnShowNav = document.getElementById('menu');
const navMain = document.getElementById('main-nav');
btnShowNav.addEventListener('click', _ => { body.classList.toggle('show') });
btnShowNav.addEventListener('mousedown', (e) => { e.preventDefault() });
navMain.addEventListener('click', _ => { body.classList.remove('show') });