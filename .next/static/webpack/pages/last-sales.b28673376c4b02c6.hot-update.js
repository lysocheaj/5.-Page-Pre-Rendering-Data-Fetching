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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\nvar _s = $RefreshSig$();\nfunction LastSalesPage() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), sales = ref[0], setSales = ref[1];\n    // const [isLoading, setLoaing] = useState(false);\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json\"), data = ref1.data, error = ref1.error;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var transformData = [];\n        for(var key in data){\n            transformData.push({\n                id: key,\n                username: data[key].username,\n                valume: data[key].valume\n            });\n        }\n        setSales(transformData);\n    }, []);\n    // useEffect(() => {\n    //   setLoaing(true);\n    //   fetch(\"https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json\")\n    //     .then((response) => response.json())\n    //     .then((data) => {\n    //       const transformData = [];\n    //       for (const key in data) {\n    //         transformData.push({\n    //           id: key,\n    //           username: data[key].username,\n    //           valume: data[key].valume,\n    //         });\n    //       }\n    //       setSales(transformData);\n    //       setLoaing(false);\n    //     });\n    // }, []);\n    // if (isLoading) {\n    //   return <p>Loading...</p>;\n    // }\n    // if (!sales) {\n    //   return <p>No data yet.</p>;\n    // }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Failed to load.\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n            lineNumber: 50,\n            columnNumber: 12\n        }, this);\n    }\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data yet.\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n            lineNumber: 54,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: data.map(function(sale) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    sale.username,\n                    \" - $\",\n                    sale.valume\n                ]\n            }, sale.id, true, {\n                fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(LastSalesPage, \"H1cfh/soZjIl5eFUUw26qft2NFs=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = LastSalesPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\nvar _c;\n$RefreshReg$(_c, \"LastSalesPage\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQTRDO0FBQ25COztBQUV6QixTQUFTRyxhQUFhLEdBQUc7OztJQUN2QixJQUEwQkYsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBSnRDLEtBSWMsR0FBY0EsR0FBVSxHQUF4QixFQUpkLFFBSXdCLEdBQUlBLEdBQVUsR0FBZDtJQUN0QixrREFBa0Q7SUFFbEQsSUFBd0JDLElBRXZCLEdBRnVCQSwrQ0FBTSxDQUM1QixvRUFBb0UsQ0FDckUsRUFGT0ksSUFBSSxHQUFZSixJQUV2QixDQUZPSSxJQUFJLEVBQUVDLEtBQUssR0FBS0wsSUFFdkIsQ0FGYUssS0FBSztJQUluQlAsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTVEsYUFBYSxHQUFHLEVBQUU7UUFDeEIsSUFBSyxJQUFNQyxHQUFHLElBQUlILElBQUksQ0FBRTtZQUN0QkUsYUFBYSxDQUFDRSxJQUFJLENBQUM7Z0JBQ2pCQyxFQUFFLEVBQUVGLEdBQUc7Z0JBQ1BHLFFBQVEsRUFBRU4sSUFBSSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0csUUFBUTtnQkFDNUJDLE1BQU0sRUFBRVAsSUFBSSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0ksTUFBTTthQUN6QixDQUFDLENBQUM7U0FDSjtRQUNEUixRQUFRLENBQUNHLGFBQWEsQ0FBQyxDQUFDO0tBQ3pCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGdGQUFnRjtJQUNoRiwyQ0FBMkM7SUFDM0Msd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQiwwQ0FBMEM7SUFDMUMsc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YsVUFBVTtJQUVWLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsSUFBSTtJQUNKLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsSUFBSTtJQUVKLElBQUlELEtBQUssRUFBRTtRQUNULHFCQUFPLDhEQUFDTyxHQUFDO3NCQUFDLGlCQUFlOzs7OztnQkFBSSxDQUFDO0tBQy9CO0lBRUQsSUFBSSxDQUFDUixJQUFJLEVBQUc7UUFDVixxQkFBTyw4REFBQ1EsR0FBQztzQkFBQyxjQUFZOzs7OztnQkFBSSxDQUFDO0tBQzVCO0lBRUQscUJBQ0UsOERBQUNDLElBQUU7a0JBQ0FULElBQUksQ0FBQ1UsR0FBRyxDQUFDLFNBQUNDLElBQUk7aUNBQ2IsOERBQUNDLElBQUU7O29CQUNBRCxJQUFJLENBQUNMLFFBQVE7b0JBQUMsTUFBSTtvQkFBQ0ssSUFBSSxDQUFDSixNQUFNOztlQUR4QkksSUFBSSxDQUFDTixFQUFFOzs7O3FCQUVYO1NBQ04sQ0FBQzs7Ozs7WUFDQyxDQUNMO0NBQ0g7R0E5RFFSLGFBQWE7O1FBSUlELDJDQUFNOzs7QUFKdkJDLEtBQUFBLGFBQWE7QUFnRXRCLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFzdC1zYWxlcy5qcz8yOTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcblxyXG5mdW5jdGlvbiBMYXN0U2FsZXNQYWdlKCkge1xyXG4gIGNvbnN0IFtzYWxlcywgc2V0U2FsZXNdID0gdXNlU3RhdGUoKTtcclxuICAvLyBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBcImh0dHBzOi8vbmV4dGpzLWNvdXJzZS01MzkyOS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvblwiXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRyYW5zZm9ybURhdGEgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgdHJhbnNmb3JtRGF0YS5wdXNoKHtcclxuICAgICAgICBpZDoga2V5LFxyXG4gICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXHJcbiAgICAgICAgdmFsdW1lOiBkYXRhW2tleV0udmFsdW1lLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHNldFNhbGVzKHRyYW5zZm9ybURhdGEpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIHNldExvYWluZyh0cnVlKTtcclxuICAvLyAgIGZldGNoKFwiaHR0cHM6Ly9uZXh0anMtY291cnNlLTUzOTI5LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uXCIpXHJcbiAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gIC8vICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gIC8vICAgICAgIGNvbnN0IHRyYW5zZm9ybURhdGEgPSBbXTtcclxuICAvLyAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgLy8gICAgICAgICB0cmFuc2Zvcm1EYXRhLnB1c2goe1xyXG4gIC8vICAgICAgICAgICBpZDoga2V5LFxyXG4gIC8vICAgICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxyXG4gIC8vICAgICAgICAgICB2YWx1bWU6IGRhdGFba2V5XS52YWx1bWUsXHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgc2V0U2FsZXModHJhbnNmb3JtRGF0YSk7XHJcbiAgLy8gICAgICAgc2V0TG9haW5nKGZhbHNlKTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICAvLyBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgLy8gICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgLy8gfVxyXG4gIC8vIGlmICghc2FsZXMpIHtcclxuICAvLyAgIHJldHVybiA8cD5ObyBkYXRhIHlldC48L3A+O1xyXG4gIC8vIH1cclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPHA+RmFpbGVkIHRvIGxvYWQuPC9wPjtcclxuICB9XHJcblxyXG4gIGlmICghZGF0YSApIHtcclxuICAgIHJldHVybiA8cD5ObyBkYXRhIHlldC48L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx1bD5cclxuICAgICAge2RhdGEubWFwKChzYWxlKSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17c2FsZS5pZH0+XHJcbiAgICAgICAgICB7c2FsZS51c2VybmFtZX0gLSAke3NhbGUudmFsdW1lfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0U2FsZXNQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTV1IiLCJMYXN0U2FsZXNQYWdlIiwic2FsZXMiLCJzZXRTYWxlcyIsImRhdGEiLCJlcnJvciIsInRyYW5zZm9ybURhdGEiLCJrZXkiLCJwdXNoIiwiaWQiLCJ1c2VybmFtZSIsInZhbHVtZSIsInAiLCJ1bCIsIm1hcCIsInNhbGUiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

/***/ })

});