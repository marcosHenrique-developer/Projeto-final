export default function tooltipMap() {
  // Parte da animação Tooltip do Mapa
  const tooltips = document.querySelectorAll('[data-tooltip]');

  // Da pra passar um callback em forma de Object
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };
  // Da pra passar um callback em forma de Object
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };
  // Função que cria a div com o conteudo e adiciona uma estilo css nela
  function criarTooltip(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = criarTooltip(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }
  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
