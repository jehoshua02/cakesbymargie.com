var gulp = require('gulp');

gulp.task('watch', ['build'], function () {
  var config = {
    src: [
      './src/**/*'
    ]
  };

  gulp.watch(config.src, ['build']);
});
