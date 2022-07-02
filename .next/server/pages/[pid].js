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
exports.id = "pages/[pid]";
exports.ids = ["pages/[pid]"];
exports.modules = {

/***/ "./pages/[pid].js":
/*!************************!*\
  !*** ./pages/[pid].js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ProductDetailPage(props) {\n    const { loadedProduct  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: loadedProduct.id\n            }, void 0, false, {\n                fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\[pid].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: loadedProduct.description\n            }, void 0, false, {\n                fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\[pid].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\[pid].js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps(context) {\n    const { params  } = context;\n    const productId = params.pid;\n    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"data\", \"dummy-data.json\");\n    const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_3___default().readFile(filePath);\n    const data = JSON.parse(jsonData);\n    const product1 = data.products.find((product)=>product.id === productId\n    );\n    return {\n        props: {\n            loadedProduct: product1\n        }\n    };\n}\nasync function getStaticPaths() {\n    return {\n        paths: [\n            {\n                params: {\n                    pid: \"p1\"\n                }\n            },\n            {\n                params: {\n                    pid: \"p2\"\n                }\n            },\n            {\n                params: {\n                    pid: \"p3\"\n                }\n            }, \n        ],\n        fallback: false\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetailPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bcGlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQ1Q7QUFDSztBQUU3QixTQUFTRyxpQkFBaUIsQ0FBQ0MsS0FBSyxFQUFFO0lBQ2hDLE1BQU0sRUFBRUMsYUFBYSxHQUFFLEdBQUdELEtBQUs7SUFDL0IscUJBQ0UsOERBQUNKLDJDQUFROzswQkFDUCw4REFBQ00sSUFBRTswQkFBRUQsYUFBYSxDQUFDRSxFQUFFOzs7OztvQkFBTTswQkFDM0IsOERBQUNDLEtBQUc7MEJBQUVILGFBQWEsQ0FBQ0ksV0FBVzs7Ozs7b0JBQU87Ozs7OztZQUM3QixDQUNYO0NBQ0g7QUFFTSxlQUFlQyxjQUFjLENBQUNDLE9BQU8sRUFBRTtJQUM1QyxNQUFNLEVBQUVDLE1BQU0sR0FBRSxHQUFHRCxPQUFPO0lBQzFCLE1BQU1FLFNBQVMsR0FBR0QsTUFBTSxDQUFDRSxHQUFHO0lBRTVCLE1BQU1DLFFBQVEsR0FBR2QsZ0RBQVMsQ0FBQ2dCLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixDQUFDO0lBQ3BFLE1BQU1DLFFBQVEsR0FBRyxNQUFNakIsMkRBQVcsQ0FBQ2EsUUFBUSxDQUFDO0lBQzVDLE1BQU1NLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNKLFFBQVEsQ0FBQztJQUVqQyxNQUFNSyxRQUFPLEdBQUdILElBQUksQ0FBQ0ksUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0YsT0FBTyxHQUFLQSxPQUFPLENBQUNqQixFQUFFLEtBQUtNLFNBQVM7SUFBQSxDQUFDO0lBRXpFLE9BQU87UUFDTFQsS0FBSyxFQUFFO1lBQ0xDLGFBQWEsRUFBRW1CLFFBQU87U0FDdkI7S0FDRixDQUFDO0NBQ0g7QUFFTSxlQUFlRyxjQUFjLEdBQUc7SUFDckMsT0FBTztRQUNMQyxLQUFLLEVBQUU7WUFDTDtnQkFBRWhCLE1BQU0sRUFBRTtvQkFBRUUsR0FBRyxFQUFFLElBQUk7aUJBQUU7YUFBRTtZQUN6QjtnQkFBRUYsTUFBTSxFQUFFO29CQUFFRSxHQUFHLEVBQUUsSUFBSTtpQkFBRTthQUFFO1lBQ3pCO2dCQUFFRixNQUFNLEVBQUU7b0JBQUVFLEdBQUcsRUFBRSxJQUFJO2lCQUFFO2FBQUU7U0FDMUI7UUFDRGUsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztDQUNIO0FBRUQsaUVBQWUxQixpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL1twaWRdLmpzPzRiZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBmcyBmcm9tICdmcy9wcm9taXNlcyc7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0RGV0YWlsUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IHsgbG9hZGVkUHJvZHVjdCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGgxPntsb2FkZWRQcm9kdWN0LmlkfTwvaDE+XHJcbiAgICAgIDxkaXY+e2xvYWRlZFByb2R1Y3QuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBwYXJhbXMgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgcHJvZHVjdElkID0gcGFyYW1zLnBpZDtcclxuXHJcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIsIFwiZHVtbXktZGF0YS5qc29uXCIpO1xyXG4gIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgpO1xyXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb25EYXRhKTtcclxuXHJcbiAgY29uc3QgcHJvZHVjdCA9IGRhdGEucHJvZHVjdHMuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gcHJvZHVjdElkKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGxvYWRlZFByb2R1Y3Q6IHByb2R1Y3QsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IFtcclxuICAgICAgeyBwYXJhbXM6IHsgcGlkOiBcInAxXCIgfSB9LFxyXG4gICAgICB7IHBhcmFtczogeyBwaWQ6IFwicDJcIiB9IH0sXHJcbiAgICAgIHsgcGFyYW1zOiB7IHBpZDogXCJwM1wiIH0gfSxcclxuICAgIF0sXHJcbiAgICBmYWxsYmFjazogZmFsc2VcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsUGFnZTtcclxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwicGF0aCIsImZzIiwiUHJvZHVjdERldGFpbFBhZ2UiLCJwcm9wcyIsImxvYWRlZFByb2R1Y3QiLCJoMSIsImlkIiwiZGl2IiwiZGVzY3JpcHRpb24iLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJwcm9kdWN0SWQiLCJwaWQiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwianNvbkRhdGEiLCJyZWFkRmlsZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJmaW5kIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImZhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[pid].js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/[pid].js"));
module.exports = __webpack_exports__;

})();