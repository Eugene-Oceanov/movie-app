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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/index.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/index.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Regular.ttf */ \"./src/assets/fonts/Lato-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n    font-family: 'Lato_reg';\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 16px;\r\n    line-height: 1.35em;\r\n}\r\n\r\n:root {\r\n    --index: calc(1vh + 1vw);\r\n    --white: #e9e9e9;\r\n    --black: #1a1a1a;\r\n}\r\n\r\n/* reset start */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background: var(--black);\r\n    font-family: 'Lato_reg', sans-serif;\r\n    font-size: 18px;\r\n    color: var(--white);\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\nbutton {\r\n    padding: calc(var(--index) / 2) calc(var(--index) * 3);\r\n    background: none;\r\n    border: 2px solid var(--white);\r\n    color: var(--white);\r\n    outline: none;\r\n    transition: .3s ease;\r\n    cursor: pointer;\r\n    font-weight: 700;\r\n}\r\n\r\nbutton:hover {\r\n    background: var(--white);\r\n    color: var(--black);\r\n}\r\n\r\nbutton:active {\r\n    box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n#app {\r\n    position: relative;\r\n}\r\n\r\n#content {\r\n    padding: var(--index);\r\n}\r\n\r\n/* reset end */\r\n\r\n/* default start */\r\n.d-flex {\r\n    display: flex;\r\n}\r\n\r\n.jc-space-between {\r\n    justify-content: space-between;\r\n}\r\n\r\n.jc-center {\r\n    justify-content: center;\r\n}\r\n\r\n.ai-center {\r\n    align-items: center;\r\n}\r\n\r\n.rating--green {\r\n    border: 2px solid #01b201;\r\n}\r\n\r\n.rating--orange {\r\n    border: 2px solid #ffb833;\r\n}\r\n\r\n.rating--red {\r\n    border: 2px solid rgb(255, 0, 0);\r\n}\r\n\r\n/* default end */\r\n\r\n/* default modal start */\r\n\r\n.stop-scroll {\r\n    overflow: hidden;\r\n}\r\n\r\n.modal-overlay {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    display: none;\r\n    z-index: 10;\r\n}\r\n\r\n.modal-overlay__visible {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal {\r\n    width: 85vw;\r\n    font-size: calc(var(--index) * .7);\r\n    height: 95vh;\r\n    background: var(--black);\r\n    padding: var(--index);\r\n    overflow: hidden;\r\n    overflow-y: auto;\r\n    cursor: auto;\r\n    border-radius: 15px;\r\n}\r\n\r\n.modal::-webkit-scrollbar {\r\n    width: 7px;\r\n    border-radius: 10px;\r\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.modal::-webkit-scrollbar-thumb {\r\n    background-color: #5b5b5b;\r\n    border-radius: 10px;\r\n    border-radius: 10px;\r\n    box-shadow:\r\n        5px 0 15px rgba(0, 0, 0, 0.6) inset,\r\n        -5px 0 15px rgba(188, 188, 188, 0.6) inset;\r\n    ;\r\n}\r\n\r\n.modal-heading {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.modal-heading__summary {\r\n    width: 30%;\r\n}\r\n\r\n.modal-summary__img {\r\n    width: 100%;\r\n    margin-bottom: var(--index);\r\n}\r\n\r\n.modal-summary__rating {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.modal-rating {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.modal-rating p {\r\n    font-size: calc(var(--index) * 1.5);\r\n    font-weight: 900;\r\n}\r\n\r\n.modal-rating img {\r\n    width: calc(var(--index) * 2.5);\r\n}\r\n\r\n.modal-rating__color-border {\r\n    width: calc(var(--index) * 3.7);\r\n    height: calc(var(--index) * 3.7);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-width: 6px;\r\n    border-radius: 50%;\r\n    margin-bottom: calc(var(--index) * .5);\r\n}\r\n\r\n.modal-heading__info {\r\n    width: 33%;\r\n}\r\n\r\n.modal-heading__info p {\r\n    width: 100%;\r\n\r\n    padding-bottom: calc(var(--index) * .2);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid #fff;\r\n    margin-bottom: calc(var(--index) * 1.5);\r\n}\r\n\r\n.modal-heading__info p span {\r\n    display: inline-block;\r\n    word-wrap: wrap;\r\n    text-align: right;\r\n}\r\n\r\n.modal-info__title {\r\n    font-size: 2.7em;\r\n    word-wrap: break-word;\r\n    font-weight: 100;\r\n    margin-bottom: calc(var(--index) * 3);\r\n}\r\n\r\n.modal-info__slogan {\r\n    font-size: 1.1em;\r\n    font-style: italic;\r\n    text-decoration: underline;\r\n    border-bottom: none !important;\r\n    text-align: flex-end;\r\n}\r\n\r\n.modal-info__ageMPAA span:last-child {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.modal-info__link {\r\n    text-decoration: underline;\r\n    right: 0;\r\n}\r\n\r\n.modal-info__sinopsis {\r\n    margin-top: var(--index);\r\n    border: none !important;\r\n    text-align: justify;\r\n}\r\n\r\n.modal-info__sinopsis span {\r\n    display: contents !important;\r\n}\r\n\r\n.modal-heading__staff {\r\n    width: 33%;\r\n    overflow-y: auto;\r\n    height: 100vh;\r\n}\r\n\r\n.modal-heading__staff::-webkit-scrollbar {\r\n    width: 7px;\r\n    border-radius: 10px;\r\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.modal-heading__staff::-webkit-scrollbar-thumb {\r\n    background-color: #5b5b5b;\r\n    border-radius: 10px;\r\n    border-radius: 10px;\r\n    box-shadow:\r\n        5px 0 15px rgba(0, 0, 0, 0.6) inset,\r\n        -5px 0 15px rgba(188, 188, 188, 0.6) inset;\r\n    ;\r\n}\r\n\r\n.modal-staff__item {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: calc(var(--index) * .3);\r\n    background: #555;\r\n}\r\n\r\n.modal-staff__item+.modal-staff__item {\r\n    margin-top: calc(var(--index) * .5);\r\n}\r\n\r\n.modal-staff__item img {\r\n    height: calc(var(--index) * 6);\r\n    margin-right: var(--index);\r\n}\r\n\r\n.modal-staff__item--text p:first-child {\r\n    font-size: var(--index);\r\n    text-decoration: underline;\r\n    margin-bottom: var(--index);\r\n}\r\n\r\n/* default modal end */\r\n\r\n/* default slider start */\r\n\r\n.slider {\r\n    padding: var(--index) 0;\r\n    overflow-x: auto;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.slider::-webkit-scrollbar {\r\n    height: 10px;\r\n    border-radius: 10px;\r\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.slider::-webkit-scrollbar-thumb {\r\n    background-color: #4b4b4b;\r\n    border-radius: 10px;\r\n    box-shadow:\r\n        0 5px 15px rgba(0, 0, 0, 0.6) inset,\r\n        0 -5px 15px rgba(188, 188, 188, 0.6) inset;\r\n    ;\r\n}\r\n\r\n.slider-item {\r\n    position: relative;\r\n    height: fit-content;\r\n    overflow: hidden;\r\n    width: 15.5%;\r\n    flex: 0 0 auto;\r\n    border-radius: 15px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.slider-item+.slider-item {\r\n    margin-left: var(--index);\r\n}\r\n\r\n.slider-item__overlay {\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n    z-index: 1;\r\n    background: linear-gradient(rgba(0, 0, 0, 0) 40%, var(--black) 90%);\r\n    transition: .2s ease;\r\n}\r\n\r\n.slider-item:hover .slider-item__overlay {\r\n    top: 0;\r\n}\r\n\r\n.slider-item img {\r\n    width: 100%;\r\n}\r\n\r\n.slider-item__movie-title {\r\n    color: var(--white);\r\n    font-weight: 400;\r\n}\r\n\r\n.slider-item__movie-genre {\r\n    font-size: 12px;\r\n    color: rgb(255, 216, 125);\r\n}\r\n\r\n.slider-item__rating {\r\n    position: absolute;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    top: 10px;\r\n    right: 10px;\r\n    font-size: 10px;\r\n    z-index: 2;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n\r\n.slider__button {\r\n    position: absolute;\r\n    padding: 0;\r\n    width: var(--index);\r\n    height: 100%;\r\n    border: none;\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.slider__button:hover {\r\n    background: rgba(40, 40, 40, 0.5);\r\n}\r\n\r\n.slider__button-to-left {\r\n    top: 0;\r\n    left: 0;\r\n    transform: translate(-100%);\r\n}\r\n\r\n.slider__button-to-right {\r\n    top: 0;\r\n    right: 0;\r\n    transform: translate(100%);\r\n}\r\n\r\n/* default slider end */\r\n\r\n/* header start */\r\n#header {\r\n    padding: var(--index);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.logo {\r\n    font-size: 54px;\r\n    line-height: 54px;\r\n    font-weight: 900;\r\n    cursor: pointer;\r\n    margin-left: calc(var(--index) + 54px);\r\n}\r\n\r\n.header__search {\r\n    padding: calc(var(--index) / 3);\r\n    font-size: 16px;\r\n    border: none;\r\n    outline: none;\r\n    background: var(--black);\r\n    color: #fff;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n\r\n/* header end */\r\n\r\n/* menu start */\r\n.open-menu__btn {\r\n    position: fixed;\r\n    left: var(--index);\r\n    top: var(--index);\r\n    width: 54px;\r\n    height: 54px;\r\n    border-radius: 500px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: rgba(255, 255, 255, 0.3);\r\n    z-index: 100;\r\n    cursor: pointer;\r\n}\r\n\r\n.burger-base {\r\n    position: relative;\r\n}\r\n\r\n.burger-base,\r\n.burger-base::before,\r\n.burger-base::after {\r\n    width: 35px;\r\n    height: 4px;\r\n    background: #fff;\r\n    border-radius: 3px;\r\n    transition: .3s ease;\r\n}\r\n\r\n.burger-base::before,\r\n.burger-base::after {\r\n    content: \"\";\r\n    position: absolute;\r\n}\r\n\r\n.burger-base::before {\r\n    top: -250%;\r\n}\r\n\r\n.burger-base::after {\r\n    bottom: -250%;\r\n}\r\n\r\n/* rating */`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://movie-app/./src/assets/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://movie-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://movie-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://movie-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/css/index.css":
/*!**********************************!*\
  !*** ./src/assets/css/index.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://movie-app/./src/assets/css/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://movie-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://movie-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://movie-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://movie-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://movie-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://movie-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/index.css */ \"./src/assets/css/index.css\");\n/* harmony import */ var _modules_API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/API.js */ \"./src/modules/API.js\");\n/* harmony import */ var _modules_API_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_API_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_funcs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/funcs.js */ \"./src/modules/funcs.js\");\n/* harmony import */ var _modules_funcs_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_funcs_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n;\r\n\r\n\r\n\r\nconst user = {\r\n    favorite: [],\r\n    viewed: [],\r\n    wannaSee: [],\r\n}\r\n\r\nconst Slider = __webpack_require__(/*! ./modules/slider.js */ \"./src/modules/slider.js\");\r\nconst pop100slider = document.querySelector(\".popular-slider\");\r\nconst top250slider = document.querySelector(\".top-250-slider\");\r\n\r\n\r\nfunction getPop100slider() {\r\n    _modules_funcs_js__WEBPACK_IMPORTED_MODULE_2___default().getData((_modules_API_js__WEBPACK_IMPORTED_MODULE_1___default().pop100url), (_modules_API_js__WEBPACK_IMPORTED_MODULE_1___default().key))\r\n        .then(data => {\r\n            Slider.getSlider(data.films, pop100slider);\r\n        })\r\n        .catch(error => console.log(error));\r\n}\r\n\r\nfunction getTop250slider() {\r\n    _modules_funcs_js__WEBPACK_IMPORTED_MODULE_2___default().getData((_modules_API_js__WEBPACK_IMPORTED_MODULE_1___default().top250url), (_modules_API_js__WEBPACK_IMPORTED_MODULE_1___default().key))\r\n        .then(data => {\r\n            Slider.getSlider(data.films, top250slider);\r\n        })\r\n        .catch(error => console.log(error));\r\n}\r\n\r\ngetPop100slider();\r\ngetTop250slider();\n\n//# sourceURL=webpack://movie-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = {\r\n\r\n    key: \"0671348c-75fc-4bb2-b78f-d1547ea03eb9\",\r\n\r\n    byIDurl: function (id) { return `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}` },\r\n\r\n    pop100url: \"https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1\",\r\n\r\n    top250url: \"https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1\",\r\n\r\n    awaiFilmsUrl: \"https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1\",\r\n\r\n    searchFilmUrl: \"https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=1\",\r\n\r\n    actorsUrl: function (id) { return `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}` },\r\n\r\n    similarFilmsUrl: function (id) { return `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars` },\r\n\r\n    sequelsUrl: function (id) { return `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/sequels_and_prequels` },\r\n\r\n    reviewsUrl: function (id, page) { return `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/reviews?page=${page}&order=DATE_DESC` },\r\n\r\n}\n\n//# sourceURL=webpack://movie-app/./src/modules/API.js?");

