"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/last-sales",{

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\nvar _s = $RefreshSig$();\nfunction LastSalesPage() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), sales = ref[0], setSales = ref[1];\n    // const [isLoading, setLoaing] = useState(false);\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json\"), data = ref1.data, error = ref1.error;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var transformData = [];\n        for(var key in data){\n            transformData.push({\n                id: key,\n                username: data[key].username,\n                valume: data[key].valume\n            });\n        }\n    });\n    // useEffect(() => {\n    //   setLoaing(true);\n    //   fetch(\"https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json\")\n    //     .then((response) => response.json())\n    //     .then((data) => {\n    //       const transformData = [];\n    //       for (const key in data) {\n    //         transformData.push({\n    //           id: key,\n    //           username: data[key].username,\n    //           valume: data[key].valume,\n    //         });\n    //       }\n    //       setSales(transformData);\n    //       setLoaing(false);\n    //     });\n    // }, []);\n    // if (isLoading) {\n    //   return <p>Loading...</p>;\n    // }\n    // if (!sales) {\n    //   return <p>No data yet.</p>;\n    // }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Failed to load.\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n            lineNumber: 49,\n            columnNumber: 12\n        }, this);\n    }\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data yet.\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n            lineNumber: 53,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: data.map(function(sale) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    sale.username,\n                    \" - $\",\n                    sale.valume\n                ]\n            }, sale.id, true, {\n                fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(LastSalesPage, \"H1cfh/soZjIl5eFUUw26qft2NFs=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = LastSalesPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\nvar _c;\n$RefreshReg$(_c, \"LastSalesPage\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQTRDO0FBQ25COztBQUV6QixTQUFTRyxhQUFhLEdBQUc7OztJQUN2QixJQUEwQkYsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBSnRDLEtBSWMsR0FBY0EsR0FBVSxHQUF4QixFQUpkLFFBSXdCLEdBQUlBLEdBQVUsR0FBZDtJQUN0QixrREFBa0Q7SUFFbEQsSUFBd0JDLElBRXZCLEdBRnVCQSwrQ0FBTSxDQUM1QixvRUFBb0UsQ0FDckUsRUFGT0ksSUFBSSxHQUFZSixJQUV2QixDQUZPSSxJQUFJLEVBQUVDLEtBQUssR0FBS0wsSUFFdkIsQ0FGYUssS0FBSztJQUluQlAsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTVEsYUFBYSxHQUFHLEVBQUU7UUFDeEIsSUFBSyxJQUFNQyxHQUFHLElBQUlILElBQUksQ0FBRTtZQUN0QkUsYUFBYSxDQUFDRSxJQUFJLENBQUM7Z0JBQ2pCQyxFQUFFLEVBQUVGLEdBQUc7Z0JBQ1BHLFFBQVEsRUFBRU4sSUFBSSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0csUUFBUTtnQkFDNUJDLE1BQU0sRUFBRVAsSUFBSSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0ksTUFBTTthQUN6QixDQUFDLENBQUM7U0FDSjtLQUNGLENBQUMsQ0FBQztJQUVILG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0ZBQWdGO0lBQ2hGLDJDQUEyQztJQUMzQyx3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQywrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLDBDQUEwQztJQUMxQyxzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLFVBQVU7SUFDVixpQ0FBaUM7SUFDakMsMEJBQTBCO0lBQzFCLFVBQVU7SUFDVixVQUFVO0lBRVYsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixJQUFJO0lBQ0osZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxJQUFJO0lBRUosSUFBSU4sS0FBSyxFQUFFO1FBQ1QscUJBQU8sOERBQUNPLEdBQUM7c0JBQUMsaUJBQWU7Ozs7O2dCQUFJLENBQUM7S0FDL0I7SUFFRCxJQUFJLENBQUNSLElBQUksRUFBRTtRQUNULHFCQUFPLDhEQUFDUSxHQUFDO3NCQUFDLGNBQVk7Ozs7O2dCQUFJLENBQUM7S0FDNUI7SUFFRCxxQkFDRSw4REFBQ0MsSUFBRTtrQkFDQVQsSUFBSSxDQUFDVSxHQUFHLENBQUMsU0FBQ0MsSUFBSTtpQ0FDYiw4REFBQ0MsSUFBRTs7b0JBQ0FELElBQUksQ0FBQ0wsUUFBUTtvQkFBQyxNQUFJO29CQUFDSyxJQUFJLENBQUNKLE1BQU07O2VBRHhCSSxJQUFJLENBQUNOLEVBQUU7Ozs7cUJBRVg7U0FDTixDQUFDOzs7OztZQUNDLENBQ0w7Q0FDSDtHQTdEUVIsYUFBYTs7UUFJSUQsMkNBQU07OztBQUp2QkMsS0FBQUEsYUFBYTtBQStEdEIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sYXN0LXNhbGVzLmpzPzI5MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmZ1bmN0aW9uIExhc3RTYWxlc1BhZ2UoKSB7XHJcbiAgY29uc3QgW3NhbGVzLCBzZXRTYWxlc10gPSB1c2VTdGF0ZSgpO1xyXG4gIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIFwiaHR0cHM6Ly9uZXh0anMtY291cnNlLTUzOTI5LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uXCJcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdHJhbnNmb3JtRGF0YSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICB0cmFuc2Zvcm1EYXRhLnB1c2goe1xyXG4gICAgICAgIGlkOiBrZXksXHJcbiAgICAgICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcclxuICAgICAgICB2YWx1bWU6IGRhdGFba2V5XS52YWx1bWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgc2V0TG9haW5nKHRydWUpO1xyXG4gIC8vICAgZmV0Y2goXCJodHRwczovL25leHRqcy1jb3Vyc2UtNTM5MjktZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb25cIilcclxuICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgLy8gICAgICAgY29uc3QgdHJhbnNmb3JtRGF0YSA9IFtdO1xyXG4gIC8vICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAvLyAgICAgICAgIHRyYW5zZm9ybURhdGEucHVzaCh7XHJcbiAgLy8gICAgICAgICAgIGlkOiBrZXksXHJcbiAgLy8gICAgICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXHJcbiAgLy8gICAgICAgICAgIHZhbHVtZTogZGF0YVtrZXldLnZhbHVtZSxcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1EYXRhKTtcclxuICAvLyAgICAgICBzZXRMb2FpbmcoZmFsc2UpO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIC8vIGlmIChpc0xvYWRpbmcpIHtcclxuICAvLyAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICAvLyB9XHJcbiAgLy8gaWYgKCFzYWxlcykge1xyXG4gIC8vICAgcmV0dXJuIDxwPk5vIGRhdGEgeWV0LjwvcD47XHJcbiAgLy8gfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8cD5GYWlsZWQgdG8gbG9hZC48L3A+O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICByZXR1cm4gPHA+Tm8gZGF0YSB5ZXQuPC9wPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtkYXRhLm1hcCgoc2FsZSkgPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e3NhbGUuaWR9PlxyXG4gICAgICAgICAge3NhbGUudXNlcm5hbWV9IC0gJHtzYWxlLnZhbHVtZX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFzdFNhbGVzUGFnZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU1dSIiwiTGFzdFNhbGVzUGFnZSIsInNhbGVzIiwic2V0U2FsZXMiLCJkYXRhIiwiZXJyb3IiLCJ0cmFuc2Zvcm1EYXRhIiwia2V5IiwicHVzaCIsImlkIiwidXNlcm5hbWUiLCJ2YWx1bWUiLCJwIiwidWwiLCJtYXAiLCJzYWxlIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

/***/ })

});