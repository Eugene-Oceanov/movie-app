// Головной файл, который собирает страницу из нескольких компонентов. Подключаются следующие компоненты:
// Верхний блок с 10 наиболее популярными новинками
// Несколько "каруселей" со 100 самыми популярными новинками и топ 250 кинопоиска
// Пока все. Не придумал структуру главной страницы еще 

"use strict"

import "./assets/css/index.css";
import API from "./modules/API.js";
import Funcs from "./modules/funcs.js";

const user = {
    favorite: [],
    viewed: [],
    wannaSee: [],
}

const topBlock = require("./modules/top-block/top-block.js")
const Slider = require("./modules/slider.js");

const topBlockNode = document.querySelector("#top-block");
const pop100slider = document.querySelector(".popular-slider");
const top250slider = document.querySelector(".top-250-slider");

function getTopBlock() {
    Funcs.getData(API.pop100url, API.key)
        .then(data => {
            console.log(data)
            topBlock.topBlock(data.films, topBlockNode);
        })
        .catch(error => console.error(error));
}

function getPop100slider() {
    Funcs.getData(API.pop100url, API.key)
        .then(data => {
            Slider.getSlider(data.films, pop100slider);
        })
        .catch(error => console.error(error));
}

function getTop250slider() {
    Funcs.getData(API.top250url, API.key)
        .then(data => {
            Slider.getSlider(data.films, top250slider);
        })
        .catch(error => console.error(error));
}

getTopBlock();
getPop100slider();
getTop250slider();