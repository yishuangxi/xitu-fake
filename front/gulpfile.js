/**
 * Created by db on 16/8/22.
 */
var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');
var webserver = require('gulp-webserver');
var htmlmin = require('gulp-htmlmin');

gulp.task('fileinclude', function() {
    gulp.src('src/html/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});


gulp.task('watch', function() {
    gulp.watch(['src/html/*.html','src/html/index/*.html','src/html/user/*.html'], ['fileinclude']);
});

//gulp.task('minify', function() {
//    return gulp.src('src/*.html')
//        .pipe(htmlmin({collapseWhitespace: true}))
//        .pipe(gulp.dest('dist'))
//});

gulp.task('default', ['fileinclude', 'webserver','watch']);