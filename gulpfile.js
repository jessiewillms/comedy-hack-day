// "use strict";

// Include gulp
var gulp = require('gulp');

// npm install gulp npm install gulp-notify gulp-jshint gulp-sass gulp-concat gulp-uglify gulp-rename gulp-autoprefixer
var jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require("gulp-notify"),
    autoprefixer = require('gulp-autoprefixer');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
// Compile Our Sass
gulp.task('css-task', function() {
  return gulp.src('styles/*.scss')
    .pipe(sass({
        'sourcemap=none': true,
        errLogToConsole: true
    }))
    .on("error", notify.onError(function(error) {
        return "Message to the notifier: " + error.message;
    }))
    .pipe(sass().on('error', sass.logError))
    // .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest('styles'))
    .pipe(notify('High fives!'))
});


// Concatenate & Minify JS
gulp.task('scripts-task', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts-task']);
    gulp.watch('styles/*.scss', ['css-task']);
});

// Default Task
gulp.task('default', ['css-task', 'lint', 'scripts-task', 'watch']);