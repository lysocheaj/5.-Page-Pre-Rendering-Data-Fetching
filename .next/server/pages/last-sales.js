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
exports.id = "pages/last-sales";
exports.ids = ["pages/last-sales"];
exports.modules = {

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction LastSalesPage() {\n    const { 0: sales , 1: setSales  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: isLoading , 1: setLoaing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoaing(true);\n        fetch(\"https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json\").then((response)=>response.json()\n        ).then((data)=>{\n            const transformData = [];\n            for(const key in data){\n                transformData.push({\n                    id: key,\n                    username: data[key].username,\n                    valume: data[key].valume\n                });\n            }\n            setSales(transformData);\n            setLoaing(false);\n        });\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n            lineNumber: 25,\n            columnNumber: 12\n        }, this);\n    }\n    if (!sales) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data yet.\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: sales.map((sale)=>{\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    sale.username,\n                    \" - $\",\n                    sale.valume\n                ]\n            }, sale.id, true, {\n                fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastSalesPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFFNUMsU0FBU0UsYUFBYSxHQUFHO0lBQ3ZCLE1BQU0sRUFIUixHQUdTQyxLQUFLLEdBSGQsR0FHZ0JDLFFBQVEsTUFBSUgsK0NBQVEsRUFBRTtJQUNwQyxNQUFNLEVBSlIsR0FJU0ksU0FBUyxHQUpsQixHQUlvQkMsU0FBUyxNQUFJTCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUM5Q0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RNLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQkMsS0FBSyxDQUFDLG9FQUFvRSxDQUFDLENBQ3hFQyxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxHQUFLQSxRQUFRLENBQUNDLElBQUksRUFBRTtRQUFBLENBQUMsQ0FDbkNGLElBQUksQ0FBQyxDQUFDRyxJQUFJLEdBQUs7WUFDZCxNQUFNQyxhQUFhLEdBQUcsRUFBRTtZQUN4QixJQUFLLE1BQU1DLEdBQUcsSUFBSUYsSUFBSSxDQUFFO2dCQUN0QkMsYUFBYSxDQUFDRSxJQUFJLENBQUM7b0JBQ2pCQyxFQUFFLEVBQUVGLEdBQUc7b0JBQ1BHLFFBQVEsRUFBRUwsSUFBSSxDQUFDRSxHQUFHLENBQUMsQ0FBQ0csUUFBUTtvQkFDNUJDLE1BQU0sRUFBRU4sSUFBSSxDQUFDRSxHQUFHLENBQUMsQ0FBQ0ksTUFBTTtpQkFDekIsQ0FBQyxDQUFDO2FBQ0o7WUFDRGIsUUFBUSxDQUFDUSxhQUFhLENBQUMsQ0FBQztZQUN4Qk4sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xCLENBQUMsQ0FBQztLQUNOLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFJRCxTQUFTLEVBQUU7UUFDYixxQkFBTyw4REFBQ2EsR0FBQztzQkFBQyxZQUFVOzs7OztnQkFBSSxDQUFDO0tBQzFCO0lBQ0QsSUFBSSxDQUFDZixLQUFLLEVBQUU7UUFDVixxQkFBTyw4REFBQ2UsR0FBQztzQkFBQyxjQUFZOzs7OztnQkFBSSxDQUFDO0tBQzVCO0lBRUQscUJBQ0UsOERBQUNDLElBQUU7a0JBQ0FoQixLQUFLLENBQUNpQixHQUFHLENBQUMsQ0FBQ0MsSUFBSSxHQUFLOzBCQUNuQiw4REFBQ0MsSUFBRTs7b0JBQ0FELElBQUksQ0FBQ0wsUUFBUTtvQkFBQyxNQUFJO29CQUFDSyxJQUFJLENBQUNKLE1BQU07O2VBRHhCSSxJQUFJLENBQUNOLEVBQUU7Ozs7b0JBRVgsQ0FBQztTQUNQLENBQUM7Ozs7O1lBQ0MsQ0FDTDtDQUNIO0FBRUQsaUVBQWViLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2xhc3Qtc2FsZXMuanM/MjkxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBMYXN0U2FsZXNQYWdlKCkge1xyXG4gIGNvbnN0IFtzYWxlcywgc2V0U2FsZXNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2FpbmcodHJ1ZSk7XHJcbiAgICBmZXRjaChcImh0dHBzOi8vbmV4dGpzLWNvdXJzZS01MzkyOS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvblwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zdCB0cmFuc2Zvcm1EYXRhID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgdHJhbnNmb3JtRGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IGtleSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcclxuICAgICAgICAgICAgdmFsdW1lOiBkYXRhW2tleV0udmFsdW1lLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNhbGVzKHRyYW5zZm9ybURhdGEpO1xyXG4gICAgICAgIHNldExvYWluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIH1cclxuICBpZiAoIXNhbGVzKSB7XHJcbiAgICByZXR1cm4gPHA+Tm8gZGF0YSB5ZXQuPC9wPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtzYWxlcy5tYXAoKHNhbGUpID0+IHtcclxuICAgICAgICA8bGkga2V5PXtzYWxlLmlkfT5cclxuICAgICAgICAgIHtzYWxlLnVzZXJuYW1lfSAtICR7c2FsZS52YWx1bWV9XHJcbiAgICAgICAgPC9saT47XHJcbiAgICAgIH0pfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0U2FsZXNQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXN0U2FsZXNQYWdlIiwic2FsZXMiLCJzZXRTYWxlcyIsImlzTG9hZGluZyIsInNldExvYWluZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0cmFuc2Zvcm1EYXRhIiwia2V5IiwicHVzaCIsImlkIiwidXNlcm5hbWUiLCJ2YWx1bWUiLCJwIiwidWwiLCJtYXAiLCJzYWxlIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/last-sales.js"));
module.exports = __webpack_exports__;

})();