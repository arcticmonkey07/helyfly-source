const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

async function html() {
  return gulp.src('src/pug/pages/*.+(jade|pug)')
    .pipe(plumber())
    .pipe(pug({pretty: '\t'}))
    .pipe(gulp.dest('./src'))
    .pipe(browserSync.stream());
}

async function styles() {
  return gulp.src('./src/styl/**/*.styl')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
}

async function scripts() {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./src/js'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });
  gulp.watch('./src/pug/**/*.+(jade|pug)', html);
  gulp.watch('./src/styl/**/*.styl', styles);
  // gulp.watch('./src/js/*.js', scripts);
  gulp.watch("./src/*.html").on('change', browserSync.reload);
}

gulp.task('pug', html);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
