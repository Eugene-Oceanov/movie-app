const { openModal } = require("./modal/modal.js")

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
                                <h3 class="slider-item__movie-title">${item.nameRu.length > 35 ? reductionTitle(item.nameRu) : item.nameRu} (${item.year})</h3>
                                <p class="slider-item__movie-genre">${item.genres.length > 3 ? reductionGenres(item.genres) : item.genres.map((genre) => ` ${genre.genre}`)}</p></div>
                            ${ratingColoring(item.rating)}`;
    sliderItem.onclick = () => openModal(item.filmId);
    return sliderItem;
}

function ratingColoring(value) {
    if (value === null || value === undefined) {
        return;
    } else {
        if (parseInt(value) >= 7 || parseInt(value) >= 70) return `<div class="slider-item__rating rating--green">${value}</div>`
        else if (parseInt(value) >= 4 || parseInt(value) >= 40) return `<div class="slider-item__rating rating--orange">${value}</div>`
        else return `<div class="slider-item__rating rating--red">${value}</div>`
    }
}

function reductionTitle(str) {
    let reducTitle = str.slice(0, 35);
    reducTitle += "...";
    return reducTitle;
}

function reductionGenres(arr) {
    let genres = "";
    for (let i = 0; i < 3; i++) {
        genres += arr[i].genre;
        if (i != 2) genres += ", "
    }
    return genres
}

module.exports = {
    getSlider,
}