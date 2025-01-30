// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let lista = [];
let swIngreso = 0;

//Function que sortea aleatoriamente un Amigo de la lsta Ingresada
function sortearAmigo() {
let resultado = document.getElementById("resultado");

    //Se valida que existan datos en el arreglo de lista De amigos para realizar el sorteo 
    if (listaDeAmigos.length === 0) {
        resultado.innerHTML = "No existen amigos para sortear.";
        return;
    }
    
    //Se obtiene randomicamente el indice del arrglo de listaDeAmigos 
    let idxAmigoElegido = [Math.floor(Math.random() * listaDeAmigos.length)];
    let amigoSorteado = listaDeAmigos[idxAmigoElegido];

    //Se imprime resultado de quien salio Sorteado
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;

    //Caundo se obtien el resultado del sorteo se limoia la lista de amigos y el Arreglo de lista de Amigos
    lista.innerHTML = "";
    listaDeAmigos = [];
}


function agregarAmigo() {
//Se limpia la variable Resultado
resultado.innerHTML = "";    
//Se obtiene Amigo desde caja de texto
let amigoAAgregar = document.getElementById('amigo').value;

console.log(`Amigo Agregado: ${amigoAAgregar}`);
if (amigoAAgregar.trim() === "" && swIngreso != 0) {
    alert("favor, inserte un nombre en el cuadro de texto.");
    return;
}
else {
    swIngreso = 1;
    
}

if (amigoAAgregar != "") {
   listaDeAmigos.push(amigoAAgregar);
}

//Se llama a la funcion interna que lista los amigos que se van ingresando
listarAmigos();

//Funcion que crea y muestra la lista de Amigos ingresados 
function listarAmigos() {
    //let lista = document.getElementById("listaAmigos");
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let cont = 0; cont < listaDeAmigos.length; cont++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[cont];
        lista.appendChild(li);
    }
}

//console.log(listaDeAmigos);
limpiarTexto();
}

function limpiarTexto() {
    document.querySelector('#amigo').value = '';
}

resultado.innerHTML = "";
//Llamada a Funcion que Agrega Amigo para el Sorteo del Amigo Secreto
agregarAmigo();