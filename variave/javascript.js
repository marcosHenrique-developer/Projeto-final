// var name = "Marcos";
// var idade = "26";
// var comidaFavorita;
// comidaFavorita = "Burguer";
// var suco, cerveja, filme, musica, trabalho;
// console.log(
//   name,
//   idade,
//   comidaFavorita,
//   suco,
//   cerveja,
//   filme,
//   musica,
//   trabalho
// );

// var name = "locura";
// var numero = "18";
// var idade = 26;

// var nome = "marcos";
// var sobrenome = "henrique";
// var nomeCompleto = `${nome} ${sobrenome}`;
// var nomes = "It's time";
// console.log(nomeCompleto);

//booleans e condicionais

// var minhaIdade = 26;
// var idadePai = 50;

// if (minhaIdade < idadePai) {
//   console.log("É maior");
// } else if (minhaIdade === idadePai) {
//   console.log("É igual");
// } else {
//   console.log("É menor");
// }

// var expressao = 5 - 2 && 5 - " " && 5 - 2;
// console.log(expressao);

// var nome = "Andre";
// var idade = 28;
// var possuiDoutorado = false;
// var empregoFuturo;
// var dinheiroNaConta = 0;
// console.log(dinheiroNaConta);

// var brasil = 207;
// var china = 1340;
// if (brasil > china) {
//   console.log("Brasil tem mais habitantes");
// } else {
//   console.log("Brasil tem menos habitantes");
// }

// if ("Gato" === "gato" && 5 > 2) {
//   console.log("Verdadeiro");
// } else {
//   console.log("Falso");
// }

//funcoes

// function imc(peso, altura) {
//   const imc = peso / altura ** 2;
//   console.log(imc);
//   return imc;
// }
// imc(94, 1.86);

// function corFavorita(cor) {
//   if (cor === "azul") {
//     return "Eu gosto de azul";
//   } else if (cor === "verde") {
//     return "Eu gosto de cores";
//   } else {
//     return "Eu nao sou tao fa de cores";
//   }
// }

// function terceiraIdade(idade) {
//   if (typeof idade !== "number") {
//     return "Por favor um numero";
//   } else if (idade >= 60) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(terceiraIdade(500));

// exerxixios

// function isTrust(valor) {
//   return !!valor;
// }
// function umQuadrado(lado) {
//   const umQuadrado = lado * 4;
//   return lado * 4;
// }
// lado = 5;

// function nome() {
//   var nome = "Marcos";
//   var sobrenome = "Henrique";
//   return `${nome}, ${sobrenome}`;
// }

// function numeroPar(par) {
//   var modulo = par % 2;
//   if (modulo === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function dados(dado) {
//   return typeof dado;
// }

// addEventListener("scroll", function () {
//   console.log("Marcos Henrique");
// });

//Exercicio

// Crie um objeto com os seus dados pessoais
// var pessoa = {
//   nome: "Marcos",
//   sobreNome: "Henrique",
//   idade: 26,
//   profissao: "Programador",
//   possuiEmprego: "false",
// };

// Crie um método no objeto anterior, que mostre o seu nome completo
// pessoa.nomeCompleto = function () {
//   return `${this.nome} ${this.sobreNome} ${this.idade}`;
// };
// Modifique o valor da propriedade preco para 3000

// var carro = {
//   preco: 1000,
//   portas: 4,
//   marca: "Audi",
// };
// carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
// var cachorro = {
//   raca: "Labrador",
//   cor: "Preta",
//   idade: 10,
//   latir(pessoa) {
//     if (pessoa === "Homem") {
//       return "Latir";
//     } else {
//       return "Nada";
//     }
//   },
// };

// nomeie 3 propriedades ou métodos de strings

// nomeie 5 propriedades ou métodos de elementos do DOM
// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

//exercicio

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
// var copas = [1959, 1963, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
// for (var i = 0; i < copas.length; i++) {
//   console.log(`O brasil ganhou a copa de ${copas[i]}`);
// }

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
// for (var fruta = 0; fruta < frutas.length; fruta++) {
//   console.log(frutas[fruta]);
//   if (frutas[fruta] === "Pera") {
//     break;
//   }
// }
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

// var ultimaFruta = [frutas[frutas.length - 1]];

// var videoGames = ["Switch", "PS4", "XBox", "3DS"];
// videoGames.forEach(function (item) {
//   console.log(item);
// });
// O argumento item será atribuído dinamicamente

//exercicios
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll

