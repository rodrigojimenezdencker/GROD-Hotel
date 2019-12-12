'use strict';

var
	gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglifyCss = require('gulp-csso')
;

function css(done)
{
	gulp
		.src([
			'../shared/css/layout.css',
			'../shared/css/style_guide.css'
		])
		.pipe(concat('style.css'))
		.pipe(gulp.dest('../../public/css'))
		.pipe(rename('style.min.css'))
		.pipe(uglifyCss())
		.pipe(gulp.dest('../../public/css'))
	;

	done();
}

function img(done)
{
	gulp
		.src([
			'../shared/img*'
		])
		.pipe(gulp.dest('../../public/img'))
	;

	done();
}
exports.default = gulp.parallel(css, img);
