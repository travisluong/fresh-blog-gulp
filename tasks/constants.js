var gulp = require('gulp'),
    replace = require('gulp-replace'),
    config = require('./config');

gulp.task('constants', function() {
  return gulp
    .src(config.paths.src.constants)
    .pipe(replace('<apiHost>', config.constants.apiHost))
    .pipe(gulp.dest(config.paths.dest.constants));
});