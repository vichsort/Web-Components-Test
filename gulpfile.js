const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function construtor(){
    return src('styles/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))

}

function observador(){
    watch(['styles/**/*.scss'], construtor)
}

exports.default = series(construtor, observador)