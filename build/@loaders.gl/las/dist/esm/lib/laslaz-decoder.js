import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";

var getModule = require('../libs/laz-perf');

var Module = null;
var POINT_FORMAT_READERS = {
  0: function _(dv) {
    return {
      position: [dv.getInt32(0, true), dv.getInt32(4, true), dv.getInt32(8, true)],
      intensity: dv.getUint16(12, true),
      classification: dv.getUint8(15, true)
    };
  },
  1: function _(dv) {
    return {
      position: [dv.getInt32(0, true), dv.getInt32(4, true), dv.getInt32(8, true)],
      intensity: dv.getUint16(12, true),
      classification: dv.getUint8(15, true)
    };
  },
  2: function _(dv) {
    return {
      position: [dv.getInt32(0, true), dv.getInt32(4, true), dv.getInt32(8, true)],
      intensity: dv.getUint16(12, true),
      classification: dv.getUint8(15, true),
      color: [dv.getUint16(20, true), dv.getUint16(22, true), dv.getUint16(24, true)]
    };
  },
  3: function _(dv) {
    return {
      position: [dv.getInt32(0, true), dv.getInt32(4, true), dv.getInt32(8, true)],
      intensity: dv.getUint16(12, true),
      classification: dv.getUint8(15, true),
      color: [dv.getUint16(28, true), dv.getUint16(30, true), dv.getUint16(32, true)]
    };
  }
};

function readAs(buf, Type, offset, count) {
  count = count === undefined || count === 0 ? 1 : count;
  var sub = buf.slice(offset, offset + Type.BYTES_PER_ELEMENT * count);
  var r = new Type(sub);

  if (count === 1) {
    return r[0];
  }

  var ret = [];

  for (var i = 0; i < count; i++) {
    ret.push(r[i]);
  }

  return ret;
}

function parseLASHeader(arraybuffer) {
  var o = {};
  o.pointsOffset = readAs(arraybuffer, Uint32Array, 32 * 3);
  o.pointsFormatId = readAs(arraybuffer, Uint8Array, 32 * 3 + 8);
  o.pointsStructSize = readAs(arraybuffer, Uint16Array, 32 * 3 + 8 + 1);
  o.pointsCount = readAs(arraybuffer, Uint32Array, 32 * 3 + 11);
  var start = 32 * 3 + 35;
  o.scale = readAs(arraybuffer, Float64Array, start, 3);
  start += 24;
  o.offset = readAs(arraybuffer, Float64Array, start, 3);
  start += 24;
  var bounds = readAs(arraybuffer, Float64Array, start, 6);
  start += 48;
  o.maxs = [bounds[0], bounds[2], bounds[4]];
  o.mins = [bounds[1], bounds[3], bounds[5]];
  return o;
}

var LASLoader = function () {
  function LASLoader(arraybuffer) {
    _classCallCheck(this, LASLoader);

    this.arraybuffer = arraybuffer;
  }

  _createClass(LASLoader, [{
    key: "open",
    value: function open() {
      this.readOffset = 0;
      return true;
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      this.header = parseLASHeader(this.arraybuffer);
      return this.header;
    }
  }, {
    key: "readData",
    value: function readData(count, offset, skip) {
      var header = this.header,
          arraybuffer = this.arraybuffer;

      if (!header) {
        throw new Error('Cannot start reading data till a header request is issued');
      }

      var readOffset = this.readOffset;
      var start;

      if (skip <= 1) {
        count = Math.min(count, header.pointsCount - readOffset);
        start = header.pointsOffset + readOffset * header.pointsStructSize;
        var end = start + count * header.pointsStructSize;
        readOffset += count;
        this.readOffset = readOffset;
        return {
          buffer: arraybuffer.slice(start, end),
          count: count,
          hasMoreData: readOffset < header.pointsCount
        };
      }

      var pointsToRead = Math.min(count * skip, header.pointsCount - readOffset);
      var bufferSize = Math.ceil(pointsToRead / skip);
      var pointsRead = 0;
      var buf = new Uint8Array(bufferSize * header.pointsStructSize);

      for (var i = 0; i < pointsToRead; i++) {
        if (i % skip === 0) {
          start = header.pointsOffset + readOffset * header.pointsStructSize;
          var src = new Uint8Array(arraybuffer, start, header.pointsStructSize);
          buf.set(src, pointsRead * header.pointsStructSize);
          pointsRead++;
        }

        readOffset++;
      }

      this.readOffset = readOffset;
      return {
        buffer: buf.buffer,
        count: pointsRead,
        hasMoreData: readOffset < header.pointsCount
      };
    }
  }, {
    key: "close",
    value: function close() {
      this.arraybuffer = null;
      return true;
    }
  }]);

  return LASLoader;
}();

