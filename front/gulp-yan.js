/**
 * Created by db on 16/9/4.
 */
//var gulp = require('gulp');
//
//gulp.task('yan', function(){
//    gulp.src('./gulp-yan.js')
//        .pipe(gulp.dest('dist'))
//})


//
//var gulp = require('gulp');
//var fileinclude  = require('gulp-file-include');
//var webserver = require('gulp-webserver');
//var htmlmin = require('gulp-htmlmin');
//
//
//
//gulp.task('yan-html', function(){
//    return gulp.src('src-yan/html/**/*.html')
//        //.pipe(fileinclude({
//        //    prefix: '@@',
//        //    basepath: '@file'
//        //}))
//        .pipe(gulp.dest('dist/html'))
//})
//
//gulp.task('yan-css', function(){
//    return gulp.src('yan-src/static/css/**/*.css')
//        .pipe(gulp.dest('dist/static/css'))
//})
//gulp.task('yan-js',function(){
//    return gulp.src('yan-src/static/js/**/*.js')
//        .pipe(gulp.dest('dist/static/js'))
//})
//
//
////gulp.task('yan-web', function() {
////    gulp.src('./')
////        .pipe(webserver({
////            livereload: true,
////            directoryListing: true,
////            open: true
////        }));
////});
//
//
//
//gulp.task('watch', function(){
//    gulp.watch(['yan-src/html/**/*.html', 'yan-src/html/*.html'], ['yan-html'])
//    gulp.watch(['yan-src/static/css/**/*.css'], ['yan-css'])
//    gulp.watch(['yan-src/static/js/**/*.js'], ['yan-js'])
//    //gulp.watch(['./'], ['yan-web'])
//})
//
//gulp.task('build', ['yan-html','yan-css','yan-js'])
//
//gulp.task('yan', ['watch','build'])


var gulp = require('gulp')

gulp.task('yan-html', function(){
    return gulp.src('./src-yan/**/*')
        .pipe(gulp.dest('./dist'))
})

gulp.task('yan-watch', function(){
    gulp.watch(['./src-yan/**/*'], ['yan-html'])
})

gulp.task('yan-build', ['yan-watch', 'yan-html'])




