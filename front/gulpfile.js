/**
 * Created by db on 16/8/22.
 */
var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');
var webserver = require('gulp-webserver');
var htmlmin = require('gulp-htmlmin');



gulp.task('html', function(){
    gulp.src('src/html/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/html'))
})

gulp.task('css', function(){
    gulp.src('src/static/css/**/*.css')
        .pipe(gulp.dest('dist/static/css'))
})


gulp.task('watch', function(){
    gulp.watch(['src/html/**/*.html'], ['html'])
    gulp.watch(['src/static/css/**/*.css'], ['css'])
})

gulp.task('build', ['html', 'css'])

gulp.task('default', ['build', 'watch'])
