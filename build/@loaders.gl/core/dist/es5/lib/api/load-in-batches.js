"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadInBatches = loadInBatches;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fetchFile = require("../fetch/fetch-file");

var _parseInBatches = require("./parse-in-batches");

function loadInBatches(_x, _x2, _x3) {
  return _loadInBatches.apply(this, arguments);
}

function _loadInBatches() {
  _loadInBatches = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(url, loaders, options) {
    var response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _fetchFile.fetchFile)(url, options);

          case 2:
            response = _context.sent;
            return _context.abrupt("return", (0, _parseInBatches.parseInBatches)(response, loaders, options, url));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadInBatches.apply(this, arguments);
}
//# sourceMappingURL=load-in-batches.js.map