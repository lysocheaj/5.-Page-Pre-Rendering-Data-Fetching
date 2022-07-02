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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction HomePage(props) {\n    const { products  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: product.title\n            }, product.id, false, {\n                fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps() {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"data\", \"dummy-data.json\");\n    const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readFile(filePath);\n    const data = JSON.parse(jsonData);\n    if (!data) {\n        return {\n            notFound: true\n        };\n    }\n    return {\n        props: {\n            products: data.products\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDTDtBQUV4QixTQUFTRSxRQUFRLENBQUNDLEtBQUssRUFBRTtJQUN2QixNQUFNLEVBQUVDLFFBQVEsR0FBRSxHQUFHRCxLQUFLO0lBRTFCLHFCQUNFLDhEQUFDRSxJQUFFO2tCQUNBRCxRQUFRLENBQUNFLEdBQUcsQ0FBQyxDQUFDQyxPQUFPLGlCQUNwQiw4REFBQ0MsSUFBRTswQkFBbUJELE9BQU8sQ0FBQ0UsS0FBSztlQUExQkYsT0FBTyxDQUFDRyxFQUFFOzs7O29CQUFzQjtRQUMxQyxDQUFDOzs7OztZQUNDLENBQ0w7Q0FDSDtBQUVNLGVBQWVDLGNBQWMsR0FBRztJQUNyQyxNQUFNQyxRQUFRLEdBQUdYLGdEQUFTLENBQUNhLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixDQUFDO0lBQ3BFLE1BQU1DLFFBQVEsR0FBRyxNQUFNaEIsMkRBQVcsQ0FBQ1ksUUFBUSxDQUFDO0lBQzVDLE1BQU1NLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNKLFFBQVEsQ0FBQztJQUVqQyxJQUFJLENBQUNFLElBQUksRUFBRTtRQUNULE9BQU87WUFDTEcsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDO0tBQ0g7SUFFRCxPQUFPO1FBQ0xsQixLQUFLLEVBQUU7WUFDTEMsUUFBUSxFQUFFYyxJQUFJLENBQUNkLFFBQVE7U0FDeEI7S0FDRixDQUFDO0NBQ0g7QUFFRCxpRUFBZUYsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzL3Byb21pc2VzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xuICBjb25zdCB7IHByb2R1Y3RzIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgPGxpIGtleT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QudGl0bGV9PC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIsIFwiZHVtbXktZGF0YS5qc29uXCIpO1xuICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoKTtcbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoanNvbkRhdGEpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdHM6IGRhdGEucHJvZHVjdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiSG9tZVBhZ2UiLCJwcm9wcyIsInByb2R1Y3RzIiwidWwiLCJtYXAiLCJwcm9kdWN0IiwibGkiLCJ0aXRsZSIsImlkIiwiZ2V0U3RhdGljUHJvcHMiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwianNvbkRhdGEiLCJyZWFkRmlsZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJub3RGb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();