import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import { assert } from '@loaders.gl/loader-utils';

var FileReadableResponse = function () {
  function FileReadableResponse(fileOrBlob, options) {
    _classCallCheck(this, FileReadableResponse);

    this._fileOrBlob = fileOrBlob;
    this.bodyUsed = false;
  }

  _createClass(FileReadableResponse, [{
    key: "arrayBuffer",
    value: function () {
      var _arrayBuffer = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        var _this$_getFileReader, reader, promise;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$_getFileReader = this._getFileReader(), reader = _this$_getFileReader.reader, promise = _this$_getFileReader.promise;
                reader.readAsArrayBuffer(this._fileOrBlob);
                return _context.abrupt("return", promise);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function arrayBuffer() {
        return _arrayBuffer.apply(this, arguments);
      }

      return arrayBuffer;
    }()
  }, {
    key: "text",
    value: function () {
      var _text = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        var _this$_getFileReader2, reader, promise;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$_getFileReader2 = this._getFileReader(), reader = _this$_getFileReader2.reader, promise = _this$_getFileReader2.promise;
                reader.readAsText(this._fileOrBlob);
                return _context2.abrupt("return", promise);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function text() {
        return _text.apply(this, arguments);
      }

      return text;
    }()
  }, {
    key: "json",
    value: function () {
      var _json = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
        var text;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.text();

              case 2:
                text = _context3.sent;
                return _context3.abrupt("return", JSON.parse(text));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function json() {
        return _json.apply(this, arguments);
      }

      return json;
    }()
  }, {
    key: "_getFileReader",
    value: function _getFileReader() {
      assert(!this.bodyUsed);
      this.bodyUsed = true;
      var reader = new FileReader();
      var promise = new Promise(function (resolve, reject) {
        try {
          reader.onerror = function (_) {
            return reject(new Error('Read error'));
          };

          reader.onabort = function () {
            return reject(new Error('Read aborted.'));
          };

          reader.onload = function () {
            return resolve(reader.result);
          };
        } catch (error) {
          reject(error);
        }
      });
      return {
        reader: reader,
        promise: promise
      };
    }
  }, {
    key: "headers",
    get: function get() {
      return new Headers({
        'Content-Length': this._fileOrBlob.size,
        'Content-Type': this._fileOrBlob.type
      });
    }
  }, {
    key: "ok",
    get: function get() {
      return true;
    }
  }, {
    key: "status",
    get: function get() {
      return 200;
    }
  }, {
    key: "url",
    get: function get() {
      return this._fileOrBlob.name || '';
    }
  }]);

  return FileReadableResponse;
}();

export default function fetchFileReadable(fileOrBlob, options) {
  return Promise.resolve(new FileReadableResponse(fileOrBlob, options));
}
//# sourceMappingURL=fetch-file.browser.js.map