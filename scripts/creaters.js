import { CLASS_NAMES } from './constants.js';

export const createLiElement = (parant, className, src, type) => {
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

export const createImgElement = (parant, className, src, type) => {
    let img = document.createElement("img");
    img.setAttribute('class', className);
    img.setAttribute('src',  src);
    parant.classList.add('pulsating-element')

    if (type === "GENERATE") {
        parant.classList.remove('pulsating-element')
    }
    parant.appendChild(img);
}