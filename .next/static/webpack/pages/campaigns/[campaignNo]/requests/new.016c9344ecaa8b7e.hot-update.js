"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[campaignNo]/requests/new",{

/***/ "./pages/campaigns/[campaignNo]/requests/new.js":
/*!******************************************************!*\
  !*** ./pages/campaigns/[campaignNo]/requests/new.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction RequestNew() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), value = ref[0], setvalue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), description = ref1[0], setdescription = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), recipient = ref2[0], setrecipient = ref2[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Field, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\new.js\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        value: description,\n                        onChange: function(event) {\n                            return setdescription(event.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\new.js\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\new.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Field, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Value in Ether\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\new.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        value: value,\n                        onChange: function(event) {\n                            return setvalue(event.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\new.js\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\new.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Field, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Recipient\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\new.js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        value: recipient,\n                        onChange: function(event) {\n                            return setrecipient(event.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\new.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\new.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                primary: true,\n                children: \"Create!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\new.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\kickstart\\\\pages\\\\campaigns\\\\[campaignNo]\\\\requests\\\\new.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n}\n_s(RequestNew, \"PJaafpXrelngrKpAuo0CislQ5rY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = RequestNew;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestNew);\nvar _c;\n$RefreshReg$(_c, \"RequestNew\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2NhbXBhaWduTm9dL3JlcXVlc3RzL25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDa0M7QUFDUDtBQUN4QjtBQUNXO0FBQ1A7O1NBRXZCUyxVQUFVLEdBQUcsQ0FBQzs7SUFDbkIsR0FBSyxDQUFDQyxNQUFNLEdBQUNILHNEQUFTO0lBQ3RCLEdBQUssQ0FBcUJDLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlCRyxLQUFLLEdBQWNILEdBQVksS0FBeEJJLFFBQVEsR0FBSUosR0FBWTtJQUN0QyxHQUFLLENBQWlDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUExQ0ssV0FBVyxHQUFvQkwsSUFBWSxLQUE5Qk0sY0FBYyxHQUFJTixJQUFZO0lBQ2xELEdBQUssQ0FBNkJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXRDTyxTQUFTLEdBQWtCUCxJQUFZLEtBQTVCUSxZQUFZLEdBQUlSLElBQVk7SUFDaEQsTUFBTSw2RUFDSFAsbURBQUk7O3dGQUNBQSx5REFBVTs7Z0dBQ05pQixDQUFLO2tDQUFDLENBQVc7Ozs7OztnR0FDakJkLG9EQUFLO3dCQUFDTyxLQUFLLEVBQUVFLFdBQVc7d0JBQUVNLFFBQVEsRUFBRUMsUUFBUSxDQUFSQSxLQUFLOzRCQUFFTixNQUFNLENBQU5BLGNBQWMsQ0FBQ00sS0FBSyxDQUFDQyxNQUFNLENBQUNWLEtBQUs7Ozs7Ozs7Ozs7Ozs7d0ZBRWhGVix5REFBVTs7Z0dBQ05pQixDQUFLO2tDQUFDLENBQWM7Ozs7OztnR0FDcEJkLG9EQUFLO3dCQUFDTyxLQUFLLEVBQUVBLEtBQUs7d0JBQUVRLFFBQVEsRUFBRUMsUUFBUSxDQUFSQSxLQUFLOzRCQUFFUixNQUFNLENBQU5BLFFBQVEsQ0FBQ1EsS0FBSyxDQUFDQyxNQUFNLENBQUNWLEtBQUs7Ozs7Ozs7Ozs7Ozs7d0ZBRXBFVix5REFBVTs7Z0dBQ05pQixDQUFLO2tDQUFDLENBQVM7Ozs7OztnR0FDZmQsb0RBQUs7d0JBQUNPLEtBQUssRUFBRUksU0FBUzt3QkFBRUksUUFBUSxFQUFFQyxRQUFRLENBQVJBLEtBQUs7NEJBQUVKLE1BQU0sQ0FBTkEsWUFBWSxDQUFDSSxLQUFLLENBQUNDLE1BQU0sQ0FBQ1YsS0FBSzs7Ozs7Ozs7Ozs7Ozt3RkFFNUVULHFEQUFNO2dCQUFDb0IsT0FBTzswQkFBQyxDQUVoQjs7Ozs7Ozs7Ozs7O0FBR1IsQ0FBQztHQXhCUWIsVUFBVTs7UUFDRkYsa0RBQVM7OztLQURqQkUsVUFBVTtBQTBCbkIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL1tjYW1wYWlnbk5vXS9yZXF1ZXN0cy9uZXcuanM/Y2YzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Rm9ybSxCdXR0b24sTWVzc2FnZSxJbnB1dH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFJlcXVlc3ROZXcoKSB7XHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldHZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXRkZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtyZWNpcGllbnQsIHNldHJlY2lwaWVudF0gPSB1c2VTdGF0ZSgnJylcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17ZGVzY3JpcHRpb259IG9uQ2hhbmdlPXtldmVudD0+c2V0ZGVzY3JpcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5WYWx1ZSBpbiBFdGhlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtldmVudD0+c2V0dmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPlJlY2lwaWVudDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17cmVjaXBpZW50fSBvbkNoYW5nZT17ZXZlbnQ9PnNldHJlY2lwaWVudChldmVudC50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxCdXR0b24gcHJpbWFyeT5cclxuICAgICAgICAgICAgQ3JlYXRlIVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Gb3JtPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdE5ldyJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm0iLCJCdXR0b24iLCJNZXNzYWdlIiwiSW5wdXQiLCJDYW1wYWlnbiIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIlJlcXVlc3ROZXciLCJyb3V0ZXIiLCJ2YWx1ZSIsInNldHZhbHVlIiwiZGVzY3JpcHRpb24iLCJzZXRkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsInNldHJlY2lwaWVudCIsIkZpZWxkIiwibGFiZWwiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[campaignNo]/requests/new.js\n");

/***/ })

});