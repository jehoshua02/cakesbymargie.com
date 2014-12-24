var extend = require('extend');
var cloudinary = require('cloudinary');

var getChunk = function (callback, options) {
  options = options || {};
  var options = extend({
    max_results: 100,
    tags: true
  }, options);

  cloudinary.api.resources(callback, options);
};

module.exports = getChunk;
