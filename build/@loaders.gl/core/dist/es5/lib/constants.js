"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_LOADER_OPTIONS = void 0;

var _loggers = require("./loader-utils/loggers");

var DEFAULT_LOADER_OPTIONS = {
  CDN: 'https://unpkg.com/@loaders.gl',
  worker: true,
  log: new _loggers.ConsoleLog(),
  dataType: 'arraybuffer',
  metadata: false
};
exports.DEFAULT_LOADER_OPTIONS = DEFAULT_LOADER_OPTIONS;
//# sourceMappingURL=constants.js.map