/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --clr-primary-1: hsl(205, 86%, 17%);\r\n  --clr-primary-2: hsl(205, 77%, 27%);\r\n  --clr-primary-3: hsl(205, 72%, 37%);\r\n  --clr-primary-4: hsl(205, 63%, 48%);\r\n  --clr-primary-5: hsl(205, 78%, 60%);\r\n  --clr-primary-6: hsl(205, 89%, 70%);\r\n  --clr-primary-7: hsl(205, 90%, 76%);\r\n  --clr-primary-8: hsl(205, 86%, 81%);\r\n  --clr-primary-9: hsl(205, 90%, 88%);\r\n  --clr-primary-10: hsl(205, 100%, 96%);\r\n  --clr-grey-1: hsl(209, 61%, 16%);\r\n  --clr-grey-2: hsl(211, 39%, 23%);\r\n  --clr-grey-3: hsl(209, 34%, 30%);\r\n  --clr-grey-4: hsl(209, 28%, 39%);\r\n  --clr-grey-5: hsl(210, 22%, 49%);\r\n  --clr-grey-6: hsl(209, 23%, 60%);\r\n  --clr-grey-7: hsl(211, 27%, 70%);\r\n  --clr-grey-8: hsl(210, 31%, 80%);\r\n  --clr-grey-9: hsl(212, 33%, 89%);\r\n  --clr-grey-10: hsl(210, 36%, 96%);\r\n  --clr-white: #fff;\r\n  --clr-red-dark: hsl(360, 67%, 44%);\r\n  --clr-red-light: hsl(360, 71%, 66%);\r\n  --clr-green-dark: hsl(125, 67%, 44%);\r\n  --clr-green-light: hsl(125, 71%, 66%);\r\n  --clr-black: #222;\r\n  --ff-primary: \"Poppins\", sans-serif;\r\n  --transition: all 0.3s linear;\r\n  --spacing: 0.1rem;\r\n  --radius: 0.25rem;\r\n  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\r\n  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\r\n  --max-width: 1170px;\r\n  --fixed-width: 620px;\r\n  --text-color: #d3d3d3;\r\n  --color-black: #272a31;\r\n  --color-orange: #ec5242;\r\n  --light-background-color: #f7f7f9;\r\n  --white-background: #fff;\r\n}\r\n\r\n/*\r\n    Global Styles\r\n    */\r\n\r\n*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: var(--ff-primary);\r\n  background: #e5e6e99f;\r\n  color: var(--clr-grey-1);\r\n  line-height: 1.5;\r\n  font-size: 0.875rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.todo-section {\r\n  background-color: var(--white-background);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  padding: 1.5rem;\r\n  margin: 84px 12px 0 12px;\r\n  width: 50%;\r\n}\r\n\r\n.todo-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.todo-header h1 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 20px;\r\n}\r\n.task-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 12px;\r\n  padding: 0 24px;\r\n}\r\n\r\n.task-form input {\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.2rem;\r\n  font-style: italic;\r\n}\r\n\r\n.task-form button {\r\n  background-color: var(--light-background-color);\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-input {\r\n  border: 1px solid rgb(193, 193, 193);\r\n  outline: none;\r\n}\r\n\r\n#todoList {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  padding-right: 0.5rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n#todoList::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n#todoList li {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 8vh;\r\n}\r\n.todos {\r\n  position: relative;\r\n  height: 50px;\r\n  border-bottom: 1px solid rgb(193, 193, 193);\r\n  padding: 8px 0;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.todo-check {\r\n  width: 5%;\r\n  height: 40%;\r\n  border: 1px solid rgb(23, 145, 7);\r\n  margin: 0;\r\n}\r\n\r\n.todo-desc {\r\n  margin: 0;\r\n  color: #272a31;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  border: 1px solid rgb(193, 193, 193);\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n  font-style: italic;\r\n}\r\n\r\n.fa-ellipsis-vertical {\r\n  font-size: 16px;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 10%;\r\n}\r\n\r\n.todoList {\r\n  width: 100%;\r\n  margin: 12px 24px 0 24px;\r\n}\r\n\r\n.clear-button {\r\n  display: block;\r\n  width: 100%;\r\n  height: 50px;\r\n  background-color: #fff;\r\n  color: rgb(193, 193, 193);\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  box-sizing: content-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.clear-button:hover {\r\n  background-color: rgb(234, 231, 238);\r\n  color: #222;\r\n}\r\n\r\n.clear-border {\r\n  border-style: none;\r\n}\r\n\r\n.active {\r\n  background-color: rgb(212, 209, 206);\r\n  color: white;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  accent-color: rgb(22, 74, 117);\r\n}\r\n\r\n.todo-desc:focus {\r\n  outline: none;\r\n}\r\n\r\n.trash-btn {\r\n  background: transparent;\r\n  border: none;\r\n  display: none;\r\n  width: 10%;\r\n  height: 100%;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n}\r\n\r\n.fa-trash,\r\n.fa-bars {\r\n  font-size: 18px;\r\n  color: rgb(160, 60, 2);\r\n  margin-right: 5px;\r\n}\r\n\r\n.todos:hover .todo-desc {\r\n  background-color: rgb(190, 174, 130);\r\n}\r\n\r\n.todos:hover {\r\n  background-color: rgb(190, 174, 130);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --clr-primary-1: hsl(205, 86%, 17%);\r\n  --clr-primary-2: hsl(205, 77%, 27%);\r\n  --clr-primary-3: hsl(205, 72%, 37%);\r\n  --clr-primary-4: hsl(205, 63%, 48%);\r\n  --clr-primary-5: hsl(205, 78%, 60%);\r\n  --clr-primary-6: hsl(205, 89%, 70%);\r\n  --clr-primary-7: hsl(205, 90%, 76%);\r\n  --clr-primary-8: hsl(205, 86%, 81%);\r\n  --clr-primary-9: hsl(205, 90%, 88%);\r\n  --clr-primary-10: hsl(205, 100%, 96%);\r\n  --clr-grey-1: hsl(209, 61%, 16%);\r\n  --clr-grey-2: hsl(211, 39%, 23%);\r\n  --clr-grey-3: hsl(209, 34%, 30%);\r\n  --clr-grey-4: hsl(209, 28%, 39%);\r\n  --clr-grey-5: hsl(210, 22%, 49%);\r\n  --clr-grey-6: hsl(209, 23%, 60%);\r\n  --clr-grey-7: hsl(211, 27%, 70%);\r\n  --clr-grey-8: hsl(210, 31%, 80%);\r\n  --clr-grey-9: hsl(212, 33%, 89%);\r\n  --clr-grey-10: hsl(210, 36%, 96%);\r\n  --clr-white: #fff;\r\n  --clr-red-dark: hsl(360, 67%, 44%);\r\n  --clr-red-light: hsl(360, 71%, 66%);\r\n  --clr-green-dark: hsl(125, 67%, 44%);\r\n  --clr-green-light: hsl(125, 71%, 66%);\r\n  --clr-black: #222;\r\n  --ff-primary: \"Poppins\", sans-serif;\r\n  --transition: all 0.3s linear;\r\n  --spacing: 0.1rem;\r\n  --radius: 0.25rem;\r\n  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\r\n  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\r\n  --max-width: 1170px;\r\n  --fixed-width: 620px;\r\n  --text-color: #d3d3d3;\r\n  --color-black: #272a31;\r\n  --color-orange: #ec5242;\r\n  --light-background-color: #f7f7f9;\r\n  --white-background: #fff;\r\n}\r\n\r\n/*\r\n    Global Styles\r\n    */\r\n\r\n*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: var(--ff-primary);\r\n  background: #e5e6e99f;\r\n  color: var(--clr-grey-1);\r\n  line-height: 1.5;\r\n  font-size: 0.875rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.todo-section {\r\n  background-color: var(--white-background);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  padding: 1.5rem;\r\n  margin: 84px 12px 0 12px;\r\n  width: 50%;\r\n}\r\n\r\n.todo-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.todo-header h1 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 20px;\r\n}\r\n.task-form {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 12px;\r\n  padding: 0 24px;\r\n}\r\n\r\n.task-form input {\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.2rem;\r\n  font-style: italic;\r\n}\r\n\r\n.task-form button {\r\n  background-color: var(--light-background-color);\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-input {\r\n  border: 1px solid rgb(193, 193, 193);\r\n  outline: none;\r\n}\r\n\r\n#todoList {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  padding-right: 0.5rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n#todoList::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n#todoList li {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 8vh;\r\n}\r\n.todos {\r\n  position: relative;\r\n  height: 50px;\r\n  border-bottom: 1px solid rgb(193, 193, 193);\r\n  padding: 8px 0;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.todo-check {\r\n  width: 5%;\r\n  height: 40%;\r\n  border: 1px solid rgb(23, 145, 7);\r\n  margin: 0;\r\n}\r\n\r\n.todo-desc {\r\n  margin: 0;\r\n  color: #272a31;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  border: 1px solid rgb(193, 193, 193);\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n  font-style: italic;\r\n}\r\n\r\n.fa-ellipsis-vertical {\r\n  font-size: 16px;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 10%;\r\n}\r\n\r\n.todoList {\r\n  width: 100%;\r\n  margin: 12px 24px 0 24px;\r\n}\r\n\r\n.clear-button {\r\n  display: block;\r\n  width: 100%;\r\n  height: 50px;\r\n  background-color: #fff;\r\n  color: rgb(193, 193, 193);\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  box-sizing: content-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.clear-button:hover {\r\n  background-color: rgb(234, 231, 238);\r\n  color: #222;\r\n}\r\n\r\n.clear-border {\r\n  border-style: none;\r\n}\r\n\r\n.active {\r\n  background-color: rgb(212, 209, 206);\r\n  color: white;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  accent-color: rgb(22, 74, 117);\r\n}\r\n\r\n.todo-desc:focus {\r\n  outline: none;\r\n}\r\n\r\n.trash-btn {\r\n  background: transparent;\r\n  border: none;\r\n  display: none;\r\n  width: 10%;\r\n  height: 100%;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n}\r\n\r\n.fa-trash,\r\n.fa-bars {\r\n  font-size: 18px;\r\n  color: rgb(160, 60, 2);\r\n  margin-right: 5px;\r\n}\r\n\r\n.todos:hover .todo-desc {\r\n  background-color: rgb(190, 174, 130);\r\n}\r\n\r\n.todos:hover {\r\n  background-color: rgb(190, 174, 130);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/addTodoTask.js":
/*!************************************!*\
  !*** ./src/modules/addTodoTask.js ***!
  \************************************/
