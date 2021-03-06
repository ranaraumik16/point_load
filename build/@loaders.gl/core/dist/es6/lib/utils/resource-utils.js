import { isResponse, isBlob } from '../../javascript-utils/is-type';
import { parseMIMEType, parseMIMETypeFromURL } from './mime-type-utils';
const QUERY_STRING_PATTERN = /\?.*/;
export function getResourceUrlAndType(resource) {
  if (isResponse(resource)) {
    const contentType = parseMIMEType(resource.headers.get('content-type'));
    const urlType = parseMIMETypeFromURL(resource.url);
    return {
      url: stripQueryString(resource.url || ''),
      type: contentType || urlType || null
    };
  }

  if (isBlob(resource)) {
    return {
      url: stripQueryString(resource.url || ''),
      type: resource.type || ''
    };
  }

  if (typeof resource === 'string') {
    return {
      url: stripQueryString(resource),
      type: parseMIMETypeFromURL(resource)
    };
  }

  return {
    url: '',
    type: ''
  };
}
export function getResourceContentLength(resource) {
  if (isResponse(resource)) {
    return resource.headers['content-length'] || -1;
  }

  if (isBlob(resource)) {
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