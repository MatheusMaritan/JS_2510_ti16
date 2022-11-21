

var pacientes = document.querySelectorAll(".conteudo");
console.log(pacientes);

// for (i = 0; i < pacientes.length; i++) {
// console.log();
// let Peso = pacientes[i].children[1].textContent
// let Altura = pacientes[i].children[2].textContent
// let imc = Peso / (Altura*Altura)
// }


for (i=0; i<pacientes.length;i++){

    var pesoValido = true;
    var alturaValido = true;
    var info_peso = pacientes[i].children[1].textContent;
    var info_altura = pacientes[i].children[2].textContent;

    if (info_peso.length>0 && info_altura.length>0) {
        var imc = info_peso / (info_altura*info_altura);
        pacientes[i].children[4].textContent = imc.toFixed(2);
    
    }else{
        pacientes.classList.add("invalido")
        pacientes[i].children[4].textContent = "Valor Inválido";
        pacientes[i].children[4].classList.add("invalido");


    }

    
}

