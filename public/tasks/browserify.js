var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var buffer = require('vinyl-buffer');
var notify = require("gulp-notify");
var gulpif = require('gulp-if');
var to5ify = require('6to5ify');
var ngAnnotate = require('gulp-ng-annotate');

var config = require('./../gulp-config');

gulp.task('js', function() {
  var onError = function( err ) {
    notify.onError({
      title   : "Gulp",
      subtitle: "JS Failure!",
      message : "Error: <%= error.message %>",
      sound   : "Beep"
    })(err);
  };

  browserify(config.js.src, {
    debug: true
  })
    .transform(to5ify)
    .bundle()
    .pipe(plumber({ errorHandler: onError }))
    .pipe(source(config.js.mainFileName))
    .pipe(buffer())
    .pipe(ngAnnotate())
    .pipe(gulpif(config.build, uglify()))
    .pipe(gulp.dest(config.js.dist))
    .pipe(livereload())
    .pipe(notify("Js Finished!"));

});