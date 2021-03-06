(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!************************************************************************************************!*\
  !*** /Users/missx/Source/loaders.gl/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!*********************************************************************************************!*\
  !*** /Users/missx/Source/loaders.gl/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../../node_modules/@probe.gl/stats/dist/esm/index.js":
/*!*************************************************************************************!*\
  !*** /Users/missx/Source/loaders.gl/node_modules/@probe.gl/stats/dist/esm/index.js ***!
  \*************************************************************************************/
/*! exports provided: Stats, Stat, _getHiResTimestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_stats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/stats */ "../../node_modules/@probe.gl/stats/dist/esm/lib/stats.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return _lib_stats__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _lib_stat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/stat */ "../../node_modules/@probe.gl/stats/dist/esm/lib/stat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stat", function() { return _lib_stat__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/hi-res-timestamp */ "../../node_modules/@probe.gl/stats/dist/esm/utils/hi-res-timestamp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_getHiResTimestamp", function() { return _utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_2__["default"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@probe.gl/stats/dist/esm/lib/stat.js":
/*!****************************************************************************************!*\
  !*** /Users/missx/Source/loaders.gl/node_modules/@probe.gl/stats/dist/esm/lib/stat.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stat; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hi-res-timestamp */ "../../node_modules/@probe.gl/stats/dist/esm/utils/hi-res-timestamp.js");




var Stat = function () {
  function Stat(name, type) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Stat);

    this.name = name;
    this.type = type;
    this.sampleSize = 1;
    this.reset();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Stat, [{
    key: "setSampleSize",
    value: function setSampleSize(samples) {
      this.sampleSize = samples;
      return this;
    }
  }, {
    key: "incrementCount",
    value: function incrementCount() {
      this.addCount(1);
      return this;
    }
  }, {
    key: "decrementCount",
    value: function decrementCount() {
      this.subtractCount(1);
      return this;
    }
  }, {
    key: "addCount",
    value: function addCount(value) {
      this._count += value;
      this._samples++;

      this._checkSampling();

      return this;
    }
  }, {
    key: "subtractCount",
    value: function subtractCount(value) {
      this._count -= value;
      this._samples++;

      this._checkSampling();

      return this;
    }
  }, {
    key: "addTime",
    value: function addTime(time) {
      this._time += time;
      this.lastTiming = time;
      this._samples++;

      this._checkSampling();

      return this;
    }
  }, {
    key: "timeStart",
    value: function timeStart() {
      this._startTime = Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_2__["default"])();
      this._timerPending = true;
      return this;
    }
  }, {
    key: "timeEnd",
    value: function timeEnd() {
      if (!this._timerPending) {
        return this;
      }

      this.addTime(Object(_utils_hi_res_timestamp__WEBPACK_IMPORTED_MODULE_2__["default"])() - this._startTime);
      this._timerPending = false;

      this._checkSampling();

      return this;
    }
  }, {
    key: "getSampleAverageCount",
    value: function getSampleAverageCount() {
      return this.sampleSize > 0 ? this.lastSampleCount / this.sampleSize : 0;
    }
  }, {
    key: "getSampleAverageTime",
    value: function getSampleAverageTime() {
      return this.sampleSize > 0 ? this.lastSampleTime / this.sampleSize : 0;
    }
  }, {
    key: "getSampleHz",
    value: function getSampleHz() {
      return this.lastSampleTime > 0 ? this.sampleSize / (this.lastSampleTime / 1000) : 0;
    }
  }, {
    key: "getAverageCount",
    value: function getAverageCount() {
      return this.samples > 0 ? this.count / this.samples : 0;
    }
  }, {
    key: "getAverageTime",
    value: function getAverageTime() {
      return this.samples > 0 ? this.time / this.samples : 0;
    }
  }, {
    key: "getHz",
    value: function getHz() {
      return this.time > 0 ? this.samples / (this.time / 1000) : 0;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.time = 0;
      this.count = 0;
      this.samples = 0;
      this.lastTiming = 0;
      this.lastSampleTime = 0;
      this.lastSampleCount = 0;
      this._count = 0;
      this._time = 0;
      this._samples = 0;
      this._startTime = 0;
      this._timerPending = false;
      return this;
    }
  }, {
    key: "_checkSampling",
    value: function _checkSampling() {
      if (this._samples === this.sampleSize) {
        this.lastSampleTime = this._time;
        this.lastSampleCount = this._count;
        this.count += this._count;
        this.time += this._time;
        this.samples += this._samples;
        this._time = 0;
        this._count = 0;
        this._samples = 0;
      }
    }
  }]);

  return Stat;
}();


//# sourceMappingURL=stat.js.map

/***/ }),

/***/ "../../node_modules/@probe.gl/stats/dist/esm/lib/stats.js":
/*!*****************************************************************************************!*\
  !*** /Users/missx/Source/loaders.gl/node_modules/@probe.gl/stats/dist/esm/lib/stats.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _stat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stat */ "../../node_modules/@probe.gl/stats/dist/esm/lib/stat.js");




var Stats = function () {
  function Stats(_ref) {
    var id = _ref.id,
        stats = _ref.stats;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Stats);

    this.id = id;
    this.stats = {};

    this._initializeStats(stats);

    Object.seal(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Stats, [{
    key: "get",
    value: function get(name) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'count';
      return this._getOrCreate({
        name: name,
        type: type
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var key in this.stats) {
        this.stats[key].reset();
      }

      return this;
    }
  }, {
    key: "forEach",
    value: function forEach(fn) {
      for (var key in this.stats) {
        fn(this.stats[key]);
      }
    }
  }, {
    key: "getTable",
    value: function getTable() {
      var table = {};
      this.forEach(function (stat) {
        table[stat.name] = {
          time: stat.time || 0,
          count: stat.count || 0,
          average: stat.getAverageTime() || 0,
          hz: stat.getHz() || 0
        };
      });
      return table;
    }
  }, {
    key: "_initializeStats",
    value: function _initializeStats() {
      var _this = this;

      var stats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      stats.forEach(function (stat) {
        return _this._getOrCreate(stat);
      });
    }
  }, {
    key: "_getOrCreate",
    value: function _getOrCreate(stat) {
      if (!stat || !stat.name) {
        return null;
      }

      var name = stat.name,
          type = stat.type;

      if (!this.stats[name]) {
        if (stat instanceof _stat__WEBPACK_IMPORTED_MODULE_2__["default"]) {
          this.stats[name] = stat;
        } else {
          this.stats[name] = new _stat__WEBPACK_IMPORTED_MODULE_2__["default"](name, type);
        }
      }

      return this.stats[name];
    }
  }, {
    key: "size",
    get: function get() {
      return Object.keys(this.stats).length;
    }
  }]);

  return Stats;
}();


//# sourceMappingURL=stats.js.map

/***/ }),

/***/ "../../node_modules/@probe.gl/stats/dist/esm/utils/hi-res-timestamp.js":
/*!******************************************************************************************************!*\
  !*** /Users/missx/Source/loaders.gl/node_modules/@probe.gl/stats/dist/esm/utils/hi-res-timestamp.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHiResTimestamp; });
function getHiResTimestamp() {
  var timestamp;

  if (typeof window !== 'undefined' && window.performance) {
    timestamp = window.performance.now();
  } else if (typeof process !== 'undefined' && process.hrtime) {
    var timeParts = process.hrtime();
    timestamp = timeParts[0] * 1000 + timeParts[1] / 1e6;
  } else {
    timestamp = Date.now();
  }

  return timestamp;
}
//# sourceMappingURL=hi-res-timestamp.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!**********************************************************************!*\
  !*** /Users/missx/Source/loaders.gl/node_modules/process/browser.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../loader-utils/src/categories/mesh/mesh-utils.js":
/*!*********************************************************!*\
  !*** ../loader-utils/src/categories/mesh/mesh-utils.js ***!
  \*********************************************************/
/*! exports provided: getMeshSize, getMeshBoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeshSize", function() { return getMeshSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeshBoundingBox", function() { return getMeshBoundingBox; });
function getMeshSize(attributes) {
  let size = 0;
  for (const attributeName in attributes) {
    const attribute = attributes[attributeName];
    if (ArrayBuffer.isView(attribute)) {
      // @ts-ignore DataView doesn't have BYTES_PER_ELEMENT
      size += attribute.byteLength * attribute.BYTES_PER_ELEMENT;
    }
  }
  return size;
}

// eslint-disable-next-line complexity
function getMeshBoundingBox(attributes) {
  if (!attributes || !attributes.POSITION) {
    return null;
  }

  let minX = Infinity;
  let minY = Infinity;
  let minZ = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  let maxZ = -Infinity;

  const positions = attributes.POSITION.value;
  const len = positions && positions.length;

  if (!len) {
    return null;
  }

  for (let i = 0; i < len; i += 3) {
    const x = positions[i];
    const y = positions[i + 1];
    const z = positions[i + 2];

    minX = x < minX ? x : minX;
    minY = y < minY ? y : minY;
    minZ = z < minZ ? z : minZ;

    maxX = x > maxX ? x : maxX;
    maxY = y > maxY ? y : maxY;
    maxZ = z > maxZ ? z : maxZ;
  }
  return [[minX, minY, minZ], [maxX, maxY, maxZ]];
}


/***/ }),

/***/ "../loader-utils/src/index.js":
/*!************************************!*\
  !*** ../loader-utils/src/index.js ***!
  \************************************/
