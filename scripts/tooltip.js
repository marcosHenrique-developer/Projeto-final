export default class tooltipMap {
  constructor(tooltips) {
    // Parte da animação Tooltip do Mapa
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Da pra passar um callback em forma de Object
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // add um evento de mouseleave na tooltip
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Função que cria a div com o conteudo e adiciona uma estilo css nela
  criarTooltip(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver({ currentTarget }) {
    this.criarTooltip(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  addEventTooltip() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addEventTooltip();
    }
    return this;
  }
}
