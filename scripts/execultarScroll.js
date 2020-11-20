// Parte da animacao de scroll das sections
export default function execultarScoll() {
  const secoes = document.querySelectorAll('.js-scroll');

  const windowMetade = window.innerHeight * 0.6;

  function scrollOnPage() {
    secoes.forEach((scroll) => {
      const secaoTop = scroll.getBoundingClientRect().top;
      const ifSecaoVisivel = secaoTop - windowMetade < 0;
      if (ifSecaoVisivel) {
        scroll.classList.add('ativo');
      } else if (scroll.classList.contains('ativo')) {
        scroll.classList.remove('ativo');
      }
    });
  }
  scrollOnPage();

  if (secoes.length) {
    window.addEventListener('scroll', scrollOnPage);
  }
}
