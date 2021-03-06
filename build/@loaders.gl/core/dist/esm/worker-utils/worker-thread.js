import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import { getWorkerURL } from './get-worker-url';
import { getTransferList } from '@loaders.gl/loader-utils';
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

    _classCallCheck(this, WorkerThread);

    var url = getWorkerURL(source, name);
    this.worker = new Worker(url, {
      name: name
    });
    this.name = name;
    this.onMessage = onMessage || defaultOnMessage;
  }

  _createClass(WorkerThread, [{
    key: "process",
    value: function () {
      var _process = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(data) {
        var _this = this;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
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

                  var transferList = getTransferList(data);

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

export { WorkerThread as default };
//# sourceMappingURL=worker-thread.js.map