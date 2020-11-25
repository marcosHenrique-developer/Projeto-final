import clickOutside from './clickOutside.js';

export default class Dropdown {
  // Dropdown menu feito em Js para mobiles com efeitos ja feitos em css
  constructor(dropDown, events) {
    this.dropDown = document.querySelectorAll(dropDown);

    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    this.activeClass = 'active';
    this.clicarDropDown = this.clicarDropDown.bind(this);
  }

  clicarDropDown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.activeClass);
    clickOutside(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addEventMenu() {
    this.dropDown.forEach((menu) => {
      this.events.forEach((usarEvent) => {
        menu.addEventListener(usarEvent, this.clicarDropDown);
      });
    });
  }

  init() {
    if (this.dropDown.length) {
      this.addEventMenu();
    }
    return this;
  }
}
