"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLoaderVersion = validateLoaderVersion;

var _assert = _interopRequireDefault(require("./env-utils/assert"));

var VERSION = typeof "2.2.8" !== 'undefined' ? "2.2.8" : '';

function validateLoaderVersion(loader) {
  var coreVersion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : VERSION;
  (0, _assert["default"])(loader, 'no loader provided');
  var loaderVersion = loader.version;

  if (!coreVersion || !loaderVersion) {
    return;
  }

  coreVersion = parseVersion(coreVersion);
  loaderVersion = parseVersion(loaderVersion);
}

function parseVersion(version) {
  var parts = version.split('.').map(Number);
  return {
    major: parts[0],
    minor: parts[1]
  };
}
//# sourceMappingURL=validate-loader-version.js.map