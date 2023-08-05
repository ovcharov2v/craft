/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/_dropdown.js":
/*!****************************************!*\
  !*** ./src/js/components/_dropdown.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var dropdownList = document.querySelectorAll('.dropdown');
if (dropdownList.length) {
  dropdownList.forEach(function (dropdown) {
    dropdown.addEventListener('click', function (evt) {
      evt.stopPropagation();
      dropdown.classList.toggle('dropdown--active');
      dropdownList.forEach(function (el) {
        if (el !== dropdown) {
          el.classList.remove('dropdown--active');
        }
      });
    });
    var input = dropdown.querySelector('.dropdown__value');
    var optionsList = dropdown.querySelectorAll('.dropdown__option');
    optionsList.forEach(function (option) {
      option.addEventListener('click', function (e) {
        e.preventDefault();
        if (dropdown.classList.contains('dropdown--navigate')) {
          window.location.href = option.dataset.value;
        } else {
          input.value = option.dataset.value;
          dropdown.querySelector('.dropdown__option--selected').classList.remove('dropdown__option--selected');
          option.classList.add('dropdown__option--selected');
          if (dropdown.classList.contains('dropdown--with-flag')) {
            var currentFlag = dropdown.querySelector('.dropdown__value-box .dropdown__flag');
            var nextFlag = option.querySelector('.dropdown__flag');
            currentFlag.src = nextFlag.src;
          }
        }
      });
    });
  });
}
document.addEventListener('click', closeAllSelects);
function closeAllSelects() {
  dropdownList.forEach(function (dropdown) {
    dropdown.classList.remove('dropdown--active');
  });
}

/***/ }),

/***/ "./src/js/components/_form.js":
/*!************************************!*\
  !*** ./src/js/components/_form.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var phoneInputList = document.querySelectorAll('input[type="tel"]');
  if (!phoneInputList.length) return;
  phoneInputList.forEach(function (phoneInput) {
    Object(imask__WEBPACK_IMPORTED_MODULE_0__["default"])(phoneInput, {
      mask: '+{7} 000 000 00 00'
    });
  });
});

/***/ }),

/***/ "./src/js/components/_header.js":
/*!**************************************!*\
  !*** ./src/js/components/_header.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function headerWatcher() {
  var header = document.querySelector('.header');
  if (!header) return;
  var isHeaderFixed = header.classList.contains('header--fixed');
  if (window.scrollY < 600) {
    if (isHeaderFixed) {
      header.style.transform = 'translateY(-100%)';
      setTimeout(function () {
        header.classList.remove('header--fixed');
        header.style.transform = '';
      }, 300);
    }
  } else {
    if (!isHeaderFixed) {
      header.style.transform = 'translateY(-100%)';
      setTimeout(function () {
        header.classList.add('header--fixed');
        header.style.transform = '';
      }, 300);
    }
  }
  requestAnimationFrame(headerWatcher);
}
headerWatcher();

/***/ }),

/***/ "./src/js/components/_modal.js":
/*!*************************************!*\
  !*** ./src/js/components/_modal.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");



// Open modal window
var modalLinks = document.querySelectorAll('[data-modal]');
modalLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    showModal(e.target.dataset.modal);
    return false;
  });
});

// Show modal window
function showModal(modalName) {
  var modal = document.querySelector("#".concat(modalName));
  if (!modal) {
    console.log("Modal #".concat(modalName, " does not exist!"));
    return;
  }
  if (document.querySelector('.modal--shown')) {
    closeModal();
  }
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  modal.classList.add('modal--show');
  initSlider(modal);
  setTimeout(function () {
    modal.classList.add('modal--backdrop');
  }, 50, modal);
  setTimeout(function () {
    modal.classList.add('modal--shown');
  }, 300, modal);
}

// Close modal window
function closeModal() {
  var modal = document.querySelector('.modal--shown');
  modal.classList.remove('modal--shown');
  setTimeout(function () {
    modal.classList.remove('modal--backdrop');
  }, 150, modal);
  setTimeout(function () {
    modal.classList.remove('modal--show');
  }, 350, modal);
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
}
var closeButtons = document.querySelectorAll('.js-modal-close');
closeButtons.forEach(function (button) {
  button.addEventListener('click', closeModal);
});

// Close on backdrop click
var modalList = document.querySelectorAll('.modal');
if (modalList) {
  modalList.forEach(function (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target.classList.contains('modal')) {
        closeModal();
      }
    });
  });
}
var slider = null;
var initSlider = function initSlider(modal) {
  var sliderEl = modal.querySelector('.modal__slider');
  if (!sliderEl || slider) return;
  slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderEl, {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["EffectCreative"]],
    watchSlidesProgress: true,
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    effect: "creative",
    centeredSlides: true,
    creativeEffect: {
      limitProgress: 5,
      prev: {
        translate: ['-100%', 0, 0],
        scale: [.7]
      },
      next: {
        translate: ['100%', 0, 0],
        scale: [.7]
      }
    }
  });
  setInterval(function () {
    slider.slideNext();
  }, 1000, slider);
};

/***/ }),

/***/ "./src/js/components/_section-instant.js":
/*!***********************************************!*\
  !*** ./src/js/components/_section-instant.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


document.addEventListener('DOMContentLoaded', function () {
  var sliderEl = document.querySelector('.section-instant__slider .swiper');
  if (!sliderEl) return;
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderEl, {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__["Navigation"]],
    slidesPerView: 4,
    spaceBetween: 24,
    grabCursor: true,
    navigation: {
      nextEl: ".section-instant__slider-btn--next",
      prevEl: ".section-instant__slider-btn--prev"
    }
  });
});

/***/ }),

/***/ "./src/js/components/_section-winners.js":
/*!***********************************************!*\
  !*** ./src/js/components/_section-winners.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var loadWinnersBtn = document.querySelector('.section-winners__button');
  if (!loadWinnersBtn) return;
  loadWinnersBtn.addEventListener('click', function () {
    var hiddenWinnersList = document.querySelectorAll('.section-winners__row--hidden');
    if (!hiddenWinnersList.length) return;
    hiddenWinnersList.forEach(function (winner, index) {
      winner.classList.add('section-winners__row--hide');
      winner.classList.remove('section-winners__row--hidden');
      setInterval(function () {
        winner.classList.remove('section-winners__row--hide');
      }, 70 * index);
    });
    loadWinnersBtn.classList.add('section-winners__button--hidden');
  });
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_header */ "./src/js/components/_header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_section_instant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_section-instant */ "./src/js/components/_section-instant.js");
/* harmony import */ var _components_section_winners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_section-winners */ "./src/js/components/_section-winners.js");
/* harmony import */ var _components_section_winners__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_section_winners__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/_dropdown */ "./src/js/components/_dropdown.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_modal */ "./src/js/components/_modal.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/_form */ "./src/js/components/_form.js");








/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=main.js.map