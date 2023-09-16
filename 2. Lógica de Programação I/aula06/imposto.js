const arr = {baixaRenda: true, custo: 100}
function calculaImposto(arr){
    const resposta = arr.baixaRenda === true ? impostoBaixarenda(arr.custo) : impostoNormal(arr.custo)
    return resposta
}
function impostoBaixarenda(custo) {
    let taxaImposto = 10
    let novoValor = custo + (custo * (taxaImposto/100))
    return console.log(`O valor inicial da conta é R$${custo.toFixed(2)} e apos o imposto passou a ser de R$${novoValor.toFixed(2)}`)
}
function impostoNormal(custo) {
    let taxaImposto = 20
    let novoValor = custo + (custo * (taxaImposto/100))
    return console.log(`O valor inicial da conta é R$${custo.toFixed(2)} e apos o imposto passou a ser de R$${novoValor.toFixed(2)}`)
}
calculaImposto(arr)