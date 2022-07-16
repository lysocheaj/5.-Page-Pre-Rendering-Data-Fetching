"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[uid]";
exports.ids = ["pages/[uid]"];
exports.modules = {

/***/ "./pages/[uid].js":
/*!************************!*\
  !*** ./pages/[uid].js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction UserIdPage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: props.id\n    }, void 0, false, {\n        fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\[uid].js\",\n        lineNumber: 2,\n        columnNumber: 12\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserIdPage);\nasync function getServerSideProps(context) {\n    const { params  } = context;\n    const userId = params.uid;\n    return {\n        props: {\n            id: \"userid-\" + userId\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdWlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBQSxTQUFTQSxVQUFVLENBQUNDLEtBQUssRUFBRTtJQUN2QixxQkFBTyw4REFBQ0MsSUFBRTtrQkFBRUQsS0FBSyxDQUFDRSxFQUFFOzs7OztZQUFNO0NBQzdCO0FBRUQsaUVBQWVILFVBQVUsRUFBQztBQUVuQixlQUFlSSxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsTUFBTSxHQUFFLEdBQUdELE9BQU87SUFDMUIsTUFBTUUsTUFBTSxHQUFHRCxNQUFNLENBQUNFLEdBQUc7SUFFekIsT0FBTztRQUNIUCxLQUFLLEVBQUU7WUFDSEUsRUFBRSxFQUFFLFNBQVMsR0FBR0ksTUFBTTtTQUN6QjtLQUNKO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bdWlkXS5qcz83MDRhIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFVzZXJJZFBhZ2UocHJvcHMpIHtcclxuICAgIHJldHVybiA8aDE+e3Byb3BzLmlkfTwvaDE+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJJZFBhZ2U7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBjb250ZXh0O1xyXG4gICAgY29uc3QgdXNlcklkID0gcGFyYW1zLnVpZDtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBpZDogJ3VzZXJpZC0nICsgdXNlcklkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlVzZXJJZFBhZ2UiLCJwcm9wcyIsImgxIiwiaWQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicGFyYW1zIiwidXNlcklkIiwidWlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[uid].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[uid].js"));
module.exports = __webpack_exports__;

})();