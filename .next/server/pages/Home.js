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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zldw");


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "zldw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    marginTop: 5,
    display: 'flex'
  },
  mobContainer: {
    marginBottom: 10,
    borderRadius: 0
  },
  imgContainer: {
    minWidth: '100%',
    marginBottom: 10,
    borderRadius: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  media: {
    height: 600,
    position: 'relative'
  },
  mediaDesk: {
    height: 400,
    width: '50%'
  },
  overlay: {
    position: 'absolute',
    left: '20%',
    top: '20%',
    transform: 'translate(-10%, 50%)',
    color: 'white'
  },
  overlayDesk: {
    position: 'absolute',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  overlayBtn: {
    border: '2px solid white',
    color: 'white',
    fontSize: 18,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
    }
  },
  trendingImg: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 120,
    height: 120,
    objectFit: 'cover',
    borderRadius: '75px'
  }
});

const Home = () => {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  const isMobile = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])(theme.breakpoints.down('sm'));
  const trendingItems = [{
    0: {
      "img": 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fee%2F18%2Fee181337ce131ae050e02dc903e0124b1aa1b2bd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_jumpers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      "name": "Women's jumpers"
    },
    1: {
      "img": 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe4%2Fd6%2Fe4d692dc39d54a030c6ccfd205c1d552dc2cc189.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_blazerssuits_blazers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      "name": "Men's suits"
    },
    2: {
      "img": 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F81%2F22%2F812251eb67d5cc7ea3b47e05ffeeba6958a75eff.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_shoes_boots%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      "name": "boots"
    },
    3: {
      "img": 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7d%2Fcc%2F7dcc8017a2e0ae5f82be6f87fc50a35eff2ad8e8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_dresses_party%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      "name": "Sequined dresses"
    }
  }];
  const trendingItemsMob = Object.entries(trendingItems[0]).slice(0, 3);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    direction: "column",
    justify: "left",
    className: classes.root
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true
  }, isMobile ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: classes.mobContainer
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"], {
    className: classes.media,
    image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa8%2Ff5%2Fa8f50561b3ba5f411bc5fcd92d92a389e6e4c426.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_jumpers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
  }), __jsx("div", {
    className: classes.overlay
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    align: "left"
  }, "SALE ON WOMEN'S JUMPERS"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: classes.overlayBtn
  }, "shop now"))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: classes.imgContainer
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"], {
    className: classes.mediaDesk,
    image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa8%2Ff5%2Fa8f50561b3ba5f411bc5fcd92d92a389e6e4c426.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_jumpers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"], {
    className: classes.mediaDesk,
    image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7b%2F8c%2F7b8cbf70d163a2fa88566ac9d0f8b13f5f6c0997.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_jumpers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
  }), __jsx("div", {
    className: classes.overlayDesk
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h3",
    align: "center"
  }, "SALE ON WOMEN'S JUMPERS"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: classes.overlayBtn,
    size: "large",
    style: {
      width: 150
    }
  }, "SHOP NOW")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    container: true,
    direction: "row"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      padding: 10
    },
    raised: true
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    style: {
      marginBottom: 5
    },
    variant: "h4",
    align: "center"
  }, "trending items"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true
  }, isMobile ? trendingItemsMob.map((item, i) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    key: i,
    item: true,
    xs: 4
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActionArea"], {
    className: classes.trendingItem
  }, __jsx("img", {
    className: classes.trendingImg,
    src: item[1].img
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    align: "center"
  }, item[1].name)))) : Object.entries(trendingItems[0]).map((item, i) => (console.log(item), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    key: i,
    item: true,
    sm: 3
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActionArea"], {
    className: classes.trendingItem
  }, __jsx("img", {
    className: classes.trendingImg,
    src: item[1].img
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    align: "center"
  }, item[1].name))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

/******/ });