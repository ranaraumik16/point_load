"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requireFromFile = requireFromFile;
exports.requireFromString = requireFromString;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _module = _interopRequireDefault(require("module"));

var _path = _interopRequireDefault(require("path"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function requireFromFile(filename) {
  if (filename.startsWith('http')) {
    throw new Error("require from remote script not supported in Node.js: ".concat(filename));
  }

  if (!filename.startsWith('/')) {
    filename = "".concat(process.cwd(), "/").concat(filename);
  }

  return require(filename);
}

function requireFromString(code) {
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _typeof2["default"])(filename) === 'object') {
    options = filename;
    filename = undefined;
  }

  options = _objectSpread({
    appendPaths: [],
    prependPaths: []
  }, options);

  if (typeof code !== 'string') {
    throw new Error("code must be a string, not ".concat((0, _typeof2["default"])(code)));
  }

  var paths = _module["default"]._nodeModulePaths(_path["default"].dirname(filename));

  var parent = module.parent;
  var newModule = new _module["default"](filename, parent);
  newModule.filename = filename;
  newModule.paths = [].concat(options.prependPaths).concat(paths).concat(options.appendPaths);

  newModule._compile(code, filename);

  if (parent && parent.children) {
    parent.children.splice(parent.children.indexOf(newModule), 1);
  }

  return newModule.exports;
}
//# sourceMappingURL=require-utils.node.js.map