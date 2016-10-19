var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('watch', () => {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['serve']);
