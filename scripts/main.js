import { DISHES_SRC, SNACKS_SRC, CUTLERY_SRC, INITIAN_CONTENT } from './constants.js';
import { modalEvent } from './modal.js';
import { generationContent, generationRandomBtnEvent, createBntEvent, resetBtnEvent } from './generate.js';

const content = JSON.parse(JSON.stringify(INITIAN_CONTENT));

let rightModal = document.getElementsByClassName('main__content-right-modal');
let rightModalList = document.getElementsByClassName('main__content-dishes');

let leftModal = document.getElementsByClassName('main__content-left-modal');
let leftModalList = document.getElementsByClassName('main__content-snacks');

let resetBtn = document.getElementsByClassName('main-footer__button--save');
let generateBtn = document.getElementsByClassName('main-footer__button--generate');

generationContent(content); 

modalEvent(content.plate.parent[0], 'main__content--right-module', rightModal[0], rightModalList[0], DISHES_SRC, content);
modalEvent(content.cutleries.second.parent[0], 'main__content--right-module', rightModal[0], rightModalList[0], CUTLERY_SRC, content);
modalEvent(content.cutleries.first.parent[0], 'main__content--left-module', leftModal[0], leftModalList[0], CUTLERY_SRC, content);
modalEvent(content.snacks.first.parent[0], 'main__content--left-module', leftModal[0], leftModalList[0], SNACKS_SRC);
modalEvent(content.snacks.second.parent[0], 'main__content--left-module', leftModal[0], leftModalList[0], SNACKS_SRC);
modalEvent(content.snacks.third.parent[0], 'main__content--left-module', leftModal[0], leftModalList[0], SNACKS_SRC);

createBntEvent(resetBtn[0], resetBtnEvent, content);
createBntEvent(generateBtn[0], generationRandomBtnEvent, content);


