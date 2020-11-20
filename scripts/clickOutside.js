// Remover o dropdown quando o click for fora
export default function clickOutside(elements, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    if (!elements.contains(event.target)) {
      elements.removeAttribute(outside, '');
      events.forEach((useEvent) => {
        html.removeEventListener(useEvent, handleOutsideClick);
      });
      callback();
    }
  }
  if (!elements.hasAttribute(outside)) {
    events.forEach((useEvent) => {
      setTimeout(() => {
        html.addEventListener(useEvent, handleOutsideClick);
      });
    });
    elements.setAttribute(outside, '');
  }
}
