const arrayDinos = JSON.parse(localStorage.getItem("arrayDinos")) || []
const URL = "https://crudcrud.com/api/c10f73e00dfe4ffc9a309ae700a4b326"


function getAnimal(id) {
    if (id) {

        const dino = arrayDinos[id];
        nome.value = dino.nome;
        idade.value = dino.idade;
        for (let i = 0; i < especie.options.length; i++) {
            if (especie.options[i].text.toLowerCase() === dino.especie.toLowerCase()) {
                especie.selectedIndex = i
            }
        }
        const genero = document.getElementsByName('genero')
        for (let i = 0; i < genero.length; i++) {
            if (genero[i].value.toLowerCase() === dino.genero.toLowerCase()) {
                genero[i].checked = true
            }
        }
        descricao.value = dino.descricao
    }
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
getAnimal(id);

async function addDino(dinoObj) {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(dinoObj),
      headers: { 'Content-Type': 'application/json' }
    });
    
    return await response.json();
  }
  
  async function updateDino(id, dinoObj) {
    const response = await fetch(URL + `/${id}`, {
      method: "PUT",
      body: JSON.stringify(dinoObj),
      headers: { 'Content-Type': 'application/json' }
    });
    
    return await response.json();
  }

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const {
        nome,
        idade,
        especie,
        genero,
        descricao
    } = event.target

    const novoDino = {
        nome: nome.value,
        idade: idade.value,
        especie: especie.value,
        genero: genero.value,
        descricao: descricao.value
    }

    if (novoDino.nome == "") {
        alert("Informe um nome para o Dino!")
        return
    }
    if (novoDino.idade == "") {
        alert("Informe uma idade para o Dino!")
        return
    }
    if (novoDino.especie == "Selecione uma especie") {
        alert("Informe qual a especie o Dino!")
        return
    }
    if (novoDino.genero == "") {
        alert("Informe o genero do Dino!")
        return
    }
    if (novoDino.descricao == "") {
        alert("Informe uma descrição para esse Dino!")
        return
    }

    if (id) {
        arrayDinos[id] = novoDino
        updateDino(id, novoDino).then(alert.log)
    } else {
        arrayDinos.push(novoDino)
        addDino(novoDino).then((data) => alert.log(data))
    }

    localStorage.setItem("arrayDinos", JSON.stringify(arrayDinos));

    console.log(novoDino)
    form.reset()
    // window.location = './';
})

