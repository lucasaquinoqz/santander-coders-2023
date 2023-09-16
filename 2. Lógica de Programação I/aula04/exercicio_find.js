// ## Exercício: `find()`

// 1. Temos a lista de lugares:

// ```jsx
// const lugares = [
//   { nome: 'Sala de Reuniões', capacidade: 8 },
//   { nome: 'Auditório', capacidade: 50 },
//   { nome: 'Sala de Treinamento', capacidade: 20 },
//   { nome: 'Sala de Conferências', capacidade: 30 },
//   { nome: 'Sala de Estudos', capacidade: 12 }
// ]

// ```

// 1. Utilize o método "find" para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 10 pessoas.
// 2. Utilize o método "find" novamente para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 25 pessoas.
// 3. Utilize o método "find" mais uma vez para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 40 pessoas.
// 4. Verifique se você conseguiu utilizar o método "find" corretamente.

const lugares = [
    { nome: 'Sala de Reuniões', capacidade: 8 },
    { nome: 'Auditório', capacidade: 50 },
    { nome: 'Sala de Treinamento', capacidade: 20 },
    { nome: 'Sala de Conferências', capacidade: 30 },
    { nome: 'Sala de Estudos', capacidade: 12 }
]

lugares.sort((a, b) => a.capacidade - b.capacidade);

const encontra1 = lugares.find((arr) => arr.capacidade >= 10)
console.log(encontra1)

const encontra2 = lugares.find((arr) => arr.capacidade >= 25)
console.log(encontra2);

const encontra3 = lugares.find((arr) => arr.capacidade >= 40)
console.log(encontra3);