/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Initialize.js":
/*!***************************!*\
  !*** ./src/Initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Initialize = /*#__PURE__*/_createClass(function Initialize() {
  _classCallCheck(this, Initialize);

  this.weather = {
    author: "The Weatherman",
    month: ["januar", "februar", "marts", "april", "maj", "juni"],
    averageTemperature: [-10, -10, -10, 12, 15, 20, 25]
  };
  var arrayLength = this.weather.month.length;

  for (var i = 0; i < 6; i++) {
    console.log(this.weather.month[i]);
  }
} // END constructor
); // END class




/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #94c0ff;\n  min-height: 100vh;\n  overflow: hidden;\n  margin: 0;\n}\n\n.sun {\n  position: absolute;\n  left: 25%;\n  transform: translate(-25%);\n  max-width: 50%;\n  opacity: 0.2;\n  z-index: -1;\n}\n.sun img {\n  width: 100%;\n  height: auto;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n/* .sun {\n  animation: rotation 30s infinite linear;\n\n} */\n@keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n.container {\n  position: absolute;\n  display: grid;\n  grid-auto-flow: column;\n  left: 50%;\n  transform: translate(-50%);\n  color: #fff;\n  bottom: 1px;\n  z-index: 100;\n}\n.container img {\n  width: 100%;\n  height: auto;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n#yearContainer {\n  position: absolute;\n  display: grid;\n  grid-auto-flow: column;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: calc(1.5em + 1.5vw);\n  color: #fff;\n  left: 50%;\n  top: calc(0.8em + 0.8vw);\n  transform: translate(-50%, -50%);\n  /*\n    div:focus {\n      background-color:#04658c;\n  }\n  */\n}\n#yearContainer div {\n  text-align: center;\n  width: calc(4em + 4vw);\n  margin-left: calc(0.1em + 0.1vw);\n  margin-right: calc(0.1em + 0.1vw);\n  border: calc(0.1em + 0.1vw) solid #fff;\n  font-weight: bold;\n  background-color: #36aad8;\n  border-radius: 10px;\n}\n#yearContainer div:hover {\n  cursor: pointer;\n}\n#yearContainer div:nth-child(1) {\n  background-color: #04658c;\n}\n\n#modalContainer {\n  position: absolute;\n  display: none;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  z-index: 101;\n  opacity: 1;\n}\n\n#dailyWeatherContainer {\n  position: absolute;\n  display: none;\n  left: 50%;\n  bottom: 1px;\n  width: 100%;\n  max-width: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 102;\n}\n\n#modalDailyWeather {\n  position: absolute;\n  display: grid;\n  grid-auto-flow: column;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  bottom: 20px;\n}\n#modalDailyWeather div {\n  height: calc(0.5em + 0.5vw);\n  width: 20px;\n  margin: calc(0.1em + 0.1vw);\n  opacity: 0;\n}\n\n#modalDailyWeatherDegrees {\n  position: absolute;\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #fff;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-auto-flow: column;\n  bottom: -20px;\n}\n#modalDailyWeatherDegrees div {\n  padding-top: calc(0.2em + 0.2vw);\n  padding-bottom: calc(0.2em + 0.2vw);\n  height: calc(0.5em + 0.5vw);\n  margin: calc(0.1em + 0.1vw);\n}\n\n#closeModal {\n  position: relative;\n  display: none;\n  opacity: 0;\n  float: right;\n  width: 30px;\n  height: 30px;\n  margin: calc(0.3em + 0.3vw);\n  z-index: 102;\n}\n#closeModal:hover {\n  cursor: pointer;\n}\n\n#block {\n  position: relative;\n  /*\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-end;\n  */\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #b4e0eb;\n  width: calc(4em + 4vw);\n  height: calc(4em + 4vw);\n  margin-left: calc(0.1em + 0.1vw);\n  margin-right: calc(0.1em + 0.1vw);\n  z-index: 0;\n}\n#block:hover {\n  cursor: pointer;\n}\n\n#temperature {\n  position: relative;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  vertical-align: bottom;\n  background-color: #36aad8;\n  width: calc(4em + 4vw);\n  margin-left: calc(0.1em + 0.1vw);\n  margin-top: calc(0.1em + 0.1vw);\n  padding-top: calc(0.1em + 0.1vw);\n  z-index: 1;\n}\n\n.month {\n  position: relative;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center;\n  vertical-align: bottom;\n  background-color: #04658c;\n  width: calc(4em + 4vw);\n  margin-left: calc(0.1em + 0.1vw);\n  margin-top: calc(0.1em + 0.1vw);\n  padding-top: calc(0.8em + 0.8vw);\n}\n\n.child {\n  width: 200px;\n  height: 20px;\n  background-color: #04658c;\n  margin: 10px;\n}\n\n/*\n@media screen and (max-width: $breakpoint-tablet) {\n\n  body{\n\n    background: url('../assets/images/imgbackground-1024.jpg') no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  }\n\n  #containerFront{\n   top: calc(24em + 24vw);\n  }\n\n  #containerBack{\n    top: calc(2em + 2vw);\n  }\n\n  #back{\n\n      margin: calc(-1em + -1vw);\n    }\n\n  .front{\n  margin: calc(-1em + -1vw);\n  }\n\n\n}\n*/", "",{"version":3,"sources":["webpack://./css/style.scss"],"names":[],"mappings":"AAKA;EACE,yBANW;EAOX,iBAAA;EACA,gBAAA;EACA,SAAA;AAJF;;AAOA;EACE,kBAAA;EACA,SAAA;EACA,0BAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;AAJF;AAKE;EACE,WAAA;EACA,YAAA;EACA,oBAAA;EACA,iBAAA;AAHJ;;AAQA;;;GAAA;AAMA;EACE;IACE,uBAAA;EAPF;EASA;IACE,yBAAA;EAPF;AACF;AAUA;EAEE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,0BAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;AATF;AAWE;EACE,WAAA;EACA,YAAA;EACA,oBAAA;EACA,iBAAA;AATJ;;AAaA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,yCA/DW;EAgEX,8BAAA;EACA,WAAA;EAEA,SAAA;EACA,wBAAA;EACA,gCAAA;EAsBF;;;;GAAA;AA5BA;AAQE;EACE,kBAAA;EACA,sBAAA;EAEA,gCAAA;EACA,iCAAA;EACA,sCAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;AAPJ;AASI;EACE,eAAA;AAPN;AAYE;EACE,yBAAA;AAVJ;;AAmBA;EACE,kBAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,YAAA;EACA,UAAA;AAhBF;;AAmBA;EACE,kBAAA;EACA,aAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,cAAA;EACA,gCAAA;EACA,YAAA;AAhBF;;AAmBA;EAEE,kBAAA;EACA,aAAA;EACA,sBAAA;EAEA,SAAA;EACA,gCAAA;EACA,YAAA;AAlBF;AAoBE;EACE,2BAAA;EACA,WAAA;EACA,2BAAA;EACH,UAAA;AAlBD;;AAuBA;EACE,kBAAA;EACA,kBAAA;EACA,yCA7IW;EA+IX,WAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;AArBF;AAuBE;EACE,gCAAA;EACA,mCAAA;EACA,2BAAA;EACA,2BAAA;AArBJ;;AAyBA;EACE,kBAAA;EACA,aAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,2BAAA;EACA,YAAA;AAtBF;AAuBE;EACE,eAAA;AArBJ;;AAyBA;EAEE,kBAAA;EACA;;;;GAAA;EAKA,yCApLW;EAqLX,yBAAA;EACA,sBAvLW;EAwLX,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,UAAA;AAvBF;AAwBE;EACE,eAAA;AAtBJ;;AA0BA;EACE,kBAAA;EACA,yCAlMW;EAmMX,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,sBAvMW;EAwMX,gCAAA;EACA,+BAAA;EACA,gCAAA;EACA,UAAA;AAvBF;;AA0BA;EACE,kBAAA;EACA,yCA/MW;EAgNX,iBAAA;EACA,yBAAA;EACA,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,sBAtNW;EAuNX,gCAAA;EACA,+BAAA;EACA,gCAAA;AAvBF;;AA2BA;EACE,YAAA;EACA,YAAA;EACA,yBAAA;EACC,YAAA;AAxBH;;AA2BA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CAAA","sourcesContent":["$body-color: #94c0ff;\r\n$breakpoint-tablet: 620px;\r\n$graphWidth: calc(4em + 4vw);\r\n$fontFamily: Arial, Helvetica, sans-serif;\r\n\r\nbody {\r\n  background-color: $body-color;\r\n  min-height: 100vh;\r\n  overflow: hidden;\r\n  margin: 0;\r\n}\r\n\r\n.sun {\r\n  position: absolute;\r\n  left: 25%;\r\n  transform: translate(-25%);\r\n  max-width: 50%;\r\n  opacity: 0.2;\r\n  z-index: -1;\r\n  img {\r\n    width: 100%;\r\n    height: auto;\r\n    -o-object-fit: cover;\r\n    object-fit: cover;\r\n  }\r\n}\r\n\r\n\r\n/* .sun {\r\n  animation: rotation 30s infinite linear;\r\n  \r\n} */\r\n\r\n\r\n@keyframes rotation {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n.container {\r\n\r\n  position: absolute;\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n  color: #fff;\r\n  bottom: 1px;\r\n  z-index: 100;\r\n  \r\n  img {\r\n    width: 100%;\r\n    height: auto;\r\n    -o-object-fit: cover;\r\n    object-fit: cover;\r\n  }\r\n}\r\n\r\n#yearContainer  {\r\n  position: absolute;\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  font-family: $fontFamily;\r\n  font-size: calc(1.5em + 1.5vw);\r\n  color: #fff;\r\n\r\n  left: 50%;\r\n  top: calc(0.8em + 0.8vw);\r\n  transform: translate(-50%, -50%);\r\n\r\n  div {\r\n    text-align: center;\r\n    width: calc(4em + 4vw);\r\n\r\n    margin-left: calc(0.1em + 0.1vw);\r\n    margin-right: calc(0.1em + 0.1vw);\r\n    border: calc(0.1em + 0.1vw) solid #fff;\r\n    font-weight: bold;\r\n    background-color: #36aad8;\r\n    border-radius: 10px;\r\n\r\n    &:hover {\r\n      cursor: pointer;\r\n     \r\n    }\r\n  }\r\n\r\n  div:nth-child(1) {\r\n    background-color: #04658c;\r\n  }\r\n/*\r\n  div:focus {\r\n    background-color:#04658c;\r\n}\r\n*/\r\n}\r\n\r\n#modalContainer {\r\n  position: absolute;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #000;\r\n  z-index: 101;\r\n  opacity:1;\r\n}\r\n\r\n#dailyWeatherContainer {\r\n  position: absolute;\r\n  display: none;\r\n  left: 50%;\r\n  bottom: 1px;\r\n  width: 100%;\r\n  max-width: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 102;\r\n}\r\n\r\n#modalDailyWeather {\r\n  \r\n  position: absolute;\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n \r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  bottom: 20px;\r\n\r\n  div {\r\n    height: calc(0.5em + 0.5vw);\r\n    width:20px;\r\n    margin: calc(0.1em + 0.1vw);\r\n opacity: 0;\r\n  }\r\n\r\n}\r\n\r\n#modalDailyWeatherDegrees {\r\n  position: absolute;\r\n  text-align: center;\r\n  font-family: $fontFamily;\r\n\r\n  color: #fff;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  bottom: -20px;\r\n\r\n  div {\r\n    padding-top: calc(0.2em + 0.2vw);\r\n    padding-bottom: calc(0.2em + 0.2vw);\r\n    height: calc(0.5em + 0.5vw);\r\n    margin: calc(0.1em + 0.1vw);\r\n  }\r\n}\r\n\r\n#closeModal {\r\n  position: relative;\r\n  display: none;\r\n  opacity: 0;\r\n  float: right;\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: calc(0.3em + 0.3vw);\r\n  z-index: 102;\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n#block {\r\n\r\n  position: relative;\r\n  /*\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: flex-end;\r\n  */\r\n  font-family: $fontFamily;\r\n  background-color: #b4e0eb;\r\n  width: $graphWidth;\r\n  height: calc(4em + 4vw);\r\n  margin-left: calc(0.1em + 0.1vw);\r\n  margin-right: calc(0.1em + 0.1vw);\r\n  z-index: 0;\r\n  &:hover {\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n#temperature {\r\n  position: relative;\r\n  font-family: $fontFamily;\r\n  text-align: center;\r\n  vertical-align: bottom;\r\n  background-color: #36aad8;\r\n  width: $graphWidth;\r\n  margin-left: calc(0.1em + 0.1vw);\r\n  margin-top: calc(0.1em + 0.1vw);\r\n  padding-top: calc(0.1em + 0.1vw);\r\n  z-index: 1;\r\n}\r\n\r\n.month {\r\n  position: relative;\r\n  font-family: $fontFamily;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  vertical-align: bottom;\r\n  background-color: #04658c;\r\n  width: $graphWidth;\r\n  margin-left: calc(0.1em + 0.1vw);\r\n  margin-top: calc(0.1em + 0.1vw);\r\n  padding-top: calc(0.8em + 0.8vw);\r\n  \r\n}\r\n\r\n.child{\r\n  width:200px;\r\n  height:20px;\r\n  background-color: #04658c;\r\n   margin:10px;\r\n}\r\n\r\n/*\r\n@media screen and (max-width: $breakpoint-tablet) {\r\n\r\n  body{\r\n\r\n    background: url('../assets/images/imgbackground-1024.jpg') no-repeat center center fixed; \r\n    -webkit-background-size: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n  }\r\n\r\n  #containerFront{\r\n   top: calc(24em + 24vw);\r\n  }\r\n\r\n  #containerBack{\r\n    top: calc(2em + 2vw);\r\n  }\r\n\r\n  #back{\r\n   \r\n      margin: calc(-1em + -1vw);\r\n    }\r\n  \r\n  .front{\r\n  margin: calc(-1em + -1vw);\r\n  }\r\n\r\n\r\n}\r\n*/\r\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initialize */ "./src/Initialize.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.scss */ "./css/style.scss");

 // **  IIFE: Immediately Invoked Function Expression  */

