export default class ScrollBar {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    this.scrollBar = this.scrollBar.bind(this);
  }

  scrollBar(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const atributo = document.querySelector(href);
    atributo.scrollIntoView(this.options);
  }

  addEvent() {
    this.linksInternos.forEach((links) => {
      links.addEventListener('click', this.scrollBar);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addEvent();
    }
    return this;
  }
}
