/**
 * Created by db on 16/9/4.
//  */
// var gulp = require('gulp');
//
// gulp.task('ning', function(){
//     gulp.src('./gulp-ning.js')
//         .pipe(gulp.dest('dist'))
// })


//
//
// var gulp = require('gulp');
// //var fileinclude  = require('gulp-file-include');
// var webserver = require('gulp-webserver');
// //var htmlmin = require('gulp-htmlmin');
//
//

gulp.task('ning-html', function(){
    gulp.src('src-ning/html/*.html')
    //.pipe(fileinclude({
    //    prefix: '@@',
    //    basepath: '@file'
    // }))
        .pipe(gulp.dest('dist/html'))
})

//gulp.task('yan-css', function(){
//    gulp.src('yan-src/static/css/**/*.css')
//        .pipe(gulp.dest('dist/static/css'))
//})
//gulp.task('yan-js',function(){
//    gulp.src('yan-src/static/js/**/*.js')
//        .pipe(gulp.dest('dist/static/js'))
//})
//
// //
// gulp.task('ning-web', function() {
//     gulp.src('dist/ning-html')
//         .pipe(webserver({
//             livereload: true,
//             directoryListing: true,
//             open: true
//         }));
// });


//
// gulp.task('watch', function(){
//     gulp.watch(['src/html/*.html'], ['ning-html'])
//     //gulp.watch(['yan-src/static/css/**/*.css'], ['yan-css'])
//     //gulp.watch(['yan-src/static/js/**/*.js'], ['yan-js'])
//     gulp.watch(['dist/ning-html'], ['ning-web'])
// })
//
// gulp.task('build', ['ning-html','ning-web'])
//
// gulp.task('ning', ['build', 'watch'])
