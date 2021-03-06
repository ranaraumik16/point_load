"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _getWorkerUrl = require("./get-worker-url");

var _loaderUtils = require("@loaders.gl/loader-utils");

var count = 0;

function defaultOnMessage(_ref) {
  var data = _ref.data,
      resolve = _ref.resolve;
  resolve(data);
}

var WorkerThread = function () {
  function WorkerThread(_ref2) {
    var source = _ref2.source,
        _ref2$name = _ref2.name,
        name = _ref2$name === void 0 ? "web-worker-".concat(count++) : _ref2$name,
        onMessage = _ref2.onMessage;
    (0, _classCallCheck2["default"])(this, WorkerThread);
    var url = (0, _getWorkerUrl.getWorkerURL)(source, name);
    this.worker = new Worker(url, {
      name: name
    });
    this.name = name;
    this.onMessage = onMessage || defaultOnMessage;
  }

  (0, _createClass2["default"])(WorkerThread, [{
    key: "process",
    value: function () {
      var _process = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(data) {
        var _this = this;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _this.worker.onmessage = function (event) {
                    return _this.onMessage({
                      worker: _this.worker,
                      data: event.data,
                      resolve: resolve,
                      reject: reject
                    });
                  };

                  _this.worker.onerror = function (error) {
                    var message = "".concat(_this.name, ": WorkerThread.process() failed");

                    if (error.message) {
                      message += " ".concat(error.message, " ").concat(error.filename, ":").concat(error.lineno, ":").concat(error.colno);
                    }

                    var betterError = new Error(message);
                    console.error(error);
                    reject(betterError);
                  };

                  var transferList = (0, _loaderUtils.getTransferList)(data);

                  _this.worker.postMessage(data, transferList);
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function process(_x) {
        return _process.apply(this, arguments);
      }

      return process;
    }()
  }, {
    key: "destroy",
    value: function destroy() {
      this.worker.terminate();
      this.worker = null;
    }
  }]);
  return WorkerThread;
}();

exports["default"] = WorkerThread;
//# sourceMappingURL=worker-thread.js.map