/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  Ex: 0, 1, 1, 2, 3, 5, 8, 13

*/

function fibonacci(stop) {
    let fibo = [0, 1]
    for(let i = 2 ; i <= stop-1 ; i++) {
        let c = fibo[i-2] + fibo[i-1]
        fibo.push(c)
    }
    console.log(fibo)
    console.log(`Index(${stop}) - Valor de Fibonacci: ${fibo[stop-1]}`)
}

function fibonacciBenchmark(func, param) {
    const start = performance.now();
    const result = func(param);
    const end = performance.now();
    console.log(`The function ${func.name} took ${end - start} milliseconds to calculate the term No ${iterations} (${result}) \n`);
}

const iterations = 50

fibonacci(iterations)
fibonacciBenchmark(fibonacci, iterations);