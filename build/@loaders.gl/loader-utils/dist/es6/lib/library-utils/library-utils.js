import { global, isBrowser, isWorker } from '../env-utils/globals';
import { requireFromFile, requireFromString } from './require-utils.node';
import assert from '../env-utils/assert';
const LATEST = 'beta';
const VERSION = typeof "2.2.8" !== 'undefined' ? "2.2.8" : LATEST;
const loadLibraryPromises = {};
export async function loadLibrary(libraryUrl, moduleName = null, options = {}) {
  if (moduleName) {
    libraryUrl = getLibraryUrl(libraryUrl, moduleName, options);
  }

  loadLibraryPromises[libraryUrl] = loadLibraryPromises[libraryUrl] || loadLibraryFromFile(libraryUrl);
  return await loadLibraryPromises[libraryUrl];
}
export function getLibraryUrl(library, moduleName, options) {
  const modules = options.modules || {};

  if (modules[library]) {
    return modules[library];
  }

  if (!isBrowser) {
    return "modules/".concat(moduleName, "/dist/libs/").concat(library);
  }

  if (options.CDN) {
    assert(options.CDN.startsWith('http'));
    return "".concat(options.CDN, "/").concat(moduleName, "@").concat(VERSION, "/dist/libs/").concat(library);
  }

  if (isWorker) {
    return "../src/libs/".concat(library);
  }

  return "modules/".concat(moduleName, "/src/libs/").concat(library);
}

async function loadLibraryFromFile(libraryUrl) {
  if (libraryUrl.endsWith('wasm')) {
    const response = await fetch(libraryUrl);
    return await response.arrayBuffer();
  }

  if (!isBrowser) {
    return requireFromFile(libraryUrl);
  }

  if (isWorker) {
    return importScripts(libraryUrl);
  }

  const response = await fetch(libraryUrl);
  const scriptSource = await response.text();
  return loadLibraryFromString(scriptSource, libraryUrl);
}

function loadLibraryFromString(scriptSource, id) {
  if (!isBrowser) {
    return requireFromString(scriptSource, id);
  }

  if (isWorker) {
    eval.call(global, scriptSource);
    return null;
  }

  const script = document.createElement('script');
  script.id = id;

  try {
    script.appendChild(document.createTextNode(scriptSource));
  } catch (e) {
    script.text = scriptSource;
  }

  document.body.appendChild(script);
  return null;
}
//# sourceMappingURL=library-utils.js.map