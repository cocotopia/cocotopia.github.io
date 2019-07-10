function udm_(e,t){var n="comScore=",r=document,i=r.cookie,s="",o="indexOf",u="substring",a="length",f=2048,l,c="&ns_",h="&",p,d,v,m,g=window,y=g.encodeURIComponent||escape;if(i[o](n)+1)for(v=0,d=i.split(";"),m=d[a];v<m;v++)p=d[v][o](n),p+1&&(s=h+unescape(d[v][u](p+n[a])));e+=c+"_t="+ +(new Date)+c+"c="+(r.characterSet||r.defaultCharset||"")+(g===g.top?"":c+"if=1")+"&cv=3.1&c8="+y(r.title)+s+"&c7="+y(r.URL)+"&c9="+y(r.referrer),e[a]>f&&e[o](h)>0&&(l=e[u](0,f-8).lastIndexOf(h),e=(e[u](0,l)+c+"cut="+y(e[u](l+1)))[u](0,f)),r.images?(p=new Image,g.ns_p||(ns_p=p),typeof t=="function"&&(p.onload=p.onerror=t),p.src=e):r.write("<","p","><",'img src="',e,'" height="1" width="1" alt="*"',"><","/p",">")}typeof _comscore=="undefined"&&(_comscore=[]),function(){var e="length",t=window,n=t.encodeURIComponent?encodeURIComponent:escape,r,i=function(t){if(t){var r,i=[],s,o=0,u,a,f="";for(var l in t){s=typeof t[l];if(s=="string"||s=="number")i[i[e]]=l+"="+n(t[l]),l=="c2"?f=t[l]:l=="c1"&&(o=1)}if(i[e]<=0||f=="")return;a=t.options||{},a.d=a.d||document;if(typeof a.url_append=="string"){u=a.url_append.replace(/&amp;/,"&").split("&");for(var l=0,c=u[e],h;l<c;l++)h=u[l].split("="),h[e]==2&&(i[i[e]]=h[0]+"="+n(h[1]))}r=[a.d.URL.charAt(4)=="s"?"//sb":"//b",".scorecardresearch.com/b?",o?"":"c1=2&",i.join("&").replace(/&$/,"")],udm_(r.join(""))}},s=function(t){t=t||_comscore;for(var n=0,r=t[e];n<r;n++)i(t[n]);t=_comscore=[]};s(),(r=t.COMSCORE)?(r.purge=s,r.beacon=i):COMSCORE={purge:s,beacon:i}}();

!(function() {

    var ArcPWPaused = false;
    var ArcPWRules = [{"e":[true],"pw":"https://pre01.gestion.pe/registro","rt":[">",3],"id":202},{"e":[true,"2321321321321312323"],"pw":"https://pre01.gestion.pe/suscripcion","rt":[">",5],"id":203}];
    var ArcPWPublishTimestamp = 1562715112408
    window["ArcP"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../paywall-core/lib/index.js":
/*!************************************!*\
 !*** ../paywall-core/lib/index.js ***!
 \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectSpread(target) {
 for (var i = 1; i < arguments.length; i++) {
   var source = arguments[i] != null ? arguments[i] : {};
   var ownKeys = Object.keys(source);

   if (typeof Object.getOwnPropertySymbols === 'function') {
     ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
       return Object.getOwnPropertyDescriptor(source, sym).enumerable;
     }));
   }

   ownKeys.forEach(function (key) {
     _defineProperty(target, key, source[key]);
   });
 }

 return target;
}

function _defineProperty(obj, key, value) {
 if (key in obj) {
   Object.defineProperty(obj, key, {
     value: value,
     enumerable: true,
     configurable: true,
     writable: true
   });
 } else {
   obj[key] = value;
 }

 return obj;
}

var evaluationTechniques = {
 '>': evaluateScalar.bind(null, '>'),
 '<': evaluateScalar.bind(null, '<'),
 '=': evaluateScalar.bind(null, '='),
 '!=': evaluateScalar.bind(null, '!='),
 '*': evaluateMatch.bind(null, true),
 '!*': evaluateMatch.bind(null, false),
 true: evaluateIn.bind(null, true),
 false: evaluateIn.bind(null, false)
};
var LOG_PREFIX = '[ArcP]';
/**
* Compares a timetsamp to see if it today is the first of the month but the timestamp is
* from a different day (used to expire things when the new month rolls in)
*
* @param {number} timeStamp - timeStamp in milliseconds from epoch.
*
* @return {Boolean} - true if it should be cleared false if not.
*/

function checkForFirstOfMonth() {
 var timeStamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
 var today = new Date();
 var lastUpdated = new Date(timeStamp);
 return today.getDate() === 1 && lastUpdated.getDate() !== 1;
}
/**
* Adds a read count to the appropriate places based on the parameters passed.
*
* @param {Number} ruleId, Id of the rule which the read count should be added to
* @param {Object} readCounts - An object that contains previous readcount data (from long-term storage}
*/


function addReadCount(ruleId, readCounts) {
 if (!readCounts) {
   return;
 }

 readCounts = checkForFirstOfMonth(readCounts.lastUpdated) ? {
   c: {}
 } : readCounts;
 var currentCountForId = readCounts.c[ruleId] || 0;
 readCounts.c[ruleId] = currentCountForId + 1;
 readCounts.lastUpdated = Date.now();
 return readCounts;
}
/**
* Checks if a reader is exempt to a certain rule
*
* @param {object} rule
* @param {object} [sub={}]
* @param {object} [reg={}]
* @returns {boolean} - true if reader is exempt to this rule; false otherwise.
*/


function isExemptToRule(rule) {
 var sub = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
 var reg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

 if (Array.isArray(rule.e) && rule.e.length === 1) {
   return !!reg.l;
 } else {
   return Array.isArray(sub.p) && sub.p.some(function (sku) {
     return evaluate(rule.e, sku);
   });
 }
}
/**
* Evaluates whether the fact matches (or not, based on the modifier) any of the conditions in the conditions array.
* If a matcher is not passed in, it will simply do an indexOf with each condition against the fact.
* i.e `(condition.indexOf(fact) >= 0)`
*
* @param {boolean} modifier
* @param {Array} conditions
* @param {string} fact
* @param {function} regexpCreator - This function should take one argument and return a RegExp object. Defaults to /fact/
*
* @returns {boolean} true if the fact matches (or not, based on modifier being false) any of the conditions passed in.
*/


function evaluateMatch(modifier, conditions, fact, regexpCreator) {
 return conditions.some(function (condition) {
   var result = false;

   if (typeof regexpCreator === 'function') {
     var regexp = regexpCreator(condition);
     result = regexp.test(fact);
   } else {
     result = condition.indexOf(fact) >= 0;
   }

   return !!(result ^ !modifier);
 });
}

function evaluateIn(modifier, conditions, fact) {
 return !!(conditions.indexOf(fact) >= 0 ^ !modifier);
}
/**
* Evaluates scalar values based on a modifier.
*
* @param {string} modifier - can be '<', '>', '=' or '!='
* @param {Array} conditions - an array with its first element as a number
* @param {string} fact
*
* @returns {boolean} true if the condition is passed.
*/


function evaluateScalar(modifier, conditions, fact) {
 var condition = conditions[0];

 if (!isNaN(parseInt(condition))) {
   switch (modifier) {
     case '>':
       return fact > conditions[0];

     case '<':
       return fact < conditions[0];

     case '=':
       return conditions[0] === fact;

     case '!=':
       return conditions[0] != fact;

     default:
       return true;
     // shouldn't happen, but just in case!
   }
 }
}
/**
* Returns true if both the `condition` and `fact` are valid. For the `condition` to be valid
* it needs to be an `Array` of at least 2 elements with the first one being of type boolean.
*
* For the `fact` to be valid it needs to be a non-empty string.
*
* @param {Array} condition - e.g. [true, 'finance', 'business'] or [false, '8.8.8.8'])
* @param {string} fact - i.e. non-empty fact being checked against the conditions
* @returns {boolean} -- true if the conditions & fact are valid, false otherwise.
*/


function checkConditionParams(condition, fact) {
 if (!Array.isArray(condition) || condition[0] == null || // intentional type coersion
 typeof condition[0] !== 'boolean' && !/^>|<|=|!=|\*|!\*$/.test(condition[0]) || condition.length < 2 || fact === null || fact === undefined) {
   return false;
 }

 return true;
}
/**
* Checks that a `condition` represented by an array starting w/ a boolean (e.g. [true, 'finance, 'business']) is
* satisfied by a `fact` represented by a string. If the first element in `condition` is true, then it
* will return true if `fact` is in the `condition` array.  If the first element in `condition` is false,
* it will return true if `fact` is NOT in the `condition` array.
*
* @param {Array} conditions - e.g. [true, 'finance', 'business'] or [false, '8.8.8.8'])
* @param {string} fact - i.e. non-empty fact being checked against the conditions
* @param {function} matcher - a function to run as a predicate on every element in the conditions array
* @returns {boolean} - true if the condition matches, false if it doesn't
*/


function evaluate(conditions, fact, matcher) {
 if (!checkConditionParams(conditions, fact)) {
   return true; // if things are missing just default to true
 }

 var modifier = conditions[0];
 var result = evaluationTechniques[modifier](conditions.slice(1), fact, matcher);
 return result;
}
/**
* Given a ruleset and a facts object, it determines whether to call the paywallCallback function.
*
* @param {object} ruleset
* @param {object} facts
*/


function evaluateRuleset(ruleset, facts) {
 if (!ruleset || !facts) {
   throw new Error("".concat(LOG_PREFIX, " Missing ruleset, facts or callback parameter in evaluateRuleset\n          ruleset: ").concat(ruleset, "\n          facts: ").concat(facts));
 }

 var triggeringRules = [];
 Array.isArray(ruleset) && ruleset.forEach(function (rule) {
   var sub = facts.sub || {};
   var reg = facts.reg || {};

   if (evaluate(rule.c, facts.c) && evaluate(rule.d, facts.d) && evaluate(rule.r, facts.r) && evaluate(rule.s, facts.s) && evaluate(rule.cr, facts.cr) && !isExemptToRule(rule, sub, reg)) {
     addReadCount(rule.id, facts.rc);

     if (evaluate(rule.rt, facts.rc.c[rule.id] || 0)) {
       triggeringRules.push({
         id: rule.id,
         rc: facts.rc.c[rule.id],
         rule: _objectSpread({}, rule)
       });
     } // store the visit


     if (!facts.v || !Array.isArray(facts.v.ci)) {
       facts.v = facts.v || {
         ci: []
       };
       facts.v.ci = facts.v.ci || [];
     }

     if (facts.v.ci.indexOf(facts.ci) < 0) {
       facts.v.ci.push(facts.ci);
       facts.v.lastUpdated = Date.now();
     }
   } else if (isExemptToRule(rule, sub, reg)) {
     // clear counts if this reader has an exemption to this rule.
     delete facts.rc.c[rule.id];
     facts.rc.lastUpdated = Date.now();
   }
 });
 return triggeringRules;
}

module.exports = {
 evaluateRuleset: evaluateRuleset,
 evaluate: evaluate,
 checkConditionParams: checkConditionParams,
 checkForFirstOfMonth: checkForFirstOfMonth,
 isExemptToRule: isExemptToRule
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
 !*** ./index.js ***!
 \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/paywall.js */ "./src/paywall.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
 \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
 \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "./node_modules/core-js/library/fn/date/now.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
 \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
 \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
 \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
 \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
 \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
 \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
 \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
 \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
 try {
   var info = gen[key](arg);
   var value = info.value;
 } catch (error) {
   reject(error);
   return;
 }

 if (info.done) {
   resolve(value);
 } else {
   _Promise.resolve(value).then(_next, _throw);
 }
}

function _asyncToGenerator(fn) {
 return function () {
   var self = this,
       args = arguments;
   return new _Promise(function (resolve, reject) {
     var gen = fn.apply(self, args);

     function _next(value) {
       asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
     }

     function _throw(err) {
       asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
     }

     _next(undefined);
   });
 };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
 \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
   throw new TypeError("Cannot call a class as a function");
 }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
 \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
 for (var i = 0; i < props.length; i++) {
   var descriptor = props[i];
   descriptor.enumerable = descriptor.enumerable || false;
   descriptor.configurable = true;
   if ("value" in descriptor) descriptor.writable = true;

   _Object$defineProperty(target, descriptor.key, descriptor);
 }
}

function _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js":
/*!***********************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js ***!
 \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperty(obj, key, value) {
 if (key in obj) {
   _Object$defineProperty(obj, key, {
     value: value,
     enumerable: true,
     configurable: true,
     writable: true
   });
 } else {
   obj[key] = value;
 }

 return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js":
/*!*********************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js ***!
 \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$getOwnPropertySymbols = __webpack_require__(/*! ../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");

var _Object$keys = __webpack_require__(/*! ../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");

function _objectSpread(target) {
 for (var i = 1; i < arguments.length; i++) {
   var source = arguments[i] != null ? arguments[i] : {};

   var ownKeys = _Object$keys(source);

   if (typeof _Object$getOwnPropertySymbols === 'function') {
     ownKeys = ownKeys.concat(_Object$getOwnPropertySymbols(source).filter(function (sym) {
       return _Object$getOwnPropertyDescriptor(source, sym).enumerable;
     }));
   }

   ownKeys.forEach(function (key) {
     defineProperty(target, key, source[key]);
   });
 }

 return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime-module.js ***!
 \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* Copyright (c) 2014-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
 return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
 Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
 // Restore the original runtime.
 g.regeneratorRuntime = oldRuntime;
} else {
 // Remove the global property added by runtime.js.
 try {
   delete g.regeneratorRuntime;
 } catch(e) {
   g.regeneratorRuntime = undefined;
 }
}


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime.js ***!
 \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* Copyright (c) 2014-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

!(function(global) {
 "use strict";

 var Op = Object.prototype;
 var hasOwn = Op.hasOwnProperty;
 var undefined; // More compressible than void 0.
 var $Symbol = typeof Symbol === "function" ? Symbol : {};
 var iteratorSymbol = $Symbol.iterator || "@@iterator";
 var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
 var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

 var inModule = typeof module === "object";
 var runtime = global.regeneratorRuntime;
 if (runtime) {
   if (inModule) {
     // If regeneratorRuntime is defined globally and we're in a module,
     // make the exports object identical to regeneratorRuntime.
     module.exports = runtime;
   }
   // Don't bother evaluating the rest of this file if the runtime was
   // already defined globally.
   return;
 }

 // Define the runtime globally (as expected by generated code) as either
 // module.exports (if we're in a module) or a new, empty object.
 runtime = global.regeneratorRuntime = inModule ? module.exports : {};

 function wrap(innerFn, outerFn, self, tryLocsList) {
   // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
   var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
   var generator = Object.create(protoGenerator.prototype);
   var context = new Context(tryLocsList || []);

   // The ._invoke method unifies the implementations of the .next,
   // .throw, and .return methods.
   generator._invoke = makeInvokeMethod(innerFn, self, context);

   return generator;
 }
 runtime.wrap = wrap;

 // Try/catch helper to minimize deoptimizations. Returns a completion
 // record like context.tryEntries[i].completion. This interface could
 // have been (and was previously) designed to take a closure to be
 // invoked without arguments, but in all the cases we care about we
 // already have an existing method we want to call, so there's no need
 // to create a new function object. We can even get away with assuming
 // the method takes exactly one argument, since that happens to be true
 // in every case, so we don't have to touch the arguments object. The
 // only additional allocation required is the completion record, which
 // has a stable shape and so hopefully should be cheap to allocate.
 function tryCatch(fn, obj, arg) {
   try {
     return { type: "normal", arg: fn.call(obj, arg) };
   } catch (err) {
     return { type: "throw", arg: err };
   }
 }

 var GenStateSuspendedStart = "suspendedStart";
 var GenStateSuspendedYield = "suspendedYield";
 var GenStateExecuting = "executing";
 var GenStateCompleted = "completed";

 // Returning this object from the innerFn has the same effect as
 // breaking out of the dispatch switch statement.
 var ContinueSentinel = {};

 // Dummy constructor functions that we use as the .constructor and
 // .constructor.prototype properties for functions that return Generator
 // objects. For full spec compliance, you may wish to configure your
 // minifier not to mangle the names of these two functions.
 function Generator() {}
 function GeneratorFunction() {}
 function GeneratorFunctionPrototype() {}

 // This is a polyfill for %IteratorPrototype% for environments that
 // don't natively support it.
 var IteratorPrototype = {};
 IteratorPrototype[iteratorSymbol] = function () {
   return this;
 };

 var getProto = Object.getPrototypeOf;
 var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
 if (NativeIteratorPrototype &&
     NativeIteratorPrototype !== Op &&
     hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
   // This environment has a native %IteratorPrototype%; use it instead
   // of the polyfill.
   IteratorPrototype = NativeIteratorPrototype;
 }

 var Gp = GeneratorFunctionPrototype.prototype =
   Generator.prototype = Object.create(IteratorPrototype);
 GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
 GeneratorFunctionPrototype.constructor = GeneratorFunction;
 GeneratorFunctionPrototype[toStringTagSymbol] =
   GeneratorFunction.displayName = "GeneratorFunction";

 // Helper for defining the .next, .throw, and .return methods of the
 // Iterator interface in terms of a single ._invoke method.
 function defineIteratorMethods(prototype) {
   ["next", "throw", "return"].forEach(function(method) {
     prototype[method] = function(arg) {
       return this._invoke(method, arg);
     };
   });
 }

 runtime.isGeneratorFunction = function(genFun) {
   var ctor = typeof genFun === "function" && genFun.constructor;
   return ctor
     ? ctor === GeneratorFunction ||
       // For the native GeneratorFunction constructor, the best we can
       // do is to check its .name property.
       (ctor.displayName || ctor.name) === "GeneratorFunction"
     : false;
 };

 runtime.mark = function(genFun) {
   if (Object.setPrototypeOf) {
     Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
   } else {
     genFun.__proto__ = GeneratorFunctionPrototype;
     if (!(toStringTagSymbol in genFun)) {
       genFun[toStringTagSymbol] = "GeneratorFunction";
     }
   }
   genFun.prototype = Object.create(Gp);
   return genFun;
 };

 // Within the body of any async function, `await x` is transformed to
 // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
 // `hasOwn.call(value, "__await")` to determine if the yielded value is
 // meant to be awaited.
 runtime.awrap = function(arg) {
   return { __await: arg };
 };

 function AsyncIterator(generator) {
   function invoke(method, arg, resolve, reject) {
     var record = tryCatch(generator[method], generator, arg);
     if (record.type === "throw") {
       reject(record.arg);
     } else {
       var result = record.arg;
       var value = result.value;
       if (value &&
           typeof value === "object" &&
           hasOwn.call(value, "__await")) {
         return Promise.resolve(value.__await).then(function(value) {
           invoke("next", value, resolve, reject);
         }, function(err) {
           invoke("throw", err, resolve, reject);
         });
       }

       return Promise.resolve(value).then(function(unwrapped) {
         // When a yielded Promise is resolved, its final value becomes
         // the .value of the Promise<{value,done}> result for the
         // current iteration.
         result.value = unwrapped;
         resolve(result);
       }, function(error) {
         // If a rejected Promise was yielded, throw the rejection back
         // into the async generator function so it can be handled there.
         return invoke("throw", error, resolve, reject);
       });
     }
   }

   var previousPromise;

   function enqueue(method, arg) {
     function callInvokeWithMethodAndArg() {
       return new Promise(function(resolve, reject) {
         invoke(method, arg, resolve, reject);
       });
     }

     return previousPromise =
       // If enqueue has been called before, then we want to wait until
       // all previous Promises have been resolved before calling invoke,
       // so that results are always delivered in the correct order. If
       // enqueue has not been called before, then it is important to
       // call invoke immediately, without waiting on a callback to fire,
       // so that the async generator function has the opportunity to do
       // any necessary setup in a predictable way. This predictability
       // is why the Promise constructor synchronously invokes its
       // executor callback, and why async functions synchronously
       // execute code before the first await. Since we implement simple
       // async functions in terms of async generators, it is especially
       // important to get this right, even though it requires care.
       previousPromise ? previousPromise.then(
         callInvokeWithMethodAndArg,
         // Avoid propagating failures to Promises returned by later
         // invocations of the iterator.
         callInvokeWithMethodAndArg
       ) : callInvokeWithMethodAndArg();
   }

   // Define the unified helper method that is used to implement .next,
   // .throw, and .return (see defineIteratorMethods).
   this._invoke = enqueue;
 }

 defineIteratorMethods(AsyncIterator.prototype);
 AsyncIterator.prototype[asyncIteratorSymbol] = function () {
   return this;
 };
 runtime.AsyncIterator = AsyncIterator;

 // Note that simple async functions are implemented on top of
 // AsyncIterator objects; they just return a Promise for the value of
 // the final result produced by the iterator.
 runtime.async = function(innerFn, outerFn, self, tryLocsList) {
   var iter = new AsyncIterator(
     wrap(innerFn, outerFn, self, tryLocsList)
   );

   return runtime.isGeneratorFunction(outerFn)
     ? iter // If outerFn is a generator, return the full iterator.
     : iter.next().then(function(result) {
         return result.done ? result.value : iter.next();
       });
 };

 function makeInvokeMethod(innerFn, self, context) {
   var state = GenStateSuspendedStart;

   return function invoke(method, arg) {
     if (state === GenStateExecuting) {
       throw new Error("Generator is already running");
     }

     if (state === GenStateCompleted) {
       if (method === "throw") {
         throw arg;
       }

       // Be forgiving, per 25.3.3.3.3 of the spec:
       // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
       return doneResult();
     }

     context.method = method;
     context.arg = arg;

     while (true) {
       var delegate = context.delegate;
       if (delegate) {
         var delegateResult = maybeInvokeDelegate(delegate, context);
         if (delegateResult) {
           if (delegateResult === ContinueSentinel) continue;
           return delegateResult;
         }
       }

       if (context.method === "next") {
         // Setting context._sent for legacy support of Babel's
         // function.sent implementation.
         context.sent = context._sent = context.arg;

       } else if (context.method === "throw") {
         if (state === GenStateSuspendedStart) {
           state = GenStateCompleted;
           throw context.arg;
         }

         context.dispatchException(context.arg);

       } else if (context.method === "return") {
         context.abrupt("return", context.arg);
       }

       state = GenStateExecuting;

       var record = tryCatch(innerFn, self, context);
       if (record.type === "normal") {
         // If an exception is thrown from innerFn, we leave state ===
         // GenStateExecuting and loop back for another invocation.
         state = context.done
           ? GenStateCompleted
           : GenStateSuspendedYield;

         if (record.arg === ContinueSentinel) {
           continue;
         }

         return {
           value: record.arg,
           done: context.done
         };

       } else if (record.type === "throw") {
         state = GenStateCompleted;
         // Dispatch the exception by looping back around to the
         // context.dispatchException(context.arg) call above.
         context.method = "throw";
         context.arg = record.arg;
       }
     }
   };
 }

 // Call delegate.iterator[context.method](context.arg) and handle the
 // result, either by returning a { value, done } result from the
 // delegate iterator, or by modifying context.method and context.arg,
 // setting context.delegate to null, and returning the ContinueSentinel.
 function maybeInvokeDelegate(delegate, context) {
   var method = delegate.iterator[context.method];
   if (method === undefined) {
     // A .throw or .return when the delegate iterator has no .throw
     // method always terminates the yield* loop.
     context.delegate = null;

     if (context.method === "throw") {
       if (delegate.iterator.return) {
         // If the delegate iterator has a return method, give it a
         // chance to clean up.
         context.method = "return";
         context.arg = undefined;
         maybeInvokeDelegate(delegate, context);

         if (context.method === "throw") {
           // If maybeInvokeDelegate(context) changed context.method from
           // "return" to "throw", let that override the TypeError below.
           return ContinueSentinel;
         }
       }

       context.method = "throw";
       context.arg = new TypeError(
         "The iterator does not provide a 'throw' method");
     }

     return ContinueSentinel;
   }

   var record = tryCatch(method, delegate.iterator, context.arg);

   if (record.type === "throw") {
     context.method = "throw";
     context.arg = record.arg;
     context.delegate = null;
     return ContinueSentinel;
   }

   var info = record.arg;

   if (! info) {
     context.method = "throw";
     context.arg = new TypeError("iterator result is not an object");
     context.delegate = null;
     return ContinueSentinel;
   }

   if (info.done) {
     // Assign the result of the finished delegate to the temporary
     // variable specified by delegate.resultName (see delegateYield).
     context[delegate.resultName] = info.value;

     // Resume execution at the desired location (see delegateYield).
     context.next = delegate.nextLoc;

     // If context.method was "throw" but the delegate handled the
     // exception, let the outer generator proceed normally. If
     // context.method was "next", forget context.arg since it has been
     // "consumed" by the delegate iterator. If context.method was
     // "return", allow the original .return call to continue in the
     // outer generator.
     if (context.method !== "return") {
       context.method = "next";
       context.arg = undefined;
     }

   } else {
     // Re-yield the result returned by the delegate method.
     return info;
   }

   // The delegate iterator is finished, so forget it and continue with
   // the outer generator.
   context.delegate = null;
   return ContinueSentinel;
 }

 // Define Generator.prototype.{next,throw,return} in terms of the
 // unified ._invoke helper method.
 defineIteratorMethods(Gp);

 Gp[toStringTagSymbol] = "Generator";

 // A Generator should always return itself as the iterator object when the
 // @@iterator function is called on it. Some browsers' implementations of the
 // iterator prototype chain incorrectly implement this, causing the Generator
 // object to not be returned from this call. This ensures that doesn't happen.
 // See https://github.com/facebook/regenerator/issues/274 for more details.
 Gp[iteratorSymbol] = function() {
   return this;
 };

 Gp.toString = function() {
   return "[object Generator]";
 };

 function pushTryEntry(locs) {
   var entry = { tryLoc: locs[0] };

   if (1 in locs) {
     entry.catchLoc = locs[1];
   }

   if (2 in locs) {
     entry.finallyLoc = locs[2];
     entry.afterLoc = locs[3];
   }

   this.tryEntries.push(entry);
 }

 function resetTryEntry(entry) {
   var record = entry.completion || {};
   record.type = "normal";
   delete record.arg;
   entry.completion = record;
 }

 function Context(tryLocsList) {
   // The root entry object (effectively a try statement without a catch
   // or a finally block) gives us a place to store values thrown from
   // locations where there is no enclosing try statement.
   this.tryEntries = [{ tryLoc: "root" }];
   tryLocsList.forEach(pushTryEntry, this);
   this.reset(true);
 }

 runtime.keys = function(object) {
   var keys = [];
   for (var key in object) {
     keys.push(key);
   }
   keys.reverse();

   // Rather than returning an object with a next method, we keep
   // things simple and return the next function itself.
   return function next() {
     while (keys.length) {
       var key = keys.pop();
       if (key in object) {
         next.value = key;
         next.done = false;
         return next;
       }
     }

     // To avoid creating an additional object, we just hang the .value
     // and .done properties off the next function object itself. This
     // also ensures that the minifier will not anonymize the function.
     next.done = true;
     return next;
   };
 };

 function values(iterable) {
   if (iterable) {
     var iteratorMethod = iterable[iteratorSymbol];
     if (iteratorMethod) {
       return iteratorMethod.call(iterable);
     }

     if (typeof iterable.next === "function") {
       return iterable;
     }

     if (!isNaN(iterable.length)) {
       var i = -1, next = function next() {
         while (++i < iterable.length) {
           if (hasOwn.call(iterable, i)) {
             next.value = iterable[i];
             next.done = false;
             return next;
           }
         }

         next.value = undefined;
         next.done = true;

         return next;
       };

       return next.next = next;
     }
   }

   // Return an iterator with no values.
   return { next: doneResult };
 }
 runtime.values = values;

 function doneResult() {
   return { value: undefined, done: true };
 }

 Context.prototype = {
   constructor: Context,

   reset: function(skipTempReset) {
     this.prev = 0;
     this.next = 0;
     // Resetting context._sent for legacy support of Babel's
     // function.sent implementation.
     this.sent = this._sent = undefined;
     this.done = false;
     this.delegate = null;

     this.method = "next";
     this.arg = undefined;

     this.tryEntries.forEach(resetTryEntry);

     if (!skipTempReset) {
       for (var name in this) {
         // Not sure about the optimal order of these conditions:
         if (name.charAt(0) === "t" &&
             hasOwn.call(this, name) &&
             !isNaN(+name.slice(1))) {
           this[name] = undefined;
         }
       }
     }
   },

   stop: function() {
     this.done = true;

     var rootEntry = this.tryEntries[0];
     var rootRecord = rootEntry.completion;
     if (rootRecord.type === "throw") {
       throw rootRecord.arg;
     }

     return this.rval;
   },

   dispatchException: function(exception) {
     if (this.done) {
       throw exception;
     }

     var context = this;
     function handle(loc, caught) {
       record.type = "throw";
       record.arg = exception;
       context.next = loc;

       if (caught) {
         // If the dispatched exception was caught by a catch block,
         // then let that catch block handle the exception normally.
         context.method = "next";
         context.arg = undefined;
       }

       return !! caught;
     }

     for (var i = this.tryEntries.length - 1; i >= 0; --i) {
       var entry = this.tryEntries[i];
       var record = entry.completion;

       if (entry.tryLoc === "root") {
         // Exception thrown outside of any try block that could handle
         // it, so set the completion value of the entire function to
         // throw the exception.
         return handle("end");
       }

       if (entry.tryLoc <= this.prev) {
         var hasCatch = hasOwn.call(entry, "catchLoc");
         var hasFinally = hasOwn.call(entry, "finallyLoc");

         if (hasCatch && hasFinally) {
           if (this.prev < entry.catchLoc) {
             return handle(entry.catchLoc, true);
           } else if (this.prev < entry.finallyLoc) {
             return handle(entry.finallyLoc);
           }

         } else if (hasCatch) {
           if (this.prev < entry.catchLoc) {
             return handle(entry.catchLoc, true);
           }

         } else if (hasFinally) {
           if (this.prev < entry.finallyLoc) {
             return handle(entry.finallyLoc);
           }

         } else {
           throw new Error("try statement without catch or finally");
         }
       }
     }
   },

   abrupt: function(type, arg) {
     for (var i = this.tryEntries.length - 1; i >= 0; --i) {
       var entry = this.tryEntries[i];
       if (entry.tryLoc <= this.prev &&
           hasOwn.call(entry, "finallyLoc") &&
           this.prev < entry.finallyLoc) {
         var finallyEntry = entry;
         break;
       }
     }

     if (finallyEntry &&
         (type === "break" ||
          type === "continue") &&
         finallyEntry.tryLoc <= arg &&
         arg <= finallyEntry.finallyLoc) {
       // Ignore the finally entry if control is not jumping to a
       // location outside the try/catch block.
       finallyEntry = null;
     }

     var record = finallyEntry ? finallyEntry.completion : {};
     record.type = type;
     record.arg = arg;

     if (finallyEntry) {
       this.method = "next";
       this.next = finallyEntry.finallyLoc;
       return ContinueSentinel;
     }

     return this.complete(record);
   },

   complete: function(record, afterLoc) {
     if (record.type === "throw") {
       throw record.arg;
     }

     if (record.type === "break" ||
         record.type === "continue") {
       this.next = record.arg;
     } else if (record.type === "return") {
       this.rval = this.arg = record.arg;
       this.method = "return";
       this.next = "end";
     } else if (record.type === "normal" && afterLoc) {
       this.next = afterLoc;
     }

     return ContinueSentinel;
   },

   finish: function(finallyLoc) {
     for (var i = this.tryEntries.length - 1; i >= 0; --i) {
       var entry = this.tryEntries[i];
       if (entry.finallyLoc === finallyLoc) {
         this.complete(entry.completion, entry.afterLoc);
         resetTryEntry(entry);
         return ContinueSentinel;
       }
     }
   },

   "catch": function(tryLoc) {
     for (var i = this.tryEntries.length - 1; i >= 0; --i) {
       var entry = this.tryEntries[i];
       if (entry.tryLoc === tryLoc) {
         var record = entry.completion;
         if (record.type === "throw") {
           var thrown = record.arg;
           resetTryEntry(entry);
         }
         return thrown;
       }
     }

     // The context.catch method must only be called with a location
     // argument that corresponds to a known catch block.
     throw new Error("illegal catch attempt");
   },

   delegateYield: function(iterable, resultName, nextLoc) {
     this.delegate = {
       iterator: values(iterable),
       resultName: resultName,
       nextLoc: nextLoc
     };

     if (this.method === "next") {
       // Deliberately forget the last sent value so that we don't
       // accidentally pass it on to the delegate.
       this.arg = undefined;
     }

     return ContinueSentinel;
   }
 };
})(
 // In sloppy mode, unbound `this` refers to the global object, fallback to
 // Function constructor if we're in global strict mode. That is sadly a form
 // of indirect eval which violates Content Security Policy.
 (function() {
   return this || (typeof self === "object" && self);
 })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
 !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
 \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
 !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
 \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/date/now.js":
/*!*****************************************************!*\
 !*** ./node_modules/core-js/library/fn/date/now.js ***!
 \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.date.now */ "./node_modules/core-js/library/modules/es6.date.now.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Date.now;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
 !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
 \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
 !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
 \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
 return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
 !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
 \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
 return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************!*\
 !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
 \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
 return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!****************************************************************************!*\
 !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
 \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
 !*** ./node_modules/core-js/library/fn/object/keys.js ***!
 \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
 !*** ./node_modules/core-js/library/fn/promise.js ***!
 \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_a-function.js ***!
 \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
 if (typeof it != 'function') throw TypeError(it + ' is not a function!');
 return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
 \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
 \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
 if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
   throw TypeError(name + ': incorrect invocation!');
 } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_an-object.js ***!
 \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
 if (!isObject(it)) throw TypeError(it + ' is not an object!');
 return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
 \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
 return function ($this, el, fromIndex) {
   var O = toIObject($this);
   var length = toLength(O.length);
   var index = toAbsoluteIndex(fromIndex, length);
   var value;
   // Array#includes uses SameValueZero equality algorithm
   // eslint-disable-next-line no-self-compare
   if (IS_INCLUDES && el != el) while (length > index) {
     value = O[index++];
     // eslint-disable-next-line no-self-compare
     if (value != value) return true;
   // Array#indexOf ignores holes, Array#includes - not
   } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
     if (O[index] === el) return IS_INCLUDES || index || 0;
   } return !IS_INCLUDES && -1;
 };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
 !*** ./node_modules/core-js/library/modules/_classof.js ***!
 \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
 try {
   return it[key];
 } catch (e) { /* empty */ }
};

