let listAmigos = [];
let numeroIndex = 0;
let amigoSorteado =''; 

function exibirListaAmigos(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto.join('<br>');
}

function exibirAmigoSecreto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let amigoDigitado = document.querySelector('input').value;
    
    if (amigoDigitado == '') {
        alert('Nos informe o nome dos seus amigos 😁');
        return;        
    } else {
        listAmigos.push(amigoDigitado);
        exibirListaAmigos('#listaAmigos', listAmigos);
        document.querySelector('input').value = '';
        return listaAmigos;
    }
}
console.log(listAmigos);

function sortearIndex() {
    numeroIndex = parseInt(Math.random() * listAmigos.length);
    return numeroIndex;       
}

function sortearAmigo() {
    if (listAmigos.length !== 0) {
        sortearIndex();
        amigoSorteado = listAmigos[numeroIndex];
        let displayAmigo = `Seu Amigo Secreto é ${amigoSorteado}!`;
        exibirAmigoSecreto('#resultado', displayAmigo);
    } else {
        alert('É preciso ter amigos para sortear! 😣');
        return;
    }
}


