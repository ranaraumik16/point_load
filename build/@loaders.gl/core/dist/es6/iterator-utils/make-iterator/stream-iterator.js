import _awaitAsyncGenerator from "@babel/runtime/helpers/esm/awaitAsyncGenerator";
import _wrapAsyncGenerator from "@babel/runtime/helpers/esm/wrapAsyncGenerator";
import { isBrowser, nodeVersion } from '@loaders.gl/loader-utils';
export function makeStreamIterator(stream) {
  if (isBrowser || nodeVersion >= 10) {
    if (typeof stream[Symbol.asyncIterator] === 'function') {
      return stream;
    }

    if (typeof stream.getIterator === 'function') {
      return stream.getIterator();
    }
  }

  return isBrowser ? makeBrowserStreamIterator(stream) : makeNodeStreamIterator(stream);
}

function makeBrowserStreamIterator(_x) {
  return _makeBrowserStreamIterator.apply(this, arguments);
}

function _makeBrowserStreamIterator() {
  _makeBrowserStreamIterator = _wrapAsyncGenerator(function* (stream) {
    const reader = stream.getReader();

    try {
      while (true) {
        const {
          done,
          value
        } = yield _awaitAsyncGenerator(reader.read());

        if (done) {
          return;
        }

        yield value;
      }
    } catch (error) {
      reader.releaseLock();
    }
  });
  return _makeBrowserStreamIterator.apply(this, arguments);
}

function makeNodeStreamIterator(_x2) {
  return _makeNodeStreamIterator.apply(this, arguments);
}

function _makeNodeStreamIterator() {
  _makeNodeStreamIterator = _wrapAsyncGenerator(function* (stream) {
    stream = yield _awaitAsyncGenerator(stream);

    while (true) {
      const data = stream.read();

      if (data !== null) {
        yield data;
        continue;
      }

      if (stream._readableState.ended) {
        return;
      }

      yield _awaitAsyncGenerator(onceReadable(stream));
    }
  });
  return _makeNodeStreamIterator.apply(this, arguments);
}

async function onceReadable(stream) {
  return new Promise(resolve => {
    stream.once('readable', resolve);
  });
}
//# sourceMappingURL=stream-iterator.js.map