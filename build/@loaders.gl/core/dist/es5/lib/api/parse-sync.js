"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSync = parseSync;

var _selectLoader = require("./select-loader");

var _normalizeLoader = require("../loader-utils/normalize-loader");

var _mergeOptions = require("../loader-utils/merge-options");

var _getData = require("../loader-utils/get-data");

var _getLoaderContext = require("../loader-utils/get-loader-context");

function parseSync(data, loaders, options, context) {
  if (!Array.isArray(loaders) && !(0, _normalizeLoader.isLoaderObject)(loaders)) {
    context = options;
    options = loaders;
    loaders = null;
  }

  var url = '';

  if (typeof context === 'string') {
    url = context;
    context = null;
  }

  options = options || {};
  var candidateLoaders = (0, _getLoaderContext.getLoaders)(loaders, context);
  var loader = (0, _selectLoader.selectLoader)(data, candidateLoaders, options, {
    url: url
  });

  if (!loader) {
    return null;
  }

  options = (0, _mergeOptions.mergeOptions)(loader, options, url);
  context = (0, _getLoaderContext.getLoaderContext)({
    url: url,
    parseSync: parseSync,
    loaders: loaders
  }, options);
  return parseWithLoaderSync(loader, data, options, context);
}

function parseWithLoaderSync(loader, data, options, context) {
  data = (0, _getData.getArrayBufferOrStringFromDataSync)(data, loader);

  if (loader.parseTextSync && typeof data === 'string') {
    return loader.parseTextSync(data, options, context, loader);
  }

  if (loader.parseSync) {
    return loader.parseSync(data, options, context, loader);
  }

  throw new Error("".concat(loader.name, " loader: 'parseSync' not supported by this loader, use 'parse' instead. ").concat(context.url || ''));
}
//# sourceMappingURL=parse-sync.js.map