// ## Exercício: `filter()`

// 1. Temos a lista de alunos:

// ```jsx
// const alunos = [
//   { nome: 'Ana', idade: 20 },
//   { nome: 'Pedro', idade: 18 },
//   { nome: 'Maria', idade: 22 },
//   { nome: 'João', idade: 17 },
//   { nome: 'Lucas', idade: 19 },
//   { nome: 'Julia', idade: 21 }
// ]

// ```

// 1. Utilize o método "filter" para criar um novo array com os alunos que têm idade maior ou igual a 18 anos.
// 2. Utilize o método "filter" novamente para criar um novo array com os alunos que têm idade menor que 20 anos.
// 3. Utilize o método "filter" mais uma vez para criar um novo array com os alunos cujo nome começa com a letra "J".
// 4. Verifique se você conseguiu utilizar o método "filter" corretamente.

const alunos = [
  { nome: 'Ana', idade: 20 },
  { nome: 'Pedro', idade: 18 },
  { nome: 'Maria', idade: 22 },
  { nome: 'João', idade: 17 },
  { nome: 'Lucas', idade: 19 },
  { nome: 'Julia', idade: 21 }
]

const filtro1 = alunos.filter((arr) => arr.idade >= 18)
console.log(filtro1)

const filtro2 = alunos.filter((arr) => arr.idade < 20)
console.log(filtro2)

const filtro3 = alunos.filter((arr) => arr.nome[0].toUpperCase() == "J")
console.log(filtro3)