'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('./src/styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist'));
});

gulp.task('dev', ['sass'], function() {
	gulp.watch([
		'./src/styles/*.scss',
		'./src/styles/**/*.scss'
	], ['sass']);
});