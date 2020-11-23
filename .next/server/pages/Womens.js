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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Pyic");


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "FQAE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "GYHf":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "PxrZ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "Pyic":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__("YeXC");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CardActionArea"
var CardActionArea_ = __webpack_require__("lOH7");
var CardActionArea_default = /*#__PURE__*/__webpack_require__.n(CardActionArea_);

// EXTERNAL MODULE: external "@material-ui/core/CardMedia"
var CardMedia_ = __webpack_require__("s051");
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// CONCATENATED MODULE: ./src/Components/WomensBanner.js
var __jsx = external_react_default.a.createElement;







const useStyles = Object(styles_["makeStyles"])({
  root: {
    minWidth: '100%',
    borderRadius: 0,
    marginTop: 5
  },
  media: {
    height: 100
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: '50%',
    color: 'white',
    transform: 'translate(-50%, 8%)',
    border: '4px solid white',
    padding: '2px'
  }
});

const WomensBanner = () => {
  const classes = useStyles();
  const theme = Object(styles_["useTheme"])();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('sm'));
  return __jsx(Card_default.a, {
    className: classes.root
  }, __jsx(CardActionArea_default.a, null, __jsx(CardMedia_default.a, {
    className: classes.media,
    image: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }), isMobile ? __jsx(Typography_default.a, {
    className: classes.overlay,
    variant: "h3"
  }, "WOMEN'S") : __jsx(Typography_default.a, {
    className: classes.overlay,
    variant: "h2",
    fontWeight: "fontWeightBold"
  }, "WOMEN'S")));
};

/* harmony default export */ var Components_WomensBanner = (WomensBanner);
// EXTERNAL MODULE: ./src/Components/SortBy.js
var SortBy = __webpack_require__("qqxX");

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: external "@material-ui/core/CardActions"
var CardActions_ = __webpack_require__("PxrZ");
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__("thJL");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/icons/ShoppingCart"
var ShoppingCart_ = __webpack_require__("FQAE");
var ShoppingCart_default = /*#__PURE__*/__webpack_require__.n(ShoppingCart_);

// CONCATENATED MODULE: ./src/Components/WomensClothesItems.js
var WomensClothesItems_jsx = external_react_default.a.createElement;










 // 

const WomensClothesItems_useStyles = Object(styles_["makeStyles"])({
  root: {
    width: '110',
    borderRadius: 0,
    margin: '5px 5px'
  },
  media: {
    height: 350
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
});

const WomensClothesItems = ({
  element,
  addToCart,
  getViewProduct
}) => {
  const classes = WomensClothesItems_useStyles();
  return WomensClothesItems_jsx(Card_default.a, {
    className: classes.root
  }, WomensClothesItems_jsx(external_react_router_dom_["NavLink"], {
    to: "/product",
    className: classes.link,
    onClick: () => {
      getViewProduct(element);
    }
  }, WomensClothesItems_jsx(CardActionArea_default.a, null, WomensClothesItems_jsx(CardMedia_default.a, {
    className: classes.media,
    image: element.img
  }), WomensClothesItems_jsx(CardContent_default.a, null, WomensClothesItems_jsx(Typography_default.a, {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, element.name), WomensClothesItems_jsx(Typography_default.a, {
    variant: "h6",
    color: "textPrimary",
    component: "p"
  }, "\xA3", element.price), WomensClothesItems_jsx(Typography_default.a, {
    variant: "body2",
    color: "textPrimary",
    component: "p"
  }, element.tags)))), WomensClothesItems_jsx(CardActions_default.a, null, WomensClothesItems_jsx(Button_default.a, {
    size: "small",
    color: "primary",
    variant: "contained",
    onClick: () => {
      addToCart(element);
    }
  }, WomensClothesItems_jsx(ShoppingCart_default.a, null))));
};

/* harmony default export */ var Components_WomensClothesItems = (WomensClothesItems);
// CONCATENATED MODULE: ./src/pages/Womens.js
var Womens_jsx = external_react_default.a.createElement;






const Womens = ({
  productsWomens,
  addToCart,
  getViewProduct
}) => {
  return Womens_jsx("div", null, Womens_jsx(Grid_default.a, {
    container: true,
    direction: "column"
  }, Womens_jsx(Grid_default.a, {
    item: true
  }, Womens_jsx(Components_WomensBanner, null)), Womens_jsx(Grid_default.a, {
    item: true
  }, Womens_jsx(SortBy["a" /* default */], null)), Womens_jsx(Grid_default.a, {
    container: true
  }, productsWomens.map((item, i) => Womens_jsx(Grid_default.a, {
    item: true,
    md: 4,
    sm: 6,
    xs: 12,
    key: i
  }, Womens_jsx(Components_WomensClothesItems, {
    addToCart: addToCart,
    element: item[1],
    getViewProduct: getViewProduct
  }))))));
};

/* harmony default export */ var pages_Womens = __webpack_exports__["default"] = (Womens);

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "YeXC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPsG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "lOH7":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "qqxX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0LMq");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("c25J");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("W+03");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("x54t");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("GYHf");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: 5,
    backgroundColor: '#e0e0e0'
  }
}));
const options = ['A-Z', 'Z-A', 'Price: High to Low', 'Price: Low to High'];

const SortBy = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const [selectedIndex, setSelectedIndex] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(1);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return __jsx("div", {
    className: classes.root
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    component: "nav",
    "aria-label": "Sort By"
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    button: true,
    "aria-haspopup": "true",
    "aria-controls": "lock-menu",
    "aria-label": "Sort By",
    onClick: handleClickListItem
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {
    primary: "Sort By",
    secondary: options[selectedIndex]
  }))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "lock-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, options.map((option, index) => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    key: option,
    selected: index === selectedIndex,
    onClick: event => handleMenuItemClick(event, index)
  }, option))));
};

/* harmony default export */ __webpack_exports__["a"] = (SortBy);

/***/ }),

/***/ "s051":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "thJL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ })

/******/ });