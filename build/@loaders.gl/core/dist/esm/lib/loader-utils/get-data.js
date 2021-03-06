import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { isResponse, isReadableStream, isAsyncIterable, isIterable, isIterator, isBlob, isBuffer } from '../../javascript-utils/is-type';
import { makeIterator } from '../../iterator-utils/make-iterator/make-iterator';
import { concatenateChunksAsync } from '../../iterator-utils/async-iteration';
import fetchFileReadable from '../fetch/fetch-file.browser';
import { checkFetchResponseStatus } from './check-errors';
var ERR_DATA = 'Cannot convert supplied data type';
export function getUrlFromData(data, url) {
  if (isResponse(data)) {
    url = url || data.url;
  } else if (isBlob(url)) {
    url = url.name;
  }

  return typeof url === 'string' ? url.replace(/\?.*/, '') : url;
}
export function getArrayBufferOrStringFromDataSync(data, loader) {
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

  if (ArrayBuffer.isView(data) || isBuffer(data)) {
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
export function getArrayBufferOrStringFromData(_x, _x2) {
  return _getArrayBufferOrStringFromData.apply(this, arguments);
}

function _getArrayBufferOrStringFromData() {
  _getArrayBufferOrStringFromData = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(data, loader) {
    var isArrayBuffer, response;
    return _regeneratorRuntime.wrap(function _callee$(_context3) {
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
            if (!isBlob(data)) {
              _context3.next = 10;
              break;
            }

            _context3.next = 9;
            return fetchFileReadable(data);

          case 9:
            data = _context3.sent;

          case 10:
            if (!isResponse(data)) {
              _context3.next = 24;
              break;
            }

            response = data;
            _context3.next = 14;
            return checkFetchResponseStatus(response);

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
            if (isReadableStream(data)) {
              data = makeIterator(data);
            }

            if (!(isIterable(data) || isAsyncIterable(data))) {
              _context3.next = 27;
              break;
            }

            return _context3.abrupt("return", concatenateChunksAsync(data));

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

export function getAsyncIteratorFromData(_x3) {
  return _getAsyncIteratorFromData.apply(this, arguments);
}

function _getAsyncIteratorFromData() {
  _getAsyncIteratorFromData = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(data) {
    return _regeneratorRuntime.wrap(function _callee2$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!isIterator(data)) {
              _context4.next = 2;
              break;
            }

            return _context4.abrupt("return", data);

          case 2:
            if (!isResponse(data)) {
              _context4.next = 6;
              break;
            }

            _context4.next = 5;
            return checkFetchResponseStatus(data);

          case 5:
            return _context4.abrupt("return", makeIterator(data.body));

          case 6:
            if (!(isBlob(data) || isReadableStream(data))) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", makeIterator(data));

          case 8:
            if (!isAsyncIterable(data)) {
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

export function getIteratorFromData(data) {
  if (ArrayBuffer.isView(data)) {
    return _regeneratorRuntime.mark(function oneChunk() {
      return _regeneratorRuntime.wrap(function oneChunk$(_context) {
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
    return _regeneratorRuntime.mark(function oneChunk() {
      return _regeneratorRuntime.wrap(function oneChunk$(_context2) {
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

  if (isIterator(data)) {
    return data;
  }

  if (isIterable(data)) {
    return data[Symbol.iterator]();
  }

  throw new Error(ERR_DATA);
}
//# sourceMappingURL=get-data.js.map