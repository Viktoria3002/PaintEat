const dishesImgSrcList = [
    "./assets/img/dish/dish_1.svg",
    "./assets/img/dish/dish_2.svg",
    "./assets/img/dish/dish_3.svg",
    "./assets/img/dish/dish_4.svg",
    "./assets/img/dish/dish_5.svg",
    "./assets/img/dish/dish_6.svg",
    "./assets/img/dish/dish_7.svg",
    "./assets/img/dish/dish_8.svg"
]

const forkImgSrcList = [
    "./assets/img/cutlery/fork/black_Fork.svg",
    "./assets/img/cutlery/fork/white_Fork.svg",
    "./assets/img/cutlery/fork/orange_Fork.svg",
    "./assets/img/cutlery/fork/yellow_Fork.svg"
]

const knifeImgSrcList = [
    "./assets/img/cutlery/knife/black_Knife.svg",
    "./assets/img/cutlery/knife/white_Knife.svg",
    "./assets/img/cutlery/knife/orange_Knife.svg",
    "./assets/img/cutlery/knife/yellow_Knife.svg"
]

const spoonImgSrcList = [
    "./assets/img/cutlery/spoon/black_Spoon.svg",
    "./assets/img/cutlery/spoon/orange_Spoon.svg",
    "./assets/img/cutlery/spoon/white_Spoon.svg",
    "./assets/img/cutlery/spoon/yellow_Spoon.svg"
]

const fruitsImgSrcList = [
    "./assets/img/snacks/fruits/fruit_1.svg",
    "./assets/img/snacks/fruits/fruit_2.svg",
    "./assets/img/snacks/fruits/fruit_3.svg",
    "./assets/img/snacks/fruits/fruit_4.svg",
    "./assets/img/snacks/fruits/fruit_5.svg",
    "./assets/img/snacks/fruits/fruit_6.svg",
]

const leafsImgSrcList = [
    "./assets/img/snacks/leafs/leaf_1.svg",
    "./assets/img/snacks/leafs/leaf_2.svg",
    "./assets/img/snacks/leafs/leaf_3.svg",
    "./assets/img/snacks/leafs/leaf_4.svg",
    "./assets/img/snacks/leafs/leaf_5.svg",
    "./assets/img/snacks/leafs/leaf_6.svg",
]

export const CLASS_NAMES = {
    DISHES: 'main__content--dishes-btn',
    SNACK: 'main__content--snack-btn',
    CUTLERY: 'main__content--cutlery-btn',
}


export const DISHES_SRC = {
    imgs: [...dishesImgSrcList],
    type: 'DISHES',
};
export const SNACKS_SRC = {
    imgs: [...fruitsImgSrcList, ...leafsImgSrcList],
    type: 'SNACK',
};
export const CUTLERY_SRC = {
    imgs: [...forkImgSrcList, ...knifeImgSrcList, ...spoonImgSrcList],
    type: 'CUTLERY',
};

export const INITIAN_CONTENT = {
    plate: {
        childSrc: './assets/img/plate/Default_Plate.svg',
        parent: null,
    },
    cutleries: {
        first: {
            childSrc: './assets/img/cutlery/fork/Default_Fork.svg',
            parent: null,
        },
        second:  {
            childSrc: './assets/img/cutlery/knife/Default_Knife.svg',
            parent: null,
        },
    },
    snacks: {
        first: {
            childSrc: './assets/img/snacks/fruits/Default_fruit.svg',
            parent: null,
        },
        second: {
            childSrc: './assets/img/snacks/leafs/Default_leaf.svg',
            parent: null,
        },
        third: {
            childSrc: './assets/img/snacks/fruits/Default_fruit.svg',
            parent: null,
        },
    },
}