(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entry"],{

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/*! exports provided: mod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod", function() { return mod; });
/* harmony import */ var _share_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share.js */"./src/share.js");


const mod = 'mod-a' + _share_js__WEBPACK_IMPORTED_MODULE_0__["default"]

/***/ }),

/***/ "./src/b.js":
/*!******************!*\
  !*** ./src/b.js ***!
  \******************/
/*! exports provided: mod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod", function() { return mod; });
/* harmony import */ var _share_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share.js */"./src/share.js");


const mod = 'mod-b' + _share_js__WEBPACK_IMPORTED_MODULE_0__["default"]

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */"./src/a.js");
/* harmony import */ var _b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b.js */"./src/b.js");



function hello(msg) {
	console.log('hello msg', msg)
	console.log('mod-a = ', _a_js__WEBPACK_IMPORTED_MODULE_0__["mod"])
	console.log('mod-b = ', _b_js__WEBPACK_IMPORTED_MODULE_1__["mod"])
}

hello('111')


/***/ })

},[["./src/entry.js","share","entry"]]]);