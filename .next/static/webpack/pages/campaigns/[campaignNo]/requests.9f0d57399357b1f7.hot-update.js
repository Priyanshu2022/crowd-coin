"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[campaignNo]/requests",{

/***/ "./pages/campaigns/[campaignNo]/requests/index.js":
/*!********************************************************!*\
  !*** ./pages/campaigns/[campaignNo]/requests/index.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_hp_Desktop_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_hp_Desktop_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_hp_Desktop_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction RequestIndex() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(C_Users_hp_Desktop_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var campaign, requestCount, requests;\n        return C_Users_hp_Desktop_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!router.query.campaignNo) {\n                        _ctx.next = 9;\n                        break;\n                    }\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(router.query.campaignNo);\n                    _ctx.next = 4;\n                    return campaign.methods.getRequestsCount().call();\n                case 4:\n                    requestCount = _ctx.sent;\n                    _ctx.next = 7;\n                    return Promise.all(Array(requestCount).fill().map(function(element, index) {\n                        return campaign.methods.requests(index).call();\n                    }));\n                case 7:\n                    requests = _ctx.sent;\n                    console.log(requests);\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        router.query\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Requests\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/campaigns/\".concat(router.query.campaignNo, \"/requests/new\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    primary: true,\n                    children: \"Add Request\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this));\n}\n_s(RequestIndex, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = RequestIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestIndex);\nvar _c;\n$RefreshReg$(_c, \"RequestIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2NhbXBhaWduTm9dL3JlcXVlc3RzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDeUI7QUFDVjtBQUNaO0FBQ1c7QUFDYTtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUN4Qk8sWUFBWSxHQUFHLENBQUM7O0lBQ3JCLEdBQUssQ0FBQ0MsTUFBTSxHQUFDSixzREFBUztJQUN0QkUsZ0RBQVMsMkpBQUMsUUFBUSxXQUFHLENBQUM7WUFFVkcsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLFFBQVE7Ozs7eUJBSGJILE1BQU0sQ0FBQ0ksS0FBSyxDQUFDQyxVQUFVOzs7O29CQUNsQkosUUFBUSxHQUFDSiw4REFBUSxDQUFDRyxNQUFNLENBQUNJLEtBQUssQ0FBQ0MsVUFBVTs7MkJBQ3RCSixRQUFRLENBQUNLLE9BQU8sQ0FBQ0MsZ0JBQWdCLEdBQUdDLElBQUk7O29CQUEzRE4sWUFBWTs7MkJBQ0dPLE9BQU8sQ0FBQ0MsR0FBRyxDQUM1QkMsS0FBSyxDQUFDVCxZQUFZLEVBQUVVLElBQUksR0FBR0MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsT0FBTyxFQUFDQyxLQUFLLEVBQUcsQ0FBQzt3QkFDN0MsTUFBTSxDQUFDZCxRQUFRLENBQUNLLE9BQU8sQ0FBQ0gsUUFBUSxDQUFDWSxLQUFLLEVBQUVQLElBQUk7b0JBQ2hELENBQUM7O29CQUhDTCxRQUFRO29CQUtkYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2QsUUFBUTs7Ozs7O0lBR3hCLENBQUMsSUFBRSxDQUFDSDtRQUFBQSxNQUFNLENBQUNJLEtBQUs7SUFBQSxDQUFDO0lBQ3JCLE1BQU0sNkVBQ0hYLDBEQUFNOzt3RkFDRnlCLENBQUU7MEJBQUMsQ0FBUTs7Ozs7O3dGQUNYdkIsa0RBQUk7Z0JBQUN3QixJQUFJLEVBQUcsQ0FBVyxhQUEwQixNQUFhLENBQXJDbkIsTUFBTSxDQUFDSSxLQUFLLENBQUNDLFVBQVUsRUFBQyxDQUFhO3NHQUM5RFgscURBQU07b0JBQUMwQixPQUFPOzhCQUFDLENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25DLENBQUM7R0F4QlFyQixZQUFZOztRQUNKSCxrREFBUzs7O0tBRGpCRyxZQUFZO0FBMEJyQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2NhbXBhaWduTm9dL3JlcXVlc3RzL2luZGV4LmpzPzQ4NTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbidcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmZ1bmN0aW9uIFJlcXVlc3RJbmRleCgpIHtcclxuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcclxuICAgIHVzZUVmZmVjdChhc3luYygpID0+IHtcclxuICAgICAgICBpZihyb3V0ZXIucXVlcnkuY2FtcGFpZ25Obyl7XHJcbiAgICAgICAgICBjb25zdCBjYW1wYWlnbj1DYW1wYWlnbihyb3V0ZXIucXVlcnkuY2FtcGFpZ25Obyk7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0Q291bnQ9YXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdHM9YXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgICAgQXJyYXkocmVxdWVzdENvdW50KS5maWxsKCkubWFwKChlbGVtZW50LGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3RzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfSwgW3JvdXRlci5xdWVyeV0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgzPlJlcXVlc3RzPC9oMz5cclxuICAgICAgICA8TGluayBocmVmPXtgL2NhbXBhaWducy8ke3JvdXRlci5xdWVyeS5jYW1wYWlnbk5vfS9yZXF1ZXN0cy9uZXdgfT5cclxuICAgICAgICA8QnV0dG9uIHByaW1hcnk+QWRkIFJlcXVlc3Q8L0J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SW5kZXgiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJCdXR0b24iLCJMaW5rIiwidXNlUm91dGVyIiwiQ2FtcGFpZ24iLCJ1c2VFZmZlY3QiLCJSZXF1ZXN0SW5kZXgiLCJyb3V0ZXIiLCJjYW1wYWlnbiIsInJlcXVlc3RDb3VudCIsInJlcXVlc3RzIiwicXVlcnkiLCJjYW1wYWlnbk5vIiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJoMyIsImhyZWYiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/[campaignNo]/requests/index.js\n");

/***/ })

});