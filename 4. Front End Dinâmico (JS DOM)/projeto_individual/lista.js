const arrayDinos = JSON.parse(localStorage.getItem("arrayDinos")) || []

arrayDinos.forEach((dino, index) => {
    const container = document.querySelector(".container")

    const item = document.createElement("div")
    item.className = "item"

    const anchor = document.createElement("a")
    anchor.href = `popup.html?id=${index}`

    const img = document.createElement("img")
    img.src = `src/${dino.especie.replace(/\s/g, '')}.jpeg`
    img.width = "50"

    const name = document.createElement("p")
    name.innerText = dino.nome

    const btnEditar = document.createElement("a")
    btnEditar.href = `registro.html?id=${index}`
    btnEditar.innerText = "Editar"
    btnEditar.id = "editar"

    const btnDelete = document.createElement("button")
    btnDelete.innerText = "Remover"
    btnDelete.id = "delete"

    btnDelete.addEventListener("click", () => {
        if (confirm("Você tem certeza que quer remover este Dino?")) {
          arrayDinos.splice(index, 1);
          localStorage.setItem("arrayDinos", JSON.stringify(arrayDinos));
          location.reload();
        }
    });

    anchor.appendChild(img)
    item.appendChild(anchor)
    item.appendChild(name)
    item.appendChild(btnEditar)
    item.appendChild(btnDelete)

    container.appendChild(item);


})