/***/ ((module) => {

function addAnItem(info, todoList) {
  todoList.push(info);
  return todoList;
}

module.exports = addAnItem;

/***/ }),

/***/ "./src/modules/checkToDoList.js":
/*!**************************************!*\
  !*** ./src/modules/checkToDoList.js ***!
  \**************************************/
/***/ ((module) => {

function checkTodo(i, toDoList) {
  toDoList[i].completed = !toDoList[i].completed;
  return toDoList;
}

module.exports = checkTodo;


/***/ }),

/***/ "./src/modules/clearAll.js":
/*!*********************************!*\
  !*** ./src/modules/clearAll.js ***!
  \*********************************/
/***/ ((module) => {

function clearAllCompleted(toDoList) {
  toDoList = toDoList.filter((todo) => todo.completed !== true);
  let i = 0;
  toDoList.forEach((todo) => {
    todo.index = i + 1;
    i += 1;
  });
  return toDoList;
}

module.exports = clearAllCompleted;

/***/ }),

/***/ "./src/modules/displayTask.js":
/*!************************************!*\
  !*** ./src/modules/displayTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addTodoTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodoTask.js */ "./src/modules/addTodoTask.js");
/* harmony import */ var _addTodoTask_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_addTodoTask_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _removeToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeToDo.js */ "./src/modules/removeToDo.js");
/* harmony import */ var _removeToDo_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_removeToDo_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _updateToDo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateToDo.js */ "./src/modules/updateToDo.js");
/* harmony import */ var _updateToDo_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_updateToDo_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _checkToDoList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkToDoList.js */ "./src/modules/checkToDoList.js");
/* harmony import */ var _checkToDoList_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_checkToDoList_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _clearAll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clearAll.js */ "./src/modules/clearAll.js");
/* harmony import */ var _clearAll_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clearAll_js__WEBPACK_IMPORTED_MODULE_4__);






