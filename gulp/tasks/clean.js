var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
  var config = {
    src: [
      './build'
    ]
  };

  del(config.src);
});
