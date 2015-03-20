var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    templateCache = require('gulp-angular-templatecache'),
    ngAnnotate = require('gulp-ng-annotate'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    concatCss = require('gulp-concat-css'),
    watch = require('gulp-watch'),
    path = require('path');

var paths = {
  less: ['./src/styles/**/*.less'],
  images: 'client/img/**/*'
};

gulp.task('templateCache', function () {
    return gulp.src(['src/**/*.html', '!src/index.html'])
        .pipe(templateCache({module: 'angularAsessment'}))
        .pipe(gulp.dest('build'));
});

gulp.task('build', function () {
    return gulp.src('src/**/*.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('build'));
});
 
gulp.task('connect', function() {
  connect.server();
});
 
gulp.task('default', ['connect']);

gulp.task('less', function () {
  return gulp.src('./src/styles/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concatCss('styles.css'))  
    .pipe(minifyCSS())
    .pipe(gulp.dest('./src/styles/css/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
});