"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = forEach;
exports.concatenateChunksAsync = concatenateChunksAsync;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _asyncIterator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncIterator"));

var _memoryCopyUtils = require("../javascript-utils/memory-copy-utils");

function forEach(_x, _x2) {
  return _forEach.apply(this, arguments);
}

function _forEach() {
  _forEach = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(iterator, visitor) {
    var _yield$iterator$next, done, value, cancel;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!true) {
              _context.next = 14;
              break;
            }

            _context.next = 3;
            return iterator.next();

          case 3:
            _yield$iterator$next = _context.sent;
            done = _yield$iterator$next.done;
            value = _yield$iterator$next.value;

            if (!done) {
              _context.next = 9;
              break;
            }

            iterator["return"]();
            return _context.abrupt("return");

          case 9:
            cancel = visitor(value);

            if (!cancel) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return");

          case 12:
            _context.next = 0;
            break;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _forEach.apply(this, arguments);
}

function concatenateChunksAsync(_x3) {
  return _concatenateChunksAsync.apply(this, arguments);
}

function _concatenateChunksAsync() {
  _concatenateChunksAsync = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(asyncIterator) {
    var arrayBuffer, string, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, chunk;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            arrayBuffer = new ArrayBuffer(0);
            string = '';
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context2.prev = 4;
            _iterator = (0, _asyncIterator2["default"])(asyncIterator);

          case 6:
            _context2.next = 8;
            return _iterator.next();

          case 8:
            _step = _context2.sent;
            _iteratorNormalCompletion = _step.done;
            _context2.next = 12;
            return _step.value;

          case 12:
            _value = _context2.sent;

            if (_iteratorNormalCompletion) {
              _context2.next = 19;
              break;
            }

            chunk = _value;

            if (typeof chunk === 'string') {
              string += chunk;
            } else {
              arrayBuffer = (0, _memoryCopyUtils.concatenateArrayBuffers)(arrayBuffer, chunk);
            }

          case 16:
            _iteratorNormalCompletion = true;
            _context2.next = 6;
            break;

          case 19:
            _context2.next = 25;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 25:
            _context2.prev = 25;
            _context2.prev = 26;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context2.next = 30;
              break;
            }

            _context2.next = 30;
            return _iterator["return"]();

          case 30:
            _context2.prev = 30;

            if (!_didIteratorError) {
              _context2.next = 33;
              break;
            }

            throw _iteratorError;

          case 33:
            return _context2.finish(30);

          case 34:
            return _context2.finish(25);

          case 35:
            return _context2.abrupt("return", string || arrayBuffer);

          case 36:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 21, 25, 35], [26,, 30, 34]]);
  }));
  return _concatenateChunksAsync.apply(this, arguments);
}
//# sourceMappingURL=async-iteration.js.map