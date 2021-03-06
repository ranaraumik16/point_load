import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import WorkerFarm from '../../worker-utils/worker-farm';
import { toArrayBuffer } from '../../javascript-utils/binary-utils';
import { getTransferList } from '@loaders.gl/loader-utils';
import { parse } from '../api/parse';
var VERSION = typeof "2.2.8" !== 'undefined' ? "2.2.8" : 'latest';
export function canParseWithWorker(loader, data, options, context) {
  if (!WorkerFarm.isSupported()) {
    return false;
  }

  var loaderOptions = options && options[loader.id];

  if (options.worker === 'local' && loaderOptions && loaderOptions.localWorkerUrl || options.worker && loaderOptions && loaderOptions.workerUrl) {
    return loader.useWorker ? loader.useWorker(options) : true;
  }

  return false;
}
export default function parseWithWorker(loader, data, options, context) {
  var _ref = options || {},
      worker = _ref.worker;

  var loaderOptions = options && options[loader.id] || {};
  var workerUrl = worker === 'local' ? loaderOptions.localWorkerUrl : loaderOptions.workerUrl;
  var workerSource = "url(".concat(workerUrl, ")");
  var workerName = loader.name;
  var workerFarm = getWorkerFarm(options);
  options = JSON.parse(JSON.stringify(options));
  var warning = loader.version !== VERSION ? "(core version ".concat(VERSION, ")") : '';
  return workerFarm.process(workerSource, "".concat(workerName, "-worker@").concat(loader.version).concat(warning), {
    arraybuffer: toArrayBuffer(data),
    options: options,
    source: "loaders.gl@".concat(VERSION),
    type: 'parse'
  });
}
var _workerFarm = null;

function getWorkerFarm() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = {};

  if (options.maxConcurrency) {
    props.maxConcurrency = options.maxConcurrency;
  }

  if (options.onDebug) {
    props.onDebug = options.onDebug;
  }

  if (!_workerFarm) {
    _workerFarm = new WorkerFarm({
      onMessage: onWorkerMessage
    });
  }

  _workerFarm.setProps(props);

  return _workerFarm;
}

function onWorkerMessage(_x) {
  return _onWorkerMessage.apply(this, arguments);
}

function _onWorkerMessage() {
  _onWorkerMessage = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(_ref2) {
    var worker, data, resolve, reject, result;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            worker = _ref2.worker, data = _ref2.data, resolve = _ref2.resolve, reject = _ref2.reject;
            _context.t0 = data.type;
            _context.next = _context.t0 === 'done' ? 4 : _context.t0 === 'parse' ? 6 : _context.t0 === 'error' ? 17 : 19;
            break;

          case 4:
            resolve(data.result);
            return _context.abrupt("break", 19);

          case 6:
            _context.prev = 6;
            _context.next = 9;
            return parse(data.arraybuffer, data.options, data.url);

          case 9:
            result = _context.sent;
            worker.postMessage({
              type: 'parse-done',
              id: data.id,
              result: result
            }, getTransferList(result));
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t1 = _context["catch"](6);
            worker.postMessage({
              type: 'parse-error',
              id: data.id,
              message: _context.t1.message
            });

          case 16:
            return _context.abrupt("break", 19);

          case 17:
            reject(data.message);
            return _context.abrupt("break", 19);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 13]]);
  }));
  return _onWorkerMessage.apply(this, arguments);
}
//# sourceMappingURL=parse-with-worker.js.map