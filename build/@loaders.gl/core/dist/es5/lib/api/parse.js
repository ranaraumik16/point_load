"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _loaderUtils = require("@loaders.gl/loader-utils");

var _normalizeLoader = require("../loader-utils/normalize-loader");

var _mergeOptions = require("../loader-utils/merge-options");

var _getData = require("../loader-utils/get-data");

var _getLoaderContext = require("../loader-utils/get-loader-context");

var _parseWithWorker = _interopRequireWildcard(require("../loader-utils/parse-with-worker"));

var _selectLoader = require("./select-loader");

function parse(_x, _x2, _x3, _x4) {
  return _parse.apply(this, arguments);
}

function _parse() {
  _parse = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(data, loaders, options, context) {
    var url, autoUrl, candidateLoaders, loader;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (loaders && !Array.isArray(loaders) && !(0, _normalizeLoader.isLoaderObject)(loaders)) {
              context = options;
              options = loaders;
              loaders = null;
            }

            url = '';

            if (typeof context === 'string') {
              url = context;
              context = null;
            }

            options = options || {};
            autoUrl = (0, _getData.getUrlFromData)(data, url);
            candidateLoaders = (0, _getLoaderContext.getLoaders)(loaders, context);
            loader = (0, _selectLoader.selectLoader)(data, candidateLoaders, options, {
              url: autoUrl
            });

            if (loader) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", null);

          case 9:
            options = (0, _mergeOptions.mergeOptions)(loader, options, autoUrl);
            context = (0, _getLoaderContext.getLoaderContext)({
              url: autoUrl,
              parse: parse,
              loaders: candidateLoaders
            }, options, context);
            _context.next = 13;
            return parseWithLoader(loader, data, options, context);

          case 13:
            return _context.abrupt("return", _context.sent);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _parse.apply(this, arguments);
}

function parseWithLoader(_x5, _x6, _x7, _x8) {
  return _parseWithLoader.apply(this, arguments);
}

function _parseWithLoader() {
  _parseWithLoader = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(loader, data, options, context) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0, _loaderUtils.validateLoaderVersion)(loader);
            _context2.next = 3;
            return (0, _getData.getArrayBufferOrStringFromData)(data, loader);

          case 3:
            data = _context2.sent;

            if (!(loader.parseTextSync && typeof data === 'string')) {
              _context2.next = 7;
              break;
            }

            options.dataType = 'text';
            return _context2.abrupt("return", loader.parseTextSync(data, options, context, loader));

          case 7:
            if (!(0, _parseWithWorker.canParseWithWorker)(loader, data, options, context)) {
              _context2.next = 11;
              break;
            }

            _context2.next = 10;
            return (0, _parseWithWorker["default"])(loader, data, options, context);

          case 10:
            return _context2.abrupt("return", _context2.sent);

          case 11:
            if (!loader.parse) {
              _context2.next = 15;
              break;
            }

            _context2.next = 14;
            return loader.parse(data, options, context, loader);

          case 14:
            return _context2.abrupt("return", _context2.sent);

          case 15:
            (0, _loaderUtils.assert)(!loader.parseSync);
            return _context2.abrupt("return", (0, _loaderUtils.assert)(false));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _parseWithLoader.apply(this, arguments);
}
//# sourceMappingURL=parse.js.map