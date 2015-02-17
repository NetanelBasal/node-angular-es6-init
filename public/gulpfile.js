var gulp = require('gulp');

var requireDir = require('require-dir');

var runSequence = require('gulp-run-sequence');

requireDir('./tasks', {
  recurse: true
});


gulp.task('dev', function(cb) {
  runSequence('js', 'sass', 'watch', cb);
});

gulp.task('build', function(cb) {
  runSequence('images', 'clean', 'usemin', 'copy', cb);
});
//gulp.task('default', function(cb) {
//  runSequence('nodemon', cb);
//});



