var del = require('del');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var rs = require('run-sequence');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var tsProject = plugins.typescript.createProject('./src/tsconfig.json');

gulp.task('build', ['build-app', 'build-electron']);

gulp.task('build-app', function() {
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new plugins.util.PluginError("webpack", err);
    plugins.util.log("[webpack]", "Emitted output file successfully");
  });
});

gulp.task('build-electron', function() {
  return gulp.src(['./src/index.ts', './typings/tsd.d.ts'])
    .pipe(plugins.typescript(tsProject))
    .js
    .pipe(gulp.dest('./build'));
});

gulp.task('clean', function() {
  return del('./build/**/*');
});

gulp.task('copy', function() {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('default', function() {
  rs(
    'clean',
    'copy',
    'build',
    'serve',
    'watch'
  );
});

gulp.task('serve', function() {
  plugins.connect.server({
    root: 'build'
  });
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.ts*', ['build']);
  gulp.watch('./src/index.html', ['copy']);
});
