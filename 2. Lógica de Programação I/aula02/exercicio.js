/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em diante : aumento de 5% 
    
Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calcularAumento() {

    rl.question(
        'Por favor, digite o salário do colaborador (em R$): ',
        function(salarioInicial) {
            salarioInicial = parseFloat(salarioInicial)

            if(salarioInicial <= 0 || true === isNaN(salarioInicial)) {
                console.log("Salario não pode ser negativo, zero ou letra!")
                calcularAumento()
                return
            }
            let salarioReajustado
            let valorAumento
            let percentualAumento
    
            if(salarioInicial > 0) {
                if (salarioInicial <= 1500) {
                    percentualAumento = 0.2
                } else if (salarioInicial <= 1700) {
                    percentualAumento = 0.15
                } else if (salarioInicial <= 2000) {
                    percentualAumento = 0.10
                } else {
                    percentualAumento = 0.05
                }
            }
    
            valorAumento = salarioInicial * percentualAumento
            salarioReajustado = salarioInicial + valorAumento
    
            console.log("Salario inicial: R$" + salarioInicial.toFixed(2))
            console.log("Percentual do aumento: " + percentualAumento * 100 + "%")
            console.log("Valor do aumento: R$ " + valorAumento.toFixed(2))
            console.log("Salario reajustado: R$" + salarioReajustado.toFixed(2))
    
            rl.close();
        }
    );
}

calcularAumento()
