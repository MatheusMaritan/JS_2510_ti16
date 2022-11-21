var clicar = document.querySelector("#botaoadd");
    clicar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Novo cliente adicionado!");

    var addInfo = document.querySelector("#formulario");
    var paciente = novoPaciente("#formulario");
    var pacienteTr = novaTr(paciente);
    if (!validaPaciente(paciente)) {
        console.log("Inválido");
        return;
    }

    var tabela = document.querySelector("#table");
    tabela.appendChild(pacienteTr);
    form.reset();

    Nome: form.Nome.value;
    Peso: form.Peso.value;
    Altura: form.Altura.value;
    Gordura: form.Gordura.value;
    Imc: form.Imc.value;

    // console.log(addInfo.Nome.value);
    // console.log(addInfo.Peso.value);
    // console.log(addInfo.Altura.value);
    // console.log(addInfo.Gordura.value);
    // // console.log(addInfo.Imc.value);



    // var createTb = document.createElement("tbody");
    var createTr = document.createElement("tr");
    var createNome = document.createElement("td");
    var createPeso = document.createElement("td");
    var createAltura = document.createElement("td");
    var createGordura = document.createElement("td");
    // var createImc = document.createElement("td");

    createNome.textContent = Nome;
    createPeso.textContent = Peso;
    createAltura.textContent = Altura;
    createGordura.textContent = Gordura;

    createTr.appendChild(createNome);
    createTr.appendChild(createPeso);
    createTr.appendChild(createAltura);
    createTr.appendChild(createGordura);
    // createTr.appendChild(createImc);

    console.log(createTr);

    var addTr = document.querySelector("tbody");
    addTr.appendChild(createTr);




});