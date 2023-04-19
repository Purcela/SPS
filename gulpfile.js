const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('scss/style.scss', ['sass']);
};