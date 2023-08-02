"use strict"

import "./assets/css/index.css";
import API from "./modules/API.js";
import Funcs from "./modules/funcs.js";

const user = {
    favorite: [],
    viewed: [],
    wannaSee: [],
}

const Slider = require("./modules/slider.js");
const pop100slider = document.querySelector(".popular-slider");
const top250slider = document.querySelector(".top-250-slider");


function getPop100slider() {
    Funcs.getData(API.pop100url, API.key)
        .then(data => {
            Slider.getSlider(data.films, pop100slider);
        })
        .catch(error => console.log(error));
}

function getTop250slider() {
    Funcs.getData(API.top250url, API.key)
        .then(data => {
            Slider.getSlider(data.films, top250slider);
        })
        .catch(error => console.log(error));
}

getPop100slider();
getTop250slider();