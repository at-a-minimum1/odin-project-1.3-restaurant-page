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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ aboutPage)\n/* harmony export */ });\nfunction aboutPage() {\n\tconst content = document.getElementById(\"content\");\n\n\t// const element = document.createElement(\"div\");\n\tconst restaurantHeader = document.createElement(\"h1\");\n\tconst image = document.createElement(\"img\");\n\tconst about_wrapper = document.createElement(\"div\");\n\tconst about_content = document.createElement(\"p\");\n\n\t// Classlists\n\trestaurantHeader.classList.add(\"primary_clr\", \"nav_bar\");\n\tabout_content.classList.add(\"about_content\");\n\tabout_wrapper.classList.add(\"about_wrapper\", \"secondary_clr\");\n\n\timage.src = \"restaurant.jpg\";\n\timage.alt = \"A picture of a busy restaurant\";\n\trestaurantHeader.innerHTML = \"My Restaurant\";\n\tabout_content.innerHTML =\n\t\t\"My restaurant is the best in town! We offer a wide variety of delicious dishes, a welcoming atmosphere, and friendly service. Come visit us and experience the best dining experience around.\";\n\n\tabout_wrapper.append(about_content);\n\timage.style.width = \"95vw\";\n\n\tcontent.append(restaurantHeader, image, about_wrapper);\n\n\treturn content;\n}\n\n\n//# sourceURL=webpack://odin-project-1.3-restaurant-page/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n\tconst message = document.createElement(\"h1\");\n\tmessage.innerHTML = \"Contact Page\";\n\tconst content = document.getElementById(\"pageWrap\");\n\n\tcontent.append(message);\n\treturn content;\n}\n\n\n//# sourceURL=webpack://odin-project-1.3-restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n\tconst message = document.createElement(\"h1\");\n\tmessage.innerHTML = \"Menu Page\";\n\n\tconst content = document.getElementById(\"content\");\n\tcontent.append(message);\n\n\treturn content;\n}\n\n\n//# sourceURL=webpack://odin-project-1.3-restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/navigation.js":
/*!***********************************!*\
  !*** ./src/modules/navigation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navigation)\n/* harmony export */ });\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/modules/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/modules/contact.js\");\n\n\n\n\nfunction navigation() {\n\tconst content = document.getElementById(\"content\");\n\tconst nav_bar = document.createElement(\"nav\");\n\n\tconst about_tab = document.createElement(\"h2\");\n\tconst menu_tab = document.createElement(\"h2\");\n\tconst contact_tab = document.createElement(\"h2\");\n\n\tconst pageWrapper = document.createElement(\"div\");\n\tpageWrapper.id = \"pageWrap\";\n\n\tabout_tab.innerHTML = \"About\";\n\tmenu_tab.innerHTML = \"Menu\";\n\tcontact_tab.innerHTML = \"Contact\";\n\n\tabout_tab.addEventListener(\"click\", () => switchPage((0,_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()));\n\tmenu_tab.addEventListener(\"click\", () => switchPage((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()));\n\tcontact_tab.addEventListener(\"click\", () => switchPage((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()));\n\n\tfunction switchPage(page) {\n\t\tif (pageWrapper.innerHTML != \"\") {\n\t\t\tpageWrapper.innerHTML = \"\";\n\t\t}\n\t\tpageWrapper.append(page);\n\t}\n\n\tnav_bar.append(about_tab, menu_tab, contact_tab, pageWrapper);\n\tcontent.append(nav_bar);\n}\n\n\n//# sourceURL=webpack://odin-project-1.3-restaurant-page/./src/modules/navigation.js?");

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