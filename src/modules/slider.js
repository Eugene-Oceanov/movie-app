// Компонент стандартной "карусели". Пока что это просто блоки с overflow: auto, но впоследствии будет полноценный слайдер. А может и нет. Не знаю еще

const funcs = require("./funcs.js");
const { openModal } = require("./modal/modal.js");

function getSlider(arr, node) {
    arr.forEach((item) => {
        node.append(sliderLayout(item));
    })
}

function sliderLayout(item) {
    let sliderItem = document.createElement("DIV");
    sliderItem.classList.add("slider-item");
    sliderItem.innerHTML = `
                                <img src="${item.posterUrlPreview}" alt="${item.nameEn}=preview">
                                <div class="slider-item__overlay">
                                <h3 class="slider-item__movie-title">${item.nameRu.length > 35 ? funcs.reductionTitle(item.nameRu) : item.nameRu} (${item.year})</h3>
                                <p class="slider-item__movie-genre">${item.genres.length > 3 ? funcs.reductionGenres(item.genres) : item.genres.map((genre) => ` ${genre.genre}`)}</p></div>
                                ${item.rating ? `<div class="slider-item__rating ${funcs.ratingColor(item.rating)}">${item.rating}</div>` : ""}`;
    sliderItem.onclick = () => openModal(item.filmId);
    return sliderItem;
}

module.exports = {
    getSlider,
}