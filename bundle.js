/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Ribeye+Marrow&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  box-sizing: border-box;\n  font-family: \"Ribeye Marrow\", cursive;\n  background-color: #FDD089;\n  font-size: calc(0.5em + 1vw);\n}\n\n*,\n::before,\n::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nsvg {\n  pointer-events: none;\n}\n\nheader {\n  color: #6B5048;\n  background-color: #FDD089;\n  display: flex;\n}\nheader h2 {\n  margin: 0 auto 0 0;\n  margin-left: auto;\n  margin-right: auto;\n  font-weight: 650;\n  font-size: 0.8rem;\n}\n\n.main-container {\n  display: flex;\n}\n\n.side-bar {\n  background-color: #FDD089;\n  min-width: 10%;\n  max-width: 15%;\n  height: 100vh;\n  padding-top: 3em;\n  padding-left: 0.5em;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n}\n.side-bar h2 {\n  color: #6B5048;\n  font-size: 1.2rem;\n  margin-bottom: 0;\n  margin-top: 0.2em;\n}\n.side-bar h2 a {\n  text-decoration: none;\n  color: inherit;\n}\n.side-bar button {\n  display: block;\n  margin-top: 1em;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  background: transparent;\n  cursor: pointer;\n  border-width: thin;\n}\n.side-bar button:focus {\n  outline: #ffa500;\n  border-color: #ffa500;\n}\n.side-bar ul {\n  list-style: none;\n  padding-left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.side-bar ul li {\n  margin-bottom: 1em;\n}\n.side-bar ul li a {\n  color: #6B5048;\n  font-family: \"Josefin Sans\", sans-serif;\n  text-decoration: none;\n  font-size: 1.2rem;\n  font-weight: 550;\n}\n\n.side-bar::-webkit-scrollbar {\n  width: 0 !important;\n  display: none;\n}\n\n.project-area {\n  color: #6B5048;\n  border-style: solid;\n  border-radius: 30px 0 0 0;\n  border-width: thick 0 0 thick;\n  border-color: white;\n  width: 100%;\n  padding-left: 1.4em;\n  background-color: #FEF7D7;\n  box-shadow: inset 2px 2px 1px 0 #3b1f02;\n}\n.project-area .project-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 600;\n}\n.project-area h1 {\n  border-bottom-style: double;\n  border-width: thick;\n  border-color: #6B5048;\n  font-family: \"Ribeye Marrow\", cursive;\n  margin-left: auto;\n  margin-right: auto;\n}\n.project-area .project-btn-container {\n  display: flex;\n}\n.project-area .project-btn-container .delete-project-btn {\n  margin-left: 1em;\n  background: rgba(255, 0, 0, 0.2);\n}\n.project-area button {\n  display: block;\n  margin-top: 1em;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  background: transparent;\n  cursor: pointer;\n  border-width: thin;\n  max-width: 10%;\n}\n.project-area .task-container {\n  display: flex;\n  border-bottom-style: solid;\n  border-width: thin;\n  border-color: #6B5048;\n  max-width: 90%;\n}\n.project-area .task-container .done-task-btn {\n  margin-right: 1em;\n}\n.project-area .task-container .done-task-btn[data-is-done=true] {\n  background-color: rgba(0, 255, 2, 0.4);\n}\n.project-area .task-container .done-task-btn[data-is-done=true] + .task-text .task-description {\n  -webkit-text-decoration-line: line-through;\n          text-decoration-line: line-through;\n}\n.project-area .task-container .delete-task-btn {\n  background: rgba(255, 0, 0, 0.2);\n  margin-left: auto;\n}\n.project-area .task-container .task-text {\n  display: flex;\n  flex-direction: column;\n}\n.project-area .task-container .task-text .task-description {\n  margin-bottom: 0.1em;\n  word-break: break-all;\n}\n.project-area .task-container .task-text .task-time-container {\n  display: flex;\n}\n.project-area .task-container .task-text .task-time-container p {\n  color: grey;\n  font-size: 0.6rem;\n  margin-right: 1em;\n}\n\n.form-wrapper {\n  background: rgba(0, 0, 0, 0.5);\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  display: none;\n}\n\n.form-container {\n  background-color: #FDD089;\n  width: 25em;\n  height: auto;\n  padding-left: 1.5em;\n  padding-right: 1.5em;\n  display: flex;\n  flex-direction: column;\n  border-style: solid;\n  border-width: thick;\n  border-radius: 20px;\n  border-color: #3b1f02;\n}\n.form-container label {\n  font-size: 0.8rem;\n}\n.form-container input {\n  margin-top: 0.2em;\n  width: 100%;\n  font-size: 1rem;\n  font-family: \"Josefin Sans\", sans-serif;\n}\n.form-container .form-btn-container {\n  margin-left: auto;\n  margin-top: 1em;\n  display: flex;\n  padding-bottom: 1em;\n}\n.form-container .form-btn-container button {\n  display: block;\n  margin-top: 1em;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  background: transparent;\n  cursor: pointer;\n  border-width: thin;\n  margin-right: 1em;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["\r\n$primary-color: #FDD089;\r\n$secondary-color: #FEF7D7;\r\n$primary-font-color: #6B5048;\r\n$secondary-font-color: #6B5048;\r\n$primary-font:'Ribeye Marrow', cursive;\r\n$secondary-font:'Josefin Sans', sans-serif;\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Ribeye+Marrow&display=swap');\r\n\r\n\r\n@mixin center-element {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n@mixin flex-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\n\r\n:root {\r\n  box-sizing: border-box;\r\n  font-family: $primary-font;\r\n  background-color: $primary-color;\r\n  font-size: calc(0.5em + 1vw);\r\n}\r\n\r\n*,\r\n::before,\r\n::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nsvg {\r\n  pointer-events: none;\r\n}\r\n\r\nheader {\r\n  color:$primary-font-color;\r\n  background-color: $primary-color;\r\n  display: flex;\r\n\r\n  h2 {\r\n    margin: 0 auto 0 0;\r\n    @include center-element;\r\n    font-weight: 650;\r\n    font-size: 0.8rem;\r\n\r\n  }\r\n}\r\n\r\n.main-container {\r\n  display: flex;\r\n}\r\n\r\n.side-bar {\r\n  background-color: $primary-color;\r\n  min-width: 10%;\r\n  max-width: 15%;\r\n  height: 100vh;\r\n  padding-top: 3em;\r\n  padding-left: 0.5em;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n\r\n  //To hide the scroll bar in internet explorer and mozilla based browsers\r\n  -ms-overflow-style: none;\r\n  overflow: -moz-scrollbars-none;\r\n\r\n  h2 {\r\n    color: $primary-font-color;\r\n    font-size: 1.2rem;\r\n    margin-bottom: 0;\r\n    margin-top: 0.2em;\r\n\r\n    a{\r\n      text-decoration: none;\r\n      color: inherit;\r\n    }\r\n  }\r\n\r\n  button{\r\n    display: block;\r\n    margin-top: 1em;\r\n    font-family: $secondary-font;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    background: transparent;\r\n    cursor: pointer;\r\n    border-width: thin;\r\n  }\r\n\r\n  button:focus{\r\n    outline: #ffa500;\r\n    border-color:  #ffa500;\r\n  }\r\n\r\n  ul {\r\n    list-style: none;\r\n    padding-left: 0;\r\n    @include flex-column;\r\n\r\n    li {\r\n\r\n      margin-bottom: 1em;\r\n\r\n      a {\r\n\r\n        color: $primary-font-color;\r\n        font-family: $secondary-font;\r\n        text-decoration: none;\r\n        font-size: 1.2rem;\r\n        font-weight: 550;\r\n\r\n      }\r\n    }\r\n\r\n  }\r\n\r\n\r\n}\r\n// to hide the scroll bar in  webkit based browsers - safari, chrome, etc\r\n.side-bar::-webkit-scrollbar {\r\n  width: 0 !important;\r\n  display: none;\r\n\r\n}\r\n\r\n.project-area {\r\n  color: $secondary-font-color;\r\n  border-style: solid;\r\n  border-radius: 30px 0 0 0;\r\n  border-width: thick 0 0 thick;\r\n  border-color: white;\r\n  width: 100%;\r\n  padding-left: 1.4em;\r\n  background-color: $secondary-color;\r\n  box-shadow: inset 2px 2px 1px 0 #3b1f02;\r\n\r\n\r\n\r\n\r\n  .project-container {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: $secondary-font;\r\n    font-weight: 600;\r\n  }\r\n\r\n  h1 {\r\n    border-bottom-style: double;\r\n    border-width: thick;\r\n    border-color: $secondary-font-color;\r\n    font-family: $primary-font;\r\n    @include center-element\r\n  }\r\n\r\n  .project-btn-container {\r\n    display: flex;\r\n\r\n    .delete-project-btn {\r\n      margin-left: 1em;\r\n      background: rgba(255, 0, 0,0.2);\r\n    }\r\n  }\r\n\r\n  button {\r\n    display: block;\r\n    margin-top: 1em;\r\n    font-family: $secondary-font;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    background: transparent;\r\n    cursor: pointer;\r\n    border-width: thin;\r\n    max-width: 10%;\r\n  }\r\n  .task-container {\r\n    display:flex;\r\n\r\n    border-bottom-style: solid;\r\n    border-width: thin;\r\n    border-color: $secondary-font-color;\r\n    max-width: 90%;\r\n\r\n    .done-task-btn {\r\n      margin-right: 1em;\r\n    }\r\n\r\n    .done-task-btn[data-is-done=\"true\"]{\r\n      background-color: rgba(0, 255, 2,0.4);\r\n    }\r\n\r\n    .done-task-btn[data-is-done=\"true\"] + .task-text .task-description{\r\n      text-decoration-line: line-through;\r\n    }\r\n\r\n    .delete-task-btn {\r\n     background: rgba(255, 0, 0,0.2);\r\n     margin-left: auto;\r\n    }\r\n\r\n    .task-text {\r\n      display: flex;\r\n      flex-direction: column;\r\n\r\n\r\n      .task-description {\r\n        margin-bottom: 0.1em;\r\n        word-break: break-all;\r\n      }\r\n\r\n      .task-time-container{\r\n        display: flex;\r\n\r\n        p{\r\n          color: grey;\r\n          font-size: 0.6rem;\r\n          margin-right: 1em;\r\n\r\n        }\r\n      }\r\n\r\n    }\r\n\r\n\r\n  }\r\n\r\n\r\n\r\n\r\n}\r\n\r\n//------------------------------Form Styles Start-------------------------------------\r\n.form-wrapper {\r\n  background: rgba(0, 0, 0,0.5);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display:none;\r\n\r\n}\r\n\r\n.form-container {\r\n  background-color: $primary-color;\r\n  width: 25em;\r\n  height: auto;\r\n  padding-left: 1.5em;\r\n  padding-right: 1.5em;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-style: solid;\r\n  border-width: thick;\r\n  border-radius: 20px;\r\n  border-color: #3b1f02;\r\n\r\n\r\n  label{\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  input {\r\n    margin-top: 0.2em;\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    font-family: $secondary-font;\r\n  }\r\n\r\n  .form-btn-container{\r\n    margin-left: auto;\r\n    margin-top: 1em;\r\n    display: flex;\r\n    padding-bottom: 1em;\r\n\r\n    button{\r\n      display: block;\r\n      margin-top: 1em;\r\n      font-family: $secondary-font;\r\n      font-size: 1rem;\r\n      font-weight: 400;\r\n      background: transparent;\r\n      cursor: pointer;\r\n      border-width: thin;\r\n      margin-right: 1em;\r\n    }\r\n\r\n  }\r\n\r\n\r\n}\r\n\r\n//------------------------------Form Styles End-------------------------------------\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/modules/logic/project-mapper.js":
/*!*********************************************!*\
  !*** ./src/modules/logic/project-mapper.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-mapper */ "./src/modules/logic/task-mapper.js");


