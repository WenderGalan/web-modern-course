const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
  console.log('~> Tarefa Antes 1!')
  return cb()
}

const antes2 = cb => {
  console.log('~> Tarefa Antes 2!')
  return cb()
}

const fim = cb => {
  console.log('~> Tarefa FIM!')
  return cb()
}

function copiar (cb) {
  // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
  // Vai copiar qualquer arquivo com a extensao txt
  gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))
    // .pipe(imagemPelaMetade())
    // .pipe(imagemEmPretoEBranco())
  return cb()
}

module.exports.default = series(
  parallel(antes1, antes2),
  copiar,
  fim
)