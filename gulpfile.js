var gulp = require('gulp'),
	connect = require('gulp-connect'),
	less = require('gulp-less');


gulp.task('connect', function() {
  connect.server({
    root: ['app', 'path'],
    port: 8080,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
 
gulp.task('less', function() {
  gulp.src('./app/*.less')
    .pipe(less())
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});
 
gulp.task('watch', function() {
	gulp.watch(['./app/*.html'], ['html']);
    gulp.watch('./app/less/*.less', ['less']);
})
 
gulp.task('default', ['connect', 'html', 'less', 'watch']);