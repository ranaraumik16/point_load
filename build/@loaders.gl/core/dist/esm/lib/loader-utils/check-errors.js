import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
export function checkFetchResponseStatus(_x) {
  return _checkFetchResponseStatus.apply(this, arguments);
}

function _checkFetchResponseStatus() {
  _checkFetchResponseStatus = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(response) {
    var errorMessage, text;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (response.ok) {
              _context.next = 12;
              break;
            }

            errorMessage = "fetch failed ".concat(response.status, " ").concat(response.statusText);
            _context.prev = 2;
            _context.next = 5;
            return response.text().slice(10);

          case 5:
            text = _context.sent;
            errorMessage += text;
            _context.next = 11;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);

          case 11:
            throw new Error(errorMessage);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));
  return _checkFetchResponseStatus.apply(this, arguments);
}

export function checkFetchResponseStatusSync(response) {
  if (!response.ok) {
    throw new Error("fetch failed ".concat(response.status));
  }
}
//# sourceMappingURL=check-errors.js.map