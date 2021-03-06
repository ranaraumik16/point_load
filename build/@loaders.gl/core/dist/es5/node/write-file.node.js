"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeFile = writeFile;
exports.writeFileSync = writeFileSync;

var _fs = _interopRequireDefault(require("fs"));

var _util = require("util");

var _toBuffer = _interopRequireDefault(require("./utils/to-buffer.node"));

function writeFile(filePath, arrayBufferOrString, options) {
  return (0, _util.promisify)(_fs["default"].writeFile)("".concat(filePath), (0, _toBuffer["default"])(arrayBufferOrString), {
    flag: 'w'
  });
}

function writeFileSync(filePath, arrayBufferOrString, options) {
  return _fs["default"].writeFileSync("".concat(filePath), (0, _toBuffer["default"])(arrayBufferOrString), {
    flag: 'w'
  });
}
//# sourceMappingURL=write-file.node.js.map