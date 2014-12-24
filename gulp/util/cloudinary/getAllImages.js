var getChunksRecursive = require('./getChunks');

var getAllImages = function (callback) {
  var images = [];

  var chunk = function (chunk) {
    Array.prototype.push.apply(images, chunk.resources);
  };

  getChunksRecursive({
    options: {},
    chunk: chunk,
    done: function () {
      callback(images);
    }
  });
};

module.exports = getAllImages;
