import { assert, validateLoaderVersion } from '@loaders.gl/loader-utils';
import { isLoaderObject } from '../loader-utils/normalize-loader';
import { mergeOptions } from '../loader-utils/merge-options';
import { getUrlFromData } from '../loader-utils/get-data';
import { getArrayBufferOrStringFromData } from '../loader-utils/get-data';
import { getLoaders, getLoaderContext } from '../loader-utils/get-loader-context';
import parseWithWorker, { canParseWithWorker } from '../loader-utils/parse-with-worker';
import { selectLoader } from './select-loader';
export async function parse(data, loaders, options, context) {
  if (loaders && !Array.isArray(loaders) && !isLoaderObject(loaders)) {
    context = options;
    options = loaders;
    loaders = null;
  }

  let url = '';

  if (typeof context === 'string') {
    url = context;
    context = null;
  }

  options = options || {};
  const autoUrl = getUrlFromData(data, url);
  const candidateLoaders = getLoaders(loaders, context);
  const loader = selectLoader(data, candidateLoaders, options, {
    url: autoUrl
  });

  if (!loader) {
    return null;
  }

  options = mergeOptions(loader, options, autoUrl);
  context = getLoaderContext({
    url: autoUrl,
    parse,
    loaders: candidateLoaders
  }, options, context);
  return await parseWithLoader(loader, data, options, context);
}

async function parseWithLoader(loader, data, options, context) {
  validateLoaderVersion(loader);
  data = await getArrayBufferOrStringFromData(data, loader);

  if (loader.parseTextSync && typeof data === 'string') {
    options.dataType = 'text';
    return loader.parseTextSync(data, options, context, loader);
  }

  if (canParseWithWorker(loader, data, options, context)) {
    return await parseWithWorker(loader, data, options, context);
  }

  if (loader.parse) {
    return await loader.parse(data, options, context, loader);
  }

  assert(!loader.parseSync);
  return assert(false);
}
//# sourceMappingURL=parse.js.map