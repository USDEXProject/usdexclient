webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/common/nav.js":
/*!**********************************!*\
  !*** ./components/common/nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client_setting_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../client.setting.json */ "./client.setting.json");
var _client_setting_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../client.setting.json */ "./client.setting.json", 1);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "./actions.js");
/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/web3 */ "./lib/web3.js");










function MetaMaskSvg() {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/metamask.png",
    alt: "",
    className: "w-10 h-10"
  });
}

function AddressInfo(_ref) {
  var account = _ref.account,
      ethCount = _ref.ethCount,
      bnbCount = _ref.bnbCount,
      usdexCount = _ref.usdexCount,
      dispatch = _ref.dispatch;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["callbalances"])(account));
  }, [account]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-sm"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-blue mb-2"
  }, account), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "flex justify-between"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "font-bold text-xs"
  }, "ETH: ", ethCount), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "font-bold text-xs"
  }, "BNB: ", bnbCount), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "font-bold text-xs"
  }, "USDEX: ", usdexCount)));
}

var ConnectAddressInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(function (_ref2) {
  var account = _ref2.account,
      ethCount = _ref2.ethCount,
      bnbCount = _ref2.bnbCount,
      usdexCount = _ref2.usdexCount,
      dispatch = _ref2.dispatch;
  return {
    account: account,
    ethCount: ethCount,
    bnbCount: bnbCount,
    usdexCount: usdexCount,
    dispatch: dispatch
  };
})(AddressInfo);

function MetaMask(_ref3) {
  var readyBuy = _ref3.readyBuy,
      metaMask = _ref3.metaMask,
      chainId = _ref3.chainId,
      dispatch = _ref3.dispatch;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function isMetaMask() {
      return _isMetaMask.apply(this, arguments);
    }

    function _isMetaMask() {
      _isMetaMask = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var accounts;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_lib_web3__WEBPACK_IMPORTED_MODULE_8__["default"].currentProvider.isMetaMask) {
                  _context.next = 14;
                  break;
                }

                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["setState"])({
                  metaMask: true
                }));

                if (!(_lib_web3__WEBPACK_IMPORTED_MODULE_8__["default"].currentProvider.networkVersion === _client_setting_json__WEBPACK_IMPORTED_MODULE_6__.chainId)) {
                  _context.next = 14;
                  break;
                }

                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["setState"])({
                  chainId: true
                }));
                _lib_web3__WEBPACK_IMPORTED_MODULE_8__["default"].currentProvider.on('accountsChanged', function (accounts) {
                  if (accounts && accounts[0]) {
                    return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["setState"])({
                      account: accounts[0]
                    }));
                  }

                  dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["setState"])({
                    readyBuy: false,
                    account: null
                  }));
                });
                _lib_web3__WEBPACK_IMPORTED_MODULE_8__["default"].currentProvider.on('networkChanged', function (networkId) {
                  console.log('network changed', networkId);
                });
                _context.next = 8;
                return _lib_web3__WEBPACK_IMPORTED_MODULE_8__["default"].eth.getAccounts();

              case 8:
                accounts = _context.sent;

                if (!(accounts && accounts[0])) {
                  _context.next = 12;
                  break;
                }

                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["setState"])({
                  readyBuy: true,
                  account: accounts[0]
                }));
                return _context.abrupt("return");

              case 12:
                _context.next = 14;
                break;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _isMetaMask.apply(this, arguments);
    }

    isMetaMask();
    return function () {};
  }, []);

  function chooseNetwork() {
    return sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Oops!", "Please using ".concat(_client_setting_json__WEBPACK_IMPORTED_MODULE_6__.chainText, " network in metamask!"), "error");
  }

  function installMetaMask() {
    return sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Oops!", "MetaMask not found. Please install MetaMask extension!", "error", {
      buttons: {
        chrome: {
          "text": "Chrome",
          "value": "chrome"
        },
        firefox: {
          "text": "Firefox",
          "value": "firefox"
        },
        opera: {
          "text": "Opera",
          "value": "opera"
        }
      }
    }).then(function (value) {
      switch (value) {
        case "chrome":
          return window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn", "_blank");
          break;

        case "firefox":
          return window.open("https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/", "_blank");
          break;

        case "opera":
          return window.open("https://addons.opera.com/en/extensions/details/metamask/", "_blank");

        default:
          break;
      }
    });
  }

  function connectMetaMask() {
    return _connectMetaMask.apply(this, arguments);
  }

  function _connectMetaMask() {
    _connectMetaMask = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var accounts;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _lib_web3__WEBPACK_IMPORTED_MODULE_8__["default"].currentProvider.enable();

            case 3:
              accounts = _context2.sent;

              if (accounts && accounts[0]) {
                dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["setState"])({
                  readyBuy: true,
                  account: accounts[0]
                }));
              }

              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return _connectMetaMask.apply(this, arguments);
  }

  return readyBuy && metaMask && chainId ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ConnectAddressInfo, null) : metaMask ? chainId ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "px-4 py-2 bg-green-light text-white rounded shadow focus:outline-none hover:bg-green mt-2 md:mt-0 flex items-center",
    onClick: function onClick() {
      return connectMetaMask();
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MetaMaskSvg, null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-left pl-2"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "text-grey-darker text-sm"
  }, "Not connected"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "mt-1 font-bold"
  }, "Connect a wallet"))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "px-4 py-2 bg-green-light text-white rounded shadow focus:outline-none hover:bg-green mt-2 md:mt-0 flex items-center",
    onClick: function onClick() {
      return chooseNetwork();
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MetaMaskSvg, null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-left pl-2"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "text-grey-darker text-sm"
  }, "Not connected"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "mt-1 font-bold"
  }, "Connect a wallet"))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "px-4 py-2 bg-green-light text-white rounded shadow focus:outline-none hover:bg-green mt-2 md:mt-0 flex items-center",
    onClick: function onClick() {
      return installMetaMask();
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MetaMaskSvg, null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-left pl-2"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "text-grey-darker text-sm"
  }, "Not connected"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "mt-1 font-bold"
  }, "Connect a wallet")));
}

