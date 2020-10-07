import { getMeshBoundingBox } from '@loaders.gl/loader-utils';
import { LASFile } from './laslaz-decoder';
export default function parseLAS(arraybuffer, options = {}) {
  let pointIndex = 0;
  let positions;
  let colors;
  let intensities;
  let classifications;
  let originalHeader;
  const result = {};
  const {
    onProgress
  } = options;
  const {
    skip
  } = options.las || {};
  parseLASChunked(arraybuffer, skip, (decoder, header) => {
    if (!originalHeader) {
      originalHeader = header;
      const total = header.totalToRead;
      positions = new Float32Array(total * 3);
      colors = header.pointsFormatId >= 2 ? new Uint8Array(total * 4) : null;
      intensities = new Uint16Array(total);
      classifications = new Uint8Array(total);
      Object.assign(result, {
        loaderData: {
          header
        },
        mode: 0,
        attributes: {
          POSITION: {
            value: positions,
            size: 3
          },
          intensity: {
            value: intensities,
            size: 1
          },
          classification: {
            value: classifications,
            size: 1
          }
        }
      });

      if (colors) {
        result.attributes.COLOR_0 = {
          value: colors,
          size: 4
        };
      }
    }

    const batchSize = decoder.pointsCount;
    const {
      scale: [scaleX, scaleY, scaleZ],
      offset: [offsetX, offsetY, offsetZ]
    } = header;

    for (let i = 0; i < batchSize; i++) {
      const {
        position,
        color,
        intensity,
        classification
      } = decoder.getPoint(i);
      positions[pointIndex * 3] = position[0] * scaleX + offsetX;
      positions[pointIndex * 3 + 1] = position[1] * scaleY + offsetY;
      positions[pointIndex * 3 + 2] = position[2] * scaleZ + offsetZ;

      if (color) {
        colors[pointIndex * 4] = color[0];
        colors[pointIndex * 4 + 1] = color[1];
        colors[pointIndex * 4 + 2] = color[2];
        colors[pointIndex * 4 + 3] = 255;
      }

      intensities[pointIndex] = intensity;
      classifications[pointIndex] = classification;
      pointIndex++;
    }

    if (onProgress) {
      onProgress(Object.assign({
        header: {
          vertexCount: header.totalRead
        },
        progress: header.totalRead / header.totalToRead
      }, result));
    }
  });
  result.header = {
    vertexCount: originalHeader.totalToRead,
    boundingBox: getMeshBoundingBox(result.attributes)
  };
  return result;
}
export function parseLASChunked(rawData, skip, onParseData) {
  const dataHandler = new LASFile(rawData);

  try {
    dataHandler.open();
    const header = dataHandler.getHeader();
    const Unpacker = dataHandler.getUnpacker();
    const totalToRead = Math.ceil(header.pointsCount / Math.max(1, skip));
    header.totalToRead = totalToRead;
    let totalRead = 0;

    while (true) {
      const chunk = dataHandler.readData(1000 * 100, 0, skip);
      totalRead += chunk.count;
      header.totalRead = totalRead;
      header.versionAsString = chunk.versionAsString;
      header.isCompressed = chunk.isCompressed;
      const unpacker = new Unpacker(chunk.buffer, chunk.count, header);
      onParseData(unpacker, header);

      if (!chunk.hasMoreData || totalRead >= totalToRead) {
        break;
      }
    }
  } catch (e) {
    throw e;
  } finally {
    dataHandler.close();
  }
}
//# sourceMappingURL=parse-las.js.map