/*! exports provided: createWorker, assert, isBrowser, isWorker, nodeVersion, self, window, global, document, validateLoaderVersion, getLibraryUrl, loadLibrary, getTransferList, parseJSON, padTo4Bytes, copyToArray, copyArrayBuffer, getZeroOffsetArrayBuffer, copyPaddedArrayBufferToDataView, copyPaddedStringToDataView, padStringToByteAlignment, copyStringToDataView, copyBinaryToDataView, getFirstCharacters, getMagicString, path, setPathPrefix, getPathPrefix, resolvePath, _addAliases, makeTextEncoderIterator, makeTextDecoderIterator, makeLineIterator, makeNumberedLineIterator, RequestScheduler, _getMeshSize, getMeshBoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_create_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/create-worker */ "../loader-utils/src/lib/create-worker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWorker", function() { return _lib_create_worker__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _lib_env_utils_assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/env-utils/assert */ "../loader-utils/src/lib/env-utils/assert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _lib_env_utils_assert__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _lib_env_utils_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/env-utils/globals */ "../loader-utils/src/lib/env-utils/globals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return _lib_env_utils_globals__WEBPACK_IMPORTED_MODULE_2__["isBrowser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWorker", function() { return _lib_env_utils_globals__WEBPACK_IMPORTED_MODULE_2__["isWorker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeVersion", function() { return _lib_env_utils_globals__WEBPACK_IMPORTED_MODULE_2__["nodeVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "self", function() { return _lib_env_utils_globals__WEBPACK_IMPORTED_MODULE_2__["self"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _lib_env_utils_globals__WEBPACK_IMPORTED_MODULE_2__["window"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "global", function() { return _lib_env_utils_globals__WEBPACK_IMPORTED_MODULE_2__["global"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "document", function() { return _lib_env_utils_globals__WEBPACK_IMPORTED_MODULE_2__["document"]; });

/* harmony import */ var _lib_validate_loader_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/validate-loader-version */ "../loader-utils/src/lib/validate-loader-version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateLoaderVersion", function() { return _lib_validate_loader_version__WEBPACK_IMPORTED_MODULE_3__["validateLoaderVersion"]; });

/* harmony import */ var _lib_library_utils_library_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/library-utils/library-utils */ "../loader-utils/src/lib/library-utils/library-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLibraryUrl", function() { return _lib_library_utils_library_utils__WEBPACK_IMPORTED_MODULE_4__["getLibraryUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadLibrary", function() { return _lib_library_utils_library_utils__WEBPACK_IMPORTED_MODULE_4__["loadLibrary"]; });

/* harmony import */ var _lib_worker_utils_get_transfer_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/worker-utils/get-transfer-list */ "../loader-utils/src/lib/worker-utils/get-transfer-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTransferList", function() { return _lib_worker_utils_get_transfer_list__WEBPACK_IMPORTED_MODULE_5__["getTransferList"]; });

/* harmony import */ var _lib_parser_utils_parse_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/parser-utils/parse-json */ "../loader-utils/src/lib/parser-utils/parse-json.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseJSON", function() { return _lib_parser_utils_parse_json__WEBPACK_IMPORTED_MODULE_6__["parseJSON"]; });

/* harmony import */ var _lib_binary_utils_memory_copy_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/binary-utils/memory-copy-utils */ "../loader-utils/src/lib/binary-utils/memory-copy-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "padTo4Bytes", function() { return _lib_binary_utils_memory_copy_utils__WEBPACK_IMPORTED_MODULE_7__["padTo4Bytes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyToArray", function() { return _lib_binary_utils_memory_copy_utils__WEBPACK_IMPORTED_MODULE_7__["copyToArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyArrayBuffer", function() { return _lib_binary_utils_memory_copy_utils__WEBPACK_IMPORTED_MODULE_7__["copyArrayBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getZeroOffsetArrayBuffer", function() { return _lib_binary_utils_memory_copy_utils__WEBPACK_IMPORTED_MODULE_7__["getZeroOffsetArrayBuffer"]; });

/* harmony import */ var _lib_binary_utils_binary_copy_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/binary-utils/binary-copy-utils */ "../loader-utils/src/lib/binary-utils/binary-copy-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyPaddedArrayBufferToDataView", function() { return _lib_binary_utils_binary_copy_utils__WEBPACK_IMPORTED_MODULE_8__["copyPaddedArrayBufferToDataView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyPaddedStringToDataView", function() { return _lib_binary_utils_binary_copy_utils__WEBPACK_IMPORTED_MODULE_8__["copyPaddedStringToDataView"]; });

/* harmony import */ var _lib_binary_utils_encode_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/binary-utils/encode-utils */ "../loader-utils/src/lib/binary-utils/encode-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "padStringToByteAlignment", function() { return _lib_binary_utils_encode_utils__WEBPACK_IMPORTED_MODULE_9__["padStringToByteAlignment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyStringToDataView", function() { return _lib_binary_utils_encode_utils__WEBPACK_IMPORTED_MODULE_9__["copyStringToDataView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyBinaryToDataView", function() { return _lib_binary_utils_encode_utils__WEBPACK_IMPORTED_MODULE_9__["copyBinaryToDataView"]; });

/* harmony import */ var _lib_binary_utils_get_first_characters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/binary-utils/get-first-characters */ "../loader-utils/src/lib/binary-utils/get-first-characters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstCharacters", function() { return _lib_binary_utils_get_first_characters__WEBPACK_IMPORTED_MODULE_10__["getFirstCharacters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMagicString", function() { return _lib_binary_utils_get_first_characters__WEBPACK_IMPORTED_MODULE_10__["getMagicString"]; });

/* harmony import */ var _lib_path_utils_path__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/path-utils/path */ "../loader-utils/src/lib/path-utils/path.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _lib_path_utils_path__WEBPACK_IMPORTED_MODULE_11__; });
/* harmony import */ var _lib_path_utils_file_aliases__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/path-utils/file-aliases */ "../loader-utils/src/lib/path-utils/file-aliases.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPathPrefix", function() { return _lib_path_utils_file_aliases__WEBPACK_IMPORTED_MODULE_12__["setPathPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPathPrefix", function() { return _lib_path_utils_file_aliases__WEBPACK_IMPORTED_MODULE_12__["getPathPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvePath", function() { return _lib_path_utils_file_aliases__WEBPACK_IMPORTED_MODULE_12__["resolvePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_addAliases", function() { return _lib_path_utils_file_aliases__WEBPACK_IMPORTED_MODULE_12__["addAliases"]; });

/* harmony import */ var _lib_iterator_utils_text_iterators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/iterator-utils/text-iterators */ "../loader-utils/src/lib/iterator-utils/text-iterators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeTextEncoderIterator", function() { return _lib_iterator_utils_text_iterators__WEBPACK_IMPORTED_MODULE_13__["makeTextEncoderIterator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeTextDecoderIterator", function() { return _lib_iterator_utils_text_iterators__WEBPACK_IMPORTED_MODULE_13__["makeTextDecoderIterator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeLineIterator", function() { return _lib_iterator_utils_text_iterators__WEBPACK_IMPORTED_MODULE_13__["makeLineIterator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeNumberedLineIterator", function() { return _lib_iterator_utils_text_iterators__WEBPACK_IMPORTED_MODULE_13__["makeNumberedLineIterator"]; });

/* harmony import */ var _lib_request_utils_request_scheduler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/request-utils/request-scheduler */ "../loader-utils/src/lib/request-utils/request-scheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestScheduler", function() { return _lib_request_utils_request_scheduler__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _categories_mesh_mesh_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./categories/mesh/mesh-utils */ "../loader-utils/src/categories/mesh/mesh-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_getMeshSize", function() { return _categories_mesh_mesh_utils__WEBPACK_IMPORTED_MODULE_15__["getMeshSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMeshBoundingBox", function() { return _categories_mesh_mesh_utils__WEBPACK_IMPORTED_MODULE_15__["getMeshBoundingBox"]; });



// GENERAL UTILS



// LOADER UTILS


// LIBRARY UTILS


// WORKER UTILS


// PARSER UTILS


// MEMORY COPY UTILS





// PATH UTILS






// ITERATOR UTILS



// REQUEST UTILS


// MESH CATEGORY UTILS
// Note: Should move to category specific module if code size increases



/***/ }),

/***/ "../loader-utils/src/lib/binary-utils/binary-copy-utils.js":
/*!*****************************************************************!*\
  !*** ../loader-utils/src/lib/binary-utils/binary-copy-utils.js ***!
  \*****************************************************************/
/*! exports provided: copyPaddedArrayBufferToDataView, copyPaddedStringToDataView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyPaddedArrayBufferToDataView", function() { return copyPaddedArrayBufferToDataView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyPaddedStringToDataView", function() { return copyPaddedStringToDataView; });
/* harmony import */ var _memory_copy_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memory-copy-utils */ "../loader-utils/src/lib/binary-utils/memory-copy-utils.js");
/* global TextEncoder */


function copyPaddedArrayBufferToDataView(dataView, byteOffset, sourceBuffer) {
  const paddedLength = Object(_memory_copy_utils__WEBPACK_IMPORTED_MODULE_0__["padTo4Bytes"])(sourceBuffer.byteLength);
  const padLength = paddedLength - sourceBuffer.byteLength;

  if (dataView) {
    // Copy array
    const targetArray = new Uint8Array(
      dataView.buffer,
      dataView.byteOffset + byteOffset,
      sourceBuffer.byteLength
    );
    const sourceArray = new Uint8Array(sourceBuffer);
    targetArray.set(sourceArray);

    // Add PADDING
    for (let i = 0; i < padLength; ++i) {
      // json chunk is padded with spaces (ASCII 0x20)
      dataView.setUint8(byteOffset + sourceBuffer.byteLength + i, 0x20);
    }
  }
  byteOffset += paddedLength;
  return byteOffset;
}

function copyPaddedStringToDataView(dataView, byteOffset, string) {
  const textEncoder = new TextEncoder();
  // PERFORMANCE IDEA: We encode twice, once to get size and once to store
  // PERFORMANCE IDEA: Use TextEncoder.encodeInto() to avoid temporary copy
  const stringBuffer = textEncoder.encode(string);

  byteOffset = copyPaddedArrayBufferToDataView(dataView, byteOffset, stringBuffer);

  return byteOffset;
}


/***/ }),

/***/ "../loader-utils/src/lib/binary-utils/encode-utils.js":
/*!************************************************************!*\
  !*** ../loader-utils/src/lib/binary-utils/encode-utils.js ***!
  \************************************************************/
/*! exports provided: padStringToByteAlignment, copyStringToDataView, copyBinaryToDataView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padStringToByteAlignment", function() { return padStringToByteAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyStringToDataView", function() { return copyStringToDataView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyBinaryToDataView", function() { return copyBinaryToDataView; });
// UTILITIES

// PERFORMANCE IDEA: No need to copy string twice...
function padStringToByteAlignment(string, byteAlignment) {
  const length = string.length;
  const paddedLength = Math.ceil(length / byteAlignment) * byteAlignment; // Round up to the required alignment
  const padding = paddedLength - length;
  let whitespace = '';
  for (let i = 0; i < padding; ++i) {
    whitespace += ' ';
  }
  return string + whitespace;
}

function copyStringToDataView(dataView, byteOffset, string, byteLength) {
  if (dataView) {
    for (let i = 0; i < byteLength; i++) {
      dataView.setUint8(byteOffset + i, string.charCodeAt(i));
    }
  }
  return byteOffset + byteLength;
}

function copyBinaryToDataView(dataView, byteOffset, binary, byteLength) {
  if (dataView) {
    for (let i = 0; i < byteLength; i++) {
      dataView.setUint8(byteOffset + i, binary[i]);
      byteOffset++;
    }
  }
  return byteOffset + byteLength;
}


/***/ }),

/***/ "../loader-utils/src/lib/binary-utils/get-first-characters.js":
/*!********************************************************************!*\
  !*** ../loader-utils/src/lib/binary-utils/get-first-characters.js ***!
  \********************************************************************/
/*! exports provided: getFirstCharacters, getMagicString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstCharacters", function() { return getFirstCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMagicString", function() { return getMagicString; });
function getFirstCharacters(data, length = 5) {
  if (typeof data === 'string') {
    return data.slice(0, length);
  } else if (ArrayBuffer.isView(data)) {
    // Typed Arrays can have offsets into underlying buffer
    return getMagicString(data.buffer, data.byteOffset, length);
  } else if (data instanceof ArrayBuffer) {
    const byteOffset = 0;
    return getMagicString(data, byteOffset, length);
  }
  return '';
}

function getMagicString(arrayBuffer, byteOffset, length) {
  if (arrayBuffer.byteLength <= byteOffset + length) {
    return '';
  }
  const dataView = new DataView(arrayBuffer);
  let magic = '';
  for (let i = 0; i < length; i++) {
    magic += String.fromCharCode(dataView.getUint8(byteOffset + i));
  }
  return magic;
}


/***/ }),

/***/ "../loader-utils/src/lib/binary-utils/memory-copy-utils.js":
/*!*****************************************************************!*\
  !*** ../loader-utils/src/lib/binary-utils/memory-copy-utils.js ***!
  \*****************************************************************/
/*! exports provided: padTo4Bytes, getZeroOffsetArrayBuffer, copyArrayBuffer, copyToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padTo4Bytes", function() { return padTo4Bytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZeroOffsetArrayBuffer", function() { return getZeroOffsetArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayBuffer", function() { return copyArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToArray", function() { return copyToArray; });
function padTo4Bytes(byteLength) {
  return (byteLength + 3) & ~3;
}

// Copy a view of an ArrayBuffer into new ArrayBuffer with byteOffset = 0
function getZeroOffsetArrayBuffer(arrayBuffer, byteOffset, byteLength) {
  const subArray = byteLength
    ? new Uint8Array(arrayBuffer).subarray(byteOffset, byteOffset + byteLength)
    : new Uint8Array(arrayBuffer).subarray(byteOffset);
  const arrayCopy = new Uint8Array(subArray);
  return arrayCopy.buffer;
}

/* Creates a new Uint8Array based on two different ArrayBuffers
 * @private
 * @param {ArrayBuffers} buffer1 The first buffer.
 * @param {ArrayBuffers} buffer2 The second buffer.
 * @return {ArrayBuffers} The new ArrayBuffer created out of the two.
 */
function copyArrayBuffer(
  targetBuffer,
  sourceBuffer,
  byteOffset,
  byteLength = sourceBuffer.byteLength
) {
  const targetArray = new Uint8Array(targetBuffer, byteOffset, byteLength);
  const sourceArray = new Uint8Array(sourceBuffer);
  targetArray.set(sourceArray);
  return targetBuffer;
}

/**
 * Copy from source to target at the targetOffset
 *
 * @param {ArrayBuffer|any} source - The data to copy
 * @param {any} target - The destination to copy data into
 * @param {Number} targetOffset - The start offset into target to place the copied data
 *
 * @return {Number} Returns the new offset taking into account proper padding
 */
function copyToArray(source, target, targetOffset) {
  let sourceArray;

  if (source instanceof ArrayBuffer) {
    sourceArray = new Uint8Array(source);
  } else {
    // Pack buffer onto the big target array
    //
    // 'source.data.buffer' could be a view onto a larger buffer.
    // We MUST use this constructor to ensure the byteOffset and byteLength is
    // set to correct values from 'source.data' and not the underlying
    // buffer for target.set() to work properly.
    const srcByteOffset = source.byteOffset;
    const srcByteLength = source.byteLength;
    sourceArray = new Uint8Array(source.buffer, srcByteOffset, srcByteLength);
  }

  // Pack buffer onto the big target array
  target.set(sourceArray, targetOffset);

  return targetOffset + padTo4Bytes(sourceArray.byteLength);
}


/***/ }),

/***/ "../loader-utils/src/lib/create-worker.js":
/*!************************************************!*\
  !*** ../loader-utils/src/lib/create-worker.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createWorker; });
/* harmony import */ var _worker_utils_get_transfer_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-utils/get-transfer-list */ "../loader-utils/src/lib/worker-utils/get-transfer-list.js");
/* harmony import */ var _validate_loader_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate-loader-version */ "../loader-utils/src/lib/validate-loader-version.js");
/* eslint-disable no-restricted-globals */
/* global TextDecoder, self */




function createWorker(loader) {
  // TODO - explain when this happens? Just a sanity check? Throw an error or log a warning?
  if (typeof self === 'undefined') {
    return;
  }

  let requestId = 0;
  const parse = (arraybuffer, options = {}, url) =>
    new Promise((resolve, reject) => {
      const id = requestId++;

      const onMessage = ({data}) => {
        if (!data || data.id !== id) {
          // not ours
          return;
        }
        switch (data.type) {
          case 'parse-done':
            self.removeEventListener('message', onMessage);
            resolve(data.result);
            break;

          case 'parse-error':
            self.removeEventListener('message', onMessage);
            reject(data.message);
            break;

          default:
          // ignore
        }
      };
      self.addEventListener('message', onMessage);
      // Ask the main thread to decode data
      // @ts-ignore self is WorkerGlobalScope
      self.postMessage({type: 'parse', id, arraybuffer, options, url}, [arraybuffer]);
    });

  self.onmessage = async evt => {
    const {data} = evt;

    try {
      if (!isKnownMessage(data, loader.name)) {
        return;
      }

      Object(_validate_loader_version__WEBPACK_IMPORTED_MODULE_1__["validateLoaderVersion"])(loader, data.source.split('@')[1]);

      const {arraybuffer, byteOffset = 0, byteLength = 0, options = {}} = data;

      const result = await parseData({
        loader,
        arraybuffer,
        byteOffset,
        byteLength,
        options,
        context: {parse}
      });
      const transferList = Object(_worker_utils_get_transfer_list__WEBPACK_IMPORTED_MODULE_0__["getTransferList"])(result);
      // @ts-ignore self is WorkerGlobalScope
      self.postMessage({type: 'done', result}, transferList);
    } catch (error) {
      // @ts-ignore self is WorkerGlobalScope
      self.postMessage({type: 'error', message: error.message});
    }
  };
}

// TODO - Support byteOffset and byteLength (enabling parsing of embedded binaries without copies)
// TODO - Why not support async loader.parse* funcs here?
// TODO - Why not reuse a common function instead of reimplementing loader.parse* selection logic? Keeping loader small?
// TODO - Lack of appropriate parser functions can be detected when we create worker, no need to wait until parse
async function parseData({loader, arraybuffer, byteOffset, byteLength, options, context}) {
  let data;
  let parser;
  if (loader.parseSync || loader.parse) {
    data = arraybuffer;
    parser = loader.parseSync || loader.parse;
  } else if (loader.parseTextSync) {
    const textDecoder = new TextDecoder();
    data = textDecoder.decode(arraybuffer);
    parser = loader.parseTextSync;
  } else {
    throw new Error(`Could not load data with ${loader.name} loader`);
  }

  // TODO - proper merge in of loader options...
  options = {
    ...options,
    modules: (loader && loader.options && loader.options.modules) || {},
    worker: false
  };

  return await parser(data, {...options}, context, loader);
}

// Filter out noise messages sent to workers
function isKnownMessage(data, name) {
  return data && data.type === 'parse' && data.source && data.source.startsWith('loaders.gl');
}

/*
function checkMessage(evt, name) {
  switch (evt.data && evt.data.source) {
    // Ignore known noise event from react-dev-tools bridge, webpack build progress etc...
    case 'react-devtools-bridge':
    case 'react-devtools-content-script':
    case 'react-devtools-detector':
      return false;
    default:
      // fall through
  }

  switch (evt.data && evt.data.type) {
    case 'webpackProgress':
    case 'webpackOk':
      return false;
    default:
      // Enable to debug messages
      // const message = `${name.toLowerCase()}-worker: ignoring unknown message`;
      // console.log(message, evt.data, evt); // eslint-disable-line
      return false;
  }
}
*/


/***/ }),

/***/ "../loader-utils/src/lib/env-utils/assert.js":
/*!***************************************************!*\
  !*** ../loader-utils/src/lib/env-utils/assert.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assert; });
// Replacement for the external assert method to reduce bundle size
// Note: We don't use the second "message" argument in calling code,
// so no need to support it here
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'loader assertion failed.');
  }
}


/***/ }),

/***/ "../loader-utils/src/lib/env-utils/globals.js":
/*!****************************************************!*\
  !*** ../loader-utils/src/lib/env-utils/globals.js ***!
  \****************************************************/
/*! exports provided: self, window, global, document, isBrowser, isWorker, nodeVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "self", function() { return self_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return global_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWorker", function() { return isWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeVersion", function() { return nodeVersion; });
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// Purpose: include this in your module to avoids adding dependencies on
// micro modules like 'global' and 'is-browser';

// @ts-nocheck
/* eslint-disable no-restricted-globals */
/* global process, window, global, document, self, importScripts */
const globals = {
  self: typeof self !== 'undefined' && self,
  window: typeof window !== 'undefined' && window,
  global: typeof global !== 'undefined' && global,
  document: typeof document !== 'undefined' && document
};

const self_ = globals.self || globals.window || globals.global;
const window_ = globals.window || globals.self || globals.global;
const global_ = globals.global || globals.self || globals.window;
const document_ = globals.document || {};



const isBrowser =
  typeof process !== 'object' || String(process) !== '[object process]' || process.browser;

const isWorker = typeof importScripts === 'function';

// Extract node major version
const matches =
  typeof process !== 'undefined' && process.version && process.version.match(/v([0-9]*)/);
const nodeVersion = (matches && parseFloat(matches[1])) || 0;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../loader-utils/src/lib/iterator-utils/text-iterators.js":
/*!****************************************************************!*\
  !*** ../loader-utils/src/lib/iterator-utils/text-iterators.js ***!
  \****************************************************************/
/*! exports provided: makeTextDecoderIterator, makeTextEncoderIterator, makeLineIterator, makeNumberedLineIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeTextDecoderIterator", function() { return makeTextDecoderIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeTextEncoderIterator", function() { return makeTextEncoderIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeLineIterator", function() { return makeLineIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeNumberedLineIterator", function() { return makeNumberedLineIterator; });
// TextDecoder iterators
// TextDecoder will keep any partial undecoded bytes between calls to `decode`

/* global TextDecoder, TextEncoder */

async function* makeTextDecoderIterator(arrayBufferIterator, options) {
  const textDecoder = new TextDecoder(options);
  for await (const arrayBuffer of arrayBufferIterator) {
    yield typeof arrayBuffer === 'string'
      ? arrayBuffer
      : textDecoder.decode(arrayBuffer, {stream: true});
  }
}

// TextEncoder iterator
// TODO - this is not useful unless min chunk size is given
// TextEncoder will keep any partial undecoded bytes between calls to `encode`
// If iterator does not yield strings, assume arrayBuffer and return unencoded

async function* makeTextEncoderIterator(textIterator, options) {
  const textEncoder = new TextEncoder();
  for await (const text of textIterator) {
    yield typeof text === 'string' ? textEncoder.encode(text) : text;
  }
}

/**
 * @param textIterator async iterable yielding strings
 * @returns an async iterable over lines
 * See http://2ality.com/2018/04/async-iter-nodejs.html
 */

async function* makeLineIterator(textIterator) {
  let previous = '';
  for await (const textChunk of textIterator) {
    previous += textChunk;
    let eolIndex;
    while ((eolIndex = previous.indexOf('\n')) >= 0) {
      // line includes the EOL
      const line = previous.slice(0, eolIndex + 1);
      previous = previous.slice(eolIndex + 1);
      yield line;
    }
  }

  if (previous.length > 0) {
    yield previous;
  }
}

/**
 * @param lineIterator async iterable yielding lines
 * @returns async iterable yielding numbered lines
 *
 * See http://2ality.com/2018/04/async-iter-nodejs.html
 */
async function* makeNumberedLineIterator(lineIterator) {
  let counter = 1;
  for await (const line of lineIterator) {
    yield {counter, line};
    counter++;
  }
}


/***/ }),

/***/ "../loader-utils/src/lib/library-utils/library-utils.js":
/*!**************************************************************!*\
  !*** ../loader-utils/src/lib/library-utils/library-utils.js ***!
  \**************************************************************/
/*! exports provided: loadLibrary, getLibraryUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLibrary", function() { return loadLibrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLibraryUrl", function() { return getLibraryUrl; });
/* harmony import */ var _env_utils_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env-utils/globals */ "../loader-utils/src/lib/env-utils/globals.js");
/* harmony import */ var _require_utils_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./require-utils.node */ 0);
/* harmony import */ var _require_utils_node__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_require_utils_node__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env_utils_assert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env-utils/assert */ "../loader-utils/src/lib/env-utils/assert.js");
/* global fetch, document */




// TODO - unpkg.com doesn't seem to have a `latest` specifier for alpha releases...
const LATEST = 'beta';

// __VERSION__ is injected by babel-plugin-version-inline
// @ts-ignore TS2304: Cannot find name '__VERSION__'.
const VERSION =  true ? "2.2.8" : undefined;

const loadLibraryPromises = {}; // promises

