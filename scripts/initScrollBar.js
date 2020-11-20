export default function executarScrollBar() {
  const linksInternos = document.querySelectorAll('.menu-js a[href^="#"]');

  function scrollBar(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const atributo = document.querySelector(href);
    atributo.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  linksInternos.forEach((links) => {
    links.addEventListener('click', scrollBar);
  });
}
