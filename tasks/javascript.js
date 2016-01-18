var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    config = require('./config');

gulp.task('js', function() {
  return gulp
    .src(config.paths.src.js)
    .pipe(config.run.js.uglify ? uglify(config.plugin.js.uglify) : gutil.noop())
    .pipe(gulp.dest(config.paths.dest.js));
});