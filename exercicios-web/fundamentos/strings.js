const escola = 'Wender'

// Retorna a letra e
console.log('~> ', escola.charAt(4))

// Retorna vazio
console.log('~> ', escola.charAt(10))

// Retorna o valor da tabela ASCI
console.log('~> ', escola.charCodeAt(3))

// Retorna o indice
console.log('~> ', escola.indexOf('W'))

// Remove o indice 1
console.log('~> ', escola.substring(1))

// Vai do 0 ao 3
console.log('~> ', escola.substring(0, 3))

// Concatena tudo
console.log('~> ', 'Escola '.concat(escola).concat('!'))

// Substitui tudo
console.log('~> ', escola.replace('W', 'w'))