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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("yNaw");


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "EAEr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),

/***/ "FQAE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "PxrZ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "YeXC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "lOH7":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "s051":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "thJL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "yNaw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__("YeXC");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CardMedia"
var CardMedia_ = __webpack_require__("s051");
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/CardActionArea"
var CardActionArea_ = __webpack_require__("lOH7");
var CardActionArea_default = /*#__PURE__*/__webpack_require__.n(CardActionArea_);

// EXTERNAL MODULE: external "@material-ui/core/CardActions"
var CardActions_ = __webpack_require__("PxrZ");
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__("thJL");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/icons/Share"
var Share_ = __webpack_require__("EAEr");
var Share_default = /*#__PURE__*/__webpack_require__.n(Share_);

// EXTERNAL MODULE: external "@material-ui/icons/ShoppingCart"
var ShoppingCart_ = __webpack_require__("FQAE");
var ShoppingCart_default = /*#__PURE__*/__webpack_require__.n(ShoppingCart_);

// CONCATENATED MODULE: ./src/Components/DisplayResults.js
var __jsx = external_react_default.a.createElement;











const useStyles = Object(styles_["makeStyles"])({
  root: {
    width: '110',
    borderRadius: 0,
    margin: '5px 5px'
  },
  media: {
    height: 350
  },
  btn: {
    backgroundColor: "lightGrey"
  }
});

const DisplayResults = ({
  element,
  addToCart
}) => {
  const classes = useStyles();
  return __jsx(Card_default.a, {
    className: classes.root
  }, __jsx(CardActionArea_default.a, null, __jsx(CardMedia_default.a, {
    className: classes.media,
    image: element.img,
    title: "Contemplative Reptile"
  }), __jsx(CardContent_default.a, null, __jsx(Typography_default.a, {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, element.name), __jsx(Typography_default.a, {
    gutterBottom: true,
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, element.description), __jsx(Typography_default.a, {
    variant: "body2",
    color: "textPrimary",
    component: "p"
  }, "\xA3", element.price, __jsx("br", null), "Tags: ", element.tags))), __jsx(CardActions_default.a, null, __jsx(Button_default.a, {
    className: classes.btn,
    size: "small",
    color: "primary",
    onClick: () => {
      addToCart(element);
    }
  }, __jsx(ShoppingCart_default.a, null)), __jsx(Button_default.a, {
    className: classes.btn,
    size: "small",
    color: "primary"
  }, __jsx(Share_default.a, null))));
};

/* harmony default export */ var Components_DisplayResults = (DisplayResults);
// CONCATENATED MODULE: ./src/pages/Results.js
var Results_jsx = external_react_default.a.createElement;







const Results_useStyles = Object(styles_["makeStyles"])({
  noResultsContainer: {
    height: 800,
    marginTop: -2
  },
  root: {
    maxWidth: '100%',
    borderRadius: 0
  },
  media: {
    height: 800
  },
  overlay: {
    position: 'absolute',
    top: '5%',
    left: '50%',
    color: 'white',
    transform: 'translate(-50%, 50%)',
    border: '8px solid white',
    padding: '2px',
    textAlign: 'center'
  }
});

const Results = ({
  results,
  addToCart
}) => {
  const classes = Results_useStyles();
  return Results_jsx("div", null, results.length < 1 ? Results_jsx(external_react_default.a.Fragment, null, Results_jsx(Grid_default.a, {
    container: true
  }, Results_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    className: classes.noResultsContainer
  }, Results_jsx(Card_default.a, {
    className: classes.root
  }, Results_jsx(CardMedia_default.a, {
    className: classes.media,
    image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/empty-closet-shelves-psycho-shadow.jpg",
    title: "No Results"
  }), Results_jsx(Typography_default.a, {
    className: classes.overlay,
    variant: "h2",
    fontWeight: "fontWeightBold"
  }, "OH NO! NOTHING FOUND."))))) : Results_jsx(external_react_default.a.Fragment, null, "Search Results:", Results_jsx(Grid_default.a, {
    container: true,
    direction: "column"
  }, Results_jsx(Grid_default.a, {
    container: true
  }, results.map((item, i) => Results_jsx(Grid_default.a, {
    item: true,
    md: 4,
    sm: 6,
    xs: 12,
    key: i
  }, Results_jsx(Components_DisplayResults, {
    element: item[1],
    addToCart: addToCart
  })))))));
};

/* harmony default export */ var pages_Results = __webpack_exports__["default"] = (Results);

/***/ })

/******/ });