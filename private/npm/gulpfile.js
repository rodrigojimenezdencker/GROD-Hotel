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
			'../page/thanksForContactingUs/css/style.css',
			'../page/thanksForSubscribing/css/style.css',
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
			'../shared/fonts/**'
		])
		.pipe(gulp.dest('../../public/fonts'))
		;

	done();
}

function img(done) {
	gulp
		.src([
			'../shared/img/**'
		])
		.pipe(gulp.dest('../../public/img'))
		;

	done();
}

function svg(done) {
	gulp
		.src([
			'../shared/svg/**'
		])
		.pipe(gulp.dest('../../public/svg'))
		;

	done();
}

function video(done) {
	gulp
		.src([
			'../shared/video/**'
		])
		.pipe(gulp.dest('../../public/video'))
		;

	done();
}

function js(done) {
	gulp
		.src([
			'../shared/js/general.js',
			'../page/about/js/script.js',
			'../page/booking/js/script.js',
			'../page/bookingCompleted/js/script.js',
			'../page/contact/js/script.js',
			'../page/cookieUsage/js/script.js',
			'../page/hotel/js/script.js',
			'../page/index/js/script.js',
			'../page/personalDataUsage/js/script.js',
			'../page/search/js/script.js',
			'../page/thanksForContactingUs/js/script.js',
			'../page/thanksForSubscribing/js/script.js',
		])
		.pipe(concat('script.js'))
		.pipe(gulp.dest('../../public/js'))
		.pipe(rename('script.min.js'))
		.pipe(uglifyJs())
		.pipe(gulp.dest('../../public/js'))
		;

	done();
}

exports.default = gulp.parallel(css, font, img, svg, video, js);
