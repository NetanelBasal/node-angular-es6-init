var gulp = require('gulp');
var livereload = require('gulp-livereload');
var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var minifyCSS = require('gulp-minify-css');
var gulpif = require('gulp-if');

var config = require('./../gulp-config');

gulp.task('sass', function() {
  var onError = function( err ) {
    notify.onError({
      title   : "Gulp",
      subtitle: "Sass Failure!",
      message : "Error: <%= error.message %>",
      sound   : "Beep"
    })(err);
  };
  return sass(config.sass.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(prefix("last 10 versions", "> 1%", "ie 8", "ie 7"))
    .pipe(gulpif(config.build, minifyCSS()))
    .pipe(gulp.dest(config.sass.dist))
    .pipe(notify("Sass Finished!"))
    .pipe(livereload());
});
