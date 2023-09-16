// ## Exercício: `map()`

// 1. Temos uma lista de pessoas com seus respectivos nomes, alturas e pesos:

// ```jsx
// const pessoas = [
//   { nome: 'João', altura: 1.75, peso: 80 },
//   { nome: 'Maria', altura: 1.68, peso: 60 },
//   { nome: 'Pedro', altura: 1.80, peso: 70 },
//   { nome: 'Ana', altura: 1.65, peso: 55 },
//   { nome: 'Carlos', altura: 1.90, peso: 100 }
// ]

// ```

// 1. Utilize o método "map" para criar um novo array de objetos que contenha somente o nome e o IMC (índice de massa corporal) de cada pessoa, sendo que o IMC é calculado pela fórmula `peso / altura²`.
// 2. Verifique se você conseguiu utilizar o método "map" corretamente.

const pessoas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
]

const map1 = pessoas.map(function(arr) {
    let nome = arr.nome
    let imc = (arr.peso / (arr.altura**2)).toFixed(2)
    return {nome, imc}
})

console.log(map1)