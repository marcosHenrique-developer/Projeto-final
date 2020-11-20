// Parte de execucao do interacao entre o titulo e o seus textos
export default function executarColapso() {
  const colapso = document.querySelectorAll('.js-collapse dt');
  const colapsoDd = document.querySelectorAll('.js-collapse dd');
  const ativarClasse = 'collapse';
  function execultarColapso() {
    this.classList.toggle(ativarClasse);
    this.nextElementSibling.classList.toggle(ativarClasse);
  }

  if (colapso.length) {
    // colapso[0].classList.add(ativarClasse);
    // colapso[0].nextElementSibling.classList.add(ativarClasse);
    colapsoDd[0].classList.add(ativarClasse);

    colapso.forEach((item) => {
      item.addEventListener('click', execultarColapso);
    });
  }
}
