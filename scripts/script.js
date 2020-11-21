import execultarTab from './executarTab.js';
import initColapso from './initColapso.js';
import InitScrollBar from './initScrollBar.js';
import execultarScoll from './execultarScroll.js';
import modal from './modal.js';
import tooltip from './tooltip.js';
import dropDownMenu from './dropDownMenu.js';
import menuMobile from './menuMobile.js';
import fetchAnimais from './fetchAnimais.js';
import contHours from './contHours.js';
import fetchBitcoin from './fetchBitcoin.js';

const scroolSuave = new InitScrollBar('.menu-js a[href^="#"]');
scroolSuave.init();

execultarTab();
initColapso();
execultarScoll();
modal();
tooltip();
dropDownMenu();
menuMobile();
fetchAnimais();
contHours();
fetchBitcoin();
