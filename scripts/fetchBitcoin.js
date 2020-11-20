// puxar bitcoins de uma api externa e botar no site
export default function fetchBitcoins() {
  const bitcoinApi = document.querySelector('.bitcoins');
  fetch('https://blockchain.info/ticker')
    .then((result) => result.json())
    .then((resultado) => {
      bitcoinApi.innerText = (100 / resultado.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
