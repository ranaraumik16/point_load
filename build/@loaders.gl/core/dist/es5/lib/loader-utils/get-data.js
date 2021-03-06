"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrlFromData = getUrlFromData;
exports.getArrayBufferOrStringFromDataSync = getArrayBufferOrStringFromDataSync;
exports.getArrayBufferOrStringFromData = getArrayBufferOrStringFromData;
exports.getAsyncIteratorFromData = getAsyncIteratorFromData;
exports.getIteratorFromData = getIteratorFromData;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _isType = require("../../javascript-utils/is-type");

var _makeIterator = require("../../iterator-utils/make-iterator/make-iterator");

var _asyncIteration = require("../../iterator-utils/async-iteration");

var _fetchFile = _interopRequireDefault(require("../fetch/fetch-file.browser"));

var _checkErrors = require("./check-errors");

var ERR_DATA = 'Cannot convert supplied data type';

function getUrlFromData(data, url) {
  if ((0, _isType.isResponse)(data)) {
    url = url || data.url;
  } else if ((0, _isType.isBlob)(url)) {
    url = url.name;
  }

  return typeof url === 'string' ? url.replace(/\?.*/, '') : url;
}

function getArrayBufferOrStringFromDataSync(data, loader) {
  if (loader.text && typeof data === 'string') {
    return data;
  }

  if (data instanceof ArrayBuffer) {
    var arrayBuffer = data;

    if (loader.text && !loader.binary) {
      var textDecoder = new TextDecoder('utf8');
      return textDecoder.decode(arrayBuffer);
    }

    return arrayBuffer;
  }

  if (ArrayBuffer.isView(data) || (0, _isType.isBuffer)(data)) {
    if (loader.text && !loader.binary) {
      var _textDecoder = new TextDecoder('utf8');

      return _textDecoder.decode(data);
    }

    var _arrayBuffer = data.buffer;
    var byteLength = data.byteLength || data.length;

    if (data.byteOffset !== 0 || byteLength !== _arrayBuffer.byteLength) {
      _arrayBuffer = _arrayBuffer.slice(data.byteOffset, data.byteOffset + byteLength);
    }

    return _arrayBuffer;
  }

  throw new Error(ERR_DATA);
}

function getArrayBufferOrStringFromData(_x, _x2) {
  return _getArrayBufferOrStringFromData.apply(this, arguments);
}

function _getArrayBufferOrStringFromData() {
  _getArrayBufferOrStringFromData = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(data, loader) {
    var isArrayBuffer, response;
    return _regenerator["default"].wrap(function _callee$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return data;

          case 2:
            data = _context3.sent;
            isArrayBuffer = data instanceof ArrayBuffer || ArrayBuffer.isView(data);

            if (!(typeof data === 'string' || isArrayBuffer)) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", getArrayBufferOrStringFromDataSync(data, loader));

          case 6:
            if (!(0, _isType.isBlob)(data)) {
              _context3.next = 10;
              break;
            }

            _context3.next = 9;
            return (0, _fetchFile["default"])(data);

          case 9:
            data = _context3.sent;

          case 10:
            if (!(0, _isType.isResponse)(data)) {
              _context3.next = 24;
              break;
            }

            response = data;
            _context3.next = 14;
            return (0, _checkErrors.checkFetchResponseStatus)(response);

          case 14:
            if (!loader.binary) {
              _context3.next = 20;
              break;
            }

            _context3.next = 17;
            return response.arrayBuffer();

          case 17:
            _context3.t0 = _context3.sent;
            _context3.next = 23;
            break;

          case 20:
            _context3.next = 22;
            return response.text();

          case 22:
            _context3.t0 = _context3.sent;

          case 23:
            return _context3.abrupt("return", _context3.t0);

          case 24:
            if ((0, _isType.isReadableStream)(data)) {
              data = (0, _makeIterator.makeIterator)(data);
            }

            if (!((0, _isType.isIterable)(data) || (0, _isType.isAsyncIterable)(data))) {
              _context3.next = 27;
              break;
            }

            return _context3.abrupt("return", (0, _asyncIteration.concatenateChunksAsync)(data));

          case 27:
            throw new Error(ERR_DATA);

          case 28:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee);
  }));
  return _getArrayBufferOrStringFromData.apply(this, arguments);
}

function getAsyncIteratorFromData(_x3) {
  return _getAsyncIteratorFromData.apply(this, arguments);
}

function _getAsyncIteratorFromData() {
  _getAsyncIteratorFromData = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(data) {
    return _regenerator["default"].wrap(function _callee2$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(0, _isType.isIterator)(data)) {
              _context4.next = 2;
              break;
            }

            return _context4.abrupt("return", data);

          case 2:
            if (!(0, _isType.isResponse)(data)) {
              _context4.next = 6;
              break;
            }

            _context4.next = 5;
            return (0, _checkErrors.checkFetchResponseStatus)(data);

          case 5:
            return _context4.abrupt("return", (0, _makeIterator.makeIterator)(data.body));

          case 6:
            if (!((0, _isType.isBlob)(data) || (0, _isType.isReadableStream)(data))) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", (0, _makeIterator.makeIterator)(data));

          case 8:
            if (!(0, _isType.isAsyncIterable)(data)) {
              _context4.next = 10;
              break;
            }

            return _context4.abrupt("return", data[Symbol.asyncIterator]());

          case 10:
            return _context4.abrupt("return", getIteratorFromData(data));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee2);
  }));
  return _getAsyncIteratorFromData.apply(this, arguments);
}

function getIteratorFromData(data) {
  if (ArrayBuffer.isView(data)) {
    return _regenerator["default"].mark(function oneChunk() {
      return _regenerator["default"].wrap(function oneChunk$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return data.buffer;

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, oneChunk);
    })();
  }

  if (data instanceof ArrayBuffer) {
    return _regenerator["default"].mark(function oneChunk() {
      return _regenerator["default"].wrap(function oneChunk$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return data;

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, oneChunk);
    })();
  }

  if ((0, _isType.isIterator)(data)) {
    return data;
  }

  if ((0, _isType.isIterable)(data)) {
    return data[Symbol.iterator]();
  }

  throw new Error(ERR_DATA);
}
//# sourceMappingURL=get-data.js.map