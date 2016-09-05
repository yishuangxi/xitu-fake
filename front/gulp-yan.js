/**
 * Created by db on 16/9/4.
 */
var gulp = require('gulp');

gulp.task('yan', function(){
    gulp.src('./gulp-yan.js')
        .pipe(gulp.dest('dist'))
})