/***/ }),

/***/ "./src/modules/funcs.js":
/*!******************************!*\
  !*** ./src/modules/funcs.js ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = {\r\n\r\n    helloWorld: function (hello) {\r\n        console.log(hello);\r\n    },\r\n\r\n    getData: async function (url, key) {\r\n        let response = await fetch(url, {\r\n            method: \"GET\",\r\n            headers: {\r\n                \"X-API-KEY\": key,\r\n                'Content-Type': 'application/json',\r\n            }\r\n        });\r\n        let data = await response.json();\r\n        return data;\r\n    },\r\n\r\n    ratingColor: function (value) {\r\n        if (parseInt(value) >= 7 || parseInt(value) >= 70) return \"rating--green\";\r\n        else if (parseInt(value) >= 4 || parseInt(value) >= 40) return \"rating--orange\";\r\n        else return \"rating--red\";\r\n    },\r\n\r\n    reductionTitle: function (str) {\r\n        return str.slice(0, 35) + \"...\";\r\n    },\r\n\r\n    reductionGenres: function (arr) {\r\n        let genres = \"\";\r\n        for (let i = 0; i < 3; i++) {\r\n            genres += arr[i].genre;\r\n            if (i != 2) genres += \", \";\r\n        }\r\n        return genres;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://movie-app/./src/modules/funcs.js?");

/***/ }),