// Dynamically loads a library ("module")
async function loadLibrary(libraryUrl, moduleName = null, options = {}) {
  if (moduleName) {
    libraryUrl = getLibraryUrl(libraryUrl, moduleName, options);
  }

  // Ensure libraries are only loaded once
  loadLibraryPromises[libraryUrl] =
    loadLibraryPromises[libraryUrl] || loadLibraryFromFile(libraryUrl);
  return await loadLibraryPromises[libraryUrl];
}

// TODO - sort out how to resolve paths for main/worker and dev/prod
function getLibraryUrl(library, moduleName, options) {
  // Allow application to import and supply libraries through `options.modules`
  const modules = options.modules || {};
  if (modules[library]) {
    return modules[library];
  }

  // Load from local files, not from CDN scripts in Node.js
  // TODO - needs to locate the modules directory when installed!
  if (!_env_utils_globals__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
    return `modules/${moduleName}/dist/libs/${library}`;
  }

  // In browser, load from external scripts
  if (options.CDN) {
    Object(_env_utils_assert__WEBPACK_IMPORTED_MODULE_2__["default"])(options.CDN.startsWith('http'));
    return `${options.CDN}/${moduleName}@${VERSION}/dist/libs/${library}`;
  }

  // TODO - loading inside workers requires paths relative to worker script location...
  if (_env_utils_globals__WEBPACK_IMPORTED_MODULE_0__["isWorker"]) {
    return `../src/libs/${library}`;
  }

  return `modules/${moduleName}/src/libs/${library}`;
}

async function loadLibraryFromFile(libraryUrl) {
  if (libraryUrl.endsWith('wasm')) {
    const response = await fetch(libraryUrl);
    return await response.arrayBuffer();
  }

  if (!_env_utils_globals__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
    return Object(_require_utils_node__WEBPACK_IMPORTED_MODULE_1__["requireFromFile"])(libraryUrl);
  }
  if (_env_utils_globals__WEBPACK_IMPORTED_MODULE_0__["isWorker"]) {
    /* global importScripts */
    return importScripts(libraryUrl);
  }
  // TODO - fix - should be more secure than string parsing since observes CORS
  // if (isBrowser) {
  //   return await loadScriptFromFile(libraryUrl);
  // }

  const response = await fetch(libraryUrl);
  const scriptSource = await response.text();
  return loadLibraryFromString(scriptSource, libraryUrl);
}

/*
async function loadScriptFromFile(libraryUrl) {
  const script = document.createElement('script');
  script.src = libraryUrl;
  return await new Promise((resolve, reject) => {
    script.onload = data => {
      resolve(data);
    };
    script.onerror = reject;
  });
}
*/

// TODO - Needs security audit...
//  - Raw eval call
//  - Potentially bypasses CORS
// Upside is that this separates fetching and parsing
// we could create a`LibraryLoader` or`ModuleLoader`
function loadLibraryFromString(scriptSource, id) {
  if (!_env_utils_globals__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
    return Object(_require_utils_node__WEBPACK_IMPORTED_MODULE_1__["requireFromString"])(scriptSource, id);
  }

  if (_env_utils_globals__WEBPACK_IMPORTED_MODULE_0__["isWorker"]) {
    // Use lvalue trick to make eval run in global scope
    eval.call(_env_utils_globals__WEBPACK_IMPORTED_MODULE_0__["global"], scriptSource); // eslint-disable-line no-eval
    // https://stackoverflow.com/questions/9107240/1-evalthis-vs-evalthis-in-javascript
    // http://perfectionkills.com/global-eval-what-are-the-options/
    return null;
  }

  const script = document.createElement('script');
  script.id = id;
  // most browsers like a separate text node but some throw an error. The second method covers those.
  try {
    script.appendChild(document.createTextNode(scriptSource));
  } catch (e) {
    script.text = scriptSource;
  }
  document.body.appendChild(script);
  return null;
}

// TODO - technique for module injection into worker, from THREE.DracoLoader...
/*
function combineWorkerWithLibrary(worker, jsContent) {
  var fn = wWorker.toString();
  var body = [
    '// injected',
    jsContent,
    '',
    '// worker',
    fn.substring(fn.indexOf('{') + 1, fn.lastIndexOf('}'))
  ].join('\n');
  this.workerSourceURL = URL.createObjectURL(new Blob([body]));
}
*/


/***/ }),

/***/ "../loader-utils/src/lib/parser-utils/parse-json.js":
/*!**********************************************************!*\
  !*** ../loader-utils/src/lib/parser-utils/parse-json.js ***!
  \**********************************************************/
/*! exports provided: parseJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseJSON", function() { return parseJSON; });
/* harmony import */ var _binary_utils_get_first_characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../binary-utils/get-first-characters */ "../loader-utils/src/lib/binary-utils/get-first-characters.js");


// Minimal JSON parser with a meaningful error message
function parseJSON(string) {
  try {
    return JSON.parse(string);
  } catch (_) {
    throw new Error(`Failed to parse JSON from data starting with "${Object(_binary_utils_get_first_characters__WEBPACK_IMPORTED_MODULE_0__["getFirstCharacters"])(string)}"`);
  }
}


/***/ }),

/***/ "../loader-utils/src/lib/path-utils/file-aliases.js":
/*!**********************************************************!*\
  !*** ../loader-utils/src/lib/path-utils/file-aliases.js ***!
  \**********************************************************/
/*! exports provided: setPathPrefix, getPathPrefix, addAliases, resolvePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPathPrefix", function() { return setPathPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPathPrefix", function() { return getPathPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAliases", function() { return addAliases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvePath", function() { return resolvePath; });
// Simple file alias mechanisms for tests.

let pathPrefix = '';
const fileAliases = {};

/*
 * Set a relative path prefix
 */
function setPathPrefix(prefix) {
  pathPrefix = prefix;
}

function getPathPrefix() {
  return pathPrefix;
}

// Note: addAliases are an experimental export,
function addAliases(aliases) {
  Object.assign(fileAliases, aliases);
}

function resolvePath(filename) {
  for (const alias in fileAliases) {
    if (filename.startsWith(alias)) {
      const replacement = fileAliases[alias];
      filename = filename.replace(alias, replacement);
    }
  }
  if (!filename.startsWith('http://') && !filename.startsWith('https://')) {
    filename = `${pathPrefix}${filename}`;
  }
  return filename;
}


/***/ }),

/***/ "../loader-utils/src/lib/path-utils/path.js":
/*!**************************************************!*\
  !*** ../loader-utils/src/lib/path-utils/path.js ***!
  \**************************************************/
/*! exports provided: dirname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return dirname; });
// Beginning of a minimal implementation of the Node.js path API, that doesn't pull in big polyfills.
function dirname(url) {
  const slashIndex = url && url.lastIndexOf('/');
  return slashIndex >= 0 ? url.substr(0, slashIndex) : '';
}


/***/ }),

/***/ "../loader-utils/src/lib/request-utils/request-scheduler.js":
/*!******************************************************************!*\
  !*** ../loader-utils/src/lib/request-utils/request-scheduler.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestScheduler; });
/* harmony import */ var _probe_gl_stats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @probe.gl/stats */ "../../node_modules/@probe.gl/stats/dist/esm/index.js");
// TODO - this should move to core when test cases are more complete

/* global setTimeout */


const STAT_QUEUED_REQUESTS = 'Queued Requests';
const STAT_ACTIVE_REQUESTS = 'Active Requests';
const STAT_CANCELLED_REQUESTS = 'Cancelled Requests';
const STAT_QUEUED_REQUESTS_EVER = 'Queued Requests Ever';
const STAT_ACTIVE_REQUESTS_EVER = 'Active Requests Ever';

const DEFAULT_PROPS = {
  id: 'request-scheduler',
  // Specifies if the request scheduler should throttle incoming requests, mainly for comparative testing
  throttleRequests: true,
  // The maximum number of simultaneous active requests. Un-throttled requests do not observe this limit.
  maxRequests: 6
};

// TODO - Track requests globally, across multiple servers
class RequestScheduler {
  constructor(props = {}) {
    this.props = {...DEFAULT_PROPS, ...props};

    // Tracks the number of active requests and prioritizes/cancels queued requests.
    this.requestQueue = [];
    this.activeRequestCount = 0;
    this.requestMap = new Map();

    // Returns the statistics used by the request scheduler.
    this.stats = new _probe_gl_stats__WEBPACK_IMPORTED_MODULE_0__["Stats"]({id: props.id});
    this.stats.get(STAT_QUEUED_REQUESTS);
    this.stats.get(STAT_ACTIVE_REQUESTS);
    this.stats.get(STAT_CANCELLED_REQUESTS);
    this.stats.get(STAT_QUEUED_REQUESTS_EVER);
    this.stats.get(STAT_ACTIVE_REQUESTS_EVER);

    this._deferredUpdate = null;
  }

  // Called by an application that wants to issue a request, without having it deeply queued
  // Parameter `getPriority` will be called when request "slots" open up,
  //    allowing the caller to update priority or cancel the request
  //    Highest priority executes first, priority < 0 cancels the request
  // Returns: a promise that resolves to a request token when the request can be issued without queueing,
  //    or `false` if the request has been cancelled (by getPriority)
  scheduleRequest(handle, getPriority = () => 0) {
    // Allows throttling to be disabled
    if (!this.props.throttleRequests) {
      return Promise.resolve({done: () => {}});
    }

    // dedupe
    if (this.requestMap.has(handle)) {
      return this.requestMap.get(handle);
    }

    const request = {handle, getPriority};
    const promise = new Promise(resolve => {
      request.resolve = resolve;
      return request;
    });

    this.requestQueue.push(request);
    this.requestMap.set(handle, promise);
    this._issueNewRequests();
    return promise;
  }

  // PRIVATE

  _issueRequest(request) {
    const {handle, resolve} = request;
    let isDone = false;

    const done = () => {
      // can only be called once
      if (!isDone) {
        isDone = true;

        // Stop tracking a request - it has completed, failed, cancelled etc
        this.requestMap.delete(handle);
        this.activeRequestCount--;
        // A slot just freed up, see if any queued requests are waiting
        this._issueNewRequests();
      }
    };

    // Track this request
    this.activeRequestCount++;

    return resolve ? resolve({done}) : Promise.resolve({done});
  }

  // We check requests asynchronously, to prevent multiple updates
  _issueNewRequests() {
    if (!this._deferredUpdate) {
      this._deferredUpdate = setTimeout(() => this._issueNewRequestsAsync(), 0);
    }
  }

  // Refresh all requests and
  _issueNewRequestsAsync() {
    this._deferredUpdate = null;

    const freeSlots = Math.max(this.props.maxRequests - this.activeRequestCount, 0);

    if (freeSlots === 0) {
      return;
    }

    this._updateAllRequests();

    // Resolve pending promises for the top-priority requests
    for (let i = 0; i < freeSlots; ++i) {
      if (this.requestQueue.length > 0) {
        const request = this.requestQueue.shift();
        this._issueRequest(request);
      }
    }

    // Uncomment to debug
    // console.log(`${freeSlots} free slots, ${this.requestQueue.length} queued requests`);
  }

  // Ensure all requests have updated priorities, and that no longer valid requests are cancelled
  _updateAllRequests() {
    const requestQueue = this.requestQueue;
    for (let i = 0; i < requestQueue.length; ++i) {
      const request = requestQueue[i];
      if (!this._updateRequest(request)) {
        // Remove the element and make sure to adjust the counter to account for shortened array
        requestQueue.splice(i, 1);
        this.requestMap.delete(request.handle);
        i--;
      }
    }

    // Sort the remaining requests based on priority
    requestQueue.sort((a, b) => a.priority - b.priority);
  }

  // Update a single request by calling the callback
  _updateRequest(request) {
    request.priority = request.getPriority(request.handle); // eslint-disable-line callback-return

    // by returning a negative priority, the callback cancels the request
    if (request.priority < 0) {
      request.resolve(null);
      return false;
    }
    return true;
  }
}


/***/ }),

/***/ "../loader-utils/src/lib/validate-loader-version.js":
/*!**********************************************************!*\
  !*** ../loader-utils/src/lib/validate-loader-version.js ***!
  \**********************************************************/
/*! exports provided: validateLoaderVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateLoaderVersion", function() { return validateLoaderVersion; });
/* harmony import */ var _env_utils_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env-utils/assert */ "../loader-utils/src/lib/env-utils/assert.js");


// __VERSION__ is injected by babel-plugin-version-inline

// @ts-ignore TS2304: Cannot find name '__VERSION__'.
const VERSION =  true ? "2.2.8" : undefined;

// Returns `true` if the two versions are compatible
function validateLoaderVersion(loader, coreVersion = VERSION) {
  Object(_env_utils_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(loader, 'no loader provided');

  let loaderVersion = loader.version;
  if (!coreVersion || !loaderVersion) {
    return;
  }

  coreVersion = parseVersion(coreVersion);
  loaderVersion = parseVersion(loaderVersion);

  // TODO enable when fix the __version__ injection
  // assert(
  //   coreVersion.major === loaderVersion.major && coreVersion.minor <= loaderVersion.minor,
  //   `loader: ${loader.name} is not compatible. ${coreVersion.major}.${
  //     coreVersion.minor
  //   }+ is required.`
  // );
}

function parseVersion(version) {
  const parts = version.split('.').map(Number);
  return {major: parts[0], minor: parts[1]};
}


/***/ }),

/***/ "../loader-utils/src/lib/worker-utils/get-transfer-list.js":
/*!*****************************************************************!*\
  !*** ../loader-utils/src/lib/worker-utils/get-transfer-list.js ***!
  \*****************************************************************/
/*! exports provided: getTransferList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransferList", function() { return getTransferList; });
// NOTE - there is a copy of this function is both in core and loader-utils
// core does not need all the utils in loader-utils, just this one.

/* global MessagePort, ImageBitmap, OffscreenCanvas */

// Returns an array of Transferrable objects that can be used with postMessage
// https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage
function getTransferList(object, recursive = true, transfers) {
  // Make sure that items in the transfer list is unique
  const transfersSet = transfers || new Set();

  if (!object) {
    // ignore
  } else if (isTransferable(object)) {
    transfersSet.add(object);
  } else if (isTransferable(object.buffer)) {
    // Typed array
    transfersSet.add(object.buffer);
  } else if (ArrayBuffer.isView(object)) {
    // object is a TypeArray viewing into a SharedArrayBuffer (not transferable)
    // Do not iterate through the content in this case
  } else if (recursive && typeof object === 'object') {
    for (const key in object) {
      // Avoid perf hit - only go one level deep
      getTransferList(object[key], recursive, transfersSet);
    }
  }

  // If transfers is defined, is internal recursive call
  // Otherwise it's called by the user
  return transfers === undefined ? Array.from(transfersSet) : null;
}

// https://developer.mozilla.org/en-US/docs/Web/API/Transferable
function isTransferable(object) {
  if (!object) {
    return false;
  }
  if (object instanceof ArrayBuffer) {
    return true;
  }
  if (typeof MessagePort !== 'undefined' && object instanceof MessagePort) {
    return true;
  }
  if (typeof ImageBitmap !== 'undefined' && object instanceof ImageBitmap) {
    return true;
  }
  if (typeof OffscreenCanvas !== 'undefined' && object instanceof OffscreenCanvas) {
    return true;
  }
  return false;
}


/***/ }),

/***/ "./src/bundle.js":
/*!***********************!*\
  !*** ./src/bundle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* global window, global */
const moduleExports = __webpack_require__(/*! ./index */ "./src/index.js");
const _global = typeof window === 'undefined' ? global : window;
// @ts-ignore
_global.loaders = _global.loaders || {};
// @ts-ignore
module.exports = Object.assign(_global.loaders, moduleExports);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: fetchFile, readFileSync, writeFile, writeFileSync, setLoaderOptions, registerLoaders, parse, parseSync, parseInBatches, selectLoader, load, loadInBatches, encode, encodeSync, encodeInBatches, save, saveSync, isPromise, isIterable, isAsyncIterable, isIterator, isResponse, isReadableStream, isWritableStream, toArrayBuffer, makeIterator, forEach, makeTextDecoderIterator, makeTextEncoderIterator, makeLineIterator, makeNumberedLineIterator, concatenateChunksAsync, isBrowser, isWorker, self, window, global, document, assert, setPathPrefix, getPathPrefix, resolvePath, RequestScheduler, _WorkerThread, _WorkerFarm, _WorkerPool, _fetchProgress, _unregisterLoaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_fetch_fetch_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/fetch/fetch-file */ "./src/lib/fetch/fetch-file.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchFile", function() { return _lib_fetch_fetch_file__WEBPACK_IMPORTED_MODULE_0__["fetchFile"]; });

/* harmony import */ var _lib_fetch_read_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/fetch/read-file */ "./src/lib/fetch/read-file.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readFileSync", function() { return _lib_fetch_read_file__WEBPACK_IMPORTED_MODULE_1__["readFileSync"]; });

/* harmony import */ var _lib_fetch_write_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/fetch/write-file */ "./src/lib/fetch/write-file.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeFile", function() { return _lib_fetch_write_file__WEBPACK_IMPORTED_MODULE_2__["writeFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeFileSync", function() { return _lib_fetch_write_file__WEBPACK_IMPORTED_MODULE_2__["writeFileSync"]; });

/* harmony import */ var _lib_api_set_loader_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/api/set-loader-options */ "./src/lib/api/set-loader-options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLoaderOptions", function() { return _lib_api_set_loader_options__WEBPACK_IMPORTED_MODULE_3__["setLoaderOptions"]; });