const addInput = document.querySelector('.todo-input');
let todos = localStorage.getItem('toDoList') !== null ? JSON.parse(localStorage.getItem('toDoList')) : [];
let index = todos.length;
const todoDiv = document.querySelector('#todoList');
const clearBtn = document.querySelector('.clear-button');

const render = () => {
  if (todos !== null) {
    todoDiv.innerHTML = '';
    todos.forEach((todo) => {
      const check = todo.completed === true ? 'checked' : '';
      todoDiv.innerHTML += `
        <div class="todos">
          <input type="checkbox" class="todo-check " value="${todo.completed}" ${check}>
          <input type="text" class="todo-desc clear-border ${check}" value="${todo.desc}">
          <i class="fa-solid fa-ellipsis-vertical"></i>
          <button type="button" class="trash-btn"><i class="fa fa-trash"></i></button>
        </div>
      `;
    });
  }

  for (let i = 0; i < todoDiv.querySelectorAll('.todos').length; i += 1) {
    const todoRow = todoDiv.querySelectorAll('.todos')[i];
    // eslint-disable-next-line no-loop-func
    todoRow.querySelector('.todo-check').addEventListener('click', () => {
      const result = _checkToDoList_js__WEBPACK_IMPORTED_MODULE_3___default()(i, todos);
      localStorage.setItem('todos', JSON.stringify(result));
      render();
    });

    todoRow.addEventListener('focusin', () => {
      todoRow.classList.add('active');
      todoRow.querySelector('.todo-desc').classList.add('active');
      todoRow.querySelector('.trash-btn').style.display = 'block';
      todoRow.querySelector('.fa-ellipsis-vertical').style.display = 'none';
    });

    // eslint-disable-next-line no-loop-func
    todoRow.querySelector('.trash-btn').addEventListener('click', () => {
      const updTodo = _removeToDo_js__WEBPACK_IMPORTED_MODULE_1___default()(i, todos);
      for (let a = i; a < updTodo.length; a += 1) {
        updTodo[a].index -= 1;
      }
      index -= 1;
      localStorage.setItem('toDoList', JSON.stringify(updTodo));
      render();
    });

    todoRow.addEventListener('focusout', (e) => {
      const parent = todoRow;
      const leavingParent = !parent.contains(e.relatedTarget);
      if (leavingParent) {
        todoRow.classList.remove('active');
        todoRow.querySelector('.todo-desc').classList.remove('active');
        todoRow.querySelector('.fa-ellipsis-vertical').style.display = 'flex';
        todoRow.querySelector('.trash-btn').style.display = 'none';
      }
    });

    // eslint-disable-next-line no-loop-func
    todoRow.querySelector('.todo-desc').addEventListener('change', (e) => {
      const result = _updateToDo_js__WEBPACK_IMPORTED_MODULE_2___default()(i, todos, e.target.value);
      localStorage.setItem('toDoList', JSON.stringify(result));
    });
  }
};

addInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (addInput.value !== '') {
      const todoVal = addInput.value;
      addInput.value = '';
      index += 1;
      const updTodo = _addTodoTask_js__WEBPACK_IMPORTED_MODULE_0___default()({ index, desc: todoVal, completed: false }, todos);
      localStorage.setItem('toDoList', JSON.stringify(updTodo));
      render();
    }
  }
});

clearBtn.addEventListener('click', () => {
  todos = _clearAll_js__WEBPACK_IMPORTED_MODULE_4___default()(todos);
  index = todos.length;
  localStorage.setItem('toDoList', JSON.stringify(todos));
  render();
});

window.onload = render();

/***/ }),

/***/ "./src/modules/removeToDo.js":
/*!***********************************!*\
  !*** ./src/modules/removeToDo.js ***!
  \***********************************/
/***/ ((module) => {

function deleteAnItem(i, toDoList) {
  // const temp = [...toDoList];
  toDoList.splice(i, 1);

  // if (toDoList === temp) {
  //   throw new Error('Error while deleting an item');
  // }
  return toDoList;
}

module.exports = deleteAnItem;


/***/ }),

/***/ "./src/modules/updateToDo.js":
/*!***********************************!*\
  !*** ./src/modules/updateToDo.js ***!
  \***********************************/
