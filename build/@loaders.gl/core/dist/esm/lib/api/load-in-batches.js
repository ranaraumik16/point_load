import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { fetchFile } from '../fetch/fetch-file';
import { parseInBatches } from './parse-in-batches';
export function loadInBatches(_x, _x2, _x3) {
  return _loadInBatches.apply(this, arguments);
}

function _loadInBatches() {
  _loadInBatches = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(url, loaders, options) {
    var response;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchFile(url, options);

          case 2:
            response = _context.sent;
            return _context.abrupt("return", parseInBatches(response, loaders, options, url));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadInBatches.apply(this, arguments);
}
//# sourceMappingURL=load-in-batches.js.map