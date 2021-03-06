"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResourceUrlAndType = getResourceUrlAndType;
exports.getResourceContentLength = getResourceContentLength;

var _isType = require("../../javascript-utils/is-type");

var _mimeTypeUtils = require("./mime-type-utils");

var QUERY_STRING_PATTERN = /\?.*/;

function getResourceUrlAndType(resource) {
  if ((0, _isType.isResponse)(resource)) {
    var contentType = (0, _mimeTypeUtils.parseMIMEType)(resource.headers.get('content-type'));
    var urlType = (0, _mimeTypeUtils.parseMIMETypeFromURL)(resource.url);
    return {
      url: stripQueryString(resource.url || ''),
      type: contentType || urlType || null
    };
  }

  if ((0, _isType.isBlob)(resource)) {
    return {
      url: stripQueryString(resource.url || ''),
      type: resource.type || ''
    };
  }

  if (typeof resource === 'string') {
    return {
      url: stripQueryString(resource),
      type: (0, _mimeTypeUtils.parseMIMETypeFromURL)(resource)
    };
  }

  return {
    url: '',
    type: ''
  };
}

function getResourceContentLength(resource) {
  if ((0, _isType.isResponse)(resource)) {
    return resource.headers['content-length'] || -1;
  }

  if ((0, _isType.isBlob)(resource)) {
    return resource.size;
  }

  if (typeof resource === 'string') {
    return resource.length;
  }

  if (resource instanceof ArrayBuffer) {
    return resource.byteLength;
  }

  if (ArrayBuffer.isView(resource)) {
    return resource.byteLength;
  }

  return -1;
}

function stripQueryString(url) {
  return url.replace(QUERY_STRING_PATTERN, '');
}
//# sourceMappingURL=resource-utils.js.map