module.exports = function (it) {
 var O, T, B;
 return it === undefined ? 'Undefined' : it === null ? 'Null'
   // @@toStringTag case
   : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
   // builtinTag case
   : ARG ? cof(O)
   // ES3 arguments fallback
   : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
 !*** ./node_modules/core-js/library/modules/_cof.js ***!
 \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
 return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
 !*** ./node_modules/core-js/library/modules/_core.js ***!
 \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
 !*** ./node_modules/core-js/library/modules/_ctx.js ***!
 \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
 aFunction(fn);
 if (that === undefined) return fn;
 switch (length) {
   case 1: return function (a) {
     return fn.call(that, a);
   };
   case 2: return function (a, b) {
     return fn.call(that, a, b);
   };
   case 3: return function (a, b, c) {
     return fn.call(that, a, b, c);
   };
 }
 return function (/* ...args */) {
   return fn.apply(that, arguments);
 };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
 !*** ./node_modules/core-js/library/modules/_defined.js ***!
 \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
 if (it == undefined) throw TypeError("Can't call method on  " + it);
 return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
 \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
 return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
 \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
 return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
 \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
 \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
 var result = getKeys(it);
 var getSymbols = gOPS.f;
 if (getSymbols) {
   var symbols = getSymbols(it);
   var isEnum = pIE.f;
   var i = 0;
   var key;
   while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
 } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
 !*** ./node_modules/core-js/library/modules/_export.js ***!
 \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
 var IS_FORCED = type & $export.F;
 var IS_GLOBAL = type & $export.G;
 var IS_STATIC = type & $export.S;
 var IS_PROTO = type & $export.P;
 var IS_BIND = type & $export.B;
 var IS_WRAP = type & $export.W;
 var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
 var expProto = exports[PROTOTYPE];
 var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
 var key, own, out;
 if (IS_GLOBAL) source = name;
 for (key in source) {
   // contains in native
   own = !IS_FORCED && target && target[key] !== undefined;
   if (own && has(exports, key)) continue;
   // export native or passed
   out = own ? target[key] : source[key];
   // prevent global pollution for namespaces
   exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
   // bind timers to global for call from export context
   : IS_BIND && own ? ctx(out, global)
   // wrap global constructors for prevent change them in library
   : IS_WRAP && target[key] == out ? (function (C) {
     var F = function (a, b, c) {
       if (this instanceof C) {
         switch (arguments.length) {
           case 0: return new C();
           case 1: return new C(a);
           case 2: return new C(a, b);
         } return new C(a, b, c);
       } return C.apply(this, arguments);
     };
     F[PROTOTYPE] = C[PROTOTYPE];
     return F;
   // make static versions for prototype methods
   })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
   // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
   if (IS_PROTO) {
     (exports.virtual || (exports.virtual = {}))[key] = out;
     // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
     if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
   }
 }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
 !*** ./node_modules/core-js/library/modules/_fails.js ***!
 \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
 try {
   return !!exec();
 } catch (e) {
   return true;
 }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
 !*** ./node_modules/core-js/library/modules/_for-of.js ***!
 \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
 var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
 var f = ctx(fn, that, entries ? 2 : 1);
 var index = 0;
 var length, step, iterator, result;
 if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
 // fast case for arrays with default iterator
 if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
   result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
   if (result === BREAK || result === RETURN) return result;
 } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
   result = call(iterator, f, step.value, entries);
   if (result === BREAK || result === RETURN) return result;
 }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
 !*** ./node_modules/core-js/library/modules/_global.js ***!
 \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
 ? window : typeof self != 'undefined' && self.Math == Math ? self
 // eslint-disable-next-line no-new-func
 : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
 !*** ./node_modules/core-js/library/modules/_has.js ***!
 \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
 return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
 !*** ./node_modules/core-js/library/modules/_hide.js ***!
 \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
 return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
 object[key] = value;
 return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
 !*** ./node_modules/core-js/library/modules/_html.js ***!
 \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
 \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
 return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
 !*** ./node_modules/core-js/library/modules/_invoke.js ***!
 \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
 var un = that === undefined;
 switch (args.length) {
   case 0: return un ? fn()
                     : fn.call(that);
   case 1: return un ? fn(args[0])
                     : fn.call(that, args[0]);
   case 2: return un ? fn(args[0], args[1])
                     : fn.call(that, args[0], args[1]);
   case 3: return un ? fn(args[0], args[1], args[2])
                     : fn.call(that, args[0], args[1], args[2]);
   case 4: return un ? fn(args[0], args[1], args[2], args[3])
                     : fn.call(that, args[0], args[1], args[2], args[3]);
 } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
 !*** ./node_modules/core-js/library/modules/_iobject.js ***!
 \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
 return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
 \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
 return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
 !*** ./node_modules/core-js/library/modules/_is-array.js ***!
 \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
 return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_is-object.js ***!
 \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
 return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
 \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
 try {
   return entries ? fn(anObject(value)[0], value[1]) : fn(value);
 // 7.4.6 IteratorClose(iterator, completion)
 } catch (e) {
   var ret = iterator['return'];
   if (ret !== undefined) anObject(ret.call(iterator));
   throw e;
 }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
 \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
 Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
 setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
 \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
 $iterCreate(Constructor, NAME, next);
 var getMethod = function (kind) {
   if (!BUGGY && kind in proto) return proto[kind];
   switch (kind) {
     case KEYS: return function keys() { return new Constructor(this, kind); };
     case VALUES: return function values() { return new Constructor(this, kind); };
   } return function entries() { return new Constructor(this, kind); };
 };
 var TAG = NAME + ' Iterator';
 var DEF_VALUES = DEFAULT == VALUES;
 var VALUES_BUG = false;
 var proto = Base.prototype;
 var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
 var $default = $native || getMethod(DEFAULT);
 var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
 var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
 var methods, key, IteratorPrototype;
 // Fix native
 if ($anyNative) {
   IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
   if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
     // Set @@toStringTag to native iterators
     setToStringTag(IteratorPrototype, TAG, true);
     // fix for some old engines
     if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
   }
 }
 // fix Array#{values, @@iterator}.name in V8 / FF
 if (DEF_VALUES && $native && $native.name !== VALUES) {
   VALUES_BUG = true;
   $default = function values() { return $native.call(this); };
 }
 // Define iterator
 if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
   hide(proto, ITERATOR, $default);
 }
 // Plug for library
 Iterators[NAME] = $default;
 Iterators[TAG] = returnThis;
 if (DEFAULT) {
   methods = {
     values: DEF_VALUES ? $default : getMethod(VALUES),
     keys: IS_SET ? $default : getMethod(KEYS),
     entries: $entries
   };
   if (FORCED) for (key in methods) {
     if (!(key in proto)) redefine(proto, key, methods[key]);
   } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
 }
 return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
 \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
 var riter = [7][ITERATOR]();
 riter['return'] = function () { SAFE_CLOSING = true; };
 // eslint-disable-next-line no-throw-literal
 Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
 if (!skipClosing && !SAFE_CLOSING) return false;
 var safe = false;
 try {
   var arr = [7];
   var iter = arr[ITERATOR]();
   iter.next = function () { return { done: safe = true }; };
   arr[ITERATOR] = function () { return iter; };
   exec(arr);
 } catch (e) { /* empty */ }
 return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
 \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
 return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_iterators.js ***!
 \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
 !*** ./node_modules/core-js/library/modules/_library.js ***!
 \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
 !*** ./node_modules/core-js/library/modules/_meta.js ***!
 \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
 return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
 return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
 setDesc(it, META, { value: {
   i: 'O' + ++id, // object ID
   w: {}          // weak collections IDs
 } });
};
var fastKey = function (it, create) {
 // return primitive with prefix
 if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
 if (!has(it, META)) {
   // can't set metadata to uncaught frozen object
   if (!isExtensible(it)) return 'F';
   // not necessary to add metadata
   if (!create) return 'E';
   // add missing metadata
   setMeta(it);
 // return object ID
 } return it[META].i;
};
var getWeak = function (it, create) {
 if (!has(it, META)) {
   // can't set metadata to uncaught frozen object
   if (!isExtensible(it)) return true;
   // not necessary to add metadata
   if (!create) return false;
   // add missing metadata
   setMeta(it);
 // return hash weak collections IDs
 } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
 if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
 return it;
};
var meta = module.exports = {
 KEY: META,
 NEED: false,
 fastKey: fastKey,
 getWeak: getWeak,
 onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_microtask.js ***!
 \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
 var head, last, notify;

 var flush = function () {
   var parent, fn;
   if (isNode && (parent = process.domain)) parent.exit();
   while (head) {
     fn = head.fn;
     head = head.next;
     try {
       fn();
     } catch (e) {
       if (head) notify();
       else last = undefined;
       throw e;
     }
   } last = undefined;
   if (parent) parent.enter();
 };

 // Node.js
 if (isNode) {
   notify = function () {
     process.nextTick(flush);
   };
 // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
 } else if (Observer && !(global.navigator && global.navigator.standalone)) {
   var toggle = true;
   var node = document.createTextNode('');
   new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
   notify = function () {
     node.data = toggle = !toggle;
   };
 // environments with maybe non-completely correct, but existent Promise
 } else if (Promise && Promise.resolve) {
   // Promise.resolve without an argument throws an error in LG WebOS 2
   var promise = Promise.resolve(undefined);
   notify = function () {
     promise.then(flush);
   };
 // for other environments - macrotask based on:
 // - setImmediate
 // - MessageChannel
 // - window.postMessag
 // - onreadystatechange
 // - setTimeout
 } else {
   notify = function () {
     // strange IE + webpack dev server bug - use .call(global)
     macrotask.call(global, flush);
   };
 }

 return function (fn) {
   var task = { fn: fn, next: undefined };
   if (last) last.next = task;
   if (!head) {
     head = task;
     notify();
   } last = task;
 };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
 \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
 var resolve, reject;
 this.promise = new C(function ($$resolve, $$reject) {
   if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
   resolve = $$resolve;
   reject = $$reject;
 });
 this.resolve = aFunction(resolve);
 this.reject = aFunction(reject);
}

