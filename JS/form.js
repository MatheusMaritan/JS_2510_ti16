var clicar = document.querySelector("#botaoadd");
clicar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Novo cliente adicionado!");

    var addInfo = document.querySelector("#formulario");
    let Nome = addInfo.Nome.value;
    let Peso = addInfo.Peso.value;
    let Altura = addInfo.Altura.value;
    let Gordura = addInfo.Gordura.value;
    console.log(addInfo.Nome.value);
    console.log(addInfo.Peso.value);
    console.log(addInfo.Altura.value);
    console.log(addInfo.Gordura.value);

    // var createTb = document.createElement("tbody");
    var createTr = document.createElement("tr");
    var createNome = document.createElement("td");
    var createPeso = document.createElement("td");
    var createAltura = document.createElement("td");
    var createGordura = document.createElement("td");
    var createImc = document.createElement("td");

    createNome.textContent = Nome;
    createPeso.textContent = Peso;
    createAltura.textContent = Altura;
    createGordura.textContent = Gordura;

    createTr.appendChild(createNome);
    createTr.appendChild(createPeso);
    createTr.appendChild(createAltura);
    createTr.appendChild(createGordura);

    console.log(createTr);

    var addTr = document.querySelector("tbody");
    addTr.appendChild(createTr);

});