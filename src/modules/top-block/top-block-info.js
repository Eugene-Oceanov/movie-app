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

        // const topBlockImg = document.createElement("DIV");
        // topBlockImg.classList.add("top-block-content__img");
        // topBlockImg.innerHTML = `<img src="${data.posterUrl}" alt="poster" class="top-block__img">`

        // const topBlockText = document.createElement("DIV");
        // topBlockText.classList.add("top-block-content__info");
        // topBlockText.innerHTML = `<h1>${data.nameRu}</h1>`

        // node.append(topBlockImg);
        // node.append(topBlockText)
      })
  }
}

/*
{
  "kinopoiskId": 4536580,
  "kinopoiskHDId": null,
  "imdbId": null,
  "nameRu": "Баба Яга спасает мир",
  "nameEn": null,
  "nameOriginal": null,
  "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4536580.jpg",
  "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4536580.jpg",
  "coverUrl": null,
  "logoUrl": null,
  "reviewsCount": 0,
  "ratingGoodReview": null,
  "ratingGoodReviewVoteCount": 0,
  "ratingKinopoisk": null,
  "ratingKinopoiskVoteCount": 0,
  "ratingImdb": null,
  "ratingImdbVoteCount": 0,
  "ratingFilmCritics": null,
  "ratingFilmCriticsVoteCount": 0,
  "ratingAwait": 98,
  "ratingAwaitCount": 800,
  "ratingRfCritics": null,
  "ratingRfCriticsVoteCount": 0,
  "webUrl": "https://www.kinopoisk.ru/film/4536580/",
  "year": 2023,
  "filmLength": null,
  "slogan": null,
  "description": "Любопытный школьник Сенька каким-то чудом попадает в сказочный древний лес. Он скрыт от людских глаз мощным заклятием Бабы Яги, призванным защитить людей и весь мир от дремлющих там темных сил. В лесу явно творится что-то неладное. Тревожные сигналы возвещают о том, что заклятие больше не действует и пробуждение зловещего волшебства и давно поверженных врагов — это лишь вопрос времени. Чтобы наложить заклятие снова, Яга вынуждена отправиться в современный город на поиск мощнейшего оружия волшебников, дивноцвета. Там ее ожидает встреча с множеством причуд современного мира, а в темном подземелье уже тысячу лет прячется Кощей Бессмертный, жаждущий отмщения, ведь именно Яга помогла одолеть его много веков назад. Сенька попал в сказку, но сможет ли он вырваться обратно, помочь спасти наш мир и на чьей стороне примет бой — добра или зла, всесильного Кощея или хитрой Яги?",
  "shortDescription": null,
  "editorAnnotation": null,
  "isTicketsAvailable": false,
  "productionStatus": null,
  "type": "FILM",
  "ratingMpaa": null,
  "ratingAgeLimits": "age6",
  "countries": [
    {
      "country": "Россия"
    }
  ],
  "genres": [
    {
      "genre": "приключения"
    },
    {
      "genre": "комедия"
    },
    {
      "genre": "семейный"
    }
  ],
  "startYear": null,
  "endYear": null,
  "serial": false,
  "shortFilm": false,
  "completed": false,
  "hasImax": false,
  "has3D": false,
  "lastSync": "2023-07-11T15:19:33.740797"
}
*/