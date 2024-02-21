'use strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

function criarDiv (txt) {
    const div = document.createElement('div');
    div.classList.add('key');
    div.id = txt;
    div.innerHTML = txt;
    document.querySelector('#container').appendChild(div);
}

function exibirSons (sons) {
    //Object.keys(som) //retorna um array com as chaves, que no caso são as letras
    Object.keys(sons).forEach(criarDiv);
}

exibirSons(sons);

document.querySelector('#container').addEventListener('click', ativarDiv);

function adicionarEfeito(letra) {
    document.getElementById(letra).classList.add('ativo');
}

function ativarDiv(e) {
    let letra;
    if (e.type == 'click') {
        letra = e.target.id;
    } else if (e.type == 'keydown') {
        letra = e.key.toUpperCase();
    }
    const letraPermitida = sons.hasOwnProperty(letra);
    if(!letraPermitida) return; 
    adicionarEfeito(letra);
    tocarSom(letra);
}

function tocarSom(letra) {
    const audio = new Audio(`./sounds/${sons[letra]}`)
    audio.play();
}

window.addEventListener('keydown', ativarDiv)

