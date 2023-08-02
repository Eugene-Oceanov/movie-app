const funcs = require("../funcs.js");
const IMDBlogo = require("../../assets/img/imdb-logo.png");
const kinopoiskLogo = require("../../assets/img/kinopoisk-logo.png");
const staffList = require("./modal-staff-list.js")

function modalSummaryLayout(item) {
    const summary = document.createElement("DIV");
    summary.classList.add("modal-heading__summary");
    summary.innerHTML = `<img class="modal-summary__img" src="${item.posterUrl}" alt="poster-img">
                        <div class="modal-summary__rating">
                            ${!item.ratingImdb ? "" : `<div class="modal-rating">
                                                            <div class="modal-rating__color-border ${funcs.ratingColor(item.ratingImdb)}">
                                                                <p>${item.ratingImdb}</p>
                                                            </div>
                                                            <img src="${IMDBlogo}" alt="imdb-logo" style="margin-top: calc(var(--index) * .6)">
                                                        </div>`}
                            ${!item.ratingKinopoisk ? "" : `<div class="modal-rating">
                                                            <div class="modal-rating__color-border ${funcs.ratingColor(item.ratingKinopoisk)}">
                                                                <p>${item.ratingKinopoisk}</p>
                                                            </div>
                                                            <img src="${kinopoiskLogo}" alt="kinopoisk-logo">
                                                        </div>`}
                        </div>`;
    return summary;
}

function modalInfoLayout(item) {
    const info = document.createElement("DIV");
    info.classList.add("modal-heading__info");
    info.innerHTML = `<h1 class="modal-info__title">${item.nameRu}</h1>
                        ${item.slogan ? `<p class="modal-info__slogan">«${item.slogan}»</p>` : ""}
                        <p class="modal-info__genres"><span>Жанры:</span><span>${item.genres.map(item => ` ${item.genre}`)}</span></p>
                        <p class="modal-info__year"><span>Год выхода:</span><span>${item.year}</span></p>
                        <p class="modal-info__country"><span>Страна:</span><span>${item.countries.map(item => ` ${item.country}`)}</span></p>
                        ${item.ratingAgeLimits != null ? `<p class="modal-info__age"><span>Возрастной рейтинг:</span><span>${parseInt(item.ratingAgeLimits.replace(/\D/g, ""))}+</span></p>` : ""}
                        ${item.ratingMpaa != null ? `<p class="modal-info__ageMPAA"><span>Возрастной рейтинг (MPAA):</span><span>${item.ratingMpaa}</span></p>` : ""}
                        ${item.filmLength != null ? `<p class="modal-info__durarion"><span>Длительность:</span><span>${item.filmLength} мин.</span></p>` : ""}
                        <a href="${item.webUrl}" class="modal-info__link" target="_blank">Перейти на Kinopoisk.ru</a>
                        <p class="modal-info__sinopsis"><span>Описание:</span><br>${item.description}</p>`;
    return info;
}

module.exports = {
    modalHeading: function (item) {
        const modalHeading = document.createElement("DIV");
        modalHeading.classList.add("modal-heading");
        modalHeading.append(modalSummaryLayout(item));
        modalHeading.append(modalInfoLayout(item));
        modalHeading.append(staffList.staffList(item));
        return modalHeading;
    }
}

/*
completed: false
countries: (4) [{…}, {…}, {…}, {…}]
coverUrl: null
description: "Питер Квилл никак не может смириться с потерей Гаморы и теперь вместе со Стражами Галактики вынужден отправиться на очередную миссию по защите Вселенной."
editorAnnotation: null
endYear: null
filmLength: 150
genres: (4) [{…}, {…}, {…}, {…}]
has3D: false
hasImax: false
imdbId: "tt10954600"
isTicketsAvailable: false
kinopoiskId: 1044280
lastSync: "2023-06-17T22:05:15.055367"
logoUrl: null
nameEn: null
nameOriginal: "Guardians of the Galaxy Vol. 3"
nameRu: "Стражи Галактики. Часть 3"
posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/1044280.jpg"
posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1044280.jpg"
productionStatus: null
ratingAgeLimits: null
ratingAwait: 98
ratingAwaitCount: 55793
ratingFilmCritics: null
ratingFilmCriticsVoteCount: 0
ratingGoodReview: null
ratingGoodReviewVoteCount: 0
ratingImdb: 8.2
ratingImdbVoteCount: 169933
ratingKinopoisk: 8.4
ratingKinopoiskVoteCount: 70030
ratingMpaa: "pg13"
ratingRfCritics: 100
ratingRfCriticsVoteCount: 3
reviewsCount: 58
serial: false
shortDescription: null
shortFilm: false
slogan: "It's time to face the music."
startYear: null
type: "FILM"
webUrl: "https://www.kinopoisk.ru/film/1044280/"
year: 2023
*/