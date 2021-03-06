import _typeof from "@babel/runtime/helpers/esm/typeof";

var isBoolean = function isBoolean(x) {
  return typeof x === 'boolean';
};

var isFunction = function isFunction(x) {
  return typeof x === 'function';
};

export var isObject = function isObject(x) {
  return x !== null && _typeof(x) === 'object';
};
export var isPromise = function isPromise(x) {
  return isObject(x) && isFunction(x.then);
};
export var isIterable = function isIterable(x) {
  return x && typeof x[Symbol.iterator] === 'function';
};
export var isAsyncIterable = function isAsyncIterable(x) {
  return x && typeof x[Symbol.asyncIterator] === 'function';
};
export var isIterator = function isIterator(x) {
  return x && isFunction(x.next);
};
export var isResponse = function isResponse(x) {
  return typeof Response !== 'undefined' && x instanceof Response || x && x.arrayBuffer && x.text && x.json;
};
export var isFile = function isFile(x) {
  return typeof File !== 'undefined' && x instanceof File;
};
export var isBlob = function isBlob(x) {
  return typeof Blob !== 'undefined' && x instanceof Blob;
};
export var isWritableDOMStream = function isWritableDOMStream(x) {
  return isObject(x) && isFunction(x.abort) && isFunction(x.getWriter);
};
export var isReadableDOMStream = function isReadableDOMStream(x) {
  return typeof ReadableStream !== 'undefined' && x instanceof ReadableStream || isObject(x) && isFunction(x.tee) && isFunction(x.cancel) && isFunction(x.getReader);
};
export var isBuffer = function isBuffer(x) {
  return x && _typeof(x) === 'object' && x.isBuffer;
};
export var isWritableNodeStream = function isWritableNodeStream(x) {
  return isObject(x) && isFunction(x.end) && isFunction(x.write) && isBoolean(x.writable);
};
export var isReadableNodeStream = function isReadableNodeStream(x) {
  return isObject(x) && isFunction(x.read) && isFunction(x.pipe) && isBoolean(x.readable);
};
export var isReadableStream = function isReadableStream(x) {
  return isReadableDOMStream(x) || isReadableNodeStream(x);
};
export var isWritableStream = function isWritableStream(x) {
  return isWritableDOMStream(x) || isWritableNodeStream(x);
};
//# sourceMappingURL=is-type.js.map