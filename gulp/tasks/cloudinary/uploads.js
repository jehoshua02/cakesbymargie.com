var gulp = require('gulp');
var cloudinary = require('cloudinary');
var uploads = require('../../config/cloudinary/uploads');

gulp.task('cloudinary/uploads', function () {

  if (!uploads) {
    console.error('NOTE: Update ./gulp/config/cloudinary/uploads.js before running cloudinary/uploads task!');
    return;
  }

  uploads.forEach(function (url) {
    cloudinary.uploader.upload(url, function(result) {
      console.log(result)
    });
  });

});
