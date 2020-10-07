"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LASLoader = exports.LASWorkerLoader = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _parseLas = _interopRequireDefault(require("./lib/parse-las"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var VERSION = typeof "2.2.8" !== 'undefined' ? "2.2.8" : 'latest';
var LASWorkerLoader = {
  id: 'las',
  name: 'LAS',
  version: VERSION,
  extensions: ['las', 'laz'],
  mimeTypes: ['application/octet-stream'],
  text: true,
  binary: true,
  test: 'LAS',
  options: {
    las: {
      workerUrl: "https://unpkg.com/@loaders.gl/las@".concat(VERSION, "/dist/las-loader.worker.js"),
      skip: 1
    }
  }
};
exports.LASWorkerLoader = LASWorkerLoader;

var LASLoader = _objectSpread(_objectSpread({}, LASWorkerLoader), {}, {
  parse: function () {
    var _parse = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(arrayBuffer, options) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", (0, _parseLas["default"])(arrayBuffer, options));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function parse(_x, _x2) {
      return _parse.apply(this, arguments);
    }

    return parse;
  }(),
  parseSync: _parseLas["default"]
});

exports.LASLoader = LASLoader;
//# sourceMappingURL=las-loader.js.map