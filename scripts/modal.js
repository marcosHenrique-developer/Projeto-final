// parte do modal
export default class Modal {
  constructor(showModal, abreModa, fecharModa) {
    this.showModal = document.querySelector(showModal);
    this.abreModa = document.querySelector(abreModa);
    this.fecharModa = document.querySelector(fecharModa);

    this.toogleModal = this.toogleModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
  }

  abreModal() {
    this.showModal.classList.toggle('ativar');
  }

  toogleModal(event) {
    event.preventDefault();
    this.abreModal();
  }

  fecharModal(event) {
    if (event.target === this.showModal) {
      this.abreModal();
    }
  }

  // handleKeyboard(event) {
  //   if (event.key === 'Escape') {
  //     this.showModal.classList.remove('ativar');
  //   }
  // }

  addModalEvents() {
    // this.showModal.addEventListener('keydown', this.handleKeyboard);
    this.abreModa.addEventListener('click', this.toogleModal);
    this.fecharModa.addEventListener('click', this.toogleModal);
    this.showModal.addEventListener('click', this.fecharModal);
  }

  init() {
    if (this.showModal && this.abreModa && this.fecharModa) {
      this.addModalEvents();
    }
    return this;
  }
}
