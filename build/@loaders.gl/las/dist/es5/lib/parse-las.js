"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = parseLAS;
exports.parseLASChunked = parseLASChunked;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _loaderUtils = require("@loaders.gl/loader-utils");

var _laslazDecoder = require("./laslaz-decoder");

function parseLAS(arraybuffer) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var pointIndex = 0;
  var positions;
  var colors;
  var intensities;
  var classifications;
  var originalHeader;
  var result = {};
  var onProgress = options.onProgress;

  var _ref = options.las || {},
      skip = _ref.skip;

  parseLASChunked(arraybuffer, skip, function (decoder, header) {
    if (!originalHeader) {
      originalHeader = header;
      var total = header.totalToRead;
      positions = new Float32Array(total * 3);
      colors = header.pointsFormatId >= 2 ? new Uint8Array(total * 4) : null;
      intensities = new Uint16Array(total);
      classifications = new Uint8Array(total);
      Object.assign(result, {
        loaderData: {
          header: header
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

    var batchSize = decoder.pointsCount;

    var _header$scale = (0, _slicedToArray2["default"])(header.scale, 3),
        scaleX = _header$scale[0],
        scaleY = _header$scale[1],
        scaleZ = _header$scale[2],
        _header$offset = (0, _slicedToArray2["default"])(header.offset, 3),
        offsetX = _header$offset[0],
        offsetY = _header$offset[1],
        offsetZ = _header$offset[2];

    for (var i = 0; i < batchSize; i++) {
      var _decoder$getPoint = decoder.getPoint(i),
          position = _decoder$getPoint.position,
          color = _decoder$getPoint.color,
          intensity = _decoder$getPoint.intensity,
          classification = _decoder$getPoint.classification;

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
    boundingBox: (0, _loaderUtils.getMeshBoundingBox)(result.attributes)
  };
  return result;
}

function parseLASChunked(rawData, skip, onParseData) {
  var dataHandler = new _laslazDecoder.LASFile(rawData);

  try {
    dataHandler.open();
    var header = dataHandler.getHeader();
    var Unpacker = dataHandler.getUnpacker();
    var totalToRead = Math.ceil(header.pointsCount / Math.max(1, skip));
    header.totalToRead = totalToRead;
    var totalRead = 0;

    while (true) {
      var chunk = dataHandler.readData(1000 * 100, 0, skip);
      totalRead += chunk.count;
      header.totalRead = totalRead;
      header.versionAsString = chunk.versionAsString;
      header.isCompressed = chunk.isCompressed;
      var unpacker = new Unpacker(chunk.buffer, chunk.count, header);
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