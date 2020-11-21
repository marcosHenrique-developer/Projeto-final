export default class TabNav {
  constructor(lista, tab) {
    // selecionando os elementos para a interacao
    this.animaisLista = document.querySelectorAll(lista);
    this.animaisTab = document.querySelectorAll(tab);
    this.activeClass = 'ativo';
  }

  // executando uma funcao e selecionando todas a sections e removendo uma classe
  // ativo a section anterior
  ativarTab(index) {
    this.animaisTab.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    // estou adicionando uma classe ativo a cada uma das sections como fosse uma array-like
    // por meio do index
    const direction = this.animaisTab[index].dataset.anime;
    this.animaisTab[index].classList.add(this.activeClass, direction);
  }

  addTabEvent() {
    // estou selecionando as todas as lis e executando uma funcao para cada, depois
    // seleciono o index e em um callback eu executo a funcao ativarTab() para
    // selecionar as sections quando clicar nas lis
    this.animaisLista.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.ativarTab(index);
      });
    });
  }

  // condicionando a execucao do codigo
  init() {
    if (this.animaisTab.length && this.animaisLista.length) {
      this.ativarTab(0);
      this.addTabEvent();
    }
  }
}
