// EXERCICIO
// Você é um professor, e tem uma lista com alguns alunos(sendo objetos),
// que contém nome, nota 1 e nota2. Use o for para percorer esse array
// e calcular a média das duas notas de cada aluno

// const listaDeAlunos = [
//     { nome: 'João', notas: [8, 7] },
//     { nome: 'Maria', notas: [9, 8] },
//     { nome: 'Carlos', notas: [6, 5] },
//     { nome: 'Ana', notas: [7, 6] },
//     { nome: 'Pedro', notas: [10, 9] },
//     { nome: 'Lúcia', notas: [8, 7] },
//     { nome: 'Fernando', notas: [7, 6] },
//     { nome: 'Camila', notas: [9, 8] },
//     { nome: 'Rafael', notas: [6, 5] },
//     { nome: 'Juliana', notas: [10, 9] }
//   ];

const alunos = [
    { nome: 'João', nota1: 8, nota2: 7 },
    { nome: 'Maria', nota1: 9, nota2: 8 },
    { nome: 'Carlos', nota1: 6, nota2: 5 },
    { nome: 'Ana', nota1: 7, nota2: 6 },
    { nome: 'Pedro', nota1: 10, nota2: 9 },
    { nome: 'Lúcia', nota1: 8, nota2: 7 },
    { nome: 'Fernando', nota1: 7, nota2: 6 },
    { nome: 'Camila', nota1: 9, nota2: 8 },
    { nome: 'Rafael', nota1: 6, nota2: 5 },
    { nome: 'Juliana', nota1: 10, nota2: 9 }
  ];

  function imprimirNotas(alunos){
      for (const aluno of alunos) {
        let somaNotas = 0
        let numNotas = 0
        for (const propriedade in aluno) {
            if (propriedade.startsWith("nota")) {
                somaNotas += aluno[propriedade];
                numNotas++;
            }
        }
        let media = somaNotas / numNotas
        console.log(`Aluno: ${aluno.nome} | Média ${media}`)
      }
  }

  imprimirNotas(alunos)
  
//   function imprimirNotasMedias(alunos) {
//     for (const aluno of alunos) {
//         let somaNotas = 0;
//         let numNotas = 0;
//         for (const propriedade in aluno) {
//             if (propriedade.startsWith("nota")) {
//                 somaNotas += aluno[propriedade];
//                 numNotas++;
//             }
//         }
//         media = somaNotas / numNotas;
//         console.log(`Nome: ${aluno.nome} Média: ${media}`)
//     }
// }

// imprimirNotasMedias(alunos);
