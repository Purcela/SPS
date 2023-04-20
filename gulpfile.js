const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style'));
};


 function watch() {
  gulp.watch('scss/style.scss', gulp.dest ('sass'));
};

exports.buildStyles = buildStyles;
exports.watch = watch;