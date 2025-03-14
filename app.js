let amigosArray = [];
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
        alert('Por favor digite o nome do seu amigo! 🫂');
        return;        
    } else {
        amigosArray.push(amigoDigitado);
        exibirListaAmigos('#listaAmigos', amigosArray);
        document.querySelector('input').value = '';
        return amigosArray;
    }
}
console.log(amigosArray);

function sortearIndex() {
    numeroIndex = parseInt(Math.random() * amigosArray.length);
    return numeroIndex;       
}

function sortearAmigo() {
    if (amigosArray.length !== 0) {
        sortearIndex();
        amigoSorteado = amigosArray[numeroIndex];
        let displayAmigo = `Seu Amigo Secreto é ${amigoSorteado}!`;
        exibirAmigoSecreto('#resultado', displayAmigo);
    } else {
        alert('É preciso ter amigos para sortear! 😣');
        return;
    }
}


