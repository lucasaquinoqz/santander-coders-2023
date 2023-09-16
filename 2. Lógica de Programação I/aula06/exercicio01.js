/*
  Faça um programa com uma função chamada somaImposto.
  A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. 
  A função “altera” o valor de custo para incluir o imposto sobre vendas.
*/

function somaImposto(taxaImposto, custo) {
    let novoValor = custo + (custo * (taxaImposto/100))
    return console.log(`O valor inicial do produto é R$${custo.toFixed(2)} e apos o imposto passou a ser de R$${novoValor.toFixed(2)}`)
}

somaImposto(10,100)
somaImposto(40,120)
somaImposto(15,150)