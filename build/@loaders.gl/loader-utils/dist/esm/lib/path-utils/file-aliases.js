var pathPrefix = '';
var fileAliases = {};
export function setPathPrefix(prefix) {
  pathPrefix = prefix;
}
export function getPathPrefix() {
  return pathPrefix;
}
export function addAliases(aliases) {
  Object.assign(fileAliases, aliases);
}
export function resolvePath(filename) {
  for (var alias in fileAliases) {
    if (filename.startsWith(alias)) {
      var replacement = fileAliases[alias];
      filename = filename.replace(alias, replacement);
    }
  }

  if (!filename.startsWith('http://') && !filename.startsWith('https://')) {
    filename = "".concat(pathPrefix).concat(filename);
  }

  return filename;
}
//# sourceMappingURL=file-aliases.js.map