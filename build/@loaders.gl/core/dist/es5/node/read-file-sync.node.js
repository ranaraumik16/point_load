"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFileSync = readFileSync;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _fs = _interopRequireDefault(require("fs"));

var _toArrayBuffer = require("./utils/to-array-buffer.node");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_OPTIONS = {
  dataType: 'arraybuffer',
  nothrow: true
};

function readFileSync(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options = getReadFileOptions(options);

  if (!_fs["default"] || !_fs["default"].readFileSync) {
    return null;
  }

  var buffer = _fs["default"].readFileSync(url, options);

  return buffer instanceof Buffer ? (0, _toArrayBuffer.toArrayBuffer)(buffer) : buffer;
}

function getReadFileOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  options = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options);

  if (options.responseType === 'text' || options.dataType === 'text') {
    options.encoding = options.encoding || 'utf8';
  }

  return options;
}
//# sourceMappingURL=read-file-sync.node.js.map