const createBtn =(btnClassName, btnText, projectID)=>{
    const btn = document.createElement('button');
    btn.className=btnClassName;
    btn.innerText = btnText;
    if (projectID){
        btn.setAttribute(`data-project-id`,projectID);
    }
    return btn;
}

const projectToHtml =(project)=>{

    const projectContainer = document.createElement('div');
    projectContainer.className = `project-container`;
    projectContainer.setAttribute(`data-project-id`,project.getId());

    const title = document.createElement('h1');
    title.innerText = project.getName();

    const projectBtnContainer = document.createElement('div');
    projectBtnContainer.className=`project-btn-container`;

    const addNewTaskBtn =createBtn(`add-task-btn`, `+Task`);

    const deleteProjectBtn = createBtn(`delete-project-btn`,`Delete Project`, project.getId());

    projectBtnContainer.append(addNewTaskBtn, deleteProjectBtn);
    projectContainer.append(title, projectBtnContainer);

    project.getTaskList().map( t => (0,_task_mapper__WEBPACK_IMPORTED_MODULE_0__.default)(t))
        .forEach( t =>{
            projectContainer.appendChild(t);
        })

    return projectContainer;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectToHtml);

/***/ }),

/***/ "./src/modules/logic/project-service.js":
/*!**********************************************!*\
  !*** ./src/modules/logic/project-service.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/logic/project.js");



let projectList = [];


const getProjectList = () => {
    return projectList;
}

/**
 * Function: Is called when a new project is added using the Add Project Form.
 * @param projectName
 * @returns {{setName: function(*): void, getName: function(): *, updateProject: function(*): void, setId: function(*): void, toString: function(): string, getId: function(): *, getTaskList: function(): [], deleteTask: function(*): *, addTask: function(*=): *}}
 */
const addProject = (projectName) => {

    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.default)(projectName);
    newProject.setId(generateProjectId());
    projectList.push(newProject);
    console.log(`New ProjectListLength = ${projectList.length}`);
    return newProject;

}

/**
 * @param projectId :is used to look for the to be deleted Project
 * @returns {number}: is to know if deletion is successful.
 */
const deleteProject =(projectId)=>{
    projectList = projectList.filter( g => g.getId()!== projectId);
    return projectList.length;
}

/**
 *
 * @param projectId: is to look for the Project where the task should be added.
 * @param newTask: Should be a task object. Created using the Task Factory method.
 * @returns {*}: is to verify the newTask is added. (check for Id)
 */
const addTask = (projectId, newTask) => {
    const project = findProjectById(projectId);
    project.addTask(newTask);
    return newTask;

}

const findProjectById = (projectId) => {
    return projectList.find(p => p.getId() === projectId);
}

/**
 * Function: Will generate an ID number depending on the maximum id of projects.
 * @returns {number}: is the new ID
 */
const generateProjectId = () => {
    return projectList.length>0?Math.max(...projectList.map(g => g.getId()))+1:0;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({getProjectList, addTask, addProject, findProjectById, deleteProject});

/***/ }),

/***/ "./src/modules/logic/project.js":
/*!**************************************!*\
  !*** ./src/modules/logic/project.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Project = (name) => {

    let taskList = [];
    let id;


    //Only works if id is not set yet.
    const setId = (newId) => {
        if (!id) {
            id = newId;
        }
    }

    const getId = () => id;

    const getName = () => name;

    const setName = (newName) => {
        name = newName;
    }

    const getTaskList = () => taskList;

    const addTask = (task) => {
        if (taskList.length === 0) {
            task.setId(0);
        } else {
            task.setId(generateTaskId());
        }
        taskList.push(task);
        return task;
    }

    const findTaskById = taskId =>{
        return taskList.find( t => t.getId()===taskId);
    }

    const generateTaskId = () => {
        return Math.max(...taskList.map(t => t.getId())) + 1;
    }

    const deleteTask = (id) => {
        taskList = taskList.filter(t => t.getId() !== id);
        return taskList;
    }

    const updateProject =(newProjectName)=>{
        name = newProjectName;
    }

    const toString = () => `ID:${id} Name: ${name}, Number of tasks: ${taskList.length}`;

    return {getName, getTaskList, setName, addTask, toString, setId, getId, deleteTask, updateProject, findTaskById};

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/modules/logic/task-mapper.js":
/*!******************************************!*\
  !*** ./src/modules/logic/task-mapper.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createBtn = (projectId, taskId, btnClassName, btnText) => {
    const btn = document.createElement('button');
    btn.className = btnClassName;
    btn.setAttribute(`aria-label`, btnText);
    btn.setAttribute(`data-task-id`, taskId);
    btn.setAttribute(`data-project-id`, projectId);
    return btn;
}


const appendTaskFooter = (task, taskContainer) => {


    const taskDueDate = document.createElement('p');
    taskDueDate.innerText = task.getDueDate();
    taskDueDate.className = `due-date`;

    const taskElapsedTime = document.createElement('p');
    taskElapsedTime.innerText = `${task.getElapsedTime()} hours`;
    taskElapsedTime.className = `elapsed-time`;

    taskContainer.append(taskDueDate, taskElapsedTime);


}

const taskToHtml = (task) => {

    const taskContainer = document.createElement(`div`);
    taskContainer.className = `task-container`;
    taskContainer.setAttribute(`data-task-id`, task.getId());

    const doneBtn = createBtn(task.getProjectId(), task.getId(), `done-task-btn`, `Done`);
    doneBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>`
    if (task.isDone()) {
        doneBtn.setAttribute(`data-is-done`, "true");
    }
    const taskTextContent = document.createElement('div');
    taskTextContent.className = 'task-text';
    const taskDescription = document.createElement(`p`);
    taskDescription.innerText = task.getDescription();
    taskDescription.className = `task-description`;

    const taskTimeContainer = document.createElement('div');
    taskTimeContainer.className = `task-time-container`;
    appendTaskFooter(task, taskTimeContainer);

    taskTextContent.append(taskDescription, taskTimeContainer);
    const deleteBtn = createBtn(task.getProjectId(), task.getId(), `delete-task-btn`, `Delete`);
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>`;
    taskContainer.append(doneBtn, taskTextContent, deleteBtn)

    return taskContainer

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskToHtml);

/***/ }),

/***/ "./src/modules/logic/task.js":
/*!***********************************!*\
  !*** ./src/modules/logic/task.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Task = (description, elapsedTime, dueDate, projectId) => {

    let Done = false;
    let id;

    const getId = () => id;

    //Only works if id is not set yet.
    const setId = (newId) => {
        if (!id) {
            id = newId;
        }
    }

    const getDescription = () => description;
    const setDescription = (newDescription) => {
        description = newDescription;
    }

    const getElapsedTime = () => elapsedTime;
    const setElapsedTime = (newTime) => {
        elapsedTime = newTime
    }

    const getDueDate = () => dueDate;
    const setDueDate = (newDate) => {
        dueDate = newDate;
    }

    const isDone = () => Done;
    const markAsDone = () => {
        Done = true;
    }
    const markAsUndone = () => {
        Done = false;
    }

    const getProjectId = () => projectId;

    const toString = () => `Description: ${description} Elapsed Time: ${elapsedTime} ${dueDate}`;


    return {
        getDescription, getElapsedTime,
        getDueDate, isDone, markAsDone, markAsUndone,
        setDescription, setDueDate, setElapsedTime, toString,
        getId, setId, getProjectId
    };

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/modules/ui/form.js":
/*!********************************!*\
  !*** ./src/modules/ui/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Form = (formName, parentContainer) => {

    let formHtml;

    (() => {
        const formParentContainer = document.createElement('div');
        formParentContainer.className = 'form-wrapper'
        formParentContainer.id = `${formName}-form-wrapper`;

        const form = document.createElement('div');
        form.className = 'form-container';
        form.id = `${formName}-container`;

        const formTitleWrapper = document.createElement('div');
        formTitleWrapper.className = `form-title-container`
        formTitleWrapper.id = `${formName}-title-container`;
        form.appendChild(formTitleWrapper);

        const formInputElementContainer = document.createElement('form');
        formInputElementContainer.className = `form-input-container`;
        formInputElementContainer.id = `${formName}-input-container`;
        form.appendChild(formInputElementContainer);

        const formBtnContainer = document.createElement('div');
        formBtnContainer.className = `form-btn-container`;
        formBtnContainer.id = `${formName}-btn-container`;
        form.appendChild(formBtnContainer);
        formParentContainer.appendChild(form);
        document.querySelector(parentContainer).appendChild(formParentContainer);
        formHtml = form;

    })();

    const getHtmlElement = () => formHtml;

    const setTitle = (title) => {
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        document.getElementById(`${formName}-title-container`).appendChild(titleElement);
    }

    const addButton = (btnName) => {
        const btn = document.createElement('button');
        btn.id = `${formName}-${btnName}-btn`;
        btn.className = `form-btn`;
        btn.textContent = btnName;
        document.getElementById(`${formName}-btn-container`).appendChild(btn);
    }

    const addInputField = (fieldName, label, type) => {

        const inputField = document.createElement('input');
        inputField.className = 'form-input';
        inputField.id = `${fieldName}-form-input`;
        inputField.type = type;
        inputField.value = '';

        const labelElement = document.createElement('label');
        labelElement.for = `${fieldName}-form-input`;
        labelElement.textContent = label;
        document.getElementById(`${formName}-input-container`).append(labelElement, inputField);
   }

    return {getHtmlElement, setTitle,addButton, addInputField};
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./src/modules/ui/header.js":
/*!**********************************!*\
  !*** ./src/modules/ui/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const Header =()=>{

    const headerElement = document.createElement('header');
    const logo= document.createElement('h2');
    logo.textContent= 'Todo List';

    headerElement.appendChild(logo);
    return headerElement
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/modules/ui/main-area.js":
/*!*************************************!*\
  !*** ./src/modules/ui/main-area.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/project-service */ "./src/modules/logic/project-service.js");
/* harmony import */ var _ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-service */ "./src/modules/ui/ui-service.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/modules/ui/form.js");




const handleAddTaskBtn = () => {
    document.getElementById(`add-task-form-wrapper`).style.display = `flex`;
}

const handleDeleteProjectBtn = (projectId) => {
    _ui_service__WEBPACK_IMPORTED_MODULE_1__.default.deleteProject(projectId);
    _logic_project_service__WEBPACK_IMPORTED_MODULE_0__.default.deleteProject(projectId);

}
const handleDoneTaskBtn = (projectId, taskId) => {
    const project = _logic_project_service__WEBPACK_IMPORTED_MODULE_0__.default.findProjectById(projectId);
    const task = project.findTaskById(taskId);

    document.querySelector(`.done-task-btn[data-task-id="${taskId}"]`)
        .setAttribute(`data-is-done`, `${!task.isDone()}`);

    task.isDone() ? task.markAsUndone() : task.markAsDone();
}


const handleDeleteTaskBtn = (projectId, taskId) => {
    const project = _logic_project_service__WEBPACK_IMPORTED_MODULE_0__.default.findProjectById(projectId);
    project.deleteTask(taskId);
    _ui_service__WEBPACK_IMPORTED_MODULE_1__.default.displayProject(project);
}

