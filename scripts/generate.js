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

export const resetInitialContent = (content, initialContent) => {
    const {plate, cutleries, snacks} = content;

    document.getElementsByClassName('main__content--plate')[0].removeChild(plate.parent[0].lastElementChild);
    document.getElementsByClassName('main__content--knife')[0].removeChild(cutleries.first.parent[0].lastElementChild);
    document.getElementsByClassName('main__content--fork')[0].removeChild(cutleries.second.parent[0].lastElementChild);
    document.getElementsByClassName('main__content--snackHight')[0].removeChild(snacks.first.parent[0].lastElementChild);
    document.getElementsByClassName('main__content--snackMiddle')[0].removeChild(snacks.second.parent[0].lastElementChild);
    document.getElementsByClassName('main__content--snackLower')[0].removeChild(snacks.third.parent[0].lastElementChild);

    generationContent(initialContent);
}

export const createBntEvent = (btn, evnt, content, initialContent) => {
    btn.addEventListener('click', () => evnt(content, initialContent))
}

export const resetEvent = (content, initialContent) => {
    resetInitialContent(content, initialContent);
}