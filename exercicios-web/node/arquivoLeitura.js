const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log('~> ', conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', ((err, data) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
}))

const config = require('./arquivo.json')
console.log('~> ', config)

// Lê todos os arquivos da pasta
fs.readdir(__dirname, ((err, files) => {
  console.log('~> Conteúdo da pasta...')
  console.log('~> ', files)
}))
