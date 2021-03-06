import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { getTransferList } from './worker-utils/get-transfer-list';
import { validateLoaderVersion } from './validate-loader-version';
export default function createWorker(loader) {
  if (typeof self === 'undefined') {
    return;
  }

  var requestId = 0;

  var parse = function parse(arraybuffer) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var url = arguments.length > 2 ? arguments[2] : undefined;
    return new Promise(function (resolve, reject) {
      var id = requestId++;

      var onMessage = function onMessage(_ref) {
        var data = _ref.data;

        if (!data || data.id !== id) {
          return;
        }

        switch (data.type) {
          case 'parse-done':
            self.removeEventListener('message', onMessage);
            resolve(data.result);
            break;

          case 'parse-error':
            self.removeEventListener('message', onMessage);
            reject(data.message);
            break;

          default:
        }
      };

      self.addEventListener('message', onMessage);
      self.postMessage({
        type: 'parse',
        id: id,
        arraybuffer: arraybuffer,
        options: options,
        url: url
      }, [arraybuffer]);
    });
  };

  self.onmessage = function () {
    var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(evt) {
      var data, arraybuffer, _data$byteOffset, byteOffset, _data$byteLength, byteLength, _data$options, options, result, transferList;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = evt.data;
              _context.prev = 1;

              if (isKnownMessage(data, loader.name)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              validateLoaderVersion(loader, data.source.split('@')[1]);
              arraybuffer = data.arraybuffer, _data$byteOffset = data.byteOffset, byteOffset = _data$byteOffset === void 0 ? 0 : _data$byteOffset, _data$byteLength = data.byteLength, byteLength = _data$byteLength === void 0 ? 0 : _data$byteLength, _data$options = data.options, options = _data$options === void 0 ? {} : _data$options;
              _context.next = 8;
              return parseData({
                loader: loader,
                arraybuffer: arraybuffer,
                byteOffset: byteOffset,
                byteLength: byteLength,
                options: options,
                context: {
                  parse: parse
                }
              });

            case 8:
              result = _context.sent;
              transferList = getTransferList(result);
              self.postMessage({
                type: 'done',
                result: result
              }, transferList);
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              self.postMessage({
                type: 'error',
                message: _context.t0.message
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
}

function parseData(_x2) {
  return _parseData.apply(this, arguments);
}

function _parseData() {
  _parseData = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(_ref3) {
    var loader, arraybuffer, byteOffset, byteLength, options, context, data, parser, textDecoder;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            loader = _ref3.loader, arraybuffer = _ref3.arraybuffer, byteOffset = _ref3.byteOffset, byteLength = _ref3.byteLength, options = _ref3.options, context = _ref3.context;

            if (!(loader.parseSync || loader.parse)) {
              _context2.next = 6;
              break;
            }

            data = arraybuffer;
            parser = loader.parseSync || loader.parse;
            _context2.next = 13;
            break;

          case 6:
            if (!loader.parseTextSync) {
              _context2.next = 12;
              break;
            }

            textDecoder = new TextDecoder();
            data = textDecoder.decode(arraybuffer);
            parser = loader.parseTextSync;
            _context2.next = 13;
            break;

          case 12:
            throw new Error("Could not load data with ".concat(loader.name, " loader"));

          case 13:
            options = _objectSpread(_objectSpread({}, options), {}, {
              modules: loader && loader.options && loader.options.modules || {},
              worker: false
            });
            _context2.next = 16;
            return parser(data, _objectSpread({}, options), context, loader);

          case 16:
            return _context2.abrupt("return", _context2.sent);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _parseData.apply(this, arguments);
}

function isKnownMessage(data, name) {
  return data && data.type === 'parse' && data.source && data.source.startsWith('loaders.gl');
}
//# sourceMappingURL=create-worker.js.map