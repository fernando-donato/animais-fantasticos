import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdownmenu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initAnimaNumeros from "./modules/anima-numeros.js";
import ScrollAnima from "./modules/scroll-anima.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[hrefˆ="#"]');
scrollSuave.init();

const accordion = new Accordion('[dat-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
TabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const ScrollAnima = new ScrollAnima();
ScrollAnima.init();

const dropdownMenu = new dropdowMenu("[data-dropdown]");
dropdownMenu.init();

initMenuMobile();
initAnimaNumeros();

//const animais = document.getElementById("animais");
//console.log();

//const gridSection = document.getElementsByClassName("grid-section");
//console.log(gridSection[0]);

//const primeiraLi = document.querySelector("li");
//console.log(primeiraLi);

//const primeiraUl = document.querySelector("ul");
//console.log(primeiraUl);
