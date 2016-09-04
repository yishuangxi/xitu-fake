/**
 * Created by db on 16/9/4.
 */
var gulp = require('gulp');

gulp.task('ning', function(){
    gulp.src('./gulp-ning.js')
        .pipe(gulp.dest('dist'))
})