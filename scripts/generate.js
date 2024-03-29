import { DISHES_SRC, SNACKS_SRC, CUTLERY_SRC, INITIAN_CONTENT } from './constants.js';
import { createImgElement } from './creaters.js';


export const generationContent = (content) => {
    const {plate, cutleries, snacks} = content;

    plate.parent = document.getElementsByClassName('main__content--plate');
    cutleries.first.parent = document.getElementsByClassName('main__content--knife');
    cutleries.second.parent = document.getElementsByClassName('main__content--fork');
    snacks.first.parent = document.getElementsByClassName('main__content--snackHight');
    snacks.second.parent = document.getElementsByClassName('main__content--snackMiddle');
    snacks.third.parent = document.getElementsByClassName('main__content--snackLower');


    createImgElement(plate.parent[0], 'main__content--dish', plate.childSrc);
    createImgElement(cutleries.first.parent[0], 'main__content--imgFork', cutleries.first.childSrc);
    createImgElement(cutleries.second.parent[0], 'main__content--imgKnife', cutleries.second.childSrc);
    createImgElement(snacks.first.parent[0], 'main__content--snackHight-img', snacks.first.childSrc);
    createImgElement(snacks.second.parent[0], 'main__content--imgSnackMiddle-img', snacks.second.childSrc);
    createImgElement(snacks.third.parent[0], 'main__content--snackLower-img', snacks.third.childSrc);
}

export const resetInitialContent = (content) => {
    cleanField(content);
    generationContent(JSON.parse(JSON.stringify(INITIAN_CONTENT)));
}

export const generationRandomContent = (content) => {
    cleanField(content);
    const {plate, cutleries, snacks} = content;
    plate.childSrc = selectRandomString(DISHES_SRC.imgs);
    cutleries.first.childSrc = selectRandomString(CUTLERY_SRC.imgs);
    cutleries.second.childSrc = selectRandomString(CUTLERY_SRC.imgs);
    snacks.first.childSrc = selectRandomString(SNACKS_SRC.imgs);
    snacks.second.childSrc = selectRandomString(SNACKS_SRC.imgs);
    snacks.third.childSrc = selectRandomString(SNACKS_SRC.imgs);
    console.log(content, 'content');
    generationContent(content)
}

export const generationRandomBtnEvent = (content) => {
    generationRandomContent(content);
}

export const resetBtnEvent = (content) => {
    resetInitialContent(content);
}

export const createBntEvent = (btn, evnt, content) => {
    btn.addEventListener('click', () => evnt(content))
}

const selectRandomString = (images) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomString = images[randomIndex];
    return randomString;
}

const cleanField = (content) => {
    const { plate, cutleries, snacks } = content;

    document.getElementsByClassName('main__content--plate')[0].removeChild(plate.parent[0].lastElementChild);
    document.getElementsByClassName('main__content--knife')[0].removeChild(cutleries.first.parent[0].lastElementChild);
    document.getElementsByClassName('main__content--fork')[0].removeChild(cutleries.second.parent[0].lastElementChild);
    document.getElementsByClassName('main__content--snackHight')[0].removeChild(snacks.first.parent[0].lastElementChild);
    document.getElementsByClassName('main__content--snackMiddle')[0].removeChild(snacks.second.parent[0].lastElementChild);
    document.getElementsByClassName('main__content--snackLower')[0].removeChild(snacks.third.parent[0].lastElementChild);
}