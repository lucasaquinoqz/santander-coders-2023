/* 
    Faça uma rotina com e sem recursão em JavaScript para encontrar o fatorial de um número.
    n! = n.(n – 1).(n – 2).(n – 3)...2,1. 
*/

function fI(n) {
    let total = n
    for(let i = n ; i > 1 ; i--){
        total *= (i-1)
    }
    return total
}
console.log(fI(5))

function fR(n) {
    if (n <= 1)
        return 1;
    else
        return n * fR(n - 1);
}

console.log(fR(5))