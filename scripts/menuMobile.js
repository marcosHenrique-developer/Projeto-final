import clickOutside from './clickOutside.js';
// Parte menu mobile
export default function menuMobile() {
  const menuBotao = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    menuLista.classList.add('active');
    menuBotao.classList.add('active');

    clickOutside(menuLista, eventos, () => {
      menuBotao.classList.remove('active');
      menuLista.classList.remove('active');
    });
  }
  if (menuBotao) {
    eventos.forEach((event) => {
      menuBotao.addEventListener(event, openMenu);
    });
  }
}
