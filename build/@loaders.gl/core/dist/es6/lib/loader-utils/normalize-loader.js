import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { assert } from '@loaders.gl/loader-utils';
export function isLoaderObject(loader) {
  if (!loader) {
    return false;
  }

  if (Array.isArray(loader)) {
    loader = loader[0];
  }

  let hasParser = loader.parseTextSync || loader.parseSync || loader.parse || loader.parseStream || loader.parseInBatches;
  const loaderOptions = loader.options && loader.options[loader.id];
  hasParser = hasParser || loaderOptions && loaderOptions.workerUrl;
  return hasParser;
}
export function normalizeLoader(loader) {
  assert(loader, 'null loader');
  assert(isLoaderObject(loader), 'invalid loader');
  let options;

  if (Array.isArray(loader)) {
    options = loader[1];
    loader = loader[0];
    loader = _objectSpread(_objectSpread({}, loader), {}, {
      options: _objectSpread(_objectSpread({}, loader.options), options)
    });
  }

  if (loader.extension) {
    loader.extensions = loader.extensions || loader.extension;
    delete loader.extension;
  }

  if (!Array.isArray(loader.extensions)) {
    loader.extensions = [loader.extensions];
  }

  assert(loader.extensions && loader.extensions.length > 0 && loader.extensions[0]);

  if (loader.parseTextSync) {
    loader.text = true;
  }

  if (!loader.text) {
    loader.binary = true;
  }

  return loader;
}
//# sourceMappingURL=normalize-loader.js.map