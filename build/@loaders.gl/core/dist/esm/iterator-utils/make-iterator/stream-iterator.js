import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _awaitAsyncGenerator from "@babel/runtime/helpers/esm/awaitAsyncGenerator";
import _wrapAsyncGenerator from "@babel/runtime/helpers/esm/wrapAsyncGenerator";
import { isBrowser, nodeVersion } from '@loaders.gl/loader-utils';
export function makeStreamIterator(stream) {
  if (isBrowser || nodeVersion >= 10) {
    if (typeof stream[Symbol.asyncIterator] === 'function') {
      return stream;
    }

    if (typeof stream.getIterator === 'function') {
      return stream.getIterator();
    }
  }

  return isBrowser ? makeBrowserStreamIterator(stream) : makeNodeStreamIterator(stream);
}

function makeBrowserStreamIterator(_x) {
  return _makeBrowserStreamIterator.apply(this, arguments);
}

function _makeBrowserStreamIterator() {
  _makeBrowserStreamIterator = _wrapAsyncGenerator(_regeneratorRuntime.mark(function _callee(stream) {
    var reader, _yield$_awaitAsyncGen, done, value;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            reader = stream.getReader();
            _context.prev = 1;

          case 2:
            if (!true) {
              _context.next = 14;
              break;
            }

            _context.next = 5;
            return _awaitAsyncGenerator(reader.read());

          case 5:
            _yield$_awaitAsyncGen = _context.sent;
            done = _yield$_awaitAsyncGen.done;
            value = _yield$_awaitAsyncGen.value;

            if (!done) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return");

          case 10:
            _context.next = 12;
            return value;

          case 12:
            _context.next = 2;
            break;

          case 14:
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](1);
            reader.releaseLock();

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 16]]);
  }));
  return _makeBrowserStreamIterator.apply(this, arguments);
}

function makeNodeStreamIterator(_x2) {
  return _makeNodeStreamIterator.apply(this, arguments);
}

function _makeNodeStreamIterator() {
  _makeNodeStreamIterator = _wrapAsyncGenerator(_regeneratorRuntime.mark(function _callee2(stream) {
    var data;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _awaitAsyncGenerator(stream);

          case 2:
            stream = _context2.sent;

          case 3:
            if (!true) {
              _context2.next = 15;
              break;
            }

            data = stream.read();

            if (!(data !== null)) {
              _context2.next = 9;
              break;
            }

            _context2.next = 8;
            return data;

          case 8:
            return _context2.abrupt("continue", 3);

          case 9:
            if (!stream._readableState.ended) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return");

          case 11:
            _context2.next = 13;
            return _awaitAsyncGenerator(onceReadable(stream));

          case 13:
            _context2.next = 3;
            break;

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _makeNodeStreamIterator.apply(this, arguments);
}

function onceReadable(_x3) {
  return _onceReadable.apply(this, arguments);
}

function _onceReadable() {
  _onceReadable = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3(stream) {
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new Promise(function (resolve) {
              stream.once('readable', resolve);
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _onceReadable.apply(this, arguments);
}
//# sourceMappingURL=stream-iterator.js.map