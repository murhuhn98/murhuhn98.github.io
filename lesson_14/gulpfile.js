const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require ('gulp-sass');
const minifyCSS = require('gulp-minify-css');
const rename = require('gulp-rename');



// Static server
function bs() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch(".sass/**/*.sass", serveSaas);
  watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

exports.serve = bs;