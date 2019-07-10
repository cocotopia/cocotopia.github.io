function udm_(e,t){var n="comScore=",r=document,i=r.cookie,s="",o="indexOf",u="substring",a="length",f=2048,l,c="&ns_",h="&",p,d,v,m,g=window,y=g.encodeURIComponent||escape;if(i[o](n)+1)for(v=0,d=i.split(";"),m=d[a];v<m;v++)p=d[v][o](n),p+1&&(s=h+unescape(d[v][u](p+n[a])));e+=c+"_t="+ +(new Date)+c+"c="+(r.characterSet||r.defaultCharset||"")+(g===g.top?"":c+"if=1")+"&cv=3.1&c8="+y(r.title)+s+"&c7="+y(r.URL)+"&c9="+y(r.referrer),e[a]>f&&e[o](h)>0&&(l=e[u](0,f-8).lastIndexOf(h),e=(e[u](0,l)+c+"cut="+y(e[u](l+1)))[u](0,f)),r.images?(p=new Image,g.ns_p||(ns_p=p),typeof t=="function"&&(p.onload=p.onerror=t),p.src=e):r.write("<","p","><",'img src="',e,'" height="1" width="1" alt="*"',"><","/p",">")}typeof _comscore=="undefined"&&(_comscore=[]),function(){var e="length",t=window,n=t.encodeURIComponent?encodeURIComponent:escape,r,i=function(t){if(t){var r,i=[],s,o=0,u,a,f="";for(var l in t){s=typeof t[l];if(s=="string"||s=="number")i[i[e]]=l+"="+n(t[l]),l=="c2"?f=t[l]:l=="c1"&&(o=1)}if(i[e]<=0||f=="")return;a=t.options||{},a.d=a.d||document;if(typeof a.url_append=="string"){u=a.url_append.replace(/&amp;/,"&").split("&");for(var l=0,c=u[e],h;l<c;l++)h=u[l].split("="),h[e]==2&&(i[i[e]]=h[0]+"="+n(h[1]))}r=[a.d.URL.charAt(4)=="s"?"//sb":"//b",".scorecardresearch.com/b?",o?"":"c1=2&",i.join("&").replace(/&$/,"")],udm_(r.join(""))}},s=function(t){t=t||_comscore;for(var n=0,r=t[e];n<r;n++)i(t[n]);t=_comscore=[]};s(),(r=t.COMSCORE)?(r.purge=s,r.beacon=i):COMSCORE={purge:s,beacon:i}}();

