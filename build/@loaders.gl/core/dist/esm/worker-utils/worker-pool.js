import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import WorkerThread from './worker-thread';

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

    _classCallCheck(this, WorkerPool);

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

  _createClass(WorkerPool, [{
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
      var _process = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(data, jobName) {
        var _this = this;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
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
        return new WorkerThread({
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

export { WorkerPool as default };
//# sourceMappingURL=worker-pool.js.map