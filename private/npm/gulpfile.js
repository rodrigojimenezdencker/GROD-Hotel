'use strict';

var
	gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglifyCss = require('gulp-csso')
	;

function css(done) {
	gulp
		.src([
			'../shared/css/layout.css',
			'../shared/css/style_guide.css',
			'../page/about/css/style.css',
			'../page/booking/css/style.css',
			'../page/bookingCompleted/css/style.css',
			'../page/contact/css/style.css',
			'../page/cookieUsage/css/style.css',
			'../page/hotel/css/style.css',
			'../page/index/css/style.css',
			'../page/personalDataUsage/css/style.css',
			'../page/search/css/style.css',
			'../page/thanksForContactingUs/css/style.css'
		])
		.pipe(concat('style.css'))
		.pipe(gulp.dest('../../public/css'))
		.pipe(rename('style.min.css'))
		.pipe(uglifyCss())
		.pipe(gulp.dest('../../public/css'))
		;

	done();
}

function font(done) {
	gulp
		.src([
			'../shared/fonts**'
		])
		.pipe(gulp.dest('../../public/fonts'))
		;

	done();
}

function img(done) {
	gulp
		.src([
			'../shared/img**'
		])
		.pipe(gulp.dest('../../public/img'))
		;

	done();
}

function svg(done) {
	gulp
		.src([
			'../shared/svg**'
		])
		.pipe(gulp.dest('../../public/svg'))
		;

	done();
}

function video(done) {
	gulp
		.src([
			'../shared/svg**'
		])
		.pipe(gulp.dest('../../public/svg'))
		;

	done();
}

exports.default = gulp.parallel(css, font, img, svg, video);
