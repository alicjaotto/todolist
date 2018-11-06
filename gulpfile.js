var gulp = require('gulp');
var less = require('gulp-less');

function compileLess() {
  return gulp.src('./src/assets/style/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./src/assets/style/'));
}

gulp.task('compile-less', compileLess);

gulp.task('watch', function () {
  gulp.watch('./src/assets/style/less/*.less' , compileLess);
});
