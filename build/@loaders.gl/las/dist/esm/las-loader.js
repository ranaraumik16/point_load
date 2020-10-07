import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import parseLAS from './lib/parse-las';
var VERSION = typeof "2.2.8" !== 'undefined' ? "2.2.8" : 'latest';
export var LASWorkerLoader = {
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
export var LASLoader = _objectSpread(_objectSpread({}, LASWorkerLoader), {}, {
  parse: function () {
    var _parse = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(arrayBuffer, options) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", parseLAS(arrayBuffer, options));

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
  parseSync: parseLAS
});
//# sourceMappingURL=las-loader.js.map