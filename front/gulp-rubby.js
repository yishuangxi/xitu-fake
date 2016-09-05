/**
 * Created by db on 16/9/4.
 */

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function(){
    gulp.src('src-rubby/html/*.html')
        .pipe(gulp.dest('dist/html'))
});

gulp.task('css', function(){
    gulp.src('src-rubby/static/css/**/*.css')
        .pipe(gulp.dest('dist/static/css'))
});

gulp.task('js', function(){
    gulp.src('src-rubby/static/js/**/*.js')
        .pipe(gulp.dest('dist/static/js'))
});

gulp.task('watch', function() {
    gulp.watch(['src-rubby/html/*.html'], ['html']);
    gulp.watch(['src-rubby/static/css/**/*.css'], ['css']);
    gulp.watch(['src-rubby/static/js/**/*.js'], ['js']);
});

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

//gulp.task('minify', function() {
//    return gulp.src('dist/**/**,dist/**/**/**/**')
//        .pipe(htmlmin({collapseWhitespace: true}))
//        .pipe(gulp.dest('dist-rubby'))
//});

gulp.task('rubby', ['webserver','watch','html','css','js']);