module.exports.f = function (C) {
 return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_object-create.js ***!
 \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
 // Thrash, waste and sodomy: IE GC bug
 var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
 var i = enumBugKeys.length;
 var lt = '<';
 var gt = '>';
 var iframeDocument;
 iframe.style.display = 'none';
 __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
 iframe.src = 'javascript:'; // eslint-disable-line no-script-url
 // createDict = iframe.contentWindow.Object;
 // html.removeChild(iframe);
 iframeDocument = iframe.contentWindow.document;
 iframeDocument.open();
 iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
 iframeDocument.close();
 createDict = iframeDocument.F;
 while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
 return createDict();
};

module.exports = Object.create || function create(O, Properties) {
 var result;
 if (O !== null) {
   Empty[PROTOTYPE] = anObject(O);
   result = new Empty();
   Empty[PROTOTYPE] = null;
   // add "__proto__" for Object.getPrototypeOf polyfill
   result[IE_PROTO] = O;
 } else result = createDict();
 return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
 \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
 anObject(O);
 P = toPrimitive(P, true);
 anObject(Attributes);
 if (IE8_DOM_DEFINE) try {
   return dP(O, P, Attributes);
 } catch (e) { /* empty */ }
 if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
 if ('value' in Attributes) O[P] = Attributes.value;
 return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
 \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
 anObject(O);
 var keys = getKeys(Properties);
 var length = keys.length;
 var i = 0;
 var P;
 while (length > i) dP.f(O, P = keys[i++], Properties[P]);
 return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
 \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
 O = toIObject(O);
 P = toPrimitive(P, true);
 if (IE8_DOM_DEFINE) try {
   return gOPD(O, P);
 } catch (e) { /* empty */ }
 if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
 \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
 ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
 try {
   return gOPN(it);
 } catch (e) {
   return windowNames.slice();
 }
};

module.exports.f = function getOwnPropertyNames(it) {
 return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
 \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
 return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
 \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
 \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
 O = toObject(O);
 if (has(O, IE_PROTO)) return O[IE_PROTO];
 if (typeof O.constructor == 'function' && O instanceof O.constructor) {
   return O.constructor.prototype;
 } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
 \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
 var O = toIObject(object);
 var i = 0;
 var result = [];
 var key;
 for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
 // Don't enum bug & hidden keys
 while (names.length > i) if (has(O, key = names[i++])) {
   ~arrayIndexOf(result, key) || result.push(key);
 }
 return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
 \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
 return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
 \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
 \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
 var fn = (core.Object || {})[KEY] || Object[KEY];
 var exp = {};
 exp[KEY] = exec(fn);
 $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
 !*** ./node_modules/core-js/library/modules/_perform.js ***!
 \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
 try {
   return { e: false, v: exec() };
 } catch (e) {
   return { e: true, v: e };
 }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
 \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
 anObject(C);
 if (isObject(x) && x.constructor === C) return x;
 var promiseCapability = newPromiseCapability.f(C);
 var resolve = promiseCapability.resolve;
 resolve(x);
 return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
 \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
 return {
   enumerable: !(bitmap & 1),
   configurable: !(bitmap & 2),
   writable: !(bitmap & 4),
   value: value
 };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
 \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
 for (var key in src) {
   if (safe && target[key]) target[key] = src[key];
   else hide(target, key, src[key]);
 } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
 !*** ./node_modules/core-js/library/modules/_redefine.js ***!
 \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_set-species.js ***!
 \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
 var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
 if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
   configurable: true,
   get: function () { return this; }
 });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
 \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
 if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
 \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
 return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
 !*** ./node_modules/core-js/library/modules/_shared.js ***!
 \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
 return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
 version: core.version,
 mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
 copyright: 'Â© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
 \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
 var C = anObject(O).constructor;
 var S;
 return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_string-at.js ***!
 \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
 return function (that, pos) {
   var s = String(defined(that));
   var i = toInteger(pos);
   var l = s.length;
   var a, b;
   if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
   a = s.charCodeAt(i);
   return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
     ? TO_STRING ? s.charAt(i) : a
     : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
 };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
 !*** ./node_modules/core-js/library/modules/_task.js ***!
 \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
 var id = +this;
 // eslint-disable-next-line no-prototype-builtins
 if (queue.hasOwnProperty(id)) {
   var fn = queue[id];
   delete queue[id];
   fn();
 }
};
var listener = function (event) {
 run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
 setTask = function setImmediate(fn) {
   var args = [];
   var i = 1;
   while (arguments.length > i) args.push(arguments[i++]);
   queue[++counter] = function () {
     // eslint-disable-next-line no-new-func
     invoke(typeof fn == 'function' ? fn : Function(fn), args);
   };
   defer(counter);
   return counter;
 };
 clearTask = function clearImmediate(id) {
   delete queue[id];
 };
 // Node.js 0.8-
 if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
   defer = function (id) {
     process.nextTick(ctx(run, id, 1));
   };
 // Sphere (JS game engine) Dispatch API
 } else if (Dispatch && Dispatch.now) {
   defer = function (id) {
     Dispatch.now(ctx(run, id, 1));
   };
 // Browsers with MessageChannel, includes WebWorkers
 } else if (MessageChannel) {
   channel = new MessageChannel();
   port = channel.port2;
   channel.port1.onmessage = listener;
   defer = ctx(port.postMessage, port, 1);
 // Browsers with postMessage, skip WebWorkers
 // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
 } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
   defer = function (id) {
     global.postMessage(id + '', '*');
   };
   global.addEventListener('message', listener, false);
 // IE8-
 } else if (ONREADYSTATECHANGE in cel('script')) {
   defer = function (id) {
     html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
       html.removeChild(this);
       run.call(id);
     };
   };
 // Rest old browsers
 } else {
   defer = function (id) {
     setTimeout(ctx(run, id, 1), 0);
   };
 }
}
module.exports = {
 set: setTask,
 clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
 \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
 index = toInteger(index);
 return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
 \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
 return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
 \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
 return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_to-length.js ***!
 \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
 return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_to-object.js ***!
 \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
 return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
 \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
 if (!isObject(it)) return it;
 var fn, val;
 if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
 if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
 if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
 throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
 !*** ./node_modules/core-js/library/modules/_uid.js ***!
 \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
 return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
 \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
 !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
 \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
 var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
 if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
 !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
 \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
 !*** ./node_modules/core-js/library/modules/_wks.js ***!
 \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
 return store[name] || (store[name] =
   USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
 !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
 \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
 if (it != undefined) return it[ITERATOR]
   || it['@@iterator']
   || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
 !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
 \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
 var iterFn = get(it);
 if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
 return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
 !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
 \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
 !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
 \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
 this._t = toIObject(iterated); // target
 this._i = 0;                   // next index
 this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
 var O = this._t;
 var kind = this._k;
 var index = this._i++;
 if (!O || index >= O.length) {
   this._t = undefined;
   return step(1);
 }
 if (kind == 'keys') return step(0, index);
 if (kind == 'values') return step(0, O[index]);
 return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.date.now.js":
/*!**************************************************************!*\
 !*** ./node_modules/core-js/library/modules/es6.date.now.js ***!
 \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
 !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
 \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
 !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
 \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
 return function getOwnPropertyDescriptor(it, key) {
   return $getOwnPropertyDescriptor(toIObject(it), key);
 };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
 !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
 \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
 return function keys(it) {
   return $keys(toObject(it));
 };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
 !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
 \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
 !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
 \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
 try {
   // correct subclassing with @@species support
   var promise = $Promise.resolve(1);
   var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
     exec(empty, empty);
   };
   // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
   return (isNode || typeof PromiseRejectionEvent == 'function')
     && promise.then(empty) instanceof FakePromise
     // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
     // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
     // we can't detect it synchronously, so just check versions
     && v8.indexOf('6.6') !== 0
     && userAgent.indexOf('Chrome/66') === -1;
 } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
 var then;
 return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
 if (promise._n) return;
 promise._n = true;
 var chain = promise._c;
 microtask(function () {
   var value = promise._v;
   var ok = promise._s == 1;
   var i = 0;
   var run = function (reaction) {
     var handler = ok ? reaction.ok : reaction.fail;
     var resolve = reaction.resolve;
     var reject = reaction.reject;
     var domain = reaction.domain;
     var result, then, exited;
     try {
       if (handler) {
         if (!ok) {
           if (promise._h == 2) onHandleUnhandled(promise);
           promise._h = 1;
         }
         if (handler === true) result = value;
         else {
           if (domain) domain.enter();
           result = handler(value); // may throw
           if (domain) {
             domain.exit();
             exited = true;
           }
         }
         if (result === reaction.promise) {
           reject(TypeError('Promise-chain cycle'));
         } else if (then = isThenable(result)) {
           then.call(result, resolve, reject);
         } else resolve(result);
       } else reject(value);
     } catch (e) {
       if (domain && !exited) domain.exit();
       reject(e);
     }
   };
   while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
   promise._c = [];
   promise._n = false;
   if (isReject && !promise._h) onUnhandled(promise);
 });
};
var onUnhandled = function (promise) {
 task.call(global, function () {
   var value = promise._v;
   var unhandled = isUnhandled(promise);
   var result, handler, console;
   if (unhandled) {
     result = perform(function () {
       if (isNode) {
         process.emit('unhandledRejection', value, promise);
       } else if (handler = global.onunhandledrejection) {
         handler({ promise: promise, reason: value });
       } else if ((console = global.console) && console.error) {
         console.error('Unhandled promise rejection', value);
       }
     });
     // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
     promise._h = isNode || isUnhandled(promise) ? 2 : 1;
   } promise._a = undefined;
   if (unhandled && result.e) throw result.v;
 });
};
var isUnhandled = function (promise) {
 return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
 task.call(global, function () {
   var handler;
   if (isNode) {
     process.emit('rejectionHandled', promise);
   } else if (handler = global.onrejectionhandled) {
     handler({ promise: promise, reason: promise._v });
   }
 });
};
var $reject = function (value) {
 var promise = this;
 if (promise._d) return;
 promise._d = true;
 promise = promise._w || promise; // unwrap
 promise._v = value;
 promise._s = 2;
 if (!promise._a) promise._a = promise._c.slice();
 notify(promise, true);
};
var $resolve = function (value) {
 var promise = this;
 var then;
 if (promise._d) return;
 promise._d = true;
 promise = promise._w || promise; // unwrap
 try {
   if (promise === value) throw TypeError("Promise can't be resolved itself");
   if (then = isThenable(value)) {
     microtask(function () {
       var wrapper = { _w: promise, _d: false }; // wrap
       try {
         then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
       } catch (e) {
         $reject.call(wrapper, e);
       }
     });
   } else {
     promise._v = value;
     promise._s = 1;
     notify(promise, false);
   }
 } catch (e) {
   $reject.call({ _w: promise, _d: false }, e); // wrap
 }
};

// constructor polyfill
if (!USE_NATIVE) {
 // 25.4.3.1 Promise(executor)
 $Promise = function Promise(executor) {
   anInstance(this, $Promise, PROMISE, '_h');
   aFunction(executor);
   Internal.call(this);
   try {
     executor(ctx($resolve, this, 1), ctx($reject, this, 1));
   } catch (err) {
     $reject.call(this, err);
   }
 };
 // eslint-disable-next-line no-unused-vars
 Internal = function Promise(executor) {
   this._c = [];             // <- awaiting reactions
   this._a = undefined;      // <- checked in isUnhandled reactions
   this._s = 0;              // <- state
   this._d = false;          // <- done
   this._v = undefined;      // <- value
   this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
   this._n = false;          // <- notify
 };
 Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
   // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
   then: function then(onFulfilled, onRejected) {
     var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
     reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
     reaction.fail = typeof onRejected == 'function' && onRejected;
     reaction.domain = isNode ? process.domain : undefined;
     this._c.push(reaction);
     if (this._a) this._a.push(reaction);
     if (this._s) notify(this, false);
     return reaction.promise;
   },
   // 25.4.5.1 Promise.prototype.catch(onRejected)
   'catch': function (onRejected) {
     return this.then(undefined, onRejected);
   }
 });
 OwnPromiseCapability = function () {
   var promise = new Internal();
   this.promise = promise;
   this.resolve = ctx($resolve, promise, 1);
   this.reject = ctx($reject, promise, 1);
 };
 newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
   return C === $Promise || C === Wrapper
     ? new OwnPromiseCapability(C)
     : newGenericPromiseCapability(C);
 };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
 // 25.4.4.5 Promise.reject(r)
 reject: function reject(r) {
   var capability = newPromiseCapability(this);
   var $$reject = capability.reject;
   $$reject(r);
   return capability.promise;
 }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
 // 25.4.4.6 Promise.resolve(x)
 resolve: function resolve(x) {
   return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
 }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
 $Promise.all(iter)['catch'](empty);
})), PROMISE, {
 // 25.4.4.1 Promise.all(iterable)
 all: function all(iterable) {
   var C = this;
   var capability = newPromiseCapability(C);
   var resolve = capability.resolve;
   var reject = capability.reject;
   var result = perform(function () {
     var values = [];
     var index = 0;
     var remaining = 1;
     forOf(iterable, false, function (promise) {
       var $index = index++;
       var alreadyCalled = false;
       values.push(undefined);
       remaining++;
       C.resolve(promise).then(function (value) {
         if (alreadyCalled) return;
         alreadyCalled = true;
         values[$index] = value;
         --remaining || resolve(values);
       }, reject);
     });
     --remaining || resolve(values);
   });
   if (result.e) reject(result.v);
   return capability.promise;
 },
 // 25.4.4.4 Promise.race(iterable)
 race: function race(iterable) {
   var C = this;
   var capability = newPromiseCapability(C);
   var reject = capability.reject;
   var result = perform(function () {
     forOf(iterable, false, function (promise) {
       C.resolve(promise).then(capability.resolve, reject);
     });
   });
   if (result.e) reject(result.v);
   return capability.promise;
 }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
 !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
 \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
 this._t = String(iterated); // target
 this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
 var O = this._t;
 var index = this._i;
 var point;
 if (index >= O.length) return { value: undefined, done: true };
 point = $at(O, index);
 this._i += point.length;
 return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
 !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
 \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
 return _create(dP({}, 'a', {
   get: function () { return dP(this, 'a', { value: 7 }).a; }
 })).a != 7;
}) ? function (it, key, D) {
 var protoDesc = gOPD(ObjectProto, key);
 if (protoDesc) delete ObjectProto[key];
 dP(it, key, D);
 if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
 var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
 sym._k = tag;
 return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
 return typeof it == 'symbol';
} : function (it) {
 return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
 if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
 anObject(it);
 key = toPrimitive(key, true);
 anObject(D);
 if (has(AllSymbols, key)) {
   if (!D.enumerable) {
     if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
     it[HIDDEN][key] = true;
   } else {
     if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
     D = _create(D, { enumerable: createDesc(0, false) });
   } return setSymbolDesc(it, key, D);
 } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
 anObject(it);
 var keys = enumKeys(P = toIObject(P));
 var i = 0;
 var l = keys.length;
 var key;
 while (l > i) $defineProperty(it, key = keys[i++], P[key]);
 return it;
};
var $create = function create(it, P) {
 return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
 var E = isEnum.call(this, key = toPrimitive(key, true));
 if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
 return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
 it = toIObject(it);
 key = toPrimitive(key, true);
 if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
 var D = gOPD(it, key);
 if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
 return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
 var names = gOPN(toIObject(it));
 var result = [];
 var i = 0;
 var key;
 while (names.length > i) {
   if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
 } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
 var IS_OP = it === ObjectProto;
 var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
 var result = [];
 var i = 0;
 var key;
 while (names.length > i) {
   if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
 } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
 $Symbol = function Symbol() {
   if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
   var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
   var $set = function (value) {
     if (this === ObjectProto) $set.call(OPSymbols, value);
     if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
     setSymbolDesc(this, tag, createDesc(1, value));
   };
   if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
   return wrap(tag);
 };
 redefine($Symbol[PROTOTYPE], 'toString', function toString() {
   return this._k;
 });

 $GOPD.f = $getOwnPropertyDescriptor;
 $DP.f = $defineProperty;
 __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
 __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
 __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

 if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
   redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
 }

 wksExt.f = function (name) {
   return wrap(wks(name));
 };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
 // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
 // 19.4.2.1 Symbol.for(key)
 'for': function (key) {
   return has(SymbolRegistry, key += '')
     ? SymbolRegistry[key]
     : SymbolRegistry[key] = $Symbol(key);
 },
 // 19.4.2.5 Symbol.keyFor(sym)
 keyFor: function keyFor(sym) {
   if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
   for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
 },
 useSetter: function () { setter = true; },
 useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
 // 19.1.2.2 Object.create(O [, Properties])
 create: $create,
 // 19.1.2.4 Object.defineProperty(O, P, Attributes)
 defineProperty: $defineProperty,
 // 19.1.2.3 Object.defineProperties(O, Properties)
 defineProperties: $defineProperties,
 // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
 getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
 // 19.1.2.7 Object.getOwnPropertyNames(O)
 getOwnPropertyNames: $getOwnPropertyNames,
 // 19.1.2.8 Object.getOwnPropertySymbols(O)
 getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
 var S = $Symbol();
 // MS Edge converts symbol values to JSON as {}
 // WebKit converts symbol values to JSON as null
 // V8 throws on boxed symbols
 return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
 stringify: function stringify(it) {
   var args = [it];
   var i = 1;
   var replacer, $replacer;
   while (arguments.length > i) args.push(arguments[i++]);
   $replacer = replacer = args[1];
   if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
   if (!isArray(replacer)) replacer = function (key, value) {
     if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
     if (!isSymbol(value)) return value;
   };
   args[1] = replacer;
   return _stringify.apply($JSON, args);
 }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
 !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
 \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
 var C = speciesConstructor(this, core.Promise || global.Promise);
 var isFunction = typeof onFinally == 'function';
 return this.then(
   isFunction ? function (x) {
     return promiseResolve(C, onFinally()).then(function () { return x; });
   } : onFinally,
   isFunction ? function (e) {
     return promiseResolve(C, onFinally()).then(function () { throw e; });
   } : onFinally
 );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
 !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
 \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
 var promiseCapability = newPromiseCapability.f(this);
 var result = perform(callbackfn);
 (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
 return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
 !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
 \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
 'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
 var NAME = DOMIterables[i];
 var Collection = global[NAME];
 var proto = Collection && Collection.prototype;
 if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
 Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/unfetch/dist/unfetch.mjs":
/*!***********************************************!*\
 !*** ./node_modules/unfetch/dist/unfetch.mjs ***!
 \***********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest;for(var o in s.open(n.method||"get",e,!0),n.headers)s.setRequestHeader(o,n.headers[o]);function u(){var e,n=[],t=[],r={};return s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(s,o,u){n.push(o=o.toLowerCase()),t.push([o,u]),r[o]=(e=r[o])?e+","+u:u}),{ok:2==(s.status/100|0),status:s.status,statusText:s.statusText,url:s.responseURL,clone:u,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},headers:{keys:function(){return n},entries:function(){return t},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}s.withCredentials="include"==n.credentials,s.onload=function(){t(u())},s.onerror=r,s.send(n.body||null)})});;
//# sourceMappingURL=unfetch.mjs.map


/***/ }),

/***/ "./src/factGathering/browserData.js":
/*!******************************************!*\
 !*** ./src/factGathering/browserData.js ***!
 \******************************************/
/*! exports provided: getBrowserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowserData", function() { return getBrowserData; });
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/url */ "./src/utils/url.js");


function parseReferrer() {
 if (false) {}

 var referrer = Object(_utils_url__WEBPACK_IMPORTED_MODULE_0__["getHostnameFromURL"])(document.referrer); // For now just check for google, facebook, twitter. Otherwise save the hostname

 if (/facebook\.com$/.test(referrer)) {
   return 'facebook';
 } else if (/twitter\.com$/.test(referrer)) {
   return 'twitter';
 } else if (/google\.co(m|\.[a-z]{2})$/.test(referrer)) {
   return 'google';
 } else {
   return referrer; // this may need some additional parsing.
 }
}

function getReferrer() {
 return parseReferrer();
} // TODO: 'audience' is a bit murky when it comes to requirements. Likely, however,
// there will be some inspection of cookies for audience segmentation information.
// this is just a stub...


function getAudience() {
 var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
 return data.a || 'something special';
}

function parseDeviceClass() {
 var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
 var isMobileUserAgent = /mobi/i.test(userAgent);
 var isTabletUserAgent = /(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(userAgent);

 if (isMobileUserAgent && !isTabletUserAgent) {
   return 'mobile';
 } else if (isTabletUserAgent) {
   return 'tablet';
 } else {
   return 'desktop';
 }
}

function getDeviceClass() {
 var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
 return data.d || parseDeviceClass();
}

function isPrivateMode() {
 var isIncognito = false;

 if (window.chrome) {
   // is chromium flavored
   var fs = window.RequestFileSystem || window.webkitRequestFileSystem;

   if (fs) {
     fs(window.TEMPORARY, 100, function () {
       isIncognito = false;
     }, function () {
       isIncognito = true;
     });
   }
 } else if (/constructor/i.test(window.HTMLElement)) {
   // Safari
   try {
     // check if we can write to session storage & localstorage
     var testKey = "".concat("ArcP", ".test");
     window.sessionStorage.setItem(testKey, 'testValue');
     window.sessionStorage.removeItem(testKey);
     window.localStorage.setItem(testKey, 'testValue');
     window.localStorage.removeItem(testKey);
     window.openDatabase(null, null, null, null);
     isIncognito = false;
   } catch (_) {
     isIncognito = true;
   }
 } else if ('MozAppearance' in document.documentElement.style) {
   // Mozilla
   isIncognito = !navigator.serviceWorker;
 } else if (window.PointerEvent || window.MSPointerEvent) {
   // IE10 + Edge
   isIncognito = !window.indexedDB;
 }

 return isIncognito;
}

function getBrowserData(longTermData, sessionData) {
 // TODO:  Audience may be based on referrer but also on a cookie
 // that is set by an analytics package or some other value to determine
 // audience segmentation (perhaps darwin data?)... for now I'm only going
 // with referrer, but calling it audience.
 return {
   d: getDeviceClass(longTermData),
   r: getReferrer(sessionData),
   pm: isPrivateMode()
 };
}

/***/ }),

