export function padStringToByteAlignment(string, byteAlignment) {
  const length = string.length;
  const paddedLength = Math.ceil(length / byteAlignment) * byteAlignment;
  const padding = paddedLength - length;
  let whitespace = '';

  for (let i = 0; i < padding; ++i) {
    whitespace += ' ';
  }

  return string + whitespace;
}
export function copyStringToDataView(dataView, byteOffset, string, byteLength) {
  if (dataView) {
    for (let i = 0; i < byteLength; i++) {
      dataView.setUint8(byteOffset + i, string.charCodeAt(i));
    }
  }

  return byteOffset + byteLength;
}
export function copyBinaryToDataView(dataView, byteOffset, binary, byteLength) {
  if (dataView) {
    for (let i = 0; i < byteLength; i++) {
      dataView.setUint8(byteOffset + i, binary[i]);
      byteOffset++;
    }
  }

  return byteOffset + byteLength;
}
//# sourceMappingURL=encode-utils.js.map