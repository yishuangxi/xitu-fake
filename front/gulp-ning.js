/**
 * Created by db on 16/9/4.
 */
var gulp = require('gulp');

gulp.task('ning', function(){
    gulp.src('./gulp.js')
        .pipe(gulp.dest('dist'))
})




var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');
var webserver = require('gulp-webserver');
var htmlmin = require('gulp-htmlmin');



gulp.task('html', function(){
    gulp.src('src-ning/html/*.html')
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
gulp.task('js',function(){
   gulp.src('src/static/js/**/*.js')
       .pipe(gulp.dest('dist/static/js'))
})

//
gulp.task('web', function() {
    gulp.src('dist/html')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});



gulp.task('watch', function(){
    gulp.watch(['src/html/*.html'], ['html'])
    gulp.watch(['src/static/css/**/*.css'], ['css'])
    gulp.watch(['src/static/js/**/*.js'], ['js'])
    gulp.watch(['dist/html'], ['ning-web'])
})

gulp.task('build', ['html','web'])

gulp.task('build', ['build', 'watch'])
