// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// Minify main.js in views folder JS
gulp.task('minpizzajs', function() {
    return gulp.src('views/js/main.js')
        .pipe(gulp.dest('views/dist/js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('views/dist/js'));
});

// Watch Files For Changes
// gulp.task('watch', function() {
//      gulp.watch('js/*.js', ['scripts']);
//      gulp.watch('scss/*.scss', ['sass']);
// });

// Default Task
gulp.task('default', ['minpizzajs']);