/***/ "./src/factGathering/entitlements.js":
/*!*******************************************!*\
 !*** ./src/factGathering/entitlements.js ***!
 \*******************************************/
/*! exports provided: defaultSubscriptionCheck, getSubData, defaultRegistrationCheck, getRegData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSubscriptionCheck", function() { return defaultSubscriptionCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubData", function() { return getSubData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRegistrationCheck", function() { return defaultRegistrationCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegData", function() { return getRegData; });
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.mjs");
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../storage/storage */ "./src/storage/storage.js");
/* harmony import */ var _utils_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/jwt */ "./src/utils/jwt.js");









/**
* Runs the default subscriptions check (i.e. queries /sales/public/v1/entitlements)
* If options.jwt is not found, it will get the jwt from localStorage['ArcId.USER_INFO'] which is the default.
* It is currently assumed that you are passing a valid JWT if using options.JWT (for backwards compatibility).
* In the future the JWT will also be checked for expiration
*
* If no JWT is found, an error will be thrown.
*
* @param {object} [options={}] options
* @returns {Promise<object>} An object with the data fetched from the sales endpoint service and a timestamp.
*/

function defaultSubscriptionCheck() {
 return _defaultSubscriptionCheck.apply(this, arguments);
}
/**
* if options.customSubCheck is defined, will use that to fetch entitlement data
* else, will use our default entitlement service.  This method will update sessionStorage.
*
* @export
* @param {object} [options={}]
* @returns
*/

function _defaultSubscriptionCheck() {
 _defaultSubscriptionCheck = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(
 /*#__PURE__*/
 _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
   var options,
       jwt,
       jwtError,
       start,
       url,
       response,
       json,
       _args = arguments;
   return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
     while (1) {
       switch (_context.prev = _context.next) {
         case 0:
           options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
           jwt = Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_8__["getJWT"])(options.jwt);
           jwtError = false;

           if (!jwt && !options.jwt) {
             console.warn("".concat("[ArcP]", " No JWT found, default entitlement check cannot proceed."));
             jwtError = true;
           } else if (Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_8__["isJwtExpired"])(jwt) && !options.jwt) {
             console.warn("".concat("[ArcP]", " JWT token expired, default entitlement check cannot proceed."));
             jwtError = true;
           }

           if (!jwtError) {
             _context.next = 6;
             break;
           }

           return _context.abrupt("return", {
             p: []
           });

         case 6:
           start = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4___default()();
           url = "".concat(options.apiOrigin ? "https://".concat(options.apiOrigin) : '', "/sales/public/v1/entitlements");

           if (true) {
             _context.next = 10;
             break;
           }

           return _context.abrupt("return", {
             p: ['digitalintrow'],
             timeTaken: 0,
             updated: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4___default()()
           });

         case 10:
           _context.next = 12;
           return Object(unfetch__WEBPACK_IMPORTED_MODULE_6__["default"])(url, {
             headers: {
               Authorization: "Bearer ".concat(jwt),
               'Cache-Control': 'no-store'
             }
           });

         case 12:
           response = _context.sent;
           _context.next = 15;
           return response.json();

         case 15:
           json = _context.sent;

           if (!json.httpStatus) {
             _context.next = 18;
             break;
           }

           throw new Error("".concat("[ArcP]", " ").concat(json.code || '', " ").concat(json.message || ''));

         case 18:
           return _context.abrupt("return", {
             p: json && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default()(json.skus) && json.skus.map(function (entitlement) {
               return entitlement.sku;
             }) || [],
             timeTaken: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4___default()() - start,
             updated: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4___default()()
           });

         case 19:
         case "end":
           return _context.stop();
       }
     }
   }, _callee);
 }));
 return _defaultSubscriptionCheck.apply(this, arguments);
}

function getSubData() {
 return _getSubData.apply(this, arguments);
}
/**
* Default registration check. Will ensure the JWT passed is not expired if one is not provided.
* It is currently assumed that you are passing a valid JWT if using options.JWT (for backwards compatibility).
* In the future the JWT will also be checked for expiration
* If options.jwt is not found, it will get the jwt from localStorage['ArcId.USER_INFO'] which is the default.
*
* @export
* @param {object} [options={}]
* @returns
*/

function _getSubData() {
 _getSubData = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(
 /*#__PURE__*/
 _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
   var options,
       subCheck,
       sessionData,
       userName,
       userSessionData,
       entitlements,
       _args2 = arguments;
   return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
     while (1) {
       switch (_context2.prev = _context2.next) {
         case 0:
           options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
           subCheck = typeof options.customSubCheck === 'function' ? options.customSubCheck : defaultSubscriptionCheck;
           _context2.next = 4;
           return _storage_storage__WEBPACK_IMPORTED_MODULE_7__["sessionStore"].getItem("ArcP");

         case 4:
           _context2.t0 = _context2.sent;

           if (_context2.t0) {
             _context2.next = 7;
             break;
           }

           _context2.t0 = {};

         case 7:
           sessionData = _context2.t0;
           userName = options.userName || 'anonymous';
           userSessionData = sessionData[userName] || {};
           _context2.next = 12;
           return subCheck(options);

         case 12:
           entitlements = _context2.sent;
           _context2.next = 15;
           return _storage_storage__WEBPACK_IMPORTED_MODULE_7__["sessionStore"].setItem("ArcP", _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, sessionData, _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, userName, _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, userSessionData, {
             sub: entitlements
           }))));

         case 15:
           return _context2.abrupt("return", entitlements);

         case 16:
         case "end":
           return _context2.stop();
       }
     }
   }, _callee2);
 }));
 return _getSubData.apply(this, arguments);
}

function defaultRegistrationCheck() {
 return _defaultRegistrationCheck.apply(this, arguments);
}
/**
* Run either the customRegCheck function defined in the options parameter, or the default
* reg check if no options.customRegCheck is defined.
*
* @export
* @param {object} [options={}]
* @returns {Promise<object>} A Promise resolving to an object which denotes if a user is registered or not.
*/

function _defaultRegistrationCheck() {
 _defaultRegistrationCheck = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(
 /*#__PURE__*/
 _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
   var options,
       jwt,
       _args3 = arguments;
   return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
     while (1) {
       switch (_context3.prev = _context3.next) {
         case 0:
           options = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
           jwt = Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_8__["getJWT"])(options.jwt);
           return _context3.abrupt("return", {
             l: !!options.jwt || jwt && !Object(_utils_jwt__WEBPACK_IMPORTED_MODULE_8__["isJwtExpired"])(jwt) || false,
             updated: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4___default()()
           });

         case 3:
         case "end":
           return _context3.stop();
       }
     }
   }, _callee3);
 }));
 return _defaultRegistrationCheck.apply(this, arguments);
}

function getRegData() {
 return _getRegData.apply(this, arguments);
}

function _getRegData() {
 _getRegData = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()(
 /*#__PURE__*/
 _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
   var options,
       regCheck,
       _args4 = arguments;
   return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
     while (1) {
       switch (_context4.prev = _context4.next) {
         case 0:
           options = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
           regCheck = typeof options.customRegCheck === 'function' ? options.customRegCheck : defaultRegistrationCheck;
           return _context4.abrupt("return", regCheck(options));

         case 3:
         case "end":
           return _context4.stop();
       }
     }
   }, _callee4);
 }));
 return _getRegData.apply(this, arguments);
}

/***/ }),

/***/ "./src/factGathering/pageData.js":
/*!***************************************!*\
 !*** ./src/factGathering/pageData.js ***!
 \***************************************/
/*! exports provided: getPageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageData", function() { return getPageData; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);


function defaultGetPageData(options) {
 var section;
 var contentType;
 var contentRestriction;

 if (false) {} else {
   section = options.section;
   contentType = options.contentType;
   contentRestriction = options.contentRestriction;
 }

 var contentIdentifier;

 if (false) {} else {
   var canonicalLinkEl = document.querySelector('link[rel="canonical"]');

   if (canonicalLinkEl) {
     contentIdentifier = canonicalLinkEl.getAttribute('href');
   } else {
     throw new Error("".concat("[ArcP]", " Unable to find content identifier"));
   }
 }

 return {
   s: section,
   c: contentType,
   cr: contentRestriction,
   ci: contentIdentifier
 };
}

function getPageData(customPageData, options) {
 if (typeof customPageData !== 'function') {
   return defaultGetPageData(options);
 } else {
   return customPageData(options); // should be synchronous (not a promise!)
 }
}

/***/ }),

/***/ "./src/factGathering/readCounts.js":
/*!*****************************************!*\
 !*** ./src/factGathering/readCounts.js ***!
 \*****************************************/
/*! exports provided: getReadCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReadCounts", function() { return getReadCounts; });
/**
* Gets the read counts from the data object
*
* @param {Object} [data={}] - a data object representing longterm storage.
*
* @returns {Object} Retruns either an existing read count or a new object in this shape { c: {} }
*/
function getReadCounts() {
 var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
 return {
   rc: data.rc || {
     c: {}
   }
 };
}

/***/ }),

/***/ "./src/facts.js":
/*!**********************!*\
 !*** ./src/facts.js ***!
 \**********************/
/*! exports provided: getFacts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFacts", function() { return getFacts; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _factGathering_browserData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factGathering/browserData */ "./src/factGathering/browserData.js");
/* harmony import */ var _factGathering_pageData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factGathering/pageData */ "./src/factGathering/pageData.js");
/* harmony import */ var _factGathering_readCounts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factGathering/readCounts */ "./src/factGathering/readCounts.js");
/* harmony import */ var _factGathering_entitlements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factGathering/entitlements */ "./src/factGathering/entitlements.js");
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage/storage */ "./src/storage/storage.js");
/* harmony import */ var _utils_expiration_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/expiration.js */ "./src/utils/expiration.js");
/* harmony import */ var _arc_paywall_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @arc/paywall-core */ "../paywall-core/lib/index.js");
/* harmony import */ var _arc_paywall_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_arc_paywall_core__WEBPACK_IMPORTED_MODULE_11__);












function getFacts() {
 return _getFacts.apply(this, arguments);
}

function _getFacts() {
 _getFacts = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
 /*#__PURE__*/
 _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
   var longTermData,
       sessionData,
       options,
       customPageData,
       regData,
       userName,
       userLongTermData,
       userSessionData,
       facts,
       newData,
       _args = arguments;
   return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
     while (1) {
       switch (_context.prev = _context.next) {
         case 0:
           longTermData = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
           sessionData = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
           options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
           customPageData = options.customPageData;
           _context.next = 6;
           return Object(_factGathering_entitlements__WEBPACK_IMPORTED_MODULE_8__["getRegData"])(options);

         case 6:
           regData = _context.sent;
           userName = options.userName || 'anonymous';
           userLongTermData = longTermData[userName] || {};
           userSessionData = sessionData[userName] || {};
           facts = _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, Object(_factGathering_browserData__WEBPACK_IMPORTED_MODULE_5__["getBrowserData"])(userLongTermData, userSessionData), Object(_factGathering_readCounts__WEBPACK_IMPORTED_MODULE_7__["getReadCounts"])(userLongTermData), Object(_factGathering_pageData__WEBPACK_IMPORTED_MODULE_6__["getPageData"])(customPageData, options), {
             reg: _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, regData),
             sub: _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, userSessionData.sub),
             v: userLongTermData.v
           });

           if (facts.v instanceof Array || !facts.v || Object(_arc_paywall_core__WEBPACK_IMPORTED_MODULE_11__["checkForFirstOfMonth"])(facts.v.lastUpdated)) {
             facts.v = {
               ci: [],
               lastUpdated: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()()
             };
           }

           newData = _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, longTermData, _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, userName, {
             rc: facts.rc,
             d: facts.d,
             v: facts.v,
             pm: facts.pm
           }));
           _context.next = 15;
           return _storage_storage__WEBPACK_IMPORTED_MODULE_9__["longTermStore"].setItem("ArcP", newData);

         case 15:
           if (!Object(_utils_expiration_js__WEBPACK_IMPORTED_MODULE_10__["isExpired"])(facts.sub && facts.sub.updated, 1000 * 60 * 60 * 24)) {
             _context.next = 19;
             break;
           }

           _context.next = 18;
           return Object(_factGathering_entitlements__WEBPACK_IMPORTED_MODULE_8__["getSubData"])(options);

         case 18:
           facts.sub = _context.sent;

         case 19:
           _context.next = 21;
           return _storage_storage__WEBPACK_IMPORTED_MODULE_9__["sessionStore"].setItem("ArcP", _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, sessionData, _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, userName, {
             reg: facts.reg,
             sub: facts.sub
           })));

         case 21:
           return _context.abrupt("return", facts);

         case 22:
         case "end":
           return _context.stop();
       }
     }
   }, _callee);
 }));
 return _getFacts.apply(this, arguments);
}

/***/ }),

/***/ "./src/paywall.js":
/*!************************!*\
 !*** ./src/paywall.js ***!
 \************************/
/*! exports provided: _facts, _rules, _version, _publishTimestamp, paused, reset, run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_facts", function() { return _facts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_rules", function() { return _rules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_version", function() { return _version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_publishTimestamp", function() { return _publishTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paused", function() { return paused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _facts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./facts */ "./src/facts.js");
/* harmony import */ var _factGathering_entitlements__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./factGathering/entitlements */ "./src/factGathering/entitlements.js");
/* harmony import */ var _arc_paywall_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @arc/paywall-core */ "../paywall-core/lib/index.js");
/* harmony import */ var _arc_paywall_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_arc_paywall_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./storage/storage */ "./src/storage/storage.js");













var _facts = {};
var _rules = ArcPWRules;
var _version = "1.23.0-qa.1";
var _publishTimestamp = typeof ArcPWPublishTimestamp === 'undefined' ? false : ArcPWPublishTimestamp;
var paused = typeof ArcPWPaused === 'undefined' ? false : ArcPWPaused;

function fetchEntitlements() {
 return _fetchEntitlements.apply(this, arguments);
}

function _fetchEntitlements() {
 _fetchEntitlements = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8___default()(
 /*#__PURE__*/
 _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
   var options,
       _args = arguments;
   return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
     while (1) {
       switch (_context.prev = _context.next) {
         case 0:
           options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
           _context.next = 3;
           return Object(_factGathering_entitlements__WEBPACK_IMPORTED_MODULE_10__["getSubData"])(options);

         case 3:
           _facts.sub = _context.sent;
           return _context.abrupt("return", _facts.sub);

         case 5:
         case "end":
           return _context.stop();
       }
     }
   }, _callee);
 }));
 return _fetchEntitlements.apply(this, arguments);
}

function executePaywall() {
 var triggeringRule = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
   rule: {
     pw: ''
   }
 };

 var _ref = arguments.length > 1 ? arguments[1] : undefined,
     paywallFunction = _ref.paywallFunction;

 _facts.v.ci = _facts.v.ci.filter(function (ci) {
   return _facts.ci !== ci;
 }); // remove the visit

 paywallFunction(triggeringRule.rule.pw); // run paywall function.

 delete triggeringRule.rule; // delete the actual rule so it only returns relevant data.

 return triggeringRule;
}
/**
*
*
* @export
* @param {object} triggeringRules an object with
* @param {*} options
* @returns
*/


function checkExemptions() {
 return _checkExemptions.apply(this, arguments);
}
/**
* Resets the paywall data in session & long term stores.
* @param {Storage} sessionStore - optional - a class implementing getItem, setItem, and removeItem.
* @param {Storage} longTermStore - optional - a class implementing getItem, setItem, and removeItem.
*
* @returns {Promise}
*/


function _checkExemptions() {
 _checkExemptions = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8___default()(
 /*#__PURE__*/
 _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2() {
   var triggeringRules,
       options,
       entitlements,
       ENTITLEMENTS_FETCHED,
       _iteratorNormalCompletion,
       _didIteratorError,
       _iteratorError,
       _iterator,
       _step,
       triggeringRule,
       isExempt,
       _args2 = arguments;

   return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
     while (1) {
       switch (_context2.prev = _context2.next) {
         case 0:
           triggeringRules = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : [];
           options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
           entitlements = _facts.sub;
           ENTITLEMENTS_FETCHED = false; // a logged in user w/ no sub data w/ no sub data available

           if (!(_facts.reg.l && (!entitlements || !entitlements.p || !entitlements.p.length))) {
             _context2.next = 11;
             break;
           }

           _context2.next = 7;
           return fetchEntitlements(options);

         case 7:
           entitlements = _context2.sent;
           ENTITLEMENTS_FETCHED = true;
           _context2.next = 13;
           break;

         case 11:
           if (_facts.reg.l) {
             _context2.next = 13;
             break;
           }

           return _context2.abrupt("return", executePaywall(triggeringRules[0], options));

         case 13:
           _iteratorNormalCompletion = true;
           _didIteratorError = false;
           _iteratorError = undefined;
           _context2.prev = 16;
           _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_5___default()(triggeringRules);

         case 18:
           if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
             _context2.next = 32;
             break;
           }

           triggeringRule = _step.value;
           isExempt = Object(_arc_paywall_core__WEBPACK_IMPORTED_MODULE_11__["isExemptToRule"])(triggeringRule.rule, _facts.sub, _facts.reg);

           if (!(!isExempt && !ENTITLEMENTS_FETCHED)) {
             _context2.next = 27;
             break;
           }

           _context2.next = 24;
           return fetchEntitlements(options);

         case 24:
           entitlements = _context2.sent;
           ENTITLEMENTS_FETCHED = true;
           isExempt = Object(_arc_paywall_core__WEBPACK_IMPORTED_MODULE_11__["isExemptToRule"])(triggeringRule.rule, _facts.sub, _facts.reg);

         case 27:
           if (isExempt) {
             _context2.next = 29;
             break;
           }

           return _context2.abrupt("return", executePaywall(triggeringRule, options));

         case 29:
           _iteratorNormalCompletion = true;
           _context2.next = 18;
           break;

         case 32:
           _context2.next = 38;
           break;

         case 34:
           _context2.prev = 34;
           _context2.t0 = _context2["catch"](16);
           _didIteratorError = true;
           _iteratorError = _context2.t0;

         case 38:
           _context2.prev = 38;
           _context2.prev = 39;

           if (!_iteratorNormalCompletion && _iterator.return != null) {
             _iterator.return();
           }

         case 41:
           _context2.prev = 41;

           if (!_didIteratorError) {
             _context2.next = 44;
             break;
           }

           throw _iteratorError;

         case 44:
           return _context2.finish(41);

         case 45:
           return _context2.finish(38);

         case 46:
           return _context2.abrupt("return", null);

         case 47:
         case "end":
           return _context2.stop();
       }
     }
   }, _callee2, null, [[16, 34, 38, 46], [39,, 41, 45]]);
 }));
 return _checkExemptions.apply(this, arguments);
}

function reset(session, longTerm) {
 if (!session || !longTerm) {
   Object(_storage_storage__WEBPACK_IMPORTED_MODULE_12__["initStorage"])(session, longTerm);
 }

 return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_7___default.a.all([_storage_storage__WEBPACK_IMPORTED_MODULE_12__["sessionStore"].setItem("ArcP", {}), _storage_storage__WEBPACK_IMPORTED_MODULE_12__["longTermStore"].setItem("ArcP", {})]);
}
/**
* Runs paywall script by fetching facts from various sources and then evaluating the ruleset against those facts
* @param {object} options - an object with optional functions to use to gather and store data (please see docs for more)
*
* @returns {Promise} - Returns `Promise.resolve({
       triggered: Array,
       timeTaken: Number,
       evaluated: Boolean,
       ruleCount: Number
     })`, or `Promise.reject(error)` if any error occured.
*/

function run() {
 return _run.apply(this, arguments);
} // Auto run to enable async loading of this script

function _run() {
 _run = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8___default()(
 /*#__PURE__*/
 _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3() {
   var options,
       start,
       alreadyVisited,
       userName,
       longTermData,
       sessionData,
       triggeringRules,
       paywallingRule,
       results,
       _args3 = arguments;
   return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
     while (1) {
       switch (_context3.prev = _context3.next) {
         case 0:
           options = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};

           if (!_storage_storage__WEBPACK_IMPORTED_MODULE_12__["longTermStore"] || !_storage_storage__WEBPACK_IMPORTED_MODULE_12__["sessionStore"]) {
             Object(_storage_storage__WEBPACK_IMPORTED_MODULE_12__["initStorage"])(options.sessionStorage, options.longTermStorage);
           }

           if (!(typeof options.paywallFunction !== 'function')) {
             _context3.next = 4;
             break;
           }

           throw new Error("".concat("[ArcP]", " No valid paywallFunction defined -- bailing out"));

         case 4:
           start = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4___default()();
           alreadyVisited = false;
           userName = options.userName || 'anonymous';
           _context3.next = 9;
           return _storage_storage__WEBPACK_IMPORTED_MODULE_12__["longTermStore"].getItem("ArcP");

         case 9:
           _context3.t0 = _context3.sent;

           if (_context3.t0) {
             _context3.next = 12;
             break;
           }

           _context3.t0 = {};

         case 12:
           longTermData = _context3.t0;
           _context3.next = 15;
           return _storage_storage__WEBPACK_IMPORTED_MODULE_12__["sessionStore"].getItem("ArcP");

         case 15:
           _context3.t1 = _context3.sent;

           if (_context3.t1) {
             _context3.next = 18;
             break;
           }

           _context3.t1 = {};

         case 18:
           sessionData = _context3.t1;
           _context3.next = 21;
           return Object(_facts__WEBPACK_IMPORTED_MODULE_9__["getFacts"])(longTermData || {}, sessionData || {}, options);

         case 21:
           _facts = _context3.sent;
           alreadyVisited = _facts.v.ci.indexOf(_facts.ci) >= 0; // evaluate ruleset

           triggeringRules = null;

           if (!alreadyVisited && !paused) {
             triggeringRules = Object(_arc_paywall_core__WEBPACK_IMPORTED_MODULE_11__["evaluateRuleset"])(_rules, _facts, options);
           } // check entitlements


           paywallingRule = null;

           if (!(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default()(triggeringRules) && triggeringRules.length)) {
             _context3.next = 30;
             break;
           }

           _context3.next = 29;
           return checkExemptions(triggeringRules, options);

         case 29:
           paywallingRule = _context3.sent;

         case 30:
           _context3.next = 32;
           return _storage_storage__WEBPACK_IMPORTED_MODULE_12__["longTermStore"].setItem("ArcP", _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, longTermData, _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, userName, _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, longTermData[userName], {
             rc: _facts.rc,
             v: _facts.v
           }))));

         case 32:
           results = {
             triggered: paywallingRule,
             timeTaken: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_4___default()() - start,
             visited: alreadyVisited,
             paused: paused,
             ruleCount: _rules.length,
             private: _facts.pm
           };

           if (typeof options.resultsCallback === 'function') {
             options.resultsCallback(results);
           }

           window.postMessage({
             type: 'FROM_PJS',
             ArcP: JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(window.ArcP)),
             results: results
           }, '*');
           return _context3.abrupt("return", results);

         case 36:
         case "end":
           return _context3.stop();
       }
     }
   }, _callee3);
 }));
 return _run.apply(this, arguments);
}

