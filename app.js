let listaAmigos = [];


function adicionarAmigo() { // Função que captura o valor do input pelo ID
    let nomeAmigo = document.getElementById('amigo').value;
    
    if (nomeAmigo.trim() == '') { // Verifica se o campo está vazio
        alert('Informe o nome do amigo secreto!');
        } else {
        listaAmigos.push(nomeAmigo);// Adicionando o nome ao array
        document.getElementById('amigo').value = '';// Limpando o input após adicionar o nome
    }
    //console.log(listaAmigos);// Exibindo o valor no console (só para verificar por enquanto)
    exibirNomes();
}

function exibirNomes() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    // Adicionando cada nome como um item da lista
    listaAmigos.forEach(function(nome) {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
        }
    );
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
      alert('A lista está vazia! Adicione nomes antes de sortear.');
      return;
    }
    // Sorteando um nome aleatório
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[indiceSorteado];

    // Exibindo o nome sorteado na lista de resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O seu amigo secreto é: ${nomeSorteado}!</li>`;

    // Limpando a lista de amigos após o sorteio
    listaAmigos.length = 0; 
    exibirNomes(); // Limpa a lista visual
}