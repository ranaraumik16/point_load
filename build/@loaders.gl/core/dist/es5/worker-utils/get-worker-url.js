"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWorkerURL = getWorkerURL;

var _loaderUtils = require("@loaders.gl/loader-utils");

var workerURLCache = new Map();

function getWorkerURL(workerSource) {
  var workerName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Worker';
  (0, _loaderUtils.assert)(typeof workerSource === 'string', 'worker source');

  if (workerSource.startsWith('url(') && workerSource.endsWith(')')) {
    var workerUrl = workerSource.match(/^url\((.*)\)$/)[1];

    if (workerUrl && !workerUrl.startsWith('http')) {
      return workerUrl;
    }

    workerSource = buildScript(workerUrl);
  }

  var workerURL = workerURLCache.get(workerSource);

  if (!workerURL) {
    var blob = new Blob([workerSource], {
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