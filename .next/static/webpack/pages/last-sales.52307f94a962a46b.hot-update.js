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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction LastSalesPage() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), sales = ref[0], setSales = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = ref1[0], setLoaing = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLoaing(true);\n        fetch(\"https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            var transformData = [];\n            for(var key in data){\n                transformData.push({\n                    id: key,\n                    username: data[key].username,\n                    valume: data[key].valume\n                });\n            }\n            setSales(transformData);\n            setLoaing(false);\n        });\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n            lineNumber: 26,\n            columnNumber: 12\n        }, this);\n    }\n    if (!sales) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data yet.\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: sales.map(function(sale) {\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    sale.username,\n                    \" - $\",\n                    sale.valume\n                ]\n            }, sale.id, true, {\n                fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Next\\\\5.-Page-Pre-Rendering-Data-Fetching\\\\pages\\\\last-sales.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(LastSalesPage, \"L4qw7OdHcfW40fT2oadAPo7jiuc=\");\n_c = LastSalesPage;\n// export default LastSalesPage;\n// import { useEffect, useState } from 'react';\n// function LastSalesPage() {\n//   const [sales, setSales] = useState();\n//   const [isLoading, setIsLoading] = useState(false);\n//   useEffect(() => {\n//     setIsLoading(true);\n//     fetch('https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json')\n//       .then((response) => response.json())\n//       .then((data) => {\n//         const transformedSales = [];\n//         for (const key in data) {\n//           transformedSales.push({\n//             id: key,\n//             username: data[key].username,\n//             volume: data[key].volume,\n//           });\n//         }\n//         setSales(transformedSales);\n//         setIsLoading(false);\n//       });\n//   }, []);\n//    if (isLoading) {\n//      return <p>Loading...</p>;\n//    }\n//    if (!sales) {\n//      return <p>No data yet.</p>;\n//    }\n//   return (\n//     <ul>\n//       {sales.map((sale) => (\n//         <li key={sale.id}>\n//           {sale.username} - ${sale.valume}\n//         </li>\n//       ))}\n//     </ul>\n//   );\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\nvar _c;\n$RefreshReg$(_c, \"LastSalesPage\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBNEM7O0FBRTVDLFNBQVNFLGFBQWEsR0FBRzs7O0lBQ3ZCLElBQTBCRCxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFIdEMsS0FHYyxHQUFjQSxHQUFVLEdBQXhCLEVBSGQsUUFHd0IsR0FBSUEsR0FBVSxHQUFkO0lBQ3RCLElBQStCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBSmhELFNBSWtCLEdBQWVBLElBQWUsR0FBOUIsRUFKbEIsU0FJNkIsR0FBSUEsSUFBZSxHQUFuQjtJQUUzQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RNLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQkMsS0FBSyxDQUFDLG9FQUFvRSxDQUFDLENBQ3hFQyxJQUFJLENBQUMsU0FBQ0MsUUFBUTttQkFBS0EsUUFBUSxDQUFDQyxJQUFJLEVBQUU7U0FBQSxDQUFDLENBQ25DRixJQUFJLENBQUMsU0FBQ0csSUFBSSxFQUFLO1lBQ2QsSUFBTUMsYUFBYSxHQUFHLEVBQUU7WUFDeEIsSUFBSyxJQUFNQyxHQUFHLElBQUlGLElBQUksQ0FBRTtnQkFDdEJDLGFBQWEsQ0FBQ0UsSUFBSSxDQUFDO29CQUNqQkMsRUFBRSxFQUFFRixHQUFHO29CQUNQRyxRQUFRLEVBQUVMLElBQUksQ0FBQ0UsR0FBRyxDQUFDLENBQUNHLFFBQVE7b0JBQzVCQyxNQUFNLEVBQUVOLElBQUksQ0FBQ0UsR0FBRyxDQUFDLENBQUNJLE1BQU07aUJBQ3pCLENBQUMsQ0FBQzthQUNKO1lBQ0RiLFFBQVEsQ0FBQ1EsYUFBYSxDQUFDLENBQUM7WUFDeEJOLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQixDQUFDLENBQUM7S0FDTixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBSUQsU0FBUyxFQUFFO1FBQ2IscUJBQU8sOERBQUNhLEdBQUM7c0JBQUMsWUFBVTs7Ozs7Z0JBQUksQ0FBQztLQUMxQjtJQUNELElBQUksQ0FBQ2YsS0FBSyxFQUFFO1FBQ1YscUJBQU8sOERBQUNlLEdBQUM7c0JBQUMsY0FBWTs7Ozs7Z0JBQUksQ0FBQztLQUM1QjtJQUVELHFCQUNFLDhEQUFDQyxJQUFFO2tCQUNBaEIsS0FBSyxDQUFDaUIsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSzswQkFDbkIsOERBQUNDLElBQUU7O29CQUNBRCxJQUFJLENBQUNMLFFBQVE7b0JBQUMsTUFBSTtvQkFBQ0ssSUFBSSxDQUFDSixNQUFNOztlQUR4QkksSUFBSSxDQUFDTixFQUFFOzs7O3FCQUVYO1NBQ04sQ0FBQzs7Ozs7WUFDQyxDQUNMO0NBQ0g7R0F0Q1FiLGFBQWE7QUFBYkEsS0FBQUEsYUFBYTtBQXdDdEIsZ0NBQWdDO0FBTWhDLCtDQUErQztBQUUvQyw2QkFBNkI7QUFDN0IsMENBQTBDO0FBQzFDLHVEQUF1RDtBQUV2RCxzQkFBc0I7QUFDdEIsMEJBQTBCO0FBQzFCLGtGQUFrRjtBQUNsRiw2Q0FBNkM7QUFDN0MsMEJBQTBCO0FBQzFCLHVDQUF1QztBQUV2QyxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLHVCQUF1QjtBQUN2Qiw0Q0FBNEM7QUFDNUMsd0NBQXdDO0FBQ3hDLGdCQUFnQjtBQUNoQixZQUFZO0FBRVosc0NBQXNDO0FBQ3RDLCtCQUErQjtBQUMvQixZQUFZO0FBQ1osWUFBWTtBQUVaLHNCQUFzQjtBQUN0QixpQ0FBaUM7QUFDakMsT0FBTztBQUNQLG1CQUFtQjtBQUNuQixtQ0FBbUM7QUFDbkMsT0FBTztBQUVQLGFBQWE7QUFDYixXQUFXO0FBQ1gsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qiw2Q0FBNkM7QUFDN0MsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixZQUFZO0FBQ1osT0FBTztBQUNQLElBQUk7QUFFSiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xhc3Qtc2FsZXMuanM/MjkxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBMYXN0U2FsZXNQYWdlKCkge1xyXG4gIGNvbnN0IFtzYWxlcywgc2V0U2FsZXNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9haW5nKHRydWUpO1xyXG4gICAgZmV0Y2goXCJodHRwczovL25leHRqcy1jb3Vyc2UtNTM5MjktZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb25cIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtRGF0YSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgIHRyYW5zZm9ybURhdGEucHVzaCh7XHJcbiAgICAgICAgICAgIGlkOiBrZXksXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVtZTogZGF0YVtrZXldLnZhbHVtZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1EYXRhKTtcclxuICAgICAgICBzZXRMb2FpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICB9XHJcbiAgaWYgKCFzYWxlcykge1xyXG4gICAgcmV0dXJuIDxwPk5vIGRhdGEgeWV0LjwvcD47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsPlxyXG4gICAgICB7c2FsZXMubWFwKChzYWxlKSA9PiB7XHJcbiAgICAgICAgPGxpIGtleT17c2FsZS5pZH0+XHJcbiAgICAgICAgICB7c2FsZS51c2VybmFtZX0gLSAke3NhbGUudmFsdW1lfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIH0pfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBMYXN0U2FsZXNQYWdlO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBmdW5jdGlvbiBMYXN0U2FsZXNQYWdlKCkge1xyXG4vLyAgIGNvbnN0IFtzYWxlcywgc2V0U2FsZXNdID0gdXNlU3RhdGUoKTtcclxuLy8gICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4vLyAgICAgZmV0Y2goJ2h0dHBzOi8vbmV4dGpzLWNvdXJzZS01MzkyOS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvbicpXHJcbi8vICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4vLyAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkU2FsZXMgPSBbXTtcclxuXHJcbi8vICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4vLyAgICAgICAgICAgdHJhbnNmb3JtZWRTYWxlcy5wdXNoKHtcclxuLy8gICAgICAgICAgICAgaWQ6IGtleSxcclxuLy8gICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcclxuLy8gICAgICAgICAgICAgdm9sdW1lOiBkYXRhW2tleV0udm9sdW1lLFxyXG4vLyAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIHNldFNhbGVzKHRyYW5zZm9ybWVkU2FsZXMpO1xyXG4vLyAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgIH0sIFtdKTtcclxuXHJcbi8vICAgIGlmIChpc0xvYWRpbmcpIHtcclxuLy8gICAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbi8vICAgIH1cclxuLy8gICAgaWYgKCFzYWxlcykge1xyXG4vLyAgICAgIHJldHVybiA8cD5ObyBkYXRhIHlldC48L3A+O1xyXG4vLyAgICB9XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8dWw+XHJcbi8vICAgICAgIHtzYWxlcy5tYXAoKHNhbGUpID0+IChcclxuLy8gICAgICAgICA8bGkga2V5PXtzYWxlLmlkfT5cclxuLy8gICAgICAgICAgIHtzYWxlLnVzZXJuYW1lfSAtICR7c2FsZS52YWx1bWV9XHJcbi8vICAgICAgICAgPC9saT5cclxuLy8gICAgICAgKSl9XHJcbi8vICAgICA8L3VsPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhc3RTYWxlc1BhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxhc3RTYWxlc1BhZ2UiLCJzYWxlcyIsInNldFNhbGVzIiwiaXNMb2FkaW5nIiwic2V0TG9haW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInRyYW5zZm9ybURhdGEiLCJrZXkiLCJwdXNoIiwiaWQiLCJ1c2VybmFtZSIsInZhbHVtZSIsInAiLCJ1bCIsIm1hcCIsInNhbGUiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

/***/ })

});