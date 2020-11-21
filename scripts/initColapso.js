// Parte de execucao do interacao entre o titulo e o seus textos

export default class Colapso {
  constructor(lists) {
    this.colapso = document.querySelectorAll(lists);
    // const colapsoDd = document.querySelectorAll('.js-collapse dd');
    this.ativarClasse = 'collapse';
  }

  execultarColapso(itens) {
    itens.classList.toggle(this.ativarClasse);
    itens.nextElementSibling.classList.toggle(this.ativarClasse);
  }


  addEvent() {
    this.colapso.forEach((itens) => {
      itens.addEventListener('click', () => this.execultarColapso(itens));
    });
  }

  init() {
    if (this.colapso.length) {
      this.execultarColapso(this.colapso[0]);
      this.addEvent();
    }
  }
}
