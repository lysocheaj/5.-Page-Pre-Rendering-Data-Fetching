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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction LastSalesPage() {\n    const { 0: sales , 1: setSales  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // const [isLoading, setLoaing] = useState(false);\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data) {\n            const transformData = [];\n            for(const key in data){\n                transformData.push({\n                    id: key,\n                    username: data[key].username,\n                    valume: data[key].valume\n                });\n            }\n            setSales(transformData);\n        }\n    }, [\n        data\n    ]);\n    // useEffect(() => {\n    //   setLoaing(true);\n    //   fetch(\"https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json\")\n    //     .then((response) => response.json())\n    //     .then((data) => {\n    //       const transformData = [];\n    //       for (const key in data) {\n    //         transformData.push({\n    //           id: key,\n    //           username: data[key].username,\n    //           valume: data[key].valume,\n    //         });\n    //       }\n    //       setSales(transformData);\n    //       setLoaing(false);\n    //     });\n    // }, []);\n    // if (isLoading) {\n    //   return <p>Loading...</p>;\n    // }\n    // if (!sales) {\n    //   return <p>No data yet.</p>;\n    // }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Failed to load.\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n            lineNumber: 52,\n            columnNumber: 12\n        }, this);\n    }\n    if (!data || !sales) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data yet.\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n            lineNumber: 56,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: data.map((sale)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    sale.username,\n                    \" - $\",\n                    sale.valume\n                ]\n            }, sale.id, true, {\n                fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastSalesPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBQ25CO0FBRXpCLFNBQVNHLGFBQWEsR0FBRztJQUN2QixNQUFNLEVBSlIsR0FJU0MsS0FBSyxHQUpkLEdBSWdCQyxRQUFRLE1BQUlKLCtDQUFRLEVBQUU7SUFDcEMsa0RBQWtEO0lBRWxELE1BQU0sRUFBRUssSUFBSSxHQUFFQyxLQUFLLEdBQUUsR0FBR0wsK0NBQU0sQ0FDNUIsb0VBQW9FLENBQ3JFO0lBRURGLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUlNLElBQUksRUFBRTtZQUNSLE1BQU1FLGFBQWEsR0FBRyxFQUFFO1lBQ3hCLElBQUssTUFBTUMsR0FBRyxJQUFJSCxJQUFJLENBQUU7Z0JBQ3RCRSxhQUFhLENBQUNFLElBQUksQ0FBQztvQkFDakJDLEVBQUUsRUFBRUYsR0FBRztvQkFDUEcsUUFBUSxFQUFFTixJQUFJLENBQUNHLEdBQUcsQ0FBQyxDQUFDRyxRQUFRO29CQUM1QkMsTUFBTSxFQUFFUCxJQUFJLENBQUNHLEdBQUcsQ0FBQyxDQUFDSSxNQUFNO2lCQUN6QixDQUFDLENBQUM7YUFDSjtZQUNEUixRQUFRLENBQUNHLGFBQWEsQ0FBQyxDQUFDO1NBQ3pCO0tBQ0YsRUFBRTtRQUFDRixJQUFJO0tBQUMsQ0FBQyxDQUFDO0lBRVgsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixnRkFBZ0Y7SUFDaEYsMkNBQTJDO0lBQzNDLHdCQUF3QjtJQUN4QixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsMENBQTBDO0lBQzFDLHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsVUFBVTtJQUNWLGlDQUFpQztJQUNqQywwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLFVBQVU7SUFFVixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLElBQUk7SUFDSixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLElBQUk7SUFFSixJQUFJQyxLQUFLLEVBQUU7UUFDVCxxQkFBTyw4REFBQ08sR0FBQztzQkFBQyxpQkFBZTs7Ozs7Z0JBQUksQ0FBQztLQUMvQjtJQUVELElBQUksQ0FBQ1IsSUFBSSxJQUFJLENBQUNGLEtBQUssRUFBRTtRQUNuQixxQkFBTyw4REFBQ1UsR0FBQztzQkFBQyxjQUFZOzs7OztnQkFBSSxDQUFDO0tBQzVCO0lBRUQscUJBQ0UsOERBQUNDLElBQUU7a0JBQ0FULElBQUksQ0FBQ1UsR0FBRyxDQUFDLENBQUNDLElBQUksaUJBQ2IsOERBQUNDLElBQUU7O29CQUNBRCxJQUFJLENBQUNMLFFBQVE7b0JBQUMsTUFBSTtvQkFBQ0ssSUFBSSxDQUFDSixNQUFNOztlQUR4QkksSUFBSSxDQUFDTixFQUFFOzs7O29CQUVYO1FBQ04sQ0FBQzs7Ozs7WUFDQyxDQUNMO0NBQ0g7QUFFRCxpRUFBZVIsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbGFzdC1zYWxlcy5qcz8yOTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcblxyXG5mdW5jdGlvbiBMYXN0U2FsZXNQYWdlKCkge1xyXG4gIGNvbnN0IFtzYWxlcywgc2V0U2FsZXNdID0gdXNlU3RhdGUoKTtcclxuICAvLyBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBcImh0dHBzOi8vbmV4dGpzLWNvdXJzZS01MzkyOS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvblwiXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnN0IHRyYW5zZm9ybURhdGEgPSBbXTtcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgIHRyYW5zZm9ybURhdGEucHVzaCh7XHJcbiAgICAgICAgICBpZDoga2V5LFxyXG4gICAgICAgICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcclxuICAgICAgICAgIHZhbHVtZTogZGF0YVtrZXldLnZhbHVtZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1EYXRhKTtcclxuICAgIH1cclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgc2V0TG9haW5nKHRydWUpO1xyXG4gIC8vICAgZmV0Y2goXCJodHRwczovL25leHRqcy1jb3Vyc2UtNTM5MjktZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb25cIilcclxuICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgLy8gICAgICAgY29uc3QgdHJhbnNmb3JtRGF0YSA9IFtdO1xyXG4gIC8vICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAvLyAgICAgICAgIHRyYW5zZm9ybURhdGEucHVzaCh7XHJcbiAgLy8gICAgICAgICAgIGlkOiBrZXksXHJcbiAgLy8gICAgICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXHJcbiAgLy8gICAgICAgICAgIHZhbHVtZTogZGF0YVtrZXldLnZhbHVtZSxcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1EYXRhKTtcclxuICAvLyAgICAgICBzZXRMb2FpbmcoZmFsc2UpO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIC8vIGlmIChpc0xvYWRpbmcpIHtcclxuICAvLyAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICAvLyB9XHJcbiAgLy8gaWYgKCFzYWxlcykge1xyXG4gIC8vICAgcmV0dXJuIDxwPk5vIGRhdGEgeWV0LjwvcD47XHJcbiAgLy8gfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8cD5GYWlsZWQgdG8gbG9hZC48L3A+O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFkYXRhIHx8ICFzYWxlcykge1xyXG4gICAgcmV0dXJuIDxwPk5vIGRhdGEgeWV0LjwvcD47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsPlxyXG4gICAgICB7ZGF0YS5tYXAoKHNhbGUpID0+IChcclxuICAgICAgICA8bGkga2V5PXtzYWxlLmlkfT5cclxuICAgICAgICAgIHtzYWxlLnVzZXJuYW1lfSAtICR7c2FsZS52YWx1bWV9XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhc3RTYWxlc1BhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNXUiIsIkxhc3RTYWxlc1BhZ2UiLCJzYWxlcyIsInNldFNhbGVzIiwiZGF0YSIsImVycm9yIiwidHJhbnNmb3JtRGF0YSIsImtleSIsInB1c2giLCJpZCIsInVzZXJuYW1lIiwidmFsdW1lIiwicCIsInVsIiwibWFwIiwic2FsZSIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

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

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

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