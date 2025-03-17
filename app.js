// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
amigosYaSorteados=[];
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    console.log(nombre);
 
    if (!nombre) {
        alert ("Ingresa un nombre válido") 
    return;
    } else {
        amigos.push(nombre);
    renderizarAmigos();
    input.value = "";
    return;
        }
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Debes agregar amigos para sortear");
            return;
        }
    
        if (amigos.length === amigosYaSorteados.length) {
            alert("Ya has sorteado todos los amigos");
            reiniciarSorteo();
            return;
        }
    
        let amigoSorteado;
        do {
            amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        } while (amigosYaSorteados.includes(amigoSorteado));
    
        amigosYaSorteados.push(amigoSorteado);
        alert("El amigo sorteado es: " + amigoSorteado);
    }
    
function reiniciarSorteo() {
    amigosYaSorteados.length = 0;
    amigos.length = 0;
    document.getElementById("listaAmigos").innerHTML = "";
    alert("Sorteo Reiniciado");
   return;
}
function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = amigos[i];
        listaAmigos.appendChild(li);
    }
}