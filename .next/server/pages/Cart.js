module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B73o");


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "B73o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// CONCATENATED MODULE: ./src/Components/CartItem.js
var __jsx = external_react_default.a.createElement;


const useStyles = Object(core_["makeStyles"])({
  root: {
    overflow: 'hidden',
    border: '1px solid #dcdcdc',
    display: 'flex',
    marginBottom: '-1px'
  },
  infoContainer: {
    display: 'flex'
  },
  image: {
    height: 120
  },
  info: {
    padding: 5
  },
  qty: {},
  btns: {
    borderRadius: 0
  }
});

const CartItem = ({
  element,
  addToCart
}) => {
  const classes = useStyles();
  const {
    0: quantity,
    1: setQuantity
  } = Object(external_react_["useState"])(1);

  const incQuantity = () => {
    setQuantity(quantity + 1);
  };

  return __jsx(core_["Grid"], {
    container: true,
    className: classes.root,
    direction: "row",
    alignItems: "center"
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    className: classes.infoContainer
  }, __jsx("img", {
    src: element.img,
    className: classes.image
  }), __jsx("div", {
    className: classes.info
  }, __jsx(core_["Typography"], {
    variant: "h6",
    className: classes.title
  }, element.name), __jsx(core_["Typography"], null, "\xA3", element.price))), __jsx(core_["Grid"], {
    item: true,
    xs: 5,
    sm: 2,
    className: classes.qty,
    direction: "column"
  }, __jsx(core_["Typography"], null, "QTY: ", quantity)), __jsx(core_["Grid"], {
    item: true,
    xs: 5,
    sm: 2,
    direction: "column"
  }, __jsx(core_["Button"], {
    variant: "contained",
    color: "primary",
    disableElevation: true,
    className: classes.btns,
    onClick: () => {
      addToCart(element);
      incQuantity();
    }
  }, "+"), __jsx(core_["Button"], {
    variant: "contained",
    color: "secondary",
    disableElevation: true,
    className: classes.btns
  }, "-")));
};

/* harmony default export */ var Components_CartItem = (CartItem);
// CONCATENATED MODULE: ./src/Components/CheckoutBox.js
var CheckoutBox_jsx = external_react_default.a.createElement;



const CheckoutBox_useStyles = Object(styles_["makeStyles"])({
  root: {},
  info: {
    padding: 20
  },
  buttonsBox: {
    borderTop: '1px solid #DCDCDC',
    padding: '20px 0px 20px 20px'
  },
  checkoutBtn: {
    borderRadius: 0,
    height: 60
  },
  clearBtn: {
    borderRadius: 0,
    width: 70,
    backgroundColor: 'white'
  }
});

const CheckoutBox = ({
  cart,
  cartPrice,
  clearCart
}) => {
  const classes = CheckoutBox_useStyles();
  return CheckoutBox_jsx("div", {
    className: classes.root
  }, CheckoutBox_jsx("div", {
    className: classes.info
  }, CheckoutBox_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, "Total Items"), CheckoutBox_jsx(core_["Typography"], {
    variant: "h4"
  }, cart.length), CheckoutBox_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, "Price"), CheckoutBox_jsx(core_["Typography"], {
    variant: "h4"
  }, "\xA3", Math.round(cartPrice * 100 + Number.EPSILON) / 100)), CheckoutBox_jsx("div", {
    className: classes.buttonsBox
  }, CheckoutBox_jsx(core_["Button"], {
    variant: "contained",
    color: "primary",
    disableElevation: true,
    className: classes.checkoutBtn
  }, "CHECKOUT"), CheckoutBox_jsx(core_["Button"], {
    variant: "contained",
    color: "secondary",
    disableElevation: true,
    className: classes.clearBtn,
    onClick: () => clearCart()
  }, "CLEAR")));
};

/* harmony default export */ var Components_CheckoutBox = (CheckoutBox);
// CONCATENATED MODULE: ./src/pages/Cart.js
var Cart_jsx = external_react_default.a.createElement;





 // for qty could make a local state for qty in the item component then have
// another one for the price it outputs which would be its original price times
// the qty

const Cart_useStyles = Object(styles_["makeStyles"])({
  daddy: {
    backgroundColor: 'white'
  },
  title: {
    padding: 15
  },
  itemsList: {
    marginBottom: 30,
    width: '100%',
    marginLeft: '3vw'
  },
  checkoutBox: {
    border: '1px solid #DCDCDC',
    marginBottom: 20,
    marginLeft: '-1px',
    minWidth: 150,
    height: 300,
    width: '100%'
  },
  empty: {
    border: '1px solid #DCDCDC',
    padding: 5
  }
});

const Cart = ({
  cart,
  cartPrice,
  clearCart,
  addToCart
}) => {
  const classes = Cart_useStyles();
  const {
    0: price,
    1: setPrice
  } = Object(external_react_["useState"])(0);
  return Cart_jsx("div", {
    className: classes.daddy
  }, Cart_jsx(core_["Grid"], {
    container: true,
    direction: "row"
  }, Cart_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: classes.title
  }, Cart_jsx(Typography_default.a, {
    variant: "h4",
    align: "center"
  }, "CART")), Cart_jsx(core_["Grid"], {
    item: true,
    md: 8,
    sm: 12,
    className: classes.itemsList
  }, cart ? cart.map((item, i) => Cart_jsx(Components_CartItem, {
    addToCart: addToCart,
    element: item,
    key: i
  })) : Cart_jsx(Typography_default.a, {
    variant: "h5",
    className: classes.empty
  }, "EMPTY!")), Cart_jsx(core_["Grid"], {
    item: true,
    md: 3,
    sm: 12,
    className: classes.checkoutBox
  }, Cart_jsx(Components_CheckoutBox, {
    cart: cart,
    cartPrice: cartPrice,
    clearCart: clearCart
  }))));
};

/* harmony default export */ var pages_Cart = __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });