import TabNav from './executarTab.js';
import Colapso from './initColapso.js';
import ScrollBar from './initScrollBar.js';
import execultarScoll from './execultarScroll.js';
import Modal from './modal.js';
import tooltip from './tooltip.js';
import dropDownMenu from './dropDownMenu.js';
import menuMobile from './menuMobile.js';
import fetchAnimais from './fetchAnimais.js';
import contHours from './contHours.js';
import fetchBitcoin from './fetchBitcoin.js';

const scroolSuave = new ScrollBar('.menu-js a[href^="#"]');
scroolSuave.init();

const collapso = new Colapso('.js-collapse dt');
collapso.init();

const tab = new TabNav('.tabMenu-js li', '.tabNavegacao-js section');
tab.init();

const modal = new Modal('[data-modal="container"]', '[data-modal="abrir"]', '[data-modal="fechar"]');
modal.init();

execultarScoll();
tooltip();
dropDownMenu();
menuMobile();
fetchAnimais();
contHours();
fetchBitcoin();
