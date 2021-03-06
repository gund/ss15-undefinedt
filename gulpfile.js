'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            open: true,
            host: 'ss15-undefinedt.divshot.io'
        }));
});

gulp.task('stylus', function () {
    gulp.src('./app/elements/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./app/elements/'));

    gulp.src('./app/stylus/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('default', function () {
    gulp.run(['webserver', 'stylus']);

    gulp.watch("./app/**/*.styl", function(){
        gulp.run('stylus');
    });
});