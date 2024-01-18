(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-a"],{

/***/ "./src/mod-a.js":
/*!**********************!*\
  !*** ./src/mod-a.js ***!
  \**********************/
/*! exports provided: y, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });

const y = (m) => {
	if(m) {
		__webpack_require__.e(/*! import() */ "chunk-foo").then(__webpack_require__.bind(null, /*! ./foo.js */ "./src/foo.js")).then(mod => {
			console.log(m + mod.default)
		})
	}
}
/* harmony default export */ __webpack_exports__["default"] = (x);



/***/ })

}]);