/***/ ((module) => {

function updateTodo(i, toDoList, newDesc) {
  toDoList[i].desc = newDesc;
  return toDoList;
}

module.exports = updateTodo;


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_displayTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayTask.js */ "./src/modules/displayTask.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxpQ0FBaUMsMENBQTBDLDBDQUEwQywwQ0FBMEMsMENBQTBDLDBDQUEwQywwQ0FBMEMsMENBQTBDLDBDQUEwQywwQ0FBMEMsNENBQTRDLHVDQUF1Qyx1Q0FBdUMsdUNBQXVDLHVDQUF1Qyx1Q0FBdUMsdUNBQXVDLHVDQUF1Qyx1Q0FBdUMsdUNBQXVDLHdDQUF3Qyx3QkFBd0IseUNBQXlDLDBDQUEwQywyQ0FBMkMsNENB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QTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nLy4vc3JjL21vZHVsZXMvYWRkVG9kb1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9zcmMvbW9kdWxlcy9jaGVja1RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nLy4vc3JjL21vZHVsZXMvY2xlYXJBbGwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9zcmMvbW9kdWxlcy9kaXNwbGF5VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy8uL3NyYy9tb2R1bGVzL3JlbW92ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3RpbmcvLi9zcmMvbW9kdWxlcy91cGRhdGVUb0RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtdGVzdGluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXRlc3Rpbmcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC10ZXN0aW5nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1jbHItcHJpbWFyeS0xOiBoc2woMjA1LCA4NiUsIDE3JSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTI6IGhzbCgyMDUsIDc3JSwgMjclKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktMzogaHNsKDIwNSwgNzIlLCAzNyUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS00OiBoc2woMjA1LCA2MyUsIDQ4JSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTU6IGhzbCgyMDUsIDc4JSwgNjAlKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktNjogaHNsKDIwNSwgODklLCA3MCUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS03OiBoc2woMjA1LCA5MCUsIDc2JSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTg6IGhzbCgyMDUsIDg2JSwgODElKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktOTogaHNsKDIwNSwgOTAlLCA4OCUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS0xMDogaHNsKDIwNSwgMTAwJSwgOTYlKTtcXHJcXG4gIC0tY2xyLWdyZXktMTogaHNsKDIwOSwgNjElLCAxNiUpO1xcclxcbiAgLS1jbHItZ3JleS0yOiBoc2woMjExLCAzOSUsIDIzJSk7XFxyXFxuICAtLWNsci1ncmV5LTM6IGhzbCgyMDksIDM0JSwgMzAlKTtcXHJcXG4gIC0tY2xyLWdyZXktNDogaHNsKDIwOSwgMjglLCAzOSUpO1xcclxcbiAgLS1jbHItZ3JleS01OiBoc2woMjEwLCAyMiUsIDQ5JSk7XFxyXFxuICAtLWNsci1ncmV5LTY6IGhzbCgyMDksIDIzJSwgNjAlKTtcXHJcXG4gIC0tY2xyLWdyZXktNzogaHNsKDIxMSwgMjclLCA3MCUpO1xcclxcbiAgLS1jbHItZ3JleS04OiBoc2woMjEwLCAzMSUsIDgwJSk7XFxyXFxuICAtLWNsci1ncmV5LTk6IGhzbCgyMTIsIDMzJSwgODklKTtcXHJcXG4gIC0tY2xyLWdyZXktMTA6IGhzbCgyMTAsIDM2JSwgOTYlKTtcXHJcXG4gIC0tY2xyLXdoaXRlOiAjZmZmO1xcclxcbiAgLS1jbHItcmVkLWRhcms6IGhzbCgzNjAsIDY3JSwgNDQlKTtcXHJcXG4gIC0tY2xyLXJlZC1saWdodDogaHNsKDM2MCwgNzElLCA2NiUpO1xcclxcbiAgLS1jbHItZ3JlZW4tZGFyazogaHNsKDEyNSwgNjclLCA0NCUpO1xcclxcbiAgLS1jbHItZ3JlZW4tbGlnaHQ6IGhzbCgxMjUsIDcxJSwgNjYlKTtcXHJcXG4gIC0tY2xyLWJsYWNrOiAjMjIyO1xcclxcbiAgLS1mZi1wcmltYXJ5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAtLXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXHJcXG4gIC0tc3BhY2luZzogMC4xcmVtO1xcclxcbiAgLS1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICAtLWxpZ2h0LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAtLWRhcmstc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIC0tbWF4LXdpZHRoOiAxMTcwcHg7XFxyXFxuICAtLWZpeGVkLXdpZHRoOiA2MjBweDtcXHJcXG4gIC0tdGV4dC1jb2xvcjogI2QzZDNkMztcXHJcXG4gIC0tY29sb3ItYmxhY2s6ICMyNzJhMzE7XFxyXFxuICAtLWNvbG9yLW9yYW5nZTogI2VjNTI0MjtcXHJcXG4gIC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcXHJcXG4gIC0td2hpdGUtYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gICAgR2xvYmFsIFN0eWxlc1xcclxcbiAgICAqL1xcclxcblxcclxcbiosXFxyXFxuOjphZnRlcixcXHJcXG46OmJlZm9yZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZTVlNmU5OWY7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLWdyZXktMSk7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtYmFja2dyb3VuZCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICBtYXJnaW46IDg0cHggMTJweCAwIDEycHg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taGVhZGVyIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuLnRhc2stZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG4gIHBhZGRpbmc6IDAgMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZm9ybSBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWlucHV0IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTMsIDE5MywgMTkzKTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0b2RvTGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9MaXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb0xpc3QgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDh2aDtcXHJcXG59XFxyXFxuLnRvZG9zIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTkzLCAxOTMsIDE5Myk7XFxyXFxuICBwYWRkaW5nOiA4cHggMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jaGVjayB7XFxyXFxuICB3aWR0aDogNSU7XFxyXFxuICBoZWlnaHQ6IDQwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMywgMTQ1LCA3KTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGVzYyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogIzI3MmEzMTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MywgMTkzLCAxOTMpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWVsbGlwc2lzLXZlcnRpY2FsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMTJweCAyNHB4IDAgMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiByZ2IoMTkzLCAxOTMsIDE5Myk7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjMxLCAyMzgpO1xcclxcbiAgY29sb3I6ICMyMjI7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1ib3JkZXIge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIwOSwgMjA2KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBhY2NlbnQtY29sb3I6IHJnYigyMiwgNzQsIDExNyk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRlc2M6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYXNoLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5mYS10cmFzaCxcXHJcXG4uZmEtYmFycyB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBjb2xvcjogcmdiKDE2MCwgNjAsIDIpO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2Rvczpob3ZlciAudG9kby1kZXNjIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE3NCwgMTMwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9zOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE3NCwgMTMwKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1DQUFtQztFQUNuQyxtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLG1DQUFtQztFQUNuQyxtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLG1DQUFtQztFQUNuQyxtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLHFDQUFxQztFQUNyQyxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxpQ0FBaUM7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dXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1jbHItcHJpbWFyeS0xOiBoc2woMjA1LCA4NiUsIDE3JSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTI6IGhzbCgyMDUsIDc3JSwgMjclKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktMzogaHNsKDIwNSwgNzIlLCAzNyUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS00OiBoc2woMjA1LCA2MyUsIDQ4JSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTU6IGhzbCgyMDUsIDc4JSwgNjAlKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktNjogaHNsKDIwNSwgODklLCA3MCUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS03OiBoc2woMjA1LCA5MCUsIDc2JSk7XFxyXFxuICAtLWNsci1wcmltYXJ5LTg6IGhzbCgyMDUsIDg2JSwgODElKTtcXHJcXG4gIC0tY2xyLXByaW1hcnktOTogaHNsKDIwNSwgOTAlLCA4OCUpO1xcclxcbiAgLS1jbHItcHJpbWFyeS0xMDogaHNsKDIwNSwgMTAwJSwgOTYlKTtcXHJcXG4gIC0tY2xyLWdyZXktMTogaHNsKDIwOSwgNjElLCAxNiUpO1xcclxcbiAgLS1jbHItZ3JleS0yOiBoc2woMjExLCAzOSUsIDIzJSk7XFxyXFxuICAtLWNsci1ncmV5LTM6IGhzbCgyMDksIDM0JSwgMzAlKTtcXHJcXG4gIC0tY2xyLWdyZXktNDogaHNsKDIwOSwgMjglLCAzOSUpO1xcclxcbiAgLS1jbHItZ3JleS01OiBoc2woMjEwLCAyMiUsIDQ5JSk7XFxyXFxuICAtLWNsci1ncmV5LTY6IGhzbCgyMDksIDIzJSwgNjAlKTtcXHJcXG4gIC0tY2xyLWdyZXktNzogaHNsKDIxMSwgMjclLCA3MCUpO1xcclxcbiAgLS1jbHItZ3JleS04OiBoc2woMjEwLCAzMSUsIDgwJSk7XFxyXFxuICAtLWNsci1ncmV5LTk6IGhzbCgyMTIsIDMzJSwgODklKTtcXHJcXG4gIC0tY2xyLWdyZXktMTA6IGhzbCgyMTAsIDM2JSwgOTYlKTtcXHJcXG4gIC0tY2xyLXdoaXRlOiAjZmZmO1xcclxcbiAgLS1jbHItcmVkLWRhcms6IGhzbCgzNjAsIDY3JSwgNDQlKTtcXHJcXG4gIC0tY2xyLXJlZC1saWdodDogaHNsKDM2MCwgNzElLCA2NiUpO1xcclxcbiAgLS1jbHItZ3JlZW4tZGFyazogaHNsKDEyNSwgNjclLCA0NCUpO1xcclxcbiAgLS1jbHItZ3JlZW4tbGlnaHQ6IGhzbCgxMjUsIDcxJSwgNjYlKTtcXHJcXG4gIC0tY2xyLWJsYWNrOiAjMjIyO1xcclxcbiAgLS1mZi1wcmltYXJ5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAtLXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXHJcXG4gIC0tc3BhY2luZzogMC4xcmVtO1xcclxcbiAgLS1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICAtLWxpZ2h0LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAtLWRhcmstc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIC0tbWF4LXdpZHRoOiAxMTcwcHg7XFxyXFxuICAtLWZpeGVkLXdpZHRoOiA2MjBweDtcXHJcXG4gIC0tdGV4dC1jb2xvcjogI2QzZDNkMztcXHJcXG4gIC0tY29sb3ItYmxhY2s6ICMyNzJhMzE7XFxyXFxuICAtLWNvbG9yLW9yYW5nZTogI2VjNTI0MjtcXHJcXG4gIC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmOTtcXHJcXG4gIC0td2hpdGUtYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gICAgR2xvYmFsIFN0eWxlc1xcclxcbiAgICAqL1xcclxcblxcclxcbiosXFxyXFxuOjphZnRlcixcXHJcXG46OmJlZm9yZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZTVlNmU5OWY7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLWdyZXktMSk7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtYmFja2dyb3VuZCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICBtYXJnaW46IDg0cHggMTJweCAwIDEycHg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taGVhZGVyIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuLnRhc2stZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG4gIHBhZGRpbmc6IDAgMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZm9ybSBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWlucHV0IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTMsIDE5MywgMTkzKTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0b2RvTGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9MaXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb0xpc3QgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDh2aDtcXHJcXG59XFxyXFxuLnRvZG9zIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTkzLCAxOTMsIDE5Myk7XFxyXFxuICBwYWRkaW5nOiA4cHggMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jaGVjayB7XFxyXFxuICB3aWR0aDogNSU7XFxyXFxuICBoZWlnaHQ6IDQwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMywgMTQ1LCA3KTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGVzYyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogIzI3MmEzMTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MywgMTkzLCAxOTMpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWVsbGlwc2lzLXZlcnRpY2FsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvTGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMTJweCAyNHB4IDAgMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiByZ2IoMTkzLCAxOTMsIDE5Myk7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjMxLCAyMzgpO1xcclxcbiAgY29sb3I6ICMyMjI7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1ib3JkZXIge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIwOSwgMjA2KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBhY2NlbnQtY29sb3I6IHJnYigyMiwgNzQsIDExNyk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRlc2M6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYXNoLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5mYS10cmFzaCxcXHJcXG4uZmEtYmFycyB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBjb2xvcjogcmdiKDE2MCwgNjAsIDIpO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2Rvczpob3ZlciAudG9kby1kZXNjIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE3NCwgMTMwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9zOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE3NCwgMTMwKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gYWRkQW5JdGVtKGluZm8sIHRvZG9MaXN0KSB7XG4gIHRvZG9MaXN0LnB1c2goaW5mbyk7XG4gIHJldHVybiB0b2RvTGlzdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRBbkl0ZW07IiwiZnVuY3Rpb24gY2hlY2tUb2RvKGksIHRvRG9MaXN0KSB7XG4gIHRvRG9MaXN0W2ldLmNvbXBsZXRlZCA9ICF0b0RvTGlzdFtpXS5jb21wbGV0ZWQ7XG4gIHJldHVybiB0b0RvTGlzdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1RvZG87XG4iLCJmdW5jdGlvbiBjbGVhckFsbENvbXBsZXRlZCh0b0RvTGlzdCkge1xuICB0b0RvTGlzdCA9IHRvRG9MaXN0LmZpbHRlcigodG9kbykgPT4gdG9kby5jb21wbGV0ZWQgIT09IHRydWUpO1xuICBsZXQgaSA9IDA7XG4gIHRvRG9MaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICB0b2RvLmluZGV4ID0gaSArIDE7XG4gICAgaSArPSAxO1xuICB9KTtcbiAgcmV0dXJuIHRvRG9MaXN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsZWFyQWxsQ29tcGxldGVkOyIsImltcG9ydCBhZGRUb2RvVGFzayBmcm9tICcuL2FkZFRvZG9UYXNrLmpzJztcbmltcG9ydCByZW1vdmVUb0RvIGZyb20gJy4vcmVtb3ZlVG9Eby5qcyc7XG5pbXBvcnQgdXBkYXRlVG9EbyBmcm9tICcuL3VwZGF0ZVRvRG8uanMnO1xuaW1wb3J0IGNoZWNrVG9Eb0xpc3QgZnJvbSAnLi9jaGVja1RvRG9MaXN0LmpzJztcbmltcG9ydCBjbGVhckFsbCBmcm9tICcuL2NsZWFyQWxsLmpzJztcblxuY29uc3QgYWRkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1pbnB1dCcpO1xubGV0IHRvZG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykgIT09IG51bGwgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKSA6IFtdO1xubGV0IGluZGV4ID0gdG9kb3MubGVuZ3RoO1xuY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvTGlzdCcpO1xuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItYnV0dG9uJyk7XG5cbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgaWYgKHRvZG9zICE9PSBudWxsKSB7XG4gICAgdG9kb0Rpdi5pbm5lckhUTUwgPSAnJztcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjb25zdCBjaGVjayA9IHRvZG8uY29tcGxldGVkID09PSB0cnVlID8gJ2NoZWNrZWQnIDogJyc7XG4gICAgICB0b2RvRGl2LmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2Rvc1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRvZG8tY2hlY2sgXCIgdmFsdWU9XCIke3RvZG8uY29tcGxldGVkfVwiICR7Y2hlY2t9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidG9kby1kZXNjIGNsZWFyLWJvcmRlciAke2NoZWNrfVwiIHZhbHVlPVwiJHt0b2RvLmRlc2N9XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbFwiPjwvaT5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRyYXNoLWJ0blwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9KTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0Rpdi5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb3MnKS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRvZG9Sb3cgPSB0b2RvRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvcycpW2ldO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICB0b2RvUm93LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNoZWNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjaGVja1RvRG9MaXN0KGksIHRvZG9zKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgcmVuZGVyKCk7XG4gICAgfSk7XG5cbiAgICB0b2RvUm93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoKSA9PiB7XG4gICAgICB0b2RvUm93LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgdG9kb1Jvdy5xdWVyeVNlbGVjdG9yKCcudG9kby1kZXNjJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB0b2RvUm93LnF1ZXJ5U2VsZWN0b3IoJy50cmFzaC1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRvZG9Sb3cucXVlcnlTZWxlY3RvcignLmZhLWVsbGlwc2lzLXZlcnRpY2FsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICB0b2RvUm93LnF1ZXJ5U2VsZWN0b3IoJy50cmFzaC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHVwZFRvZG8gPSByZW1vdmVUb0RvKGksIHRvZG9zKTtcbiAgICAgIGZvciAobGV0IGEgPSBpOyBhIDwgdXBkVG9kby5sZW5ndGg7IGEgKz0gMSkge1xuICAgICAgICB1cGRUb2RvW2FdLmluZGV4IC09IDE7XG4gICAgICB9XG4gICAgICBpbmRleCAtPSAxO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodXBkVG9kbykpO1xuICAgICAgcmVuZGVyKCk7XG4gICAgfSk7XG5cbiAgICB0b2RvUm93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRvZG9Sb3c7XG4gICAgICBjb25zdCBsZWF2aW5nUGFyZW50ID0gIXBhcmVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpO1xuICAgICAgaWYgKGxlYXZpbmdQYXJlbnQpIHtcbiAgICAgICAgdG9kb1Jvdy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdG9kb1Jvdy5xdWVyeVNlbGVjdG9yKCcudG9kby1kZXNjJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHRvZG9Sb3cucXVlcnlTZWxlY3RvcignLmZhLWVsbGlwc2lzLXZlcnRpY2FsJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgdG9kb1Jvdy5xdWVyeVNlbGVjdG9yKCcudHJhc2gtYnRuJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICB0b2RvUm93LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRlc2MnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdXBkYXRlVG9EbyhpLCB0b2RvcywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmFkZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgaWYgKGFkZElucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgY29uc3QgdG9kb1ZhbCA9IGFkZElucHV0LnZhbHVlO1xuICAgICAgYWRkSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgICBjb25zdCB1cGRUb2RvID0gYWRkVG9kb1Rhc2soeyBpbmRleCwgZGVzYzogdG9kb1ZhbCwgY29tcGxldGVkOiBmYWxzZSB9LCB0b2Rvcyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh1cGRUb2RvKSk7XG4gICAgICByZW5kZXIoKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5jbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdG9kb3MgPSBjbGVhckFsbCh0b2Rvcyk7XG4gIGluZGV4ID0gdG9kb3MubGVuZ3RoO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICByZW5kZXIoKTtcbn0pO1xuXG53aW5kb3cub25sb2FkID0gcmVuZGVyKCk7IiwiZnVuY3Rpb24gZGVsZXRlQW5JdGVtKGksIHRvRG9MaXN0KSB7XG4gIC8vIGNvbnN0IHRlbXAgPSBbLi4udG9Eb0xpc3RdO1xuICB0b0RvTGlzdC5zcGxpY2UoaSwgMSk7XG5cbiAgLy8gaWYgKHRvRG9MaXN0ID09PSB0ZW1wKSB7XG4gIC8vICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciB3aGlsZSBkZWxldGluZyBhbiBpdGVtJyk7XG4gIC8vIH1cbiAgcmV0dXJuIHRvRG9MaXN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGV0ZUFuSXRlbTtcbiIsImZ1bmN0aW9uIHVwZGF0ZVRvZG8oaSwgdG9Eb0xpc3QsIG5ld0Rlc2MpIHtcbiAgdG9Eb0xpc3RbaV0uZGVzYyA9IG5ld0Rlc2M7XG4gIHJldHVybiB0b0RvTGlzdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1cGRhdGVUb2RvO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9kaXNwbGF5VGFzay5qcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=