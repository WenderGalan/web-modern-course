const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 1249.49,
  desconto: 0.15,
  descricao: 'Aqui fica a descrição'
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo salvo!')
})