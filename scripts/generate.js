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