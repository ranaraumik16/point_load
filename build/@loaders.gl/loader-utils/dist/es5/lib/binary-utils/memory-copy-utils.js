"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.padTo4Bytes = padTo4Bytes;
exports.getZeroOffsetArrayBuffer = getZeroOffsetArrayBuffer;
exports.copyArrayBuffer = copyArrayBuffer;
exports.copyToArray = copyToArray;

function padTo4Bytes(byteLength) {
  return byteLength + 3 & ~3;
}

function getZeroOffsetArrayBuffer(arrayBuffer, byteOffset, byteLength) {
  var subArray = byteLength ? new Uint8Array(arrayBuffer).subarray(byteOffset, byteOffset + byteLength) : new Uint8Array(arrayBuffer).subarray(byteOffset);
  var arrayCopy = new Uint8Array(subArray);
  return arrayCopy.buffer;
}

function copyArrayBuffer(targetBuffer, sourceBuffer, byteOffset) {
  var byteLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : sourceBuffer.byteLength;
  var targetArray = new Uint8Array(targetBuffer, byteOffset, byteLength);
  var sourceArray = new Uint8Array(sourceBuffer);
  targetArray.set(sourceArray);
  return targetBuffer;
}

function copyToArray(source, target, targetOffset) {
  var sourceArray;

  if (source instanceof ArrayBuffer) {
    sourceArray = new Uint8Array(source);
  } else {
    var srcByteOffset = source.byteOffset;
    var srcByteLength = source.byteLength;
    sourceArray = new Uint8Array(source.buffer, srcByteOffset, srcByteLength);
  }

  target.set(sourceArray, targetOffset);
  return targetOffset + padTo4Bytes(sourceArray.byteLength);
}
//# sourceMappingURL=memory-copy-utils.js.map