/* harmony import */ var _lib_api_register_loaders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/api/register-loaders */ "./src/lib/api/register-loaders.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerLoaders", function() { return _lib_api_register_loaders__WEBPACK_IMPORTED_MODULE_4__["registerLoaders"]; });

/* harmony import */ var _lib_api_parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/api/parse */ "./src/lib/api/parse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _lib_api_parse__WEBPACK_IMPORTED_MODULE_5__["parse"]; });

/* harmony import */ var _lib_api_parse_sync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/api/parse-sync */ "./src/lib/api/parse-sync.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseSync", function() { return _lib_api_parse_sync__WEBPACK_IMPORTED_MODULE_6__["parseSync"]; });

/* harmony import */ var _lib_api_parse_in_batches__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/api/parse-in-batches */ "./src/lib/api/parse-in-batches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseInBatches", function() { return _lib_api_parse_in_batches__WEBPACK_IMPORTED_MODULE_7__["parseInBatches"]; });

/* harmony import */ var _lib_api_select_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/api/select-loader */ "./src/lib/api/select-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectLoader", function() { return _lib_api_select_loader__WEBPACK_IMPORTED_MODULE_8__["selectLoader"]; });

/* harmony import */ var _lib_api_load__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/api/load */ "./src/lib/api/load.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "load", function() { return _lib_api_load__WEBPACK_IMPORTED_MODULE_9__["load"]; });

/* harmony import */ var _lib_api_load_in_batches__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/api/load-in-batches */ "./src/lib/api/load-in-batches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadInBatches", function() { return _lib_api_load_in_batches__WEBPACK_IMPORTED_MODULE_10__["loadInBatches"]; });

/* harmony import */ var _lib_api_encode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/api/encode */ "./src/lib/api/encode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return _lib_api_encode__WEBPACK_IMPORTED_MODULE_11__["encode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encodeSync", function() { return _lib_api_encode__WEBPACK_IMPORTED_MODULE_11__["encodeSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encodeInBatches", function() { return _lib_api_encode__WEBPACK_IMPORTED_MODULE_11__["encodeInBatches"]; });

/* harmony import */ var _lib_api_save__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/api/save */ "./src/lib/api/save.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "save", function() { return _lib_api_save__WEBPACK_IMPORTED_MODULE_12__["save"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveSync", function() { return _lib_api_save__WEBPACK_IMPORTED_MODULE_12__["saveSync"]; });

/* harmony import */ var _javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./javascript-utils/is-type */ "./src/javascript-utils/is-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_13__["isPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return _javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_13__["isIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAsyncIterable", function() { return _javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_13__["isAsyncIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterator", function() { return _javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_13__["isIterator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isResponse", function() { return _javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_13__["isResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadableStream", function() { return _javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_13__["isReadableStream"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWritableStream", function() { return _javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_13__["isWritableStream"]; });

/* harmony import */ var _javascript_utils_binary_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./javascript-utils/binary-utils */ "./src/javascript-utils/binary-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArrayBuffer", function() { return _javascript_utils_binary_utils__WEBPACK_IMPORTED_MODULE_14__["toArrayBuffer"]; });

/* harmony import */ var _iterator_utils_make_iterator_make_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./iterator-utils/make-iterator/make-iterator */ "./src/iterator-utils/make-iterator/make-iterator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeIterator", function() { return _iterator_utils_make_iterator_make_iterator__WEBPACK_IMPORTED_MODULE_15__["makeIterator"]; });

/* harmony import */ var _iterator_utils_async_iteration__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./iterator-utils/async-iteration */ "./src/iterator-utils/async-iteration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _iterator_utils_async_iteration__WEBPACK_IMPORTED_MODULE_16__["forEach"]; });

/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeTextDecoderIterator", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["makeTextDecoderIterator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeTextEncoderIterator", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["makeTextEncoderIterator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeLineIterator", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["makeLineIterator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeNumberedLineIterator", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["makeNumberedLineIterator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatenateChunksAsync", function() { return _iterator_utils_async_iteration__WEBPACK_IMPORTED_MODULE_16__["concatenateChunksAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["isBrowser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWorker", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["isWorker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "self", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["self"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["window"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "global", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["global"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "document", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["document"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["assert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPathPrefix", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["setPathPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPathPrefix", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["getPathPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvePath", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["resolvePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestScheduler", function() { return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_17__["RequestScheduler"]; });

/* harmony import */ var _worker_utils_worker_thread__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./worker-utils/worker-thread */ "./src/worker-utils/worker-thread.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_WorkerThread", function() { return _worker_utils_worker_thread__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _worker_utils_worker_farm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./worker-utils/worker-farm */ "./src/worker-utils/worker-farm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_WorkerFarm", function() { return _worker_utils_worker_farm__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _worker_utils_worker_pool__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./worker-utils/worker-pool */ "./src/worker-utils/worker-pool.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_WorkerPool", function() { return _worker_utils_worker_pool__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _lib_progress_fetch_progress__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/progress/fetch-progress */ "./src/lib/progress/fetch-progress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_fetchProgress", function() { return _lib_progress_fetch_progress__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_unregisterLoaders", function() { return _lib_api_register_loaders__WEBPACK_IMPORTED_MODULE_4__["_unregisterLoaders"]; });

// FILE READING AND WRITING




// CONFIGURATION



// LOADING (READING + PARSING)








// ENCODING (ENCODING AND WRITING)



// "JAVASCRIPT" UTILS




// ITERATOR UTILS







// CORE UTILS SHARED WITH LOADERS (RE-EXPORTED FROM LOADER-UTILS)





// EXPERIMENTAL






// FOR TESTING



/***/ }),

/***/ "./src/iterator-utils/async-iteration.js":
/*!***********************************************!*\
  !*** ./src/iterator-utils/async-iteration.js ***!
  \***********************************************/
/*! exports provided: forEach, concatenateChunksAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatenateChunksAsync", function() { return concatenateChunksAsync; });
/* harmony import */ var _javascript_utils_memory_copy_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../javascript-utils/memory-copy-utils */ "./src/javascript-utils/memory-copy-utils.js");


// GENERAL UTILITIES

/**
 * Iterate over async iterator, without resetting iterator if end is not reached
 * - forEach intentionally does not reset iterator if exiting loop prematurely
 *   so that iteration can continue in a second loop
 * - It is recommended to use a standard for-await as last loop to ensure
 *   iterator gets properly reset
 *
 * TODO - optimize using sync iteration if argument is an Iterable?
 *
 * @param iterator
 * @param visitor
 */
async function forEach(iterator, visitor) {
  // eslint-disable-next-line
  while (true) {
    const {done, value} = await iterator.next();
    if (done) {
      iterator.return();
      return;
    }
    const cancel = visitor(value);
    if (cancel) {
      return;
    }
  }
}

// Breaking big data into iterable chunks, concatenating iterable chunks into big data objects

/**
 * Concatenates all data chunks yielded by an (async) iterator
 * Supports strings and ArrayBuffers
 *
 * This function can e.g. be used to enable atomic parsers to work on (async) iterator inputs
 */
async function concatenateChunksAsync(asyncIterator) {
  let arrayBuffer = new ArrayBuffer(0);
  let string = '';
  for await (const chunk of asyncIterator) {
    if (typeof chunk === 'string') {
      string += chunk;
    } else {
      arrayBuffer = Object(_javascript_utils_memory_copy_utils__WEBPACK_IMPORTED_MODULE_0__["concatenateArrayBuffers"])(arrayBuffer, chunk);
    }
  }
  return string || arrayBuffer;
}


/***/ }),

/***/ "./src/iterator-utils/make-iterator/array-buffer-iterator.js":
/*!*******************************************************************!*\
  !*** ./src/iterator-utils/make-iterator/array-buffer-iterator.js ***!
  \*******************************************************************/
/*! exports provided: makeArrayBufferIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeArrayBufferIterator", function() { return makeArrayBufferIterator; });
function* makeArrayBufferIterator(arrayBuffer, options = {}) {
  const {chunkSize = 256 * 1024} = options;

  let byteOffset = 0;

  while (byteOffset < arrayBuffer.byteLength) {
    // Create a chunk of the right size
    const chunkByteLength = Math.min(arrayBuffer.byteLength - byteOffset, chunkSize);
    const chunk = new ArrayBuffer(chunkByteLength);

    // Copy data from the big chunk
    const sourceArray = new Uint8Array(arrayBuffer, byteOffset, chunkByteLength);
    const chunkArray = new Uint8Array(chunk);
    chunkArray.set(sourceArray);

    // yield the chunk
    byteOffset += chunkByteLength;
    yield chunk;
  }
}


/***/ }),

/***/ "./src/iterator-utils/make-iterator/blob-iterator.js":
/*!***********************************************************!*\
  !*** ./src/iterator-utils/make-iterator/blob-iterator.js ***!
  \***********************************************************/
/*! exports provided: makeBlobIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeBlobIterator", function() { return makeBlobIterator; });
/* global FileReader */

const DEFAULT_CHUNK_SIZE = 1024 * 1024; // 1MB — biggest value that keeps UI responsive

async function* makeBlobIterator(file, options = {}) {
  const chunkSize = options.chunkSize || DEFAULT_CHUNK_SIZE;

  let offset = 0;
  while (offset < file.size) {
    const end = offset + chunkSize;

    // The trick when reading File objects is to read successive "slices" of the File
    // Per spec https://w3c.github.io/FileAPI/, slicing a File should only update the start and end fields
    // Actually reading from file should happen in `readAsArrayBuffer` (and as far we can tell it does)
    const slice = file.slice(offset, end);

    const chunk = await readFileSlice(slice);

    offset = end;
    yield chunk;
  }
}

async function readFileSlice(slice) {
  return await new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onloadend = event => resolve(event.target.result);
    fileReader.onerror = error => reject(error);
    fileReader.readAsArrayBuffer(slice);
  });
}


/***/ }),

/***/ "./src/iterator-utils/make-iterator/make-iterator.js":
/*!***********************************************************!*\
  !*** ./src/iterator-utils/make-iterator/make-iterator.js ***!
  \***********************************************************/
/*! exports provided: makeIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeIterator", function() { return makeIterator; });
/* harmony import */ var _string_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string-iterator */ "./src/iterator-utils/make-iterator/string-iterator.js");
/* harmony import */ var _array_buffer_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array-buffer-iterator */ "./src/iterator-utils/make-iterator/array-buffer-iterator.js");
/* harmony import */ var _blob_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blob-iterator */ "./src/iterator-utils/make-iterator/blob-iterator.js");
/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");
/* harmony import */ var _stream_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stream-iterator */ "./src/iterator-utils/make-iterator/stream-iterator.js");
/* harmony import */ var _javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../javascript-utils/is-type */ "./src/javascript-utils/is-type.js");







/**
 * Returns an iterator that breaks its input into chunks and yields them one-by-one.
 *
 * @param data a big `ArrayBuffer`, `Blob` or string, or a stream.
 * @param {object} options
 * @param {number} [options.chunkSize]  max number of bytes per chunk. chunkSize is ignored for streams.
 * @returns iterator or async iterator that yields chunks of specified size.
 *
 * This function can e.g. be used to enable data sources that can only be read atomically
 * (such as `Blob` and `File` via `FileReader`) to still be parsed in batches.
 */
function makeIterator(data, options = {}) {
  if (typeof data === 'string') {
    // Note: Converts string chunks to binary
    return Object(_string_iterator__WEBPACK_IMPORTED_MODULE_0__["makeStringIterator"])(data, options);
  }
  if (data instanceof ArrayBuffer) {
    return Object(_array_buffer_iterator__WEBPACK_IMPORTED_MODULE_1__["makeArrayBufferIterator"])(data, options);
  }
  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_5__["isBlob"])(data)) {
    return Object(_blob_iterator__WEBPACK_IMPORTED_MODULE_2__["makeBlobIterator"])(data, options);
  }
  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_5__["isReadableStream"])(data)) {
    return Object(_stream_iterator__WEBPACK_IMPORTED_MODULE_4__["makeStreamIterator"])(data);
  }
  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_5__["isResponse"])(data)) {
    return Object(_stream_iterator__WEBPACK_IMPORTED_MODULE_4__["makeStreamIterator"])(data.body);
  }
  return Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_3__["assert"])(false);
}


/***/ }),

/***/ "./src/iterator-utils/make-iterator/stream-iterator.js":
/*!*************************************************************!*\
  !*** ./src/iterator-utils/make-iterator/stream-iterator.js ***!
  \*************************************************************/
/*! exports provided: makeStreamIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStreamIterator", function() { return makeStreamIterator; });
/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");


function makeStreamIterator(stream) {
  // Hacky test for node version to ensure we don't call bad polyfills
  if (_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] || _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["nodeVersion"] >= 10) {
    // NODE 10+: stream is an asyncIterator
    if (typeof stream[Symbol.asyncIterator] === 'function') {
      return stream;
    }

    // WhatWG: stream is supposed to have a `getIterator` method
    if (typeof stream.getIterator === 'function') {
      return stream.getIterator();
    }
  }

  return _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] ? makeBrowserStreamIterator(stream) : makeNodeStreamIterator(stream);
}

// BROWSER IMPLEMENTATION
// See https://jakearchibald.com/2017/async-iterators-and-generators/#making-streams-iterate

async function* makeBrowserStreamIterator(stream) {
  // In the brower, we first need to get a lock on the stream
  const reader = stream.getReader();

  try {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      // Read from the stream
      const {done, value} = await reader.read();
      // Exit if we're done
      if (done) {
        return;
      }
      // Else yield the chunk
      yield value;
    }
  } catch (error) {
    // TODO - examples makes it look like this should always be called,
    // but that generates exceptions so only call it if we do not reach the end
    reader.releaseLock();
  }
}

// NODE <10 IMPLEMENTATION
// See https://github.com/bustle/streaming-iterables, MIT license

async function* makeNodeStreamIterator(stream) {
  // Node createStream will return promises to handle http requests
  stream = await stream;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const data = stream.read();
    if (data !== null) {
      yield data;
      // eslint-disable-next-line no-continue
      continue;
    }
    if (stream._readableState.ended) {
      return;
    }
    await onceReadable(stream);
  }
}

async function onceReadable(stream) {
  return new Promise(resolve => {
    stream.once('readable', resolve);
  });
}


/***/ }),

/***/ "./src/iterator-utils/make-iterator/string-iterator.js":
/*!*************************************************************!*\
  !*** ./src/iterator-utils/make-iterator/string-iterator.js ***!
  \*************************************************************/
/*! exports provided: makeStringIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStringIterator", function() { return makeStringIterator; });
/* global TextEncoder */

/**
 * Returns an iterator that breaks a big string into chunks and yields them one-by-one
 */
function* makeStringIterator(string, options = {}) {
  const {chunkSize = 256 * 1024} = options;

  let offset = 0;
  const textEncoder = new TextEncoder();
  while (offset < string.length) {
    // Create a chunk of the right size
    const chunkLength = Math.min(string.length - offset, chunkSize);
    const chunk = string.slice(offset, offset + chunkLength);
    offset += chunkLength;

    // yield an ArrayBuffer chunk
    yield textEncoder.encode(chunk);
  }
}


/***/ }),

/***/ "./src/javascript-utils/binary-utils.js":
/*!**********************************************!*\
  !*** ./src/javascript-utils/binary-utils.js ***!
  \**********************************************/
/*! exports provided: toArrayBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArrayBuffer", function() { return toArrayBuffer; });
/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");
/* harmony import */ var _node_utils_to_array_buffer_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node/utils/to-array-buffer.node */ 3);
/* harmony import */ var _node_utils_to_array_buffer_node__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_utils_to_array_buffer_node__WEBPACK_IMPORTED_MODULE_1__);
/* global TextEncoder */



function toArrayBuffer(data) {
  if (_node_utils_to_array_buffer_node__WEBPACK_IMPORTED_MODULE_1__["toArrayBuffer"]) {
    // TODO - per docs we should just be able to call buffer.buffer, but there are issues
    data = Object(_node_utils_to_array_buffer_node__WEBPACK_IMPORTED_MODULE_1__["toArrayBuffer"])(data);
  }

  if (data instanceof ArrayBuffer) {
    return data;
  }

  // Careful - Node Buffers will look like ArrayBuffers (keep after isBuffer)
  if (ArrayBuffer.isView(data)) {
    return data.buffer;
  }

  if (typeof data === 'string') {
    const text = data;
    const uint8Array = new TextEncoder().encode(text);
    return uint8Array.buffer;
  }

  return Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(false);
}

// export function blobToArrayBuffer(blob) {
//   return new Promise((resolve, reject) => {
//     let arrayBuffer;
//     const fileReader = new FileReader();
//     fileReader.onload = event => {
//       arrayBuffer = event.target.result;
//     };
//     fileReader.onloadend = event => resolve(arrayBuffer);
//     fileReader.onerror = reject;
//     fileReader.readAsArrayBuffer(blob);
//   });
// }


/***/ }),

