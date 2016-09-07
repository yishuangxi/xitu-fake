/**
 * Created by db on 16/9/4.
 */

var gulp = require('gulp');
var webserver = require('gulp-webserver');
//var htmlmin = require('gulp-htmlmin');

gulp.task('lu-merge', function(){
    gulp.src('src-lu/**')
        .pipe(gulp.dest('dist'))
});

//gulp.task('lu-css', function(){
//    gulp.src('src-lu/**')
//        .pipe(gulp.dest('dist'))
//});
//
//gulp.task('lu-js', function(){
//    gulp.src('src-lu/static/js/**/*.js')
//        .pipe(gulp.dest('dist'))
//});

gulp.task('watch', function() {
    gulp.watch(['src-lu/**'], ['lu-merge']);
    //gulp.watch(['src-lu/static/css/**/*.css'], ['css']);
    //gulp.watch(['src-lu/static/js/**/*.js'], ['js']);
});

//gulp.task('webserver', function() {
//    gulp.src('./')
//        .pipe(webserver({
//            livereload: true,
//            directoryListing: true,
//            open: true
//        }));
//});

//gulp.task('minify', function() {
//    return gulp.src('dist/**/**,dist/**/**/**/**')
//        .pipe(htmlmin({collapseWhitespace: true}))
//        .pipe(gulp.dest('dist-lu'))
//});

gulp.task('lu', ['watch','lu-merge']);