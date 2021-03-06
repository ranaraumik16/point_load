import assert from './env-utils/assert';
const VERSION = typeof "2.2.8" !== 'undefined' ? "2.2.8" : '';
export function validateLoaderVersion(loader, coreVersion = VERSION) {
  assert(loader, 'no loader provided');
  let loaderVersion = loader.version;

  if (!coreVersion || !loaderVersion) {
    return;
  }

  coreVersion = parseVersion(coreVersion);
  loaderVersion = parseVersion(loaderVersion);
}

function parseVersion(version) {
  const parts = version.split('.').map(Number);
  return {
    major: parts[0],
    minor: parts[1]
  };
}
//# sourceMappingURL=validate-loader-version.js.map