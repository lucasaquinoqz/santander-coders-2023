// EXERCICIO
// Você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
// Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math:
// Math.round(Math.random() * 10)

// let numero = Math.round(Math.random() * 60)
let numeros = []

while (numeros.length < 6) {
    numeros.push(Math.round(Math.random() * 59) + 1)
    
}
console.log(`E os numeros da rote são!\n ${numeros.join(', ')}`);
