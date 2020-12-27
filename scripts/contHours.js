// Funcionalidade de verificar o horario e ativar uma classe de ativo para usuario
// verifica o dia da semana para ver se a loja esta aberta ou nao.
export default class Hours {
  constructor(openHours, activeClass) {
    this.funcionamento = document.querySelector(openHours);
    this.class = activeClass;
  }

  checkOpen() {
    this.daysWeek = this.funcionamento.dataset.semana.split(',').map(Number);
    this.hoursOn = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  checkNow() {
    this.dateNow = new Date();
    this.day = this.dateNow.getDay();
    this.hour = this.dateNow.getUTCHours() - 3;
  }

  itsOpen() {
    const weekOpen = this.daysWeek.indexOf(this.day) !== -1;
    const hourOpen = this.hour >= this.hoursOn[0] && this.hour < this.hoursOn[1];
    return weekOpen && hourOpen;
  }

  activeOpen() {
    if (this.itsOpen()) {
      this.funcionamento.classList.add(this.class);
    }
  }

  init() {
    if (this.funcionamento) {
      this.checkOpen();
      this.checkNow();
      this.activeOpen();
    }
  }
}
