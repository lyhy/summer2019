/*! For license information please see kiwi.2c4505ac0d78775943d4.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/components/heading/heading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _heading_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.scss */ "./src/components/heading/heading.scss");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\n\n\nvar Heading = /*#__PURE__*/function () {\n  function Heading() {\n    _classCallCheck(this, Heading);\n  }\n\n  _createClass(Heading, [{\n    key: "render",\n    value: function render(pageName) {\n      var h1 = document.createElement(\'h1\');\n      var body = document.querySelector(\'body\');\n      h1.innerHTML = \'Webpack is awesome, this is "\' + pageName + \'" page\';\n      body.appendChild(h1);\n    }\n  }]);\n\n  return Heading;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n\n//# sourceURL=webpack://udemy_webpack_from_beginner_to_advanced/./src/components/heading/heading.js?')},"./src/components/kiwi-image/kiwi-image.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _kiwi_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kiwi.jpeg */ "./src/components/kiwi-image/kiwi.jpeg");\n/* harmony import */ var _kiwi_image_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kiwi-image.scss */ "./src/components/kiwi-image/kiwi-image.scss");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\n\n\n\nvar KiwiImage = /*#__PURE__*/function () {\n  function KiwiImage() {\n    _classCallCheck(this, KiwiImage);\n  }\n\n  _createClass(KiwiImage, [{\n    key: "render",\n    value: function render() {\n      var img = document.createElement(\'img\');\n      img.src = _kiwi_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n      img.alt = \'Kiwi\';\n      img.classList.add(\'kiwi-image\');\n      var body = document.querySelector(\'body\');\n      body.appendChild(img);\n    }\n  }]);\n\n  return KiwiImage;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KiwiImage);\n\n//# sourceURL=webpack://udemy_webpack_from_beginner_to_advanced/./src/components/kiwi-image/kiwi-image.js?')},"./src/kiwi.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/heading/heading.js */ "./src/components/heading/heading.js");\n/* harmony import */ var _components_kiwi_image_kiwi_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/kiwi-image/kiwi-image */ "./src/components/kiwi-image/kiwi-image.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n // import _ from \'lodash\'\n\n\nvar heading = new _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_0__["default"]();\nheading.render(\'kiwi\');\nvar kiwiImage = new _components_kiwi_image_kiwi_image__WEBPACK_IMPORTED_MODULE_1__["default"]();\nconsole.log(\'kiwi image render\');\nkiwiImage.render();\n\n//# sourceURL=webpack://udemy_webpack_from_beginner_to_advanced/./src/kiwi.js?')},"./src/components/heading/heading.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://udemy_webpack_from_beginner_to_advanced/./src/components/heading/heading.scss?")},"./src/components/kiwi-image/kiwi-image.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://udemy_webpack_from_beginner_to_advanced/./src/components/kiwi-image/kiwi-image.scss?")},"./src/components/kiwi-image/kiwi.jpeg":(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "23de234a71129d9c860b.jpeg";\n\n//# sourceURL=webpack://udemy_webpack_from_beginner_to_advanced/./src/components/kiwi-image/kiwi.jpeg?')}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var r=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.loaded=!0,r.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,_,r,n)=>{if(!_){var i=1/0;for(t=0;t<deferred.length;t++){for(var[_,r,n]=deferred[t],a=!0,o=0;o<_.length;o++)(!1&n||i>=n)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](_[o])))?_.splice(o--,1):(a=!1,n<i&&(i=n));if(a){deferred.splice(t--,1);var c=r();void 0!==c&&(e=c)}}return e}n=n||0;for(var t=deferred.length;t>0&&deferred[t-1][2]>n;t--)deferred[t]=deferred[t-1];deferred[t]=[_,r,n]},__webpack_require__.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(_,{a:_}),_},__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),__webpack_require__.p="/static/",(()=>{var e={kiwi:0};__webpack_require__.O.j=_=>0===e[_];var _=(_,r)=>{var n,i,[a,o,c]=r,t=0;if(a.some((_=>0!==e[_]))){for(n in o)__webpack_require__.o(o,n)&&(__webpack_require__.m[n]=o[n]);if(c)var s=c(__webpack_require__)}for(_&&_(r);t<a.length;t++)i=a[t],__webpack_require__.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return __webpack_require__.O(s)},r=self.webpackChunkudemy_webpack_from_beginner_to_advanced=self.webpackChunkudemy_webpack_from_beginner_to_advanced||[];r.forEach(_.bind(null,0)),r.push=_.bind(null,r.push.bind(r))})();var __webpack_exports__=__webpack_require__.O(void 0,["vendors-node_modules_react_index_js"],(()=>__webpack_require__("./src/kiwi.js")));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();