/***/ "./src/javascript-utils/is-type.js":
/*!*****************************************!*\
  !*** ./src/javascript-utils/is-type.js ***!
  \*****************************************/
/*! exports provided: isObject, isPromise, isIterable, isAsyncIterable, isIterator, isResponse, isFile, isBlob, isWritableDOMStream, isReadableDOMStream, isBuffer, isWritableNodeStream, isReadableNodeStream, isReadableStream, isWritableStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAsyncIterable", function() { return isAsyncIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterator", function() { return isIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isResponse", function() { return isResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlob", function() { return isBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWritableDOMStream", function() { return isWritableDOMStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadableDOMStream", function() { return isReadableDOMStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuffer", function() { return isBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWritableNodeStream", function() { return isWritableNodeStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadableNodeStream", function() { return isReadableNodeStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadableStream", function() { return isReadableStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWritableStream", function() { return isWritableStream; });
/* global File, Blob, Response, ReadableStream */

const isBoolean = x => typeof x === 'boolean';
const isFunction = x => typeof x === 'function';

const isObject = x => x !== null && typeof x === 'object';

const isPromise = x => isObject(x) && isFunction(x.then);

const isIterable = x => x && typeof x[Symbol.iterator] === 'function';

const isAsyncIterable = x => x && typeof x[Symbol.asyncIterator] === 'function';

const isIterator = x => x && isFunction(x.next);

const isResponse = x =>
  (typeof Response !== 'undefined' && x instanceof Response) ||
  (x && x.arrayBuffer && x.text && x.json);

const isFile = x => typeof File !== 'undefined' && x instanceof File;
const isBlob = x => typeof Blob !== 'undefined' && x instanceof Blob;

const isWritableDOMStream = x => {
  return isObject(x) && isFunction(x.abort) && isFunction(x.getWriter);
};

const isReadableDOMStream = x => {
  return (
    (typeof ReadableStream !== 'undefined' && x instanceof ReadableStream) ||
    (isObject(x) && isFunction(x.tee) && isFunction(x.cancel) && isFunction(x.getReader))
    // Not implemented in Firefox
    // && isFunction(x.pipeTo)
  );
};

// Check for Node.js `Buffer` without triggering bundler to include polyfill
const isBuffer = x => x && typeof x === 'object' && x.isBuffer;

const isWritableNodeStream = x => {
  return isObject(x) && isFunction(x.end) && isFunction(x.write) && isBoolean(x.writable);
};

const isReadableNodeStream = x => {
  return isObject(x) && isFunction(x.read) && isFunction(x.pipe) && isBoolean(x.readable);
};

const isReadableStream = x => isReadableDOMStream(x) || isReadableNodeStream(x);

const isWritableStream = x => isWritableDOMStream(x) || isWritableNodeStream(x);


/***/ }),

/***/ "./src/javascript-utils/memory-copy-utils.js":
/*!***************************************************!*\
  !*** ./src/javascript-utils/memory-copy-utils.js ***!
  \***************************************************/
/*! exports provided: concatenateArrayBuffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatenateArrayBuffers", function() { return concatenateArrayBuffers; });
function concatenateArrayBuffers(source1, source2) {
  const sourceArray1 = source1 instanceof ArrayBuffer ? new Uint8Array(source1) : source1;
  const sourceArray2 = source2 instanceof ArrayBuffer ? new Uint8Array(source2) : source2;
  const temp = new Uint8Array(sourceArray1.byteLength + sourceArray2.byteLength);
  temp.set(sourceArray1, 0);
  temp.set(sourceArray2, sourceArray1.byteLength);
  return temp;
}


/***/ }),

/***/ "./src/lib/api/encode.js":
/*!*******************************!*\
  !*** ./src/lib/api/encode.js ***!
  \*******************************/
/*! exports provided: encode, encodeSync, encodeInBatches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeSync", function() { return encodeSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeInBatches", function() { return encodeInBatches; });
async function encode(data, writer, options, url) {
  if (writer.encode) {
    return await writer.encode(data, options);
  }
  if (writer.encodeSync) {
    return writer.encodeSync(data, options);
  }
  // TODO - Use encodeToBatches?
  throw new Error('Writer could not encode data');
}

function encodeSync(data, writer, options, url) {
  if (writer.encodeSync) {
    return writer.encodeSync(data, options);
  }
  throw new Error('Writer could not synchronously encode data');
}

function encodeInBatches(data, writer, options, url) {
  if (writer.encodeInBatches) {
    return writer.encodeInBatches(data, options);
  }
  // TODO -fall back to atomic encode?
  throw new Error('Writer could not encode data in batches');
}


/***/ }),

/***/ "./src/lib/api/load-in-batches.js":
/*!****************************************!*\
  !*** ./src/lib/api/load-in-batches.js ***!
  \****************************************/
/*! exports provided: loadInBatches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadInBatches", function() { return loadInBatches; });
/* harmony import */ var _fetch_fetch_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch/fetch-file */ "./src/lib/fetch/fetch-file.js");
/* harmony import */ var _parse_in_batches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse-in-batches */ "./src/lib/api/parse-in-batches.js");



async function loadInBatches(url, loaders, options) {
  const response = await Object(_fetch_fetch_file__WEBPACK_IMPORTED_MODULE_0__["fetchFile"])(url, options);
  return Object(_parse_in_batches__WEBPACK_IMPORTED_MODULE_1__["parseInBatches"])(response, loaders, options, url);
}


/***/ }),

/***/ "./src/lib/api/load.js":
/*!*****************************!*\
  !*** ./src/lib/api/load.js ***!
  \*****************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony import */ var _javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../javascript-utils/is-type */ "./src/javascript-utils/is-type.js");
/* harmony import */ var _fetch_fetch_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch/fetch-file */ "./src/lib/fetch/fetch-file.js");
/* harmony import */ var _loader_utils_normalize_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader-utils/normalize-loader */ "./src/lib/loader-utils/normalize-loader.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parse */ "./src/lib/api/parse.js");






// Note: Load does duplicate a lot of parse.
// it can also call fetchFile on string urls, which `parse` won't do.
async function load(url, loaders, options) {
  // Signature: load(url, options)
  if (!Array.isArray(loaders) && !Object(_loader_utils_normalize_loader__WEBPACK_IMPORTED_MODULE_2__["isLoaderObject"])(loaders)) {
    options = loaders;
    loaders = null;
  }

  // at this point, `url` could be already loaded binary data
  let data = url;

  // url is a string, fetch the url
  if (typeof url === 'string') {
    data = await Object(_fetch_fetch_file__WEBPACK_IMPORTED_MODULE_1__["fetchFile"])(url, options);
  } else {
    url = null;
  }

  // URL is Blob or File, fetchFile handles it (alt: we could generate ObjectURL here)
  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isBlob"])(url)) {
    // The fetch response object will contain blob.name
    data = await Object(_fetch_fetch_file__WEBPACK_IMPORTED_MODULE_1__["fetchFile"])(url, options);
    url = null;
  }

  // Data is loaded (at least we have a `Response` object) so time to hand over to `parse`
  return await Object(_parse__WEBPACK_IMPORTED_MODULE_3__["parse"])(data, loaders, options, url);
}


/***/ }),

/***/ "./src/lib/api/parse-in-batches.js":
/*!*****************************************!*\
  !*** ./src/lib/api/parse-in-batches.js ***!
  \*****************************************/
/*! exports provided: parseInBatches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseInBatches", function() { return parseInBatches; });
/* harmony import */ var _loader_utils_normalize_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader-utils/normalize-loader */ "./src/lib/loader-utils/normalize-loader.js");
/* harmony import */ var _loader_utils_merge_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader-utils/merge-options */ "./src/lib/loader-utils/merge-options.js");
/* harmony import */ var _loader_utils_get_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader-utils/get-data */ "./src/lib/loader-utils/get-data.js");
/* harmony import */ var _loader_utils_get_loader_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader-utils/get-loader-context */ "./src/lib/loader-utils/get-loader-context.js");
/* harmony import */ var _select_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-loader */ "./src/lib/api/select-loader.js");





// import {makeTextDecoderIterator} from '../../iterator-utils/text-iterators';

async function parseInBatches(data, loaders, options, url) {
  // Signature: parseInBatches(data, options, url)
  // Uses registered loaders
  if (!Array.isArray(loaders) && !Object(_loader_utils_normalize_loader__WEBPACK_IMPORTED_MODULE_0__["isLoaderObject"])(loaders)) {
    url = options;
    options = loaders;
    loaders = null;
  }

  // Chooses a loader and normalizes it
  // TODO - only uses URL, need a selectLoader variant that peeks at first stream chunk...
  const loader = Object(_select_loader__WEBPACK_IMPORTED_MODULE_4__["selectLoader"])(null, loaders, options, {url});

  // Normalize options
  options = Object(_loader_utils_merge_options__WEBPACK_IMPORTED_MODULE_1__["mergeOptions"])(loader, options, url);

  const context = Object(_loader_utils_get_loader_context__WEBPACK_IMPORTED_MODULE_3__["getLoaderContext"])({url, loaders}, options);

  return await parseWithLoaderInBatches(loader, data, options, context);
}

async function parseWithLoaderInBatches(loader, data, options, context) {
  if (!loader.parseInBatches) {
    // TODO - call parse and emit a single batch (plus metadata batch)
    throw new Error('loader does not support parseInBatches');
  }

  // Create async iterator adapter for data, and concatenate result
  const inputIterator = await Object(_loader_utils_get_data__WEBPACK_IMPORTED_MODULE_2__["getAsyncIteratorFromData"])(data);
  // Converts ArrayBuffer chunks to text chunks (leaves text chunks alone)
  // if (loader.text) {
  //   inputIterator = makeTextDecoderIterator(inputIterator);
  // }
  const outputIterator = await loader.parseInBatches(inputIterator, options, context, loader);

  // Generate metadata batch if requested
  if (!options.metadata) {
    return outputIterator;
  }

  const metadataBatch = {
    batchType: 'metadata',
    metadata: {
      _loader: loader,
      _context: context
    },
    // Populate with some default fields to avoid crashing
    data: [],
    bytesUsed: 0
  };

  async function* makeMetadataBatchIterator(iterator) {
    yield metadataBatch;
    yield* iterator;
  }

  return makeMetadataBatchIterator(outputIterator);
}


/***/ }),

/***/ "./src/lib/api/parse-sync.js":
/*!***********************************!*\
  !*** ./src/lib/api/parse-sync.js ***!
  \***********************************/
/*! exports provided: parseSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSync", function() { return parseSync; });
/* harmony import */ var _select_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-loader */ "./src/lib/api/select-loader.js");
/* harmony import */ var _loader_utils_normalize_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader-utils/normalize-loader */ "./src/lib/loader-utils/normalize-loader.js");
/* harmony import */ var _loader_utils_merge_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader-utils/merge-options */ "./src/lib/loader-utils/merge-options.js");
/* harmony import */ var _loader_utils_get_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader-utils/get-data */ "./src/lib/loader-utils/get-data.js");
/* harmony import */ var _loader_utils_get_loader_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader-utils/get-loader-context */ "./src/lib/loader-utils/get-loader-context.js");






function parseSync(data, loaders, options, context) {
  // Signature: parseSync(data, options, url)
  // Uses registered loaders
  if (!Array.isArray(loaders) && !Object(_loader_utils_normalize_loader__WEBPACK_IMPORTED_MODULE_1__["isLoaderObject"])(loaders)) {
    context = options;
    options = loaders;
    loaders = null;
  }

  // DEPRECATED - backwards compatibility, last param can be URL...
  let url = '';
  if (typeof context === 'string') {
    url = context;
    context = null;
  }

  options = options || {};

  // Chooses a loader (and normalizes it)
  // Also use any loaders in the context, new loaders take priority
  const candidateLoaders = Object(_loader_utils_get_loader_context__WEBPACK_IMPORTED_MODULE_4__["getLoaders"])(loaders, context);
  const loader = Object(_select_loader__WEBPACK_IMPORTED_MODULE_0__["selectLoader"])(data, candidateLoaders, options, {url});
  // Note: if nothrow option was set, it is possible that no loader was found, if so just return null
  if (!loader) {
    return null;
  }

  // Normalize options
  options = Object(_loader_utils_merge_options__WEBPACK_IMPORTED_MODULE_2__["mergeOptions"])(loader, options, url);

  context = Object(_loader_utils_get_loader_context__WEBPACK_IMPORTED_MODULE_4__["getLoaderContext"])({url, parseSync, loaders}, options);

  return parseWithLoaderSync(loader, data, options, context);
}

// TODO - should accept loader.parseSync/parse and generate 1 chunk asyncIterator
function parseWithLoaderSync(loader, data, options, context) {
  data = Object(_loader_utils_get_data__WEBPACK_IMPORTED_MODULE_3__["getArrayBufferOrStringFromDataSync"])(data, loader);

  if (loader.parseTextSync && typeof data === 'string') {
    return loader.parseTextSync(data, options, context, loader);
  }

  if (loader.parseSync) {
    return loader.parseSync(data, options, context, loader);
  }

  // TBD - If synchronous parser not available, return null
  throw new Error(
    `${
      loader.name
    } loader: 'parseSync' not supported by this loader, use 'parse' instead. ${context.url || ''}`
  );
}


/***/ }),

/***/ "./src/lib/api/parse.js":
/*!******************************!*\
  !*** ./src/lib/api/parse.js ***!
  \******************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");
/* harmony import */ var _loader_utils_normalize_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader-utils/normalize-loader */ "./src/lib/loader-utils/normalize-loader.js");
/* harmony import */ var _loader_utils_merge_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader-utils/merge-options */ "./src/lib/loader-utils/merge-options.js");
/* harmony import */ var _loader_utils_get_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader-utils/get-data */ "./src/lib/loader-utils/get-data.js");
/* harmony import */ var _loader_utils_get_loader_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader-utils/get-loader-context */ "./src/lib/loader-utils/get-loader-context.js");
/* harmony import */ var _loader_utils_parse_with_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader-utils/parse-with-worker */ "./src/lib/loader-utils/parse-with-worker.js");
/* harmony import */ var _select_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-loader */ "./src/lib/api/select-loader.js");









async function parse(data, loaders, options, context) {
  // Signature: parse(data, options, context | url)
  // Uses registered loaders
  if (loaders && !Array.isArray(loaders) && !Object(_loader_utils_normalize_loader__WEBPACK_IMPORTED_MODULE_1__["isLoaderObject"])(loaders)) {
    context = options;
    options = loaders;
    loaders = null;
  }

  // DEPRECATED - backwards compatibility, last param can be URL...
  let url = '';
  if (typeof context === 'string') {
    url = context;
    context = null;
  }

  options = options || {};

  // Extract a url for auto detection
  const autoUrl = Object(_loader_utils_get_data__WEBPACK_IMPORTED_MODULE_3__["getUrlFromData"])(data, url);

  // Chooses a loader (and normalizes it)
  // Also use any loaders in the context, new loaders take priority
  const candidateLoaders = Object(_loader_utils_get_loader_context__WEBPACK_IMPORTED_MODULE_4__["getLoaders"])(loaders, context);
  const loader = Object(_select_loader__WEBPACK_IMPORTED_MODULE_6__["selectLoader"])(data, candidateLoaders, options, {url: autoUrl});
  // Note: if nothrow option was set, it is possible that no loader was found, if so just return null
  if (!loader) {
    return null;
  }

  // Normalize options
  options = Object(_loader_utils_merge_options__WEBPACK_IMPORTED_MODULE_2__["mergeOptions"])(loader, options, autoUrl);

  // Get a context (if already present, will be unchanged)
  context = Object(_loader_utils_get_loader_context__WEBPACK_IMPORTED_MODULE_4__["getLoaderContext"])({url: autoUrl, parse, loaders: candidateLoaders}, options, context);

  return await parseWithLoader(loader, data, options, context);
}

// TODO: support progress and abort
// TODO - should accept loader.parseAsyncIterator and concatenate.
async function parseWithLoader(loader, data, options, context) {
  Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["validateLoaderVersion"])(loader);

  data = await Object(_loader_utils_get_data__WEBPACK_IMPORTED_MODULE_3__["getArrayBufferOrStringFromData"])(data, loader);

  // First check for synchronous text parser, wrap results in promises
  if (loader.parseTextSync && typeof data === 'string') {
    options.dataType = 'text';
    return loader.parseTextSync(data, options, context, loader);
  }

  // If we have a workerUrl and the loader can parse the given options efficiently in a worker
  if (Object(_loader_utils_parse_with_worker__WEBPACK_IMPORTED_MODULE_5__["canParseWithWorker"])(loader, data, options, context)) {
    return await Object(_loader_utils_parse_with_worker__WEBPACK_IMPORTED_MODULE_5__["default"])(loader, data, options, context);
  }

  // Check for asynchronous parser
  if (loader.parse) {
    return await loader.parse(data, options, context, loader);
  }

  // This should not happen, all sync loaders should also offer `parse` function
  Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(!loader.parseSync);

  // TBD - If asynchronous parser not available, return null
  return Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(false);
}


/***/ }),

/***/ "./src/lib/api/register-loaders.js":
/*!*****************************************!*\
  !*** ./src/lib/api/register-loaders.js ***!
  \*****************************************/
