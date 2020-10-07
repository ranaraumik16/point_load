import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import Module from 'module';
import path from 'path';
export function requireFromFile(filename) {
  if (filename.startsWith('http')) {
    throw new Error("require from remote script not supported in Node.js: ".concat(filename));
  }

  if (!filename.startsWith('/')) {
    filename = "".concat(process.cwd(), "/").concat(filename);
  }

  return require(filename);
}
export function requireFromString(code, filename = '', options = {}) {
  if (typeof filename === 'object') {
    options = filename;
    filename = undefined;
  }

  options = _objectSpread({
    appendPaths: [],
    prependPaths: []
  }, options);

  if (typeof code !== 'string') {
    throw new Error("code must be a string, not ".concat(typeof code));
  }

  const paths = Module._nodeModulePaths(path.dirname(filename));

  const parent = module.parent;
  const newModule = new Module(filename, parent);
  newModule.filename = filename;
  newModule.paths = [].concat(options.prependPaths).concat(paths).concat(options.appendPaths);

  newModule._compile(code, filename);

  if (parent && parent.children) {
    parent.children.splice(parent.children.indexOf(newModule), 1);
  }

  return newModule.exports;
}
//# sourceMappingURL=require-utils.node.js.map