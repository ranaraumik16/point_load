import { assert } from '@loaders.gl/loader-utils';
const workerURLCache = new Map();
export function getWorkerURL(workerSource, workerName = 'Worker') {
  assert(typeof workerSource === 'string', 'worker source');

  if (workerSource.startsWith('url(') && workerSource.endsWith(')')) {
    const workerUrl = workerSource.match(/^url\((.*)\)$/)[1];

    if (workerUrl && !workerUrl.startsWith('http')) {
      return workerUrl;
    }

    workerSource = buildScript(workerUrl);
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

function buildScript(workerUrl) {
  return "try {\n  importScripts('".concat(workerUrl, "');\n} catch (error) {\n  console.error(error);\n}");
}
//# sourceMappingURL=get-worker-url.js.map