const gulp = require('gulp');
const browserify = require('browserify');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const paths = {
  pages: ['src/client/*.html']
};

gulp.task('copy-html', () => {
  return gulp.src(paths.pages).pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy-html'], () => {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/client/main.ts'],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});
