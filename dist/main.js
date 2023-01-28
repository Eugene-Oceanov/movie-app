/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\nconst { sliderInit } = __webpack_require__(/*! ./module/func.js */ \"./src/module/func.js\");\r\nconst func = __webpack_require__(/*! ./module/func.js */ \"./src/module/func.js\");\r\n\r\nconst bodyNode = document.querySelector(\"body\");\r\nconst moviesNode = document.querySelector(\".movies\");\r\nconst pagination = document.querySelector(\".pagination\");\r\nlet counter = 1;\r\nconst topPopUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=';\r\nconst searchUrl = \"https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=\";\r\nconst filmUrl = \"https://kinopoiskapiunofficial.tech/api/v2.2/films/\";\r\nconst actorsUrl = \"https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=\"\r\nconst key = \"0671348c-75fc-4bb2-b78f-d1547ea03eb9\";\r\n\r\ngetMovieList(topPopUrl, counter);\r\n\r\nasync function getMovieList(url, counter) {\r\n    let data = await func.getData(`${url}${counter}`, key);\r\n    renderMovieListItem(data.films);\r\n    getPagination(data);\r\n}\r\n\r\nconst search = document.querySelector(\".header-search\");\r\nconst input = document.querySelector(\".header-search__input\");\r\nasync function getSearch() {\r\n    let searchData = await func.getData(`${searchUrl}${input.value}`, key);\r\n    console.log(searchData)\r\n    renderMovieListItem(searchData.films);\r\n    getPagination(searchData);\r\n}\r\nsearch.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    getSearch();\r\n    input.value = \"\";\r\n})\r\n\r\nfunction renderMovieListItem(data) {\r\n    moviesNode.innerHTML = \"\";\r\n    data.forEach(item => {\r\n        const movie = document.createElement(\"DIV\");\r\n        movie.classList.add(\"movie\");\r\n        movie.innerHTML = `<div class=\"movie-poster\">\r\n                <img src=\"${item.posterUrl}\" alt=\"movie\">\r\n                <div class=\"overlay\"></div>\r\n            </div>\r\n            <p class=\"movie-title\">${item.nameRu ? item.nameRu : item.nameEn} (${item.year})</p>\r\n            <p class=\"movie-genre\">${item.genres.map((genre) => ` ${genre.genre}`)}</p>\r\n            ${item.rating != null ? `<p class=\"movie-rating movie-rating__${func.ratingColor(item.rating)}\">${item.rating}</p>` : `0`}`;\r\n        moviesNode.appendChild(movie);\r\n        movie.onclick = () => openModal(item.filmId);\r\n    })\r\n}\r\n\r\nconst modalNode = document.querySelector(\".modal-block\");\r\n\r\nasync function openModal(id) {\r\n    let filmData = await func.getData(`${filmUrl}${id}`, key);\r\n    let actorsData = await func.getData(`${actorsUrl}${id}`, key)\r\n    modalNode.classList.add(\"modal-block--show\");\r\n    const modal = document.createElement(\"DIV\");\r\n    modal.classList.add(\"modal\");\r\n    setTimeout(() => modal.classList.add(\"modal-animate\"), 0);\r\n    modal.innerHTML = `<img class=\"modal__close-button\" src=\"img/close.png\" alt=\"close\">\r\n                            <div class=\"modal-cover\">\r\n                                <img class=\"modal-cover__IMG\" src=\"${filmData.posterUrl}\" alt=\"poster\">\r\n                                <div class=\"modal-cover__info\">\r\n                                    <h1 class=\"modal-cover__info-title\">${filmData.nameRu ? filmData.nameRu : filmData.nameOriginal}</h1>\r\n                                    <h2 class=\"modal-cover__info-year\">${filmData.year}</h2>\r\n                                    <p class=\"modal-cover__info-country\">Страна производства: ${filmData.countries.map(item => `<span> ${item.country}</span>`)}</p>\r\n                                    <p class=\"modal-cover__info-slogan\">${func.isNull(filmData.slogan)}</p>\r\n                                    <p class=\"modal-cover_info-genre\">Жанр: ${filmData.genres.map(item => `<span> ${item.genre}</span>`)}</p>\r\n                                    <p class=\"modal-cover_info-rating\">Рейтинг Кинопоиска: <span class=\"modal-rating--${func.modalRating(filmData.ratingKinopoisk)}\">${func.isNull(filmData.ratingKinopoisk)}</span></p>\r\n                                    <p class=\"modal-cover_info-rating\">Рейтинг IMDb: <span class=\"modal-rating--${func.modalRating(filmData.ratingImdb)}\">${func.isNull(filmData.ratingImdb)}</span></p>\r\n                                    <p class=\"modal-cover_info-durarion\">Длительность: ${func.isNull(filmData.filmLength)} мин.</p>\r\n                                </div>\r\n                            </div>\r\n                            <h2>Описание:</h2><p class=\"modal-sinopsis\">${func.isNull(filmData.description)}</p>\r\n                            <div class=\"actors-block\"><h2 class=\"actors-title\">Актеры:</h2>\r\n                                <div class=\"slider-line actors-slider-line\">${func.renderActors(actorsData)}\r\n                                    <img src=\"./img/left-arrow.png\" alt=\"l\" class=\"actors-to-left slider-btn to-left-btn\">\r\n                                    <img src=\"./img/right-arrow.png\" alt=\"r\" class=\"actors-to-right slider-btn to-right-btn\">\r\n                                </div>\r\n                            </div>`;\r\n    modalNode.appendChild(modal);\r\n    const actorCards = document.querySelectorAll(\".actor-card\");\r\n    const actorsSlider = document.querySelector(\".actors-slider-line\");\r\n    let actorsCounter = 5;\r\n    func.sliderInit(actorsSlider, actorCards, actorsCounter);\r\n\r\n    document.body.classList.add(\"stop-scroll\");\r\n    const closeModalBtn = document.querySelectorAll(\".modal__close-button\");\r\n    closeModalBtn.forEach(item => {\r\n        item.onclick = () => {\r\n            func.closeModal(modalNode, modal);\r\n            document.body.classList.remove(\"stop-scroll\");\r\n        }\r\n    })\r\n    window.onclick = (e) => {\r\n        if (e.target === modalNode) {\r\n            func.closeModal(modalNode, modal);\r\n            document.body.classList.remove(\"stop-scroll\");\r\n        }\r\n    }\r\n    func.stopScroll(modalNode);\r\n}\r\n\r\nfunction getPagination(data) {\r\n    pagination.innerHTML = \"\";\r\n    if (data.pagesCount > 0) {\r\n        for (let i = 1; i <= data.pagesCount; i++) {\r\n            let pagItem = document.createElement(\"A\");\r\n            pagItem.textContent = i;\r\n            pagItem.setAttribute(\"href\", \"#\");\r\n            pagItem.classList.add(\"pagination-item\");\r\n            pagination.append(pagItem);\r\n            pagItem.onclick = () => {\r\n                moviesNode.innerHTML = \"\";\r\n                pagination.innerHTML = \"\";\r\n                getMovieList(topPopUrl, i);\r\n            }\r\n        }\r\n    } else pagination.innerHTML = \"\";\r\n}\r\n\r\n\n\n//# sourceURL=webpack://movie-app/./src/main.js?");

