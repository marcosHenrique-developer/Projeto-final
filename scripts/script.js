import TabNav from './executarTab.js';
import Colapso from './initColapso.js';
import ScrollBar from './initScrollBar.js';
import ExecultarScoll from './execultarScroll.js';
import Modal from './modal.js';
import Tooltip from './tooltip.js';
import DownMenu from './dropDownMenu.js';
import Mobile from './menuMobile.js';
import fetchAnimais from './fetchAnimais.js';
import ContHours from './contHours.js';
import fetchBitcoin from './fetchBitcoin.js';

const scroolSuave = new ScrollBar('.menu-js a[href^="#"]');
scroolSuave.init();

const collapso = new Colapso('.js-collapse dt');
collapso.init();

const tab = new TabNav('.tabMenu-js li', '.tabNavegacao-js section');
tab.init();

const modal = new Modal(
  '[data-modal="container"]',
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
);
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scroll = new ExecultarScoll('.js-scroll');
scroll.init();

const dropDown = new DownMenu('[data-dropdown]');
dropDown.init();

const menuMobile = new Mobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const hours = new ContHours('[data-semana]', 'active');
hours.init();

fetchAnimais();
fetchBitcoin();
