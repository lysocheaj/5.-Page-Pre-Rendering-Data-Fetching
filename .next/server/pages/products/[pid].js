"use strict";
(() => {
var exports = {};
exports.id = 328;
exports.ids = [328];
exports.modules = {

/***/ 841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_3__);




function ProductDetailPage(props) {
    const { loadedProduct  } = props;
    if (!loadedProduct) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "loading..."
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: loadedProduct.id
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: loadedProduct.description
            })
        ]
    });
}
async function getData() {
    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "data", "dummy-data.json");
    const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_3___default().readFile(filePath);
    const data = JSON.parse(jsonData);
    return data;
}
async function getStaticProps(context) {
    const { params  } = context;
    const productId = params.pid;
    const data = await getData();
    const product1 = data.products.find((product)=>product.id === productId
    );
    if (!product1) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            loadedProduct: product1
        }
    };
}
async function getStaticPaths() {
    const data = await getData();
    const ids = data.products.map((product)=>product.id
    );
    const params = ids.map((id)=>({
            params: {
                pid: id
            }
        })
    );
    return {
        paths: params,
        // fallback: "blocking",
        fallback: true
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetailPage);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(841));
module.exports = __webpack_exports__;

})();