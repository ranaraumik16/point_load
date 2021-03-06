"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchFile = fetchFile;

const fetch = require('node-fetch');
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _loaderUtils = require("@loaders.gl/loader-utils");

var _isType = require("../../javascript-utils/is-type");

var _fetchFile2 = _interopRequireDefault(require("./fetch-file.browser"));

var _fetchErrorMessage = require("./fetch-error-message");

function fetchFile(_x) {
  return _fetchFile.apply(this, arguments);
}

function _fetchFile() {
  _fetchFile = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(url) {
    var options,
        response,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

            if (!(0, _isType.isBlob)(url)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", (0, _fetchFile2["default"])(url, options));

          case 3:
            url = (0, _loaderUtils.resolvePath)(url);
            _context.next = 6;
            return fetch(url, options);

          case 6:
            response = _context.sent;

            if (!(!response.ok && options["throws"])) {
              _context.next = 13;
              break;
            }

            _context.t0 = Error;
            _context.next = 11;
            return (0, _fetchErrorMessage.getErrorMessageFromResponse)(response);

          case 11:
            _context.t1 = _context.sent;
            throw new _context.t0(_context.t1);

          case 13:
            return _context.abrupt("return", response);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchFile.apply(this, arguments);
}
//# sourceMappingURL=fetch-file.js.map