if (typeof window["ArcPOptions"] !== 'undefined') {
 setTimeout(function () {
   window.ArcP.run(window["ArcPOptions"]);
 }, 1); // run at the end of the execution stack to ensure everything is loaded.
}

/***/ }),

/***/ "./src/storage/browserStorage.js":
/*!***************************************!*\
 !*** ./src/storage/browserStorage.js ***!
 \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BrowserStorage; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var BrowserStorage =
/*#__PURE__*/
function () {
 function BrowserStorage(isSession) {
   _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, BrowserStorage);

   if (isSession) {
     this.store = sessionStorage;
   } else {
     this.store = localStorage;
   }
 }

 _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(BrowserStorage, [{
   key: "getItem",
   value: function getItem(key) {
     return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(JSON.parse(this.store.getItem(key)));
   }
 }, {
   key: "setItem",
   value: function setItem(key, value) {
     return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(this.store.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(value)));
   }
 }, {
   key: "removeItem",
   value: function removeItem(key) {
     return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(this.store.removeItem(key));
   }
 }]);

 return BrowserStorage;
}();



/***/ }),

/***/ "./src/storage/cookieStorage.js":
/*!**************************************!*\
 !*** ./src/storage/cookieStorage.js ***!
 \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CookieStorage; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





// based on https://github.com/marcuswestin/stores/cookieStore.js
var CookieStorage =
/*#__PURE__*/
function () {
 function CookieStorage(isSession) {
   _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CookieStorage);

   this.isSession = isSession;
   this.doc = document;
 }

 _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CookieStorage, [{
   key: "getItem",
   value: function getItem(key) {
     if (!key || !this._has(key)) {
       return null;
     }

     var regexpStr = '(?:^|.*;\\s*)' + escape(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*';
     return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(JSON.parse(unescape(this.doc.cookie.replace(new RegExp(regexpStr), '$1'))));
   }
 }, {
   key: "setItem",
   value: function setItem(key, data) {
     if (!key) {
       return;
     }

     this.doc.cookie = "".concat(escape(key), "=").concat(escape(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)), "; ").concat(this.isSession ? '' : 'expires=Tue, 19 Jan 2038 03:14:07 GMT; ', " path=/");
     return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(data);
   }
 }, {
   key: "removeItem",
   value: function removeItem(key) {
     if (!key || !this._has(key)) {
       return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject('No such key in the store');
     }

     this.doc.cookie = escape(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
     return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve();
   }
 }, {
   key: "_has",
   value: function _has(key) {
     return new RegExp('(?:^|;\\s*)' + escape(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=').test(this.doc.cookie);
   }
 }]);

 return CookieStorage;
}();


var doc = document;

/***/ }),

/***/ "./src/storage/storage.js":
/*!********************************!*\
 !*** ./src/storage/storage.js ***!
 \********************************/
/*! exports provided: longTermStore, sessionStore, setSessionStorage, setLongTermStorage, initStorage, initStorageWithDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longTermStore", function() { return longTermStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionStore", function() { return sessionStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSessionStorage", function() { return setSessionStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLongTermStorage", function() { return setLongTermStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStorage", function() { return initStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStorageWithDefaults", function() { return initStorageWithDefaults; });
/* harmony import */ var _cookieStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookieStorage */ "./src/storage/cookieStorage.js");
/* harmony import */ var _browserStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browserStorage */ "./src/storage/browserStorage.js");


var longTermStore;
var sessionStore;
function setSessionStorage(storage) {
 sessionStore = storage;
}
function setLongTermStorage(storage) {
 longTermStore = storage;
}
function initStorage(session, longTerm) {
 if (session) {
   setSessionStorage(session);
 } else {
   initStorageWithDefaults('session');
 }

 if (longTerm) {
   setLongTermStorage(longTerm);
 } else {
   initStorageWithDefaults('longTerm');
 }
}
function initStorageWithDefaults(type) {
 try {
   // check if we can write to session storage & localstorage
   var testKey = "".concat("ArcP", ".test");

   if (type === 'session' || !type) {
     window.sessionStorage.setItem(testKey, 'testValue');
     window.sessionStorage.removeItem(testKey);
     setSessionStorage(new _browserStorage__WEBPACK_IMPORTED_MODULE_1__["default"](true));
   } else if (type === 'longTerm' || !type) {
     window.localStorage.setItem(testKey, 'testValue');
     window.localStorage.removeItem(testKey);
     setLongTermStorage(new _browserStorage__WEBPACK_IMPORTED_MODULE_1__["default"](false));
   }
 } catch (_) {
   // for old safari in private mode.
   if (type === 'session' || !type) {
     setSessionStorage(new _cookieStorage__WEBPACK_IMPORTED_MODULE_0__["default"](true));
   } else if (type === 'longTerm' || !type) {
     setLongTermStorage(new _cookieStorage__WEBPACK_IMPORTED_MODULE_0__["default"](false));
   }
 }
}

/***/ }),

/***/ "./src/utils/expiration.js":
/*!*********************************!*\
 !*** ./src/utils/expiration.js ***!
 \*********************************/
/*! exports provided: isExpired */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpired", function() { return isExpired; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);


/**
* Checks if a timestamp is older than the allowed threshold.
*
* @export
* @param {Number} timeStamp - timeStamp in milliseconds from epoch.
* @param {Number} threshold - threshold of what constitutes an expired timeStamp in milliseconds.
* @returns {Boolean} false if it hasn't expired yet or if no timeStamp was found.
*/
function isExpired(timeStamp, threshold) {
 if (!timeStamp) {
   return true;
 } else {
   return _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() - timeStamp >= threshold;
 }
}

/***/ }),

/***/ "./src/utils/jwt.js":
/*!**************************!*\
 !*** ./src/utils/jwt.js ***!
 \**************************/
/*! exports provided: parseJwt, isJwtExpired, getJWT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseJwt", function() { return parseJwt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJwtExpired", function() { return isJwtExpired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJWT", function() { return getJWT; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);

function parseJwt(token) {
 try {
   var base64Url = token.split('.')[1];
   var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
   return JSON.parse(window.atob(base64));
 } catch (e) {
   console.error("Error parsing access token: ".concat(token, "\n    ").concat(e));
 }
}
function isJwtExpired(token) {
 var jwtPayload = parseJwt(token);
 return 1000 * jwtPayload.exp <= _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()(); // jwt dates are in seconds since epoch, hence "1000 *"
}
function getJWT(jwt) {
 if (!jwt) {
   try {
     jwt = JSON.parse(localStorage.getItem('ArcId.USER_INFO')); // default location from @arc/sdk-identity

     return jwt.accessToken;
   } catch (_unused) {
     return null;
   }
 } else {
   return jwt;
 }
}

/***/ }),

/***/ "./src/utils/url.js":
/*!**************************!*\
 !*** ./src/utils/url.js ***!
 \**************************/
