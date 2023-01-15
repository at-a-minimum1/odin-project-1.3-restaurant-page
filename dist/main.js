/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navigation */ \"./src/modules/navigation.js\");\n// import aboutPage from \"./modules/about\";\n\n\nfunction component() {\n\tconst content = document.getElementById(\"content\");\n\n\tcontent.append((0,_modules_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\t// content.append(aboutPage());\n\treturn content;\n}\n\ndocument.body.append(component());\n\n\n//# sourceURL=webpack://odin-project-1.3-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ aboutPage)\n/* harmony export */ });\nfunction aboutPage() {\n\treturn `\n\t\t<h1>My Restaurant</h1>\n\t\t<img src=\"restaurant.jpg\" alt=\"A picture of a busy restaurant\" />\n\t\t<style>\n\t\t\timg { width: 95vw;\n\t\t\t}\n\t\t</style>\n\t\t<p>My restaurant is the best in town! We offer a wide variety of delicious dishes, a welcoming atmosphere, and friendly service. Come visit us and experience the best dining experience around</p>\n\t`;\n}\n\n\n//# sourceURL=webpack://odin-project-1.3-restaurant-page/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n\treturn `\n\t\t<h1>Contact Page</h1>\n\t`;\n}\n\n\n//# sourceURL=webpack://odin-project-1.3-restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n\treturn `\n\t\t<h1>Menu Page</h1>\n\t`;\n}\n\n\n//# sourceURL=webpack://odin-project-1.3-restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/navigation.js":
/*!***********************************!*\
  !*** ./src/modules/navigation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navigation)\n/* harmony export */ });\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/modules/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/modules/contact.js\");\n\n\n\n\nfunction navigation() {\n\tconst content = document.getElementById(\"content\");\n\n\tconst nav_bar = document.createElement(\"nav\");\n\tnav_bar.id = \"navigation\";\n\n\tconst about_tab = document.createElement(\"h2\");\n\tconst menu_tab = document.createElement(\"h2\");\n\tconst contact_tab = document.createElement(\"h2\");\n\n\tconst pageWrapper = document.createElement(\"div\");\n\tpageWrapper.innerHTML = \"This is a placeholder\";\n\tpageWrapper.id = \"pageWrap\";\n\n\tabout_tab.innerHTML = \"About\";\n\tmenu_tab.innerHTML = \"Menu\";\n\tcontact_tab.innerHTML = \"Contact\";\n\n\tabout_tab.addEventListener(\"click\", () => switchPage((0,_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()));\n\tmenu_tab.addEventListener(\"click\", () => switchPage((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()));\n\tcontact_tab.addEventListener(\"click\", () => switchPage((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()));\n\n\tfunction switchPage(page) {\n\t\tif (pageWrapper.innerHTML != \"\") {\n\t\t\tpageWrapper.innerHTML = \"\";\n\t\t}\n\t\tpageWrapper.insertAdjacentHTML(\"beforeend\", page);\n\t}\n\tnav_bar.insertAdjacentElement(\"afterend\", pageWrapper);\n\n\tnav_bar.append(about_tab, menu_tab, contact_tab);\n\tcontent.append(nav_bar, pageWrapper);\n}\n\n\n//# sourceURL=webpack://odin-project-1.3-restaurant-page/./src/modules/navigation.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;