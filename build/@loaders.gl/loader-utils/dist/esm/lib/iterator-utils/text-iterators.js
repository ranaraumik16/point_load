import _regeneratorRuntime from "@babel/runtime/regenerator";
import _awaitAsyncGenerator from "@babel/runtime/helpers/esm/awaitAsyncGenerator";
import _wrapAsyncGenerator from "@babel/runtime/helpers/esm/wrapAsyncGenerator";
import _asyncIterator from "@babel/runtime/helpers/esm/asyncIterator";
export function makeTextDecoderIterator(_x, _x2) {
  return _makeTextDecoderIterator.apply(this, arguments);
}

function _makeTextDecoderIterator() {
  _makeTextDecoderIterator = _wrapAsyncGenerator(_regeneratorRuntime.mark(function _callee(arrayBufferIterator, options) {
    var textDecoder, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, arrayBuffer;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            textDecoder = new TextDecoder(options);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 3;
            _iterator = _asyncIterator(arrayBufferIterator);

          case 5:
            _context.next = 7;
            return _awaitAsyncGenerator(_iterator.next());

          case 7:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 11;
            return _awaitAsyncGenerator(_step.value);

          case 11:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 19;
              break;
            }

            arrayBuffer = _value;
            _context.next = 16;
            return typeof arrayBuffer === 'string' ? arrayBuffer : textDecoder.decode(arrayBuffer, {
              stream: true
            });

          case 16:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 19:
            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 25:
            _context.prev = 25;
            _context.prev = 26;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 30;
              break;
            }

            _context.next = 30;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 30:
            _context.prev = 30;

            if (!_didIteratorError) {
              _context.next = 33;
              break;
            }

            throw _iteratorError;

          case 33:
            return _context.finish(30);

          case 34:
            return _context.finish(25);

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 21, 25, 35], [26,, 30, 34]]);
  }));
  return _makeTextDecoderIterator.apply(this, arguments);
}

export function makeTextEncoderIterator(_x3, _x4) {
  return _makeTextEncoderIterator.apply(this, arguments);
}

function _makeTextEncoderIterator() {
  _makeTextEncoderIterator = _wrapAsyncGenerator(_regeneratorRuntime.mark(function _callee2(textIterator, options) {
    var textEncoder, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _value2, text;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            textEncoder = new TextEncoder();
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _context2.prev = 3;
            _iterator2 = _asyncIterator(textIterator);

          case 5:
            _context2.next = 7;
            return _awaitAsyncGenerator(_iterator2.next());

          case 7:
            _step2 = _context2.sent;
            _iteratorNormalCompletion2 = _step2.done;
            _context2.next = 11;
            return _awaitAsyncGenerator(_step2.value);

          case 11:
            _value2 = _context2.sent;

            if (_iteratorNormalCompletion2) {
              _context2.next = 19;
              break;
            }

            text = _value2;
            _context2.next = 16;
            return typeof text === 'string' ? textEncoder.encode(text) : text;

          case 16:
            _iteratorNormalCompletion2 = true;
            _context2.next = 5;
            break;

          case 19:
            _context2.next = 25;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](3);
            _didIteratorError2 = true;
            _iteratorError2 = _context2.t0;

          case 25:
            _context2.prev = 25;
            _context2.prev = 26;

            if (!(!_iteratorNormalCompletion2 && _iterator2["return"] != null)) {
              _context2.next = 30;
              break;
            }

            _context2.next = 30;
            return _awaitAsyncGenerator(_iterator2["return"]());

          case 30:
            _context2.prev = 30;

            if (!_didIteratorError2) {
              _context2.next = 33;
              break;
            }

            throw _iteratorError2;

          case 33:
            return _context2.finish(30);

          case 34:
            return _context2.finish(25);

          case 35:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 21, 25, 35], [26,, 30, 34]]);
  }));
  return _makeTextEncoderIterator.apply(this, arguments);
}

export function makeLineIterator(_x5) {
  return _makeLineIterator.apply(this, arguments);
}