/*! exports provided: registerLoaders, getRegisteredLoaders, _unregisterLoaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLoaders", function() { return registerLoaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredLoaders", function() { return getRegisteredLoaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unregisterLoaders", function() { return _unregisterLoaders; });
/* harmony import */ var _loader_utils_normalize_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader-utils/normalize-loader */ "./src/lib/loader-utils/normalize-loader.js");
/* harmony import */ var _loader_utils_merge_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader-utils/merge-options */ "./src/lib/loader-utils/merge-options.js");



// Store global registered loaders on the global object to increase chances of cross loaders-version interoperability
// This use case is not reliable but can help when testing new versions of loaders.gl with existing frameworks
const getGlobalLoaderRegistry = () => {
  const state = Object(_loader_utils_merge_options__WEBPACK_IMPORTED_MODULE_1__["getGlobalLoaderState"])();
  state.loaderRegistry = state.loaderRegistry || [];
  return state.loaderRegistry;
};

function registerLoaders(loaders) {
  const loaderRegistry = getGlobalLoaderRegistry();

  loaders = Array.isArray(loaders) ? loaders : [loaders];

  for (const loader of loaders) {
    const normalizedLoader = Object(_loader_utils_normalize_loader__WEBPACK_IMPORTED_MODULE_0__["normalizeLoader"])(loader);
    if (!loaderRegistry.find(registeredLoader => normalizedLoader === registeredLoader)) {
      // add to the beginning of the loaderRegistry, so the last registeredLoader get picked
      loaderRegistry.unshift(normalizedLoader);
    }
  }
}

function getRegisteredLoaders() {
  return getGlobalLoaderRegistry();
}

// For testing
function _unregisterLoaders() {
  const state = Object(_loader_utils_merge_options__WEBPACK_IMPORTED_MODULE_1__["getGlobalLoaderState"])();
  state.loaderRegistry = [];
}


/***/ }),

/***/ "./src/lib/api/save.js":
/*!*****************************!*\
  !*** ./src/lib/api/save.js ***!
  \*****************************/
/*! exports provided: save, saveSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSync", function() { return saveSync; });
/* harmony import */ var _encode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encode */ "./src/lib/api/encode.js");
/* harmony import */ var _fetch_write_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch/write-file */ "./src/lib/fetch/write-file.js");



function save(data, url, writer, options) {
  const encodedData = Object(_encode__WEBPACK_IMPORTED_MODULE_0__["encode"])(data, writer, options, url);
  return Object(_fetch_write_file__WEBPACK_IMPORTED_MODULE_1__["writeFile"])(url, encodedData);
}

function saveSync(data, url, writer, options) {
  const encodedData = Object(_encode__WEBPACK_IMPORTED_MODULE_0__["encodeSync"])(data, writer, options, url);
  return Object(_fetch_write_file__WEBPACK_IMPORTED_MODULE_1__["writeFileSync"])(url, encodedData);
}


/***/ }),

/***/ "./src/lib/api/select-loader.js":
/*!**************************************!*\
  !*** ./src/lib/api/select-loader.js ***!
  \**************************************/
/*! exports provided: selectLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoader", function() { return selectLoader; });
/* harmony import */ var _loader_utils_normalize_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader-utils/normalize-loader */ "./src/lib/loader-utils/normalize-loader.js");
/* harmony import */ var _utils_resource_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/resource-utils */ "./src/lib/utils/resource-utils.js");
/* harmony import */ var _register_loaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-loaders */ "./src/lib/api/register-loaders.js");




const EXT_PATTERN = /\.([^.]+)$/;

// TODO - Need a variant that peeks at streams for parseInBatches
// TODO - Detect multiple matching loaders? Use heuristics to grade matches?
// TODO - Allow apps to pass context to disambiguate between multiple matches (e.g. multiple .json formats)?

// eslint-disable-next-line complexity
function selectLoader(data, loaders = [], options = {}, context = {}) {
  // if only a single loader was provided (not as array), force its use
  // TODO - Should this behaviour be kept and documented?
  if (loaders && !Array.isArray(loaders)) {
    return Object(_loader_utils_normalize_loader__WEBPACK_IMPORTED_MODULE_0__["normalizeLoader"])(loaders);
  }

  // Add registered loaders
  loaders = [...(loaders || []), ...Object(_register_loaders__WEBPACK_IMPORTED_MODULE_2__["getRegisteredLoaders"])()];
  normalizeLoaders(loaders);

  const {url, type} = Object(_utils_resource_utils__WEBPACK_IMPORTED_MODULE_1__["getResourceUrlAndType"])(data);

  let loader = findLoaderByUrl(loaders, url || context.url);
  loader = loader || findLoaderByContentType(loaders, type);
  loader = loader || findLoaderByExamingInitialData(loaders, data);

  // no loader available
  if (!loader && !options.nothrow) {
    throw new Error(getNoValidLoaderMessage(data, url, type));
  }

  return loader;
}

function getNoValidLoaderMessage(data, url, contentType) {
  let message = 'No valid loader found';
  if (data) {
    message += ` data: "${getFirstCharacters(data)}"`;
  }
  if (url) {
    message += ` for ${url}`;
  }
  return message;
}

function normalizeLoaders(loaders) {
  for (const loader of loaders) {
    Object(_loader_utils_normalize_loader__WEBPACK_IMPORTED_MODULE_0__["normalizeLoader"])(loader);
  }
}

// TODO - Would be nice to support http://example.com/file.glb?parameter=1
// E.g: x = new URL('http://example.com/file.glb?load=1'; x.pathname
function findLoaderByUrl(loaders, url) {
  // Get extension
  const match = url && url.match(EXT_PATTERN);
  const extension = match && match[1];
  return extension && findLoaderByExtension(loaders, extension);
}

function findLoaderByExtension(loaders, extension) {
  extension = extension.toLowerCase();

  for (const loader of loaders) {
    for (const loaderExtension of loader.extensions) {
      if (loaderExtension.toLowerCase() === extension) {
        return loader;
      }
    }
  }
  return null;
}

function findLoaderByContentType(loaders, mimeType) {
  for (const loader of loaders) {
    if (loader.mimeTypes && loader.mimeTypes.includes(mimeType)) {
      return loader;
    }

    // Support referring to loaders using the "unregistered tree"
    // https://en.wikipedia.org/wiki/Media_type#Unregistered_tree
    if (mimeType === `application/x.${loader.id}`) {
      return loader;
    }
  }
  return null;
}

function findLoaderByExamingInitialData(loaders, data) {
  if (!data) {
    return null;
  }

  for (const loader of loaders) {
    if (typeof data === 'string') {
      if (testText(data, loader)) {
        return loader;
      }
    } else if (ArrayBuffer.isView(data)) {
      // Typed Arrays can have offsets into underlying buffer
      if (testBinary(data.buffer, data.byteOffset, loader)) {
        return loader;
      }
    } else if (data instanceof ArrayBuffer) {
      const byteOffset = 0;
      if (testBinary(data, byteOffset, loader)) {
        return loader;
      }
    }
    // TODO Handle streaming case (requires creating a new AsyncIterator)
  }
  return null;
}

function testText(data, loader) {
  return loader.testText && loader.testText(data);
}

function testBinary(data, byteOffset, loader) {
  const type = Array.isArray(loader.test) ? 'array' : typeof loader.test;
  switch (type) {
    case 'function':
      return loader.test(data, loader);

    case 'string':
    case 'array':
      // Magic bytes check: If `loader.test` is a string or array of strings,
      // check if binary data starts with one of those strings
      const tests = Array.isArray(loader.test) ? loader.test : [loader.test];
      return tests.some(test => {
        const magic = getMagicString(data, byteOffset, test.length);
        return test === magic;
      });

    default:
      return false;
  }
}

function getFirstCharacters(data, length = 5) {
  if (typeof data === 'string') {
    return data.slice(0, length);
  } else if (ArrayBuffer.isView(data)) {
    // Typed Arrays can have offsets into underlying buffer
    return getMagicString(data.buffer, data.byteOffset, length);
  } else if (data instanceof ArrayBuffer) {
    const byteOffset = 0;
    return getMagicString(data, byteOffset, length);
  }
  return '';
}

function getMagicString(arrayBuffer, byteOffset, length) {
  if (arrayBuffer.byteLength <= byteOffset + length) {
    return '';
  }
  const dataView = new DataView(arrayBuffer);
  let magic = '';
  for (let i = 0; i < length; i++) {
    magic += String.fromCharCode(dataView.getUint8(byteOffset + i));
  }
  return magic;
}


/***/ }),

/***/ "./src/lib/api/set-loader-options.js":
/*!*******************************************!*\
  !*** ./src/lib/api/set-loader-options.js ***!
  \*******************************************/
/*! exports provided: setLoaderOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoaderOptions", function() { return setLoaderOptions; });
/* harmony import */ var _loader_utils_merge_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader-utils/merge-options */ "./src/lib/loader-utils/merge-options.js");


// Set global loader options
function setLoaderOptions(options) {
  Object(_loader_utils_merge_options__WEBPACK_IMPORTED_MODULE_0__["setGlobalOptions"])(options);
}


/***/ }),

/***/ "./src/lib/constants.js":
/*!******************************!*\
  !*** ./src/lib/constants.js ***!
  \******************************/
/*! exports provided: DEFAULT_LOADER_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LOADER_OPTIONS", function() { return DEFAULT_LOADER_OPTIONS; });
/* harmony import */ var _loader_utils_loggers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader-utils/loggers */ "./src/lib/loader-utils/loggers.js");


// TODO - document these options
const DEFAULT_LOADER_OPTIONS = {
  CDN: 'https://unpkg.com/@loaders.gl',
  worker: true, // By default, use worker if provided by loader
  log: new _loader_utils_loggers__WEBPACK_IMPORTED_MODULE_0__["ConsoleLog"](), // A probe.gl compatible (`log.log()()` syntax) that just logs to console
  dataType: 'arraybuffer', // TODO - explain why this option is needed for parsing
  metadata: false // TODO - currently only implemented for parseInBatches, adds initial metadata batch
};


/***/ }),

/***/ "./src/lib/fetch/fetch-error-message.js":
/*!**********************************************!*\
  !*** ./src/lib/fetch/fetch-error-message.js ***!
  \**********************************************/
/*! exports provided: getErrorMessageFromResponseSync, getErrorMessageFromResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessageFromResponseSync", function() { return getErrorMessageFromResponseSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessageFromResponse", function() { return getErrorMessageFromResponse; });
function getErrorMessageFromResponseSync(response) {
  return `Failed to fetch resource ${response.url}(${response.status}): ${response.statusText} `;
}

async function getErrorMessageFromResponse(response) {
  let message = `Failed to fetch resource ${response.url} (${response.status}): `;
  try {
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      message += await response.text();
    } else {
      message += response.statusText;
    }
  } catch (error) {
    // eslint forbids return in finally statement
    return message;
  }
  return message;
}


/***/ }),

/***/ "./src/lib/fetch/fetch-file.browser.js":
/*!*********************************************!*\
  !*** ./src/lib/fetch/fetch-file.browser.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchFileReadable; });
/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");
/* global FileReader, Headers */


// File reader fetch "polyfill" for the browser
class FileReadableResponse {
  constructor(fileOrBlob, options) {
    this._fileOrBlob = fileOrBlob;
    this.bodyUsed = false;
  }

  get headers() {
    return new Headers({
      'Content-Length': this._fileOrBlob.size,
      'Content-Type': this._fileOrBlob.type
    });
  }

  get ok() {
    return true; // Blob & File objects are already in memory
  }

  get status() {
    return 200; // Blob & File objects are already in memory
  }

  get url() {
    // Note: This is just the file name without path information
    // Note: File has `name` field but the Blob baseclass does not
    return this._fileOrBlob.name || '';
  }

  async arrayBuffer() {
    const {reader, promise} = this._getFileReader();
    reader.readAsArrayBuffer(this._fileOrBlob);
    return promise;
  }

  async text() {
    const {reader, promise} = this._getFileReader();
    reader.readAsText(this._fileOrBlob);
    return promise;
  }

  async json() {
    const text = await this.text();
    return JSON.parse(text);
  }

  // TODO - body, how to support stream?
  // Can this be portable?
  // eslint-disable-next-line
  // https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams#Creating_your_own_custom_readable_stream
  // get body() {
  //   assert(false);
  // }

  // PRIVATE

  _getFileReader() {
    Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(!this.bodyUsed);
    this.bodyUsed = true;

    const reader = new FileReader();
    const promise = new Promise((resolve, reject) => {
      try {
        reader.onerror = _ => reject(new Error('Read error')); // TODO extract error
        reader.onabort = () => reject(new Error('Read aborted.'));
        reader.onload = () => resolve(reader.result);
      } catch (error) {
        reject(error);
      }
    });
    return {reader, promise};
  }
}

// @param {File|Blob} file  HTML File or Blob object to read as string
// @returns {Promise.string}  Resolves to a string containing file contents
function fetchFileReadable(fileOrBlob, options) {
  return Promise.resolve(new FileReadableResponse(fileOrBlob, options));
}


/***/ }),

/***/ "./src/lib/fetch/fetch-file.js":
/*!*************************************!*\
  !*** ./src/lib/fetch/fetch-file.js ***!
  \*************************************/
/*! exports provided: fetchFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFile", function() { return fetchFile; });
/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");
/* harmony import */ var _javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../javascript-utils/is-type */ "./src/javascript-utils/is-type.js");
/* harmony import */ var _fetch_file_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-file.browser */ "./src/lib/fetch/fetch-file.browser.js");
/* harmony import */ var _fetch_error_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch-error-message */ "./src/lib/fetch/fetch-error-message.js");
/* global fetch */





// As fetch but respects pathPrefix and file aliases
// Reads file data from:
// * data urls
// * http/http urls
// * File/Blob objects
async function fetchFile(url, options = {}) {
  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_1__["isBlob"])(url)) {
    return Object(_fetch_file_browser__WEBPACK_IMPORTED_MODULE_2__["default"])(url, options);
  }
  url = Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(url);
  // TODO - SUPPORT reading from `File` objects
  const response = await fetch(url, options);
  if (!response.ok && options.throws) {
    throw new Error(await Object(_fetch_error_message__WEBPACK_IMPORTED_MODULE_3__["getErrorMessageFromResponse"])(response));
  }
  return response;
}


/***/ }),

/***/ "./src/lib/fetch/read-file.browser.js":
/*!********************************************!*\
  !*** ./src/lib/fetch/read-file.browser.js ***!
  \********************************************/
/*! exports provided: readFileSyncBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFileSyncBrowser", function() { return readFileSyncBrowser; });
/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");
// TODO - this file is not tested


const DEFAULT_OPTIONS = {
  dataType: 'arraybuffer',
  // TODO - this was mostly set to true to make test cases work
  nothrow: true
};

const isDataURL = url => url.startsWith('data:');

// In a few cases (data URIs, files under Node) "files" can be read synchronously
function readFileSyncBrowser(uri, options) {
  options = getReadFileOptions(options);

  if (isDataURL(uri)) {
    // TODO - removed until decodeDataUri does not depend on Node.js Buffer
    //   return decodeDataUri(uri);
  }

  if (!options.nothrow) {
    // throw new Error('Cant load URI synchronously');
    Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(false);
  }

  return null;
}

// HELPER FUNCTIONS

function getReadFileOptions(options = {}) {
  options = Object.assign({}, DEFAULT_OPTIONS, options);
  options.responseType = options.responseType || options.dataType;
  return options;
}


/***/ }),

/***/ "./src/lib/fetch/read-file.js":
/*!************************************!*\
  !*** ./src/lib/fetch/read-file.js ***!
  \************************************/
/*! exports provided: readFileSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFileSync", function() { return readFileSync; });
/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");
/* harmony import */ var _node_read_file_sync_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node/read-file-sync.node */ 1);
/* harmony import */ var _node_read_file_sync_node__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_read_file_sync_node__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _read_file_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read-file.browser */ "./src/lib/fetch/read-file.browser.js");




// In a few cases (data URIs, node.js) "files" can be read synchronously
function readFileSync(url, options = {}) {
  url = Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(url);
  if (!_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] && _node_read_file_sync_node__WEBPACK_IMPORTED_MODULE_1__["readFileSync"]) {
    return _node_read_file_sync_node__WEBPACK_IMPORTED_MODULE_1__["readFileSync"](url, options);
  }
  return Object(_read_file_browser__WEBPACK_IMPORTED_MODULE_2__["readFileSyncBrowser"])(url, options);
}


/***/ }),

/***/ "./src/lib/fetch/write-file.js":
/*!*************************************!*\
  !*** ./src/lib/fetch/write-file.js ***!
  \*************************************/
/*! exports provided: writeFile, writeFileSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeFile", function() { return writeFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeFileSync", function() { return writeFileSync; });
/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");
/* harmony import */ var _node_write_file_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node/write-file.node */ 2);
/* harmony import */ var _node_write_file_node__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_write_file_node__WEBPACK_IMPORTED_MODULE_1__);



function writeFile(filePath, arrayBufferOrString, options) {
  filePath = Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(filePath);
  if (!_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] && _node_write_file_node__WEBPACK_IMPORTED_MODULE_1__["writeFile"]) {
    return _node_write_file_node__WEBPACK_IMPORTED_MODULE_1__["writeFile"](filePath, arrayBufferOrString, options);
  }
  return Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(false);
}

