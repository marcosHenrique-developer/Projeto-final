// pagina animais lobos

//Dom
// Retorne o url da página atual utilizando o objeto window
// const hrefPagina = window.location.href;
// console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
// const titulo = document.querySelector(".titulo");
// console.log(titulo);

// Retorne a linguagem do navegador
// const navegador = window.navigator.language;
// console.log(navegador);

// Retorne a largura da janela
// const largura = window.innerWidth;
// console.log(largura);

// Retorne no console todas as imagens do site
// const fotosAnimais = document.querySelectorAll("img");
// console.log(fotosAnimais);

// Retorne no console apenas as imagens que começaram com a palavra imagem

// const imagem = document.querySelectorAll("img[src^='img/imagem']");
// console.log(imagem);

// Selecione todos os links internos (onde o href começa com #)

// const linkInterno = document.querySelectorAll("[href^='#']");
// console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao

// const tiruloH2 = document.querySelector(".animais-descricao h2");
// console.log(tiruloH2);

// Selecione o último p do site
// const paragrafos = document.querySelectorAll("p");

// console.log(paragrafos[paragrafos.length - 1]);

//exercicios(arrow function);

// arrow funtion e forEach
// Mostre no console cada parágrado do site
// const paragrafo = document.querySelectorAll("p");
// console.log(paragrafo);

// Mostre o texto dos parágrafos no console
// paragrafo.forEach((item) => {
//   console.log(item.innerText);
// });
// Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll("img");

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach((item) => console.log(i++));

// imgs.forEach(() => i++);

//classes e atributos

// Adicione a classe ativo a todos os itens do menu
// const itens = document.querySelectorAll(".menu a");
// itens.forEach((item) => {
//   item.classList.add("lindo");
// });

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// itens.forEach((item) => {
//   item.classList.remove("lindo");
// });
// itens[0].classList.add("lindo");

// Verifique se as imagens possuem o atributo alt
// const imgs = document.querySelectorAll("img");
// imgs.forEach((img) => {
//   const possuiAtributo = img.hasAttribute("alt");
//   console.log(img, possuiAtributo);
// });

// Modifique o href do link externo no menu
// const link = document.querySelector('a[href^="http"]');
// link.setAttribute("href", "http://www.google.com/");
// console.log(link);

//()exercicios dimensoes e distancia

// Verifique a distância da primeira imagem
// em relação ao topo da página

// const animais = document.querySelector("img");
// console.log(animais.offsetTop);

// Retorne a soma da largura de todas as imagens
// function somaImagens() {
//   const animais = document.querySelectorAll("img");
//   let soma = 0;
//   animais.forEach((img) => {
//     soma += img.offsetWidth;
//   });
//   console.log(soma);
// }
// window.onload = function () {
//   somaImagens();
// };

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// const links = document.querySelectorAll("a");
// links.forEach((link) => {
//   const linkWidth = link.offsetWidth;
//   const linkHeight = link.offsetHeight;
//   if (linkWidth >= 48 && linkHeight >= 48) {
//     console.log(link, "Possui o requisito minimo");
//   } else {
//     console.log(link, "Não possui o requisito minimo");
//   }
// });

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

// const small = window.matchMedia("(max-width: 720px)").matches;

// if (small) {
//   const menu = document.querySelector(".menu");
//   menu.classList.add("menu2");
// }

//eventos
// function handleKeyboard(event) {
//   if(event.key === 'a')
//     document.body.classList.toggle('azul');
//   else if(event.key === 'v')
//     document.body.classList.toggle('vermelho');
// }
// window.addEventListener('keydown', handleKeyboard);

// const imgs = document.querySelectorAll("img");
// function imgSrc(event) {
//   const src = event.currentTarget.getAttribute("src");
//   console.log(event.target);
// }

// imgs.forEach((img) => {
//   img.addEventListener("click", imgSrc);
// });

// exercicio

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// const link = document.querySelectorAll('a[href^="#"]');
// function handleLink(event) {
//   event.preventDefault();
//   link.forEach((link) => {
//     link.classList.remove("ativo");
//   });
//   event.currentTarget.classList.add("ativo");
// }

// link.forEach((link) => {
//   link.addEventListener("click", handleLink);
// });

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// const selecionarElementos = document.querySelectorAll("body *");
// function executarElemento(event) {
//   console.log(event.currentTarget);
//  event.currentTarget.remove();
// }

// selecionarElementos.forEach((elementos) => {
//   elementos.addEventListener("click", executarElemento);
// });
// console.log(selecionarElementos);

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

// const titulos = document.querySelectorAll("p");

// function handleKeyboard(event) {
//   if (event.key === "t") {
//     document.body.classList.toggle("loco");
//   }
// }
// window.addEventListener("keydown", handleKeyboard);

//exercicio

// Duplique o menu e adicione ele em copy
// const menu = document.querySelector(".menu");
// const copy = document.querySelector(".copy");
// const cloneMenu = menu.cloneNode(true);
// copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
// const dts = document.querySelector(".faq");
// const primeiroDt = dts.querySelector("dt");
// console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
// const dts = document.querySelector(".faq");
// const primeiroDd = dts.querySelector("dd");
//ou
// const primeiroDd2 = primeiroDt.nextElementSibling;
// console.log(primeiroDd);

// Substitua o conteúdo html de .faq pelo de .animais
// const htmlFaq = document.querySelector(".faq");
// const animais = document.querySelector(".animais");
// htmlFaq.innerHTML = animais.innerHTML;

//exercicio dataset
// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.
//esta no codigo fonte

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)
//codigo fonte

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita
//cogigo fonte

// Substitua todas as classes js- por data atributes.

