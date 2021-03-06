import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { assert, validateLoaderVersion } from '@loaders.gl/loader-utils';
import { isLoaderObject } from '../loader-utils/normalize-loader';
import { mergeOptions } from '../loader-utils/merge-options';
import { getUrlFromData } from '../loader-utils/get-data';
import { getArrayBufferOrStringFromData } from '../loader-utils/get-data';
import { getLoaders, getLoaderContext } from '../loader-utils/get-loader-context';
import parseWithWorker, { canParseWithWorker } from '../loader-utils/parse-with-worker';
import { selectLoader } from './select-loader';
export function parse(_x, _x2, _x3, _x4) {
  return _parse.apply(this, arguments);
}

function _parse() {
  _parse = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(data, loaders, options, context) {
    var url, autoUrl, candidateLoaders, loader;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (loaders && !Array.isArray(loaders) && !isLoaderObject(loaders)) {
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
            autoUrl = getUrlFromData(data, url);
            candidateLoaders = getLoaders(loaders, context);
            loader = selectLoader(data, candidateLoaders, options, {
              url: autoUrl
            });

            if (loader) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", null);

          case 9:
            options = mergeOptions(loader, options, autoUrl);
            context = getLoaderContext({
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
  _parseWithLoader = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(loader, data, options, context) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            validateLoaderVersion(loader);
            _context2.next = 3;
            return getArrayBufferOrStringFromData(data, loader);

          case 3:
            data = _context2.sent;

            if (!(loader.parseTextSync && typeof data === 'string')) {
              _context2.next = 7;
              break;
            }

            options.dataType = 'text';
            return _context2.abrupt("return", loader.parseTextSync(data, options, context, loader));

          case 7:
            if (!canParseWithWorker(loader, data, options, context)) {
              _context2.next = 11;
              break;
            }

            _context2.next = 10;
            return parseWithWorker(loader, data, options, context);

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
            assert(!loader.parseSync);
            return _context2.abrupt("return", assert(false));

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