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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function component() {\n\tconst content = document.getElementById(\"content\");\n\n\t// const element = document.createElement(\"div\");\n\tconst restaurantHeader = document.createElement(\"h1\");\n\tconst image = document.createElement(\"img\");\n\tconst about_wrapper = document.createElement(\"div\");\n\tconst about_content = document.createElement(\"p\");\n\n\t// Classlists\n\trestaurantHeader.classList.add(\"primary_clr\", \"nav_bar\");\n\tabout_content.classList.add(\"about_content\");\n\tabout_wrapper.classList.add(\"about_wrapper\", \"secondary_clr\");\n\n\timage.src = \"restaurant.jpg\";\n\timage.alt = \"A picture of a busy restaurant\";\n\trestaurantHeader.innerHTML = \"My Restaurant\";\n\tabout_content.innerHTML =\n\t\t\"Our restaurant is the best in town! We offer a wide variety of delicious dishes, a welcoming atmosphere, and friendly service. Come visit us and experience the best dining experience around.\";\n\n\tabout_wrapper.append(about_content);\n\timage.style.width = \"95vw\";\n\n\tcontent.append(restaurantHeader, image, about_wrapper);\n\n\t// Lodash, currently included via a script, is required for this line to work\n\t// element.innerHTML = \"Hello World\";\n\n\treturn content;\n}\n\ndocument.body.append(component());\n\n\n//# sourceURL=webpack://odin-project-1.3-restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;