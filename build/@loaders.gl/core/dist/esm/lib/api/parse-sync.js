import { selectLoader } from './select-loader';
import { isLoaderObject } from '../loader-utils/normalize-loader';
import { mergeOptions } from '../loader-utils/merge-options';
import { getArrayBufferOrStringFromDataSync } from '../loader-utils/get-data';
import { getLoaders, getLoaderContext } from '../loader-utils/get-loader-context';
export function parseSync(data, loaders, options, context) {
  if (!Array.isArray(loaders) && !isLoaderObject(loaders)) {
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
  var candidateLoaders = getLoaders(loaders, context);
  var loader = selectLoader(data, candidateLoaders, options, {
    url: url
  });

  if (!loader) {
    return null;
  }

  options = mergeOptions(loader, options, url);
  context = getLoaderContext({
    url: url,
    parseSync: parseSync,
    loaders: loaders
  }, options);
  return parseWithLoaderSync(loader, data, options, context);
}

function parseWithLoaderSync(loader, data, options, context) {
  data = getArrayBufferOrStringFromDataSync(data, loader);

  if (loader.parseTextSync && typeof data === 'string') {
    return loader.parseTextSync(data, options, context, loader);
  }

  if (loader.parseSync) {
    return loader.parseSync(data, options, context, loader);
  }

  throw new Error("".concat(loader.name, " loader: 'parseSync' not supported by this loader, use 'parse' instead. ").concat(context.url || ''));
}
//# sourceMappingURL=parse-sync.js.map