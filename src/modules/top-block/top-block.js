// Модуль сборки верхнего экрана с 10 самыми популярными новинками.

const { topBlockMovieInfo } = require("./top-block-info.js");
let currentItem = null;

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

      if (currentItem) {
        currentItem.style.outline = "";
      }

      topBlockSliderItem.style.outline = "2px solid #fff";
      currentItem = topBlockSliderItem;

      topBlockContent.innerHTML = "";
      topBlockMovieInfo(arr[i], topBlockContent);
    });
    topBlockSlider.append(topBlockSliderItem);

  }

  node.append(topBlockSlider);
  node.append(topBlockContent);
}

module.exports = { topBlock }