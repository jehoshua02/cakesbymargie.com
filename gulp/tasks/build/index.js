var gulp = require('gulp');

gulp.task('build', [
  'build/webpack',
  'build/html',
  'build/cloudinary'
]);
