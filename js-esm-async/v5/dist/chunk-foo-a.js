"use strict";
(self["webpackChunkjs_esm_async"] = self["webpackChunkjs_esm_async"] || []).push([["chunk-foo-a"],{

/***/ "./src/foo.js":
/*!********************!*\
  !*** ./src/foo.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('foo');


/***/ }),

/***/ "./src/mod-a.js":
/*!**********************!*\
  !*** ./src/mod-a.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   y: () => (/* binding */ y)
/* harmony export */ });

const y = (m) => {
	if(m) {
		Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./foo.js */ "./src/foo.js")).then(mod => {
			console.log(m + mod.default)
		})
	}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x);



/***/ })

}]);