var LAZLoader = function () {
  function LAZLoader(arraybuffer) {
    _classCallCheck(this, LAZLoader);

    this.arraybuffer = arraybuffer;
    this.instance = null;

    if (!Module) {
      Module = getModule();
    }
  }

  _createClass(LAZLoader, [{
    key: "open",
    value: function open() {
      try {
        var arraybuffer = this.arraybuffer;
        this.instance = new Module.LASZip();
        var abInt = new Uint8Array(arraybuffer);

        var buf = Module._malloc(arraybuffer.byteLength);

        this.instance.arraybuffer = arraybuffer;
        this.instance.buf = buf;
        Module.HEAPU8.set(abInt, buf);
        this.instance.open(buf, arraybuffer.byteLength);
        this.instance.readOffset = 0;
        return true;
      } catch (e) {
        throw new Error("Failed to open file: ".concat(e.message));
      }
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      if (!this.instance) {
        throw new Error('You need to open the file before trying to read header');
      }

      try {
        var header = parseLASHeader(this.instance.arraybuffer);
        header.pointsFormatId &= 0x3f;
        this.header = header;
        return header;
      } catch (e) {
        throw new Error("Failed to get header: ".concat(e.message));
      }
    }
  }, {
    key: "readData",
    value: function readData(count, offset, skip) {
      if (!this.instance) {
        throw new Error('You need to open the file before trying to read stuff');
      }

      var header = this.header,
          instance = this.instance;

      if (!header) {
        throw new Error('You need to query header before reading, I maintain state that way, sorry :(');
      }

      try {
        var pointsToRead = Math.min(count * skip, header.pointsCount - instance.readOffset);
        var bufferSize = Math.ceil(pointsToRead / skip);
        var pointsRead = 0;
        var thisBuf = new Uint8Array(bufferSize * header.pointsStructSize);

        var bufRead = Module._malloc(header.pointsStructSize);

        for (var i = 0; i < pointsToRead; i++) {
          instance.getPoint(bufRead);

          if (i % skip === 0) {
            var a = new Uint8Array(Module.HEAPU8.buffer, bufRead, header.pointsStructSize);
            thisBuf.set(a, pointsRead * header.pointsStructSize);
            pointsRead++;
          }

          instance.readOffset++;
        }

        return {
          buffer: thisBuf.buffer,
          count: pointsRead,
          hasMoreData: instance.readOffset < header.pointsCount
        };
      } catch (e) {
        throw new Error("Failed to read data: ".concat(e.message));
      }
    }
  }, {
    key: "close",
    value: function close() {
      try {
        if (this.instance !== null) {
          this.instance["delete"]();
          this.instance = null;
        }

        return true;
      } catch (e) {
        throw new Error("Failed to close file: ".concat(e.message));
      }
    }
  }]);

  return LAZLoader;
}();

var LASDecoder = function () {
  function LASDecoder(buffer, len, header) {
    _classCallCheck(this, LASDecoder);

    this.arrayb = buffer;
    this.decoder = POINT_FORMAT_READERS[header.pointsFormatId];
    this.pointsCount = len;
    this.pointSize = header.pointsStructSize;
    this.scale = header.scale;
    this.offset = header.offset;
    this.mins = header.mins;
    this.maxs = header.maxs;
  }

  _createClass(LASDecoder, [{
    key: "getPoint",
    value: function getPoint(index) {
      if (index < 0 || index >= this.pointsCount) {
        throw new Error('Point index out of range');
      }

      var dv = new DataView(this.arrayb, index * this.pointSize, this.pointSize);
      return this.decoder(dv);
    }
  }]);

  return LASDecoder;
}();

export var LASFile = function () {
  function LASFile(arraybuffer) {
    _classCallCheck(this, LASFile);

    this.arraybuffer = arraybuffer;
    this.determineVersion();

    if (this.version > 13) {
      throw new Error('Only file versions <= 1.3 are supported at this time');
    }

    this.determineFormat();

    if (POINT_FORMAT_READERS[this.formatId] === undefined) {
      throw new Error('The point format ID is not supported');
    }

    this.loader = this.isCompressed ? new LAZLoader(this.arraybuffer) : new LASLoader(this.arraybuffer);
  }

  _createClass(LASFile, [{
    key: "determineFormat",
    value: function determineFormat() {
      var formatId = readAs(this.arraybuffer, Uint8Array, 32 * 3 + 8);
      var bit7 = (formatId & 0x80) >> 7;
      var bit6 = (formatId & 0x40) >> 6;

      if (bit7 === 1 && bit6 === 1) {
        throw new Error('Old style compression not supported');
      }

      this.formatId = formatId & 0x3f;
      this.isCompressed = bit7 === 1 || bit6 === 1;
    }
  }, {
    key: "determineVersion",
    value: function determineVersion() {
      var ver = new Int8Array(this.arraybuffer, 24, 2);
      this.version = ver[0] * 10 + ver[1];
      this.versionAsString = "".concat(ver[0], ".").concat(ver[1]);
    }
  }, {
    key: "open",
    value: function open() {
      if (this.loader.open()) {
        this.isOpen = true;
      }
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      return this.loader.getHeader();
    }
  }, {
    key: "readData",
    value: function readData(count, start, skip) {
      return this.loader.readData(count, start, skip);
    }
  }, {
    key: "close",
    value: function close() {
      if (this.loader.close()) {
        this.isOpen = false;
      }
    }
  }, {
    key: "getUnpacker",
    value: function getUnpacker() {
      return LASDecoder;
    }
  }]);

  return LASFile;
}();
export var LASModuleWasLoaded = false;
//# sourceMappingURL=laslaz-decoder.js.map