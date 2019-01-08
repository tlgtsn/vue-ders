const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const reload = browserSync.reload

gulp.task('browser-sync', function() {
    browserSync.init({
    	notify: false,
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./*.pug', ['html'])
    gulp.watch('./assets/stylesheets/sass/**/*.sass', ['css'])
});

gulp.task('html', () => {
  return gulp.src('./*.pug')
  .pipe(pug()) 
  .pipe(gulp.dest('./'))
  .on('end', reload)
})


gulp.task('css', () => {
  return gulp.src('./assets/stylesheets/sass/main.sass')
  .pipe(plumber([{ errorHandler: false }]))
  .pipe(sass())
  .pipe(prefix())
  .pipe(gulp.dest('./assets/stylesheets/css'))
  .pipe(browserSync.stream())
})

gulp.task('watch', function () {
    gulp.watch("./*.html").on("change", browserSync.reload);
});

gulp.task('default', ['watch', 'browser-sync', 'html', 'css'])