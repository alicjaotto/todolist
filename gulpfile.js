var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var ngAnnotate = require('browserify-ngannotate');
var source = require('vinyl-source-stream');
var templateCache = require('gulp-angular-templatecache');

var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();


function compileLess() {
  return gulp.src('./src/assets/style/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./src/assets/style/'));
}

gulp.task('compile-less', compileLess);

gulp.task('watch', function () {
	gulp.watch('./src/assets/style/less/*.less' , compileLess);
});

gulp.task('build-js', function() {
	var b = browserify({
		entries: './src/app/app.js',
		debug: true,
		transform: [ngAnnotate]
	});

	return b.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(cachebust.resources())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(uglify())
		.on('error', gutil.log)
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('templates', function() {
	return gulp.src('src/app/**/*.html')
		.pipe(sourcemaps.init())
		.pipe(templateCache())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/'))
});
