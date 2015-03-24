var ngAnnotate = require('gulp-ng-annotate');
var config = require('./../gulp-config');
var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var to5ify = require('6to5ify');
var livereload = require('gulp-livereload');
var wait = require('gulp-wait');

gulp.task('js', function() {
  browserify(config.js.src, {
    debug: true
  })
    .transform(to5ify)
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(config.js.mainFileName))
    .pipe(buffer())
    .pipe(ngAnnotate())
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.js.dist))
    .pipe(wait(1000))
    .pipe(livereload());
});