function writeFileSync(filePath, arrayBufferOrString, options) {
  filePath = Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["resolvePath"])(filePath);
  if (!_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] && _node_write_file_node__WEBPACK_IMPORTED_MODULE_1__["writeFileSync"]) {
    return _node_write_file_node__WEBPACK_IMPORTED_MODULE_1__["writeFileSync"](filePath, arrayBufferOrString, options);
  }
  return Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(false);
}


/***/ }),

/***/ "./src/lib/loader-utils/check-errors.js":
/*!**********************************************!*\
  !*** ./src/lib/loader-utils/check-errors.js ***!
  \**********************************************/
/*! exports provided: checkFetchResponseStatus, checkFetchResponseStatusSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFetchResponseStatus", function() { return checkFetchResponseStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFetchResponseStatusSync", function() { return checkFetchResponseStatusSync; });
async function checkFetchResponseStatus(response) {
  if (!response.ok) {
    let errorMessage = `fetch failed ${response.status} ${response.statusText}`;
    try {
      const text = await response.text().slice(10);
      errorMessage += text;
    } catch (error) {
      // ignore error
    }
    throw new Error(errorMessage);
  }
}

function checkFetchResponseStatusSync(response) {
  if (!response.ok) {
    throw new Error(`fetch failed ${response.status}`);
  }
}


/***/ }),

/***/ "./src/lib/loader-utils/get-data.js":
/*!******************************************!*\
  !*** ./src/lib/loader-utils/get-data.js ***!
  \******************************************/
/*! exports provided: getUrlFromData, getArrayBufferOrStringFromDataSync, getArrayBufferOrStringFromData, getAsyncIteratorFromData, getIteratorFromData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlFromData", function() { return getUrlFromData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayBufferOrStringFromDataSync", function() { return getArrayBufferOrStringFromDataSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayBufferOrStringFromData", function() { return getArrayBufferOrStringFromData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAsyncIteratorFromData", function() { return getAsyncIteratorFromData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIteratorFromData", function() { return getIteratorFromData; });
/* harmony import */ var _javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../javascript-utils/is-type */ "./src/javascript-utils/is-type.js");
/* harmony import */ var _iterator_utils_make_iterator_make_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../iterator-utils/make-iterator/make-iterator */ "./src/iterator-utils/make-iterator/make-iterator.js");
/* harmony import */ var _iterator_utils_async_iteration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../iterator-utils/async-iteration */ "./src/iterator-utils/async-iteration.js");
/* harmony import */ var _fetch_fetch_file_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fetch/fetch-file.browser */ "./src/lib/fetch/fetch-file.browser.js");
/* harmony import */ var _check_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check-errors */ "./src/lib/loader-utils/check-errors.js");
/* global TextDecoder */






const ERR_DATA = 'Cannot convert supplied data type';

// Extract a URL from `parse` arguments if possible
// If a fetch Response object or File/Blob were passed in get URL from those objects
function getUrlFromData(data, url) {
  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isResponse"])(data)) {
    url = url || data.url;
  } else if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isBlob"])(url)) {
    // File or Blob
    url = url.name;
  }
  // Strip any query string
  return typeof url === 'string' ? url.replace(/\?.*/, '') : url;
}

// eslint-disable-next-line complexity
function getArrayBufferOrStringFromDataSync(data, loader) {
  if (loader.text && typeof data === 'string') {
    return data;
  }

  if (data instanceof ArrayBuffer) {
    const arrayBuffer = data;
    if (loader.text && !loader.binary) {
      const textDecoder = new TextDecoder('utf8');
      return textDecoder.decode(arrayBuffer);
    }
    return arrayBuffer;
  }

  // We may need to handle offsets
  if (ArrayBuffer.isView(data) || Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isBuffer"])(data)) {
    // TextDecoder is invoked on typed arrays and will handle offsets
    if (loader.text && !loader.binary) {
      const textDecoder = new TextDecoder('utf8');
      return textDecoder.decode(data);
    }

    let arrayBuffer = data.buffer;

    // Since we are returning the underlying arrayBuffer, we must create a new copy
    // if this typed array / Buffer is a partial view into the ArryayBuffer
    // TODO - this is a potentially unnecessary copy
    const byteLength = data.byteLength || data.length;
    if (data.byteOffset !== 0 || byteLength !== arrayBuffer.byteLength) {
      // console.warn(`loaders.gl copying arraybuffer of length ${byteLength}`);
      arrayBuffer = arrayBuffer.slice(data.byteOffset, data.byteOffset + byteLength);
    }
    return arrayBuffer;
  }

  throw new Error(ERR_DATA);
}

// Convert async iterator to a promise
async function getArrayBufferOrStringFromData(data, loader) {
  // Resolve any promise
  data = await data;

  const isArrayBuffer = data instanceof ArrayBuffer || ArrayBuffer.isView(data);
  if (typeof data === 'string' || isArrayBuffer) {
    return getArrayBufferOrStringFromDataSync(data, loader);
  }

  // Blobs and files are FileReader compatible
  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isBlob"])(data)) {
    data = await Object(_fetch_fetch_file_browser__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
  }

  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isResponse"])(data)) {
    const response = data;
    await Object(_check_errors__WEBPACK_IMPORTED_MODULE_4__["checkFetchResponseStatus"])(response);
    return loader.binary ? await response.arrayBuffer() : await response.text();
  }

  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isReadableStream"])(data)) {
    data = Object(_iterator_utils_make_iterator_make_iterator__WEBPACK_IMPORTED_MODULE_1__["makeIterator"])(data);
  }

  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isIterable"])(data) || Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isAsyncIterable"])(data)) {
    // Assume arrayBuffer iterator - attempt to concatenate
    return Object(_iterator_utils_async_iteration__WEBPACK_IMPORTED_MODULE_2__["concatenateChunksAsync"])(data);
  }

  throw new Error(ERR_DATA);
}

async function getAsyncIteratorFromData(data) {
  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isIterator"])(data)) {
    return data;
  }

  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isResponse"])(data)) {
    // Note Since this function is not async, we currently can't load error message, just status
    await Object(_check_errors__WEBPACK_IMPORTED_MODULE_4__["checkFetchResponseStatus"])(data);
    // TODO - bug in polyfill, body can be a Promise under Node.js
    return Object(_iterator_utils_make_iterator_make_iterator__WEBPACK_IMPORTED_MODULE_1__["makeIterator"])(data.body);
  }

  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isBlob"])(data) || Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isReadableStream"])(data)) {
    return Object(_iterator_utils_make_iterator_make_iterator__WEBPACK_IMPORTED_MODULE_1__["makeIterator"])(data);
  }

  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isAsyncIterable"])(data)) {
    return data[Symbol.asyncIterator]();
  }

  return getIteratorFromData(data);
}

function getIteratorFromData(data) {
  // generate an iterator that emits a single chunk
  if (ArrayBuffer.isView(data)) {
    return (function* oneChunk() {
      yield data.buffer;
    })();
  }

  if (data instanceof ArrayBuffer) {
    return (function* oneChunk() {
      yield data;
    })();
  }

  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isIterator"])(data)) {
    return data;
  }

  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isIterable"])(data)) {
    return data[Symbol.iterator]();
  }

  throw new Error(ERR_DATA);
}


/***/ }),

/***/ "./src/lib/loader-utils/get-loader-context.js":
/*!****************************************************!*\
  !*** ./src/lib/loader-utils/get-loader-context.js ***!
  \****************************************************/
/*! exports provided: getLoaderContext, getLoaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoaderContext", function() { return getLoaderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoaders", function() { return getLoaders; });
/* harmony import */ var _fetch_fetch_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch/fetch-file */ "./src/lib/fetch/fetch-file.js");
// "sub" loaders invoked by other loaders get a "context" injected on `this`
// The context will inject core methods like `parse` and contain information
// about loaders and options passed in to the top-level `parse` call.


function getLoaderContext(context, options, previousContext = null) {
  // For recursive calls, we already have a context
  // TODO - add any additional loaders to context?
  if (previousContext) {
    return previousContext;
  }
  context = {
    // TODO - determine how to inject fetch, fetch in options etc
    fetch: context.fetch || _fetch_fetch_file__WEBPACK_IMPORTED_MODULE_0__["fetchFile"],
    ...context
  };

  // Recursive loading does not use single loader
  if (!Array.isArray(context.loaders)) {
    context.loaders = null;
  }

  return context;
}

function getLoaders(loaders, context) {
  // A single non-array loader is force selected, but only on top-level (context === null)
  if (!context && !Array.isArray(loaders)) {
    return loaders;
  }

  // Create a merged list
  let candidateLoaders;
  if (loaders) {
    candidateLoaders = Array.isArray(loaders) ? loaders : [loaders];
  }
  if (context && context.loaders) {
    const contextLoaders = Array.isArray(context.loaders) ? context.loaders : [context.loaders];
    candidateLoaders = candidateLoaders ? [...candidateLoaders, ...contextLoaders] : contextLoaders;
  }
  // If no loaders, return null to look in globally registered loaders
  return candidateLoaders && candidateLoaders.length ? candidateLoaders : null;
}


/***/ }),

/***/ "./src/lib/loader-utils/loggers.js":
/*!*****************************************!*\
  !*** ./src/lib/loader-utils/loggers.js ***!
  \*****************************************/
/*! exports provided: NullLog, ConsoleLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullLog", function() { return NullLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleLog", function() { return ConsoleLog; });
// probe.gl Log compatible loggers

// Logs nothing
class NullLog {
  log() {
    return _ => {};
  }
  info() {
    return _ => {};
  }
  warn() {
    return _ => {};
  }
  error() {
    return _ => {};
  }
}

// Logs to console
class ConsoleLog {
  constructor() {
    this.console = console; // eslint-disable-line
  }
  log(...args) {
    return this.console.log.bind(this.console, ...args);
  }
  info(...args) {
    return this.console.info.bind(this.console, ...args);
  }
  warn(...args) {
    return this.console.warn.bind(this.console, ...args);
  }
  error(...args) {
    return this.console.error.bind(this.console, ...args);
  }
}


/***/ }),

/***/ "./src/lib/loader-utils/merge-options.js":
/*!***********************************************!*\
  !*** ./src/lib/loader-utils/merge-options.js ***!
  \***********************************************/
/*! exports provided: getGlobalLoaderState, setGlobalOptions, mergeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalLoaderState", function() { return getGlobalLoaderState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalOptions", function() { return setGlobalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/lib/constants.js");
/* harmony import */ var _loggers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loggers */ "./src/lib/loader-utils/loggers.js");




const isPureObject = value =>
  value && typeof value === 'object' && value.constructor === {}.constructor;

// Helper to reliably get global loader state
// Wraps initialization of global variable in function to defeat overly agressive tree-shakers
const getGlobalLoaderState = () => {
  // @ts-ignore
  _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["global"].loaders = _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["global"].loaders || {};
  // @ts-ignore
  const {loaders} = _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["global"];

  // Add _state object to keep separate from modules added to global.loaders
  loaders._state = loaders._state || {};
  return loaders._state;
};

// Store global loader options on the global object to increase chances of cross loaders-version interoperability
// NOTE: This use case is not reliable but can help when testing new versions of loaders.gl with existing frameworks
const getGlobalLoaderOptions = () => {
  const state = getGlobalLoaderState();
  // Ensure all default loader options from this library are mentioned
  state.globalOptions = state.globalOptions || {..._constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_LOADER_OPTIONS"]};
  return state.globalOptions;
};

// Set global loader options
function setGlobalOptions(options) {
  const state = getGlobalLoaderState();
  const globalOptions = getGlobalLoaderOptions();
  state.globalOptions = mergeOptionsInternal(globalOptions, options);
}

// Merges options with global opts and loader defaults, also injects baseUri
function mergeOptions(loader, options, url, topOptions = null) {
  validateLoaderOptions(loader, options, topOptions);
  return mergeOptionsInternal(loader, options, url);
}

/**
 * Warn for unsupported options
 * @param {*} loader
 * @param {object} options
 * @param {object | null} topOptions
 * @param {*} log
 */
// eslint-disable-next-line complexity
function validateLoaderOptions(
  loader,
  options,
  topOptions = _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_LOADER_OPTIONS"],
  // eslint-disable-next-line
  log = console
) {
  // Check top level options
  if (topOptions) {
    for (const key in options) {
      // Only check non-object valued top-level keys
      if (typeof options[key] !== 'object' && !topOptions[key]) {
        log.warn(`Top-level loader option ${key} not recognized`);
      }
    }
  }

  // Get the scoped, loader specific options from the user supplied options
  const idOptions = (options && options[loader.id]) || {};

  // Get scoped, loader specific default and deprecated options from the selected loader
  const loaderOptions = (loader.options && loader.options[loader.id]) || {};
  const deprecatedOptions = (loader.defaultOptions && loader.defaultOptions[loader.id]) || {};

  // Validate loader specific options
  for (const key in idOptions) {
    if (!(key in loaderOptions)) {
      // Issue deprecation warnings
      if (key in deprecatedOptions) {
        log.warn(
          `${loader.name} loader option ${loader.id}.${key} deprecated, use ${
            deprecatedOptions[key]
          }`
        );
        // TODO - auto set updated option?
      } else {
        log.warn(`${loader.name} loader option ${loader.id}.${key} not recognized`);
      }
    }
  }
}

function mergeOptionsInternal(loader, options, url) {
  const loaderDefaultOptions = loader.options || {};

  const mergedOptions = {...loaderDefaultOptions};

  addUrlOptions(mergedOptions, url);

  // LOGGING: options.log can be set to `null` to defeat logging
  if (mergedOptions.log === null) {
    mergedOptions.log = new _loggers__WEBPACK_IMPORTED_MODULE_2__["NullLog"]();
  }

  mergeNestedFields(mergedOptions, getGlobalLoaderOptions());
  mergeNestedFields(mergedOptions, options);

  return mergedOptions;
}

// Merge nested options objects
function mergeNestedFields(mergedOptions, options) {
  for (const key in options) {
    // Check for nested options
    // object in options => either no key in defaultOptions or object in defaultOptions
    if (key in options) {
      const value = options[key];
      if (isPureObject(value) && isPureObject(mergedOptions[key])) {
        mergedOptions[key] = {
          ...mergedOptions[key],
          ...options[key]
        };
      } else {
        mergedOptions[key] = options[key];
      }
    }
    // else: No need to merge nested opts, and the initial merge already copied over the nested options
  }
}

// Harvest information from the url
// TODO - baseUri should be a directory, i.e. remove file component from baseUri
// TODO - extract extension?
// TODO - extract query parameters?
// TODO - should these be injected on context instead of options?
function addUrlOptions(options, url) {
  if (url && !('baseUri' in options)) {
    options.baseUri = url;
  }
}


/***/ }),

/***/ "./src/lib/loader-utils/normalize-loader.js":
/*!**************************************************!*\
  !*** ./src/lib/loader-utils/normalize-loader.js ***!
  \**************************************************/
/*! exports provided: isLoaderObject, normalizeLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoaderObject", function() { return isLoaderObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeLoader", function() { return normalizeLoader; });
/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");


function isLoaderObject(loader) {
  if (!loader) {
    return false;
  }

  if (Array.isArray(loader)) {
    loader = loader[0];
  }

  let hasParser =
    loader.parseTextSync ||
    loader.parseSync ||
    loader.parse ||
    loader.parseStream || // TODO Remove, Replace with parseInBatches
    loader.parseInBatches;

  const loaderOptions = loader.options && loader.options[loader.id];
  hasParser = hasParser || (loaderOptions && loaderOptions.workerUrl);

  return hasParser;
}

function normalizeLoader(loader) {
  // This error is fairly easy to trigger by mixing up import statments etc
  // So we make an exception and add a developer error message for this case
  // To help new users from getting stuck here
  Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(loader, 'null loader');
  Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(isLoaderObject(loader), 'invalid loader');

  // NORMALIZE [LOADER, OPTIONS] => LOADER

  // If [loader, options], create a new loaders object with options merged in
  let options;
  if (Array.isArray(loader)) {
    options = loader[1];
    loader = loader[0];
    loader = {
      ...loader,
      options: {...loader.options, ...options}
    };
  }

  // NORMALIZE LOADER.EXTENSIONS

  // Remove `extension`` prop, replace with `extensions``
  if (loader.extension) {
    loader.extensions = loader.extensions || loader.extension;
    delete loader.extension;
  }

  // Ensure loader.extensions is an array
  if (!Array.isArray(loader.extensions)) {
    loader.extensions = [loader.extensions];
  }

  Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(loader.extensions && loader.extensions.length > 0 && loader.extensions[0]);

  // NORMALIZE text and binary flags

  // Ensure at least one of text/binary flags are properly set
  if (loader.parseTextSync) {
    loader.text = true;
  }

  if (!loader.text) {
    loader.binary = true;
  }

  return loader;
}


/***/ }),

/***/ "./src/lib/loader-utils/parse-with-worker.js":
/*!***************************************************!*\
  !*** ./src/lib/loader-utils/parse-with-worker.js ***!
  \***************************************************/
