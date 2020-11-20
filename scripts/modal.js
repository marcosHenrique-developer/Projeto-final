// parte do modal
export default function mostrarModal() {
  const showModal = document.querySelector('[data-modal="container"]');
  const abreModa = document.querySelector('[data-modal="abrir"]');
  const fecharModa = document.querySelector('[data-modal="fechar"]');

  function abreModal(event) {
    event.preventDefault();
    showModal.classList.toggle('ativar');
  }
  function fecharModal(event) {
    if (event.target === this) {
      abreModal(event);
    }
  }
  function handleKeyboard(event) {
    if (event.key === 'Escape') {
      showModal.classList.remove('ativar');
    }
  }

  if (showModal && abreModa && fecharModa) {
    window.addEventListener('keydown', handleKeyboard);
    abreModa.addEventListener('click', abreModal);
    fecharModa.addEventListener('click', abreModal);
    showModal.addEventListener('click', fecharModal);
  }
}