var ConnectMetaMask = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(function (state) {
  return state;
})(MetaMask);

function Nav() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      hide = _useState2[0],
      setHide = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "bg-white"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {
    className: "container mx-auto flex flex-wrap justify-between items-center px-4 py-4 lg:px-8"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "text-blue no-underline text-4xl font-bold",
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
    className: "w-32",
    viewBox: "0 0 179.64 48.18"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    fill: "#3490dc",
    d: "M7148.37,7181.39a19.88,19.88,0,0,1-9.84-2.28,23.8,23.8,0,0,1-10.08,2.52c-7.62,0-12.06-4-12.06-13.26v-20.22h11.4v19.32c0,3.66,1.74,5.28,5.34,5.28a9,9,0,0,0,3.84-.84v-23.76h11.4Z",
    transform: "translate(-7116.39 -7133.45)"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    fill: "#3490dc",
    d: "M7165.65,7169.51l-1.74-.36c-5.82-1.2-9.6-3.06-9.6-9.72,0-7.44,5.1-11.88,13.68-11.88a29.31,29.31,0,0,1,10.74,2v8a28.19,28.19,0,0,0-8.34-1.44c-3.42,0-4.5.6-4.5,1.44s1.62,1.32,3.78,1.8l1.62.36c5.64,1.26,9.78,3.78,9.78,10.62,0,7.14-5,11.34-13.44,11.34-3.6,0-8.7-.78-12-2.52v-7.92a27.58,27.58,0,0,0,10,1.86c2.88,0,3.84-.36,3.84-1.44S7167.93,7170,7165.65,7169.51Z",
    transform: "translate(-7116.39 -7133.45)"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    fill: "#3490dc",
    d: "M7220.61,7181.39a19.82,19.82,0,0,1-9.66-2.22,21.46,21.46,0,0,1-10,2.46c-9.48,0-15.78-6.78-15.78-17s6.66-17.1,16.62-17.1a17.67,17.67,0,0,1,7.38,1.68v-12.48l11.4-3.3Zm-16.68-8.64a12.15,12.15,0,0,0,5.28-1.38v-13.68a10.69,10.69,0,0,0-4.56-1.26c-4.62,0-7.68,3.24-7.68,8.16S7199.55,7172.75,7203.93,7172.75Z",
    transform: "translate(-7116.39 -7133.45)"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    fill: "#3490dc",
    d: "M7258.89,7168.61h-20.82c.54,2.82,2.22,4.14,7.74,4.14a48,48,0,0,0,11.22-1.68v8.34a42.54,42.54,0,0,1-13.92,2.22c-10.14,0-16.8-5.52-16.8-16.62,0-10.44,6.6-17.46,16.5-17.46s16.5,6.6,16.5,16.5A26.77,26.77,0,0,1,7258.89,7168.61Zm-20.88-7.2h9.66c-.48-3.24-1.92-5.34-4.8-5.34S7238.49,7158.17,7238,7161.41Z",
    transform: "translate(-7116.39 -7133.45)"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    fill: "#3490dc",
    d: "M7283.43,7181q-2.43-4.5-5-8.82c-1.8,2.88-3.54,5.82-5.1,8.82h-12.6a175.47,175.47,0,0,1,11.28-17.16,183,183,0,0,1-10.74-15.72h12.6c1.38,2.4,2.88,4.92,4.5,7.5,1.56-2.58,3.06-5.1,4.44-7.5h12.6a181.72,181.72,0,0,1-10.68,15.66A177.13,177.13,0,0,1,7296,7181Z",
    transform: "translate(-7116.39 -7133.45)"
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "md:hidden w-6 h-6 focus:outline-none flex",
    onClick: function onClick() {
      return setHide(!hide);
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
    className: "w-full h-full fill-current text-blue-darker",
    viewBox: "0 0 448 512"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    fill: "currentColor",
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "w-full text-right md:flex-1 md:flex md:justify-center md:items-center ".concat(hide ? 'hidden' : '')
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "block text-blue-darker no-underline font-bold hover:text-blue mt-2 md:mr-8 md:mt-0",
    href: "/network"
  }, "Network"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "block text-blue-darker no-underline font-bold hover:text-blue mt-2 md:mt-0",
    href: ""
  }, "Help")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "w-full text-right md:w-auto md:block ".concat(hide ? 'hidden' : '')
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ConnectMetaMask, null))));
}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.28d0df22fa52deb6e679.hot-update.js.map