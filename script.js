let btnOpen = document.getElementById('btn-nav-open');
let btnClose = document.getElementById('btn-nav-close');
let nav = document.getElementById('nav');

btnOpen.addEventListener("click", () => {
  nav.classList.add('flex');
});
btnClose.addEventListener("click", () => {
  nav.classList.remove('flex');
});

let cash = document.getElementById('cash');

cash.addEventListener("click", () => {
  window.open('https:www.google.com', '_blank');
});
