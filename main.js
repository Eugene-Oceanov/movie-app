const bodyNode = document.querySelector("body");
const moviesNode = document.querySelector(".movies");
const popular100url = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const top250url = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1";
const searchUrl = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";
const filmUrl = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";
const key = "0671348c-75fc-4bb2-b78f-d1547ea03eb9";

getMovieList(popular100url);

async function getMovieList(url) {
    let json = await fetch(url, {
        method: "GET",
        headers: {
            'X-API-KEY': key,
            'Content-Type': 'application/json'
        }
    })
    let data = await json.json();
    renderMovieListItem(data.films);
}

const search = document.querySelector(".header-search");
const input = document.querySelector(".header-search__input");
async function getSearch() {
    let searchJson = await fetch(`${searchUrl}${input.value}`, {
        method: "GET",
        headers: {
            'X-API-KEY': key,
            'Content-Type': 'application/json'
        }
    })
    let searchData = await searchJson.json();
    renderMovieListItem(searchData.films);
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
            ${item.rating != null ? `<p class="movie-rating movie-rating__${ratingColor(item.rating)}">${item.rating}</p>` : `0`}`;
        moviesNode.appendChild(movie);
        movie.onclick = () => openModal(item.filmId);
    })
}

function ratingColor(rating) {
    if (rating >= 7 || parseInt(rating) > 70) return "green";
    else if (rating >= 4 || parseInt(rating) > 40) return "orange";
    else return "red";
}

const modalNode = document.querySelector(".modal-block");
async function openModal(id) {
    let filmJson = await fetch(`${filmUrl}${id}`, {
        method: "GET",
        headers: {
            'X-API-KEY': key,
            'Content-Type': 'application/json'
        }
    });
    let filmData = await filmJson.json();
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
                                    <p class="modal-cover__info-slogan">${isNull(filmData.slogan)}</p>
                                    <p class="modal-cover_info-genre">Жанр: ${filmData.genres.map(item => `<span> ${item.genre}</span>`)}</p>
                                    <p class="modal-cover_info-rating">Рейтинг Кинопоиска: <span class="modal-rating--${modalRating(filmData.ratingKinopoisk)}">${isNull(filmData.ratingKinopoisk)}</span></p>
                                    <p class="modal-cover_info-rating">Рейтинг IMDb: <span class="modal-rating--${modalRating(filmData.ratingImdb)}">${isNull(filmData.ratingImdb)}</span></p>
                                    <p class="modal-cover_info-durarion">Длительность: ${isNull(filmData.filmLength)} мин.</p>
                                </div>
                            </div>
                            <p>Описание:</p>
                            <p class="modal-sinopsis">${isNull(filmData.description)}</p>`;
    modalNode.appendChild(modal);

    const closeModalBtn = document.querySelectorAll(".modal__close-button");
    closeModalBtn.forEach(item => {
        item.onclick = () => {
            closeModal(modal);
        }
    })

    window.onclick = (e) => {
        if (e.target === modalNode) closeModal(modal);
    }
}

function modalRating(rating) {
    if (rating >= 7) return "green";
    else if (rating >= 4) return "orange";
    else return "red";
}

function closeModal(modal) {
    modal.remove();
    modalNode.classList.remove("modal-block--show");
}

function isNull(value) {
    if (value == null || value == "" || value == undefined) return "Отсутствует";
    else return value;
}