const initializeEventHandlers = (container) => {
    container.addEventListener(`click`, (event) => {
        console.log(event.target.className);
        switch (event.target.className) {
            case `add-task-btn`:
                handleAddTaskBtn();
                break;
            case `delete-project-btn`:
                handleDeleteProjectBtn(Number(event.target.getAttribute(`data-project-id`)))
                break;
            case `done-task-btn`:
                handleDoneTaskBtn(Number(event.target.getAttribute(`data-project-id`)),
                    Number(event.target.getAttribute(`data-task-id`)))
                break;
            case `delete-task-btn`:
                handleDeleteTaskBtn(Number(event.target.getAttribute(`data-project-id`)),
                    Number(event.target.getAttribute(`data-task-id`)));
                break;
        }
    })
}

const appendMainArea = (container) => {
    const mainArea = document.createElement('div');
    mainArea.className = 'project-area';
    container.appendChild(mainArea);
    initializeEventHandlers(mainArea);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendMainArea);

/***/ }),

/***/ "./src/modules/ui/side-menu.js":
/*!*************************************!*\
  !*** ./src/modules/ui/side-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-service */ "./src/modules/ui/ui-service.js");
/* harmony import */ var _logic_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/project-service */ "./src/modules/logic/project-service.js");



/**
 * Creates the Add Project button
 * @returns {HTMLButtonElement} Will return html element to be appended.
 * @constructor
 */
const NewProjectBtn = () => {
    const btn = document.createElement('button');
    btn.className = `add-project-btn`;
    btn.textContent = '+Project'
    return btn;
}

const handleAddProjectBtn =()=>{
    document.getElementById(`add-project-form-wrapper`).style.display =`flex`;
}

/**
 * Function: Will display the content of a project in div with class = `project-area` using UiService
 * @param projectId
 */
const handleProjectLink =(projectId)=>{
        const project =_logic_project_service__WEBPACK_IMPORTED_MODULE_1__.default.findProjectById(projectId);
        _ui_service__WEBPACK_IMPORTED_MODULE_0__.default.displayProject(project);
}

/**
 * Function: Will attach event handlers related to the side menu to the container. Will include the addProject button,
 * home page, and link to each project. Will use the delegate pattern.
 * @param container: is HtmlElement
 */
const initializeEventHandlers =(container)=>{

    container.addEventListener(`click`,(event)=>{
        event.preventDefault();
        switch (event.target.className){
            case `add-project-btn`:
                handleAddProjectBtn();
                break;
            case `project-link`:
                handleProjectLink(Number(event.target.getAttribute(`data-project-id`)));
                break;


        }
    })
}



/**
 *
 * @param container: is required to append the side menu container and then attach the event handlers.
 */
const appendSideMenu = (container) => {

    const sideBarContainer = document.createElement('aside');
    sideBarContainer.className = 'side-bar';

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = 'Projects';
    sideBarContainer.appendChild(projectTitle);

    sideBarContainer.appendChild(NewProjectBtn())
    const unorderedListParent = document.createElement('ul');
    unorderedListParent.className = 'project-list';

    sideBarContainer.appendChild(unorderedListParent);

    container.appendChild(sideBarContainer);
    initializeEventHandlers(sideBarContainer);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendSideMenu);

/***/ }),

/***/ "./src/modules/ui/ui-service.js":
/*!**************************************!*\
  !*** ./src/modules/ui/ui-service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_project_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/project-mapper */ "./src/modules/logic/project-mapper.js");



/**
 * Function: Will add project to side menu - <ul class="project-list">
 * @param project
 */
const addNewProject = (project)=>{

    const projectList = document.querySelector('.project-list');
    const listItem = document.createElement('li');
    listItem.setAttribute(`data-project-id`,project.getId());
    const groupName = document.createElement('a');

    groupName.setAttribute('data-project-id',project.getId());
    groupName.href='';
    groupName.className='project-link';
    groupName.textContent = project.getName();

    listItem.appendChild(groupName);
    projectList.appendChild(listItem);

}

/**
 * Function: Will display Project info.
 * @param project: Is project object.
 */
const displayProject =(project)=>{

    const projectArea = document.querySelector('.project-area');
    clearProjectArea();
    projectArea.append((0,_logic_project_mapper__WEBPACK_IMPORTED_MODULE_0__.default)(project));


}

const clearProjectArea =()=>{
    const projectContainer = document.querySelector('.project-container');
    if (projectContainer){
        projectContainer.remove();
    }
}

const deleteProject =(projectId)=>{
    clearProjectArea();
    document.querySelector(`li[data-project-id="${projectId}"]`).remove();
}











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({addNewProject, displayProject, deleteProject});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_ui_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui/header */ "./src/modules/ui/header.js");
/* harmony import */ var _modules_ui_side_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ui/side-menu */ "./src/modules/ui/side-menu.js");
/* harmony import */ var _modules_ui_main_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ui/main-area */ "./src/modules/ui/main-area.js");
/* harmony import */ var _modules_ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ui/form */ "./src/modules/ui/form.js");
/* harmony import */ var _modules_logic_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/logic/project-service */ "./src/modules/logic/project-service.js");
/* harmony import */ var _modules_ui_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/ui/ui-service */ "./src/modules/ui/ui-service.js");
/* harmony import */ var _modules_logic_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/logic/task */ "./src/modules/logic/task.js");










/**
 * Function: Will Generate the Add project Form. To see event handling related to it, check handleAddProjectForm()
 * method.
 * @returns {*}
 * @constructor
 */
const AddProjectForm = () => {
    const formElement = (0,_modules_ui_form__WEBPACK_IMPORTED_MODULE_4__.default)(`add-project`, `aside`);
    formElement.setTitle('New Project');
    formElement.addInputField(`project-name`, `Project Name`, `text`);
    formElement.addButton('Confirm');
    formElement.addButton(`Cancel`);
    return formElement.getHtmlElement();
}
/**
 * Function: Will handle Events related to the Add Project Form returned by AddProjectForm() method.
 */
const handleAddProjectForm = () => {
    /**
     * Function: Will remove the add project Form by setting its wrapper to display:none
     */
    const clearForm = () => {
        document.getElementById(`project-name-form-input`).value = ``;
        document.getElementById(`add-project-form-wrapper`).style.display = `none`;
    }

    /**
     * Function: Will call UiService and ProjectService to add the new Project.
     * @param projectName: is grabbed from input element with Id = `project-name-form-input`
     */
    const confirmAddProject = (projectName) => {
        const newProject = _modules_logic_project_service__WEBPACK_IMPORTED_MODULE_5__.default.addProject(projectName);
        _modules_ui_ui_service__WEBPACK_IMPORTED_MODULE_6__.default.addNewProject(newProject);
    }

    document.getElementById(`add-project-form-wrapper`).addEventListener(`click`, (event) => {
        event.preventDefault();

        switch (event.target.id) {
            case `add-project-Cancel-btn`:
                clearForm();
                break;
            case `add-project-Confirm-btn`:
                confirmAddProject(document.getElementById(`project-name-form-input`).value);
                clearForm();
                break;
            case `add-project-form-wrapper`:
                clearForm();
                break;
        }
    })
}

const AddTaskForm = () => {
    const formElement = (0,_modules_ui_form__WEBPACK_IMPORTED_MODULE_4__.default)(`add-task`, `.main-container`);
    formElement.setTitle('New Task');
    formElement.addInputField(`task-description`, `Description`, `text`);
    formElement.addInputField(`task-elapsed-time`, `Elapsed Time (hours)`, `number`);
    formElement.addInputField(`due-date`, `Due Date`, `date`);
    formElement.addButton(`Confirm`);
    formElement.addButton(`Cancel`);
    return formElement.getHtmlElement();
}
const handleAddTaskFrom = () => {
    const handleCancelBtn = () => {
        document.getElementById(`add-task-form-wrapper`).style.display = `none`;

    }

    const handleConfirmBtn = () => {
        const projectId = Number(document.querySelector(`.project-container`).getAttribute(`data-project-id`));
        console.log(`Project ID: ${projectId}`);
        const description = document.getElementById(`task-description-form-input`).value;
        const elapsedTime = document.getElementById(`task-elapsed-time-form-input`).value;
        const dueDate = document.getElementById(`due-date-form-input`).value;

        const newTask = (0,_modules_logic_task__WEBPACK_IMPORTED_MODULE_7__.default)(description, elapsedTime, dueDate, projectId);
        _modules_logic_project_service__WEBPACK_IMPORTED_MODULE_5__.default.addTask(projectId, newTask);
        _modules_ui_ui_service__WEBPACK_IMPORTED_MODULE_6__.default.displayProject(_modules_logic_project_service__WEBPACK_IMPORTED_MODULE_5__.default.findProjectById(projectId));
        resetForm();
        document.getElementById(`add-task-form-wrapper`).style.display = `none`;


    }

    const resetForm = () => {
        document.querySelectorAll(`.form-input`).forEach(i => {
            i.value = '';
        })
    }

    document.getElementById(`add-task-form-wrapper`)
        .addEventListener(`click`, (event) => {
           switch (event.target.id) {
                case `add-task-Confirm-btn`:
                    handleConfirmBtn();
                    resetForm();
                    break;
                case `add-task-Cancel-btn`:
                    handleCancelBtn();
                    resetForm();
                    break;
                case `add-task-form-wrapper`:
                    document.getElementById(`add-task-form-wrapper`).style.display = `none`;
                    resetForm();
                    break;

            }
        })
}