!(function() {

  var ArcPWPaused = false;
  var ArcPWRules = [{"e":[true],"pw":"https://elcomercio-gestion-sandbox.cdn.arcpublishing.com/?signwallHard=1","rt":[">",3],"id":202},{"e":[true,"2321321321321312323"],"pw":"https://elcomercio-gestion-sandbox.cdn.arcpublishing.com/?paywallCampain=1","rt":[">",5],"id":203}];
  var ArcPWPublishTimestamp = 1562772390493
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
var _version = "1.23.0-sandbox.2";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4uL3BheXdhbGwtY29yZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9hcnJheS9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL2RhdGUvbm93LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2RhdGUvbm93LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmRhdGUubm93LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdW5mZXRjaC9kaXN0L3VuZmV0Y2gubWpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9mYWN0R2F0aGVyaW5nL2Jyb3dzZXJEYXRhLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9mYWN0R2F0aGVyaW5nL2VudGl0bGVtZW50cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZmFjdEdhdGhlcmluZy9wYWdlRGF0YS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZmFjdEdhdGhlcmluZy9yZWFkQ291bnRzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9mYWN0cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvcGF5d2FsbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvc3RvcmFnZS9icm93c2VyU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvc3RvcmFnZS9jb29raWVTdG9yYWdlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9zdG9yYWdlL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3V0aWxzL2V4cGlyYXRpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3V0aWxzL2p3dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvdXRpbHMvdXJsLmpzIl0sIm5hbWVzIjpbIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwib3duS2V5cyIsIk9iamVjdCIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiZm9yRWFjaCIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsInZhbHVlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImV2YWx1YXRpb25UZWNobmlxdWVzIiwiZXZhbHVhdGVTY2FsYXIiLCJiaW5kIiwiZXZhbHVhdGVNYXRjaCIsInRydWUiLCJldmFsdWF0ZUluIiwiZmFsc2UiLCJMT0dfUFJFRklYIiwiY2hlY2tGb3JGaXJzdE9mTW9udGgiLCJ0aW1lU3RhbXAiLCJ1bmRlZmluZWQiLCJEYXRlIiwibm93IiwidG9kYXkiLCJsYXN0VXBkYXRlZCIsImdldERhdGUiLCJhZGRSZWFkQ291bnQiLCJydWxlSWQiLCJyZWFkQ291bnRzIiwiYyIsImN1cnJlbnRDb3VudEZvcklkIiwiaXNFeGVtcHRUb1J1bGUiLCJydWxlIiwic3ViIiwicmVnIiwiQXJyYXkiLCJpc0FycmF5IiwiZSIsImwiLCJwIiwic29tZSIsInNrdSIsImV2YWx1YXRlIiwibW9kaWZpZXIiLCJjb25kaXRpb25zIiwiZmFjdCIsInJlZ2V4cENyZWF0b3IiLCJjb25kaXRpb24iLCJyZXN1bHQiLCJyZWdleHAiLCJ0ZXN0IiwiaW5kZXhPZiIsImlzTmFOIiwicGFyc2VJbnQiLCJjaGVja0NvbmRpdGlvblBhcmFtcyIsIm1hdGNoZXIiLCJzbGljZSIsImV2YWx1YXRlUnVsZXNldCIsInJ1bGVzZXQiLCJmYWN0cyIsIkVycm9yIiwidHJpZ2dlcmluZ1J1bGVzIiwiZCIsInIiLCJzIiwiY3IiLCJpZCIsInJjIiwicnQiLCJwdXNoIiwidiIsImNpIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJwYXJzZVJlZmVycmVyIiwiRU5WIiwicmVmZXJyZXIiLCJnZXRIb3N0bmFtZUZyb21VUkwiLCJkb2N1bWVudCIsImdldFJlZmVycmVyIiwiZ2V0QXVkaWVuY2UiLCJkYXRhIiwiYSIsInBhcnNlRGV2aWNlQ2xhc3MiLCJ1c2VyQWdlbnQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJpc01vYmlsZVVzZXJBZ2VudCIsImlzVGFibGV0VXNlckFnZW50IiwiZ2V0RGV2aWNlQ2xhc3MiLCJpc1ByaXZhdGVNb2RlIiwiaXNJbmNvZ25pdG8iLCJjaHJvbWUiLCJmcyIsIlJlcXVlc3RGaWxlU3lzdGVtIiwid2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0iLCJURU1QT1JBUlkiLCJIVE1MRWxlbWVudCIsInRlc3RLZXkiLCJTVE9SRV9OQU1FIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImxvY2FsU3RvcmFnZSIsIm9wZW5EYXRhYmFzZSIsIl8iLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNlcnZpY2VXb3JrZXIiLCJQb2ludGVyRXZlbnQiLCJNU1BvaW50ZXJFdmVudCIsImluZGV4ZWREQiIsImdldEJyb3dzZXJEYXRhIiwibG9uZ1Rlcm1EYXRhIiwic2Vzc2lvbkRhdGEiLCJwbSIsImRlZmF1bHRTdWJzY3JpcHRpb25DaGVjayIsIm9wdGlvbnMiLCJqd3QiLCJnZXRKV1QiLCJqd3RFcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiaXNKd3RFeHBpcmVkIiwic3RhcnQiLCJ1cmwiLCJhcGlPcmlnaW4iLCJ0aW1lVGFrZW4iLCJ1cGRhdGVkIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwianNvbiIsImh0dHBTdGF0dXMiLCJjb2RlIiwibWVzc2FnZSIsInNrdXMiLCJtYXAiLCJlbnRpdGxlbWVudCIsImdldFN1YkRhdGEiLCJzdWJDaGVjayIsImN1c3RvbVN1YkNoZWNrIiwic2Vzc2lvblN0b3JlIiwiZ2V0SXRlbSIsInVzZXJOYW1lIiwidXNlclNlc3Npb25EYXRhIiwiZW50aXRsZW1lbnRzIiwiZGVmYXVsdFJlZ2lzdHJhdGlvbkNoZWNrIiwiZ2V0UmVnRGF0YSIsInJlZ0NoZWNrIiwiY3VzdG9tUmVnQ2hlY2siLCJkZWZhdWx0R2V0UGFnZURhdGEiLCJzZWN0aW9uIiwiY29udGVudFR5cGUiLCJjb250ZW50UmVzdHJpY3Rpb24iLCJjb250ZW50SWRlbnRpZmllciIsImNhbm9uaWNhbExpbmtFbCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJnZXRQYWdlRGF0YSIsImN1c3RvbVBhZ2VEYXRhIiwiZ2V0UmVhZENvdW50cyIsImdldEZhY3RzIiwicmVnRGF0YSIsInVzZXJMb25nVGVybURhdGEiLCJuZXdEYXRhIiwibG9uZ1Rlcm1TdG9yZSIsImlzRXhwaXJlZCIsIl9mYWN0cyIsIl9ydWxlcyIsIkFyY1BXUnVsZXMiLCJfdmVyc2lvbiIsIlZFUlNJT04iLCJfcHVibGlzaFRpbWVzdGFtcCIsIkFyY1BXUHVibGlzaFRpbWVzdGFtcCIsInBhdXNlZCIsIkFyY1BXUGF1c2VkIiwiZmV0Y2hFbnRpdGxlbWVudHMiLCJleGVjdXRlUGF5d2FsbCIsInRyaWdnZXJpbmdSdWxlIiwicHciLCJwYXl3YWxsRnVuY3Rpb24iLCJjaGVja0V4ZW1wdGlvbnMiLCJFTlRJVExFTUVOVFNfRkVUQ0hFRCIsImlzRXhlbXB0IiwicmVzZXQiLCJzZXNzaW9uIiwibG9uZ1Rlcm0iLCJpbml0U3RvcmFnZSIsImFsbCIsInJ1biIsImxvbmdUZXJtU3RvcmFnZSIsImFscmVhZHlWaXNpdGVkIiwicGF5d2FsbGluZ1J1bGUiLCJyZXN1bHRzIiwidHJpZ2dlcmVkIiwidmlzaXRlZCIsInJ1bGVDb3VudCIsInByaXZhdGUiLCJyZXN1bHRzQ2FsbGJhY2siLCJwb3N0TWVzc2FnZSIsInR5cGUiLCJBcmNQIiwiSlNPTiIsInBhcnNlIiwiT1BUSU9OUyIsInNldFRpbWVvdXQiLCJCcm93c2VyU3RvcmFnZSIsImlzU2Vzc2lvbiIsInN0b3JlIiwicmVzb2x2ZSIsIkNvb2tpZVN0b3JhZ2UiLCJkb2MiLCJfaGFzIiwicmVnZXhwU3RyIiwiZXNjYXBlIiwicmVwbGFjZSIsInVuZXNjYXBlIiwiY29va2llIiwiUmVnRXhwIiwicmVqZWN0Iiwic2V0U2Vzc2lvblN0b3JhZ2UiLCJzdG9yYWdlIiwic2V0TG9uZ1Rlcm1TdG9yYWdlIiwiaW5pdFN0b3JhZ2VXaXRoRGVmYXVsdHMiLCJ0aHJlc2hvbGQiLCJwYXJzZUp3dCIsInRva2VuIiwiYmFzZTY0VXJsIiwic3BsaXQiLCJiYXNlNjQiLCJhdG9iIiwiZXJyb3IiLCJqd3RQYXlsb2FkIiwiZXhwIiwiYWNjZXNzVG9rZW4iLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImhvc3RuYW1lIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztB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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztB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S0FIRCxDQUdFLGdCQUFNO0FBQ04sYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQVBELE1BT087QUFDTCxXQUFPdEgsR0FBUDtBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDM0JEO0FBQUE7QUFBTyxTQUFTekMsa0JBQVQsQ0FBNEJnRCxHQUE1QixFQUFpQztBQUN0QyxNQUFJM0MsQ0FBQyxHQUFHSixRQUFRLENBQUMrSixhQUFULENBQXVCLEdBQXZCLENBQVI7QUFDQTNKLEdBQUMsQ0FBQzRKLElBQUYsR0FBU2pILEdBQVQ7QUFDQSxTQUFPM0MsQ0FBQyxDQUFDNkosUUFBVDtBQUNELEMiLCJmaWxlIjoiQXJjUC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBldmFsdWF0aW9uVGVjaG5pcXVlcyA9IHtcbiAgJz4nOiBldmFsdWF0ZVNjYWxhci5iaW5kKG51bGwsICc+JyksXG4gICc8JzogZXZhbHVhdGVTY2FsYXIuYmluZChudWxsLCAnPCcpLFxuICAnPSc6IGV2YWx1YXRlU2NhbGFyLmJpbmQobnVsbCwgJz0nKSxcbiAgJyE9JzogZXZhbHVhdGVTY2FsYXIuYmluZChudWxsLCAnIT0nKSxcbiAgJyonOiBldmFsdWF0ZU1hdGNoLmJpbmQobnVsbCwgdHJ1ZSksXG4gICchKic6IGV2YWx1YXRlTWF0Y2guYmluZChudWxsLCBmYWxzZSksXG4gIHRydWU6IGV2YWx1YXRlSW4uYmluZChudWxsLCB0cnVlKSxcbiAgZmFsc2U6IGV2YWx1YXRlSW4uYmluZChudWxsLCBmYWxzZSlcbn07XG52YXIgTE9HX1BSRUZJWCA9ICdbQXJjUF0nO1xuLyoqXG4gKiBDb21wYXJlcyBhIHRpbWV0c2FtcCB0byBzZWUgaWYgaXQgdG9kYXkgaXMgdGhlIGZpcnN0IG9mIHRoZSBtb250aCBidXQgdGhlIHRpbWVzdGFtcCBpc1xuICogZnJvbSBhIGRpZmZlcmVudCBkYXkgKHVzZWQgdG8gZXhwaXJlIHRoaW5ncyB3aGVuIHRoZSBuZXcgbW9udGggcm9sbHMgaW4pXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGFtcCAtIHRpbWVTdGFtcCBpbiBtaWxsaXNlY29uZHMgZnJvbSBlcG9jaC5cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufSAtIHRydWUgaWYgaXQgc2hvdWxkIGJlIGNsZWFyZWQgZmFsc2UgaWYgbm90LlxuICovXG5cbmZ1bmN0aW9uIGNoZWNrRm9yRmlyc3RPZk1vbnRoKCkge1xuICB2YXIgdGltZVN0YW1wID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBEYXRlLm5vdygpO1xuICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICB2YXIgbGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZSh0aW1lU3RhbXApO1xuICByZXR1cm4gdG9kYXkuZ2V0RGF0ZSgpID09PSAxICYmIGxhc3RVcGRhdGVkLmdldERhdGUoKSAhPT0gMTtcbn1cbi8qKlxuICogQWRkcyBhIHJlYWQgY291bnQgdG8gdGhlIGFwcHJvcHJpYXRlIHBsYWNlcyBiYXNlZCBvbiB0aGUgcGFyYW1ldGVycyBwYXNzZWQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHJ1bGVJZCwgSWQgb2YgdGhlIHJ1bGUgd2hpY2ggdGhlIHJlYWQgY291bnQgc2hvdWxkIGJlIGFkZGVkIHRvXG4gKiBAcGFyYW0ge09iamVjdH0gcmVhZENvdW50cyAtIEFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHByZXZpb3VzIHJlYWRjb3VudCBkYXRhIChmcm9tIGxvbmctdGVybSBzdG9yYWdlfVxuICovXG5cblxuZnVuY3Rpb24gYWRkUmVhZENvdW50KHJ1bGVJZCwgcmVhZENvdW50cykge1xuICBpZiAoIXJlYWRDb3VudHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZWFkQ291bnRzID0gY2hlY2tGb3JGaXJzdE9mTW9udGgocmVhZENvdW50cy5sYXN0VXBkYXRlZCkgPyB7XG4gICAgYzoge31cbiAgfSA6IHJlYWRDb3VudHM7XG4gIHZhciBjdXJyZW50Q291bnRGb3JJZCA9IHJlYWRDb3VudHMuY1tydWxlSWRdIHx8IDA7XG4gIHJlYWRDb3VudHMuY1tydWxlSWRdID0gY3VycmVudENvdW50Rm9ySWQgKyAxO1xuICByZWFkQ291bnRzLmxhc3RVcGRhdGVkID0gRGF0ZS5ub3coKTtcbiAgcmV0dXJuIHJlYWRDb3VudHM7XG59XG4vKipcbiAqIENoZWNrcyBpZiBhIHJlYWRlciBpcyBleGVtcHQgdG8gYSBjZXJ0YWluIHJ1bGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcnVsZVxuICogQHBhcmFtIHtvYmplY3R9IFtzdWI9e31dXG4gKiBAcGFyYW0ge29iamVjdH0gW3JlZz17fV1cbiAqIEByZXR1cm5zIHtib29sZWFufSAtIHRydWUgaWYgcmVhZGVyIGlzIGV4ZW1wdCB0byB0aGlzIHJ1bGU7IGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGlzRXhlbXB0VG9SdWxlKHJ1bGUpIHtcbiAgdmFyIHN1YiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciByZWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHJ1bGUuZSkgJiYgcnVsZS5lLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiAhIXJlZy5sO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHN1Yi5wKSAmJiBzdWIucC5zb21lKGZ1bmN0aW9uIChza3UpIHtcbiAgICAgIHJldHVybiBldmFsdWF0ZShydWxlLmUsIHNrdSk7XG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRXZhbHVhdGVzIHdoZXRoZXIgdGhlIGZhY3QgbWF0Y2hlcyAob3Igbm90LCBiYXNlZCBvbiB0aGUgbW9kaWZpZXIpIGFueSBvZiB0aGUgY29uZGl0aW9ucyBpbiB0aGUgY29uZGl0aW9ucyBhcnJheS5cbiAqIElmIGEgbWF0Y2hlciBpcyBub3QgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSBkbyBhbiBpbmRleE9mIHdpdGggZWFjaCBjb25kaXRpb24gYWdhaW5zdCB0aGUgZmFjdC5cbiAqIGkuZSBgKGNvbmRpdGlvbi5pbmRleE9mKGZhY3QpID49IDApYFxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gbW9kaWZpZXJcbiAqIEBwYXJhbSB7QXJyYXl9IGNvbmRpdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBmYWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSByZWdleHBDcmVhdG9yIC0gVGhpcyBmdW5jdGlvbiBzaG91bGQgdGFrZSBvbmUgYXJndW1lbnQgYW5kIHJldHVybiBhIFJlZ0V4cCBvYmplY3QuIERlZmF1bHRzIHRvIC9mYWN0L1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBmYWN0IG1hdGNoZXMgKG9yIG5vdCwgYmFzZWQgb24gbW9kaWZpZXIgYmVpbmcgZmFsc2UpIGFueSBvZiB0aGUgY29uZGl0aW9ucyBwYXNzZWQgaW4uXG4gKi9cblxuXG5mdW5jdGlvbiBldmFsdWF0ZU1hdGNoKG1vZGlmaWVyLCBjb25kaXRpb25zLCBmYWN0LCByZWdleHBDcmVhdG9yKSB7XG4gIHJldHVybiBjb25kaXRpb25zLnNvbWUoZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgIGlmICh0eXBlb2YgcmVnZXhwQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlZ2V4cCA9IHJlZ2V4cENyZWF0b3IoY29uZGl0aW9uKTtcbiAgICAgIHJlc3VsdCA9IHJlZ2V4cC50ZXN0KGZhY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBjb25kaXRpb24uaW5kZXhPZihmYWN0KSA+PSAwO1xuICAgIH1cblxuICAgIHJldHVybiAhIShyZXN1bHQgXiAhbW9kaWZpZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXZhbHVhdGVJbihtb2RpZmllciwgY29uZGl0aW9ucywgZmFjdCkge1xuICByZXR1cm4gISEoY29uZGl0aW9ucy5pbmRleE9mKGZhY3QpID49IDAgXiAhbW9kaWZpZXIpO1xufVxuLyoqXG4gKiBFdmFsdWF0ZXMgc2NhbGFyIHZhbHVlcyBiYXNlZCBvbiBhIG1vZGlmaWVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RpZmllciAtIGNhbiBiZSAnPCcsICc+JywgJz0nIG9yICchPSdcbiAqIEBwYXJhbSB7QXJyYXl9IGNvbmRpdGlvbnMgLSBhbiBhcnJheSB3aXRoIGl0cyBmaXJzdCBlbGVtZW50IGFzIGEgbnVtYmVyXG4gKiBAcGFyYW0ge3N0cmluZ30gZmFjdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBjb25kaXRpb24gaXMgcGFzc2VkLlxuICovXG5cblxuZnVuY3Rpb24gZXZhbHVhdGVTY2FsYXIobW9kaWZpZXIsIGNvbmRpdGlvbnMsIGZhY3QpIHtcbiAgdmFyIGNvbmRpdGlvbiA9IGNvbmRpdGlvbnNbMF07XG5cbiAgaWYgKCFpc05hTihwYXJzZUludChjb25kaXRpb24pKSkge1xuICAgIHN3aXRjaCAobW9kaWZpZXIpIHtcbiAgICAgIGNhc2UgJz4nOlxuICAgICAgICByZXR1cm4gZmFjdCA+IGNvbmRpdGlvbnNbMF07XG5cbiAgICAgIGNhc2UgJzwnOlxuICAgICAgICByZXR1cm4gZmFjdCA8IGNvbmRpdGlvbnNbMF07XG5cbiAgICAgIGNhc2UgJz0nOlxuICAgICAgICByZXR1cm4gY29uZGl0aW9uc1swXSA9PT0gZmFjdDtcblxuICAgICAgY2FzZSAnIT0nOlxuICAgICAgICByZXR1cm4gY29uZGl0aW9uc1swXSAhPSBmYWN0O1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vIHNob3VsZG4ndCBoYXBwZW4sIGJ1dCBqdXN0IGluIGNhc2UhXG4gICAgfVxuICB9XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBib3RoIHRoZSBgY29uZGl0aW9uYCBhbmQgYGZhY3RgIGFyZSB2YWxpZC4gRm9yIHRoZSBgY29uZGl0aW9uYCB0byBiZSB2YWxpZFxuICogaXQgbmVlZHMgdG8gYmUgYW4gYEFycmF5YCBvZiBhdCBsZWFzdCAyIGVsZW1lbnRzIHdpdGggdGhlIGZpcnN0IG9uZSBiZWluZyBvZiB0eXBlIGJvb2xlYW4uXG4gKlxuICogRm9yIHRoZSBgZmFjdGAgdG8gYmUgdmFsaWQgaXQgbmVlZHMgdG8gYmUgYSBub24tZW1wdHkgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNvbmRpdGlvbiAtIGUuZy4gW3RydWUsICdmaW5hbmNlJywgJ2J1c2luZXNzJ10gb3IgW2ZhbHNlLCAnOC44LjguOCddKVxuICogQHBhcmFtIHtzdHJpbmd9IGZhY3QgLSBpLmUuIG5vbi1lbXB0eSBmYWN0IGJlaW5nIGNoZWNrZWQgYWdhaW5zdCB0aGUgY29uZGl0aW9uc1xuICogQHJldHVybnMge2Jvb2xlYW59IC0tIHRydWUgaWYgdGhlIGNvbmRpdGlvbnMgJiBmYWN0IGFyZSB2YWxpZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5cblxuZnVuY3Rpb24gY2hlY2tDb25kaXRpb25QYXJhbXMoY29uZGl0aW9uLCBmYWN0KSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShjb25kaXRpb24pIHx8IGNvbmRpdGlvblswXSA9PSBudWxsIHx8IC8vIGludGVudGlvbmFsIHR5cGUgY29lcnNpb25cbiAgdHlwZW9mIGNvbmRpdGlvblswXSAhPT0gJ2Jvb2xlYW4nICYmICEvXj58PHw9fCE9fFxcKnwhXFwqJC8udGVzdChjb25kaXRpb25bMF0pIHx8IGNvbmRpdGlvbi5sZW5ndGggPCAyIHx8IGZhY3QgPT09IG51bGwgfHwgZmFjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIENoZWNrcyB0aGF0IGEgYGNvbmRpdGlvbmAgcmVwcmVzZW50ZWQgYnkgYW4gYXJyYXkgc3RhcnRpbmcgdy8gYSBib29sZWFuIChlLmcuIFt0cnVlLCAnZmluYW5jZSwgJ2J1c2luZXNzJ10pIGlzXG4gKiBzYXRpc2ZpZWQgYnkgYSBgZmFjdGAgcmVwcmVzZW50ZWQgYnkgYSBzdHJpbmcuIElmIHRoZSBmaXJzdCBlbGVtZW50IGluIGBjb25kaXRpb25gIGlzIHRydWUsIHRoZW4gaXRcbiAqIHdpbGwgcmV0dXJuIHRydWUgaWYgYGZhY3RgIGlzIGluIHRoZSBgY29uZGl0aW9uYCBhcnJheS4gIElmIHRoZSBmaXJzdCBlbGVtZW50IGluIGBjb25kaXRpb25gIGlzIGZhbHNlLFxuICogaXQgd2lsbCByZXR1cm4gdHJ1ZSBpZiBgZmFjdGAgaXMgTk9UIGluIHRoZSBgY29uZGl0aW9uYCBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjb25kaXRpb25zIC0gZS5nLiBbdHJ1ZSwgJ2ZpbmFuY2UnLCAnYnVzaW5lc3MnXSBvciBbZmFsc2UsICc4LjguOC44J10pXG4gKiBAcGFyYW0ge3N0cmluZ30gZmFjdCAtIGkuZS4gbm9uLWVtcHR5IGZhY3QgYmVpbmcgY2hlY2tlZCBhZ2FpbnN0IHRoZSBjb25kaXRpb25zXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBtYXRjaGVyIC0gYSBmdW5jdGlvbiB0byBydW4gYXMgYSBwcmVkaWNhdGUgb24gZXZlcnkgZWxlbWVudCBpbiB0aGUgY29uZGl0aW9ucyBhcnJheVxuICogQHJldHVybnMge2Jvb2xlYW59IC0gdHJ1ZSBpZiB0aGUgY29uZGl0aW9uIG1hdGNoZXMsIGZhbHNlIGlmIGl0IGRvZXNuJ3RcbiAqL1xuXG5cbmZ1bmN0aW9uIGV2YWx1YXRlKGNvbmRpdGlvbnMsIGZhY3QsIG1hdGNoZXIpIHtcbiAgaWYgKCFjaGVja0NvbmRpdGlvblBhcmFtcyhjb25kaXRpb25zLCBmYWN0KSkge1xuICAgIHJldHVybiB0cnVlOyAvLyBpZiB0aGluZ3MgYXJlIG1pc3NpbmcganVzdCBkZWZhdWx0IHRvIHRydWVcbiAgfVxuXG4gIHZhciBtb2RpZmllciA9IGNvbmRpdGlvbnNbMF07XG4gIHZhciByZXN1bHQgPSBldmFsdWF0aW9uVGVjaG5pcXVlc1ttb2RpZmllcl0oY29uZGl0aW9ucy5zbGljZSgxKSwgZmFjdCwgbWF0Y2hlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIEdpdmVuIGEgcnVsZXNldCBhbmQgYSBmYWN0cyBvYmplY3QsIGl0IGRldGVybWluZXMgd2hldGhlciB0byBjYWxsIHRoZSBwYXl3YWxsQ2FsbGJhY2sgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHJ1bGVzZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmYWN0c1xuICovXG5cblxuZnVuY3Rpb24gZXZhbHVhdGVSdWxlc2V0KHJ1bGVzZXQsIGZhY3RzKSB7XG4gIGlmICghcnVsZXNldCB8fCAhZmFjdHMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQoTE9HX1BSRUZJWCwgXCIgTWlzc2luZyBydWxlc2V0LCBmYWN0cyBvciBjYWxsYmFjayBwYXJhbWV0ZXIgaW4gZXZhbHVhdGVSdWxlc2V0XFxuICAgICAgICAgIHJ1bGVzZXQ6IFwiKS5jb25jYXQocnVsZXNldCwgXCJcXG4gICAgICAgICAgZmFjdHM6IFwiKS5jb25jYXQoZmFjdHMpKTtcbiAgfVxuXG4gIHZhciB0cmlnZ2VyaW5nUnVsZXMgPSBbXTtcbiAgQXJyYXkuaXNBcnJheShydWxlc2V0KSAmJiBydWxlc2V0LmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICB2YXIgc3ViID0gZmFjdHMuc3ViIHx8IHt9O1xuICAgIHZhciByZWcgPSBmYWN0cy5yZWcgfHwge307XG5cbiAgICBpZiAoZXZhbHVhdGUocnVsZS5jLCBmYWN0cy5jKSAmJiBldmFsdWF0ZShydWxlLmQsIGZhY3RzLmQpICYmIGV2YWx1YXRlKHJ1bGUuciwgZmFjdHMucikgJiYgZXZhbHVhdGUocnVsZS5zLCBmYWN0cy5zKSAmJiBldmFsdWF0ZShydWxlLmNyLCBmYWN0cy5jcikgJiYgIWlzRXhlbXB0VG9SdWxlKHJ1bGUsIHN1YiwgcmVnKSkge1xuICAgICAgYWRkUmVhZENvdW50KHJ1bGUuaWQsIGZhY3RzLnJjKTtcblxuICAgICAgaWYgKGV2YWx1YXRlKHJ1bGUucnQsIGZhY3RzLnJjLmNbcnVsZS5pZF0gfHwgMCkpIHtcbiAgICAgICAgdHJpZ2dlcmluZ1J1bGVzLnB1c2goe1xuICAgICAgICAgIGlkOiBydWxlLmlkLFxuICAgICAgICAgIHJjOiBmYWN0cy5yYy5jW3J1bGUuaWRdLFxuICAgICAgICAgIHJ1bGU6IF9vYmplY3RTcHJlYWQoe30sIHJ1bGUpXG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBzdG9yZSB0aGUgdmlzaXRcblxuXG4gICAgICBpZiAoIWZhY3RzLnYgfHwgIUFycmF5LmlzQXJyYXkoZmFjdHMudi5jaSkpIHtcbiAgICAgICAgZmFjdHMudiA9IGZhY3RzLnYgfHwge1xuICAgICAgICAgIGNpOiBbXVxuICAgICAgICB9O1xuICAgICAgICBmYWN0cy52LmNpID0gZmFjdHMudi5jaSB8fCBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZhY3RzLnYuY2kuaW5kZXhPZihmYWN0cy5jaSkgPCAwKSB7XG4gICAgICAgIGZhY3RzLnYuY2kucHVzaChmYWN0cy5jaSk7XG4gICAgICAgIGZhY3RzLnYubGFzdFVwZGF0ZWQgPSBEYXRlLm5vdygpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNFeGVtcHRUb1J1bGUocnVsZSwgc3ViLCByZWcpKSB7XG4gICAgICAvLyBjbGVhciBjb3VudHMgaWYgdGhpcyByZWFkZXIgaGFzIGFuIGV4ZW1wdGlvbiB0byB0aGlzIHJ1bGUuXG4gICAgICBkZWxldGUgZmFjdHMucmMuY1tydWxlLmlkXTtcbiAgICAgIGZhY3RzLnJjLmxhc3RVcGRhdGVkID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdHJpZ2dlcmluZ1J1bGVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZXZhbHVhdGVSdWxlc2V0OiBldmFsdWF0ZVJ1bGVzZXQsXG4gIGV2YWx1YXRlOiBldmFsdWF0ZSxcbiAgY2hlY2tDb25kaXRpb25QYXJhbXM6IGNoZWNrQ29uZGl0aW9uUGFyYW1zLFxuICBjaGVja0ZvckZpcnN0T2ZNb250aDogY2hlY2tGb3JGaXJzdE9mTW9udGgsXG4gIGlzRXhlbXB0VG9SdWxlOiBpc0V4ZW1wdFRvUnVsZVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3JjL3BheXdhbGwuanMnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9pcy1hcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZGF0ZS9ub3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpOyIsInZhciBfUHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3Byb21pc2VcIik7XG5cbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBfUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgX1Byb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwidmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcblxuICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsInZhciBfT2JqZWN0JGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO1xuXG52YXIgX09iamVjdCRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzXCIpO1xuXG52YXIgX09iamVjdCRrZXlzID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2tleXNcIik7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgdmFyIG93bktleXMgPSBfT2JqZWN0JGtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgX09iamVjdCRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChfT2JqZWN0JGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiICYmIHNlbGYpO1xufSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgJiYgc2VsZik7XG4gIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5pc0FycmF5O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuZGF0ZS5ub3cnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkRhdGUubm93O1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJyk7XG52YXIgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHsgc3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeSB9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS50cnknKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjcnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYgaGFzKGV4cG9ydHMsIGtleSkpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgaWYgKHNhZmUgJiYgdGFyZ2V0W2tleV0pIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3I7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgfHwgJyc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0ID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuIiwiLy8gMjIuMS4yLjIgLyAxNS40LjMuMiBBcnJheS5pc0FycmF5KGFyZylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnQXJyYXknLCB7IGlzQXJyYXk6IHJlcXVpcmUoJy4vX2lzLWFycmF5JykgfSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiLy8gMjAuMy4zLjEgLyAxNS45LjQuNCBEYXRlLm5vdygpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ0RhdGUnLCB7IG5vdzogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH0gfSk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpXG4gICAgICAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2VcbiAgICAgIC8vIHY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgICAgLy8gd2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICAgICYmIHY4LmluZGV4T2YoJzYuNicpICE9PSAwXG4gICAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLWZpbmFsbHlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdQcm9taXNlJywgeyAnZmluYWxseSc6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKTtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgfSA6IG9uRmluYWxseSxcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHlcbiAgKTtcbn0gfSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG4iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSxuKXtyZXR1cm4gbj1ufHx7fSxuZXcgUHJvbWlzZShmdW5jdGlvbih0LHIpe3ZhciBzPW5ldyBYTUxIdHRwUmVxdWVzdDtmb3IodmFyIG8gaW4gcy5vcGVuKG4ubWV0aG9kfHxcImdldFwiLGUsITApLG4uaGVhZGVycylzLnNldFJlcXVlc3RIZWFkZXIobyxuLmhlYWRlcnNbb10pO2Z1bmN0aW9uIHUoKXt2YXIgZSxuPVtdLHQ9W10scj17fTtyZXR1cm4gcy5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5yZXBsYWNlKC9eKC4qPyk6W15cXFNcXG5dKihbXFxzXFxTXSo/KSQvZ20sZnVuY3Rpb24ocyxvLHUpe24ucHVzaChvPW8udG9Mb3dlckNhc2UoKSksdC5wdXNoKFtvLHVdKSxyW29dPShlPXJbb10pP2UrXCIsXCIrdTp1fSkse29rOjI9PShzLnN0YXR1cy8xMDB8MCksc3RhdHVzOnMuc3RhdHVzLHN0YXR1c1RleHQ6cy5zdGF0dXNUZXh0LHVybDpzLnJlc3BvbnNlVVJMLGNsb25lOnUsdGV4dDpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUocy5yZXNwb25zZVRleHQpfSxqc29uOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzLnJlc3BvbnNlVGV4dCkudGhlbihKU09OLnBhcnNlKX0sYmxvYjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3MucmVzcG9uc2VdKSl9LGhlYWRlcnM6e2tleXM6ZnVuY3Rpb24oKXtyZXR1cm4gbn0sZW50cmllczpmdW5jdGlvbigpe3JldHVybiB0fSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHJbZS50b0xvd2VyQ2FzZSgpXX0saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKClpbiByfX19fXMud2l0aENyZWRlbnRpYWxzPVwiaW5jbHVkZVwiPT1uLmNyZWRlbnRpYWxzLHMub25sb2FkPWZ1bmN0aW9uKCl7dCh1KCkpfSxzLm9uZXJyb3I9cixzLnNlbmQobi5ib2R5fHxudWxsKX0pfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuZmV0Y2gubWpzLm1hcFxuIiwiaW1wb3J0IHsgZ2V0SG9zdG5hbWVGcm9tVVJMIH0gZnJvbSAnLi4vdXRpbHMvdXJsJztcblxuZnVuY3Rpb24gcGFyc2VSZWZlcnJlcigpIHtcbiAgaWYgKEVOVi50ZXN0KSB7XG4gICAgcmV0dXJuICd0ZXN0JztcbiAgfVxuXG4gIGNvbnN0IHJlZmVycmVyID0gZ2V0SG9zdG5hbWVGcm9tVVJMKGRvY3VtZW50LnJlZmVycmVyKTtcblxuICAvLyBGb3Igbm93IGp1c3QgY2hlY2sgZm9yIGdvb2dsZSwgZmFjZWJvb2ssIHR3aXR0ZXIuIE90aGVyd2lzZSBzYXZlIHRoZSBob3N0bmFtZVxuICBpZiAoL2ZhY2Vib29rXFwuY29tJC8udGVzdChyZWZlcnJlcikpIHtcbiAgICByZXR1cm4gJ2ZhY2Vib29rJztcbiAgfSBlbHNlIGlmICgvdHdpdHRlclxcLmNvbSQvLnRlc3QocmVmZXJyZXIpKSB7XG4gICAgcmV0dXJuICd0d2l0dGVyJztcbiAgfSBlbHNlIGlmICgvZ29vZ2xlXFwuY28obXxcXC5bYS16XXsyfSkkLy50ZXN0KHJlZmVycmVyKSkge1xuICAgIHJldHVybiAnZ29vZ2xlJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVmZXJyZXI7IC8vIHRoaXMgbWF5IG5lZWQgc29tZSBhZGRpdGlvbmFsIHBhcnNpbmcuXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmVmZXJyZXIoKSB7XG4gIHJldHVybiBwYXJzZVJlZmVycmVyKCk7XG59XG5cbi8vIFRPRE86ICdhdWRpZW5jZScgaXMgYSBiaXQgbXVya3kgd2hlbiBpdCBjb21lcyB0byByZXF1aXJlbWVudHMuIExpa2VseSwgaG93ZXZlcixcbi8vIHRoZXJlIHdpbGwgYmUgc29tZSBpbnNwZWN0aW9uIG9mIGNvb2tpZXMgZm9yIGF1ZGllbmNlIHNlZ21lbnRhdGlvbiBpbmZvcm1hdGlvbi5cbi8vIHRoaXMgaXMganVzdCBhIHN0dWIuLi5cbmZ1bmN0aW9uIGdldEF1ZGllbmNlKGRhdGEgPSB7fSkge1xuICByZXR1cm4gZGF0YS5hIHx8ICdzb21ldGhpbmcgc3BlY2lhbCc7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGV2aWNlQ2xhc3ModXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpIHtcbiAgY29uc3QgaXNNb2JpbGVVc2VyQWdlbnQgPSAvbW9iaS9pLnRlc3QodXNlckFnZW50KTtcbiAgY29uc3QgaXNUYWJsZXRVc2VyQWdlbnQgPSAvKHRhYmxldHxpcGFkfHBsYXlib29rfHNpbGspfChhbmRyb2lkKD8hLiptb2JpbGUpKS9pLnRlc3QodXNlckFnZW50KTtcblxuICBpZiAoaXNNb2JpbGVVc2VyQWdlbnQgJiYgIWlzVGFibGV0VXNlckFnZW50KSB7XG4gICAgcmV0dXJuICdtb2JpbGUnO1xuICB9IGVsc2UgaWYgKGlzVGFibGV0VXNlckFnZW50KSB7XG4gICAgcmV0dXJuICd0YWJsZXQnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnZGVza3RvcCc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGV2aWNlQ2xhc3MoZGF0YSA9IHt9KSB7XG4gIHJldHVybiBkYXRhLmQgfHwgcGFyc2VEZXZpY2VDbGFzcygpO1xufVxuXG5mdW5jdGlvbiBpc1ByaXZhdGVNb2RlKCkge1xuICBsZXQgaXNJbmNvZ25pdG8gPSBmYWxzZTtcblxuICBpZiAod2luZG93LmNocm9tZSkge1xuICAgIC8vIGlzIGNocm9taXVtIGZsYXZvcmVkXG4gICAgY29uc3QgZnMgPSB3aW5kb3cuUmVxdWVzdEZpbGVTeXN0ZW0gfHwgd2luZG93LndlYmtpdFJlcXVlc3RGaWxlU3lzdGVtO1xuICAgIGlmIChmcykge1xuICAgICAgZnMoXG4gICAgICAgIHdpbmRvdy5URU1QT1JBUlksXG4gICAgICAgIDEwMCxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlzSW5jb2duaXRvID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpc0luY29nbml0byA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2UgaWYgKC9jb25zdHJ1Y3Rvci9pLnRlc3Qod2luZG93LkhUTUxFbGVtZW50KSkge1xuICAgIC8vIFNhZmFyaVxuICAgIHRyeSB7XG4gICAgICAvLyBjaGVjayBpZiB3ZSBjYW4gd3JpdGUgdG8gc2Vzc2lvbiBzdG9yYWdlICYgbG9jYWxzdG9yYWdlXG4gICAgICBjb25zdCB0ZXN0S2V5ID0gYCR7U1RPUkVfTkFNRX0udGVzdGA7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0ZXN0S2V5LCAndGVzdFZhbHVlJyk7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0S2V5KTtcblxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRlc3RLZXksICd0ZXN0VmFsdWUnKTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0S2V5KTtcblxuICAgICAgd2luZG93Lm9wZW5EYXRhYmFzZShudWxsLCBudWxsLCBudWxsLCBudWxsKTtcbiAgICAgIGlzSW5jb2duaXRvID0gZmFsc2U7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgaXNJbmNvZ25pdG8gPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmICgnTW96QXBwZWFyYW5jZScgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlKSB7XG4gICAgLy8gTW96aWxsYVxuICAgIGlzSW5jb2duaXRvID0gIW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQgfHwgd2luZG93Lk1TUG9pbnRlckV2ZW50KSB7XG4gICAgLy8gSUUxMCArIEVkZ2VcbiAgICBpc0luY29nbml0byA9ICF3aW5kb3cuaW5kZXhlZERCO1xuICB9XG5cbiAgcmV0dXJuIGlzSW5jb2duaXRvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJvd3NlckRhdGEobG9uZ1Rlcm1EYXRhLCBzZXNzaW9uRGF0YSkge1xuICAvLyBUT0RPOiAgQXVkaWVuY2UgbWF5IGJlIGJhc2VkIG9uIHJlZmVycmVyIGJ1dCBhbHNvIG9uIGEgY29va2llXG4gIC8vIHRoYXQgaXMgc2V0IGJ5IGFuIGFuYWx5dGljcyBwYWNrYWdlIG9yIHNvbWUgb3RoZXIgdmFsdWUgdG8gZGV0ZXJtaW5lXG4gIC8vIGF1ZGllbmNlIHNlZ21lbnRhdGlvbiAocGVyaGFwcyBkYXJ3aW4gZGF0YT8pLi4uIGZvciBub3cgSSdtIG9ubHkgZ29pbmdcbiAgLy8gd2l0aCByZWZlcnJlciwgYnV0IGNhbGxpbmcgaXQgYXVkaWVuY2UuXG5cbiAgcmV0dXJuIHtcbiAgICBkOiBnZXREZXZpY2VDbGFzcyhsb25nVGVybURhdGEpLFxuICAgIHI6IGdldFJlZmVycmVyKHNlc3Npb25EYXRhKSxcbiAgICBwbTogaXNQcml2YXRlTW9kZSgpXG4gIH07XG59XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAndW5mZXRjaCc7XG5pbXBvcnQgeyBzZXNzaW9uU3RvcmUgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UnO1xuaW1wb3J0IHsgaXNKd3RFeHBpcmVkLCBnZXRKV1QgfSBmcm9tICcuLi91dGlscy9qd3QnO1xuXG4vKipcbiAqIFJ1bnMgdGhlIGRlZmF1bHQgc3Vic2NyaXB0aW9ucyBjaGVjayAoaS5lLiBxdWVyaWVzIC9zYWxlcy9wdWJsaWMvdjEvZW50aXRsZW1lbnRzKVxuICogSWYgb3B0aW9ucy5qd3QgaXMgbm90IGZvdW5kLCBpdCB3aWxsIGdldCB0aGUgand0IGZyb20gbG9jYWxTdG9yYWdlWydBcmNJZC5VU0VSX0lORk8nXSB3aGljaCBpcyB0aGUgZGVmYXVsdC5cbiAqIEl0IGlzIGN1cnJlbnRseSBhc3N1bWVkIHRoYXQgeW91IGFyZSBwYXNzaW5nIGEgdmFsaWQgSldUIGlmIHVzaW5nIG9wdGlvbnMuSldUIChmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkpLlxuICogSW4gdGhlIGZ1dHVyZSB0aGUgSldUIHdpbGwgYWxzbyBiZSBjaGVja2VkIGZvciBleHBpcmF0aW9uXG4gKlxuICogSWYgbm8gSldUIGlzIGZvdW5kLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59IEFuIG9iamVjdCB3aXRoIHRoZSBkYXRhIGZldGNoZWQgZnJvbSB0aGUgc2FsZXMgZW5kcG9pbnQgc2VydmljZSBhbmQgYSB0aW1lc3RhbXAuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWZhdWx0U3Vic2NyaXB0aW9uQ2hlY2sob3B0aW9ucyA9IHt9KSB7XG4gIGxldCBqd3QgPSBnZXRKV1Qob3B0aW9ucy5qd3QpO1xuXG4gIGxldCBqd3RFcnJvciA9IGZhbHNlO1xuICBpZiAoIWp3dCAmJiAhb3B0aW9ucy5qd3QpIHtcbiAgICBjb25zb2xlLndhcm4oYCR7TE9HX1BSRUZJWH0gTm8gSldUIGZvdW5kLCBkZWZhdWx0IGVudGl0bGVtZW50IGNoZWNrIGNhbm5vdCBwcm9jZWVkLmApO1xuICAgIGp3dEVycm9yID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0p3dEV4cGlyZWQoand0KSAmJiAhb3B0aW9ucy5qd3QpIHtcbiAgICBjb25zb2xlLndhcm4oYCR7TE9HX1BSRUZJWH0gSldUIHRva2VuIGV4cGlyZWQsIGRlZmF1bHQgZW50aXRsZW1lbnQgY2hlY2sgY2Fubm90IHByb2NlZWQuYCk7XG4gICAgand0RXJyb3IgPSB0cnVlO1xuICB9XG4gIGlmIChqd3RFcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBwOiBbXVxuICAgIH07XG4gIH1cblxuICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gIGNvbnN0IHVybCA9IGAke1xuICAgIG9wdGlvbnMuYXBpT3JpZ2luID8gYGh0dHBzOi8vJHtvcHRpb25zLmFwaU9yaWdpbn1gIDogJydcbiAgfS9zYWxlcy9wdWJsaWMvdjEvZW50aXRsZW1lbnRzYDtcblxuICBpZiAoRU5WLnRlc3QgfHwgRU5WLmRldikge1xuICAgIHJldHVybiB7XG4gICAgICBwOiBbJ2RpZ2l0YWxpbnRyb3cnXSxcbiAgICAgIHRpbWVUYWtlbjogMCxcbiAgICAgIHVwZGF0ZWQ6IERhdGUubm93KClcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7and0fWAsXG4gICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1zdG9yZSdcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYgKGpzb24uaHR0cFN0YXR1cykge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHtMT0dfUFJFRklYfSAke2pzb24uY29kZSB8fCAnJ30gJHtqc29uLm1lc3NhZ2UgfHwgJyd9YCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHA6IChqc29uICYmIEFycmF5LmlzQXJyYXkoanNvbi5za3VzKSAmJiBqc29uLnNrdXMubWFwKGVudGl0bGVtZW50ID0+IGVudGl0bGVtZW50LnNrdSkpIHx8IFtdLFxuICAgIHRpbWVUYWtlbjogRGF0ZS5ub3coKSAtIHN0YXJ0LFxuICAgIHVwZGF0ZWQ6IERhdGUubm93KClcbiAgfTtcbn1cblxuLyoqXG4gKiBpZiBvcHRpb25zLmN1c3RvbVN1YkNoZWNrIGlzIGRlZmluZWQsIHdpbGwgdXNlIHRoYXQgdG8gZmV0Y2ggZW50aXRsZW1lbnQgZGF0YVxuICogZWxzZSwgd2lsbCB1c2Ugb3VyIGRlZmF1bHQgZW50aXRsZW1lbnQgc2VydmljZS4gIFRoaXMgbWV0aG9kIHdpbGwgdXBkYXRlIHNlc3Npb25TdG9yYWdlLlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdWJEYXRhKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBzdWJDaGVjayA9XG4gICAgdHlwZW9mIG9wdGlvbnMuY3VzdG9tU3ViQ2hlY2sgPT09ICdmdW5jdGlvbidcbiAgICAgID8gb3B0aW9ucy5jdXN0b21TdWJDaGVja1xuICAgICAgOiBkZWZhdWx0U3Vic2NyaXB0aW9uQ2hlY2s7XG5cbiAgY29uc3Qgc2Vzc2lvbkRhdGEgPSAoYXdhaXQgc2Vzc2lvblN0b3JlLmdldEl0ZW0oU1RPUkVfTkFNRSkpIHx8IHt9O1xuICBjb25zdCB1c2VyTmFtZSA9IG9wdGlvbnMudXNlck5hbWUgfHwgJ2Fub255bW91cyc7XG4gIGNvbnN0IHVzZXJTZXNzaW9uRGF0YSA9IHNlc3Npb25EYXRhW3VzZXJOYW1lXSB8fCB7fTtcbiAgY29uc3QgZW50aXRsZW1lbnRzID0gYXdhaXQgc3ViQ2hlY2sob3B0aW9ucyk7XG5cbiAgYXdhaXQgc2Vzc2lvblN0b3JlLnNldEl0ZW0oU1RPUkVfTkFNRSwge1xuICAgIC4uLnNlc3Npb25EYXRhLFxuICAgIFt1c2VyTmFtZV06IHtcbiAgICAgIC4uLnVzZXJTZXNzaW9uRGF0YSxcbiAgICAgIHN1YjogZW50aXRsZW1lbnRzXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZW50aXRsZW1lbnRzO1xufVxuXG4vKipcbiAqIERlZmF1bHQgcmVnaXN0cmF0aW9uIGNoZWNrLiBXaWxsIGVuc3VyZSB0aGUgSldUIHBhc3NlZCBpcyBub3QgZXhwaXJlZCBpZiBvbmUgaXMgbm90IHByb3ZpZGVkLlxuICogSXQgaXMgY3VycmVudGx5IGFzc3VtZWQgdGhhdCB5b3UgYXJlIHBhc3NpbmcgYSB2YWxpZCBKV1QgaWYgdXNpbmcgb3B0aW9ucy5KV1QgKGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSkuXG4gKiBJbiB0aGUgZnV0dXJlIHRoZSBKV1Qgd2lsbCBhbHNvIGJlIGNoZWNrZWQgZm9yIGV4cGlyYXRpb25cbiAqIElmIG9wdGlvbnMuand0IGlzIG5vdCBmb3VuZCwgaXQgd2lsbCBnZXQgdGhlIGp3dCBmcm9tIGxvY2FsU3RvcmFnZVsnQXJjSWQuVVNFUl9JTkZPJ10gd2hpY2ggaXMgdGhlIGRlZmF1bHQuXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRSZWdpc3RyYXRpb25DaGVjayhvcHRpb25zID0ge30pIHtcbiAgbGV0IGp3dCA9IGdldEpXVChvcHRpb25zLmp3dCk7XG5cbiAgcmV0dXJuIHtcbiAgICBsOiAhIW9wdGlvbnMuand0IHx8IChqd3QgJiYgIWlzSnd0RXhwaXJlZChqd3QpKSB8fCBmYWxzZSxcbiAgICB1cGRhdGVkOiBEYXRlLm5vdygpXG4gIH07XG59XG5cbi8qKlxuICogUnVuIGVpdGhlciB0aGUgY3VzdG9tUmVnQ2hlY2sgZnVuY3Rpb24gZGVmaW5lZCBpbiB0aGUgb3B0aW9ucyBwYXJhbWV0ZXIsIG9yIHRoZSBkZWZhdWx0XG4gKiByZWcgY2hlY2sgaWYgbm8gb3B0aW9ucy5jdXN0b21SZWdDaGVjayBpcyBkZWZpbmVkLlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59IEEgUHJvbWlzZSByZXNvbHZpbmcgdG8gYW4gb2JqZWN0IHdoaWNoIGRlbm90ZXMgaWYgYSB1c2VyIGlzIHJlZ2lzdGVyZWQgb3Igbm90LlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVnRGF0YShvcHRpb25zID0ge30pIHtcbiAgY29uc3QgcmVnQ2hlY2sgPVxuICAgIHR5cGVvZiBvcHRpb25zLmN1c3RvbVJlZ0NoZWNrID09PSAnZnVuY3Rpb24nXG4gICAgICA/IG9wdGlvbnMuY3VzdG9tUmVnQ2hlY2tcbiAgICAgIDogZGVmYXVsdFJlZ2lzdHJhdGlvbkNoZWNrO1xuXG4gIHJldHVybiByZWdDaGVjayhvcHRpb25zKTtcbn1cbiIsImZ1bmN0aW9uIGRlZmF1bHRHZXRQYWdlRGF0YShvcHRpb25zKSB7XG4gIGxldCBzZWN0aW9uO1xuICBsZXQgY29udGVudFR5cGU7XG4gIGxldCBjb250ZW50UmVzdHJpY3Rpb247XG5cbiAgaWYgKEVOVi50ZXN0KSB7XG4gICAgc2VjdGlvbiA9ICdidXNpbmVzcyc7XG4gICAgY29udGVudFR5cGUgPSAnYXJ0aWNsZSc7XG4gICAgY29udGVudFJlc3RyaWN0aW9uID0gJ25vcm1hbCc7XG4gIH0gZWxzZSB7XG4gICAgc2VjdGlvbiA9IG9wdGlvbnMuc2VjdGlvbjtcbiAgICBjb250ZW50VHlwZSA9IG9wdGlvbnMuY29udGVudFR5cGU7XG4gICAgY29udGVudFJlc3RyaWN0aW9uID0gb3B0aW9ucy5jb250ZW50UmVzdHJpY3Rpb247XG4gIH1cblxuICBsZXQgY29udGVudElkZW50aWZpZXI7XG4gIGlmIChFTlYudGVzdCkge1xuICAgIGNvbnRlbnRJZGVudGlmaWVyID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjYW5vbmljYWxMaW5rRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cImNhbm9uaWNhbFwiXScpO1xuXG4gICAgaWYgKGNhbm9uaWNhbExpbmtFbCkge1xuICAgICAgY29udGVudElkZW50aWZpZXIgPSBjYW5vbmljYWxMaW5rRWwuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtMT0dfUFJFRklYfSBVbmFibGUgdG8gZmluZCBjb250ZW50IGlkZW50aWZpZXJgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHM6IHNlY3Rpb24sXG4gICAgYzogY29udGVudFR5cGUsXG4gICAgY3I6IGNvbnRlbnRSZXN0cmljdGlvbixcbiAgICBjaTogY29udGVudElkZW50aWZpZXJcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhZ2VEYXRhKGN1c3RvbVBhZ2VEYXRhLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tUGFnZURhdGEgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZGVmYXVsdEdldFBhZ2VEYXRhKG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjdXN0b21QYWdlRGF0YShvcHRpb25zKTsgLy8gc2hvdWxkIGJlIHN5bmNocm9ub3VzIChub3QgYSBwcm9taXNlISlcbiAgfVxufVxuIiwiLyoqXG4gKiBHZXRzIHRoZSByZWFkIGNvdW50cyBmcm9tIHRoZSBkYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YT17fV0gLSBhIGRhdGEgb2JqZWN0IHJlcHJlc2VudGluZyBsb25ndGVybSBzdG9yYWdlLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHJ1bnMgZWl0aGVyIGFuIGV4aXN0aW5nIHJlYWQgY291bnQgb3IgYSBuZXcgb2JqZWN0IGluIHRoaXMgc2hhcGUgeyBjOiB7fSB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWFkQ291bnRzKGRhdGEgPSB7fSkge1xuICByZXR1cm4ge1xuICAgIHJjOiBkYXRhLnJjIHx8IHsgYzoge30gfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgZ2V0QnJvd3NlckRhdGEgfSBmcm9tICcuL2ZhY3RHYXRoZXJpbmcvYnJvd3NlckRhdGEnO1xuaW1wb3J0IHsgZ2V0UGFnZURhdGEgfSBmcm9tICcuL2ZhY3RHYXRoZXJpbmcvcGFnZURhdGEnO1xuaW1wb3J0IHsgZ2V0UmVhZENvdW50cyB9IGZyb20gJy4vZmFjdEdhdGhlcmluZy9yZWFkQ291bnRzJztcbmltcG9ydCB7IGdldFJlZ0RhdGEsIGdldFN1YkRhdGEgfSBmcm9tICcuL2ZhY3RHYXRoZXJpbmcvZW50aXRsZW1lbnRzJztcbmltcG9ydCB7IGxvbmdUZXJtU3RvcmUsIHNlc3Npb25TdG9yZSB9IGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcbmltcG9ydCB7IGlzRXhwaXJlZCB9IGZyb20gJy4vdXRpbHMvZXhwaXJhdGlvbi5qcyc7XG5pbXBvcnQgeyBjaGVja0ZvckZpcnN0T2ZNb250aCB9IGZyb20gJ0BhcmMvcGF5d2FsbC1jb3JlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZhY3RzKGxvbmdUZXJtRGF0YSA9IHt9LCBzZXNzaW9uRGF0YSA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBjdXN0b21QYWdlRGF0YSB9ID0gb3B0aW9ucztcbiAgY29uc3QgcmVnRGF0YSA9IGF3YWl0IGdldFJlZ0RhdGEob3B0aW9ucyk7XG5cbiAgY29uc3QgdXNlck5hbWUgPSBvcHRpb25zLnVzZXJOYW1lIHx8ICdhbm9ueW1vdXMnO1xuICBjb25zdCB1c2VyTG9uZ1Rlcm1EYXRhID0gbG9uZ1Rlcm1EYXRhW3VzZXJOYW1lXSB8fCB7fTtcbiAgY29uc3QgdXNlclNlc3Npb25EYXRhID0gc2Vzc2lvbkRhdGFbdXNlck5hbWVdIHx8IHt9O1xuXG4gIGNvbnN0IGZhY3RzID0ge1xuICAgIC4uLmdldEJyb3dzZXJEYXRhKHVzZXJMb25nVGVybURhdGEsIHVzZXJTZXNzaW9uRGF0YSksXG4gICAgLi4uZ2V0UmVhZENvdW50cyh1c2VyTG9uZ1Rlcm1EYXRhKSxcbiAgICAuLi5nZXRQYWdlRGF0YShjdXN0b21QYWdlRGF0YSwgb3B0aW9ucyksXG4gICAgcmVnOiB7XG4gICAgICAuLi5yZWdEYXRhXG4gICAgfSxcbiAgICBzdWI6IHtcbiAgICAgIC4uLnVzZXJTZXNzaW9uRGF0YS5zdWJcbiAgICB9LFxuICAgIHY6IHVzZXJMb25nVGVybURhdGEudlxuICB9O1xuXG4gIGlmIChmYWN0cy52IGluc3RhbmNlb2YgQXJyYXkgfHwgIWZhY3RzLnYgfHwgY2hlY2tGb3JGaXJzdE9mTW9udGgoZmFjdHMudi5sYXN0VXBkYXRlZCkpIHtcbiAgICBmYWN0cy52ID0geyBjaTogW10sIGxhc3RVcGRhdGVkOiBEYXRlLm5vdygpIH07XG4gIH1cblxuICBjb25zdCBuZXdEYXRhID0ge1xuICAgIC4uLmxvbmdUZXJtRGF0YSxcbiAgICBbdXNlck5hbWVdOiB7XG4gICAgICByYzogZmFjdHMucmMsXG4gICAgICBkOiBmYWN0cy5kLFxuICAgICAgdjogZmFjdHMudixcbiAgICAgIHBtOiBmYWN0cy5wbVxuICAgIH1cbiAgfTtcblxuICBhd2FpdCBsb25nVGVybVN0b3JlLnNldEl0ZW0oU1RPUkVfTkFNRSwgbmV3RGF0YSk7XG5cbiAgaWYgKGlzRXhwaXJlZChmYWN0cy5zdWIgJiYgZmFjdHMuc3ViLnVwZGF0ZWQsIDEwMDAgKiA2MCAqIDYwICogMjQpKSB7XG4gICAgZmFjdHMuc3ViID0gYXdhaXQgZ2V0U3ViRGF0YShvcHRpb25zKTtcbiAgfVxuXG4gIGF3YWl0IHNlc3Npb25TdG9yZS5zZXRJdGVtKFNUT1JFX05BTUUsIHtcbiAgICAuLi5zZXNzaW9uRGF0YSxcbiAgICBbdXNlck5hbWVdOiB7XG4gICAgICByZWc6IGZhY3RzLnJlZyxcbiAgICAgIHN1YjogZmFjdHMuc3ViXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZmFjdHM7XG59XG4iLCJpbXBvcnQgeyBnZXRGYWN0cyB9IGZyb20gJy4vZmFjdHMnO1xuaW1wb3J0IHsgZ2V0U3ViRGF0YSB9IGZyb20gJy4vZmFjdEdhdGhlcmluZy9lbnRpdGxlbWVudHMnO1xuaW1wb3J0IHsgZXZhbHVhdGVSdWxlc2V0LCBpc0V4ZW1wdFRvUnVsZSB9IGZyb20gJ0BhcmMvcGF5d2FsbC1jb3JlJztcbmltcG9ydCB7IGluaXRTdG9yYWdlLCBsb25nVGVybVN0b3JlLCBzZXNzaW9uU3RvcmUgfSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZSc7XG5cbmV4cG9ydCBsZXQgX2ZhY3RzID0ge307XG5leHBvcnQgY29uc3QgX3J1bGVzID0gQXJjUFdSdWxlcztcbmV4cG9ydCBjb25zdCBfdmVyc2lvbiA9IFZFUlNJT047XG5leHBvcnQgY29uc3QgX3B1Ymxpc2hUaW1lc3RhbXAgPVxuICB0eXBlb2YgQXJjUFdQdWJsaXNoVGltZXN0YW1wID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogQXJjUFdQdWJsaXNoVGltZXN0YW1wO1xuZXhwb3J0IGNvbnN0IHBhdXNlZCA9IHR5cGVvZiBBcmNQV1BhdXNlZCA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IEFyY1BXUGF1c2VkO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEVudGl0bGVtZW50cyhvcHRpb25zID0ge30pIHtcbiAgX2ZhY3RzLnN1YiA9IGF3YWl0IGdldFN1YkRhdGEob3B0aW9ucyk7XG4gIHJldHVybiBfZmFjdHMuc3ViO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlUGF5d2FsbCh0cmlnZ2VyaW5nUnVsZSA9IHsgcnVsZTogeyBwdzogJycgfSB9LCB7IHBheXdhbGxGdW5jdGlvbiB9KSB7XG4gIF9mYWN0cy52LmNpID0gX2ZhY3RzLnYuY2kuZmlsdGVyKGNpID0+IF9mYWN0cy5jaSAhPT0gY2kpOyAvLyByZW1vdmUgdGhlIHZpc2l0XG4gIHBheXdhbGxGdW5jdGlvbih0cmlnZ2VyaW5nUnVsZS5ydWxlLnB3KTsgLy8gcnVuIHBheXdhbGwgZnVuY3Rpb24uXG4gIGRlbGV0ZSB0cmlnZ2VyaW5nUnVsZS5ydWxlOyAvLyBkZWxldGUgdGhlIGFjdHVhbCBydWxlIHNvIGl0IG9ubHkgcmV0dXJucyByZWxldmFudCBkYXRhLlxuICByZXR1cm4gdHJpZ2dlcmluZ1J1bGU7XG59XG5cbi8qKlxuICpcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0ge29iamVjdH0gdHJpZ2dlcmluZ1J1bGVzIGFuIG9iamVjdCB3aXRoXG4gKiBAcGFyYW0geyp9IG9wdGlvbnNcbiAqIEByZXR1cm5zXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRXhlbXB0aW9ucyh0cmlnZ2VyaW5nUnVsZXMgPSBbXSwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBlbnRpdGxlbWVudHMgPSBfZmFjdHMuc3ViO1xuICBsZXQgRU5USVRMRU1FTlRTX0ZFVENIRUQgPSBmYWxzZTtcblxuICAvLyBhIGxvZ2dlZCBpbiB1c2VyIHcvIG5vIHN1YiBkYXRhIHcvIG5vIHN1YiBkYXRhIGF2YWlsYWJsZVxuICBpZiAoX2ZhY3RzLnJlZy5sICYmICghZW50aXRsZW1lbnRzIHx8ICFlbnRpdGxlbWVudHMucCB8fCAhZW50aXRsZW1lbnRzLnAubGVuZ3RoKSkge1xuICAgIGVudGl0bGVtZW50cyA9IGF3YWl0IGZldGNoRW50aXRsZW1lbnRzKG9wdGlvbnMpO1xuICAgIEVOVElUTEVNRU5UU19GRVRDSEVEID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICghX2ZhY3RzLnJlZy5sKSB7XG4gICAgLy8gaWYgbm90IGxvZ2dlZCBpbiwgbm8gbmVlZCB0byBkbyBlbnRpdGxlbWVudCBjaGVjaywgZmlyZSBwYXl3YWxsIG9mZiBvZiBmaXJzdCB0cmlnZ2VyaW5nUnVsZS5cbiAgICByZXR1cm4gZXhlY3V0ZVBheXdhbGwodHJpZ2dlcmluZ1J1bGVzWzBdLCBvcHRpb25zKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgdHJpZ2dlcmluZ1J1bGUgb2YgdHJpZ2dlcmluZ1J1bGVzKSB7XG4gICAgbGV0IGlzRXhlbXB0ID0gaXNFeGVtcHRUb1J1bGUodHJpZ2dlcmluZ1J1bGUucnVsZSwgX2ZhY3RzLnN1YiwgX2ZhY3RzLnJlZyk7XG5cbiAgICBpZiAoIWlzRXhlbXB0ICYmICFFTlRJVExFTUVOVFNfRkVUQ0hFRCkge1xuICAgICAgZW50aXRsZW1lbnRzID0gYXdhaXQgZmV0Y2hFbnRpdGxlbWVudHMob3B0aW9ucyk7XG4gICAgICBFTlRJVExFTUVOVFNfRkVUQ0hFRCA9IHRydWU7XG4gICAgICBpc0V4ZW1wdCA9IGlzRXhlbXB0VG9SdWxlKHRyaWdnZXJpbmdSdWxlLnJ1bGUsIF9mYWN0cy5zdWIsIF9mYWN0cy5yZWcpO1xuICAgIH1cblxuICAgIGlmICghaXNFeGVtcHQpIHtcbiAgICAgIHJldHVybiBleGVjdXRlUGF5d2FsbCh0cmlnZ2VyaW5nUnVsZSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7IC8vIHJlYWRlciBpcyBleGVtcHQgZnJvbSBhbGwgdHJpZ2dlcmluZyBydWxlcy5cbn1cblxuLyoqXG4gKiBSZXNldHMgdGhlIHBheXdhbGwgZGF0YSBpbiBzZXNzaW9uICYgbG9uZyB0ZXJtIHN0b3Jlcy5cbiAqIEBwYXJhbSB7U3RvcmFnZX0gc2Vzc2lvblN0b3JlIC0gb3B0aW9uYWwgLSBhIGNsYXNzIGltcGxlbWVudGluZyBnZXRJdGVtLCBzZXRJdGVtLCBhbmQgcmVtb3ZlSXRlbS5cbiAqIEBwYXJhbSB7U3RvcmFnZX0gbG9uZ1Rlcm1TdG9yZSAtIG9wdGlvbmFsIC0gYSBjbGFzcyBpbXBsZW1lbnRpbmcgZ2V0SXRlbSwgc2V0SXRlbSwgYW5kIHJlbW92ZUl0ZW0uXG4gKlxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldChzZXNzaW9uLCBsb25nVGVybSkge1xuICBpZiAoIXNlc3Npb24gfHwgIWxvbmdUZXJtKSB7XG4gICAgaW5pdFN0b3JhZ2Uoc2Vzc2lvbiwgbG9uZ1Rlcm0pO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKFtzZXNzaW9uU3RvcmUuc2V0SXRlbShTVE9SRV9OQU1FLCB7fSksIGxvbmdUZXJtU3RvcmUuc2V0SXRlbShTVE9SRV9OQU1FLCB7fSldKTtcbn1cblxuLyoqXG4gKiBSdW5zIHBheXdhbGwgc2NyaXB0IGJ5IGZldGNoaW5nIGZhY3RzIGZyb20gdmFyaW91cyBzb3VyY2VzIGFuZCB0aGVuIGV2YWx1YXRpbmcgdGhlIHJ1bGVzZXQgYWdhaW5zdCB0aG9zZSBmYWN0c1xuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25hbCBmdW5jdGlvbnMgdG8gdXNlIHRvIGdhdGhlciBhbmQgc3RvcmUgZGF0YSAocGxlYXNlIHNlZSBkb2NzIGZvciBtb3JlKVxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlfSAtIFJldHVybnMgYFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgIHRyaWdnZXJlZDogQXJyYXksXG4gICAgICAgIHRpbWVUYWtlbjogTnVtYmVyLFxuICAgICAgICBldmFsdWF0ZWQ6IEJvb2xlYW4sXG4gICAgICAgIHJ1bGVDb3VudDogTnVtYmVyXG4gICAgICB9KWAsIG9yIGBQcm9taXNlLnJlamVjdChlcnJvcilgIGlmIGFueSBlcnJvciBvY2N1cmVkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcnVuKG9wdGlvbnMgPSB7fSkge1xuICBpZiAoIWxvbmdUZXJtU3RvcmUgfHwgIXNlc3Npb25TdG9yZSkge1xuICAgIGluaXRTdG9yYWdlKG9wdGlvbnMuc2Vzc2lvblN0b3JhZ2UsIG9wdGlvbnMubG9uZ1Rlcm1TdG9yYWdlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5wYXl3YWxsRnVuY3Rpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7TE9HX1BSRUZJWH0gTm8gdmFsaWQgcGF5d2FsbEZ1bmN0aW9uIGRlZmluZWQgLS0gYmFpbGluZyBvdXRgKTtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgbGV0IGFscmVhZHlWaXNpdGVkID0gZmFsc2U7XG4gIGNvbnN0IHVzZXJOYW1lID0gb3B0aW9ucy51c2VyTmFtZSB8fCAnYW5vbnltb3VzJztcbiAgY29uc3QgbG9uZ1Rlcm1EYXRhID0gKGF3YWl0IGxvbmdUZXJtU3RvcmUuZ2V0SXRlbShTVE9SRV9OQU1FKSkgfHwge307XG4gIGNvbnN0IHNlc3Npb25EYXRhID0gKGF3YWl0IHNlc3Npb25TdG9yZS5nZXRJdGVtKFNUT1JFX05BTUUpKSB8fCB7fTtcblxuICAvLyBnYXRoZXIgZmFjdHNcbiAgX2ZhY3RzID0gYXdhaXQgZ2V0RmFjdHMobG9uZ1Rlcm1EYXRhIHx8IHt9LCBzZXNzaW9uRGF0YSB8fCB7fSwgb3B0aW9ucyk7XG5cbiAgYWxyZWFkeVZpc2l0ZWQgPSBfZmFjdHMudi5jaS5pbmRleE9mKF9mYWN0cy5jaSkgPj0gMDtcblxuICAvLyBldmFsdWF0ZSBydWxlc2V0XG4gIGxldCB0cmlnZ2VyaW5nUnVsZXMgPSBudWxsO1xuICBpZiAoIWFscmVhZHlWaXNpdGVkICYmICFwYXVzZWQpIHtcbiAgICB0cmlnZ2VyaW5nUnVsZXMgPSBldmFsdWF0ZVJ1bGVzZXQoX3J1bGVzLCBfZmFjdHMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLy8gY2hlY2sgZW50aXRsZW1lbnRzXG4gIGxldCBwYXl3YWxsaW5nUnVsZSA9IG51bGw7XG4gIGlmIChBcnJheS5pc0FycmF5KHRyaWdnZXJpbmdSdWxlcykgJiYgdHJpZ2dlcmluZ1J1bGVzLmxlbmd0aCkge1xuICAgIHBheXdhbGxpbmdSdWxlID0gYXdhaXQgY2hlY2tFeGVtcHRpb25zKHRyaWdnZXJpbmdSdWxlcywgb3B0aW9ucyk7XG4gIH1cblxuICAvLyBzYXZlIHZpc2l0ICYgcmVhZGNvdW50c1xuICBhd2FpdCBsb25nVGVybVN0b3JlLnNldEl0ZW0oU1RPUkVfTkFNRSwge1xuICAgIC4uLmxvbmdUZXJtRGF0YSxcbiAgICBbdXNlck5hbWVdOiB7XG4gICAgICAuLi5sb25nVGVybURhdGFbdXNlck5hbWVdLFxuICAgICAgcmM6IF9mYWN0cy5yYyxcbiAgICAgIHY6IF9mYWN0cy52XG4gICAgfVxuICB9KTtcblxuICBjb25zdCByZXN1bHRzID0ge1xuICAgIHRyaWdnZXJlZDogcGF5d2FsbGluZ1J1bGUsXG4gICAgdGltZVRha2VuOiBEYXRlLm5vdygpIC0gc3RhcnQsXG4gICAgdmlzaXRlZDogYWxyZWFkeVZpc2l0ZWQsXG4gICAgcGF1c2VkOiBwYXVzZWQsXG4gICAgcnVsZUNvdW50OiBfcnVsZXMubGVuZ3RoLFxuICAgIHByaXZhdGU6IF9mYWN0cy5wbVxuICB9O1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5yZXN1bHRzQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLnJlc3VsdHNDYWxsYmFjayhyZXN1bHRzKTtcbiAgfVxuXG4gIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICB7IHR5cGU6ICdGUk9NX1BKUycsIEFyY1A6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkod2luZG93LkFyY1ApKSwgcmVzdWx0czogcmVzdWx0cyB9LFxuICAgICcqJ1xuICApO1xuXG4gIHJldHVybiByZXN1bHRzO1xufVxuXG4vLyBBdXRvIHJ1biB0byBlbmFibGUgYXN5bmMgbG9hZGluZyBvZiB0aGlzIHNjcmlwdFxuaWYgKHR5cGVvZiB3aW5kb3dbT1BUSU9OU10gIT09ICd1bmRlZmluZWQnKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdpbmRvdy5BcmNQLnJ1bih3aW5kb3dbT1BUSU9OU10pO1xuICB9LCAxKTsgLy8gcnVuIGF0IHRoZSBlbmQgb2YgdGhlIGV4ZWN1dGlvbiBzdGFjayB0byBlbnN1cmUgZXZlcnl0aGluZyBpcyBsb2FkZWQuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCcm93c2VyU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKGlzU2Vzc2lvbikge1xuICAgIGlmIChpc1Nlc3Npb24pIHtcbiAgICAgIHRoaXMuc3RvcmUgPSBzZXNzaW9uU3RvcmFnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZSA9IGxvY2FsU3RvcmFnZTtcbiAgICB9XG4gIH1cbiAgZ2V0SXRlbShrZXkpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEpTT04ucGFyc2UodGhpcy5zdG9yZS5nZXRJdGVtKGtleSkpKTtcbiAgfVxuICBzZXRJdGVtKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc3RvcmUuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSkpO1xuICB9XG4gIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnN0b3JlLnJlbW92ZUl0ZW0oa2V5KSk7XG4gIH1cbn1cbiIsIi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJjdXN3ZXN0aW4vc3RvcmVzL2Nvb2tpZVN0b3JlLmpzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZVN0b3JhZ2Uge1xuICBjb25zdHJ1Y3Rvcihpc1Nlc3Npb24pIHtcbiAgICB0aGlzLmlzU2Vzc2lvbiA9IGlzU2Vzc2lvbjtcbiAgICB0aGlzLmRvYyA9IGRvY3VtZW50O1xuICB9XG5cbiAgZ2V0SXRlbShrZXkpIHtcbiAgICBpZiAoIWtleSB8fCAhdGhpcy5faGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgcmVnZXhwU3RyID1cbiAgICAgICcoPzpefC4qO1xcXFxzKiknICtcbiAgICAgIGVzY2FwZShrZXkpLnJlcGxhY2UoL1stLisqXS9nLCAnXFxcXCQmJykgK1xuICAgICAgJ1xcXFxzKlxcXFw9XFxcXHMqKCg/OlteO10oPyE7KSkqW147XT8pLionO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICBKU09OLnBhcnNlKHVuZXNjYXBlKHRoaXMuZG9jLmNvb2tpZS5yZXBsYWNlKG5ldyBSZWdFeHAocmVnZXhwU3RyKSwgJyQxJykpKVxuICAgICk7XG4gIH1cblxuICBzZXRJdGVtKGtleSwgZGF0YSkge1xuICAgIGlmICgha2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZG9jLmNvb2tpZSA9IGAke2VzY2FwZShrZXkpfT0ke2VzY2FwZShKU09OLnN0cmluZ2lmeShkYXRhKSl9OyAke1xuICAgICAgdGhpcy5pc1Nlc3Npb24gPyAnJyA6ICdleHBpcmVzPVR1ZSwgMTkgSmFuIDIwMzggMDM6MTQ6MDcgR01UOyAnXG4gICAgfSBwYXRoPS9gO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YSk7XG4gIH1cblxuICByZW1vdmVJdGVtKGtleSkge1xuICAgIGlmICgha2V5IHx8ICF0aGlzLl9oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdObyBzdWNoIGtleSBpbiB0aGUgc3RvcmUnKTtcbiAgICB9XG4gICAgdGhpcy5kb2MuY29va2llID0gZXNjYXBlKGtleSkgKyAnPTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVDsgcGF0aD0vJztcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBfaGFzKGtleSkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoPzpefDtcXFxccyopJyArIGVzY2FwZShrZXkpLnJlcGxhY2UoL1stLisqXS9nLCAnXFxcXCQmJykgKyAnXFxcXHMqXFxcXD0nKS50ZXN0KFxuICAgICAgdGhpcy5kb2MuY29va2llXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBkb2MgPSBkb2N1bWVudDtcbiIsImltcG9ydCBDb29raWVTdG9yYWdlIGZyb20gJy4vY29va2llU3RvcmFnZSc7XG5pbXBvcnQgQnJvd3NlclN0b3JhZ2UgZnJvbSAnLi9icm93c2VyU3RvcmFnZSc7XG5cbmV4cG9ydCBsZXQgbG9uZ1Rlcm1TdG9yZTtcbmV4cG9ydCBsZXQgc2Vzc2lvblN0b3JlO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2Vzc2lvblN0b3JhZ2Uoc3RvcmFnZSkge1xuICBzZXNzaW9uU3RvcmUgPSBzdG9yYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9uZ1Rlcm1TdG9yYWdlKHN0b3JhZ2UpIHtcbiAgbG9uZ1Rlcm1TdG9yZSA9IHN0b3JhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmFnZShzZXNzaW9uLCBsb25nVGVybSkge1xuICBpZiAoc2Vzc2lvbikge1xuICAgIHNldFNlc3Npb25TdG9yYWdlKHNlc3Npb24pO1xuICB9IGVsc2Uge1xuICAgIGluaXRTdG9yYWdlV2l0aERlZmF1bHRzKCdzZXNzaW9uJyk7XG4gIH1cblxuICBpZiAobG9uZ1Rlcm0pIHtcbiAgICBzZXRMb25nVGVybVN0b3JhZ2UobG9uZ1Rlcm0pO1xuICB9IGVsc2Uge1xuICAgIGluaXRTdG9yYWdlV2l0aERlZmF1bHRzKCdsb25nVGVybScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmFnZVdpdGhEZWZhdWx0cyh0eXBlKSB7XG4gIHRyeSB7XG4gICAgLy8gY2hlY2sgaWYgd2UgY2FuIHdyaXRlIHRvIHNlc3Npb24gc3RvcmFnZSAmIGxvY2Fsc3RvcmFnZVxuICAgIGNvbnN0IHRlc3RLZXkgPSBgJHtTVE9SRV9OQU1FfS50ZXN0YDtcbiAgICBpZiAodHlwZSA9PT0gJ3Nlc3Npb24nIHx8ICF0eXBlKSB7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0ZXN0S2V5LCAndGVzdFZhbHVlJyk7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0S2V5KTtcbiAgICAgIHNldFNlc3Npb25TdG9yYWdlKG5ldyBCcm93c2VyU3RvcmFnZSh0cnVlKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbG9uZ1Rlcm0nIHx8ICF0eXBlKSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGVzdEtleSwgJ3Rlc3RWYWx1ZScpO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRlc3RLZXkpO1xuICAgICAgc2V0TG9uZ1Rlcm1TdG9yYWdlKG5ldyBCcm93c2VyU3RvcmFnZShmYWxzZSkpO1xuICAgIH1cbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIGZvciBvbGQgc2FmYXJpIGluIHByaXZhdGUgbW9kZS5cbiAgICBpZiAodHlwZSA9PT0gJ3Nlc3Npb24nIHx8ICF0eXBlKSB7XG4gICAgICBzZXRTZXNzaW9uU3RvcmFnZShuZXcgQ29va2llU3RvcmFnZSh0cnVlKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbG9uZ1Rlcm0nIHx8ICF0eXBlKSB7XG4gICAgICBzZXRMb25nVGVybVN0b3JhZ2UobmV3IENvb2tpZVN0b3JhZ2UoZmFsc2UpKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgdGltZXN0YW1wIGlzIG9sZGVyIHRoYW4gdGhlIGFsbG93ZWQgdGhyZXNob2xkLlxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lU3RhbXAgLSB0aW1lU3RhbXAgaW4gbWlsbGlzZWNvbmRzIGZyb20gZXBvY2guXG4gKiBAcGFyYW0ge051bWJlcn0gdGhyZXNob2xkIC0gdGhyZXNob2xkIG9mIHdoYXQgY29uc3RpdHV0ZXMgYW4gZXhwaXJlZCB0aW1lU3RhbXAgaW4gbWlsbGlzZWNvbmRzLlxuICogQHJldHVybnMge0Jvb2xlYW59IGZhbHNlIGlmIGl0IGhhc24ndCBleHBpcmVkIHlldCBvciBpZiBubyB0aW1lU3RhbXAgd2FzIGZvdW5kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFeHBpcmVkKHRpbWVTdGFtcCwgdGhyZXNob2xkKSB7XG4gIGlmICghdGltZVN0YW1wKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIERhdGUubm93KCkgLSB0aW1lU3RhbXAgPj0gdGhyZXNob2xkO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcGFyc2VKd3QodG9rZW4pIHtcbiAgdHJ5IHtcbiAgICB2YXIgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICB2YXIgYmFzZTY0ID0gYmFzZTY0VXJsLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmF0b2IoYmFzZTY0KSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvciBwYXJzaW5nIGFjY2VzcyB0b2tlbjogJHt0b2tlbn1cbiAgICAke2V9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSnd0RXhwaXJlZCh0b2tlbikge1xuICBjb25zdCBqd3RQYXlsb2FkID0gcGFyc2VKd3QodG9rZW4pO1xuICByZXR1cm4gMTAwMCAqIGp3dFBheWxvYWQuZXhwIDw9IERhdGUubm93KCk7IC8vIGp3dCBkYXRlcyBhcmUgaW4gc2Vjb25kcyBzaW5jZSBlcG9jaCwgaGVuY2UgXCIxMDAwICpcIlxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SldUKGp3dCkge1xuICBpZiAoIWp3dCkge1xuICAgIHRyeSB7XG4gICAgICBqd3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBcmNJZC5VU0VSX0lORk8nKSk7IC8vIGRlZmF1bHQgbG9jYXRpb24gZnJvbSBAYXJjL3Nkay1pZGVudGl0eVxuICAgICAgcmV0dXJuIGp3dC5hY2Nlc3NUb2tlbjtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gand0O1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0SG9zdG5hbWVGcm9tVVJMKHVybCkge1xuICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYS5ocmVmID0gdXJsO1xuICByZXR1cm4gYS5ob3N0bmFtZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=

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
        // customPageData: function () {
        //     return {
        //         c: 'story',
        //         s: 'business',
        //         ci: Date.now()
        //     };
        // },
        customSubCheck: function () {
            return Promise.resolve({
                "s": false,
                "timeTaken": 100,
                "updated": Date.now()
            })
        },
        customRegCheck: function () {
            var start = Date.now();
            var isLoggedIn = window.localStorage.getItem('ArcId.USER_PROFILE') !== "null" ? false : true;
            return Promise.resolve({
                l: isLoggedIn,
                timeTaken: Date.now() - start
            });
        }

    }).then(results => console.log('Results from running paywall script: ', results))
        .catch(console.error);
}())