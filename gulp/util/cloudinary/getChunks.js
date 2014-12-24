var getChunk = require('./getChunk');

var getChunks = function (params) {
  getChunk(function (chunk) {
    params.chunk(chunk);
    if (chunk.next_cursor) {
      params.options.next_cursor = chunk.next_cursor;
      getChunks(params);
    } else {
      params.done();
    }
  }, params.options);
};

module.exports = getChunks;
