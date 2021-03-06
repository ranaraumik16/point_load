import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import fs from 'fs';
import { toArrayBuffer } from './utils/to-array-buffer.node';
const DEFAULT_OPTIONS = {
  dataType: 'arraybuffer',
  nothrow: true
};
export function readFileSync(url, options = {}) {
  options = getReadFileOptions(options);

  if (!fs || !fs.readFileSync) {
    return null;
  }

  const buffer = fs.readFileSync(url, options);
  return buffer instanceof Buffer ? toArrayBuffer(buffer) : buffer;
}

function getReadFileOptions(options = {}) {
  options = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options);

  if (options.responseType === 'text' || options.dataType === 'text') {
    options.encoding = options.encoding || 'utf8';
  }

  return options;
}
//# sourceMappingURL=read-file-sync.node.js.map