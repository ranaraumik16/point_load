"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadLibrary = loadLibrary;
exports.getLibraryUrl = getLibraryUrl;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _globals = require("../env-utils/globals");

var _requireUtils = require("./require-utils.node");

var _assert = _interopRequireDefault(require("../env-utils/assert"));

var LATEST = 'beta';
var VERSION = typeof "2.2.8" !== 'undefined' ? "2.2.8" : LATEST;
var loadLibraryPromises = {};

function loadLibrary(_x) {
  return _loadLibrary.apply(this, arguments);
}

function _loadLibrary() {
  _loadLibrary = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(libraryUrl) {
    var moduleName,
        options,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            moduleName = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};

            if (moduleName) {
              libraryUrl = getLibraryUrl(libraryUrl, moduleName, options);
            }

            loadLibraryPromises[libraryUrl] = loadLibraryPromises[libraryUrl] || loadLibraryFromFile(libraryUrl);
            _context.next = 6;
            return loadLibraryPromises[libraryUrl];

          case 6:
            return _context.abrupt("return", _context.sent);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadLibrary.apply(this, arguments);
}

function getLibraryUrl(library, moduleName, options) {
  var modules = options.modules || {};

  if (modules[library]) {
    return modules[library];
  }

  if (!_globals.isBrowser) {
    return "modules/".concat(moduleName, "/dist/libs/").concat(library);
  }

  if (options.CDN) {
    (0, _assert["default"])(options.CDN.startsWith('http'));
    return "".concat(options.CDN, "/").concat(moduleName, "@").concat(VERSION, "/dist/libs/").concat(library);
  }

  if (_globals.isWorker) {
    return "../src/libs/".concat(library);
  }

  return "modules/".concat(moduleName, "/src/libs/").concat(library);
}

function loadLibraryFromFile(_x2) {
  return _loadLibraryFromFile.apply(this, arguments);
}

function _loadLibraryFromFile() {
  _loadLibraryFromFile = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(libraryUrl) {
    var _response, response, scriptSource;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!libraryUrl.endsWith('wasm')) {
              _context2.next = 7;
              break;
            }

            _context2.next = 3;
            return fetch(libraryUrl);

          case 3:
            _response = _context2.sent;
            _context2.next = 6;
            return _response.arrayBuffer();

          case 6:
            return _context2.abrupt("return", _context2.sent);

          case 7:
            if (_globals.isBrowser) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", (0, _requireUtils.requireFromFile)(libraryUrl));

          case 9:
            if (!_globals.isWorker) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", importScripts(libraryUrl));

          case 11:
            _context2.next = 13;
            return fetch(libraryUrl);

          case 13:
            response = _context2.sent;
            _context2.next = 16;
            return response.text();

          case 16:
            scriptSource = _context2.sent;
            return _context2.abrupt("return", loadLibraryFromString(scriptSource, libraryUrl));

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadLibraryFromFile.apply(this, arguments);
}

function loadLibraryFromString(scriptSource, id) {
  if (!_globals.isBrowser) {
    return (0, _requireUtils.requireFromString)(scriptSource, id);
  }

  if (_globals.isWorker) {
    eval.call(_globals.global, scriptSource);
    return null;
  }

  var script = document.createElement('script');
  script.id = id;

  try {
    script.appendChild(document.createTextNode(scriptSource));
  } catch (e) {
    script.text = scriptSource;
  }

  document.body.appendChild(script);
  return null;
}
//# sourceMappingURL=library-utils.js.map