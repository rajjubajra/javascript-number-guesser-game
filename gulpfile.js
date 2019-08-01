var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

function sass_compiler() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

var uglifycss = require('gulp-uglifycss');

function css_uglify() {
  return  gulp.src('./css/**/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
};

function watch(){
  gulp.watch('./scss/**/*.scss', sass_compiler);
  gulp.watch('./css/**/*.css', css_uglify);
}

exports.sass_compiler = sass_compiler;
exports.css_uglify = css_uglify;
exports.watch = watch;


