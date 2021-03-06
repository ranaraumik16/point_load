import WorkerThread from './worker-thread';
export default class WorkerPool {
  constructor({
    source,
    name = 'unnamed',
    maxConcurrency = 1,
    onMessage,
    onDebug = () => {}
  }) {
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

  destroy() {
    this.idleQueue.forEach(worker => worker.destroy());
    this.isDestroyed = true;
  }

  async process(data, jobName) {
    return new Promise((resolve, reject) => {
      this.jobQueue.push({
        data,
        jobName,
        resolve,
        reject
      });

      this._startQueuedJob();
    });
  }

  _startQueuedJob() {
    if (!this.jobQueue.length) {
      return;
    }

    const worker = this._getAvailableWorker();

    if (!worker) {
      return;
    }

    const job = this.jobQueue.shift();
    this.onDebug({
      message: 'processing',
      worker: worker.name,
      job: job.jobName,
      backlog: this.jobQueue.length
    });
    worker.process(job.data).then(result => job.resolve(result)).catch(error => job.reject(error)).then(() => this._onWorkerDone(worker));
  }

  _onWorkerDone(worker) {
    if (this.isDestroyed) {
      worker.destroy();
    } else {
      this.idleQueue.push(worker);

      this._startQueuedJob();
    }
  }

  _getAvailableWorker() {
    if (this.idleQueue.length > 0) {
      return this.idleQueue.shift();
    }

    if (this.count < this.maxConcurrency) {
      this.count++;
      const name = "".concat(this.name.toLowerCase(), " (#").concat(this.count, " of ").concat(this.maxConcurrency, ")");
      return new WorkerThread({
        source: this.source,
        onMessage: this.onMessage,
        name
      });
    }

    return null;
  }

}
//# sourceMappingURL=worker-pool.js.map