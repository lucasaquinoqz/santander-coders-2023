let resultado = 0
let operacao = ""
let temPonto = false

let visor = document.getElementById('visor')

let ac = document.getElementById('ac')
let mudaSinal = document.getElementById('mudaSinal')
let porcentagem = document.getElementById('porcentagem')

let divisao = document.getElementById('divisao')
let multiplicacao = document.getElementById('multiplicacao')
let subtracao = document.getElementById('subtracao')
let adicao = document.getElementById('adicao')

let ponto = document.getElementById('ponto')
let igual = document.getElementById('igual')

const numeros = document.querySelectorAll('[id*=num]')

let num9 = document.getElementById('num9')
let num8 = document.getElementById('num8')
let num7 = document.getElementById('num7')
let num6 = document.getElementById('num6')
let num5 = document.getElementById('num5')
let num4 = document.getElementById('num4')
let num3 = document.getElementById('num3')
let num2 = document.getElementById('num2')
let num1 = document.getElementById('num1')
let num0 = document.getElementById('num0')

num9.addEventListener('click', function(){
    visor.innerText == "0" || visor.innerHTML == resultado ? visor.innerText = "9" : visor.innerText += "9"
})
num8.addEventListener('click', function(){
    visor.innerText == "0" || visor.innerHTML == resultado ? visor.innerText = "8" : visor.innerText += "8"
})
num7.addEventListener('click', function(){
    visor.innerText == "0" || visor.innerHTML == resultado ? visor.innerText = "7" : visor.innerText += "7"
})
num6.addEventListener('click', function(){
    visor.innerText == "0" || visor.innerHTML == resultado ? visor.innerText = "6" : visor.innerText += "6"
})
num5.addEventListener('click', function(){
    visor.innerText == "0" || visor.innerHTML == resultado ? visor.innerText = "5" : visor.innerText += "5"
})
num4.addEventListener('click', function(){
    visor.innerText == "0" || visor.innerHTML == resultado ? visor.innerText = "4" : visor.innerText += "4"
})
num3.addEventListener('click', function(){
    visor.innerText == "0" || visor.innerHTML == resultado ? visor.innerText = "3" : visor.innerText += "3"
})
num2.addEventListener('click', function(){
    visor.innerText == "0" || visor.innerHTML == resultado ? visor.innerText = "2" : visor.innerText += "2"
})
num1.addEventListener('click', function(){
    visor.innerText == "0" || visor.innerHTML == resultado ? visor.innerText = "1" : visor.innerText += "1"
})
num0.addEventListener('click', function(){
    visor.innerText == "0" || visor.innerHTML == resultado ? visor.innerText = "0" : visor.innerText += "0"
})

ponto.addEventListener('click', function(){
    if(!temPonto){
        visor.innerText == "0" || visor.innerHTML == resultado ? visor.innerText = "0." : visor.innerText += "."
        
        temPonto = true
    }
})

divisao.addEventListener('click', function(){
    operacao += `${visor.innerText}/`
    visor.innerText = 0
    temPonto = false
})

multiplicacao.addEventListener('click', function(){
    operacao += `${visor.innerText}*`
    visor.innerText = 0
    temPonto = false
})

subtracao.addEventListener('click', function(){
    operacao += `${visor.innerText}-`
    visor.innerText = 0
    temPonto = false
})

adicao.addEventListener('click', function(){
    operacao += `${visor.innerText}+`
    visor.innerText = 0
    temPonto = false
})

ac.addEventListener('click', function(){
    visor.innerText = "0"
    temPonto = false
})

mudaSinal.addEventListener('click', function(){
    visor.innerText *= (-1)
})

porcentagem.addEventListener('click', function(){
    visor.innerText = resultado *= (visor.innerText/100)
    temPonto = false
})

igual.addEventListener('click', function(){
    operacao += visor.innerText
    resultado = eval(operacao)
    operacao = ""
    visor.innerText = resultado
    temPonto = false
})





   