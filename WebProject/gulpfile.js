var gulp = require('gulp');
var ts = require('gulp-typescript');
var minify = require('gulp-minify');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');

gulp.task('less', gulp.series(function() {
  return gulp
    .src('src/less/*.less')
    .pipe(less())
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(
      gulp.dest("webroot/css/")
    );
}));


gulp.task('ts', gulp.series(function () {
	return gulp
        .src('src/*.ts')
		.pipe(ts({
			noImplicitAny: true,
            module: "amd",
            lib: ["es2021", "dom"],
			outFile: 'index.js',
		}))
        .pipe(minify({
            noSource: true
        }))
		.pipe(gulp.dest('webroot/js'));
}));


gulp.task('default', gulp.series("ts", "less", function() {
    gulp.watch('src/*.ts', gulp.series('ts'));
    gulp.watch('src/less/*.less', gulp.series('less'));
}));