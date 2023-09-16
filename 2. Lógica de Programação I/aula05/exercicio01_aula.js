/*
  Faça um programa que converta da notação de 24 horas para a notação de 12 horas.
  Por exemplo, o programa deve converter 14:25 em 2:25 P.M. 
  A entrada é dada em dois inteiros. 
  Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída.
*/


function converteHora(str_hora) {
    let [horas, minutos] = str_hora.split(":").map(Number)
    periodo = horas >= 12 ? "PM":"AM"
    horas = horas === 12 ? 12 : horas % 12

    return {horas:horas, minutos,periodo}

    // if(horas == 0) {return {horas:horas, minutos,periodo:"AM"}}
    // if(horas == 12) {return {horas:horas, minutos,periodo:"PM"}}
    // if(horas > 12) {return {horas:horas % 12, minutos,periodo:"PM"}}
    // return {horas:horas, minutos,periodo:"AM"}
}

function saida(hora) {
    horario = converteHora(hora)
    console.log(`${horario.horas.toString().padStart(2,"0")}:${horario.minutos.toString().padStart(2,"0")} ${horario.periodo}`)
}

saida("6:00")
saida("8:00")
saida("12:00")
saida("13:00")
saida("00:00")