// var scroll = 1000;
// scroll += 500;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
// var possuiCarro = true;
// var possuiCasa = true;
// var darCredito;
// darCredito =
//   possuiCasa && possuiCarro
//     ? "Dar crédito ao cliente"
//     : "Não dar crédito ao cliente";
// console.log(darCredito);

//exercicios(escopo)

// Por qual motivo o código abaixo retorna com erros?
// {
//   var cor = "preto";
//   const marca = "Fiat";
//   let portas = 4;
//   console.log(cor, marca, portas);
// }

// Como corrigir o erro abaixo?
// const dois = 2;

// function somarDois(x) {
//   return x + dois;
// }
// function dividirDois(x) {
//   return x / dois;
// }
// console.log(somarDois(4));
// console.log(dividirDois(6));

// O que fazer para total retornar 500?
// const numero = 50;
// for (let numero = 0; numero <= 10; numero++) {
//   console.log(numero);
// }

// const total = 10 * numero;
// console.log(total);

//funcoes constructors

// Transforme o objeto abaixo em uma Constructor Function
// function Pessoa(nome, idade) {
//   this.nome = nome,
//   this.idade = idade,
//   this.acao = function () {
//       console.log(this.nome + " Andou");
//     };
// }

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
// const pessoa1 = new Pessoa("João", 20);
// const pessoa2 = new Pessoa("Maria", 25);
// const pessoa3 = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

// function Dom(selector) {
//   const elements = document.querySelectorAll(selector);
//   this.classe = elements;
//   this.addClass = function (classe) {
//     elements.forEach((element) => {
//       element.classList.add(classe);
//     });
//     };
//     this.removeClass = function (classe) {
//       elements.forEach((element) => {
//         element.classList.remove(classe);
//       });
//   };
// }
// const listas = new Dom("li");

//eu que fiz essa
// function Porra(selector) {
//   const elementos = document.querySelectorAll(selector);
//   this.elements = elementos;
//   this.addClasse = function (elements) {
//     elementos.forEach((putzcara) => {
//       putzcara.classList.add(elements);
//     });
//   };
//   this.remover = function (elements) {
//     elementos.forEach((putzcara) => {
//       putzcara.classList.remove(elements);
//     });
//   }
// }
// const pqp = new Porra('li');

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }
// const andre = new Pessoa('André', 28);

// Pessoa.prototype.andar = function() {
//   return this.nome + ' andou';
// }
// Pessoa.prototype.nadar = function() {
//   return this.nome + ' nadou';
// }

// const Carro = {
//   marca: 'Ford',
//   preco: 2000,
//   acelerar() {
//     return true;
//   }
// }

// Carro // Object
// Carro.marca // String
// Carro.preco // Number
// Carro.acelerar // Function
// Carro.acelerar() // Boolean
// Carro.marca.charAt // Function
// Carro.marca.charAt(0) // String

//exercicios prototype

//1
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

// function Maluco(nome, sobrenome, idade){
//   this.nome = nome;
//   this.sobreNome = sobrenome;
//   this.idade = idade;
// }

// Maluco.prototype.nomeIdade = function() {
//   return `${this.nome} ${this.sobreNome} ${this.idade}`
// }

// const pessoa = new Maluco('Marcos', 'Henrique', 26);

//2
// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// Object.getOwnPropertyNames(NodeList.prototype);
// Object.getOwnPropertyNames(HTMLCollection.prototype);
// Object.getOwnPropertyNames(Document.prototype);

//3
// Liste os construtores dos dados abaixo
// const li = document.querySelector('li');

// li; //HTMLLIElement
// li.click; // Function
// li.innerText; // String
// li.value; // Number
// li.hidden; //Boolena
// li.offsetLeft; //Number
// li.click(); //undefined

// // Qual o construtor do dado abaixo:
// const saber = li.hidden.constructor.name;
// //String

//native, host e user| exercicios

// Liste 5 objetos nativos
// Object
// Array
// Number
// Boolean
// Function

// Liste 5 objetos do browser
// NodeList
// HTMLCollection
// Element
// Window
// Document
// History

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox ou Safari

//WebKitPlaybackTargetAvailabilityEvent / tem no safari e n tem no chrome.
//Atomics / existe no chrome e nao tem no safari

// if(typeof window.Atomics !== "undefined"){
//   console.log('Existe')
// } else {
//   console.log('Não Existe');
// }

//string exercicios
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

