"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = fetchProgress;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function fetchProgress(_x, _x2) {
  return _fetchProgress.apply(this, arguments);
}

function _fetchProgress() {
  _fetchProgress = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(response, onProgress) {
    var onDone,
        onError,
        contentLength,
        totalBytes,
        progressStream,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            onDone = _args.length > 2 && _args[2] !== undefined ? _args[2] : function () {};
            onError = _args.length > 3 && _args[3] !== undefined ? _args[3] : function () {};
            _context.next = 4;
            return response;

          case 4:
            response = _context.sent;

            if (response.ok) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", response);

          case 7:
            if (response.body) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", response);

          case 9:
            contentLength = response.headers.get('content-length');
            totalBytes = contentLength && parseInt(contentLength, 10);

            if (contentLength > 0) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", response);

          case 13:
            if (!(typeof ReadableStream === 'undefined')) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", response);

          case 15:
            progressStream = new ReadableStream({
              start: function start(controller) {
                var reader = response.body.getReader();
                read(controller, reader, 0, totalBytes, onProgress, onDone, onError);
              }
            });
            return _context.abrupt("return", new Response(progressStream));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchProgress.apply(this, arguments);
}

function read(_x3, _x4, _x5, _x6, _x7, _x8, _x9) {
  return _read.apply(this, arguments);
}

function _read() {
  _read = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(controller, reader, loadedBytes, totalBytes, onProgress, onDone, onError) {
    var _yield$reader$read, done, value, percent;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return reader.read();

          case 3:
            _yield$reader$read = _context2.sent;
            done = _yield$reader$read.done;
            value = _yield$reader$read.value;

            if (!done) {
              _context2.next = 10;
              break;
            }

            onDone();
            controller.close();
            return _context2.abrupt("return");

          case 10:
            loadedBytes += value.byteLength;
            percent = Math.round(loadedBytes / totalBytes * 100);
            onProgress(percent, {
              loadedBytes: loadedBytes,
              totalBytes: totalBytes
            });
            controller.enqueue(value);
            _context2.next = 16;
            return read(controller, reader, loadedBytes, totalBytes, onProgress, onDone, onError);

          case 16:
            _context2.next = 22;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);
            controller.error(_context2.t0);
            onError(_context2.t0);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 18]]);
  }));
  return _read.apply(this, arguments);
}
//# sourceMappingURL=fetch-progress.js.map