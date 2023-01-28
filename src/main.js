"use strict";
const { sliderInit } = require("./module/func.js");
const func = require("./module/func.js");

const bodyNode = document.querySelector("body");
const moviesNode = document.querySelector(".movies");
const pagination = document.querySelector(".pagination");
let counter = 1;
const topPopUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=';
const searchUrl = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";
const filmUrl = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";
const actorsUrl = "https://kinopoiskapiunofficial.tech/api/v1/staff?filmId="
const key = "0671348c-75fc-4bb2-b78f-d1547ea03eb9";

getMovieList(topPopUrl, counter);

async function getMovieList(url, counter) {
    let data = await func.getData(`${url}${counter}`, key);
    renderMovieListItem(data.films);
    getPagination(data);
}

const search = document.querySelector(".header-search");
const input = document.querySelector(".header-search__input");
async function getSearch() {
    let searchData = await func.getData(`${searchUrl}${input.value}`, key);
    console.log(searchData)
    renderMovieListItem(searchData.films);
    getPagination(searchData);
}
search.addEventListener("submit", (e) => {
    e.preventDefault();
    getSearch();
    input.value = "";
})

function renderMovieListItem(data) {
    moviesNode.innerHTML = "";
    data.forEach(item => {
        const movie = document.createElement("DIV");
        movie.classList.add("movie");
        movie.innerHTML = `<div class="movie-poster">
                <img src="${item.posterUrl}" alt="movie">
                <div class="overlay"></div>
            </div>
            <p class="movie-title">${item.nameRu ? item.nameRu : item.nameEn} (${item.year})</p>
            <p class="movie-genre">${item.genres.map((genre) => ` ${genre.genre}`)}</p>
            ${item.rating != null ? `<p class="movie-rating movie-rating__${func.ratingColor(item.rating)}">${item.rating}</p>` : `0`}`;
        moviesNode.appendChild(movie);
        movie.onclick = () => openModal(item.filmId);
    })
}

const modalNode = document.querySelector(".modal-block");

async function openModal(id) {
    let filmData = await func.getData(`${filmUrl}${id}`, key);
    let actorsData = await func.getData(`${actorsUrl}${id}`, key)
    modalNode.classList.add("modal-block--show");
    const modal = document.createElement("DIV");
    modal.classList.add("modal");
    setTimeout(() => modal.classList.add("modal-animate"), 0);
    modal.innerHTML = `<img class="modal__close-button" src="img/close.png" alt="close">
                            <div class="modal-cover">
                                <img class="modal-cover__IMG" src="${filmData.posterUrl}" alt="poster">
                                <div class="modal-cover__info">
                                    <h1 class="modal-cover__info-title">${filmData.nameRu ? filmData.nameRu : filmData.nameOriginal}</h1>
                                    <h2 class="modal-cover__info-year">${filmData.year}</h2>
                                    <p class="modal-cover__info-country">Страна производства: ${filmData.countries.map(item => `<span> ${item.country}</span>`)}</p>
                                    <p class="modal-cover__info-slogan">${func.isNull(filmData.slogan)}</p>
                                    <p class="modal-cover_info-genre">Жанр: ${filmData.genres.map(item => `<span> ${item.genre}</span>`)}</p>
                                    <p class="modal-cover_info-rating">Рейтинг Кинопоиска: <span class="modal-rating--${func.modalRating(filmData.ratingKinopoisk)}">${func.isNull(filmData.ratingKinopoisk)}</span></p>
                                    <p class="modal-cover_info-rating">Рейтинг IMDb: <span class="modal-rating--${func.modalRating(filmData.ratingImdb)}">${func.isNull(filmData.ratingImdb)}</span></p>
                                    <p class="modal-cover_info-durarion">Длительность: ${func.isNull(filmData.filmLength)} мин.</p>
                                </div>
                            </div>
                            <h2>Описание:</h2><p class="modal-sinopsis">${func.isNull(filmData.description)}</p>
                            <h2 class="actors-title">Актеры:</h2>
                            <div class="actors-block">
                                <div class="slider-line actors-slider-line">${func.renderActors(actorsData)}</div>
                                <img src="./img/left-arrow.png" alt="l" class="actors-to-left slider-btn to-left-btn">
                                <img src="./img/right-arrow.png" alt="r" class="actors-to-right slider-btn to-right-btn">
                            </div>`;
    modalNode.appendChild(modal);

    const actorsSlider = document.querySelector(".actors-slider-line");
    const actorsCards = document.querySelectorAll(".actor-card");
    let actorsCounter = 0;
    const actorsSliderToLeft = document.querySelector(".actors-to-left");
    const actorsSliderToRight = document.querySelector(".actors-to-right");
    func.moveSlider(actorsSlider, actorsCards, actorsCounter, actorsSliderToLeft, actorsSliderToRight)


    document.body.classList.add("stop-scroll");
    const closeModalBtn = document.querySelectorAll(".modal__close-button");
    closeModalBtn.forEach(item => {
        item.onclick = () => {
            func.closeModal(modalNode, modal);
            document.body.classList.remove("stop-scroll");
        }
    })
    window.onclick = (e) => {
        if (e.target === modalNode) {
            func.closeModal(modalNode, modal);
            document.body.classList.remove("stop-scroll");
        }
    }
    func.stopScroll(modalNode);
}

function getPagination(data) {
    pagination.innerHTML = "";
    if (data.pagesCount > 0) {
        for (let i = 1; i <= data.pagesCount; i++) {
            let pagItem = document.createElement("A");
            pagItem.textContent = i;
            pagItem.setAttribute("href", "#");
            pagItem.classList.add("pagination-item");
            pagination.append(pagItem);
            pagItem.onclick = () => {
                moviesNode.innerHTML = "";
                pagination.innerHTML = "";
                getMovieList(topPopUrl, i);
            }
        }
    } else pagination.innerHTML = "";
}

