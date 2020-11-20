// Funcionalidade de verificar o horario e ativar uma classe de ativo para usuario
// verifica o dia da semana para ver se a loja esta aberta ou nao.
export default function classHour() {
  const funcionamento = document.querySelector('[data-semana]');
  const daysWeek = funcionamento.dataset.semana.split(',').map(Number);
  const hoursOn = funcionamento.dataset.horario.split(',').map(Number);
  const dateNow = new Date();
  const day = dateNow.getDay();
  const hour = dateNow.getHours();

  const weekOpen = daysWeek.indexOf(day) !== -1;
  const hourOpen = hour >= hoursOn[0] && hour < hoursOn[1];

  if (weekOpen && hourOpen) {
    funcionamento.classList.add('active');
  }
}
