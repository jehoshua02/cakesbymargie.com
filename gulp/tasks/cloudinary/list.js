var gulp = require('gulp');
var writeJson = require('jsonfile').writeFileSync;
var getAllImages = require('../../util/cloudinary/getAllImages');

gulp.task('cloudinary/list', function () {
  getAllImages(function (images) {
    writeJson('./tmp/cloudinary/img.json', images);
  });
});