(function () {
  console.log("kaffe");
  var init = new _Initialize__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBQTtDQUdBOztBQUVBLENBQUMsWUFBWTtFQUNiQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0VBQ0EsSUFBSUMsSUFBSSxHQUFHLElBQUlWLG1EQUFKLEVBQVg7QUFFQyxDQUpELEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL3NyYy9Jbml0aWFsaXplLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9jc3Mvc3R5bGUuc2Nzcz9mNGZkIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215X2JvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teV9ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXlfYm9pbGVycGxhdGUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRpYWxpemUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICB0aGlzLndlYXRoZXIgPSB7XG5cbiAgICAgICAgYXV0aG9yOiBcIlRoZSBXZWF0aGVybWFuXCIsXG4gICAgICAgIG1vbnRoOiBbXCJqYW51YXJcIiwgXCJmZWJydWFyXCIsIFwibWFydHNcIiwgXCJhcHJpbFwiLCBcIm1halwiLCBcImp1bmlcIl0sXG4gICAgICAgIGF2ZXJhZ2VUZW1wZXJhdHVyZTogWy0xMCwgLTEwLCAtMTAsIDEyLCAxNSwgMjAsIDI1XSxcbiAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXJyYXlMZW5ndGg9IHRoaXMud2VhdGhlci5tb250aC5sZW5ndGg7XG5cbiAgICAgICAgZm9yKGxldCBpPSAwOyBpPDY7IGkrKyl7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndlYXRoZXIubW9udGhbaV0pO1xuXG4gICAgICAgIH1cblxuXG5cbiBcblxuICAgXG5cblxuICB9IC8vIEVORCBjb25zdHJ1Y3RvclxuXG5cbn0gLy8gRU5EIGNsYXNzXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0YzBmZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnN1biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAyNSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlKTtcXG4gIG1heC13aWR0aDogNTAlO1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgei1pbmRleDogLTE7XFxufVxcbi5zdW4gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLyogLnN1biB7XFxuICBhbmltYXRpb246IHJvdGF0aW9uIDMwcyBpbmZpbml0ZSBsaW5lYXI7XFxuXFxufSAqL1xcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvdHRvbTogMXB4O1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG4uY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbiN5ZWFyQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IGNhbGMoMS41ZW0gKyAxLjV2dyk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogY2FsYygwLjhlbSArIDAuOHZ3KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgLypcXG4gICAgZGl2OmZvY3VzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwNDY1OGM7XFxuICB9XFxuICAqL1xcbn1cXG4jeWVhckNvbnRhaW5lciBkaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IGNhbGMoNGVtICsgNHZ3KTtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDAuMWVtICsgMC4xdncpO1xcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKDAuMWVtICsgMC4xdncpO1xcbiAgYm9yZGVyOiBjYWxjKDAuMWVtICsgMC4xdncpIHNvbGlkICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNmFhZDg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4jeWVhckNvbnRhaW5lciBkaXY6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jeWVhckNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDY1OGM7XFxufVxcblxcbiNtb2RhbENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgei1pbmRleDogMTAxO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI2RhaWx5V2VhdGhlckNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbGVmdDogNTAlO1xcbiAgYm90dG9tOiAxcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAxMDI7XFxufVxcblxcbiNtb2RhbERhaWx5V2VhdGhlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm90dG9tOiAyMHB4O1xcbn1cXG4jbW9kYWxEYWlseVdlYXRoZXIgZGl2IHtcXG4gIGhlaWdodDogY2FsYygwLjVlbSArIDAuNXZ3KTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luOiBjYWxjKDAuMWVtICsgMC4xdncpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuI21vZGFsRGFpbHlXZWF0aGVyRGVncmVlcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGJvdHRvbTogLTIwcHg7XFxufVxcbiNtb2RhbERhaWx5V2VhdGhlckRlZ3JlZXMgZGl2IHtcXG4gIHBhZGRpbmctdG9wOiBjYWxjKDAuMmVtICsgMC4ydncpO1xcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoMC4yZW0gKyAwLjJ2dyk7XFxuICBoZWlnaHQ6IGNhbGMoMC41ZW0gKyAwLjV2dyk7XFxuICBtYXJnaW46IGNhbGMoMC4xZW0gKyAwLjF2dyk7XFxufVxcblxcbiNjbG9zZU1vZGFsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IGNhbGMoMC4zZW0gKyAwLjN2dyk7XFxuICB6LWluZGV4OiAxMDI7XFxufVxcbiNjbG9zZU1vZGFsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Jsb2NrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICovXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGUwZWI7XFxuICB3aWR0aDogY2FsYyg0ZW0gKyA0dncpO1xcbiAgaGVpZ2h0OiBjYWxjKDRlbSArIDR2dyk7XFxuICBtYXJnaW4tbGVmdDogY2FsYygwLjFlbSArIDAuMXZ3KTtcXG4gIG1hcmdpbi1yaWdodDogY2FsYygwLjFlbSArIDAuMXZ3KTtcXG4gIHotaW5kZXg6IDA7XFxufVxcbiNibG9jazpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0ZW1wZXJhdHVyZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzZhYWQ4O1xcbiAgd2lkdGg6IGNhbGMoNGVtICsgNHZ3KTtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDAuMWVtICsgMC4xdncpO1xcbiAgbWFyZ2luLXRvcDogY2FsYygwLjFlbSArIDAuMXZ3KTtcXG4gIHBhZGRpbmctdG9wOiBjYWxjKDAuMWVtICsgMC4xdncpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLm1vbnRoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDY1OGM7XFxuICB3aWR0aDogY2FsYyg0ZW0gKyA0dncpO1xcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMC4xZW0gKyAwLjF2dyk7XFxuICBtYXJnaW4tdG9wOiBjYWxjKDAuMWVtICsgMC4xdncpO1xcbiAgcGFkZGluZy10b3A6IGNhbGMoMC44ZW0gKyAwLjh2dyk7XFxufVxcblxcbi5jaGlsZCB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ2NThjO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4vKlxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXRhYmxldCkge1xcblxcbiAgYm9keXtcXG5cXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2ltZ2JhY2tncm91bmQtMTAyNC5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgfVxcblxcbiAgI2NvbnRhaW5lckZyb250e1xcbiAgIHRvcDogY2FsYygyNGVtICsgMjR2dyk7XFxuICB9XFxuXFxuICAjY29udGFpbmVyQmFja3tcXG4gICAgdG9wOiBjYWxjKDJlbSArIDJ2dyk7XFxuICB9XFxuXFxuICAjYmFja3tcXG5cXG4gICAgICBtYXJnaW46IGNhbGMoLTFlbSArIC0xdncpO1xcbiAgICB9XFxuXFxuICAuZnJvbnR7XFxuICBtYXJnaW46IGNhbGMoLTFlbSArIC0xdncpO1xcbiAgfVxcblxcblxcbn1cXG4qL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Nzcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0UseUJBTlc7RUFPWCxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFKRjtBQUtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBUUE7OztHQUFBO0FBTUE7RUFDRTtJQUNFLHVCQUFBO0VBUEY7RUFTQTtJQUNFLHlCQUFBO0VBUEY7QUFDRjtBQVVBO0VBRUUsa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFURjtBQVdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBVEo7O0FBYUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQS9EVztFQWdFWCw4QkFBQTtFQUNBLFdBQUE7RUFFQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQXNCRjs7OztHQUFBO0FBNUJBO0FBUUU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBUEo7QUFTSTtFQUNFLGVBQUE7QUFQTjtBQVlFO0VBQ0UseUJBQUE7QUFWSjs7QUFtQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFoQkY7O0FBbUJBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFFRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUFsQkY7QUFvQkU7RUFDRSwyQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNILFVBQUE7QUFsQkQ7O0FBdUJBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQTdJVztFQStJWCxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQXJCRjtBQXVCRTtFQUNFLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBckJKOztBQXlCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUF0QkY7QUF1QkU7RUFDRSxlQUFBO0FBckJKOztBQXlCQTtFQUVFLGtCQUFBO0VBQ0E7Ozs7R0FBQTtFQUtBLHlDQXBMVztFQXFMWCx5QkFBQTtFQUNBLHNCQXZMVztFQXdMWCx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0FBdkJGO0FBd0JFO0VBQ0UsZUFBQTtBQXRCSjs7QUEwQkE7RUFDRSxrQkFBQTtFQUNBLHlDQWxNVztFQW1NWCxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkF2TVc7RUF3TVgsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQXZCRjs7QUEwQkE7RUFDRSxrQkFBQTtFQUNBLHlDQS9NVztFQWdOWCxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBdE5XO0VBdU5YLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQXZCRjs7QUEyQkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0MsWUFBQTtBQXhCSDs7QUEyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYm9keS1jb2xvcjogIzk0YzBmZjtcXHJcXG4kYnJlYWtwb2ludC10YWJsZXQ6IDYyMHB4O1xcclxcbiRncmFwaFdpZHRoOiBjYWxjKDRlbSArIDR2dyk7XFxyXFxuJGZvbnRGYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1jb2xvcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAyNSU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlKTtcXHJcXG4gIG1heC13aWR0aDogNTAlO1xcclxcbiAgb3BhY2l0eTogMC4yO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIC5zdW4ge1xcclxcbiAgYW5pbWF0aW9uOiByb3RhdGlvbiAzMHMgaW5maW5pdGUgbGluZWFyO1xcclxcbiAgXFxyXFxufSAqL1xcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvdHRvbTogMXB4O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgXFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiN5ZWFyQ29udGFpbmVyICB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygxLjVlbSArIDEuNXZ3KTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcblxcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiBjYWxjKDAuOGVtICsgMC44dncpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFxyXFxuICBkaXYge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDRlbSArIDR2dyk7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDAuMWVtICsgMC4xdncpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMC4xZW0gKyAwLjF2dyk7XFxyXFxuICAgIGJvcmRlcjogY2FsYygwLjFlbSArIDAuMXZ3KSBzb2xpZCAjZmZmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2YWFkODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ2NThjO1xcclxcbiAgfVxcclxcbi8qXFxyXFxuICBkaXY6Zm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwNDY1OGM7XFxyXFxufVxcclxcbiovXFxyXFxufVxcclxcblxcclxcbiNtb2RhbENvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgei1pbmRleDogMTAxO1xcclxcbiAgb3BhY2l0eToxO1xcclxcbn1cXHJcXG5cXHJcXG4jZGFpbHlXZWF0aGVyQ29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBib3R0b206IDFweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHotaW5kZXg6IDEwMjtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsRGFpbHlXZWF0aGVyIHtcXHJcXG4gIFxcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuIFxcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3R0b206IDIwcHg7XFxyXFxuXFxyXFxuICBkaXYge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMC41ZW0gKyAwLjV2dyk7XFxyXFxuICAgIHdpZHRoOjIwcHg7XFxyXFxuICAgIG1hcmdpbjogY2FsYygwLjFlbSArIDAuMXZ3KTtcXHJcXG4gb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsRGFpbHlXZWF0aGVyRGVncmVlcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICBib3R0b206IC0yMHB4O1xcclxcblxcclxcbiAgZGl2IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IGNhbGMoMC4yZW0gKyAwLjJ2dyk7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuMmVtICsgMC4ydncpO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMC41ZW0gKyAwLjV2dyk7XFxyXFxuICAgIG1hcmdpbjogY2FsYygwLjFlbSArIDAuMXZ3KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlTW9kYWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG1hcmdpbjogY2FsYygwLjNlbSArIDAuM3Z3KTtcXHJcXG4gIHotaW5kZXg6IDEwMjtcXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNibG9jayB7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAvKlxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAqL1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0ZTBlYjtcXHJcXG4gIHdpZHRoOiAkZ3JhcGhXaWR0aDtcXHJcXG4gIGhlaWdodDogY2FsYyg0ZW0gKyA0dncpO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMC4xZW0gKyAwLjF2dyk7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoMC4xZW0gKyAwLjF2dyk7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI3RlbXBlcmF0dXJlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzZhYWQ4O1xcclxcbiAgd2lkdGg6ICRncmFwaFdpZHRoO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMC4xZW0gKyAwLjF2dyk7XFxyXFxuICBtYXJnaW4tdG9wOiBjYWxjKDAuMWVtICsgMC4xdncpO1xcclxcbiAgcGFkZGluZy10b3A6IGNhbGMoMC4xZW0gKyAwLjF2dyk7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9udGgge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDY1OGM7XFxyXFxuICB3aWR0aDogJGdyYXBoV2lkdGg7XFxyXFxuICBtYXJnaW4tbGVmdDogY2FsYygwLjFlbSArIDAuMXZ3KTtcXHJcXG4gIG1hcmdpbi10b3A6IGNhbGMoMC4xZW0gKyAwLjF2dyk7XFxyXFxuICBwYWRkaW5nLXRvcDogY2FsYygwLjhlbSArIDAuOHZ3KTtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uY2hpbGR7XFxyXFxuICB3aWR0aDoyMDBweDtcXHJcXG4gIGhlaWdodDoyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0NjU4YztcXHJcXG4gICBtYXJnaW46MTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC10YWJsZXQpIHtcXHJcXG5cXHJcXG4gIGJvZHl7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL2ltYWdlcy9pbWdiYWNrZ3JvdW5kLTEwMjQuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWluZXJGcm9udHtcXHJcXG4gICB0b3A6IGNhbGMoMjRlbSArIDI0dncpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhaW5lckJhY2t7XFxyXFxuICAgIHRvcDogY2FsYygyZW0gKyAydncpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2JhY2t7XFxyXFxuICAgXFxyXFxuICAgICAgbWFyZ2luOiBjYWxjKC0xZW0gKyAtMXZ3KTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAuZnJvbnR7XFxyXFxuICBtYXJnaW46IGNhbGMoLTFlbSArIC0xdncpO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbn1cXHJcXG4qL1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBJbml0aWFsaXplIGZyb20gXCIuL0luaXRpYWxpemVcIjtcbmltcG9ydCBcIi4uL2Nzcy9zdHlsZS5zY3NzXCI7XG5cbi8vICoqICBJSUZFOiBJbW1lZGlhdGVseSBJbnZva2VkIEZ1bmN0aW9uIEV4cHJlc3Npb24gICovXG5cbihmdW5jdGlvbiAoKSB7XG5jb25zb2xlLmxvZyhcImthZmZlXCIpO1xubGV0IGluaXQgPSBuZXcgSW5pdGlhbGl6ZSgpO1xuXG59KSgpO1xuIl0sIm5hbWVzIjpbIkluaXRpYWxpemUiLCJ3ZWF0aGVyIiwiYXV0aG9yIiwibW9udGgiLCJhdmVyYWdlVGVtcGVyYXR1cmUiLCJhcnJheUxlbmd0aCIsImxlbmd0aCIsImkiLCJjb25zb2xlIiwibG9nIiwiaW5pdCJdLCJzb3VyY2VSb290IjoiIn0=