// const transacoes = [
//   {
//     descricao: "Taxa do Pão",
//     valor: "R$ 39",
//   },
//   {
//     descricao: "Taxa do Mercado",
//     valor: "R$ 129",
//   },
//   {
//     descricao: "Recebimento de Cliente",
//     valor: "R$ 99",
//   },
//   {
//     descricao: "Taxa do Banco",
//     valor: "R$ 129",
//   },
//   {
//     descricao: "Recebimento de Cliente",
//     valor: "R$ 49",
//   },
// ];

// let taxaTotal = 0;
// let recebimentoTotal = 0;

// transacoes.forEach((item) => {
//   let stringNumero = +item.valor.replace("R$ ", "");

//   if (item.descricao.startsWith("Taxa")) {
//     taxaTotal += stringNumero;
//   } else {
//     recebimentoTotal += stringNumero;
//   }
// });
// console.log(taxaTotal);
// console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo
// const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
// const arrayTransporte = transportes.split(';');
// console.log(arrayTransporte);

// Substitua todos os span's por a's
// const html = `<ul>
//                 <li><span>Sobre</span></li>
//                 <li><span>Produtos</span></li>
//                 <li><span>Contato</span></li>
//               </ul>`;

// const arrayHtml = html.split('span');
// const novoHtml = arrayHtml.join('a');
// console.log(novoHtml);

// Retorne o último caracter da frase
// const frase = "Melhor do ano!";
// console.log(frase.slice(-2));

// Retorne o total de taxas
// const transacoes2 = [
//   "Taxa do Banco",
//   "   TAXA DO PÃO",
//   "  taxa do mercado",
//   "depósito Bancário",
//   "TARIFA especial",
// ];

// let taxaTotal = 0;
// transacoes2.forEach((item) => {
//   item = item.toUpperCase();
//   item = item.trim();
//   item = item.slice(0, 4);
//   if (item === "TAXA") taxaTotal++;
//   console.log(item);
// });
// console.log(taxaTotal);

//exercicos math e number
// Retorne um número aleatório
// entre 1050 e 2000
// const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
// console.log(numeroAleatorio);

// Retorne o maior número da lista abaixo
// const numeros = "4, 5, 20, 8, 9";
// const stringNumero = numeros.split(", ");
// const numeroMaximo = Math.max(...stringNumero);

// console.log(numeroMaximo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total

// const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

// function limparPreco(preco) {
//   preco = preco.toUpperCase();
//   preco = preco.replace('R$', '');
//   preco = preco.trim();
//   preco = preco.replace(',', '.');
//   preco = +preco
//   preco = +preco.toFixed(2);
//   return preco;
// }
// let soma = 0;
// listaPrecos.forEach((preco) => {
//   soma += limparPreco(preco)
// });
// console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

//array exercicios

// const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// // Remova o primeiro valor de comidas e coloque em uma variável
// const removerPrimeiro = comidas.shift();
// console.log(comidas);
// // Remova o último valor de comidas e coloque em uma variável
// const removerUltimo = comidas.pop();
// console.log(comidas);
// // Adicione 'Arroz' ao final da array
// const addArray = comidas.push('Arroz');
// console.log(comidas);
// // Adicione 'Peixe' e 'Batata' ao início da array
// const addArrayInicio = comidas.unshift('Peixe', 'Batata');
// console.log(comidas);

// const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// // Arrume os estudantes em ordem alfabética
// const ordem = estudantes.sort();
// console.log(estudantes);
// // Inverta a ordem dos estudantes
// const contrario = estudantes.reverse()
// console.log(estudantes);
// // Verifique se Joana faz parte dos estudantes
// const joana = estudantes.includes('Joana');
// console.log(joana);
// // Verifique se Juliana faz parte dos estudantes
// const juliana = estudantes.includes('Juliana');
// console.log(juliana);

// let html = `<section>
//               <div>Sobre</div>
//               <div>Produtos</div>
//               <div>Contato</div>
//             </section>`
// // Substitua section por ul e div com li,
// // utilizando split e join
//  html = html.split('section').join('ul').split('div').join('li');

// console.log(html);

// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// // Remova o último carro, mas antes de remover
// // salve a array original em outra variável
// const clonar = carros.slice();
// carros.pop();
// console.log(carros);
// console.log(clonar);

