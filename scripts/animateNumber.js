// parte do codigo que eu adiciono na parte de animais uma contagem em animação
export default function animateAnimals() {
  const numbers = document.querySelectorAll('[data-numero]');
  numbers.forEach((number) => {
    const total = +number.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  });
}
// colocar um observador de mudancas para adicionar o timer só quando eu chegar na section
let observer;
function handleMutation(mutation) {
  if (mutation[0].target.classList.contains('ativo')) {
    observer.disconnect();
    animateAnimals();
  }
}
const observeTarget = document.querySelector('.numeros');
observer = new MutationObserver(handleMutation);

observer.observe(observeTarget, { attributes: true });
console.log('teste');
console.log('teste');
console.log('teste');
console.log('teste');
console.log('teste');
