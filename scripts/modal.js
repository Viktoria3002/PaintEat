import { createLiElement } from './creaters.js';  

let openParant = null;

export const modalEvent = (parant, className, modal, itemList, srcList) => {
    parant.addEventListener('click', () => {
        console.log(openParant, parant); 
        if (modal.classList.contains('hidden') && !(openParant === parant)) {
            modal.classList.remove('hidden');
        }

        if (openParant === parant) {
            deleteImages(parant, className, itemList);
            openParant = null;
        } else {
            deleteImages(parant, className, itemList);
            addImages(parant, className, itemList, srcList);
            openParant = parant;
        }
        
    })
}

const deleteImages = (parant, className, modalList) => {
    let listImages = document.querySelectorAll(`.${className}`);

    listImages.forEach((img) => {   
        img.childNodes[0].removeEventListener('click', () => onOpenAndCloseModalEvent(parant, img.childNodes[0].src))
        modalList.removeChild(modalList.lastElementChild);
    })
}

const addImages = (parant, className, modalList, imgsSrcList) => {
    imgsSrcList.imgs.forEach((dishSrc) => {
        const dish = createLiElement(modalList, className, dishSrc, imgsSrcList.type);
        dish.addEventListener('click', () => onOpenAndCloseModalEvent(parant, dishSrc))
    })
}

const onOpenAndCloseModalEvent = (item, src) => {
    item.childNodes[1].src = src;
}