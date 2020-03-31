const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const pais = e => e.pais === 'China'
const mulher = e => e.genero === 'F'
const menorSalario = (func, funcAtual) => (func.salario < funcAtual.salario) ? func : funcAtual

axios.get(url)
.then((response) => {
  const funcionarios = response.data
  console.log('~> ', funcionarios.filter(pais).filter(mulher).reduce(menorSalario))
})