const { topBlockMovieInfo } = require("./top-block-info.js")

function topBlock(arr, node) {
  const topBlockSlider = document.createElement("DIV");
  topBlockSlider.classList.add("top-block-slider");

  const topBlockContent = document.createElement("DIV");
  topBlockContent.classList.add("top-block-content");

  topBlockMovieInfo(arr[0], topBlockContent);

  for (let i = 0; i < 10; i++) {
    const topBlockSliderItem = document.createElement("DIV");
    topBlockSliderItem.classList.add("top-block-slider__item");
    topBlockSliderItem.innerHTML = `<img src="${arr[i].posterUrlPreview}" alt="${arr[i].nameEn}">`;



    topBlockSliderItem.addEventListener("click", () => {
      topBlockContent.innerHTML = "";
      topBlockMovieInfo(arr[i], topBlockContent)
    });
    topBlockSlider.append(topBlockSliderItem);

  }
  node.append(topBlockSlider);
  node.append(topBlockContent);
}

module.exports = { topBlock }

/*
{ overlay
  "pagesCount": 7,
  "films": [
    {
      "filmId": 263531,
      "nameRu": "Мстители",
      "nameEn": "The Avengers",
      "year": "2012",
      "filmLength": "137",
      "countries": [
        {
          "country": "США"
        }
      ],
      "genres": [
        {
          "genre": "фантастика"
        }
      ],
      "rating": 7.9,
      "ratingVoteCount": 284245,
      "posterUrl": "http://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg",
      "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg"
    }
  ]
}
*/