/*! exports provided: canParseWithWorker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canParseWithWorker", function() { return canParseWithWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseWithWorker; });
/* harmony import */ var _worker_utils_worker_farm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../worker-utils/worker-farm */ "./src/worker-utils/worker-farm.js");
/* harmony import */ var _javascript_utils_binary_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../javascript-utils/binary-utils */ "./src/javascript-utils/binary-utils.js");
/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");
/* harmony import */ var _api_parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/parse */ "./src/lib/api/parse.js");





// __VERSION__ is injected by babel-plugin-version-inline
// @ts-ignore TS2304: Cannot find name '__VERSION__'.
const VERSION =  true ? "2.2.8" : undefined;

function canParseWithWorker(loader, data, options, context) {
  if (!_worker_utils_worker_farm__WEBPACK_IMPORTED_MODULE_0__["default"].isSupported()) {
    return false;
  }
  const loaderOptions = options && options[loader.id];
  if (
    (options.worker === 'local' && loaderOptions && loaderOptions.localWorkerUrl) ||
    (options.worker && loaderOptions && loaderOptions.workerUrl)
  ) {
    return loader.useWorker ? loader.useWorker(options) : true;
  }
  return false;
}

/**
 * this function expects that the worker function sends certain messages,
 * this can be automated if the worker is wrapper by a call to createWorker in @loaders.gl/loader-utils.
 */
function parseWithWorker(loader, data, options, context) {
  const {worker} = options || {};
  const loaderOptions = (options && options[loader.id]) || {};
  const workerUrl = worker === 'local' ? loaderOptions.localWorkerUrl : loaderOptions.workerUrl;

  // Mark as URL
  const workerSource = `url(${workerUrl})`;
  const workerName = loader.name;

  const workerFarm = getWorkerFarm(options);

  // options.log object contains functions which cannot be transferred
  // TODO - decide how to handle logging on workers
  options = JSON.parse(JSON.stringify(options));

  const warning = loader.version !== VERSION ? `(core version ${VERSION})` : '';

  return workerFarm.process(workerSource, `${workerName}-worker@${loader.version}${warning}`, {
    arraybuffer: Object(_javascript_utils_binary_utils__WEBPACK_IMPORTED_MODULE_1__["toArrayBuffer"])(data),
    options,
    source: `loaders.gl@${VERSION}`, // Lets worker ignore unrelated messages
    type: 'parse' // For future extension
  });
}

let _workerFarm = null;

// Create a single instance of a worker farm
function getWorkerFarm(options = {}) {
  const props = {};
  if (options.maxConcurrency) {
    props.maxConcurrency = options.maxConcurrency;
  }
  if (options.onDebug) {
    props.onDebug = options.onDebug;
  }

  if (!_workerFarm) {
    _workerFarm = new _worker_utils_worker_farm__WEBPACK_IMPORTED_MODULE_0__["default"]({onMessage: onWorkerMessage});
  }
  _workerFarm.setProps(props);

  return _workerFarm;
}

async function onWorkerMessage({worker, data, resolve, reject}) {
  switch (data.type) {
    case 'done':
      resolve(data.result);
      break;

    case 'parse':
      try {
        const result = await Object(_api_parse__WEBPACK_IMPORTED_MODULE_3__["parse"])(data.arraybuffer, data.options, data.url);
        worker.postMessage({type: 'parse-done', id: data.id, result}, Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_2__["getTransferList"])(result));
      } catch (error) {
        worker.postMessage({type: 'parse-error', id: data.id, message: error.message});
      }
      break;

    case 'error':
      reject(data.message);
      break;

    default:
    // TODO - is this not an error case? Log a warning?
  }
}


/***/ }),

/***/ "./src/lib/progress/fetch-progress.js":
/*!********************************************!*\
  !*** ./src/lib/progress/fetch-progress.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchProgress; });
// Forked from github AnthumChris/fetch-progress-indicators under MIT license
/* global Response, ReadableStream */

// Intercepts the Response stream and creates a new Response
async function fetchProgress(
  response,
  onProgress,
  onDone = () => {},
  onError = () => {}
) {
  response = await response;
  if (!response.ok) {
    // ERROR checking needs to be done separately
    return response;
  }
  if (!response.body) {
    // 'ReadableStream not yet supported in this browser.
    return response;
  }
  const contentLength = response.headers.get('content-length');
  const totalBytes = contentLength && parseInt(contentLength, 10);
  if (!(contentLength > 0)) {
    return response;
  }
  // Currently override only implemented in browser
  if (typeof ReadableStream === 'undefined') {
    return response;
  }

  // Create a new stream that invisbly wraps original stream
  const progressStream = new ReadableStream({
    start(controller) {
      const reader = response.body.getReader();
      read(controller, reader, 0, totalBytes, onProgress, onDone, onError);
    }
  });

  return new Response(progressStream);
}

// Forward to original streams controller
// TODO - this causes a crazy deep "async stack"... rewrite as async iterator?
// eslint-disable-next-line max-params
async function read(controller, reader, loadedBytes, totalBytes, onProgress, onDone, onError) {
  try {
    const {done, value} = await reader.read();
    if (done) {
      onDone();
      controller.close();
      return;
    }
    loadedBytes += value.byteLength;
    const percent = Math.round((loadedBytes / totalBytes) * 100);
    onProgress(percent, {loadedBytes, totalBytes});
    controller.enqueue(value);
    await read(controller, reader, loadedBytes, totalBytes, onProgress, onDone, onError);
  } catch (error) {
    controller.error(error);
    onError(error);
  }
}


/***/ }),

/***/ "./src/lib/utils/mime-type-utils.js":
/*!******************************************!*\
  !*** ./src/lib/utils/mime-type-utils.js ***!
  \******************************************/
/*! exports provided: parseMIMEType, parseMIMETypeFromURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMIMEType", function() { return parseMIMEType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMIMETypeFromURL", function() { return parseMIMETypeFromURL; });
// TODO - build/integrate proper MIME type parsing
// https://mimesniff.spec.whatwg.org/

const DATA_URL_PATTERN = /^data:([-\w.]+\/[-\w.+]+)(;|,)/;
const MIME_TYPE_PATTERN = /^([-\w.]+\/[-\w.+]+)/;

function parseMIMEType(mimeString) {
  if (typeof mimeString !== 'string') {
    return '';
  }

  // If resource is a data url, extract any embedded mime type
  const matches = mimeString.match(MIME_TYPE_PATTERN);
  if (matches) {
    return matches[1];
  }

  return mimeString;
}

function parseMIMETypeFromURL(dataUrl) {
  if (typeof dataUrl !== 'string') {
    return '';
  }

  // If resource is a data URL, extract any embedded mime type
  const matches = dataUrl.match(DATA_URL_PATTERN);
  if (matches) {
    return matches[1];
  }

  return '';
}


/***/ }),

/***/ "./src/lib/utils/resource-utils.js":
/*!*****************************************!*\
  !*** ./src/lib/utils/resource-utils.js ***!
  \*****************************************/
/*! exports provided: getResourceUrlAndType, getResourceContentLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceUrlAndType", function() { return getResourceUrlAndType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceContentLength", function() { return getResourceContentLength; });
/* harmony import */ var _javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../javascript-utils/is-type */ "./src/javascript-utils/is-type.js");
/* harmony import */ var _mime_type_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mime-type-utils */ "./src/lib/utils/mime-type-utils.js");



const QUERY_STRING_PATTERN = /\?.*/;

function getResourceUrlAndType(resource) {
  // If resource is a response, it contains the information directly
  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isResponse"])(resource)) {
    const contentType = Object(_mime_type_utils__WEBPACK_IMPORTED_MODULE_1__["parseMIMEType"])(resource.headers.get('content-type'));
    const urlType = Object(_mime_type_utils__WEBPACK_IMPORTED_MODULE_1__["parseMIMETypeFromURL"])(resource.url);

    return {
      url: stripQueryString(resource.url || ''),
      type: contentType || urlType || null
    };
  }

  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isBlob"])(resource)) {
    return {
      url: stripQueryString(resource.url || ''),
      type: resource.type || ''
    };
  }

  if (typeof resource === 'string') {
    return {
      // TODO this could mess up data URL but it doesn't matter as it is just used for inference
      url: stripQueryString(resource),
      // If a data url
      type: Object(_mime_type_utils__WEBPACK_IMPORTED_MODULE_1__["parseMIMETypeFromURL"])(resource)
    };
  }

  // Unknown
  return {
    url: '',
    type: ''
  };
}

function getResourceContentLength(resource) {
  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isResponse"])(resource)) {
    return resource.headers['content-length'] || -1;
  }
  if (Object(_javascript_utils_is_type__WEBPACK_IMPORTED_MODULE_0__["isBlob"])(resource)) {
    return resource.size;
  }
  if (typeof resource === 'string') {
    // TODO - handle data URL?
    return resource.length;
  }
  if (resource instanceof ArrayBuffer) {
    return resource.byteLength;
  }
  if (ArrayBuffer.isView(resource)) {
    return resource.byteLength;
  }

  return -1;
}

function stripQueryString(url) {
  return url.replace(QUERY_STRING_PATTERN, '');
}


/***/ }),

/***/ "./src/worker-utils/get-worker-url.js":
/*!********************************************!*\
  !*** ./src/worker-utils/get-worker-url.js ***!
  \********************************************/
/*! exports provided: getWorkerURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkerURL", function() { return getWorkerURL; });
/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");
/* global URL, Blob */


const workerURLCache = new Map();

// Creates a URL from worker source that can be used to create `Worker` instances
// Packages (and then caches) the result of `webworkify` as an "Object URL"
function getWorkerURL(workerSource, workerName = 'Worker') {
  Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(typeof workerSource === 'string', 'worker source');

  // CASE: url(./worker.js)
  // This pattern is used to differentiate worker urls from worker source code
  // Load from url is needed for testing, when using Webpack & webworker target
  if (workerSource.startsWith('url(') && workerSource.endsWith(')')) {
    const workerUrl = workerSource.match(/^url\((.*)\)$/)[1];

    // A local script url, we can use it to initialize a Worker directly
    if (workerUrl && !workerUrl.startsWith('http')) {
      return workerUrl;
    }

    // Per spec, worker cannot be initialized with a script from a different origin
    // However a local worker script can still import scripts from other origins,
    // so we simply build a wrapper script
    workerSource = buildScript(workerUrl);
  }

  let workerURL = workerURLCache.get(workerSource);

  if (!workerURL) {
    // NOTE: webworkify was previously used
    // const blob = webworkify(workerSource, {bare: true});
    const blob = new Blob([workerSource], {type: 'application/javascript'});
    workerURL = URL.createObjectURL(blob);
    workerURLCache.set(workerSource, workerURL);
  }

  return workerURL;
}

// Only use trusted sources!
function buildScript(workerUrl) {
  return `\
try {
  importScripts('${workerUrl}');
} catch (error) {
  console.error(error);
}`;
}


/***/ }),

/***/ "./src/worker-utils/worker-farm.js":
/*!*****************************************!*\
  !*** ./src/worker-utils/worker-farm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkerFarm; });
/* harmony import */ var _worker_pool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-pool */ "./src/worker-utils/worker-pool.js");


const DEFAULT_MAX_CONCURRENCY = 5;

/**
 * Process multiple data messages with a "farm" of different workers (in worker pools)
 */
class WorkerFarm {
  static isSupported() {
    return typeof Worker !== 'undefined';
  }

  constructor({maxConcurrency = DEFAULT_MAX_CONCURRENCY, onMessage, onDebug = () => {}}) {
    this.maxConcurrency = maxConcurrency;
    this.onMessage = onMessage;
    this.onDebug = onDebug;
    this.workerPools = new Map();
  }

  setProps(props) {
    if ('maxConcurrency' in props) {
      this.maxConcurrency = props.maxConcurrency;
    }

    if ('onDebug' in props) {
      this.onDebug = props.onDebug;
    }
  }

  destroy() {
    this.workerPools.forEach(workerPool => workerPool.destroy());
  }

  /**
   * Process binary data in a worker
   * @param {any} data - data (containing binary typed arrays) to be transferred to worker
   * @returns a Promise with data containing typed arrays transferred back from work
   */
  async process(workerSource, workerName, data) {
    const workerPool = this._getWorkerPool(workerSource, workerName);
    return workerPool.process(data);
  }

  // PRIVATE

  _getWorkerPool(workerSource, workerName) {
    let workerPool = this.workerPools.get(workerName);
    if (!workerPool) {
      workerPool = new _worker_pool__WEBPACK_IMPORTED_MODULE_0__["default"]({
        source: workerSource,
        name: workerName,
        onMessage: this.onMessage,
        maxConcurrency: this.maxConcurrency,
        onDebug: this.onDebug
      });
      this.workerPools.set(workerName, workerPool);
    }
    return workerPool;
  }
}


/***/ }),

/***/ "./src/worker-utils/worker-pool.js":
/*!*****************************************!*\
  !*** ./src/worker-utils/worker-pool.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkerPool; });
/* harmony import */ var _worker_thread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-thread */ "./src/worker-utils/worker-thread.js");


/**
 * Process multiple data messages with small pool of identical workers
 */
class WorkerPool {
  constructor({source, name = 'unnamed', maxConcurrency = 1, onMessage, onDebug = () => {}}) {
    this.source = source;
    this.name = name;
    this.maxConcurrency = maxConcurrency;
    this.onMessage = onMessage;
    this.onDebug = onDebug;

    this.jobQueue = [];
    this.idleQueue = [];
    this.count = 0;
    this.isDestroyed = false;
  }

  destroy() {
    // Destroy idle workers, active Workers will be destroyed on completion
    this.idleQueue.forEach(worker => worker.destroy());
    this.isDestroyed = true;
  }

  /**
   * Process binary data in a worker
   */
  async process(data, jobName) {
    return new Promise((resolve, reject) => {
      this.jobQueue.push({data, jobName, resolve, reject});
      this._startQueuedJob();
    });
  }

  // PRIVATE

  _startQueuedJob() {
    if (!this.jobQueue.length) {
      return;
    }
    const worker = this._getAvailableWorker();
    if (!worker) {
      return;
    }

    // We have a worker, dequeue and start the job
    const job = this.jobQueue.shift();

    // @ts-ignore
    this.onDebug({
      message: 'processing',
      worker: worker.name,
      job: job.jobName,
      backlog: this.jobQueue.length
    });

    worker
      .process(job.data)
      .then(result => job.resolve(result))
      .catch(error => job.reject(error))
      .then(() => this._onWorkerDone(worker));
  }

  _onWorkerDone(worker) {
    if (this.isDestroyed) {
      worker.destroy();
    } else {
      this.idleQueue.push(worker);
      this._startQueuedJob();
    }
  }

  _getAvailableWorker() {
    // If a worker has completed and returned to the queue, it can be used
    if (this.idleQueue.length > 0) {
      return this.idleQueue.shift();
    }

    // Create fresh worker if we haven't yet created the max amount of worker threads for this worker source
    if (this.count < this.maxConcurrency) {
      this.count++;
      const name = `${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`;
      return new _worker_thread__WEBPACK_IMPORTED_MODULE_0__["default"]({source: this.source, onMessage: this.onMessage, name});
    }

    // No worker available, have to wait
    return null;
  }
}


/***/ }),

/***/ "./src/worker-utils/worker-thread.js":
/*!*******************************************!*\
  !*** ./src/worker-utils/worker-thread.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkerThread; });
/* harmony import */ var _get_worker_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-worker-url */ "./src/worker-utils/get-worker-url.js");
/* harmony import */ var _loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loaders.gl/loader-utils */ "../loader-utils/src/index.js");
/* global Worker */



let count = 0;

// By default resolves to the first message the worker sends back
function defaultOnMessage({data, resolve}) {
  resolve(data);
}

class WorkerThread {
  constructor({source, name = `web-worker-${count++}`, onMessage}) {
    const url = Object(_get_worker_url__WEBPACK_IMPORTED_MODULE_0__["getWorkerURL"])(source, name);
    this.worker = new Worker(url, {name});
    this.name = name;
    this.onMessage = onMessage || defaultOnMessage;
  }

  /**
   * Process binary data in a worker
   */
  async process(data) {
    return new Promise((resolve, reject) => {
      this.worker.onmessage = event =>
        this.onMessage({worker: this.worker, data: event.data, resolve, reject});
      this.worker.onerror = error => {
        // Note Error object does not have the expected fields if loading failed completely
        // https://developer.mozilla.org/en-US/docs/Web/API/Worker#Event_handlers
        // https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent
        let message = `${this.name}: WorkerThread.process() failed`;
        if (error.message) {
          message += ` ${error.message} ${error.filename}:${error.lineno}:${error.colno}`;
        }
        const betterError = new Error(message);
        console.error(error); // eslint-disable-line
        reject(betterError);
      };
      const transferList = Object(_loaders_gl_loader_utils__WEBPACK_IMPORTED_MODULE_1__["getTransferList"])(data);
      this.worker.postMessage(data, transferList);
    });
  }

  destroy() {
    this.worker.terminate();
    this.worker = null;
  }
}


/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** ./require-utils.node (ignored) ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!************************************************!*\
  !*** ../../node/read-file-sync.node (ignored) ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************!*\
  !*** ../../node/write-file.node (ignored) ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!****************************************************!*\
  !*** ../node/utils/to-array-buffer.node (ignored) ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
});