export function padTo4Bytes(byteLength) {
  return byteLength + 3 & ~3;
}
export function getZeroOffsetArrayBuffer(arrayBuffer, byteOffset, byteLength) {
  const subArray = byteLength ? new Uint8Array(arrayBuffer).subarray(byteOffset, byteOffset + byteLength) : new Uint8Array(arrayBuffer).subarray(byteOffset);
  const arrayCopy = new Uint8Array(subArray);
  return arrayCopy.buffer;
}
export function copyArrayBuffer(targetBuffer, sourceBuffer, byteOffset, byteLength = sourceBuffer.byteLength) {
  const targetArray = new Uint8Array(targetBuffer, byteOffset, byteLength);
  const sourceArray = new Uint8Array(sourceBuffer);
  targetArray.set(sourceArray);
  return targetBuffer;
}
export function copyToArray(source, target, targetOffset) {
  let sourceArray;

  if (source instanceof ArrayBuffer) {
    sourceArray = new Uint8Array(source);
  } else {
    const srcByteOffset = source.byteOffset;
    const srcByteLength = source.byteLength;
    sourceArray = new Uint8Array(source.buffer, srcByteOffset, srcByteLength);
  }

  target.set(sourceArray, targetOffset);
  return targetOffset + padTo4Bytes(sourceArray.byteLength);
}
//# sourceMappingURL=memory-copy-utils.js.map