const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS (cb) {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      comments: false,
      presets: ['env']
    }))
    // Pega todo o código para ser minificado
    .pipe(uglify())
    .on('error', err => console.log('~> Trata um possível erro!', err))
    // Pega todos os arquivos transpilados e concatena todos
    .pipe(concat('codigo.min.js'))
    // Vai joga dentro da pasta build
    .pipe(gulp.dest('build'))
}

function fim (cb) {
  console.log('~> FIMM')
  return cb()
}

exports.default = series(transformacaoJS, fim)