var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    gutil = require('gulp-util'),
    config = require('./config');

gulp.task('css', function() {
  return gulp
    .src(config.paths.src.css)
    .pipe(config.run.css.cssnano ? cssnano() : gutil.noop())
    .pipe(gulp.dest(config.paths.dest.css));
});