//exercicios arrays e interação

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
// const cursos = document.querySelectorAll('.curso');
// const arrayCurso = Array.from(cursos);
// const objetos = arrayCurso.map((curso) => {
//   const titulo = curso.querySelector('h1').innerText
//   const paragrafo = curso.querySelector('p').innerText
//   const aula = curso.querySelector('.aulas').innerText
//   const hora = curso.querySelector('.horas').innerText
//   return {
//     titulo,
//     paragrafo,
//     aula,
//     hora
//   }
// })
// console.log(objetos);

// // Retorne uma lista com os
// // números maiores que 100
// const numeros = [3, 44, 333, 23, 122, 322, 33];
// const maioresQue100 = numeros.filter(x => x > 100);
// console.log(maioresQue100);

// // Verifique se Baixo faz parte
// // da lista de instrumentos e retorne true
// const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
// const encontrarIntrumentos = instrumentos.some((item) => {
//   return item == 'Baixo'
// });
// console.log(encontrarIntrumentos);

// // Retorne o valor total das compras
// const compras = [
//   {
//     item: 'Banana',
//     preco: 'R$ 4,99'
//   },
//   {
//     item: 'Ovo',
//     preco: 'R$ 2,99'
//   },
//   {
//     item: 'Carne',
//     preco: 'R$ 25,49'
//   },
//   {
//     item: 'Refrigerante',
//     preco: 'R$ 5,35'
//   },
//   {
//     item: 'Quejo',
//     preco: 'R$ 10,60'
//   }
// ]

// // let soma = 0
// // compras.forEach((item) => {
// //   item = item.preco.toUpperCase().trim().replace('R$', '').replace(',', '.');
// //   item = +item;
// //   soma += item
// // });
// // console.log(soma);

// //ou
// const somaPreco = compras.reduce((acumulador, item) => {
//   const limparString = +item.preco.toUpperCase().trim().replace('R$', '').replace(',', '.');
//   return acumulador + limparString
// }, 0)
// console.log(somaPreco)

//Funtions,
//exercicios

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
// const paragrafo = document.querySelectorAll('p');
// const total = Array.prototype.reduce.call(paragrafo, (acumulador, item) => {
//   return acumulador + item.innerText.length;
// }, 0);

// console.log(total);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
// function criaElementos(tag, classe, conteudo) {
//   const element = document.createElement(tag)
//   classe ? element.classList.add(classe) : ''
//   conteudo ? element.innerHTML = conteudo : ''
//   return element
// }
// console.log(criaElementos('h1', 'criado', 'Testando criação de elemento'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

//usar o código da função anterior
// const h1Criado = criaElementos.bind(null, 'h1', 'titulo');

//exercicio
//Object
// Crie uma função que verifique
// corretamente o tipo de dado
// function verificarValores(dado) {
//   return Object.prototype.toString.call(dado)
// }
// console.log(verificarValores(2));

// // Crie um objeto quadrado com
// // a propriedade lados e torne
// // ela imutável
// const quadrado = {
//   lado: 1
// }
// Object.freeze(quadrado);
// //ou
// const quadrados = {}
// Object.defineProperties(quadrados, {
//   lados: {
//     value: 4,
//     enumerable: true,
//   }
// });

// // Previna qualquer mudança
// // no objeto abaixo
// const configuracao = {
//   width: 800,
//   height: 600,
// background: '#333'
// }
// Object.freeze(configuracao);

// // Liste o nome de todas
// // as propriedades do
// // protótipo de String e Array

// //posso colocar dentro do console log
// Object.getOwnPropertyNames(Array.prototype); //33 propriedades.
// Object.getOwnPropertyNames(String.prototype); //48 propriedades.

//criacao minha
// let Num = parseInt(prompt( "Digite sua nota"));
// function nota() {
//   // let Num = 7;
//   if (Num >= 6) {
//     console.log(" O Aluno foi Aprovado!");
//   } else {
//     console.log(" O Aluno foi Reprovado!");
//   }
// }
// nota();

// // so um exercicio de loop e break
// var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// var text = "";
// var i;
// for (i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
//   if (cars[i] === "BMW") {
//     text = `${cars[i]} é o melhor carro sem dúvidas`;
//     console.log(text);
//     break;
//   }
// }

// function natacao() {
//   let Num = parseInt(prompt("Digite os sua idade"));
//   if (Num >= 7 && Num <= 12) {
//     console.log("Você está na categoria INFANTIL");
//   } else if (Num >= 13 && Num <= 17) {
//     console.log("Você está na categoria JUVENIL");
//   } else if (Num >= 18 && Num <= 49) {
//     console.log("Você está na categoria ADULTO");
//   }else if (Num >= 50) {
//     console.log("Você está na categoria SENIOR");
//   }else {
//     console.log('Você não tem idade suficiente')
//   }
// }
// natacao();