/*! exports provided: getHostnameFromURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHostnameFromURL", function() { return getHostnameFromURL; });
function getHostnameFromURL(url) {
 var a = document.createElement('a');
 a.href = url;
 return a.hostname;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4uL3BheXdhbGwtY29yZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9hcnJheS9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL2RhdGUvbm93LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2RhdGUvbm93LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmRhdGUubm93LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdW5mZXRjaC9kaXN0L3VuZmV0Y2gubWpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9mYWN0R2F0aGVyaW5nL2Jyb3dzZXJEYXRhLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9mYWN0R2F0aGVyaW5nL2VudGl0bGVtZW50cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZmFjdEdhdGhlcmluZy9wYWdlRGF0YS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZmFjdEdhdGhlcmluZy9yZWFkQ291bnRzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9mYWN0cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvcGF5d2FsbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvc3RvcmFnZS9icm93c2VyU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvc3RvcmFnZS9jb29raWVTdG9yYWdlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9zdG9yYWdlL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3V0aWxzL2V4cGlyYXRpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3V0aWxzL2p3dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvdXRpbHMvdXJsLmpzIl0sIm5hbWVzIjpbIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwib3duS2V5cyIsIk9iamVjdCIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiZm9yRWFjaCIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsInZhbHVlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImV2YWx1YXRpb25UZWNobmlxdWVzIiwiZXZhbHVhdGVTY2FsYXIiLCJiaW5kIiwiZXZhbHVhdGVNYXRjaCIsInRydWUiLCJldmFsdWF0ZUluIiwiZmFsc2UiLCJMT0dfUFJFRklYIiwiY2hlY2tGb3JGaXJzdE9mTW9udGgiLCJ0aW1lU3RhbXAiLCJ1bmRlZmluZWQiLCJEYXRlIiwibm93IiwidG9kYXkiLCJsYXN0VXBkYXRlZCIsImdldERhdGUiLCJhZGRSZWFkQ291bnQiLCJydWxlSWQiLCJyZWFkQ291bnRzIiwiYyIsImN1cnJlbnRDb3VudEZvcklkIiwiaXNFeGVtcHRUb1J1bGUiLCJydWxlIiwic3ViIiwicmVnIiwiQXJyYXkiLCJpc0FycmF5IiwiZSIsImwiLCJwIiwic29tZSIsInNrdSIsImV2YWx1YXRlIiwibW9kaWZpZXIiLCJjb25kaXRpb25zIiwiZmFjdCIsInJlZ2V4cENyZWF0b3IiLCJjb25kaXRpb24iLCJyZXN1bHQiLCJyZWdleHAiLCJ0ZXN0IiwiaW5kZXhPZiIsImlzTmFOIiwicGFyc2VJbnQiLCJjaGVja0NvbmRpdGlvblBhcmFtcyIsIm1hdGNoZXIiLCJzbGljZSIsImV2YWx1YXRlUnVsZXNldCIsInJ1bGVzZXQiLCJmYWN0cyIsIkVycm9yIiwidHJpZ2dlcmluZ1J1bGVzIiwiZCIsInIiLCJzIiwiY3IiLCJpZCIsInJjIiwicnQiLCJwdXNoIiwidiIsImNpIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJwYXJzZVJlZmVycmVyIiwiRU5WIiwicmVmZXJyZXIiLCJnZXRIb3N0bmFtZUZyb21VUkwiLCJkb2N1bWVudCIsImdldFJlZmVycmVyIiwiZ2V0QXVkaWVuY2UiLCJkYXRhIiwiYSIsInBhcnNlRGV2aWNlQ2xhc3MiLCJ1c2VyQWdlbnQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJpc01vYmlsZVVzZXJBZ2VudCIsImlzVGFibGV0VXNlckFnZW50IiwiZ2V0RGV2aWNlQ2xhc3MiLCJpc1ByaXZhdGVNb2RlIiwiaXNJbmNvZ25pdG8iLCJjaHJvbWUiLCJmcyIsIlJlcXVlc3RGaWxlU3lzdGVtIiwid2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0iLCJURU1QT1JBUlkiLCJIVE1MRWxlbWVudCIsInRlc3RLZXkiLCJTVE9SRV9OQU1FIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImxvY2FsU3RvcmFnZSIsIm9wZW5EYXRhYmFzZSIsIl8iLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNlcnZpY2VXb3JrZXIiLCJQb2ludGVyRXZlbnQiLCJNU1BvaW50ZXJFdmVudCIsImluZGV4ZWREQiIsImdldEJyb3dzZXJEYXRhIiwibG9uZ1Rlcm1EYXRhIiwic2Vzc2lvbkRhdGEiLCJwbSIsImRlZmF1bHRTdWJzY3JpcHRpb25DaGVjayIsIm9wdGlvbnMiLCJqd3QiLCJnZXRKV1QiLCJqd3RFcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiaXNKd3RFeHBpcmVkIiwic3RhcnQiLCJ1cmwiLCJhcGlPcmlnaW4iLCJ0aW1lVGFrZW4iLCJ1cGRhdGVkIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwianNvbiIsImh0dHBTdGF0dXMiLCJjb2RlIiwibWVzc2FnZSIsInNrdXMiLCJtYXAiLCJlbnRpdGxlbWVudCIsImdldFN1YkRhdGEiLCJzdWJDaGVjayIsImN1c3RvbVN1YkNoZWNrIiwic2Vzc2lvblN0b3JlIiwiZ2V0SXRlbSIsInVzZXJOYW1lIiwidXNlclNlc3Npb25EYXRhIiwiZW50aXRsZW1lbnRzIiwiZGVmYXVsdFJlZ2lzdHJhdGlvbkNoZWNrIiwiZ2V0UmVnRGF0YSIsInJlZ0NoZWNrIiwiY3VzdG9tUmVnQ2hlY2siLCJkZWZhdWx0R2V0UGFnZURhdGEiLCJzZWN0aW9uIiwiY29udGVudFR5cGUiLCJjb250ZW50UmVzdHJpY3Rpb24iLCJjb250ZW50SWRlbnRpZmllciIsImNhbm9uaWNhbExpbmtFbCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJnZXRQYWdlRGF0YSIsImN1c3RvbVBhZ2VEYXRhIiwiZ2V0UmVhZENvdW50cyIsImdldEZhY3RzIiwicmVnRGF0YSIsInVzZXJMb25nVGVybURhdGEiLCJuZXdEYXRhIiwibG9uZ1Rlcm1TdG9yZSIsImlzRXhwaXJlZCIsIl9mYWN0cyIsIl9ydWxlcyIsIkFyY1BXUnVsZXMiLCJfdmVyc2lvbiIsIlZFUlNJT04iLCJfcHVibGlzaFRpbWVzdGFtcCIsIkFyY1BXUHVibGlzaFRpbWVzdGFtcCIsInBhdXNlZCIsIkFyY1BXUGF1c2VkIiwiZmV0Y2hFbnRpdGxlbWVudHMiLCJleGVjdXRlUGF5d2FsbCIsInRyaWdnZXJpbmdSdWxlIiwicHciLCJwYXl3YWxsRnVuY3Rpb24iLCJjaGVja0V4ZW1wdGlvbnMiLCJFTlRJVExFTUVOVFNfRkVUQ0hFRCIsImlzRXhlbXB0IiwicmVzZXQiLCJzZXNzaW9uIiwibG9uZ1Rlcm0iLCJpbml0U3RvcmFnZSIsImFsbCIsInJ1biIsImxvbmdUZXJtU3RvcmFnZSIsImFscmVhZHlWaXNpdGVkIiwicGF5d2FsbGluZ1J1bGUiLCJyZXN1bHRzIiwidHJpZ2dlcmVkIiwidmlzaXRlZCIsInJ1bGVDb3VudCIsInByaXZhdGUiLCJyZXN1bHRzQ2FsbGJhY2siLCJwb3N0TWVzc2FnZSIsInR5cGUiLCJBcmNQIiwiSlNPTiIsInBhcnNlIiwiT1BUSU9OUyIsInNldFRpbWVvdXQiLCJCcm93c2VyU3RvcmFnZSIsImlzU2Vzc2lvbiIsInN0b3JlIiwicmVzb2x2ZSIsIkNvb2tpZVN0b3JhZ2UiLCJkb2MiLCJfaGFzIiwicmVnZXhwU3RyIiwiZXNjYXBlIiwicmVwbGFjZSIsInVuZXNjYXBlIiwiY29va2llIiwiUmVnRXhwIiwicmVqZWN0Iiwic2V0U2Vzc2lvblN0b3JhZ2UiLCJzdG9yYWdlIiwic2V0TG9uZ1Rlcm1TdG9yYWdlIiwiaW5pdFN0b3JhZ2VXaXRoRGVmYXVsdHMiLCJ0aHJlc2hvbGQiLCJwYXJzZUp3dCIsInRva2VuIiwiYmFzZTY0VXJsIiwic3BsaXQiLCJiYXNlNjQiLCJhdG9iIiwiZXJyb3IiLCJqd3RQYXlsb2FkIiwiZXhwIiwiYWNjZXNzVG9rZW4iLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImhvc3RuYW1lIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztB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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztB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QUhELENBR0UsZ0JBQU07QUFDTixhQUFPLElBQVA7QUFDRDtBQUNGLEdBUEQsTUFPTztBQUNMLFdBQU90SCxHQUFQO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7QUMzQkQ7QUFBQTtBQUFPLFNBQVN6QyxrQkFBVCxDQUE0QmdELEdBQTVCLEVBQWlDO0FBQ3RDLE1BQUkzQyxDQUFDLEdBQUdKLFFBQVEsQ0FBQytKLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUjtBQUNBM0osR0FBQyxDQUFDNEosSUFBRixHQUFTakgsR0FBVDtBQUNBLFNBQU8zQyxDQUFDLENBQUM2SixRQUFUO0FBQ0QsQyIsImZpbGUiOiJBcmNQLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGV2YWx1YXRpb25UZWNobmlxdWVzID0ge1xuICAnPic6IGV2YWx1YXRlU2NhbGFyLmJpbmQobnVsbCwgJz4nKSxcbiAgJzwnOiBldmFsdWF0ZVNjYWxhci5iaW5kKG51bGwsICc8JyksXG4gICc9JzogZXZhbHVhdGVTY2FsYXIuYmluZChudWxsLCAnPScpLFxuICAnIT0nOiBldmFsdWF0ZVNjYWxhci5iaW5kKG51bGwsICchPScpLFxuICAnKic6IGV2YWx1YXRlTWF0Y2guYmluZChudWxsLCB0cnVlKSxcbiAgJyEqJzogZXZhbHVhdGVNYXRjaC5iaW5kKG51bGwsIGZhbHNlKSxcbiAgdHJ1ZTogZXZhbHVhdGVJbi5iaW5kKG51bGwsIHRydWUpLFxuICBmYWxzZTogZXZhbHVhdGVJbi5iaW5kKG51bGwsIGZhbHNlKVxufTtcbnZhciBMT0dfUFJFRklYID0gJ1tBcmNQXSc7XG4vKipcbiAqIENvbXBhcmVzIGEgdGltZXRzYW1wIHRvIHNlZSBpZiBpdCB0b2RheSBpcyB0aGUgZmlyc3Qgb2YgdGhlIG1vbnRoIGJ1dCB0aGUgdGltZXN0YW1wIGlzXG4gKiBmcm9tIGEgZGlmZmVyZW50IGRheSAodXNlZCB0byBleHBpcmUgdGhpbmdzIHdoZW4gdGhlIG5ldyBtb250aCByb2xscyBpbilcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVN0YW1wIC0gdGltZVN0YW1wIGluIG1pbGxpc2Vjb25kcyBmcm9tIGVwb2NoLlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59IC0gdHJ1ZSBpZiBpdCBzaG91bGQgYmUgY2xlYXJlZCBmYWxzZSBpZiBub3QuXG4gKi9cblxuZnVuY3Rpb24gY2hlY2tGb3JGaXJzdE9mTW9udGgoKSB7XG4gIHZhciB0aW1lU3RhbXAgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IERhdGUubm93KCk7XG4gIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHZhciBsYXN0VXBkYXRlZCA9IG5ldyBEYXRlKHRpbWVTdGFtcCk7XG4gIHJldHVybiB0b2RheS5nZXREYXRlKCkgPT09IDEgJiYgbGFzdFVwZGF0ZWQuZ2V0RGF0ZSgpICE9PSAxO1xufVxuLyoqXG4gKiBBZGRzIGEgcmVhZCBjb3VudCB0byB0aGUgYXBwcm9wcmlhdGUgcGxhY2VzIGJhc2VkIG9uIHRoZSBwYXJhbWV0ZXJzIHBhc3NlZC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gcnVsZUlkLCBJZCBvZiB0aGUgcnVsZSB3aGljaCB0aGUgcmVhZCBjb3VudCBzaG91bGQgYmUgYWRkZWQgdG9cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWFkQ291bnRzIC0gQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgcHJldmlvdXMgcmVhZGNvdW50IGRhdGEgKGZyb20gbG9uZy10ZXJtIHN0b3JhZ2V9XG4gKi9cblxuXG5mdW5jdGlvbiBhZGRSZWFkQ291bnQocnVsZUlkLCByZWFkQ291bnRzKSB7XG4gIGlmICghcmVhZENvdW50cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlYWRDb3VudHMgPSBjaGVja0ZvckZpcnN0T2ZNb250aChyZWFkQ291bnRzLmxhc3RVcGRhdGVkKSA/IHtcbiAgICBjOiB7fVxuICB9IDogcmVhZENvdW50cztcbiAgdmFyIGN1cnJlbnRDb3VudEZvcklkID0gcmVhZENvdW50cy5jW3J1bGVJZF0gfHwgMDtcbiAgcmVhZENvdW50cy5jW3J1bGVJZF0gPSBjdXJyZW50Q291bnRGb3JJZCArIDE7XG4gIHJlYWRDb3VudHMubGFzdFVwZGF0ZWQgPSBEYXRlLm5vdygpO1xuICByZXR1cm4gcmVhZENvdW50cztcbn1cbi8qKlxuICogQ2hlY2tzIGlmIGEgcmVhZGVyIGlzIGV4ZW1wdCB0byBhIGNlcnRhaW4gcnVsZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBydWxlXG4gKiBAcGFyYW0ge29iamVjdH0gW3N1Yj17fV1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcmVnPXt9XVxuICogQHJldHVybnMge2Jvb2xlYW59IC0gdHJ1ZSBpZiByZWFkZXIgaXMgZXhlbXB0IHRvIHRoaXMgcnVsZTsgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5cblxuZnVuY3Rpb24gaXNFeGVtcHRUb1J1bGUocnVsZSkge1xuICB2YXIgc3ViID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIHJlZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocnVsZS5lKSAmJiBydWxlLmUubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuICEhcmVnLmw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc3ViLnApICYmIHN1Yi5wLnNvbWUoZnVuY3Rpb24gKHNrdSkge1xuICAgICAgcmV0dXJuIGV2YWx1YXRlKHJ1bGUuZSwgc2t1KTtcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBFdmFsdWF0ZXMgd2hldGhlciB0aGUgZmFjdCBtYXRjaGVzIChvciBub3QsIGJhc2VkIG9uIHRoZSBtb2RpZmllcikgYW55IG9mIHRoZSBjb25kaXRpb25zIGluIHRoZSBjb25kaXRpb25zIGFycmF5LlxuICogSWYgYSBtYXRjaGVyIGlzIG5vdCBwYXNzZWQgaW4sIGl0IHdpbGwgc2ltcGx5IGRvIGFuIGluZGV4T2Ygd2l0aCBlYWNoIGNvbmRpdGlvbiBhZ2FpbnN0IHRoZSBmYWN0LlxuICogaS5lIGAoY29uZGl0aW9uLmluZGV4T2YoZmFjdCkgPj0gMClgXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBtb2RpZmllclxuICogQHBhcmFtIHtBcnJheX0gY29uZGl0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IGZhY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlZ2V4cENyZWF0b3IgLSBUaGlzIGZ1bmN0aW9uIHNob3VsZCB0YWtlIG9uZSBhcmd1bWVudCBhbmQgcmV0dXJuIGEgUmVnRXhwIG9iamVjdC4gRGVmYXVsdHMgdG8gL2ZhY3QvXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGZhY3QgbWF0Y2hlcyAob3Igbm90LCBiYXNlZCBvbiBtb2RpZmllciBiZWluZyBmYWxzZSkgYW55IG9mIHRoZSBjb25kaXRpb25zIHBhc3NlZCBpbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGV2YWx1YXRlTWF0Y2gobW9kaWZpZXIsIGNvbmRpdGlvbnMsIGZhY3QsIHJlZ2V4cENyZWF0b3IpIHtcbiAgcmV0dXJuIGNvbmRpdGlvbnMuc29tZShmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgaWYgKHR5cGVvZiByZWdleHBDcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgcmVnZXhwID0gcmVnZXhwQ3JlYXRvcihjb25kaXRpb24pO1xuICAgICAgcmVzdWx0ID0gcmVnZXhwLnRlc3QoZmFjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGNvbmRpdGlvbi5pbmRleE9mKGZhY3QpID49IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKHJlc3VsdCBeICFtb2RpZmllcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBldmFsdWF0ZUluKG1vZGlmaWVyLCBjb25kaXRpb25zLCBmYWN0KSB7XG4gIHJldHVybiAhIShjb25kaXRpb25zLmluZGV4T2YoZmFjdCkgPj0gMCBeICFtb2RpZmllcik7XG59XG4vKipcbiAqIEV2YWx1YXRlcyBzY2FsYXIgdmFsdWVzIGJhc2VkIG9uIGEgbW9kaWZpZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGlmaWVyIC0gY2FuIGJlICc8JywgJz4nLCAnPScgb3IgJyE9J1xuICogQHBhcmFtIHtBcnJheX0gY29uZGl0aW9ucyAtIGFuIGFycmF5IHdpdGggaXRzIGZpcnN0IGVsZW1lbnQgYXMgYSBudW1iZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmYWN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbmRpdGlvbiBpcyBwYXNzZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBldmFsdWF0ZVNjYWxhcihtb2RpZmllciwgY29uZGl0aW9ucywgZmFjdCkge1xuICB2YXIgY29uZGl0aW9uID0gY29uZGl0aW9uc1swXTtcblxuICBpZiAoIWlzTmFOKHBhcnNlSW50KGNvbmRpdGlvbikpKSB7XG4gICAgc3dpdGNoIChtb2RpZmllcikge1xuICAgICAgY2FzZSAnPic6XG4gICAgICAgIHJldHVybiBmYWN0ID4gY29uZGl0aW9uc1swXTtcblxuICAgICAgY2FzZSAnPCc6XG4gICAgICAgIHJldHVybiBmYWN0IDwgY29uZGl0aW9uc1swXTtcblxuICAgICAgY2FzZSAnPSc6XG4gICAgICAgIHJldHVybiBjb25kaXRpb25zWzBdID09PSBmYWN0O1xuXG4gICAgICBjYXNlICchPSc6XG4gICAgICAgIHJldHVybiBjb25kaXRpb25zWzBdICE9IGZhY3Q7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgLy8gc2hvdWxkbid0IGhhcHBlbiwgYnV0IGp1c3QgaW4gY2FzZSFcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGJvdGggdGhlIGBjb25kaXRpb25gIGFuZCBgZmFjdGAgYXJlIHZhbGlkLiBGb3IgdGhlIGBjb25kaXRpb25gIHRvIGJlIHZhbGlkXG4gKiBpdCBuZWVkcyB0byBiZSBhbiBgQXJyYXlgIG9mIGF0IGxlYXN0IDIgZWxlbWVudHMgd2l0aCB0aGUgZmlyc3Qgb25lIGJlaW5nIG9mIHR5cGUgYm9vbGVhbi5cbiAqXG4gKiBGb3IgdGhlIGBmYWN0YCB0byBiZSB2YWxpZCBpdCBuZWVkcyB0byBiZSBhIG5vbi1lbXB0eSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gY29uZGl0aW9uIC0gZS5nLiBbdHJ1ZSwgJ2ZpbmFuY2UnLCAnYnVzaW5lc3MnXSBvciBbZmFsc2UsICc4LjguOC44J10pXG4gKiBAcGFyYW0ge3N0cmluZ30gZmFjdCAtIGkuZS4gbm9uLWVtcHR5IGZhY3QgYmVpbmcgY2hlY2tlZCBhZ2FpbnN0IHRoZSBjb25kaXRpb25zXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLS0gdHJ1ZSBpZiB0aGUgY29uZGl0aW9ucyAmIGZhY3QgYXJlIHZhbGlkLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cblxuXG5mdW5jdGlvbiBjaGVja0NvbmRpdGlvblBhcmFtcyhjb25kaXRpb24sIGZhY3QpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGNvbmRpdGlvbikgfHwgY29uZGl0aW9uWzBdID09IG51bGwgfHwgLy8gaW50ZW50aW9uYWwgdHlwZSBjb2Vyc2lvblxuICB0eXBlb2YgY29uZGl0aW9uWzBdICE9PSAnYm9vbGVhbicgJiYgIS9ePnw8fD18IT18XFwqfCFcXCokLy50ZXN0KGNvbmRpdGlvblswXSkgfHwgY29uZGl0aW9uLmxlbmd0aCA8IDIgfHwgZmFjdCA9PT0gbnVsbCB8fCBmYWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogQ2hlY2tzIHRoYXQgYSBgY29uZGl0aW9uYCByZXByZXNlbnRlZCBieSBhbiBhcnJheSBzdGFydGluZyB3LyBhIGJvb2xlYW4gKGUuZy4gW3RydWUsICdmaW5hbmNlLCAnYnVzaW5lc3MnXSkgaXNcbiAqIHNhdGlzZmllZCBieSBhIGBmYWN0YCByZXByZXNlbnRlZCBieSBhIHN0cmluZy4gSWYgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYGNvbmRpdGlvbmAgaXMgdHJ1ZSwgdGhlbiBpdFxuICogd2lsbCByZXR1cm4gdHJ1ZSBpZiBgZmFjdGAgaXMgaW4gdGhlIGBjb25kaXRpb25gIGFycmF5LiAgSWYgdGhlIGZpcnN0IGVsZW1lbnQgaW4gYGNvbmRpdGlvbmAgaXMgZmFsc2UsXG4gKiBpdCB3aWxsIHJldHVybiB0cnVlIGlmIGBmYWN0YCBpcyBOT1QgaW4gdGhlIGBjb25kaXRpb25gIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNvbmRpdGlvbnMgLSBlLmcuIFt0cnVlLCAnZmluYW5jZScsICdidXNpbmVzcyddIG9yIFtmYWxzZSwgJzguOC44LjgnXSlcbiAqIEBwYXJhbSB7c3RyaW5nfSBmYWN0IC0gaS5lLiBub24tZW1wdHkgZmFjdCBiZWluZyBjaGVja2VkIGFnYWluc3QgdGhlIGNvbmRpdGlvbnNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG1hdGNoZXIgLSBhIGZ1bmN0aW9uIHRvIHJ1biBhcyBhIHByZWRpY2F0ZSBvbiBldmVyeSBlbGVtZW50IGluIHRoZSBjb25kaXRpb25zIGFycmF5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB0cnVlIGlmIHRoZSBjb25kaXRpb24gbWF0Y2hlcywgZmFsc2UgaWYgaXQgZG9lc24ndFxuICovXG5cblxuZnVuY3Rpb24gZXZhbHVhdGUoY29uZGl0aW9ucywgZmFjdCwgbWF0Y2hlcikge1xuICBpZiAoIWNoZWNrQ29uZGl0aW9uUGFyYW1zKGNvbmRpdGlvbnMsIGZhY3QpKSB7XG4gICAgcmV0dXJuIHRydWU7IC8vIGlmIHRoaW5ncyBhcmUgbWlzc2luZyBqdXN0IGRlZmF1bHQgdG8gdHJ1ZVxuICB9XG5cbiAgdmFyIG1vZGlmaWVyID0gY29uZGl0aW9uc1swXTtcbiAgdmFyIHJlc3VsdCA9IGV2YWx1YXRpb25UZWNobmlxdWVzW21vZGlmaWVyXShjb25kaXRpb25zLnNsaWNlKDEpLCBmYWN0LCBtYXRjaGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogR2l2ZW4gYSBydWxlc2V0IGFuZCBhIGZhY3RzIG9iamVjdCwgaXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGNhbGwgdGhlIHBheXdhbGxDYWxsYmFjayBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcnVsZXNldFxuICogQHBhcmFtIHtvYmplY3R9IGZhY3RzXG4gKi9cblxuXG5mdW5jdGlvbiBldmFsdWF0ZVJ1bGVzZXQocnVsZXNldCwgZmFjdHMpIHtcbiAgaWYgKCFydWxlc2V0IHx8ICFmYWN0cykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChMT0dfUFJFRklYLCBcIiBNaXNzaW5nIHJ1bGVzZXQsIGZhY3RzIG9yIGNhbGxiYWNrIHBhcmFtZXRlciBpbiBldmFsdWF0ZVJ1bGVzZXRcXG4gICAgICAgICAgcnVsZXNldDogXCIpLmNvbmNhdChydWxlc2V0LCBcIlxcbiAgICAgICAgICBmYWN0czogXCIpLmNvbmNhdChmYWN0cykpO1xuICB9XG5cbiAgdmFyIHRyaWdnZXJpbmdSdWxlcyA9IFtdO1xuICBBcnJheS5pc0FycmF5KHJ1bGVzZXQpICYmIHJ1bGVzZXQuZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgIHZhciBzdWIgPSBmYWN0cy5zdWIgfHwge307XG4gICAgdmFyIHJlZyA9IGZhY3RzLnJlZyB8fCB7fTtcblxuICAgIGlmIChldmFsdWF0ZShydWxlLmMsIGZhY3RzLmMpICYmIGV2YWx1YXRlKHJ1bGUuZCwgZmFjdHMuZCkgJiYgZXZhbHVhdGUocnVsZS5yLCBmYWN0cy5yKSAmJiBldmFsdWF0ZShydWxlLnMsIGZhY3RzLnMpICYmIGV2YWx1YXRlKHJ1bGUuY3IsIGZhY3RzLmNyKSAmJiAhaXNFeGVtcHRUb1J1bGUocnVsZSwgc3ViLCByZWcpKSB7XG4gICAgICBhZGRSZWFkQ291bnQocnVsZS5pZCwgZmFjdHMucmMpO1xuXG4gICAgICBpZiAoZXZhbHVhdGUocnVsZS5ydCwgZmFjdHMucmMuY1tydWxlLmlkXSB8fCAwKSkge1xuICAgICAgICB0cmlnZ2VyaW5nUnVsZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IHJ1bGUuaWQsXG4gICAgICAgICAgcmM6IGZhY3RzLnJjLmNbcnVsZS5pZF0sXG4gICAgICAgICAgcnVsZTogX29iamVjdFNwcmVhZCh7fSwgcnVsZSlcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIHN0b3JlIHRoZSB2aXNpdFxuXG5cbiAgICAgIGlmICghZmFjdHMudiB8fCAhQXJyYXkuaXNBcnJheShmYWN0cy52LmNpKSkge1xuICAgICAgICBmYWN0cy52ID0gZmFjdHMudiB8fCB7XG4gICAgICAgICAgY2k6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGZhY3RzLnYuY2kgPSBmYWN0cy52LmNpIHx8IFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmFjdHMudi5jaS5pbmRleE9mKGZhY3RzLmNpKSA8IDApIHtcbiAgICAgICAgZmFjdHMudi5jaS5wdXNoKGZhY3RzLmNpKTtcbiAgICAgICAgZmFjdHMudi5sYXN0VXBkYXRlZCA9IERhdGUubm93KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0V4ZW1wdFRvUnVsZShydWxlLCBzdWIsIHJlZykpIHtcbiAgICAgIC8vIGNsZWFyIGNvdW50cyBpZiB0aGlzIHJlYWRlciBoYXMgYW4gZXhlbXB0aW9uIHRvIHRoaXMgcnVsZS5cbiAgICAgIGRlbGV0ZSBmYWN0cy5yYy5jW3J1bGUuaWRdO1xuICAgICAgZmFjdHMucmMubGFzdFVwZGF0ZWQgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0cmlnZ2VyaW5nUnVsZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBldmFsdWF0ZVJ1bGVzZXQ6IGV2YWx1YXRlUnVsZXNldCxcbiAgZXZhbHVhdGU6IGV2YWx1YXRlLFxuICBjaGVja0NvbmRpdGlvblBhcmFtczogY2hlY2tDb25kaXRpb25QYXJhbXMsXG4gIGNoZWNrRm9yRmlyc3RPZk1vbnRoOiBjaGVja0ZvckZpcnN0T2ZNb250aCxcbiAgaXNFeGVtcHRUb1J1bGU6IGlzRXhlbXB0VG9SdWxlXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMvcGF5d2FsbC5qcycpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2lzLWFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9kYXRlL25vd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktc3ltYm9sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIik7IiwidmFyIF9Qcm9taXNlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvcHJvbWlzZVwiKTtcblxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIF9Qcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBfUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJ2YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuXG4gICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwidmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7XG5cbnZhciBfT2JqZWN0JGdldE93blByb3BlcnR5U3ltYm9scyA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHNcIik7XG5cbnZhciBfT2JqZWN0JGtleXMgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qva2V5c1wiKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICB2YXIgb3duS2V5cyA9IF9PYmplY3Qka2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBfT2JqZWN0JGdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KF9PYmplY3QkZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIF9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG59KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiAmJiBzZWxmKTtcbiAgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuaXMtYXJyYXknKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmlzQXJyYXk7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5kYXRlLm5vdycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuRGF0ZS5ub3c7XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKTtcbnZhciAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0geyBzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5IH0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsLm5hdmlnYXRvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXQgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG4iLCIvLyAyMi4xLjIuMiAvIDE1LjQuMy4yIEFycmF5LmlzQXJyYXkoYXJnKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdBcnJheScsIHsgaXNBcnJheTogcmVxdWlyZSgnLi9faXMtYXJyYXknKSB9KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIvLyAyMC4zLjMuMSAvIDE1LjkuNC40IERhdGUubm93KClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnRGF0ZScsIHsgbm93OiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfSB9KTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG4iLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcbiIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlLG4pe3JldHVybiBuPW58fHt9LG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQscil7dmFyIHM9bmV3IFhNTEh0dHBSZXF1ZXN0O2Zvcih2YXIgbyBpbiBzLm9wZW4obi5tZXRob2R8fFwiZ2V0XCIsZSwhMCksbi5oZWFkZXJzKXMuc2V0UmVxdWVzdEhlYWRlcihvLG4uaGVhZGVyc1tvXSk7ZnVuY3Rpb24gdSgpe3ZhciBlLG49W10sdD1bXSxyPXt9O3JldHVybiBzLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnJlcGxhY2UoL14oLio/KTpbXlxcU1xcbl0qKFtcXHNcXFNdKj8pJC9nbSxmdW5jdGlvbihzLG8sdSl7bi5wdXNoKG89by50b0xvd2VyQ2FzZSgpKSx0LnB1c2goW28sdV0pLHJbb109KGU9cltvXSk/ZStcIixcIit1OnV9KSx7b2s6Mj09KHMuc3RhdHVzLzEwMHwwKSxzdGF0dXM6cy5zdGF0dXMsc3RhdHVzVGV4dDpzLnN0YXR1c1RleHQsdXJsOnMucmVzcG9uc2VVUkwsY2xvbmU6dSx0ZXh0OmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzLnJlc3BvbnNlVGV4dCl9LGpzb246ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHMucmVzcG9uc2VUZXh0KS50aGVuKEpTT04ucGFyc2UpfSxibG9iOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbcy5yZXNwb25zZV0pKX0saGVhZGVyczp7a2V5czpmdW5jdGlvbigpe3JldHVybiBufSxlbnRyaWVzOmZ1bmN0aW9uKCl7cmV0dXJuIHR9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gcltlLnRvTG93ZXJDYXNlKCldfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKWluIHJ9fX19cy53aXRoQ3JlZGVudGlhbHM9XCJpbmNsdWRlXCI9PW4uY3JlZGVudGlhbHMscy5vbmxvYWQ9ZnVuY3Rpb24oKXt0KHUoKSl9LHMub25lcnJvcj1yLHMuc2VuZChuLmJvZHl8fG51bGwpfSl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5mZXRjaC5tanMubWFwXG4iLCJpbXBvcnQgeyBnZXRIb3N0bmFtZUZyb21VUkwgfSBmcm9tICcuLi91dGlscy91cmwnO1xuXG5mdW5jdGlvbiBwYXJzZVJlZmVycmVyKCkge1xuICBpZiAoRU5WLnRlc3QpIHtcbiAgICByZXR1cm4gJ3Rlc3QnO1xuICB9XG5cbiAgY29uc3QgcmVmZXJyZXIgPSBnZXRIb3N0bmFtZUZyb21VUkwoZG9jdW1lbnQucmVmZXJyZXIpO1xuXG4gIC8vIEZvciBub3cganVzdCBjaGVjayBmb3IgZ29vZ2xlLCBmYWNlYm9vaywgdHdpdHRlci4gT3RoZXJ3aXNlIHNhdmUgdGhlIGhvc3RuYW1lXG4gIGlmICgvZmFjZWJvb2tcXC5jb20kLy50ZXN0KHJlZmVycmVyKSkge1xuICAgIHJldHVybiAnZmFjZWJvb2snO1xuICB9IGVsc2UgaWYgKC90d2l0dGVyXFwuY29tJC8udGVzdChyZWZlcnJlcikpIHtcbiAgICByZXR1cm4gJ3R3aXR0ZXInO1xuICB9IGVsc2UgaWYgKC9nb29nbGVcXC5jbyhtfFxcLlthLXpdezJ9KSQvLnRlc3QocmVmZXJyZXIpKSB7XG4gICAgcmV0dXJuICdnb29nbGUnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZWZlcnJlcjsgLy8gdGhpcyBtYXkgbmVlZCBzb21lIGFkZGl0aW9uYWwgcGFyc2luZy5cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZWZlcnJlcigpIHtcbiAgcmV0dXJuIHBhcnNlUmVmZXJyZXIoKTtcbn1cblxuLy8gVE9ETzogJ2F1ZGllbmNlJyBpcyBhIGJpdCBtdXJreSB3aGVuIGl0IGNvbWVzIHRvIHJlcXVpcmVtZW50cy4gTGlrZWx5LCBob3dldmVyLFxuLy8gdGhlcmUgd2lsbCBiZSBzb21lIGluc3BlY3Rpb24gb2YgY29va2llcyBmb3IgYXVkaWVuY2Ugc2VnbWVudGF0aW9uIGluZm9ybWF0aW9uLlxuLy8gdGhpcyBpcyBqdXN0IGEgc3R1Yi4uLlxuZnVuY3Rpb24gZ2V0QXVkaWVuY2UoZGF0YSA9IHt9KSB7XG4gIHJldHVybiBkYXRhLmEgfHwgJ3NvbWV0aGluZyBzcGVjaWFsJztcbn1cblxuZnVuY3Rpb24gcGFyc2VEZXZpY2VDbGFzcyh1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkge1xuICBjb25zdCBpc01vYmlsZVVzZXJBZ2VudCA9IC9tb2JpL2kudGVzdCh1c2VyQWdlbnQpO1xuICBjb25zdCBpc1RhYmxldFVzZXJBZ2VudCA9IC8odGFibGV0fGlwYWR8cGxheWJvb2t8c2lsayl8KGFuZHJvaWQoPyEuKm1vYmlsZSkpL2kudGVzdCh1c2VyQWdlbnQpO1xuXG4gIGlmIChpc01vYmlsZVVzZXJBZ2VudCAmJiAhaXNUYWJsZXRVc2VyQWdlbnQpIHtcbiAgICByZXR1cm4gJ21vYmlsZSc7XG4gIH0gZWxzZSBpZiAoaXNUYWJsZXRVc2VyQWdlbnQpIHtcbiAgICByZXR1cm4gJ3RhYmxldCc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdkZXNrdG9wJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZXZpY2VDbGFzcyhkYXRhID0ge30pIHtcbiAgcmV0dXJuIGRhdGEuZCB8fCBwYXJzZURldmljZUNsYXNzKCk7XG59XG5cbmZ1bmN0aW9uIGlzUHJpdmF0ZU1vZGUoKSB7XG4gIGxldCBpc0luY29nbml0byA9IGZhbHNlO1xuXG4gIGlmICh3aW5kb3cuY2hyb21lKSB7XG4gICAgLy8gaXMgY2hyb21pdW0gZmxhdm9yZWRcbiAgICBjb25zdCBmcyA9IHdpbmRvdy5SZXF1ZXN0RmlsZVN5c3RlbSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW07XG4gICAgaWYgKGZzKSB7XG4gICAgICBmcyhcbiAgICAgICAgd2luZG93LlRFTVBPUkFSWSxcbiAgICAgICAgMTAwLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaXNJbmNvZ25pdG8gPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlzSW5jb2duaXRvID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoL2NvbnN0cnVjdG9yL2kudGVzdCh3aW5kb3cuSFRNTEVsZW1lbnQpKSB7XG4gICAgLy8gU2FmYXJpXG4gICAgdHJ5IHtcbiAgICAgIC8vIGNoZWNrIGlmIHdlIGNhbiB3cml0ZSB0byBzZXNzaW9uIHN0b3JhZ2UgJiBsb2NhbHN0b3JhZ2VcbiAgICAgIGNvbnN0IHRlc3RLZXkgPSBgJHtTVE9SRV9OQU1FfS50ZXN0YDtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRlc3RLZXksICd0ZXN0VmFsdWUnKTtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHRlc3RLZXkpO1xuXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGVzdEtleSwgJ3Rlc3RWYWx1ZScpO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRlc3RLZXkpO1xuXG4gICAgICB3aW5kb3cub3BlbkRhdGFiYXNlKG51bGwsIG51bGwsIG51bGwsIG51bGwpO1xuICAgICAgaXNJbmNvZ25pdG8gPSBmYWxzZTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICBpc0luY29nbml0byA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKCdNb3pBcHBlYXJhbmNlJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUpIHtcbiAgICAvLyBNb3ppbGxhXG4gICAgaXNJbmNvZ25pdG8gPSAhbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXI7XG4gIH0gZWxzZSBpZiAod2luZG93LlBvaW50ZXJFdmVudCB8fCB3aW5kb3cuTVNQb2ludGVyRXZlbnQpIHtcbiAgICAvLyBJRTEwICsgRWRnZVxuICAgIGlzSW5jb2duaXRvID0gIXdpbmRvdy5pbmRleGVkREI7XG4gIH1cblxuICByZXR1cm4gaXNJbmNvZ25pdG87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyRGF0YShsb25nVGVybURhdGEsIHNlc3Npb25EYXRhKSB7XG4gIC8vIFRPRE86ICBBdWRpZW5jZSBtYXkgYmUgYmFzZWQgb24gcmVmZXJyZXIgYnV0IGFsc28gb24gYSBjb29raWVcbiAgLy8gdGhhdCBpcyBzZXQgYnkgYW4gYW5hbHl0aWNzIHBhY2thZ2Ugb3Igc29tZSBvdGhlciB2YWx1ZSB0byBkZXRlcm1pbmVcbiAgLy8gYXVkaWVuY2Ugc2VnbWVudGF0aW9uIChwZXJoYXBzIGRhcndpbiBkYXRhPykuLi4gZm9yIG5vdyBJJ20gb25seSBnb2luZ1xuICAvLyB3aXRoIHJlZmVycmVyLCBidXQgY2FsbGluZyBpdCBhdWRpZW5jZS5cblxuICByZXR1cm4ge1xuICAgIGQ6IGdldERldmljZUNsYXNzKGxvbmdUZXJtRGF0YSksXG4gICAgcjogZ2V0UmVmZXJyZXIoc2Vzc2lvbkRhdGEpLFxuICAgIHBtOiBpc1ByaXZhdGVNb2RlKClcbiAgfTtcbn1cbiIsImltcG9ydCBmZXRjaCBmcm9tICd1bmZldGNoJztcbmltcG9ydCB7IHNlc3Npb25TdG9yZSB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZSc7XG5pbXBvcnQgeyBpc0p3dEV4cGlyZWQsIGdldEpXVCB9IGZyb20gJy4uL3V0aWxzL2p3dCc7XG5cbi8qKlxuICogUnVucyB0aGUgZGVmYXVsdCBzdWJzY3JpcHRpb25zIGNoZWNrIChpLmUuIHF1ZXJpZXMgL3NhbGVzL3B1YmxpYy92MS9lbnRpdGxlbWVudHMpXG4gKiBJZiBvcHRpb25zLmp3dCBpcyBub3QgZm91bmQsIGl0IHdpbGwgZ2V0IHRoZSBqd3QgZnJvbSBsb2NhbFN0b3JhZ2VbJ0FyY0lkLlVTRVJfSU5GTyddIHdoaWNoIGlzIHRoZSBkZWZhdWx0LlxuICogSXQgaXMgY3VycmVudGx5IGFzc3VtZWQgdGhhdCB5b3UgYXJlIHBhc3NpbmcgYSB2YWxpZCBKV1QgaWYgdXNpbmcgb3B0aW9ucy5KV1QgKGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSkuXG4gKiBJbiB0aGUgZnV0dXJlIHRoZSBKV1Qgd2lsbCBhbHNvIGJlIGNoZWNrZWQgZm9yIGV4cGlyYXRpb25cbiAqXG4gKiBJZiBubyBKV1QgaXMgZm91bmQsIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV0gb3B0aW9uc1xuICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn0gQW4gb2JqZWN0IHdpdGggdGhlIGRhdGEgZmV0Y2hlZCBmcm9tIHRoZSBzYWxlcyBlbmRwb2ludCBzZXJ2aWNlIGFuZCBhIHRpbWVzdGFtcC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRTdWJzY3JpcHRpb25DaGVjayhvcHRpb25zID0ge30pIHtcbiAgbGV0IGp3dCA9IGdldEpXVChvcHRpb25zLmp3dCk7XG5cbiAgbGV0IGp3dEVycm9yID0gZmFsc2U7XG4gIGlmICghand0ICYmICFvcHRpb25zLmp3dCkge1xuICAgIGNvbnNvbGUud2FybihgJHtMT0dfUFJFRklYfSBObyBKV1QgZm91bmQsIGRlZmF1bHQgZW50aXRsZW1lbnQgY2hlY2sgY2Fubm90IHByb2NlZWQuYCk7XG4gICAgand0RXJyb3IgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGlzSnd0RXhwaXJlZChqd3QpICYmICFvcHRpb25zLmp3dCkge1xuICAgIGNvbnNvbGUud2FybihgJHtMT0dfUFJFRklYfSBKV1QgdG9rZW4gZXhwaXJlZCwgZGVmYXVsdCBlbnRpdGxlbWVudCBjaGVjayBjYW5ub3QgcHJvY2VlZC5gKTtcbiAgICBqd3RFcnJvciA9IHRydWU7XG4gIH1cbiAgaWYgKGp3dEVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHA6IFtdXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgdXJsID0gYCR7XG4gICAgb3B0aW9ucy5hcGlPcmlnaW4gPyBgaHR0cHM6Ly8ke29wdGlvbnMuYXBpT3JpZ2lufWAgOiAnJ1xuICB9L3NhbGVzL3B1YmxpYy92MS9lbnRpdGxlbWVudHNgO1xuXG4gIGlmIChFTlYudGVzdCB8fCBFTlYuZGV2KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHA6IFsnZGlnaXRhbGludHJvdyddLFxuICAgICAgdGltZVRha2VuOiAwLFxuICAgICAgdXBkYXRlZDogRGF0ZS5ub3coKVxuICAgIH07XG4gIH1cblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtqd3R9YCxcbiAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLXN0b3JlJ1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBpZiAoanNvbi5odHRwU3RhdHVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke0xPR19QUkVGSVh9ICR7anNvbi5jb2RlIHx8ICcnfSAke2pzb24ubWVzc2FnZSB8fCAnJ31gKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcDogKGpzb24gJiYgQXJyYXkuaXNBcnJheShqc29uLnNrdXMpICYmIGpzb24uc2t1cy5tYXAoZW50aXRsZW1lbnQgPT4gZW50aXRsZW1lbnQuc2t1KSkgfHwgW10sXG4gICAgdGltZVRha2VuOiBEYXRlLm5vdygpIC0gc3RhcnQsXG4gICAgdXBkYXRlZDogRGF0ZS5ub3coKVxuICB9O1xufVxuXG4vKipcbiAqIGlmIG9wdGlvbnMuY3VzdG9tU3ViQ2hlY2sgaXMgZGVmaW5lZCwgd2lsbCB1c2UgdGhhdCB0byBmZXRjaCBlbnRpdGxlbWVudCBkYXRhXG4gKiBlbHNlLCB3aWxsIHVzZSBvdXIgZGVmYXVsdCBlbnRpdGxlbWVudCBzZXJ2aWNlLiAgVGhpcyBtZXRob2Qgd2lsbCB1cGRhdGUgc2Vzc2lvblN0b3JhZ2UuXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN1YkRhdGEob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHN1YkNoZWNrID1cbiAgICB0eXBlb2Ygb3B0aW9ucy5jdXN0b21TdWJDaGVjayA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBvcHRpb25zLmN1c3RvbVN1YkNoZWNrXG4gICAgICA6IGRlZmF1bHRTdWJzY3JpcHRpb25DaGVjaztcblxuICBjb25zdCBzZXNzaW9uRGF0YSA9IChhd2FpdCBzZXNzaW9uU3RvcmUuZ2V0SXRlbShTVE9SRV9OQU1FKSkgfHwge307XG4gIGNvbnN0IHVzZXJOYW1lID0gb3B0aW9ucy51c2VyTmFtZSB8fCAnYW5vbnltb3VzJztcbiAgY29uc3QgdXNlclNlc3Npb25EYXRhID0gc2Vzc2lvbkRhdGFbdXNlck5hbWVdIHx8IHt9O1xuICBjb25zdCBlbnRpdGxlbWVudHMgPSBhd2FpdCBzdWJDaGVjayhvcHRpb25zKTtcblxuICBhd2FpdCBzZXNzaW9uU3RvcmUuc2V0SXRlbShTVE9SRV9OQU1FLCB7XG4gICAgLi4uc2Vzc2lvbkRhdGEsXG4gICAgW3VzZXJOYW1lXToge1xuICAgICAgLi4udXNlclNlc3Npb25EYXRhLFxuICAgICAgc3ViOiBlbnRpdGxlbWVudHNcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbnRpdGxlbWVudHM7XG59XG5cbi8qKlxuICogRGVmYXVsdCByZWdpc3RyYXRpb24gY2hlY2suIFdpbGwgZW5zdXJlIHRoZSBKV1QgcGFzc2VkIGlzIG5vdCBleHBpcmVkIGlmIG9uZSBpcyBub3QgcHJvdmlkZWQuXG4gKiBJdCBpcyBjdXJyZW50bHkgYXNzdW1lZCB0aGF0IHlvdSBhcmUgcGFzc2luZyBhIHZhbGlkIEpXVCBpZiB1c2luZyBvcHRpb25zLkpXVCAoZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5KS5cbiAqIEluIHRoZSBmdXR1cmUgdGhlIEpXVCB3aWxsIGFsc28gYmUgY2hlY2tlZCBmb3IgZXhwaXJhdGlvblxuICogSWYgb3B0aW9ucy5qd3QgaXMgbm90IGZvdW5kLCBpdCB3aWxsIGdldCB0aGUgand0IGZyb20gbG9jYWxTdG9yYWdlWydBcmNJZC5VU0VSX0lORk8nXSB3aGljaCBpcyB0aGUgZGVmYXVsdC5cbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVmYXVsdFJlZ2lzdHJhdGlvbkNoZWNrKG9wdGlvbnMgPSB7fSkge1xuICBsZXQgand0ID0gZ2V0SldUKG9wdGlvbnMuand0KTtcblxuICByZXR1cm4ge1xuICAgIGw6ICEhb3B0aW9ucy5qd3QgfHwgKGp3dCAmJiAhaXNKd3RFeHBpcmVkKGp3dCkpIHx8IGZhbHNlLFxuICAgIHVwZGF0ZWQ6IERhdGUubm93KClcbiAgfTtcbn1cblxuLyoqXG4gKiBSdW4gZWl0aGVyIHRoZSBjdXN0b21SZWdDaGVjayBmdW5jdGlvbiBkZWZpbmVkIGluIHRoZSBvcHRpb25zIHBhcmFtZXRlciwgb3IgdGhlIGRlZmF1bHRcbiAqIHJlZyBjaGVjayBpZiBubyBvcHRpb25zLmN1c3RvbVJlZ0NoZWNrIGlzIGRlZmluZWQuXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn0gQSBQcm9taXNlIHJlc29sdmluZyB0byBhbiBvYmplY3Qgd2hpY2ggZGVub3RlcyBpZiBhIHVzZXIgaXMgcmVnaXN0ZXJlZCBvciBub3QuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWdEYXRhKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCByZWdDaGVjayA9XG4gICAgdHlwZW9mIG9wdGlvbnMuY3VzdG9tUmVnQ2hlY2sgPT09ICdmdW5jdGlvbidcbiAgICAgID8gb3B0aW9ucy5jdXN0b21SZWdDaGVja1xuICAgICAgOiBkZWZhdWx0UmVnaXN0cmF0aW9uQ2hlY2s7XG5cbiAgcmV0dXJuIHJlZ0NoZWNrKG9wdGlvbnMpO1xufVxuIiwiZnVuY3Rpb24gZGVmYXVsdEdldFBhZ2VEYXRhKG9wdGlvbnMpIHtcbiAgbGV0IHNlY3Rpb247XG4gIGxldCBjb250ZW50VHlwZTtcbiAgbGV0IGNvbnRlbnRSZXN0cmljdGlvbjtcblxuICBpZiAoRU5WLnRlc3QpIHtcbiAgICBzZWN0aW9uID0gJ2J1c2luZXNzJztcbiAgICBjb250ZW50VHlwZSA9ICdhcnRpY2xlJztcbiAgICBjb250ZW50UmVzdHJpY3Rpb24gPSAnbm9ybWFsJztcbiAgfSBlbHNlIHtcbiAgICBzZWN0aW9uID0gb3B0aW9ucy5zZWN0aW9uO1xuICAgIGNvbnRlbnRUeXBlID0gb3B0aW9ucy5jb250ZW50VHlwZTtcbiAgICBjb250ZW50UmVzdHJpY3Rpb24gPSBvcHRpb25zLmNvbnRlbnRSZXN0cmljdGlvbjtcbiAgfVxuXG4gIGxldCBjb250ZW50SWRlbnRpZmllcjtcbiAgaWYgKEVOVi50ZXN0KSB7XG4gICAgY29udGVudElkZW50aWZpZXIgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGNhbm9uaWNhbExpbmtFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwiY2Fub25pY2FsXCJdJyk7XG5cbiAgICBpZiAoY2Fub25pY2FsTGlua0VsKSB7XG4gICAgICBjb250ZW50SWRlbnRpZmllciA9IGNhbm9uaWNhbExpbmtFbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke0xPR19QUkVGSVh9IFVuYWJsZSB0byBmaW5kIGNvbnRlbnQgaWRlbnRpZmllcmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgczogc2VjdGlvbixcbiAgICBjOiBjb250ZW50VHlwZSxcbiAgICBjcjogY29udGVudFJlc3RyaWN0aW9uLFxuICAgIGNpOiBjb250ZW50SWRlbnRpZmllclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFnZURhdGEoY3VzdG9tUGFnZURhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21QYWdlRGF0YSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBkZWZhdWx0R2V0UGFnZURhdGEob3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGN1c3RvbVBhZ2VEYXRhKG9wdGlvbnMpOyAvLyBzaG91bGQgYmUgc3luY2hyb25vdXMgKG5vdCBhIHByb21pc2UhKVxuICB9XG59XG4iLCIvKipcbiAqIEdldHMgdGhlIHJlYWQgY291bnRzIGZyb20gdGhlIGRhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtkYXRhPXt9XSAtIGEgZGF0YSBvYmplY3QgcmVwcmVzZW50aW5nIGxvbmd0ZXJtIHN0b3JhZ2UuXG4gKlxuICogQHJldHVybnMge09iamVjdH0gUmV0cnVucyBlaXRoZXIgYW4gZXhpc3RpbmcgcmVhZCBjb3VudCBvciBhIG5ldyBvYmplY3QgaW4gdGhpcyBzaGFwZSB7IGM6IHt9IH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJlYWRDb3VudHMoZGF0YSA9IHt9KSB7XG4gIHJldHVybiB7XG4gICAgcmM6IGRhdGEucmMgfHwgeyBjOiB7fSB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBnZXRCcm93c2VyRGF0YSB9IGZyb20gJy4vZmFjdEdhdGhlcmluZy9icm93c2VyRGF0YSc7XG5pbXBvcnQgeyBnZXRQYWdlRGF0YSB9IGZyb20gJy4vZmFjdEdhdGhlcmluZy9wYWdlRGF0YSc7XG5pbXBvcnQgeyBnZXRSZWFkQ291bnRzIH0gZnJvbSAnLi9mYWN0R2F0aGVyaW5nL3JlYWRDb3VudHMnO1xuaW1wb3J0IHsgZ2V0UmVnRGF0YSwgZ2V0U3ViRGF0YSB9IGZyb20gJy4vZmFjdEdhdGhlcmluZy9lbnRpdGxlbWVudHMnO1xuaW1wb3J0IHsgbG9uZ1Rlcm1TdG9yZSwgc2Vzc2lvblN0b3JlIH0gZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2UnO1xuaW1wb3J0IHsgaXNFeHBpcmVkIH0gZnJvbSAnLi91dGlscy9leHBpcmF0aW9uLmpzJztcbmltcG9ydCB7IGNoZWNrRm9yRmlyc3RPZk1vbnRoIH0gZnJvbSAnQGFyYy9wYXl3YWxsLWNvcmUnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmFjdHMobG9uZ1Rlcm1EYXRhID0ge30sIHNlc3Npb25EYXRhID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IGN1c3RvbVBhZ2VEYXRhIH0gPSBvcHRpb25zO1xuICBjb25zdCByZWdEYXRhID0gYXdhaXQgZ2V0UmVnRGF0YShvcHRpb25zKTtcblxuICBjb25zdCB1c2VyTmFtZSA9IG9wdGlvbnMudXNlck5hbWUgfHwgJ2Fub255bW91cyc7XG4gIGNvbnN0IHVzZXJMb25nVGVybURhdGEgPSBsb25nVGVybURhdGFbdXNlck5hbWVdIHx8IHt9O1xuICBjb25zdCB1c2VyU2Vzc2lvbkRhdGEgPSBzZXNzaW9uRGF0YVt1c2VyTmFtZV0gfHwge307XG5cbiAgY29uc3QgZmFjdHMgPSB7XG4gICAgLi4uZ2V0QnJvd3NlckRhdGEodXNlckxvbmdUZXJtRGF0YSwgdXNlclNlc3Npb25EYXRhKSxcbiAgICAuLi5nZXRSZWFkQ291bnRzKHVzZXJMb25nVGVybURhdGEpLFxuICAgIC4uLmdldFBhZ2VEYXRhKGN1c3RvbVBhZ2VEYXRhLCBvcHRpb25zKSxcbiAgICByZWc6IHtcbiAgICAgIC4uLnJlZ0RhdGFcbiAgICB9LFxuICAgIHN1Yjoge1xuICAgICAgLi4udXNlclNlc3Npb25EYXRhLnN1YlxuICAgIH0sXG4gICAgdjogdXNlckxvbmdUZXJtRGF0YS52XG4gIH07XG5cbiAgaWYgKGZhY3RzLnYgaW5zdGFuY2VvZiBBcnJheSB8fCAhZmFjdHMudiB8fCBjaGVja0ZvckZpcnN0T2ZNb250aChmYWN0cy52Lmxhc3RVcGRhdGVkKSkge1xuICAgIGZhY3RzLnYgPSB7IGNpOiBbXSwgbGFzdFVwZGF0ZWQ6IERhdGUubm93KCkgfTtcbiAgfVxuXG4gIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgLi4ubG9uZ1Rlcm1EYXRhLFxuICAgIFt1c2VyTmFtZV06IHtcbiAgICAgIHJjOiBmYWN0cy5yYyxcbiAgICAgIGQ6IGZhY3RzLmQsXG4gICAgICB2OiBmYWN0cy52LFxuICAgICAgcG06IGZhY3RzLnBtXG4gICAgfVxuICB9O1xuXG4gIGF3YWl0IGxvbmdUZXJtU3RvcmUuc2V0SXRlbShTVE9SRV9OQU1FLCBuZXdEYXRhKTtcblxuICBpZiAoaXNFeHBpcmVkKGZhY3RzLnN1YiAmJiBmYWN0cy5zdWIudXBkYXRlZCwgMTAwMCAqIDYwICogNjAgKiAyNCkpIHtcbiAgICBmYWN0cy5zdWIgPSBhd2FpdCBnZXRTdWJEYXRhKG9wdGlvbnMpO1xuICB9XG5cbiAgYXdhaXQgc2Vzc2lvblN0b3JlLnNldEl0ZW0oU1RPUkVfTkFNRSwge1xuICAgIC4uLnNlc3Npb25EYXRhLFxuICAgIFt1c2VyTmFtZV06IHtcbiAgICAgIHJlZzogZmFjdHMucmVnLFxuICAgICAgc3ViOiBmYWN0cy5zdWJcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmYWN0cztcbn1cbiIsImltcG9ydCB7IGdldEZhY3RzIH0gZnJvbSAnLi9mYWN0cyc7XG5pbXBvcnQgeyBnZXRTdWJEYXRhIH0gZnJvbSAnLi9mYWN0R2F0aGVyaW5nL2VudGl0bGVtZW50cyc7XG5pbXBvcnQgeyBldmFsdWF0ZVJ1bGVzZXQsIGlzRXhlbXB0VG9SdWxlIH0gZnJvbSAnQGFyYy9wYXl3YWxsLWNvcmUnO1xuaW1wb3J0IHsgaW5pdFN0b3JhZ2UsIGxvbmdUZXJtU3RvcmUsIHNlc3Npb25TdG9yZSB9IGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcblxuZXhwb3J0IGxldCBfZmFjdHMgPSB7fTtcbmV4cG9ydCBjb25zdCBfcnVsZXMgPSBBcmNQV1J1bGVzO1xuZXhwb3J0IGNvbnN0IF92ZXJzaW9uID0gVkVSU0lPTjtcbmV4cG9ydCBjb25zdCBfcHVibGlzaFRpbWVzdGFtcCA9XG4gIHR5cGVvZiBBcmNQV1B1Ymxpc2hUaW1lc3RhbXAgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBBcmNQV1B1Ymxpc2hUaW1lc3RhbXA7XG5leHBvcnQgY29uc3QgcGF1c2VkID0gdHlwZW9mIEFyY1BXUGF1c2VkID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogQXJjUFdQYXVzZWQ7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRW50aXRsZW1lbnRzKG9wdGlvbnMgPSB7fSkge1xuICBfZmFjdHMuc3ViID0gYXdhaXQgZ2V0U3ViRGF0YShvcHRpb25zKTtcbiAgcmV0dXJuIF9mYWN0cy5zdWI7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVQYXl3YWxsKHRyaWdnZXJpbmdSdWxlID0geyBydWxlOiB7IHB3OiAnJyB9IH0sIHsgcGF5d2FsbEZ1bmN0aW9uIH0pIHtcbiAgX2ZhY3RzLnYuY2kgPSBfZmFjdHMudi5jaS5maWx0ZXIoY2kgPT4gX2ZhY3RzLmNpICE9PSBjaSk7IC8vIHJlbW92ZSB0aGUgdmlzaXRcbiAgcGF5d2FsbEZ1bmN0aW9uKHRyaWdnZXJpbmdSdWxlLnJ1bGUucHcpOyAvLyBydW4gcGF5d2FsbCBmdW5jdGlvbi5cbiAgZGVsZXRlIHRyaWdnZXJpbmdSdWxlLnJ1bGU7IC8vIGRlbGV0ZSB0aGUgYWN0dWFsIHJ1bGUgc28gaXQgb25seSByZXR1cm5zIHJlbGV2YW50IGRhdGEuXG4gIHJldHVybiB0cmlnZ2VyaW5nUnVsZTtcbn1cblxuLyoqXG4gKlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7b2JqZWN0fSB0cmlnZ2VyaW5nUnVsZXMgYW4gb2JqZWN0IHdpdGhcbiAqIEBwYXJhbSB7Kn0gb3B0aW9uc1xuICogQHJldHVybnNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2hlY2tFeGVtcHRpb25zKHRyaWdnZXJpbmdSdWxlcyA9IFtdLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGVudGl0bGVtZW50cyA9IF9mYWN0cy5zdWI7XG4gIGxldCBFTlRJVExFTUVOVFNfRkVUQ0hFRCA9IGZhbHNlO1xuXG4gIC8vIGEgbG9nZ2VkIGluIHVzZXIgdy8gbm8gc3ViIGRhdGEgdy8gbm8gc3ViIGRhdGEgYXZhaWxhYmxlXG4gIGlmIChfZmFjdHMucmVnLmwgJiYgKCFlbnRpdGxlbWVudHMgfHwgIWVudGl0bGVtZW50cy5wIHx8ICFlbnRpdGxlbWVudHMucC5sZW5ndGgpKSB7XG4gICAgZW50aXRsZW1lbnRzID0gYXdhaXQgZmV0Y2hFbnRpdGxlbWVudHMob3B0aW9ucyk7XG4gICAgRU5USVRMRU1FTlRTX0ZFVENIRUQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKCFfZmFjdHMucmVnLmwpIHtcbiAgICAvLyBpZiBub3QgbG9nZ2VkIGluLCBubyBuZWVkIHRvIGRvIGVudGl0bGVtZW50IGNoZWNrLCBmaXJlIHBheXdhbGwgb2ZmIG9mIGZpcnN0IHRyaWdnZXJpbmdSdWxlLlxuICAgIHJldHVybiBleGVjdXRlUGF5d2FsbCh0cmlnZ2VyaW5nUnVsZXNbMF0sIG9wdGlvbnMpO1xuICB9XG5cbiAgZm9yIChjb25zdCB0cmlnZ2VyaW5nUnVsZSBvZiB0cmlnZ2VyaW5nUnVsZXMpIHtcbiAgICBsZXQgaXNFeGVtcHQgPSBpc0V4ZW1wdFRvUnVsZSh0cmlnZ2VyaW5nUnVsZS5ydWxlLCBfZmFjdHMuc3ViLCBfZmFjdHMucmVnKTtcblxuICAgIGlmICghaXNFeGVtcHQgJiYgIUVOVElUTEVNRU5UU19GRVRDSEVEKSB7XG4gICAgICBlbnRpdGxlbWVudHMgPSBhd2FpdCBmZXRjaEVudGl0bGVtZW50cyhvcHRpb25zKTtcbiAgICAgIEVOVElUTEVNRU5UU19GRVRDSEVEID0gdHJ1ZTtcbiAgICAgIGlzRXhlbXB0ID0gaXNFeGVtcHRUb1J1bGUodHJpZ2dlcmluZ1J1bGUucnVsZSwgX2ZhY3RzLnN1YiwgX2ZhY3RzLnJlZyk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0V4ZW1wdCkge1xuICAgICAgcmV0dXJuIGV4ZWN1dGVQYXl3YWxsKHRyaWdnZXJpbmdSdWxlLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDsgLy8gcmVhZGVyIGlzIGV4ZW1wdCBmcm9tIGFsbCB0cmlnZ2VyaW5nIHJ1bGVzLlxufVxuXG4vKipcbiAqIFJlc2V0cyB0aGUgcGF5d2FsbCBkYXRhIGluIHNlc3Npb24gJiBsb25nIHRlcm0gc3RvcmVzLlxuICogQHBhcmFtIHtTdG9yYWdlfSBzZXNzaW9uU3RvcmUgLSBvcHRpb25hbCAtIGEgY2xhc3MgaW1wbGVtZW50aW5nIGdldEl0ZW0sIHNldEl0ZW0sIGFuZCByZW1vdmVJdGVtLlxuICogQHBhcmFtIHtTdG9yYWdlfSBsb25nVGVybVN0b3JlIC0gb3B0aW9uYWwgLSBhIGNsYXNzIGltcGxlbWVudGluZyBnZXRJdGVtLCBzZXRJdGVtLCBhbmQgcmVtb3ZlSXRlbS5cbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0KHNlc3Npb24sIGxvbmdUZXJtKSB7XG4gIGlmICghc2Vzc2lvbiB8fCAhbG9uZ1Rlcm0pIHtcbiAgICBpbml0U3RvcmFnZShzZXNzaW9uLCBsb25nVGVybSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwoW3Nlc3Npb25TdG9yZS5zZXRJdGVtKFNUT1JFX05BTUUsIHt9KSwgbG9uZ1Rlcm1TdG9yZS5zZXRJdGVtKFNUT1JFX05BTUUsIHt9KV0pO1xufVxuXG4vKipcbiAqIFJ1bnMgcGF5d2FsbCBzY3JpcHQgYnkgZmV0Y2hpbmcgZmFjdHMgZnJvbSB2YXJpb3VzIHNvdXJjZXMgYW5kIHRoZW4gZXZhbHVhdGluZyB0aGUgcnVsZXNldCBhZ2FpbnN0IHRob3NlIGZhY3RzXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbmFsIGZ1bmN0aW9ucyB0byB1c2UgdG8gZ2F0aGVyIGFuZCBzdG9yZSBkYXRhIChwbGVhc2Ugc2VlIGRvY3MgZm9yIG1vcmUpXG4gKlxuICogQHJldHVybnMge1Byb21pc2V9IC0gUmV0dXJucyBgUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgdHJpZ2dlcmVkOiBBcnJheSxcbiAgICAgICAgdGltZVRha2VuOiBOdW1iZXIsXG4gICAgICAgIGV2YWx1YXRlZDogQm9vbGVhbixcbiAgICAgICAgcnVsZUNvdW50OiBOdW1iZXJcbiAgICAgIH0pYCwgb3IgYFByb21pc2UucmVqZWN0KGVycm9yKWAgaWYgYW55IGVycm9yIG9jY3VyZWQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW4ob3B0aW9ucyA9IHt9KSB7XG4gIGlmICghbG9uZ1Rlcm1TdG9yZSB8fCAhc2Vzc2lvblN0b3JlKSB7XG4gICAgaW5pdFN0b3JhZ2Uob3B0aW9ucy5zZXNzaW9uU3RvcmFnZSwgb3B0aW9ucy5sb25nVGVybVN0b3JhZ2UpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLnBheXdhbGxGdW5jdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHtMT0dfUFJFRklYfSBObyB2YWxpZCBwYXl3YWxsRnVuY3Rpb24gZGVmaW5lZCAtLSBiYWlsaW5nIG91dGApO1xuICB9XG5cbiAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICBsZXQgYWxyZWFkeVZpc2l0ZWQgPSBmYWxzZTtcbiAgY29uc3QgdXNlck5hbWUgPSBvcHRpb25zLnVzZXJOYW1lIHx8ICdhbm9ueW1vdXMnO1xuICBjb25zdCBsb25nVGVybURhdGEgPSAoYXdhaXQgbG9uZ1Rlcm1TdG9yZS5nZXRJdGVtKFNUT1JFX05BTUUpKSB8fCB7fTtcbiAgY29uc3Qgc2Vzc2lvbkRhdGEgPSAoYXdhaXQgc2Vzc2lvblN0b3JlLmdldEl0ZW0oU1RPUkVfTkFNRSkpIHx8IHt9O1xuXG4gIC8vIGdhdGhlciBmYWN0c1xuICBfZmFjdHMgPSBhd2FpdCBnZXRGYWN0cyhsb25nVGVybURhdGEgfHwge30sIHNlc3Npb25EYXRhIHx8IHt9LCBvcHRpb25zKTtcblxuICBhbHJlYWR5VmlzaXRlZCA9IF9mYWN0cy52LmNpLmluZGV4T2YoX2ZhY3RzLmNpKSA+PSAwO1xuXG4gIC8vIGV2YWx1YXRlIHJ1bGVzZXRcbiAgbGV0IHRyaWdnZXJpbmdSdWxlcyA9IG51bGw7XG4gIGlmICghYWxyZWFkeVZpc2l0ZWQgJiYgIXBhdXNlZCkge1xuICAgIHRyaWdnZXJpbmdSdWxlcyA9IGV2YWx1YXRlUnVsZXNldChfcnVsZXMsIF9mYWN0cywgb3B0aW9ucyk7XG4gIH1cblxuICAvLyBjaGVjayBlbnRpdGxlbWVudHNcbiAgbGV0IHBheXdhbGxpbmdSdWxlID0gbnVsbDtcbiAgaWYgKEFycmF5LmlzQXJyYXkodHJpZ2dlcmluZ1J1bGVzKSAmJiB0cmlnZ2VyaW5nUnVsZXMubGVuZ3RoKSB7XG4gICAgcGF5d2FsbGluZ1J1bGUgPSBhd2FpdCBjaGVja0V4ZW1wdGlvbnModHJpZ2dlcmluZ1J1bGVzLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8vIHNhdmUgdmlzaXQgJiByZWFkY291bnRzXG4gIGF3YWl0IGxvbmdUZXJtU3RvcmUuc2V0SXRlbShTVE9SRV9OQU1FLCB7XG4gICAgLi4ubG9uZ1Rlcm1EYXRhLFxuICAgIFt1c2VyTmFtZV06IHtcbiAgICAgIC4uLmxvbmdUZXJtRGF0YVt1c2VyTmFtZV0sXG4gICAgICByYzogX2ZhY3RzLnJjLFxuICAgICAgdjogX2ZhY3RzLnZcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdHMgPSB7XG4gICAgdHJpZ2dlcmVkOiBwYXl3YWxsaW5nUnVsZSxcbiAgICB0aW1lVGFrZW46IERhdGUubm93KCkgLSBzdGFydCxcbiAgICB2aXNpdGVkOiBhbHJlYWR5VmlzaXRlZCxcbiAgICBwYXVzZWQ6IHBhdXNlZCxcbiAgICBydWxlQ291bnQ6IF9ydWxlcy5sZW5ndGgsXG4gICAgcHJpdmF0ZTogX2ZhY3RzLnBtXG4gIH07XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLnJlc3VsdHNDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMucmVzdWx0c0NhbGxiYWNrKHJlc3VsdHMpO1xuICB9XG5cbiAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgIHsgdHlwZTogJ0ZST01fUEpTJywgQXJjUDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh3aW5kb3cuQXJjUCkpLCByZXN1bHRzOiByZXN1bHRzIH0sXG4gICAgJyonXG4gICk7XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8vIEF1dG8gcnVuIHRvIGVuYWJsZSBhc3luYyBsb2FkaW5nIG9mIHRoaXMgc2NyaXB0XG5pZiAodHlwZW9mIHdpbmRvd1tPUFRJT05TXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2luZG93LkFyY1AucnVuKHdpbmRvd1tPUFRJT05TXSk7XG4gIH0sIDEpOyAvLyBydW4gYXQgdGhlIGVuZCBvZiB0aGUgZXhlY3V0aW9uIHN0YWNrIHRvIGVuc3VyZSBldmVyeXRoaW5nIGlzIGxvYWRlZC5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb3dzZXJTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoaXNTZXNzaW9uKSB7XG4gICAgaWYgKGlzU2Vzc2lvbikge1xuICAgICAgdGhpcy5zdG9yZSA9IHNlc3Npb25TdG9yYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlID0gbG9jYWxTdG9yYWdlO1xuICAgIH1cbiAgfVxuICBnZXRJdGVtKGtleSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoSlNPTi5wYXJzZSh0aGlzLnN0b3JlLmdldEl0ZW0oa2V5KSkpO1xuICB9XG4gIHNldEl0ZW0oa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zdG9yZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKSk7XG4gIH1cbiAgcmVtb3ZlSXRlbShrZXkpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc3RvcmUucmVtb3ZlSXRlbShrZXkpKTtcbiAgfVxufVxuIiwiLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL21hcmN1c3dlc3Rpbi9zdG9yZXMvY29va2llU3RvcmUuanNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKGlzU2Vzc2lvbikge1xuICAgIHRoaXMuaXNTZXNzaW9uID0gaXNTZXNzaW9uO1xuICAgIHRoaXMuZG9jID0gZG9jdW1lbnQ7XG4gIH1cblxuICBnZXRJdGVtKGtleSkge1xuICAgIGlmICgha2V5IHx8ICF0aGlzLl9oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciByZWdleHBTdHIgPVxuICAgICAgJyg/Ol58Lio7XFxcXHMqKScgK1xuICAgICAgZXNjYXBlKGtleSkucmVwbGFjZSgvWy0uKypdL2csICdcXFxcJCYnKSArXG4gICAgICAnXFxcXHMqXFxcXD1cXFxccyooKD86W147XSg/ITspKSpbXjtdPykuKic7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcbiAgICAgIEpTT04ucGFyc2UodW5lc2NhcGUodGhpcy5kb2MuY29va2llLnJlcGxhY2UobmV3IFJlZ0V4cChyZWdleHBTdHIpLCAnJDEnKSkpXG4gICAgKTtcbiAgfVxuXG4gIHNldEl0ZW0oa2V5LCBkYXRhKSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kb2MuY29va2llID0gYCR7ZXNjYXBlKGtleSl9PSR7ZXNjYXBlKEpTT04uc3RyaW5naWZ5KGRhdGEpKX07ICR7XG4gICAgICB0aGlzLmlzU2Vzc2lvbiA/ICcnIDogJ2V4cGlyZXM9VHVlLCAxOSBKYW4gMjAzOCAwMzoxNDowNyBHTVQ7ICdcbiAgICB9IHBhdGg9L2A7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkYXRhKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgaWYgKCFrZXkgfHwgIXRoaXMuX2hhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ05vIHN1Y2gga2V5IGluIHRoZSBzdG9yZScpO1xuICAgIH1cbiAgICB0aGlzLmRvYy5jb29raWUgPSBlc2NhcGUoa2V5KSArICc9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UOyBwYXRoPS8nO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIF9oYXMoa2V5KSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyg/Ol58O1xcXFxzKiknICsgZXNjYXBlKGtleSkucmVwbGFjZSgvWy0uKypdL2csICdcXFxcJCYnKSArICdcXFxccypcXFxcPScpLnRlc3QoXG4gICAgICB0aGlzLmRvYy5jb29raWVcbiAgICApO1xuICB9XG59XG5cbmNvbnN0IGRvYyA9IGRvY3VtZW50O1xuIiwiaW1wb3J0IENvb2tpZVN0b3JhZ2UgZnJvbSAnLi9jb29raWVTdG9yYWdlJztcbmltcG9ydCBCcm93c2VyU3RvcmFnZSBmcm9tICcuL2Jyb3dzZXJTdG9yYWdlJztcblxuZXhwb3J0IGxldCBsb25nVGVybVN0b3JlO1xuZXhwb3J0IGxldCBzZXNzaW9uU3RvcmU7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZXNzaW9uU3RvcmFnZShzdG9yYWdlKSB7XG4gIHNlc3Npb25TdG9yZSA9IHN0b3JhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb25nVGVybVN0b3JhZ2Uoc3RvcmFnZSkge1xuICBsb25nVGVybVN0b3JlID0gc3RvcmFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdG9yYWdlKHNlc3Npb24sIGxvbmdUZXJtKSB7XG4gIGlmIChzZXNzaW9uKSB7XG4gICAgc2V0U2Vzc2lvblN0b3JhZ2Uoc2Vzc2lvbik7XG4gIH0gZWxzZSB7XG4gICAgaW5pdFN0b3JhZ2VXaXRoRGVmYXVsdHMoJ3Nlc3Npb24nKTtcbiAgfVxuXG4gIGlmIChsb25nVGVybSkge1xuICAgIHNldExvbmdUZXJtU3RvcmFnZShsb25nVGVybSk7XG4gIH0gZWxzZSB7XG4gICAgaW5pdFN0b3JhZ2VXaXRoRGVmYXVsdHMoJ2xvbmdUZXJtJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdG9yYWdlV2l0aERlZmF1bHRzKHR5cGUpIHtcbiAgdHJ5IHtcbiAgICAvLyBjaGVjayBpZiB3ZSBjYW4gd3JpdGUgdG8gc2Vzc2lvbiBzdG9yYWdlICYgbG9jYWxzdG9yYWdlXG4gICAgY29uc3QgdGVzdEtleSA9IGAke1NUT1JFX05BTUV9LnRlc3RgO1xuICAgIGlmICh0eXBlID09PSAnc2Vzc2lvbicgfHwgIXR5cGUpIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRlc3RLZXksICd0ZXN0VmFsdWUnKTtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHRlc3RLZXkpO1xuICAgICAgc2V0U2Vzc2lvblN0b3JhZ2UobmV3IEJyb3dzZXJTdG9yYWdlKHRydWUpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsb25nVGVybScgfHwgIXR5cGUpIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0ZXN0S2V5LCAndGVzdFZhbHVlJyk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGVzdEtleSk7XG4gICAgICBzZXRMb25nVGVybVN0b3JhZ2UobmV3IEJyb3dzZXJTdG9yYWdlKGZhbHNlKSk7XG4gICAgfVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZm9yIG9sZCBzYWZhcmkgaW4gcHJpdmF0ZSBtb2RlLlxuICAgIGlmICh0eXBlID09PSAnc2Vzc2lvbicgfHwgIXR5cGUpIHtcbiAgICAgIHNldFNlc3Npb25TdG9yYWdlKG5ldyBDb29raWVTdG9yYWdlKHRydWUpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsb25nVGVybScgfHwgIXR5cGUpIHtcbiAgICAgIHNldExvbmdUZXJtU3RvcmFnZShuZXcgQ29va2llU3RvcmFnZShmYWxzZSkpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSB0aW1lc3RhbXAgaXMgb2xkZXIgdGhhbiB0aGUgYWxsb3dlZCB0aHJlc2hvbGQuXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVTdGFtcCAtIHRpbWVTdGFtcCBpbiBtaWxsaXNlY29uZHMgZnJvbSBlcG9jaC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB0aHJlc2hvbGQgLSB0aHJlc2hvbGQgb2Ygd2hhdCBjb25zdGl0dXRlcyBhbiBleHBpcmVkIHRpbWVTdGFtcCBpbiBtaWxsaXNlY29uZHMuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gZmFsc2UgaWYgaXQgaGFzbid0IGV4cGlyZWQgeWV0IG9yIGlmIG5vIHRpbWVTdGFtcCB3YXMgZm91bmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0V4cGlyZWQodGltZVN0YW1wLCB0aHJlc2hvbGQpIHtcbiAgaWYgKCF0aW1lU3RhbXApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKSAtIHRpbWVTdGFtcCA+PSB0aHJlc2hvbGQ7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBwYXJzZUp3dCh0b2tlbikge1xuICB0cnkge1xuICAgIHZhciBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xuICAgIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh3aW5kb3cuYXRvYihiYXNlNjQpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHBhcnNpbmcgYWNjZXNzIHRva2VuOiAke3Rva2VufVxuICAgICR7ZX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNKd3RFeHBpcmVkKHRva2VuKSB7XG4gIGNvbnN0IGp3dFBheWxvYWQgPSBwYXJzZUp3dCh0b2tlbik7XG4gIHJldHVybiAxMDAwICogand0UGF5bG9hZC5leHAgPD0gRGF0ZS5ub3coKTsgLy8gand0IGRhdGVzIGFyZSBpbiBzZWNvbmRzIHNpbmNlIGVwb2NoLCBoZW5jZSBcIjEwMDAgKlwiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRKV1Qoand0KSB7XG4gIGlmICghand0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGp3dCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FyY0lkLlVTRVJfSU5GTycpKTsgLy8gZGVmYXVsdCBsb2NhdGlvbiBmcm9tIEBhcmMvc2RrLWlkZW50aXR5XG4gICAgICByZXR1cm4gand0LmFjY2Vzc1Rva2VuO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBqd3Q7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRIb3N0bmFtZUZyb21VUkwodXJsKSB7XG4gIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLmhyZWYgPSB1cmw7XG4gIHJldHVybiBhLmhvc3RuYW1lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==

 }());

(function runPaywall() {
    ArcP.run({
        paywallFunction: function(campaignURL){
            window.location.href = campaignURL;
        },
        // customPageData: () => ({
        //     c: 'story',
        //     s: 'business',
        //     ci: 'https://www.your.domain.com/canonical/url'
        // })
        customPageData: function () {
            return {
                c: 'story',
                s: 'business',
                ci: Date.now()
            };
        },
        customSubCheck: function () {
            return Promise.resolve({
                "s": false,
                "timeTaken": 100,
                "updated": Date.now()
            })
        },
        customRegCheck: function () {
            var start = Date.now();
            var isLoggedIn = window.localStorage.getItem('ArcId.USER_PROFILE') ? true : false;
            return Promise.resolve({
                l: isLoggedIn,
                timeTaken: Date.now() - start
            });
        }

    }).then(results => console.log('Results from running paywall script: ', results))
        .catch(console.error);
}())