/***/ "./src/modules/modal/modal-layout.js":
/*!*******************************************!*\
  !*** ./src/modules/modal/modal-layout.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const funcs = __webpack_require__(/*! ../funcs.js */ \"./src/modules/funcs.js\");\r\nconst IMDBlogo = __webpack_require__(/*! ../../assets/img/imdb-logo.png */ \"./src/assets/img/imdb-logo.png\");\r\nconst kinopoiskLogo = __webpack_require__(/*! ../../assets/img/kinopoisk-logo.png */ \"./src/assets/img/kinopoisk-logo.png\");\r\nconst staffList = __webpack_require__(/*! ./modal-staff-list.js */ \"./src/modules/modal/modal-staff-list.js\")\r\n\r\nfunction modalSummaryLayout(item) {\r\n    const summary = document.createElement(\"DIV\");\r\n    summary.classList.add(\"modal-heading__summary\");\r\n    summary.innerHTML = `<img class=\"modal-summary__img\" src=\"${item.posterUrl}\" alt=\"poster-img\">\r\n                        <div class=\"modal-summary__rating\">\r\n                            ${!item.ratingImdb ? \"\" : `<div class=\"modal-rating\">\r\n                                                            <div class=\"modal-rating__color-border ${funcs.ratingColor(item.ratingImdb)}\">\r\n                                                                <p>${item.ratingImdb}</p>\r\n                                                            </div>\r\n                                                            <img src=\"${IMDBlogo}\" alt=\"imdb-logo\" style=\"margin-top: calc(var(--index) * .6)\">\r\n                                                        </div>`}\r\n                            ${!item.ratingKinopoisk ? \"\" : `<div class=\"modal-rating\">\r\n                                                            <div class=\"modal-rating__color-border ${funcs.ratingColor(item.ratingKinopoisk)}\">\r\n                                                                <p>${item.ratingKinopoisk}</p>\r\n                                                            </div>\r\n                                                            <img src=\"${kinopoiskLogo}\" alt=\"kinopoisk-logo\">\r\n                                                        </div>`}\r\n                        </div>`;\r\n    return summary;\r\n}\r\n\r\nfunction modalInfoLayout(item) {\r\n    const info = document.createElement(\"DIV\");\r\n    info.classList.add(\"modal-heading__info\");\r\n    info.innerHTML = `<h1 class=\"modal-info__title\">${item.nameRu}</h1>\r\n                        ${item.slogan ? `<p class=\"modal-info__slogan\">«${item.slogan}»</p>` : \"\"}\r\n                        <p class=\"modal-info__genres\"><span>Жанры:</span><span>${item.genres.map(item => ` ${item.genre}`)}</span></p>\r\n                        <p class=\"modal-info__year\"><span>Год выхода:</span><span>${item.year}</span></p>\r\n                        <p class=\"modal-info__country\"><span>Страна:</span><span>${item.countries.map(item => ` ${item.country}`)}</span></p>\r\n                        ${item.ratingAgeLimits != null ? `<p class=\"modal-info__age\"><span>Возрастной рейтинг:</span><span>${parseInt(item.ratingAgeLimits.replace(/\\D/g, \"\"))}+</span></p>` : \"\"}\r\n                        ${item.ratingMpaa != null ? `<p class=\"modal-info__ageMPAA\"><span>Возрастной рейтинг (MPAA):</span><span>${item.ratingMpaa}</span></p>` : \"\"}\r\n                        ${item.filmLength != null ? `<p class=\"modal-info__durarion\"><span>Длительность:</span><span>${item.filmLength} мин.</span></p>` : \"\"}\r\n                        <a href=\"${item.webUrl}\" class=\"modal-info__link\" target=\"_blank\">Перейти на Kinopoisk.ru</a>\r\n                        <p class=\"modal-info__sinopsis\"><span>Описание:</span><br>${item.description}</p>`;\r\n    return info;\r\n}\r\n\r\nmodule.exports = {\r\n    modalHeading: function (item) {\r\n        const modalHeading = document.createElement(\"DIV\");\r\n        modalHeading.classList.add(\"modal-heading\");\r\n        modalHeading.append(modalSummaryLayout(item));\r\n        modalHeading.append(modalInfoLayout(item));\r\n        modalHeading.append(staffList.staffList(item));\r\n        return modalHeading;\r\n    }\r\n}\r\n\r\n/*\r\ncompleted: false\r\ncountries: (4) [{…}, {…}, {…}, {…}]\r\ncoverUrl: null\r\ndescription: \"Питер Квилл никак не может смириться с потерей Гаморы и теперь вместе со Стражами Галактики вынужден отправиться на очередную миссию по защите Вселенной.\"\r\neditorAnnotation: null\r\nendYear: null\r\nfilmLength: 150\r\ngenres: (4) [{…}, {…}, {…}, {…}]\r\nhas3D: false\r\nhasImax: false\r\nimdbId: \"tt10954600\"\r\nisTicketsAvailable: false\r\nkinopoiskId: 1044280\r\nlastSync: \"2023-06-17T22:05:15.055367\"\r\nlogoUrl: null\r\nnameEn: null\r\nnameOriginal: \"Guardians of the Galaxy Vol. 3\"\r\nnameRu: \"Стражи Галактики. Часть 3\"\r\nposterUrl: \"https://kinopoiskapiunofficial.tech/images/posters/kp/1044280.jpg\"\r\nposterUrlPreview: \"https://kinopoiskapiunofficial.tech/images/posters/kp_small/1044280.jpg\"\r\nproductionStatus: null\r\nratingAgeLimits: null\r\nratingAwait: 98\r\nratingAwaitCount: 55793\r\nratingFilmCritics: null\r\nratingFilmCriticsVoteCount: 0\r\nratingGoodReview: null\r\nratingGoodReviewVoteCount: 0\r\nratingImdb: 8.2\r\nratingImdbVoteCount: 169933\r\nratingKinopoisk: 8.4\r\nratingKinopoiskVoteCount: 70030\r\nratingMpaa: \"pg13\"\r\nratingRfCritics: 100\r\nratingRfCriticsVoteCount: 3\r\nreviewsCount: 58\r\nserial: false\r\nshortDescription: null\r\nshortFilm: false\r\nslogan: \"It's time to face the music.\"\r\nstartYear: null\r\ntype: \"FILM\"\r\nwebUrl: \"https://www.kinopoisk.ru/film/1044280/\"\r\nyear: 2023\r\n*/\n\n//# sourceURL=webpack://movie-app/./src/modules/modal/modal-layout.js?");

