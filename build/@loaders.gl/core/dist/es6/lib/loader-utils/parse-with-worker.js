import WorkerFarm from '../../worker-utils/worker-farm';
import { toArrayBuffer } from '../../javascript-utils/binary-utils';
import { getTransferList } from '@loaders.gl/loader-utils';
import { parse } from '../api/parse';
const VERSION = typeof "2.2.8" !== 'undefined' ? "2.2.8" : 'latest';
export function canParseWithWorker(loader, data, options, context) {
  if (!WorkerFarm.isSupported()) {
    return false;
  }

  const loaderOptions = options && options[loader.id];

  if (options.worker === 'local' && loaderOptions && loaderOptions.localWorkerUrl || options.worker && loaderOptions && loaderOptions.workerUrl) {
    return loader.useWorker ? loader.useWorker(options) : true;
  }

  return false;
}
export default function parseWithWorker(loader, data, options, context) {
  const {
    worker
  } = options || {};
  const loaderOptions = options && options[loader.id] || {};
  const workerUrl = worker === 'local' ? loaderOptions.localWorkerUrl : loaderOptions.workerUrl;
  const workerSource = "url(".concat(workerUrl, ")");
  const workerName = loader.name;
  const workerFarm = getWorkerFarm(options);
  options = JSON.parse(JSON.stringify(options));
  const warning = loader.version !== VERSION ? "(core version ".concat(VERSION, ")") : '';
  return workerFarm.process(workerSource, "".concat(workerName, "-worker@").concat(loader.version).concat(warning), {
    arraybuffer: toArrayBuffer(data),
    options,
    source: "loaders.gl@".concat(VERSION),
    type: 'parse'
  });
}
let _workerFarm = null;

function getWorkerFarm(options = {}) {
  const props = {};

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

async function onWorkerMessage({
  worker,
  data,
  resolve,
  reject
}) {
  switch (data.type) {
    case 'done':
      resolve(data.result);
      break;

    case 'parse':
      try {
        const result = await parse(data.arraybuffer, data.options, data.url);
        worker.postMessage({
          type: 'parse-done',
          id: data.id,
          result
        }, getTransferList(result));
      } catch (error) {
        worker.postMessage({
          type: 'parse-error',
          id: data.id,
          message: error.message
        });
      }

      break;

    case 'error':
      reject(data.message);
      break;

    default:
  }
}
//# sourceMappingURL=parse-with-worker.js.map