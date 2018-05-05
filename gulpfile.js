const gulp = require('gulp');
const browserify = require('browserify');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const del = require('del');
const paths = {
  pages: ['src/client/*.html']
};

gulp.task('clean', done => {
  del.sync(['dist/*']);
  done();
});

gulp.task('copy-html', () => {
  return gulp.src(paths.pages).pipe(gulp.dest('dist'));
});

gulp.task('server', () => {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean', 'copy-html', 'server'], () => {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/client/index.tsx'],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});
