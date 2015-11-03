var gulp = require('gulp');
var clean = require('gulp-contrib-clean');
var copy = require('gulp-contrib-copy');
var nodemon = require('gulp-nodemon');

var paths = {
	bower: ['./bower_components/Materialize/dist/**/*',
			'./bower_components/jquery/dist/*.js']
};

gulp.task('clean', function() {
	gulp.src('./public/dist')
		.pipe(clean());
});

gulp.task('copy', function() {
	gulp.src(paths.bower)
		.pipe(copy())
		.pipe(gulp.dest('./public/dist/'));
});

gulp.task('serve', function() {
	nodemon({
		script: 'server.js',
		ext: 'js'
	});
});

gulp.task('default', ['clean', 'copy', 'serve']);