import animateNumber from './animateNumber.js';
// puxar dados de uma api externa criada como arquibo e criando uma div com os dados
// puxados
// talvez essa parte fique em comentario pois as funcionalidades funcionan com um
// servidor
export default function fetchAnimais() {
  function createAnimals(animal) {
    const divCreate = document.createElement('div');
    divCreate.classList.add('.numero-animal');
    divCreate.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return divCreate;
  }
  async function fecthDados(url) {
    try {
      const dados = await fetch(url);
      const dadosJason = await dados.json();
      const gridanimals = document.querySelector('.numeros-grid');
      dadosJason.forEach((animals) => {
        const criaAnimals = createAnimals(animals);
        gridanimals.appendChild(criaAnimals);
      });
      animateNumber();
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  fecthDados('./dados.json');
}
