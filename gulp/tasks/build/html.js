var gulp = require('gulp');

gulp.task('build/html', function () {
  var config = {
    src: './src/index.html',
    dest: './build'
  };

  gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
