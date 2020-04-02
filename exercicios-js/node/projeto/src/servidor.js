const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

/**
 */
app.use(bodyParser.urlencoded({ extended: true }))

/**
 */
app.get('/produtos', (req, res, next) => {
  // res.send({ nome: 'Notebook', preco: 123.45 }) // Converte para JSON automaticamente
  res.send(bancoDeDados.getProdutos())
})

/**
 */
app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

/**
 */
app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

/**
 */
app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

/**
 */
app.delete('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.excluirProduto(req.params.id))
})

/**
 */
app.listen(porta, () => {
  console.log(`~> O Servidor está executando na porta ${porta}.`)
})