var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('../../config/webpack/index');

gulp.task('build/webpack', function () {
  var config = {
    src: './src/app.js',
    dest: './build',
    webpack: webpackConfig
  };

  return gulp.src(config.src)
    .pipe(webpack(config.webpack))
    .pipe(gulp.dest(config.dest));
});