function _makeLineIterator() {
  _makeLineIterator = _wrapAsyncGenerator(_regeneratorRuntime.mark(function _callee3(textIterator) {
    var previous, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _value3, textChunk, eolIndex, line;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            previous = '';
            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _context3.prev = 3;
            _iterator3 = _asyncIterator(textIterator);

          case 5:
            _context3.next = 7;
            return _awaitAsyncGenerator(_iterator3.next());

          case 7:
            _step3 = _context3.sent;
            _iteratorNormalCompletion3 = _step3.done;
            _context3.next = 11;
            return _awaitAsyncGenerator(_step3.value);

          case 11:
            _value3 = _context3.sent;

            if (_iteratorNormalCompletion3) {
              _context3.next = 26;
              break;
            }

            textChunk = _value3;
            previous += textChunk;
            eolIndex = void 0;

          case 16:
            if (!((eolIndex = previous.indexOf('\n')) >= 0)) {
              _context3.next = 23;
              break;
            }

            line = previous.slice(0, eolIndex + 1);
            previous = previous.slice(eolIndex + 1);
            _context3.next = 21;
            return line;

          case 21:
            _context3.next = 16;
            break;

          case 23:
            _iteratorNormalCompletion3 = true;
            _context3.next = 5;
            break;

          case 26:
            _context3.next = 32;
            break;

          case 28:
            _context3.prev = 28;
            _context3.t0 = _context3["catch"](3);
            _didIteratorError3 = true;
            _iteratorError3 = _context3.t0;

          case 32:
            _context3.prev = 32;
            _context3.prev = 33;

            if (!(!_iteratorNormalCompletion3 && _iterator3["return"] != null)) {
              _context3.next = 37;
              break;
            }

            _context3.next = 37;
            return _awaitAsyncGenerator(_iterator3["return"]());

          case 37:
            _context3.prev = 37;

            if (!_didIteratorError3) {
              _context3.next = 40;
              break;
            }

            throw _iteratorError3;

          case 40:
            return _context3.finish(37);

          case 41:
            return _context3.finish(32);

          case 42:
            if (!(previous.length > 0)) {
              _context3.next = 45;
              break;
            }

            _context3.next = 45;
            return previous;

          case 45:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 28, 32, 42], [33,, 37, 41]]);
  }));
  return _makeLineIterator.apply(this, arguments);
}

export function makeNumberedLineIterator(_x6) {
  return _makeNumberedLineIterator.apply(this, arguments);
}

function _makeNumberedLineIterator() {
  _makeNumberedLineIterator = _wrapAsyncGenerator(_regeneratorRuntime.mark(function _callee4(lineIterator) {
    var counter, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _value4, line;

    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            counter = 1;
            _iteratorNormalCompletion4 = true;
            _didIteratorError4 = false;
            _context4.prev = 3;
            _iterator4 = _asyncIterator(lineIterator);

          case 5:
            _context4.next = 7;
            return _awaitAsyncGenerator(_iterator4.next());

          case 7:
            _step4 = _context4.sent;
            _iteratorNormalCompletion4 = _step4.done;
            _context4.next = 11;
            return _awaitAsyncGenerator(_step4.value);

          case 11:
            _value4 = _context4.sent;

            if (_iteratorNormalCompletion4) {
              _context4.next = 20;
              break;
            }

            line = _value4;
            _context4.next = 16;
            return {
              counter: counter,
              line: line
            };

          case 16:
            counter++;

          case 17:
            _iteratorNormalCompletion4 = true;
            _context4.next = 5;
            break;

          case 20:
            _context4.next = 26;
            break;

          case 22:
            _context4.prev = 22;
            _context4.t0 = _context4["catch"](3);
            _didIteratorError4 = true;
            _iteratorError4 = _context4.t0;

          case 26:
            _context4.prev = 26;
            _context4.prev = 27;

            if (!(!_iteratorNormalCompletion4 && _iterator4["return"] != null)) {
              _context4.next = 31;
              break;
            }

            _context4.next = 31;
            return _awaitAsyncGenerator(_iterator4["return"]());

          case 31:
            _context4.prev = 31;

            if (!_didIteratorError4) {
              _context4.next = 34;
              break;
            }

            throw _iteratorError4;

          case 34:
            return _context4.finish(31);

          case 35:
            return _context4.finish(26);

          case 36:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 22, 26, 36], [27,, 31, 35]]);
  }));
  return _makeNumberedLineIterator.apply(this, arguments);
}
//# sourceMappingURL=text-iterators.js.map