var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// task para o sass v2
gulp.task('sass', function () {
    return gulp.src('./sass/**/*.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

// task para watch
gulp.task('watch', function(){
	return watch('./sass/**/*.sass', ['sass']).pipe(gulp.dest('./css'));
});

 
//gulp.task('watch', function () {
//  watch('./sass/**/*.scss', ['sass']);
//});

// task para default v2
//gulp.task('default', ['sass', 'watch']);