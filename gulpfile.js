const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');

// Monitor sass
gulp.task('sass', function(){
  return gulp.src('./public/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

// Default task
gulp.task('default', function(){
  // Monitor for serverside JS changes
  nodemon({
    script: 'app.js',
    ext: 'js html ejs',
    env: {'NODE_ENV': 'development' }
  })
  // Monitor sass changes
  gulp.watch('./public/sass/*.sass', ['sass']);
})
