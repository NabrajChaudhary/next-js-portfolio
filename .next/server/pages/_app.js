(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Footer/index.tsx


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "py-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[1px] w-full bg-gray-700"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify- flex-col mt-10 opacity-70",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-white",
                        children: "Designed and Developed By "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-white",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-tertiary",
                            children: "Nabraj Chaudhary"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Navbar/index.tsx


const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: " bg-primary fixed w-full px-40 sm:px-5",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "p-5 bg-primary flex justify-between ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-secondary sm:text-3xl lg:text-5xl font-handwriting font-semibold",
                    children: "Nabraj Chaudhary"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-tertiary text-4xl font-semibold"
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/SocialMedia/index.tsx


const SocialMedia = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "fixed left-0 bottom-0 px-10 sm:static",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-3 sm:flex-row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "ri-facebook-circle-line text-gray-600 text-2xl"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "ri-mail-line text-gray-600 text-2xl"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "ri-instagram-line text-gray-600 text-2xl"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "ri-linkedin-box-line text-gray-600 text-2xl"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "ri-github-line text-gray-600 text-2xl"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-[1px] h-32 bg-[#125f63] sm:hidden"
                })
            ]
        })
    });
};
/* harmony default export */ const components_SocialMedia = (SocialMedia);

// EXTERNAL MODULE: ./src/styles/globals.scss
var globals = __webpack_require__(6961);
// EXTERNAL MODULE: ./node_modules/remixicon/fonts/remixicon.css
var remixicon = __webpack_require__(383);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/_app.tsx







function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Nabraj Chaudhary | Portfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/nlogo.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "bg-primary px-40 pt-[50px] sm:px-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SocialMedia, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 383:
/***/ (() => {



/***/ }),

/***/ 6961:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1929));
module.exports = __webpack_exports__;

})();