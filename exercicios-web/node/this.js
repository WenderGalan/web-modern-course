console.log('~> ', this === global) // false
console.log('~> ', this === module) // false
console.log('~> ', this === module.exports) // true aponta para o mesmo objeto
console.log('~> ', this === exports) // true

function logThis () {
  console.log('~> Dentro de uma função')
  console.log('~> ', this === exports) // false
  console.log('~> ', this === module.exports) // false
  console.log('~> ', this === global) // true
  // Dentro da função ele aponta para o global e fora ele aponta para module.exports
}