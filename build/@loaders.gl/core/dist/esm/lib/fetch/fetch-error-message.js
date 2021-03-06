import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
export function getErrorMessageFromResponseSync(response) {
  return "Failed to fetch resource ".concat(response.url, "(").concat(response.status, "): ").concat(response.statusText, " ");
}
export function getErrorMessageFromResponse(_x) {
  return _getErrorMessageFromResponse.apply(this, arguments);
}

function _getErrorMessageFromResponse() {
  _getErrorMessageFromResponse = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(response) {
    var message, contentType;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            message = "Failed to fetch resource ".concat(response.url, " (").concat(response.status, "): ");
            _context.prev = 1;
            contentType = response.headers.get('Content-Type');

            if (!contentType.includes('application/json')) {
              _context.next = 10;
              break;
            }

            _context.t0 = message;
            _context.next = 7;
            return response.text();

          case 7:
            message = _context.t0 += _context.sent;
            _context.next = 11;
            break;

          case 10:
            message += response.statusText;

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t1 = _context["catch"](1);
            return _context.abrupt("return", message);

          case 16:
            return _context.abrupt("return", message);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));
  return _getErrorMessageFromResponse.apply(this, arguments);
}
//# sourceMappingURL=fetch-error-message.js.map