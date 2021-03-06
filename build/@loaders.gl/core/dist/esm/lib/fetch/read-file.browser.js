import { assert } from '@loaders.gl/loader-utils';
var DEFAULT_OPTIONS = {
  dataType: 'arraybuffer',
  nothrow: true
};

var isDataURL = function isDataURL(url) {
  return url.startsWith('data:');
};

export function readFileSyncBrowser(uri, options) {
  options = getReadFileOptions(options);

  if (isDataURL(uri)) {}

  if (!options.nothrow) {
    assert(false);
  }

  return null;
}

function getReadFileOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  options = Object.assign({}, DEFAULT_OPTIONS, options);
  options.responseType = options.responseType || options.dataType;
  return options;
}
//# sourceMappingURL=read-file.browser.js.map