// function main() {
//   let numero;
//   let maior = 0;
//   let impar = 0;
//   let man = parseInt(prompt("Digite o limite"));

//   for(numero = 1; numero <= man; numero++){
//     let Num = parseInt(prompt("Digite um numero"));
//     if(Num % 2 == 0) {
//       maior ++
//     }else{
//       impar ++;
//     }
//     console.log('Foram informados ' + maior + ' Numeros pares');
//     console.log('Foram informados ' + impar + ' Numeros impares');
//   }

// let regressiva = parseInt(prompt("Qual o valor para início da contagem regressiva? "));
// do {
//   if(regressiva > 0){
//     regressiva--
//     console.log(regressiva)
//   }
// }while(regressiva <= 20)

// let cont;
// let fatorial = 1;
// let numero = parseInt(prompt("Qual o numero fatorial de :"));
// for (cont=1;cont<=numero;cont++)
// {
//   fatorial*=cont
//   console.log(fatorial)
// }
// console.log("O fatorial de " + numero + " é: " + fatorial)

//   let numero = parseInt(prompt("Quantos termos da série de Fibonacci deseja ver?"));
//   let fibonacci = 0;
//   let anterior = 0;
//   let atual = 1;

//   for(cont = 1; cont <= numero; cont++) {
//     fibonacci = anterior + atual;
//     anterior = atual;
//     atual = fibonacci;

//   }
//   console.log(fibonacci);

// let Num = parseInt(prompt("Digite o numero da tabuada"));
// console.log('A tábuada de ' + Num + ' É:');

// for(contador = 0; contador <= 10; contador++){
//   let resutado = Num * contador;
//   console.log(resutado);
// }
// }

// main();

//exercicios setTimeout setInt
// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// function mudarCor(){
//   document.body.classList.toggle('vermelho')
// }
// setInterval(mudarCor, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

// const start = document.querySelector('.init');
// const pause = document.querySelector('.pause');
// const time = document.querySelector('.cron');

// start.addEventListener('click', iniciarCron);
// pause.addEventListener('click', pauseCron);
// pause.addEventListener('dblclick', restartCron);

// let i = 0;
// let timer;
// function iniciarCron(){
//   timer = setInterval(() => {
//     time.innerText = i++
//   }, 100);
//   start.setAttribute('disabled', '')
// }

// function pauseCron() {
//   clearInterval(timer);
//   start.removeAttribute('disabled')
// }

// function restartCron(){
//   time.innerText = 0;
//   i = 0;
// }

// const form = document.getElementById('contato');
// const dados = {};
// function handleChange(event) {
//   document.body.style.backgroundColor = event.target.value;
//   dados[event.target.name] = event.target.value;

//   const target = event.target;
//   if(!target.checkValidity()){
//     target.classList.add('invalido');
//     target.nextElementSibling.innerText = target.validationMessage;
//   }else {
//     target.classList.remove('invalido')
//   }

// }
// form.addEventListener('change', handleChange);

const controles = document.getElementById("control");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");
controles.addEventListener("change", changes);

const style = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  color(value) {
    this.element.style.color = value;
  },
  text(value) {
    this.element.innerText = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

function changes(event) {
  const name = event.target.name;
  const value = event.target.value;
  
  style[name](value);
  saveValues(name, value);
  showCss();
}
function saveValues(name, value) {
  localStorage[name] = value;
}
function useSavedValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
    style[propertie](localStorage[propertie]);
    controles.elements[propertie].value = localStorage[propertie];
  });
  showCss();
}
useSavedValues();

