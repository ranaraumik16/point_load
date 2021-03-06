import { getWorkerURL } from './get-worker-url';
import { getTransferList } from '@loaders.gl/loader-utils';
let count = 0;

function defaultOnMessage({
  data,
  resolve
}) {
  resolve(data);
}

export default class WorkerThread {
  constructor({
    source,
    name = "web-worker-".concat(count++),
    onMessage
  }) {
    const url = getWorkerURL(source, name);
    this.worker = new Worker(url, {
      name
    });
    this.name = name;
    this.onMessage = onMessage || defaultOnMessage;
  }

  async process(data) {
    return new Promise((resolve, reject) => {
      this.worker.onmessage = event => this.onMessage({
        worker: this.worker,
        data: event.data,
        resolve,
        reject
      });

      this.worker.onerror = error => {
        let message = "".concat(this.name, ": WorkerThread.process() failed");

        if (error.message) {
          message += " ".concat(error.message, " ").concat(error.filename, ":").concat(error.lineno, ":").concat(error.colno);
        }

        const betterError = new Error(message);
        console.error(error);
        reject(betterError);
      };

      const transferList = getTransferList(data);
      this.worker.postMessage(data, transferList);
    });
  }

  destroy() {
    this.worker.terminate();
    this.worker = null;
  }

}
//# sourceMappingURL=worker-thread.js.map