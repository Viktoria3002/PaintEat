import { DISHES_SRC, SNACKS_SRC, CUTLERY_SRC, CLASS_NAMES, INITIAN_CONTENT } from './constants.js';

let openParant = null;

const content = INITIAN_CONTENT;

let rightModal = document.getElementsByClassName('main__content-right-modal');
let rightModalList = document.getElementsByClassName('main__content-dishes');

let leftModal = document.getElementsByClassName('main__content-left-modal');
let leftModalList = document.getElementsByClassName('main__content-snacks');



const deleteImages = (parant, className, modalList) => {
    let listImages = document.querySelectorAll(`.${className}`);
    listImages.forEach((img) => {   
        img.childNodes[0].removeEventListener('click', () => onOpenAndCloseModal(parant, img.childNodes[0].src))
        modalList.removeChild(modalList.lastElementChild);
    })
}

const addImages = (parant, className, modalList, imgsSrcList) => {
    imgsSrcList.imgs.forEach((dishSrc) => {
        const dish = createLiElement(modalList, className, dishSrc, imgsSrcList.type)
        dish.addEventListener('click', () => onOpenAndCloseModal(parant, dishSrc))
    })
}

const createLiElement = (parant, className, src, type) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let btn = document.createElement("button");
    let img = document.createElement("img");

    li.appendChild(a);
    a.appendChild(btn);
    btn.appendChild(img);

    img.setAttribute('src',  src);
    btn.setAttribute('class', `${className} ${CLASS_NAMES[type]}`);

    parant.appendChild(li);

    return li;
}

const createImgElement = (parant, className, src) => {
    console.log(parant);
    let img = document.createElement("img");
    img.setAttribute('class', className);
    img.setAttribute('src',  src);
    parant.appendChild(img);
}


const modalEvent = (parant, className, modal, itemList, srcList) => {
    parant.addEventListener('click', () => {
        console.log(openParant === parant, openParant, parant); 

        if (modal.classList.contains('hidden') && !(openParant === parant)) {
            modal.classList.remove('hidden');
        }

        if (openParant === parant) {
            modal.classList.toggle('hidden');
        } else {
            deleteImages(parant, className, itemList);
            addImages(parant, className, itemList, srcList);
            openParant = parant;
        }
        
    })
}

const onOpenAndCloseModal = (item, src) => {
    item.src = src;
}

const generationContent = (content) => {
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

generationContent(content);

modalEvent(content.plate.parent[0], 'main__content--right-module', rightModal[0], rightModalList[0], DISHES_SRC);
modalEvent(content.cutleries.first.parent[0], 'main__content--left-module', leftModal[0], leftModal[0], CUTLERY_SRC);
modalEvent(content.cutleries.second.parent[0], 'main__content--right-module', rightModal[0], rightModal[0], CUTLERY_SRC);
modalEvent(content.snacks.first.parent[0], 'main__content--left-module', leftModal[0], leftModalList[0], SNACKS_SRC);
modalEvent(content.snacks.second.parent[0], 'main__content--left-module', leftModal[0], leftModalList[0], SNACKS_SRC);
modalEvent(content.snacks.first.parent[0], 'main__content--left-module', leftModal[0], leftModalList[0], SNACKS_SRC);



