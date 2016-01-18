var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    config = require('./config');

gulp.task('html', function() {
  return gulp
    .src(config.paths.src.html)
    .pipe(gulp.dest(config.paths.dest.html));
});