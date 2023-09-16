/*
    Você foi contratado como programador para uma grande rede de lojas de automóveis (CarStore) e o seu primeiro desafio é construir a funcionalidade de enviar um e-mail, todas as segundas-feiras, para os clientes que visitaram as lojas no último mês, informando-os sobre os novos veículos e os mais vendidos, bem como as condições para aquisição (sejam criativos).
    
    - Como não haverá acesso a banco de dados, uma lista (array) de emails deverá ser criada, onde estarão armazenados os emails dos clientes.
    - A lista de emails armazenará, além do email de cada cliente, uma flag com a decisão do cliente sobre receber ou não comunicações de marketing.
    - Será fornecida uma função, no arquivo "envia-email.js", que fará o envio "fake" do e-mail para um cliente.

    Dado o escopo global da aplicação, pede-se desenvolver cada subtarefa visando, ao final, a entrega completa da funcionalidade:
    
    1. Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails.

    2. Criar uma função para montar o corpo do e-mail a ser enviado.

    3. Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de marketing.

    Os passos acima são um guia, mas não obrigatórios. Podem desenvolver uma lógica diferente, que atenda ao solicitado.
*/

const enviarEmail = require('./envia-email')

const clientes = [
    {email:'lucas@gmail.com', receberComunicado: true, nome:'Lucas'},
    {email:'carlos@gmail.com', receberComunicado: false, nome:'Carlos'},
    {email:'maria@gmail.com', receberComunicado: true, nome:'Maria'},
    {email:'julia@gmail.com', receberComunicado: true, nome:'Julia'},
    {email:'paulo@gmail.com', receberComunicado: false, nome:'Paulo'},
    {email:'joão@gmail.com', receberComunicado: true, nome:'João'},
    {email:'marcos@gmail.com', receberComunicado: false, nome:'Marcos'}
]

const vaiculosNovos = ["HB20", "Onix", "Prisma", "Ford Ka"]
const vaiculosMaisVendidos = ["HB20", "Onix"]

function diaDaSemana() {
    now = new Date
    // return now.getDay()
    return 1
}

function corpoDoEmail(arr) {
    let body = `Prezado cliente ${arr.nome}, esse mês temos diversos novos viculos para você sair de carro novo! São eles ${vaiculosNovos.join(', ')}. Para que você possa tomar como base na sua escolhar, informamos que os carros mais vendidos no ultimo vez foram ${vaiculosMaisVendidos.join(', ')}.

          Só nessa semana, na compra do seu carro você sai de tanque cheio! Não perca essa oportunidade, venha para a CarStore e saia de carro novo!`
    return body
}

if(diaDaSemana() === 1) {
    for (let cliente of clientes) {
        cliente.receberComunicado === true ? enviarEmail(cliente.email,"SUPER OFERTA CARSTORE!",corpoDoEmail(cliente)) : null
    }
}



