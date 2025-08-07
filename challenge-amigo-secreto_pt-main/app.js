let amigos = [];
let amigosSorteados = [];

function adicionarAmigo(){
    if(document.getElementById("amigo").value == null || document.getElementById("amigo").value == ""){
        alert("Adicione um amigo válido!");
        return;
    }   
    amigos.push(document.getElementById("amigo").value);
    console.log(amigos);
};

function sortearAmigo(){
    if(amigos.length < 2){
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }
    
    if(amigosSorteados.length > 0){
        alert("Amigos já sorteados. Por favor, reinicie o sorteio.");
        return;
    }

    let amigosRestantes = [...amigos];
    
    while(amigosRestantes.length > 0){
        let index = Math.floor(Math.random() * amigosRestantes.length);
        let amigoSorteado = amigosRestantes[index];
        
        // Remove the selected friend from the remaining list
        amigosRestantes.splice(index, 1);
        
        // Find a friend who hasn't been assigned yet
        let amigoParaSortear = amigosRestantes[Math.floor(Math.random() * amigosRestantes.length)];
        
        // Remove the selected friend from the remaining list
        amigosRestantes.splice(amigosRestantes.indexOf(amigoParaSortear), 1);
        
        amigosSorteados.push({amigo: amigoSorteado, sorteado: amigoParaSortear});
    }
    
    console.log(amigosSorteados);   

}