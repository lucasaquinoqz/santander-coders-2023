const arrayDinos = JSON.parse(localStorage.getItem("arrayDinos")) || []

function getAnimal(id) {
    if (id) {
        const dino = arrayDinos[id];
        
        const nome = dino.nome;
        const idade = dino.idade;
        const especie = dino.especie
        const genero = dino.genero
        const descricao = dino.descricao

        
const container = document.querySelector(".container")

const item = document.createElement("div")
item.className = "item"

const img = document.createElement("img")
img.src = `src/${dino.especie.replace(/\s/g, '')}.jpeg`
img.width = "50"

const nomeDino = document.createElement("p")
nomeDino.innerText = nome

const idadeDino = document.createElement("p")
idadeDino.innerText = idade

const especieDino = document.createElement("p")
especieDino.innerText = especie

const generoDino = document.createElement("p")
generoDino.innerText = genero

const descricaoDino = document.createElement("p")
descricaoDino.innerText = descricao

const btnEditar = document.createElement("a")
btnEditar.href = `registro.html?id=${id}`
btnEditar.innerText = "Editar"
btnEditar.id = "editar"

const btnDelete = document.createElement("button")
btnDelete.innerText = "Remover"
btnDelete.id = "delete"

btnDelete.addEventListener("click", () => {
    if (confirm("Você tem certeza que quer remover este Dino?")) {
        arrayDinos.splice(id, 1)
        localStorage.setItem("arrayDinos", JSON.stringify(arrayDinos))
        location.reload()
        window.location = './';
    }
})

const btnVoltar = document.createElement("a")
btnVoltar.href = `./`
btnVoltar.innerText = "Voltar"
btnVoltar.id = "voltar"

const divBtnEditar = document.createElement("div")
const divBtnDelete = document.createElement("div")
const divVtnVoltar = document.createElement("div")

item.appendChild(img)
item.appendChild(nomeDino)
item.appendChild(idadeDino)
item.appendChild(especieDino)
item.appendChild(generoDino)
item.appendChild(descricaoDino)
divBtnEditar.appendChild(btnEditar)
item.appendChild(divBtnEditar)
divBtnDelete.appendChild(btnDelete)
item.appendChild(divBtnDelete)
divVtnVoltar.appendChild(btnVoltar)
item.appendChild(divVtnVoltar)

container.appendChild(item)
    }

}

const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
console.log(id)
getAnimal(id)