/***/ }),

/***/ "./src/modules/modal/modal-staff-list.js":
/*!***********************************************!*\
  !*** ./src/modules/modal/modal-staff-list.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const funcs = __webpack_require__(/*! ../funcs.js */ \"./src/modules/funcs.js\");\r\nconst API = __webpack_require__(/*! ../API.js */ \"./src/modules/API.js\");\r\n\r\nfunction staffCardLayout(item) {\r\n    const actorCard = document.createElement(\"DIV\");\r\n    actorCard.classList.add(\"modal-staff__item\");\r\n    actorCard.innerHTML = `<img src=\"${item.posterUrl} alt=\"${item.nameEn}\">\r\n                            <div class=\"modal-staff__item--text\">\r\n                                ${item.nameRu ? `<p>${item.nameRu}</p>` : `<p>${item.nameEn}</p>`}\r\n                                ${item.description ? `<p>${item.description}</p>` : \"\"}\r\n                            </div>`;\r\n    return actorCard;\r\n}\r\n\r\nmodule.exports = {\r\n    staffList: function (item) {\r\n        const staffList = document.createElement(\"DIV\");\r\n        funcs.getData(API.actorsUrl(item.kinopoiskId), API.key)\r\n            .then(data => {\r\n                staffList.classList.add(\"modal-heading__staff\");\r\n                data.forEach(item => {\r\n                    if (item.professionKey === \"ACTOR\") staffList.append(staffCardLayout(item));\r\n                })\r\n            })\r\n        return staffList;\r\n    }\r\n}\r\n\r\n/*\r\ndescription:\"J. Robert Oppenheimer\"\r\nnameEn:\"Cillian Murphy\"\r\nnameRu:\"Киллиан Мерфи\"\r\nposterUrl:\"https://kinopoiskapiunofficial.tech/images/actor_posters/kp/5005.jpg\"\r\nprofessionKey:\"ACTOR\"\r\nprofessionText:\"Актеры\"\r\nstaffId:5005\r\nconsole\r\n*/\n\n//# sourceURL=webpack://movie-app/./src/modules/modal/modal-staff-list.js?");

