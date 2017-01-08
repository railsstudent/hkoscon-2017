//@flow
'use strict';
const gulp = require('gulp-help')(require('gulp'));
const util = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

const processor = [
  autoprefixer({
    browsers: ['last 5 version']
  })
];

gulp.task('build:css', 'Build ./assets/scss/*.scss production version into ./public', () => {
  return gulp.src('./assets/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', util.log)
    .pipe(postcss(processor))
    .pipe(cleanCss({level: 2}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public'));
});
