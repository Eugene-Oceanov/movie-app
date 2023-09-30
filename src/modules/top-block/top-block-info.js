const funcs = require("../funcs.js");
const API = require("../API.js");
const IMDBlogo = require("../../assets/img/imdb-logo.png");
const kinopoiskLogo = require("../../assets/img/kinopoisk-logo.png");

module.exports = {
  topBlockMovieInfo: function (item, node) {
    funcs.getData(API.byIDurl(item.filmId), API.key)
      .then(data => {
        node.innerHTML = `<div class="top-block-content__img">
                            <img src="${data.posterUrl}" alt="poster" class="top-block__img">
                          </div>
                          <div class="top-block-content__info">
                            <h1 class="top-block-content__info--title">${data.nameRu} (${data.year})</h1>
                            ${data.slogan ? `<h3 class="top-block-content__info--slogan">${data.slogan}</h3>` : ""}

                            <p class="top-block-content__genres">${item.genres.map(item => ` ${item.genre}`)}</p>

                            <p class="top-block-content__description">${data.description}</p>
                            
                            <div class="top-block-content__info--rating-wrapper">
                              ${!data.ratingImdb ? "" : `<div class="top-block-content__info--rating">
                                <div class="top-block-content__info--rating--color-border ${funcs.ratingColor(data.ratingImdb)}">
                                    <p>${data.ratingImdb}</p>
                                </div>
                                <img src="${IMDBlogo}" alt="imdb-logo" style="margin-top: calc(var(--index) * .6)">
                              </div>`}
                              ${!data.ratingKinopoisk ? "" : `<div class="top-block-content__info--rating">
                                  <div class="top-block-content__info--rating--color-border ${funcs.ratingColor(data.ratingKinopoisk)}">
                                      <p>${data.ratingKinopoisk}</p>
                                  </div>
                                  <img src="${kinopoiskLogo}" alt="kinopoisk-logo">
                              </div>`}
                            </div>


                          </div>`
      })
  }
}