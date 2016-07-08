(function() {
  'use strict';

  var connect = require('gulp-connect');
  var gulp = require('gulp');
  var open = require('gulp-open');
  var browserify = require('browserify');
  var usemin = require('gulp-usemin');
  var minifyHtml = require('gulp-minify-html');
  var rev = require('gulp-rev');
  var reactify = require('reactify');
  var source = require('vinyl-source-stream');
  var concat = require('gulp-concat');

  var config = {
    port: 3004,
    devBaseUrl: 'http://localhost',
    path: {
      html: './src/*html',
      js: './src/**/*js',
      css: [
        './src/css/main.css',
        './node_modules/materialize-css/dist/css/materialize.min.css'
      ],
      fonts: './node_modules/materialize-css/dist/font/**/*',
      mainJs: './src/script/main.js',
      images: './src/images/*',
      dist: './dist'
    }
  };

  // Start local development server
  gulp.task('connect', function() {
    connect.server({
      root: ['dist'],
      port: config.port,
      base: config.devBaseUrl,
      livereload: true
    });
  });

  gulp.task('open', ['connect'], function() {
    // gulp.src('dist/index.html')
    //   .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
    console.log('I have open');
  });

  gulp.task('html', function() {
    gulp.src(config.path.html)
      .pipe(gulp.dest(config.path.dist))
      .pipe(connect.reload());
  });

  gulp.task('minify', function() {
    gulp.src('./src/*.html')
      .pipe(usemin({
        html: [minifyHtml({ empty: true })],
      }))
      .pipe(gulp.dest(config.path.dist));
  });

  gulp.task('images', function() {
    gulp.src(config.path.images)
      .pipe(gulp.dest(config.path.dist + '/images'))
      .pipe(connect.reload());
  });

  gulp.task('js', function() {
    browserify(config.path.mainJs)
      .transform(reactify)
      .bundle()
      .on('error', console.error.bind(console))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(config.path.dist + '/scripts'))
      .pipe(connect.reload());
  });

  gulp.task('css', function() {
    gulp.src(config.path.css)
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(config.path.dist + '/css'))
      .pipe(connect.reload());

    gulp.src(config.path.fonts)
      .pipe(gulp.dest(config.path.dist + '/fonts'));
  });

  gulp.task('watch', function() {
    gulp.watch(config.path.html, ['html']);
    gulp.watch(config.path.js, ['js']);
    gulp.watch(config.path.css, ['css']);
  });

  gulp.task('default', [
    'html',
    'open',
    'watch',
    'js',
    'css',
    'images',
    'minify'
  ]);

}());
