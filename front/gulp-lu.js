/**
 * Created by db on 16/9/4.
 */
var gulp = require('gulp');

gulp.task('lu', function(){
    gulp.src('./gulp-lu.js')
        .pipe(gulp.dest('dist'))
})
