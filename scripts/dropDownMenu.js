import clickOutside from './clickOutside.js';

export default function dropDownMenu() {
  // Dropdown menu feito em Js para mobiles com efeitos ja feitos em css
  const dropMenu = document.querySelectorAll('[data-dropdown]');

  function clicarDropDown(event) {
    event.preventDefault();
    this.classList.toggle('active');
    clickOutside(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }
  dropMenu.forEach((menu) => {
    ['touchstart', 'click'].forEach((usarEvent) => {
      menu.addEventListener(usarEvent, clicarDropDown);
    });
  });
}
