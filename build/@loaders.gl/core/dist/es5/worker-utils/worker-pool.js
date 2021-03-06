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

var _workerThread = _interopRequireDefault(require("./worker-thread"));

var WorkerPool = function () {
  function WorkerPool(_ref) {
    var source = _ref.source,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'unnamed' : _ref$name,
        _ref$maxConcurrency = _ref.maxConcurrency,
        maxConcurrency = _ref$maxConcurrency === void 0 ? 1 : _ref$maxConcurrency,
        onMessage = _ref.onMessage,
        _ref$onDebug = _ref.onDebug,
        onDebug = _ref$onDebug === void 0 ? function () {} : _ref$onDebug;
    (0, _classCallCheck2["default"])(this, WorkerPool);
    this.source = source;
    this.name = name;
    this.maxConcurrency = maxConcurrency;
    this.onMessage = onMessage;
    this.onDebug = onDebug;
    this.jobQueue = [];
    this.idleQueue = [];
    this.count = 0;
    this.isDestroyed = false;
  }

  (0, _createClass2["default"])(WorkerPool, [{
    key: "destroy",
    value: function destroy() {
      this.idleQueue.forEach(function (worker) {
        return worker.destroy();
      });
      this.isDestroyed = true;
    }
  }, {
    key: "process",
    value: function () {
      var _process = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(data, jobName) {
        var _this = this;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _this.jobQueue.push({
                    data: data,
                    jobName: jobName,
                    resolve: resolve,
                    reject: reject
                  });

                  _this._startQueuedJob();
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function process(_x, _x2) {
        return _process.apply(this, arguments);
      }

      return process;
    }()
  }, {
    key: "_startQueuedJob",
    value: function _startQueuedJob() {
      var _this2 = this;

      if (!this.jobQueue.length) {
        return;
      }

      var worker = this._getAvailableWorker();

      if (!worker) {
        return;
      }

      var job = this.jobQueue.shift();
      this.onDebug({
        message: 'processing',
        worker: worker.name,
        job: job.jobName,
        backlog: this.jobQueue.length
      });
      worker.process(job.data).then(function (result) {
        return job.resolve(result);
      })["catch"](function (error) {
        return job.reject(error);
      }).then(function () {
        return _this2._onWorkerDone(worker);
      });
    }
  }, {
    key: "_onWorkerDone",
    value: function _onWorkerDone(worker) {
      if (this.isDestroyed) {
        worker.destroy();
      } else {
        this.idleQueue.push(worker);

        this._startQueuedJob();
      }
    }
  }, {
    key: "_getAvailableWorker",
    value: function _getAvailableWorker() {
      if (this.idleQueue.length > 0) {
        return this.idleQueue.shift();
      }

      if (this.count < this.maxConcurrency) {
        this.count++;
        var name = "".concat(this.name.toLowerCase(), " (#").concat(this.count, " of ").concat(this.maxConcurrency, ")");
        return new _workerThread["default"]({
          source: this.source,
          onMessage: this.onMessage,
          name: name
        });
      }

      return null;
    }
  }]);
  return WorkerPool;
}();

exports["default"] = WorkerPool;
//# sourceMappingURL=worker-pool.js.map