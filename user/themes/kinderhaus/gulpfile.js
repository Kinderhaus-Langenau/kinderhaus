var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    neat = require('bourbon-neat').includePaths,
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    fs = require('fs-extra')

var paths = {
  templates: './templates/**/*.twig',
  markdown: '../../pages/**/*.md',
  scss: './scss/**/*.scss',
  css: './css'
}

gulp.task('scss:dev', function () {
  return gulp.src(paths.scss)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['scss'].concat(neat),
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.css))
    .pipe(livereload())
})

gulp.task('scss:prod', function () {
  return gulp.src(paths.scss)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass({
      includePaths: ['scss'].concat(neat),
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.css))
})

gulp.task('watch', function() {
  livereload.listen()
  gulp.watch(paths.scss, ['scss:dev'])
  gulp.watch(paths.templates, (files) => { livereload.changed(files)})
  gulp.watch(paths.markdown, (files) => { livereload.changed(files)})
})

gulp.task('clean', function() {
  fs.removeSync('./css')
})

gulp.task('build:dev', ['clean', 'scss:dev'])
gulp.task('build', ['clean', 'scss:prod'])

gulp.task('default',function(){
  gulp.start('watch')
})
