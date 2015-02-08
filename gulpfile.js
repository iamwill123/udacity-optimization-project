// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');


// Minify main.js in views folder JS
gulp.task('minpizzajs', function() {
    return gulp.src('views/js/main.js')
        .pipe(gulp.dest('views/dist/js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('views/dist/js'));
});

// Minify bootstrap-grid.css in views/css and pipe to dist/css
gulp.task('minify-pizzacss', function() {
  gulp.src('./views/css/bootstrap-grid.css')
    .pipe(rename("bootstrap-grid.min.css"))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('views/dist/css'))
});

// Default Task
gulp.task('default', ['minpizzajs', 'minify-pizzacss']);