function showCss() {
  cssText.innerHTML =
  "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}

// const login = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Login Efetuado com Sucesso')
//   }, 1000)
// })
// const content = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('Está aqui o conteudo')
//   }, 500)
// })

// const returne = Promise.race([content, login])
// returne.then((results) => {
//   console.log(results)
// })

//exercicio fetch api
// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
// const cep = document.querySelector('#cep');
// const buttonSearch = document.querySelector('.button');
// const result = document.querySelector('.result');

// buttonSearch.addEventListener('click', searchCep);

// function searchCep(event){
//   event.preventDefault();
//   const cepValue = cep.value;
//   promisseCep(cepValue);
// }
// function promisseCep(cepValue) {
//   fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
//   .then(resp => resp.text())
//   .then(cep => {
//     console.log(cep)
//     result.innerText = cep;
//   })
// }
// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
// function bitcoins(){
//   fetch('https://blockchain.info/ticker')
//   .then(resp => resp.json())
//   .then(bit => {
//     result.innerText = bit.BRL.buy
//     console.log(bit.BRL.buy)
//   })
//   setInterval(bitcoins, 1000 * 30)
// }
// bitcoins();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
// const jokes = document.querySelector('.chuck');
// function jokesChuck(){
//   fetch('https://api.chucknorris.io/jokes/random')
//   .then(resp => resp.json())
//   .then(joke => {
//     result.innerText = joke.value;
//   })
// }
// jokesChuck();

// jokes.addEventListener('click', jokesChuck);

//simulando uma pagina sem carregamento usando metodo fetch, async e await
// const links = document.querySelectorAll('a');

// function handleClick(event) {
//   event.preventDefault();
//   fetchPage(event.target.href)
//   window.history.pushState(null, null, event.target.href)
// }
// async function fetchPage(link) {
//   document.querySelector('.content').innerText = 'Carregando Conteudo'
//   const response = await fetch(link);
//   const response2 = await response.text();
//   replacePage(response2)
// }
// function replacePage(newtext) {
//   const newHtml = document.createElement('div');
//   newHtml.innerHTML = newtext;

//   const oldVersion = document.querySelector('.content')
//   const newVersion = newHtml.querySelector('.content')

//   oldVersion.innerHTML = newVersion.innerHTML
//   document.title = newHtml.querySelector('title').innerText
// }

// window.addEventListener('popstate', () => {
//   fetchPage(window.location.href)
// })

// links.forEach(link => {
//   link.addEventListener('click', handleClick)
// })

// async function iniciarAsync() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Depois de 2s");
//       resolve();
//     }, 2000);
//   });
//   console.log("fim");
// }
// iniciarAsync();

class CountDown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _actualDate() {
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _timeStamp() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days() {
    return Math.floor(this._timeStamp / (24 * 60 * 60 * 1000));
  }
  get hours() {
    return Math.floor(this._timeStamp / (60 * 60 * 1000));
  }
  get minutes() {
    return Math.floor(this._timeStamp / (60 * 1000));
  }
  get seconds() {
    return Math.floor(this._timeStamp / 1000);
  }
  get total() {
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}

const timeToCristhimas = new CountDown("24 December 2020 23:59:59");
console.log(timeToCristhimas.total);
// setInterval(() => {

//   console.log(timeToCristhimas.total)
// },5000)

// //atividade function expression
// // Remova o erro
// const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
// priceNumber("R$ 99,99");

// // Crie uma IIFE e isole o escopo
// // de qualquer código JS.
// (function() {
//   const lol = "maluco";
//   console.log(lol);
// })();

// // Como podemos utilizar
// // a função abaixo.
// const active = (callback) => callback();
// active(() => {
//   console.log("Ativou");
// });

//exercicio destrutoctor
// Extraia o backgroundColor, color e margin do btn
// const btns = document.querySelector("button");
// const btnStyles = getComputedStyle(btn);
// const {backgroundColor, color, margin} = btnStyles;
// console.log(margin);

// Troque os valores das variáveis abaixo
// let cursoAtivo = "JavaScript";
// let cursoInativo = "HTML";

// [cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
// console.log(cursoAtivo)
// console.log(cursoInativo)

// Corrija o erro abaixo
// const cachorro = {
//   nome: "Bob",
//   raca: "Labrador",
//   cor: "Amarelo",
// };
// const { cor: locura } = cachorro;

//exercicios rest spread
// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
// function createButton(background = 'white', color = 'blue') {
//   // background = background || 'blue';
//   // if(color === undefined) {
//   //   color = 'red';
//   // }
//   const buttonElement = document.createElement('button');
//   buttonElement.style.background = background;
//   buttonElement.style.color = color;
//   return buttonElement;
// } 
// const redButton = createButton();

// Utilize o método push para inserir as frutas ao final de comidas.
// const frutas = ['Banana', 'Uva', 'Morango'];
// const comidas = ['Pizza', 'Batata'];
// comidas.push(...frutas)
// console.log(comidas)

//exercicio loop e interable
// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
// const bodys = document.querySelectorAll('li');
// for(const lis of bodys){
//   lis.classList.add('ativoss')
//   console.log(lis)
// }
// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
// for(const win in window) {
//   console.log(`${win}: ${window[win]}`)
// }












