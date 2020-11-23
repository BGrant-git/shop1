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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZP1w");


/***/ }),

/***/ "EAEr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),

/***/ "FQAE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "ZP1w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cPsG");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("EAEr");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("FQAE");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // lay it out horiz
// so pic to the left, description and info to the right
// potentially put a local state in here to store the item

const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    display: 'flex',
    padding: 20
  },
  mobileCard: {
    borderRadius: 0,
    textAlign: 'center'
  },
  mobImg: {
    width: '100%',
    height: 350,
    margin: 'auto'
  },
  mobBtns: {
    justifyContent: 'center'
  },
  deskCard: {
    borderRadius: 0
  },
  deskImg: {
    height: 285,
    marginBottom: -3
  },
  deskText: {
    padding: 5
  },
  deskBtnsBox: {
    padding: 5,
    marginTop: 190
  },
  deskBtns: {
    margin: 2,
    padding: 5
  },
  type: {
    padding: 15
  }
});

const Product = ({
  viewProduct,
  addToCart
}) => {
  const classes = useStyles();
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()(theme.breakpoints.down('sm'));
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "column",
    className: classes.root,
    style: !isMobile ? {
      marginBottom: 200
    } : null
  }, isMobile ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.mobileCard
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.type,
    variant: "h4"
  }, viewProduct.name.toUpperCase()), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.mobImg,
    image: viewProduct.img,
    title: "img"
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.type,
    variant: "body1"
  }, viewProduct.description), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "\xA3", viewProduct.price), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.type,
    variant: "body2"
  }, "Tags: ", viewProduct.tags), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    className: classes.mobBtns
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary",
    onClick: () => {
      addToCart(viewProduct);
    },
    variant: "contained"
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4___default.a, null)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary",
    variant: "contained"
  }, __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_3___default.a, null)))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.deskCard
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    container: true,
    direction: "row"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 3
  }, __jsx("img", {
    src: viewProduct.img,
    className: classes.deskImg
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 7,
    className: classes.type
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    className: classes.deskText
  }, viewProduct.name.toUpperCase()), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    className: classes.deskText
  }, viewProduct.description), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    className: classes.deskText
  }, "\xA3", viewProduct.price), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle1"
  }, "Tags: ", viewProduct.tags)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    sm: 2,
    className: classes.deskBtnsBox
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary",
    onClick: () => {
      addToCart(viewProduct);
    },
    variant: "contained",
    className: classes.deskBtns
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4___default.a, null)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary",
    variant: "contained",
    className: classes.deskBtns
  }, __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_3___default.a, null)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPsG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ })

/******/ });