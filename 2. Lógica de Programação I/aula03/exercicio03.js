const listaDeAlunos = [
    { nome: 'João', notas: [8, 7] },
    { nome: 'Maria', notas: [9, 8] },
    { nome: 'Carlos', notas: [6, 5] },
    { nome: 'Ana', notas: [7, 6] },
    { nome: 'Pedro', notas: [10, 9] },
    { nome: 'Lúcia', notas: [8, 7] },
    { nome: 'Fernando', notas: [7, 6] },
    { nome: 'Camila', notas: [9, 8] },
    { nome: 'Rafael', notas: [6, 5] },
    { nome: 'Juliana', notas: [10, 9] }
];

for (const aluno of listaDeAlunos) {

    let somaNotas = 0
    let numNotas = 0
        
    for (const index in aluno.notas) {
        somaNotas += aluno.notas[index]
        numNotas++
    }

    let media = somaNotas / numNotas
    console.log(`Aluno: ${aluno.nome} | Média ${media}`)
}