(() => {

    const body = document.querySelector('#content');
    body.appendChild((0,_modules_ui_header__WEBPACK_IMPORTED_MODULE_1__.default)());

    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';
    body.appendChild(mainContainer);
    (0,_modules_ui_side_menu__WEBPACK_IMPORTED_MODULE_2__.default)(mainContainer);
    (0,_modules_ui_main_area__WEBPACK_IMPORTED_MODULE_3__.default)(mainContainer);
    AddProjectForm();
    handleAddProjectForm();
    AddTaskForm();
    handleAddTaskFrom();
    //--------------------------Test Stuff---------------------------
    const testproject = _modules_logic_project_service__WEBPACK_IMPORTED_MODULE_5__.default.addProject(`Test`);

    _modules_ui_ui_service__WEBPACK_IMPORTED_MODULE_6__.default.addNewProject(testproject);
    testproject.addTask((0,_modules_logic_task__WEBPACK_IMPORTED_MODULE_7__.default)(`Feed the fishes`, 12,'2014/03/12',testproject.getId()))
    testproject.addTask((0,_modules_logic_task__WEBPACK_IMPORTED_MODULE_7__.default)(`Feed the Dogs`, 3,'2021/03/03',testproject.getId()))
    testproject.addTask((0,_modules_logic_task__WEBPACK_IMPORTED_MODULE_7__.default)(`Feed Myself`, 1,'2014/03/12',testproject.getId()))

})()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub0RvLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vVG9Eby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVG9Eby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL1RvRG8vLi9zcmMvc3R5bGUuc2Nzcz8wYjY3Iiwid2VicGFjazovL1RvRG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG9Eby8uL3NyYy9tb2R1bGVzL2xvZ2ljL3Byb2plY3QtbWFwcGVyLmpzIiwid2VicGFjazovL1RvRG8vLi9zcmMvbW9kdWxlcy9sb2dpYy9wcm9qZWN0LXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vVG9Eby8uL3NyYy9tb2R1bGVzL2xvZ2ljL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vVG9Eby8uL3NyYy9tb2R1bGVzL2xvZ2ljL3Rhc2stbWFwcGVyLmpzIiwid2VicGFjazovL1RvRG8vLi9zcmMvbW9kdWxlcy9sb2dpYy90YXNrLmpzIiwid2VicGFjazovL1RvRG8vLi9zcmMvbW9kdWxlcy91aS9mb3JtLmpzIiwid2VicGFjazovL1RvRG8vLi9zcmMvbW9kdWxlcy91aS9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vVG9Eby8uL3NyYy9tb2R1bGVzL3VpL21haW4tYXJlYS5qcyIsIndlYnBhY2s6Ly9Ub0RvLy4vc3JjL21vZHVsZXMvdWkvc2lkZS1tZW51LmpzIiwid2VicGFjazovL1RvRG8vLi9zcmMvbW9kdWxlcy91aS91aS1zZXJ2aWNlLmpzIiwid2VicGFjazovL1RvRG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG9Eby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9Ub0RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub0RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG9Eby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RvRG8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix3SkFBd0o7QUFDeEo7QUFDQSxpREFBaUQsMkJBQTJCLDRDQUE0Qyw4QkFBOEIsaUNBQWlDLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLFVBQVUsY0FBYyxlQUFlLEdBQUcsU0FBUyx5QkFBeUIsR0FBRyxZQUFZLG1CQUFtQiw4QkFBOEIsa0JBQWtCLEdBQUcsYUFBYSx1QkFBdUIsc0JBQXNCLHVCQUF1QixxQkFBcUIsc0JBQXNCLEdBQUcscUJBQXFCLGtCQUFrQixHQUFHLGVBQWUsOEJBQThCLG1CQUFtQixtQkFBbUIsa0JBQWtCLHFCQUFxQix3QkFBd0IsdUJBQXVCLHVCQUF1QixrQkFBa0IsMkJBQTJCLDRCQUE0Qiw2QkFBNkIsbUNBQW1DLEdBQUcsZ0JBQWdCLG1CQUFtQixzQkFBc0IscUJBQXFCLHNCQUFzQixHQUFHLGtCQUFrQiwwQkFBMEIsbUJBQW1CLEdBQUcsb0JBQW9CLG1CQUFtQixvQkFBb0IsOENBQThDLG9CQUFvQixxQkFBcUIsNEJBQTRCLG9CQUFvQix1QkFBdUIsR0FBRywwQkFBMEIscUJBQXFCLDBCQUEwQixHQUFHLGdCQUFnQixxQkFBcUIsb0JBQW9CLGtCQUFrQiwyQkFBMkIsNEJBQTRCLEdBQUcsbUJBQW1CLHVCQUF1QixHQUFHLHFCQUFxQixtQkFBbUIsOENBQThDLDBCQUEwQixzQkFBc0IscUJBQXFCLEdBQUcsa0NBQWtDLHdCQUF3QixrQkFBa0IsR0FBRyxtQkFBbUIsbUJBQW1CLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLHdCQUF3QixnQkFBZ0Isd0JBQXdCLDhCQUE4Qiw0Q0FBNEMsR0FBRyxvQ0FBb0MsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsOENBQThDLHFCQUFxQixHQUFHLG9CQUFvQixnQ0FBZ0Msd0JBQXdCLDBCQUEwQiw0Q0FBNEMsc0JBQXNCLHVCQUF1QixHQUFHLHdDQUF3QyxrQkFBa0IsR0FBRyw0REFBNEQscUJBQXFCLHFDQUFxQyxHQUFHLHdCQUF3QixtQkFBbUIsb0JBQW9CLDhDQUE4QyxvQkFBb0IscUJBQXFCLDRCQUE0QixvQkFBb0IsdUJBQXVCLG1CQUFtQixHQUFHLGlDQUFpQyxrQkFBa0IsK0JBQStCLHVCQUF1QiwwQkFBMEIsbUJBQW1CLEdBQUcsZ0RBQWdELHNCQUFzQixHQUFHLG1FQUFtRSwyQ0FBMkMsR0FBRyxrR0FBa0csK0NBQStDLCtDQUErQyxHQUFHLGtEQUFrRCxxQ0FBcUMsc0JBQXNCLEdBQUcsNENBQTRDLGtCQUFrQiwyQkFBMkIsR0FBRyw4REFBOEQseUJBQXlCLDBCQUEwQixHQUFHLGlFQUFpRSxrQkFBa0IsR0FBRyxtRUFBbUUsZ0JBQWdCLHNCQUFzQixzQkFBc0IsR0FBRyxtQkFBbUIsbUNBQW1DLGlCQUFpQixrQkFBa0Isb0JBQW9CLFdBQVcsWUFBWSx3QkFBd0IsNEJBQTRCLGtCQUFrQixHQUFHLHFCQUFxQiw4QkFBOEIsZ0JBQWdCLGlCQUFpQix3QkFBd0IseUJBQXlCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLEdBQUcseUJBQXlCLHNCQUFzQixHQUFHLHlCQUF5QixzQkFBc0IsZ0JBQWdCLG9CQUFvQiw4Q0FBOEMsR0FBRyx1Q0FBdUMsc0JBQXNCLG9CQUFvQixrQkFBa0Isd0JBQXdCLEdBQUcsOENBQThDLG1CQUFtQixvQkFBb0IsOENBQThDLG9CQUFvQixxQkFBcUIsNEJBQTRCLG9CQUFvQix1QkFBdUIsc0JBQXNCLEdBQUcsT0FBTyxrRkFBa0YsV0FBVyxZQUFZLGFBQWEsWUFBWSxPQUFPLFFBQVEsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLGNBQWMsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsYUFBYSxZQUFZLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsYUFBYSxjQUFjLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsYUFBYSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFB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SUFBSSw4REFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhFQUF5Qjs7QUFFakQsSUFBSSx5RUFBdUI7QUFDM0Isd0JBQXdCLDREQUFJO0FBQzVCLHdCQUF3Qiw0REFBSTtBQUM1Qix3QkFBd0IsNERBQUk7O0FBRTVCLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAzMDAmZmFtaWx5PVJpYmV5ZStNYXJyb3cmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmliZXllIE1hcnJvd1xcXCIsIGN1cnNpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkREMDg5O1xcbiAgZm9udC1zaXplOiBjYWxjKDAuNWVtICsgMXZ3KTtcXG59XFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuc3ZnIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgY29sb3I6ICM2QjUwNDg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkREMDg5O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuaGVhZGVyIGgyIHtcXG4gIG1hcmdpbjogMCBhdXRvIDAgMDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZm9udC13ZWlnaHQ6IDY1MDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNpZGUtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGREQwODk7XFxuICBtaW4td2lkdGg6IDEwJTtcXG4gIG1heC13aWR0aDogMTUlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmctdG9wOiAzZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcXG59XFxuLnNpZGUtYmFyIGgyIHtcXG4gIGNvbG9yOiAjNkI1MDQ4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWFyZ2luLXRvcDogMC4yZW07XFxufVxcbi5zaWRlLWJhciBoMiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4uc2lkZS1iYXIgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbn1cXG4uc2lkZS1iYXIgYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6ICNmZmE1MDA7XFxuICBib3JkZXItY29sb3I6ICNmZmE1MDA7XFxufVxcbi5zaWRlLWJhciB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLnNpZGUtYmFyIHVsIGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuLnNpZGUtYmFyIHVsIGxpIGEge1xcbiAgY29sb3I6ICM2QjUwNDg7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxufVxcblxcbi5zaWRlLWJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWFyZWEge1xcbiAgY29sb3I6ICM2QjUwNDg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweCAwIDAgMDtcXG4gIGJvcmRlci13aWR0aDogdGhpY2sgMCAwIHRoaWNrO1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjRlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUY3RDc7XFxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDFweCAwICMzYjFmMDI7XFxufVxcbi5wcm9qZWN0LWFyZWEgLnByb2plY3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ucHJvamVjdC1hcmVhIGgxIHtcXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGRvdWJsZTtcXG4gIGJvcmRlci13aWR0aDogdGhpY2s7XFxuICBib3JkZXItY29sb3I6ICM2QjUwNDg7XFxuICBmb250LWZhbWlseTogXFxcIlJpYmV5ZSBNYXJyb3dcXFwiLCBjdXJzaXZlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5wcm9qZWN0LWFyZWEgLnByb2plY3QtYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucHJvamVjdC1hcmVhIC5wcm9qZWN0LWJ0bi1jb250YWluZXIgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxufVxcbi5wcm9qZWN0LWFyZWEgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xcbiAgbWF4LXdpZHRoOiAxMCU7XFxufVxcbi5wcm9qZWN0LWFyZWEgLnRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogdGhpbjtcXG4gIGJvcmRlci1jb2xvcjogIzZCNTA0ODtcXG4gIG1heC13aWR0aDogOTAlO1xcbn1cXG4ucHJvamVjdC1hcmVhIC50YXNrLWNvbnRhaW5lciAuZG9uZS10YXNrLWJ0biB7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuLnByb2plY3QtYXJlYSAudGFzay1jb250YWluZXIgLmRvbmUtdGFzay1idG5bZGF0YS1pcy1kb25lPXRydWVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyLCAwLjQpO1xcbn1cXG4ucHJvamVjdC1hcmVhIC50YXNrLWNvbnRhaW5lciAuZG9uZS10YXNrLWJ0bltkYXRhLWlzLWRvbmU9dHJ1ZV0gKyAudGFzay10ZXh0IC50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcXG59XFxuLnByb2plY3QtYXJlYSAudGFzay1jb250YWluZXIgLmRlbGV0ZS10YXNrLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ucHJvamVjdC1hcmVhIC50YXNrLWNvbnRhaW5lciAudGFzay10ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucHJvamVjdC1hcmVhIC50YXNrLWNvbnRhaW5lciAudGFzay10ZXh0IC50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG4ucHJvamVjdC1hcmVhIC50YXNrLWNvbnRhaW5lciAudGFzay10ZXh0IC50YXNrLXRpbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0LWFyZWEgLnRhc2stY29udGFpbmVyIC50YXNrLXRleHQgLnRhc2stdGltZS1jb250YWluZXIgcCB7XFxuICBjb2xvcjogZ3JleTtcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi5mb3JtLXdyYXBwZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZERDA4OTtcXG4gIHdpZHRoOiAyNWVtO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiB0aGljaztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXItY29sb3I6ICMzYjFmMDI7XFxufVxcbi5mb3JtLWNvbnRhaW5lciBsYWJlbCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuLmZvcm0tY29udGFpbmVyIGlucHV0IHtcXG4gIG1hcmdpbi10b3A6IDAuMmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5mb3JtLWNvbnRhaW5lciAuZm9ybS1idG4tY29udGFpbmVyIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XFxufVxcbi5mb3JtLWNvbnRhaW5lciAuZm9ybS1idG4tY29udGFpbmVyIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci13aWR0aDogdGhpbjtcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUF1QkE7RUFDRSxzQkFBQTtFQUNBLHFDQXBCWTtFQXFCWix5QkF6QmM7RUEwQmQsNEJBQUE7QUFyQkY7O0FBd0JBOzs7RUFHRSxtQkFBQTtBQXJCRjs7QUF5QkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQXRCRjs7QUF3QkE7RUFDRSxvQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxjQTNDbUI7RUE0Q25CLHlCQTlDYztFQStDZCxhQUFBO0FBckJGO0FBdUJFO0VBQ0Usa0JBQUE7RUF2Q0YsaUJBQUE7RUFDQSxrQkFBQTtFQXdDRSxnQkFBQTtFQUNBLGlCQUFBO0FBcEJKOztBQXlCQTtFQUNFLGFBQUE7QUF0QkY7O0FBeUJB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dXJjZXNDb250ZW50XCI6W1wiXFxyXFxuJHByaW1hcnktY29sb3I6ICNGREQwODk7XFxyXFxuJHNlY29uZGFyeS1jb2xvcjogI0ZFRjdENztcXHJcXG4kcHJpbWFyeS1mb250LWNvbG9yOiAjNkI1MDQ4O1xcclxcbiRzZWNvbmRhcnktZm9udC1jb2xvcjogIzZCNTA0ODtcXHJcXG4kcHJpbWFyeS1mb250OidSaWJleWUgTWFycm93JywgY3Vyc2l2ZTtcXHJcXG4kc2Vjb25kYXJ5LWZvbnQ6J0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMzAwJmZhbWlseT1SaWJleWUrTWFycm93JmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcblxcclxcbkBtaXhpbiBjZW50ZXItZWxlbWVudCB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZsZXgtY29sdW1uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDAuNWVtICsgMXZ3KTtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG46OmJlZm9yZSxcXHJcXG46OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuc3ZnIHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgY29sb3I6JHByaW1hcnktZm9udC1jb2xvcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gIGgyIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCAwO1xcclxcbiAgICBAaW5jbHVkZSBjZW50ZXItZWxlbWVudDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDY1MDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICBtaW4td2lkdGg6IDEwJTtcXHJcXG4gIG1heC13aWR0aDogMTUlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmctdG9wOiAzZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gIC8vVG8gaGlkZSB0aGUgc2Nyb2xsIGJhciBpbiBpbnRlcm5ldCBleHBsb3JlciBhbmQgbW96aWxsYSBiYXNlZCBicm93c2Vyc1xcclxcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcclxcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xcclxcblxcclxcbiAgaDIge1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktZm9udC1jb2xvcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuMmVtO1xcclxcblxcclxcbiAgICBhe1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9ue1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcclxcbiAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJ1dHRvbjpmb2N1c3tcXHJcXG4gICAgb3V0bGluZTogI2ZmYTUwMDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAgI2ZmYTUwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbjtcXHJcXG5cXHJcXG4gICAgbGkge1xcclxcblxcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG5cXHJcXG4gICAgICBhIHtcXHJcXG5cXHJcXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1mb250LWNvbG9yO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG5cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuLy8gdG8gaGlkZSB0aGUgc2Nyb2xsIGJhciBpbiAgd2Via2l0IGJhc2VkIGJyb3dzZXJzIC0gc2FmYXJpLCBjaHJvbWUsIGV0Y1xcclxcbi5zaWRlLWJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWFyZWEge1xcclxcbiAgY29sb3I6ICRzZWNvbmRhcnktZm9udC1jb2xvcjtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4IDAgMCAwO1xcclxcbiAgYm9yZGVyLXdpZHRoOiB0aGljayAwIDAgdGhpY2s7XFxyXFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEuNGVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggMXB4IDAgIzNiMWYwMjtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBkb3VibGU7XFxyXFxuICAgIGJvcmRlci13aWR0aDogdGhpY2s7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1mb250LWNvbG9yO1xcclxcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcXHJcXG4gICAgQGluY2x1ZGUgY2VudGVyLWVsZW1lbnRcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9qZWN0LWJ0bi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICAuZGVsZXRlLXByb2plY3QtYnRuIHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLDAuMik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwJTtcXHJcXG4gIH1cXHJcXG4gIC50YXNrLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWZvbnQtY29sb3I7XFxyXFxuICAgIG1heC13aWR0aDogOTAlO1xcclxcblxcclxcbiAgICAuZG9uZS10YXNrLWJ0biB7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmUtdGFzay1idG5bZGF0YS1pcy1kb25lPVxcXCJ0cnVlXFxcIl17XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDIsMC40KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uZS10YXNrLWJ0bltkYXRhLWlzLWRvbmU9XFxcInRydWVcXFwiXSArIC50YXNrLXRleHQgLnRhc2stZGVzY3JpcHRpb257XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGVsZXRlLXRhc2stYnRuIHtcXHJcXG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLDAuMik7XFxyXFxuICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFzay10ZXh0IHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgLnRhc2stZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XFxyXFxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC50YXNrLXRpbWUtY29udGFpbmVye1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgICAgIHB7XFxyXFxuICAgICAgICAgIGNvbG9yOiBncmV5O1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRm9ybSBTdHlsZXMgU3RhcnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxyXFxuLmZvcm0td3JhcHBlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsMC41KTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZGlzcGxheTpub25lO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICB3aWR0aDogMjVlbTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmctbGVmdDogMS41ZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci13aWR0aDogdGhpY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjM2IxZjAyO1xcclxcblxcclxcblxcclxcbiAgbGFiZWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgaW5wdXQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtLWJ0bi1jb250YWluZXJ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxyXFxuXFxyXFxuICAgIGJ1dHRvbntcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAxZW07XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcXHJcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgYm9yZGVyLXdpZHRoOiB0aGluO1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRm9ybSBTdHlsZXMgRW5kLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB0YXNrVG9IdG1sIGZyb20gJy4vdGFzay1tYXBwZXInO1xyXG5cclxuY29uc3QgY3JlYXRlQnRuID0oYnRuQ2xhc3NOYW1lLCBidG5UZXh0LCBwcm9qZWN0SUQpPT57XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bi5jbGFzc05hbWU9YnRuQ2xhc3NOYW1lO1xyXG4gICAgYnRuLmlubmVyVGV4dCA9IGJ0blRleHQ7XHJcbiAgICBpZiAocHJvamVjdElEKXtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKGBkYXRhLXByb2plY3QtaWRgLHByb2plY3RJRCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnRuO1xyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0VG9IdG1sID0ocHJvamVjdCk9PntcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTmFtZSA9IGBwcm9qZWN0LWNvbnRhaW5lcmA7XHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShgZGF0YS1wcm9qZWN0LWlkYCxwcm9qZWN0LmdldElkKCkpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QuZ2V0TmFtZSgpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RCdG5Db250YWluZXIuY2xhc3NOYW1lPWBwcm9qZWN0LWJ0bi1jb250YWluZXJgO1xyXG5cclxuICAgIGNvbnN0IGFkZE5ld1Rhc2tCdG4gPWNyZWF0ZUJ0bihgYWRkLXRhc2stYnRuYCwgYCtUYXNrYCk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGNyZWF0ZUJ0bihgZGVsZXRlLXByb2plY3QtYnRuYCxgRGVsZXRlIFByb2plY3RgLCBwcm9qZWN0LmdldElkKCkpO1xyXG5cclxuICAgIHByb2plY3RCdG5Db250YWluZXIuYXBwZW5kKGFkZE5ld1Rhc2tCdG4sIGRlbGV0ZVByb2plY3RCdG4pO1xyXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQodGl0bGUsIHByb2plY3RCdG5Db250YWluZXIpO1xyXG5cclxuICAgIHByb2plY3QuZ2V0VGFza0xpc3QoKS5tYXAoIHQgPT4gdGFza1RvSHRtbCh0KSlcclxuICAgICAgICAuZm9yRWFjaCggdCA9PntcclxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RUb0h0bWw7IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuXHJcbmxldCBwcm9qZWN0TGlzdCA9IFtdO1xyXG5cclxuXHJcbmNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHByb2plY3RMaXN0O1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb246IElzIGNhbGxlZCB3aGVuIGEgbmV3IHByb2plY3QgaXMgYWRkZWQgdXNpbmcgdGhlIEFkZCBQcm9qZWN0IEZvcm0uXHJcbiAqIEBwYXJhbSBwcm9qZWN0TmFtZVxyXG4gKiBAcmV0dXJucyB7e3NldE5hbWU6IGZ1bmN0aW9uKCopOiB2b2lkLCBnZXROYW1lOiBmdW5jdGlvbigpOiAqLCB1cGRhdGVQcm9qZWN0OiBmdW5jdGlvbigqKTogdm9pZCwgc2V0SWQ6IGZ1bmN0aW9uKCopOiB2b2lkLCB0b1N0cmluZzogZnVuY3Rpb24oKTogc3RyaW5nLCBnZXRJZDogZnVuY3Rpb24oKTogKiwgZ2V0VGFza0xpc3Q6IGZ1bmN0aW9uKCk6IFtdLCBkZWxldGVUYXNrOiBmdW5jdGlvbigqKTogKiwgYWRkVGFzazogZnVuY3Rpb24oKj0pOiAqfX1cclxuICovXHJcbmNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBuZXdQcm9qZWN0LnNldElkKGdlbmVyYXRlUHJvamVjdElkKCkpO1xyXG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKGBOZXcgUHJvamVjdExpc3RMZW5ndGggPSAke3Byb2plY3RMaXN0Lmxlbmd0aH1gKTtcclxuICAgIHJldHVybiBuZXdQcm9qZWN0O1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBwcm9qZWN0SWQgOmlzIHVzZWQgdG8gbG9vayBmb3IgdGhlIHRvIGJlIGRlbGV0ZWQgUHJvamVjdFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfTogaXMgdG8ga25vdyBpZiBkZWxldGlvbiBpcyBzdWNjZXNzZnVsLlxyXG4gKi9cclxuY29uc3QgZGVsZXRlUHJvamVjdCA9KHByb2plY3RJZCk9PntcclxuICAgIHByb2plY3RMaXN0ID0gcHJvamVjdExpc3QuZmlsdGVyKCBnID0+IGcuZ2V0SWQoKSE9PSBwcm9qZWN0SWQpO1xyXG4gICAgcmV0dXJuIHByb2plY3RMaXN0Lmxlbmd0aDtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBwcm9qZWN0SWQ6IGlzIHRvIGxvb2sgZm9yIHRoZSBQcm9qZWN0IHdoZXJlIHRoZSB0YXNrIHNob3VsZCBiZSBhZGRlZC5cclxuICogQHBhcmFtIG5ld1Rhc2s6IFNob3VsZCBiZSBhIHRhc2sgb2JqZWN0LiBDcmVhdGVkIHVzaW5nIHRoZSBUYXNrIEZhY3RvcnkgbWV0aG9kLlxyXG4gKiBAcmV0dXJucyB7Kn06IGlzIHRvIHZlcmlmeSB0aGUgbmV3VGFzayBpcyBhZGRlZC4gKGNoZWNrIGZvciBJZClcclxuICovXHJcbmNvbnN0IGFkZFRhc2sgPSAocHJvamVjdElkLCBuZXdUYXNrKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3RCeUlkKHByb2plY3RJZCk7XHJcbiAgICBwcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XHJcbiAgICByZXR1cm4gbmV3VGFzaztcclxuXHJcbn1cclxuXHJcbmNvbnN0IGZpbmRQcm9qZWN0QnlJZCA9IChwcm9qZWN0SWQpID0+IHtcclxuICAgIHJldHVybiBwcm9qZWN0TGlzdC5maW5kKHAgPT4gcC5nZXRJZCgpID09PSBwcm9qZWN0SWQpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb246IFdpbGwgZ2VuZXJhdGUgYW4gSUQgbnVtYmVyIGRlcGVuZGluZyBvbiB0aGUgbWF4aW11bSBpZCBvZiBwcm9qZWN0cy5cclxuICogQHJldHVybnMge251bWJlcn06IGlzIHRoZSBuZXcgSURcclxuICovXHJcbmNvbnN0IGdlbmVyYXRlUHJvamVjdElkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHByb2plY3RMaXN0Lmxlbmd0aD4wP01hdGgubWF4KC4uLnByb2plY3RMaXN0Lm1hcChnID0+IGcuZ2V0SWQoKSkpKzE6MDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtnZXRQcm9qZWN0TGlzdCwgYWRkVGFzaywgYWRkUHJvamVjdCwgZmluZFByb2plY3RCeUlkLCBkZWxldGVQcm9qZWN0fTsiLCJjb25zdCBQcm9qZWN0ID0gKG5hbWUpID0+IHtcclxuXHJcbiAgICBsZXQgdGFza0xpc3QgPSBbXTtcclxuICAgIGxldCBpZDtcclxuXHJcblxyXG4gICAgLy9Pbmx5IHdvcmtzIGlmIGlkIGlzIG5vdCBzZXQgeWV0LlxyXG4gICAgY29uc3Qgc2V0SWQgPSAobmV3SWQpID0+IHtcclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIGlkID0gbmV3SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XHJcblxyXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XHJcblxyXG4gICAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XHJcbiAgICAgICAgbmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VGFza0xpc3QgPSAoKSA9PiB0YXNrTGlzdDtcclxuXHJcbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcclxuICAgICAgICBpZiAodGFza0xpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRhc2suc2V0SWQoMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFzay5zZXRJZChnZW5lcmF0ZVRhc2tJZCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFza0xpc3QucHVzaCh0YXNrKTtcclxuICAgICAgICByZXR1cm4gdGFzaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaW5kVGFza0J5SWQgPSB0YXNrSWQgPT57XHJcbiAgICAgICAgcmV0dXJuIHRhc2tMaXN0LmZpbmQoIHQgPT4gdC5nZXRJZCgpPT09dGFza0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZW5lcmF0ZVRhc2tJZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoLi4udGFza0xpc3QubWFwKHQgPT4gdC5nZXRJZCgpKSkgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaWQpID0+IHtcclxuICAgICAgICB0YXNrTGlzdCA9IHRhc2tMaXN0LmZpbHRlcih0ID0+IHQuZ2V0SWQoKSAhPT0gaWQpO1xyXG4gICAgICAgIHJldHVybiB0YXNrTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0ID0obmV3UHJvamVjdE5hbWUpPT57XHJcbiAgICAgICAgbmFtZSA9IG5ld1Byb2plY3ROYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4gYElEOiR7aWR9IE5hbWU6ICR7bmFtZX0sIE51bWJlciBvZiB0YXNrczogJHt0YXNrTGlzdC5sZW5ndGh9YDtcclxuXHJcbiAgICByZXR1cm4ge2dldE5hbWUsIGdldFRhc2tMaXN0LCBzZXROYW1lLCBhZGRUYXNrLCB0b1N0cmluZywgc2V0SWQsIGdldElkLCBkZWxldGVUYXNrLCB1cGRhdGVQcm9qZWN0LCBmaW5kVGFza0J5SWR9O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJjb25zdCBjcmVhdGVCdG4gPSAocHJvamVjdElkLCB0YXNrSWQsIGJ0bkNsYXNzTmFtZSwgYnRuVGV4dCkgPT4ge1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidG4uY2xhc3NOYW1lID0gYnRuQ2xhc3NOYW1lO1xyXG4gICAgYnRuLnNldEF0dHJpYnV0ZShgYXJpYS1sYWJlbGAsIGJ0blRleHQpO1xyXG4gICAgYnRuLnNldEF0dHJpYnV0ZShgZGF0YS10YXNrLWlkYCwgdGFza0lkKTtcclxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoYGRhdGEtcHJvamVjdC1pZGAsIHByb2plY3RJZCk7XHJcbiAgICByZXR1cm4gYnRuO1xyXG59XHJcblxyXG5cclxuY29uc3QgYXBwZW5kVGFza0Zvb3RlciA9ICh0YXNrLCB0YXNrQ29udGFpbmVyKSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGFza0R1ZURhdGUuaW5uZXJUZXh0ID0gdGFzay5nZXREdWVEYXRlKCk7XHJcbiAgICB0YXNrRHVlRGF0ZS5jbGFzc05hbWUgPSBgZHVlLWRhdGVgO1xyXG5cclxuICAgIGNvbnN0IHRhc2tFbGFwc2VkVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhc2tFbGFwc2VkVGltZS5pbm5lclRleHQgPSBgJHt0YXNrLmdldEVsYXBzZWRUaW1lKCl9IGhvdXJzYDtcclxuICAgIHRhc2tFbGFwc2VkVGltZS5jbGFzc05hbWUgPSBgZWxhcHNlZC10aW1lYDtcclxuXHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrRHVlRGF0ZSwgdGFza0VsYXBzZWRUaW1lKTtcclxuXHJcblxyXG59XHJcblxyXG5jb25zdCB0YXNrVG9IdG1sID0gKHRhc2spID0+IHtcclxuXHJcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XHJcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9IGB0YXNrLWNvbnRhaW5lcmA7XHJcbiAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShgZGF0YS10YXNrLWlkYCwgdGFzay5nZXRJZCgpKTtcclxuXHJcbiAgICBjb25zdCBkb25lQnRuID0gY3JlYXRlQnRuKHRhc2suZ2V0UHJvamVjdElkKCksIHRhc2suZ2V0SWQoKSwgYGRvbmUtdGFzay1idG5gLCBgRG9uZWApO1xyXG4gICAgZG9uZUJ0bi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0cHhcIiBmaWxsPVwiIzAwMDAwMFwiPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aCBkPVwiTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnpcIi8+PC9zdmc+YFxyXG4gICAgaWYgKHRhc2suaXNEb25lKCkpIHtcclxuICAgICAgICBkb25lQnRuLnNldEF0dHJpYnV0ZShgZGF0YS1pcy1kb25lYCwgXCJ0cnVlXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFza1RleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrVGV4dENvbnRlbnQuY2xhc3NOYW1lID0gJ3Rhc2stdGV4dCc7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBwYCk7XHJcbiAgICB0YXNrRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGFzay5nZXREZXNjcmlwdGlvbigpO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IGB0YXNrLWRlc2NyaXB0aW9uYDtcclxuXHJcbiAgICBjb25zdCB0YXNrVGltZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza1RpbWVDb250YWluZXIuY2xhc3NOYW1lID0gYHRhc2stdGltZS1jb250YWluZXJgO1xyXG4gICAgYXBwZW5kVGFza0Zvb3Rlcih0YXNrLCB0YXNrVGltZUNvbnRhaW5lcik7XHJcblxyXG4gICAgdGFza1RleHRDb250ZW50LmFwcGVuZCh0YXNrRGVzY3JpcHRpb24sIHRhc2tUaW1lQ29udGFpbmVyKTtcclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUJ0bih0YXNrLmdldFByb2plY3RJZCgpLCB0YXNrLmdldElkKCksIGBkZWxldGUtdGFzay1idG5gLCBgRGVsZXRlYCk7XHJcbiAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNHB4XCIgZmlsbD1cIiMwMDAwMDBcIj48cGF0aCBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgZmlsbD1cIm5vbmVcIi8+PHBhdGggZD1cIk0xNiA5djEwSDhWOWg4bS0xLjUtNmgtNWwtMSAxSDV2MmgxNFY0aC0zLjVsLTEtMXpNMTggN0g2djEyYzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY3elwiLz48L3N2Zz5gO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoZG9uZUJ0biwgdGFza1RleHRDb250ZW50LCBkZWxldGVCdG4pXHJcblxyXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXJcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tUb0h0bWw7IiwiY29uc3QgVGFzayA9IChkZXNjcmlwdGlvbiwgZWxhcHNlZFRpbWUsIGR1ZURhdGUsIHByb2plY3RJZCkgPT4ge1xyXG5cclxuICAgIGxldCBEb25lID0gZmFsc2U7XHJcbiAgICBsZXQgaWQ7XHJcblxyXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcclxuXHJcbiAgICAvL09ubHkgd29ya3MgaWYgaWQgaXMgbm90IHNldCB5ZXQuXHJcbiAgICBjb25zdCBzZXRJZCA9IChuZXdJZCkgPT4ge1xyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgaWQgPSBuZXdJZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRFbGFwc2VkVGltZSA9ICgpID0+IGVsYXBzZWRUaW1lO1xyXG4gICAgY29uc3Qgc2V0RWxhcHNlZFRpbWUgPSAobmV3VGltZSkgPT4ge1xyXG4gICAgICAgIGVsYXBzZWRUaW1lID0gbmV3VGltZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xyXG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEYXRlKSA9PiB7XHJcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNEb25lID0gKCkgPT4gRG9uZTtcclxuICAgIGNvbnN0IG1hcmtBc0RvbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgRG9uZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXJrQXNVbmRvbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgRG9uZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByb2plY3RJZCA9ICgpID0+IHByb2plY3RJZDtcclxuXHJcbiAgICBjb25zdCB0b1N0cmluZyA9ICgpID0+IGBEZXNjcmlwdGlvbjogJHtkZXNjcmlwdGlvbn0gRWxhcHNlZCBUaW1lOiAke2VsYXBzZWRUaW1lfSAke2R1ZURhdGV9YDtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXREZXNjcmlwdGlvbiwgZ2V0RWxhcHNlZFRpbWUsXHJcbiAgICAgICAgZ2V0RHVlRGF0ZSwgaXNEb25lLCBtYXJrQXNEb25lLCBtYXJrQXNVbmRvbmUsXHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24sIHNldER1ZURhdGUsIHNldEVsYXBzZWRUaW1lLCB0b1N0cmluZyxcclxuICAgICAgICBnZXRJZCwgc2V0SWQsIGdldFByb2plY3RJZFxyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiY29uc3QgRm9ybSA9IChmb3JtTmFtZSwgcGFyZW50Q29udGFpbmVyKSA9PiB7XHJcblxyXG4gICAgbGV0IGZvcm1IdG1sO1xyXG5cclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybVBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZvcm1QYXJlbnRDb250YWluZXIuY2xhc3NOYW1lID0gJ2Zvcm0td3JhcHBlcidcclxuICAgICAgICBmb3JtUGFyZW50Q29udGFpbmVyLmlkID0gYCR7Zm9ybU5hbWV9LWZvcm0td3JhcHBlcmA7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb3JtLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRhaW5lcic7XHJcbiAgICAgICAgZm9ybS5pZCA9IGAke2Zvcm1OYW1lfS1jb250YWluZXJgO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtVGl0bGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZm9ybVRpdGxlV3JhcHBlci5jbGFzc05hbWUgPSBgZm9ybS10aXRsZS1jb250YWluZXJgXHJcbiAgICAgICAgZm9ybVRpdGxlV3JhcHBlci5pZCA9IGAke2Zvcm1OYW1lfS10aXRsZS1jb250YWluZXJgO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlV3JhcHBlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1JbnB1dEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgZm9ybUlucHV0RWxlbWVudENvbnRhaW5lci5jbGFzc05hbWUgPSBgZm9ybS1pbnB1dC1jb250YWluZXJgO1xyXG4gICAgICAgIGZvcm1JbnB1dEVsZW1lbnRDb250YWluZXIuaWQgPSBgJHtmb3JtTmFtZX0taW5wdXQtY29udGFpbmVyYDtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1JbnB1dEVsZW1lbnRDb250YWluZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZm9ybUJ0bkNvbnRhaW5lci5jbGFzc05hbWUgPSBgZm9ybS1idG4tY29udGFpbmVyYDtcclxuICAgICAgICBmb3JtQnRuQ29udGFpbmVyLmlkID0gYCR7Zm9ybU5hbWV9LWJ0bi1jb250YWluZXJgO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUJ0bkNvbnRhaW5lcik7XHJcbiAgICAgICAgZm9ybVBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudENvbnRhaW5lcikuYXBwZW5kQ2hpbGQoZm9ybVBhcmVudENvbnRhaW5lcik7XHJcbiAgICAgICAgZm9ybUh0bWwgPSBmb3JtO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgY29uc3QgZ2V0SHRtbEVsZW1lbnQgPSAoKSA9PiBmb3JtSHRtbDtcclxuXHJcbiAgICBjb25zdCBzZXRUaXRsZSA9ICh0aXRsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Zm9ybU5hbWV9LXRpdGxlLWNvbnRhaW5lcmApLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gKGJ0bk5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG4uaWQgPSBgJHtmb3JtTmFtZX0tJHtidG5OYW1lfS1idG5gO1xyXG4gICAgICAgIGJ0bi5jbGFzc05hbWUgPSBgZm9ybS1idG5gO1xyXG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IGJ0bk5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Zm9ybU5hbWV9LWJ0bi1jb250YWluZXJgKS5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZElucHV0RmllbGQgPSAoZmllbGROYW1lLCBsYWJlbCwgdHlwZSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dEZpZWxkLmNsYXNzTmFtZSA9ICdmb3JtLWlucHV0JztcclxuICAgICAgICBpbnB1dEZpZWxkLmlkID0gYCR7ZmllbGROYW1lfS1mb3JtLWlucHV0YDtcclxuICAgICAgICBpbnB1dEZpZWxkLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIGlucHV0RmllbGQudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYWJlbEVsZW1lbnQuZm9yID0gYCR7ZmllbGROYW1lfS1mb3JtLWlucHV0YDtcclxuICAgICAgICBsYWJlbEVsZW1lbnQudGV4dENvbnRlbnQgPSBsYWJlbDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtmb3JtTmFtZX0taW5wdXQtY29udGFpbmVyYCkuYXBwZW5kKGxhYmVsRWxlbWVudCwgaW5wdXRGaWVsZCk7XHJcbiAgIH1cclxuXHJcbiAgICByZXR1cm4ge2dldEh0bWxFbGVtZW50LCBzZXRUaXRsZSxhZGRCdXR0b24sIGFkZElucHV0RmllbGR9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJcclxuXHJcbmNvbnN0IEhlYWRlciA9KCk9PntcclxuXHJcbiAgICBjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCBsb2dvPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbG9nby50ZXh0Q29udGVudD0gJ1RvZG8gTGlzdCc7XHJcblxyXG4gICAgaGVhZGVyRWxlbWVudC5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIHJldHVybiBoZWFkZXJFbGVtZW50XHJcbn1cclxuXHJcbmV4cG9ydCAgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFByb2plY3RTZXJ2aWNlIGZyb20gXCIuLi9sb2dpYy9wcm9qZWN0LXNlcnZpY2VcIjtcclxuaW1wb3J0IFVpU2VydmljZSBmcm9tIFwiLi91aS1zZXJ2aWNlXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL2Zvcm1cIjtcclxuXHJcbmNvbnN0IGhhbmRsZUFkZFRhc2tCdG4gPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWRkLXRhc2stZm9ybS13cmFwcGVyYCkuc3R5bGUuZGlzcGxheSA9IGBmbGV4YDtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlRGVsZXRlUHJvamVjdEJ0biA9IChwcm9qZWN0SWQpID0+IHtcclxuICAgIFVpU2VydmljZS5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XHJcbiAgICBQcm9qZWN0U2VydmljZS5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XHJcblxyXG59XHJcbmNvbnN0IGhhbmRsZURvbmVUYXNrQnRuID0gKHByb2plY3RJZCwgdGFza0lkKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdFNlcnZpY2UuZmluZFByb2plY3RCeUlkKHByb2plY3RJZCk7XHJcbiAgICBjb25zdCB0YXNrID0gcHJvamVjdC5maW5kVGFza0J5SWQodGFza0lkKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZG9uZS10YXNrLWJ0bltkYXRhLXRhc2staWQ9XCIke3Rhc2tJZH1cIl1gKVxyXG4gICAgICAgIC5zZXRBdHRyaWJ1dGUoYGRhdGEtaXMtZG9uZWAsIGAkeyF0YXNrLmlzRG9uZSgpfWApO1xyXG5cclxuICAgIHRhc2suaXNEb25lKCkgPyB0YXNrLm1hcmtBc1VuZG9uZSgpIDogdGFzay5tYXJrQXNEb25lKCk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBoYW5kbGVEZWxldGVUYXNrQnRuID0gKHByb2plY3RJZCwgdGFza0lkKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdFNlcnZpY2UuZmluZFByb2plY3RCeUlkKHByb2plY3RJZCk7XHJcbiAgICBwcm9qZWN0LmRlbGV0ZVRhc2sodGFza0lkKTtcclxuICAgIFVpU2VydmljZS5kaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbGl6ZUV2ZW50SGFuZGxlcnMgPSAoY29udGFpbmVyKSA9PiB7XHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuY2xhc3NOYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5jbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBgYWRkLXRhc2stYnRuYDpcclxuICAgICAgICAgICAgICAgIGhhbmRsZUFkZFRhc2tCdG4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGBkZWxldGUtcHJvamVjdC1idG5gOlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlUHJvamVjdEJ0bihOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShgZGF0YS1wcm9qZWN0LWlkYCkpKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYGRvbmUtdGFzay1idG5gOlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlRG9uZVRhc2tCdG4oTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoYGRhdGEtcHJvamVjdC1pZGApKSxcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShgZGF0YS10YXNrLWlkYCkpKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYGRlbGV0ZS10YXNrLWJ0bmA6XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGVUYXNrQnRuKE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGBkYXRhLXByb2plY3QtaWRgKSksXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoYGRhdGEtdGFzay1pZGApKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBhcHBlbmRNYWluQXJlYSA9IChjb250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IG1haW5BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluQXJlYS5jbGFzc05hbWUgPSAncHJvamVjdC1hcmVhJztcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQXJlYSk7XHJcbiAgICBpbml0aWFsaXplRXZlbnRIYW5kbGVycyhtYWluQXJlYSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRNYWluQXJlYTsiLCJpbXBvcnQgVWlTZXJ2aWNlIGZyb20gXCIuL3VpLXNlcnZpY2VcIlxyXG5pbXBvcnQgUHJvamVjdFNlcnZpY2UgZnJvbSBcIi4uL2xvZ2ljL3Byb2plY3Qtc2VydmljZVwiXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyB0aGUgQWRkIFByb2plY3QgYnV0dG9uXHJcbiAqIEByZXR1cm5zIHtIVE1MQnV0dG9uRWxlbWVudH0gV2lsbCByZXR1cm4gaHRtbCBlbGVtZW50IHRvIGJlIGFwcGVuZGVkLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmNvbnN0IE5ld1Byb2plY3RCdG4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bi5jbGFzc05hbWUgPSBgYWRkLXByb2plY3QtYnRuYDtcclxuICAgIGJ0bi50ZXh0Q29udGVudCA9ICcrUHJvamVjdCdcclxuICAgIHJldHVybiBidG47XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUFkZFByb2plY3RCdG4gPSgpPT57XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWRkLXByb2plY3QtZm9ybS13cmFwcGVyYCkuc3R5bGUuZGlzcGxheSA9YGZsZXhgO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb246IFdpbGwgZGlzcGxheSB0aGUgY29udGVudCBvZiBhIHByb2plY3QgaW4gZGl2IHdpdGggY2xhc3MgPSBgcHJvamVjdC1hcmVhYCB1c2luZyBVaVNlcnZpY2VcclxuICogQHBhcmFtIHByb2plY3RJZFxyXG4gKi9cclxuY29uc3QgaGFuZGxlUHJvamVjdExpbmsgPShwcm9qZWN0SWQpPT57XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9UHJvamVjdFNlcnZpY2UuZmluZFByb2plY3RCeUlkKHByb2plY3RJZCk7XHJcbiAgICAgICAgVWlTZXJ2aWNlLmRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb246IFdpbGwgYXR0YWNoIGV2ZW50IGhhbmRsZXJzIHJlbGF0ZWQgdG8gdGhlIHNpZGUgbWVudSB0byB0aGUgY29udGFpbmVyLiBXaWxsIGluY2x1ZGUgdGhlIGFkZFByb2plY3QgYnV0dG9uLFxyXG4gKiBob21lIHBhZ2UsIGFuZCBsaW5rIHRvIGVhY2ggcHJvamVjdC4gV2lsbCB1c2UgdGhlIGRlbGVnYXRlIHBhdHRlcm4uXHJcbiAqIEBwYXJhbSBjb250YWluZXI6IGlzIEh0bWxFbGVtZW50XHJcbiAqL1xyXG5jb25zdCBpbml0aWFsaXplRXZlbnRIYW5kbGVycyA9KGNvbnRhaW5lcik9PntcclxuXHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLChldmVudCk9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSl7XHJcbiAgICAgICAgICAgIGNhc2UgYGFkZC1wcm9qZWN0LWJ0bmA6XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVBZGRQcm9qZWN0QnRuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBgcHJvamVjdC1saW5rYDpcclxuICAgICAgICAgICAgICAgIGhhbmRsZVByb2plY3RMaW5rKE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGBkYXRhLXByb2plY3QtaWRgKSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gY29udGFpbmVyOiBpcyByZXF1aXJlZCB0byBhcHBlbmQgdGhlIHNpZGUgbWVudSBjb250YWluZXIgYW5kIHRoZW4gYXR0YWNoIHRoZSBldmVudCBoYW5kbGVycy5cclxuICovXHJcbmNvbnN0IGFwcGVuZFNpZGVNZW51ID0gKGNvbnRhaW5lcikgPT4ge1xyXG5cclxuICAgIGNvbnN0IHNpZGVCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xyXG4gICAgc2lkZUJhckNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2lkZS1iYXInO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xyXG4gICAgc2lkZUJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG5cclxuICAgIHNpZGVCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoTmV3UHJvamVjdEJ0bigpKVxyXG4gICAgY29uc3QgdW5vcmRlcmVkTGlzdFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICB1bm9yZGVyZWRMaXN0UGFyZW50LmNsYXNzTmFtZSA9ICdwcm9qZWN0LWxpc3QnO1xyXG5cclxuICAgIHNpZGVCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQodW5vcmRlcmVkTGlzdFBhcmVudCk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXJDb250YWluZXIpO1xyXG4gICAgaW5pdGlhbGl6ZUV2ZW50SGFuZGxlcnMoc2lkZUJhckNvbnRhaW5lcik7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRTaWRlTWVudTsiLCJpbXBvcnQgcHJvamVjdFRvSHRtbCBmcm9tIFwiLi4vbG9naWMvcHJvamVjdC1tYXBwZXJcIjtcclxuXHJcblxyXG4vKipcclxuICogRnVuY3Rpb246IFdpbGwgYWRkIHByb2plY3QgdG8gc2lkZSBtZW51IC0gPHVsIGNsYXNzPVwicHJvamVjdC1saXN0XCI+XHJcbiAqIEBwYXJhbSBwcm9qZWN0XHJcbiAqL1xyXG5jb25zdCBhZGROZXdQcm9qZWN0ID0gKHByb2plY3QpPT57XHJcblxyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0Jyk7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoYGRhdGEtcHJvamVjdC1pZGAscHJvamVjdC5nZXRJZCgpKTtcclxuICAgIGNvbnN0IGdyb3VwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcbiAgICBncm91cE5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaWQnLHByb2plY3QuZ2V0SWQoKSk7XHJcbiAgICBncm91cE5hbWUuaHJlZj0nJztcclxuICAgIGdyb3VwTmFtZS5jbGFzc05hbWU9J3Byb2plY3QtbGluayc7XHJcbiAgICBncm91cE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcclxuXHJcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChncm91cE5hbWUpO1xyXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uOiBXaWxsIGRpc3BsYXkgUHJvamVjdCBpbmZvLlxyXG4gKiBAcGFyYW0gcHJvamVjdDogSXMgcHJvamVjdCBvYmplY3QuXHJcbiAqL1xyXG5jb25zdCBkaXNwbGF5UHJvamVjdCA9KHByb2plY3QpPT57XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1hcmVhJyk7XHJcbiAgICBjbGVhclByb2plY3RBcmVhKCk7XHJcbiAgICBwcm9qZWN0QXJlYS5hcHBlbmQocHJvamVjdFRvSHRtbChwcm9qZWN0KSk7XHJcblxyXG5cclxufVxyXG5cclxuY29uc3QgY2xlYXJQcm9qZWN0QXJlYSA9KCk9PntcclxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcclxuICAgIGlmIChwcm9qZWN0Q29udGFpbmVyKXtcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkZWxldGVQcm9qZWN0ID0ocHJvamVjdElkKT0+e1xyXG4gICAgY2xlYXJQcm9qZWN0QXJlYSgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlbZGF0YS1wcm9qZWN0LWlkPVwiJHtwcm9qZWN0SWR9XCJdYCkucmVtb3ZlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7YWRkTmV3UHJvamVjdCwgZGlzcGxheVByb2plY3QsIGRlbGV0ZVByb2plY3R9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9tb2R1bGVzL3VpL2hlYWRlclwiO1xyXG5pbXBvcnQgYXBwZW5kU2lkZU1lbnUgZnJvbSBcIi4vbW9kdWxlcy91aS9zaWRlLW1lbnVcIjtcclxuaW1wb3J0IGFwcGVuZE1haW5BcmVhIGZyb20gXCIuL21vZHVsZXMvdWkvbWFpbi1hcmVhXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL21vZHVsZXMvdWkvZm9ybVwiO1xyXG5pbXBvcnQgUHJvamVjdFNlcnZpY2UgZnJvbSBcIi4vbW9kdWxlcy9sb2dpYy9wcm9qZWN0LXNlcnZpY2VcIjtcclxuaW1wb3J0IFVpU2VydmljZSBmcm9tIFwiLi9tb2R1bGVzL3VpL3VpLXNlcnZpY2VcIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vbW9kdWxlcy9sb2dpYy90YXNrXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uOiBXaWxsIEdlbmVyYXRlIHRoZSBBZGQgcHJvamVjdCBGb3JtLiBUbyBzZWUgZXZlbnQgaGFuZGxpbmcgcmVsYXRlZCB0byBpdCwgY2hlY2sgaGFuZGxlQWRkUHJvamVjdEZvcm0oKVxyXG4gKiBtZXRob2QuXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmNvbnN0IEFkZFByb2plY3RGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybUVsZW1lbnQgPSBGb3JtKGBhZGQtcHJvamVjdGAsIGBhc2lkZWApO1xyXG4gICAgZm9ybUVsZW1lbnQuc2V0VGl0bGUoJ05ldyBQcm9qZWN0Jyk7XHJcbiAgICBmb3JtRWxlbWVudC5hZGRJbnB1dEZpZWxkKGBwcm9qZWN0LW5hbWVgLCBgUHJvamVjdCBOYW1lYCwgYHRleHRgKTtcclxuICAgIGZvcm1FbGVtZW50LmFkZEJ1dHRvbignQ29uZmlybScpO1xyXG4gICAgZm9ybUVsZW1lbnQuYWRkQnV0dG9uKGBDYW5jZWxgKTtcclxuICAgIHJldHVybiBmb3JtRWxlbWVudC5nZXRIdG1sRWxlbWVudCgpO1xyXG59XHJcbi8qKlxyXG4gKiBGdW5jdGlvbjogV2lsbCBoYW5kbGUgRXZlbnRzIHJlbGF0ZWQgdG8gdGhlIEFkZCBQcm9qZWN0IEZvcm0gcmV0dXJuZWQgYnkgQWRkUHJvamVjdEZvcm0oKSBtZXRob2QuXHJcbiAqL1xyXG5jb25zdCBoYW5kbGVBZGRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb246IFdpbGwgcmVtb3ZlIHRoZSBhZGQgcHJvamVjdCBGb3JtIGJ5IHNldHRpbmcgaXRzIHdyYXBwZXIgdG8gZGlzcGxheTpub25lXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNsZWFyRm9ybSA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC1uYW1lLWZvcm0taW5wdXRgKS52YWx1ZSA9IGBgO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhZGQtcHJvamVjdC1mb3JtLXdyYXBwZXJgKS5zdHlsZS5kaXNwbGF5ID0gYG5vbmVgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb246IFdpbGwgY2FsbCBVaVNlcnZpY2UgYW5kIFByb2plY3RTZXJ2aWNlIHRvIGFkZCB0aGUgbmV3IFByb2plY3QuXHJcbiAgICAgKiBAcGFyYW0gcHJvamVjdE5hbWU6IGlzIGdyYWJiZWQgZnJvbSBpbnB1dCBlbGVtZW50IHdpdGggSWQgPSBgcHJvamVjdC1uYW1lLWZvcm0taW5wdXRgXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNvbmZpcm1BZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3RTZXJ2aWNlLmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIFVpU2VydmljZS5hZGROZXdQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhZGQtcHJvamVjdC1mb3JtLXdyYXBwZXJgKS5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgYGFkZC1wcm9qZWN0LUNhbmNlbC1idG5gOlxyXG4gICAgICAgICAgICAgICAgY2xlYXJGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBgYWRkLXByb2plY3QtQ29uZmlybS1idG5gOlxyXG4gICAgICAgICAgICAgICAgY29uZmlybUFkZFByb2plY3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3QtbmFtZS1mb3JtLWlucHV0YCkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBgYWRkLXByb2plY3QtZm9ybS13cmFwcGVyYDpcclxuICAgICAgICAgICAgICAgIGNsZWFyRm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgQWRkVGFza0Zvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRWxlbWVudCA9IEZvcm0oYGFkZC10YXNrYCwgYC5tYWluLWNvbnRhaW5lcmApO1xyXG4gICAgZm9ybUVsZW1lbnQuc2V0VGl0bGUoJ05ldyBUYXNrJyk7XHJcbiAgICBmb3JtRWxlbWVudC5hZGRJbnB1dEZpZWxkKGB0YXNrLWRlc2NyaXB0aW9uYCwgYERlc2NyaXB0aW9uYCwgYHRleHRgKTtcclxuICAgIGZvcm1FbGVtZW50LmFkZElucHV0RmllbGQoYHRhc2stZWxhcHNlZC10aW1lYCwgYEVsYXBzZWQgVGltZSAoaG91cnMpYCwgYG51bWJlcmApO1xyXG4gICAgZm9ybUVsZW1lbnQuYWRkSW5wdXRGaWVsZChgZHVlLWRhdGVgLCBgRHVlIERhdGVgLCBgZGF0ZWApO1xyXG4gICAgZm9ybUVsZW1lbnQuYWRkQnV0dG9uKGBDb25maXJtYCk7XHJcbiAgICBmb3JtRWxlbWVudC5hZGRCdXR0b24oYENhbmNlbGApO1xyXG4gICAgcmV0dXJuIGZvcm1FbGVtZW50LmdldEh0bWxFbGVtZW50KCk7XHJcbn1cclxuY29uc3QgaGFuZGxlQWRkVGFza0Zyb20gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVDYW5jZWxCdG4gPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGFkZC10YXNrLWZvcm0td3JhcHBlcmApLnN0eWxlLmRpc3BsYXkgPSBgbm9uZWA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvbmZpcm1CdG4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWNvbnRhaW5lcmApLmdldEF0dHJpYnV0ZShgZGF0YS1wcm9qZWN0LWlkYCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0IElEOiAke3Byb2plY3RJZH1gKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrLWRlc2NyaXB0aW9uLWZvcm0taW5wdXRgKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBlbGFwc2VkVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrLWVsYXBzZWQtdGltZS1mb3JtLWlucHV0YCkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkdWUtZGF0ZS1mb3JtLWlucHV0YCkudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKGRlc2NyaXB0aW9uLCBlbGFwc2VkVGltZSwgZHVlRGF0ZSwgcHJvamVjdElkKTtcclxuICAgICAgICBQcm9qZWN0U2VydmljZS5hZGRUYXNrKHByb2plY3RJZCwgbmV3VGFzayk7XHJcbiAgICAgICAgVWlTZXJ2aWNlLmRpc3BsYXlQcm9qZWN0KFByb2plY3RTZXJ2aWNlLmZpbmRQcm9qZWN0QnlJZChwcm9qZWN0SWQpKTtcclxuICAgICAgICByZXNldEZvcm0oKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWRkLXRhc2stZm9ybS13cmFwcGVyYCkuc3R5bGUuZGlzcGxheSA9IGBub25lYDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc2V0Rm9ybSA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZm9ybS1pbnB1dGApLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgIGkudmFsdWUgPSAnJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhZGQtdGFzay1mb3JtLXdyYXBwZXJgKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGBhZGQtdGFzay1Db25maXJtLWJ0bmA6XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ29uZmlybUJ0bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBgYWRkLXRhc2stQ2FuY2VsLWJ0bmA6XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2FuY2VsQnRuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGBhZGQtdGFzay1mb3JtLXdyYXBwZXJgOlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhZGQtdGFzay1mb3JtLXdyYXBwZXJgKS5zdHlsZS5kaXNwbGF5ID0gYG5vbmVgO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcblxyXG4oKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChIZWFkZXIoKSk7XHJcblxyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWFpbi1jb250YWluZXInO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxuICAgIGFwcGVuZFNpZGVNZW51KG1haW5Db250YWluZXIpO1xyXG4gICAgYXBwZW5kTWFpbkFyZWEobWFpbkNvbnRhaW5lcik7XHJcbiAgICBBZGRQcm9qZWN0Rm9ybSgpO1xyXG4gICAgaGFuZGxlQWRkUHJvamVjdEZvcm0oKTtcclxuICAgIEFkZFRhc2tGb3JtKCk7XHJcbiAgICBoYW5kbGVBZGRUYXNrRnJvbSgpO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVRlc3QgU3R1ZmYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGNvbnN0IHRlc3Rwcm9qZWN0ID0gUHJvamVjdFNlcnZpY2UuYWRkUHJvamVjdChgVGVzdGApO1xyXG5cclxuICAgIFVpU2VydmljZS5hZGROZXdQcm9qZWN0KHRlc3Rwcm9qZWN0KTtcclxuICAgIHRlc3Rwcm9qZWN0LmFkZFRhc2soVGFzayhgRmVlZCB0aGUgZmlzaGVzYCwgMTIsJzIwMTQvMDMvMTInLHRlc3Rwcm9qZWN0LmdldElkKCkpKVxyXG4gICAgdGVzdHByb2plY3QuYWRkVGFzayhUYXNrKGBGZWVkIHRoZSBEb2dzYCwgMywnMjAyMS8wMy8wMycsdGVzdHByb2plY3QuZ2V0SWQoKSkpXHJcbiAgICB0ZXN0cHJvamVjdC5hZGRUYXNrKFRhc2soYEZlZWQgTXlzZWxmYCwgMSwnMjAxNC8wMy8xMicsdGVzdHByb2plY3QuZ2V0SWQoKSkpXHJcblxyXG59KSgpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=