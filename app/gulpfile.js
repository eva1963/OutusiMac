'use strict';

const path = require('path');
const gulp = require('gulp');
const compass = require('gulp-compass');

let compassOptions = {
    project: path.join(__dirname, 'static'),
    sass: 'scss',
    css: 'css',
    image: 'img'
};

gulp.task('compass', () => {
    gulp.src('scss/**/*.scss').pipe(compass(compassOptions)).on('error', console.error).pipe(gulp.dest('/tmp'));
});

gulp.task('live', () => {
    gulp.watch('static/scss/**/*.scss', ['compass']);
});
