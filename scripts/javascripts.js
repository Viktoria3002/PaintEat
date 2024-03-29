import { DISHES_SRC, SNACKS_SRC, CUTLERY_SRC, CLASS_NAMES } from './constants.js';
let openParant = false;
let plate = document.getElementsByClassName('main__content--dish');
const cutleries = {
    first: document.getElementsByClassName('main__content--imgKnife'),
    second: document.getElementsByClassName('main__content--imgFork'),
};
const snacks = {
    first: document.getElementsByClassName('main__content--snackHight-img'),
    second: document.getElementsByClassName('main__content--imgSnackMiddle-img'),
    third: document.getElementsByClassName('main__content--snackLower-img'),
};

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
        const dish = createElement(modalList, className, dishSrc, imgsSrcList.type)
        dish.addEventListener('click', () => onOpenAndCloseModal(parant, dishSrc))
    })
}

const createElement = (parant, className, src, type) => {
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

modalEvent(plate[0], 'main__content--right-module', rightModal[0], rightModalList[0], DISHES_SRC);
modalEvent(cutleries.second[0], 'main__content--right-module', rightModal[0], rightModalList[0], CUTLERY_SRC);
modalEvent(cutleries.first[0], 'main__content--left-module', leftModal[0], leftModalList[0], CUTLERY_SRC);
modalEvent(snacks.first[0], 'main__content--left-module', leftModal[0], leftModalList[0], SNACKS_SRC);
modalEvent(snacks.second[0], 'main__content--left-module', leftModal[0], leftModalList[0], SNACKS_SRC);
modalEvent(snacks.third[0], 'main__content--left-module', leftModal[0], leftModalList[0], SNACKS_SRC);



