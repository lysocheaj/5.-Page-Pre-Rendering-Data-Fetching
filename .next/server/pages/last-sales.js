"use strict";
(() => {
var exports = {};
exports.id = 822;
exports.ids = [822];
exports.modules = {

/***/ 348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function LastSalesPage(props) {
    const { 0: sales , 1: setSales  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.sales);
    // const [isLoading, setLoaing] = useState(false);
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])("https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data) {
            const transformData = [];
            for(const key in data){
                transformData.push({
                    id: key,
                    username: data[key].username,
                    valume: data[key].valume
                });
            }
            setSales(transformData);
        }
    }, [
        data
    ]);
    if (error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Failed to load."
        });
    }
    if (!data && !sales) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        children: sales.map((sale)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                children: [
                    sale.username,
                    " - $",
                    sale.valume
                ]
            }, sale.id)
        )
    });
}
async function getStaticProps() {
    const response = await fetch("https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json");
    const data = await response.json();
    const transformData = [];
    for(const key in data){
        transformData.push({
            id: key,
            username: data[key].username,
            valume: data[key].valume
        });
    }
    return {
        props: {
            sales: transformData
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastSalesPage); // useEffect(() => {
 //   setLoaing(true);
 //   fetch("https://nextjs-course-53929-default-rtdb.firebaseio.com/sales.json")
 //     .then((response) => response.json())
 //     .then((data) => {
 //       const transformData = [];
 //       for (const key in data) {
 //         transformData.push({
 //           id: key,
 //           username: data[key].username,
 //           valume: data[key].valume,
 //         });
 //       }
 //       setSales(transformData);
 //       setLoaing(false);
 //     });
 // }, []);
 // if (isLoading) {
 //   return <p>Loading...</p>;
 // }
 // if (!sales) {
 //   return <p>No data yet.</p>;
 //

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(348));
module.exports = __webpack_exports__;

})();