/***/ }),

/***/ "./src/module/func.js":
/*!****************************!*\
  !*** ./src/module/func.js ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = {\r\n    getData: async (url, apiKey) => {\r\n        let json = await fetch(url, {\r\n            method: \"GET\",\r\n            headers: {\r\n                'X-API-KEY': apiKey,\r\n                'Content-Type': 'application/json'\r\n            }\r\n        })\r\n        let data = await json.json();\r\n        return data;\r\n    },\r\n\r\n    closeModal: (node, modal) => {\r\n        modal.remove();\r\n        node.classList.remove(\"modal-block--show\");\r\n    },\r\n\r\n    ratingColor: (value) => {\r\n        if (value >= 7 || parseInt(value) > 70) return \"green\";\r\n        else if (value >= 4 || parseInt(value) > 40) return \"orange\";\r\n        else return \"red\";\r\n    },\r\n\r\n    isNull: (value) => {\r\n        if (value == null || value == \"\" || value == undefined) return \"Отсутствует\";\r\n        else return value;\r\n    },\r\n\r\n    modalRating: (value) => {\r\n        if (value >= 7) return \"green\";\r\n        else if (value >= 4) return \"orange\";\r\n        else return \"red\";\r\n    },\r\n\r\n    stopScroll: (node) => node.classList.add(\"stop-scroll\"),\r\n\r\n    renderActors: (data) => {\r\n        let actorsHtml = \"\";\r\n        data.forEach(item => {\r\n            if (item.professionKey == \"ACTOR\" && item.nameRu) {\r\n                actorsHtml += `<div class=\"actor-card\">\r\n                                    <img src=\"${item.posterUrl}\" alt=\"poster\">\r\n                                    <div class=\"actor-description\">\r\n                                        <h3 class=\"actor-name\">${item.nameRu}</h3>\r\n                                        <p class=\"actor-role\">${item.description}</p>\r\n                                    </div>\r\n                                </div>`;\r\n            }\r\n        })\r\n        return actorsHtml;\r\n    },\r\n\r\n    // sliderInit: (parentNode, childNodes, counter) => {\r\n    //     let width = childNodes[0].innerWidth;\r\n    //     parentNode.style.width = `${width * childNodes.length}px`;\r\n    //     this.rollSlider(parentNode, counter, width);\r\n    // },\r\n\r\n    // rollSlider: (parentNode, counter, width) => {\r\n    //     parentNode.style.width = `translate(-${counter * width}px)`;\r\n    // },\r\n\r\n    // activeSlider: (right, left, counter, childNodes, parentNode) => {\r\n    //     right.onclick = () => {\r\n    //         counter++;\r\n    //         if (counter >= childNodes.length) {\r\n    //             counter = 0;\r\n    //         }\r\n    //         rollSlider(parentNode, counter);\r\n    //     }\r\n    //     left.onclick = () => {\r\n    //         counter--;\r\n    //         if (counter < 0) {\r\n    //             counter = childNodes.length - 1;\r\n    //         }\r\n    //         rollSlider(parentNode, counter);\r\n    //     }\r\n    // }\r\n}\n\n//# sourceURL=webpack://movie-app/./src/module/func.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;