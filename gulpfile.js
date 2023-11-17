const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
  return gulp.src('sunnyside-agency-landing-page-main/**/*.scss') // Adjust the source path according to your project structure
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css')); // Adjust the destination path according to your project structure
});

gulp.task('watch', function () {
  gulp.watch('sunnyside-agency-landing-page-main/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));

