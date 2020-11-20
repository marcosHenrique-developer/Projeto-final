export default function initiTab() {
  // selecionando os elementos para a interacao
  const animaisLista = document.querySelectorAll('.tabMenu-js li');
  const animaisTab = document.querySelectorAll('.tabNavegacao-js section');

  // executando uma funcao e selecionando todas a sections e removendo uma classe
  // ativo a section anterior
  function ativarTab(index) {
    animaisTab.forEach((section) => {
      section.classList.remove('ativo');
    });
    // estou adicionando uma classe ativo a cada uma das sections como fosse uma array-like
    // por meio do index

    const direction = animaisTab[index].dataset.anime;
    animaisTab[index].classList.add('ativo', direction);
  }
  // condicionando a execucao do codigo
  if (animaisTab.length && animaisLista.length) {
    animaisTab[0].classList.add('ativo');

    // estou selecionando as todas as lis e executando uma funcao para cada, depois
    // seleciono o index e em um callback eu executo a funcao ativarTab() para
    // selecionar as sections quando clicar nas lis
    animaisLista.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        ativarTab(index);
      });
    });
  }
}