/***/ }),

/***/ "./src/modules/modal/modal.js":
/*!************************************!*\
  !*** ./src/modules/modal/modal.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getData } = __webpack_require__(/*! ../funcs.js */ \"./src/modules/funcs.js\");\r\nconst API = __webpack_require__(/*! ../API.js */ \"./src/modules/API.js\");\r\nconst modalLayout = __webpack_require__(/*! ./modal-layout.js */ \"./src/modules/modal/modal-layout.js\")\r\n\r\nfunction openModal(id) {\r\n    const modalOverlay = document.querySelector(\".modal-overlay\");\r\n    modalOverlay.classList.add(\"modal-overlay__visible\");\r\n\r\n    modalOverlay.onclick = e => {\r\n        if (e.target === modalOverlay) closeModal(e.target);\r\n    }\r\n\r\n    const url = API.byIDurl(id);\r\n    getData(url, API.key)\r\n        .then(data => modalOverlay.append(modal(data, id)))\r\n        .catch(error => console.log(error))\r\n}\r\n\r\nfunction modal(item, id) {\r\n    const modal = document.createElement(\"DIV\");\r\n    modal.classList.add(\"modal\");\r\n    modal.append(modalLayout.modalHeading(item, id));\r\n    return modal;\r\n}\r\n\r\nfunction closeModal(node) {\r\n    node.classList.remove(\"modal-overlay__visible\");\r\n    node.innerHTML = \"\";\r\n}\r\n\r\nmodule.exports = { openModal }\n\n//# sourceURL=webpack://movie-app/./src/modules/modal/modal.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const funcs = __webpack_require__(/*! ./funcs.js */ \"./src/modules/funcs.js\");\r\nconst { openModal } = __webpack_require__(/*! ./modal/modal.js */ \"./src/modules/modal/modal.js\");\r\n\r\nfunction getSlider(arr, node) {\r\n    arr.forEach((item) => {\r\n        node.append(sliderLayout(item));\r\n    })\r\n}\r\n\r\nfunction sliderLayout(item) {\r\n    let sliderItem = document.createElement(\"DIV\");\r\n    sliderItem.classList.add(\"slider-item\");\r\n    sliderItem.innerHTML = `\r\n                                <img src=\"${item.posterUrlPreview}\" alt=\"${item.nameEn}=preview\">\r\n                                <div class=\"slider-item__overlay\">\r\n                                <h3 class=\"slider-item__movie-title\">${item.nameRu.length > 35 ? funcs.reductionTitle(item.nameRu) : item.nameRu} (${item.year})</h3>\r\n                                <p class=\"slider-item__movie-genre\">${item.genres.length > 3 ? funcs.reductionGenres(item.genres) : item.genres.map((genre) => ` ${genre.genre}`)}</p></div>\r\n                                ${item.rating ? `<div class=\"slider-item__rating ${funcs.ratingColor(item.rating)}\">${item.rating}</div>` : \"\"}`;\r\n    sliderItem.onclick = () => openModal(item.filmId);\r\n    return sliderItem;\r\n}\r\n\r\nmodule.exports = {\r\n    getSlider,\r\n}\n\n//# sourceURL=webpack://movie-app/./src/modules/slider.js?");

/***/ }),

/***/ "./src/assets/fonts/Lato-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Lato-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"Lato-Regular.ttf\";\n\n//# sourceURL=webpack://movie-app/./src/assets/fonts/Lato-Regular.ttf?");

/***/ }),

/***/ "./src/assets/img/imdb-logo.png":
/*!**************************************!*\
  !*** ./src/assets/img/imdb-logo.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"imdb-logo.png\";\n\n//# sourceURL=webpack://movie-app/./src/assets/img/imdb-logo.png?");

/***/ }),

/***/ "./src/assets/img/kinopoisk-logo.png":
/*!*******************************************!*\
  !*** ./src/assets/img/kinopoisk-logo.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"kinopoisk-logo.png\";\n\n//# sourceURL=webpack://movie-app/./src/assets/img/kinopoisk-logo.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"mainScript": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;