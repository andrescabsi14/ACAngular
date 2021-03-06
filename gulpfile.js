var gulp = require('gulp'),
  connect = require('gulp-connect'),
  less = require('gulp-less'),
  LessPluginCleanCSS = require('less-plugin-clean-css'),
  LessPluginAutoPrefix = require('less-plugin-autoprefix'),
  cleancss = new LessPluginCleanCSS({ advanced: true }),
  autoprefix = new LessPluginAutoPrefix({ browsers: ["last 5 versions"] });


gulp.task('connect', function() {
  connect.server({
    root: ['app', 'path'],
    port: 80,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('app/*.html')
    .pipe(connect.reload());
});
 
gulp.task('less', function() {
  gulp.src('app/less/*.less')
    .pipe(less({
      plugins: [autoprefix, cleancss]
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
});
 
gulp.task('watch', function() {
  gulp.watch(['app/*.html'], ['html']);
    gulp.watch('app/less/*.less', ['less']);
})
 
gulp.task('default', ['connect', 'html', 'less', 'watch']);