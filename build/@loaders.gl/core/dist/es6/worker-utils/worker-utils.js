import { assert } from '@loaders.gl/loader-utils';
const workerURLCache = new Map();
export function getWorkerURL(workerSource) {
  assert(typeof workerSource === 'string', 'worker source');

  if (workerSource.startsWith('url(') && workerSource.endsWith(')')) {
    return workerSource.match(/^url\((.*)\)$/)[1];
  }

  let workerURL = workerURLCache.get(workerSource);

  if (!workerURL) {
    const blob = new Blob([workerSource], {
      type: 'application/javascript'
    });
    workerURL = URL.createObjectURL(blob);
    workerURLCache.set(workerSource, workerURL);
  }

  return workerURL;
}
//# sourceMappingURL=worker-utils.js.map