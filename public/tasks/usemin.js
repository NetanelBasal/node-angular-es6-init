var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var rev = require('gulp-rev');



gulp.task('usemin', function() {
  gulp.src('./index.html')
    .pipe(usemin({
      assetsDir: __dirname + '/../',
      js       : [uglify({ mangle: false }),rev()],
      css      : [minifyCSS(), rev()]
    }))

    .pipe(gulp.dest('./production'));
});