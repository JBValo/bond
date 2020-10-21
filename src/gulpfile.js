const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      cssImport = require('postcss-import'),
      mixins = require('postcss-mixins'),
      nested = require('postcss-nested'),
      cssvars = require('postcss-simple-vars'),
      autoprefixer = require('autoprefixer'),
      colormod = require('postcss-color-mod-function'),
      respType = require('postcss-responsive-type'),
      cssnano = require('cssnano'),
      fileinclude = require('gulp-file-include'),
      watch = require('gulp-watch'),
      browserSync = require('browser-sync').create();

gulp.task('styles', function(done){
  gulp.src('assets/post/*.css')
      .pipe(postcss([cssImport, mixins, nested, cssvars, autoprefixer, colormod, respType, cssnano]))
      .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
      })
      .pipe(gulp.dest('../dist/assets/css'))
  done();
});

gulp.task('css', gulp.series('styles'), function(done){
  gulp.src('../dist/assets/css/style.css')
  done();
});

gulp.task('html', function(done){
  gulp.src(['*.html'])
  .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
  }))
  .pipe(gulp.dest('../dist'));
  done();
});

gulp.task('browserSyncReload', function(done){
  browserSync.reload();
  done();
});

gulp.task('watch', function(done){

  browserSync.init({
    open: false,
    server: {
      baseDir: "../dist"
    }
  });

  gulp.watch('*.html', gulp.series('html','browserSyncReload'));
  gulp.watch('assets/post/**/*.css', gulp.series('css', 'browserSyncReload'));

  done();

});
