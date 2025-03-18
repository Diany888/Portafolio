// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 
let amigo=[];

function agregarAmigo(){
    let addAmigo=document.getElementById("amigo");
    let nameAmigo=addAmigo.value;
    if (!nameAmigo){
        alert("Ingrese un nombre");
        return;
    }
   amigo.push(nameAmigo);
   console.log(amigo);
    addAmigo.value="";
    addAmigo.focus();
    enlistarAmigos();
};


function enlistarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i=0; i<amigo.length; i++){
        let item = document.createElement("li");
        item.textContent=amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if (amigo.length === 0){
        alert("No existe amigos para sortear");
        return;
    }

    if(amigo.length<2){
        alert("Agrege más amigos para el sorteo")
    }

    
    let amigoSorteado=amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML=`El amigo a dar el regalo es: ${amigoSorteado}`;

    let limpiarLista= document.getElementById("listaAmigos");
    limpiarLista.innerHTML= "";



}