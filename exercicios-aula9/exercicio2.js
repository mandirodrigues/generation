const readline = require('readline-sync');

let numeros = [2,5,1,3,4,9,7,8,10,6]

const numeroDigitado = readline.question(`Digite o número que você deseja encontrar: `);

let posicao;

for (let i = 1; i <= numeros.length; i++) {
    if(numeros[i] == numeroDigitado) {
        posicao = i
    }
}

if(posicao) {
    console.log('o número ' + numeroDigitado + ' está localizado na posição: ' + posicao)
} else {
    console.log('o número ' + numeroDigitado + ' não foi encontrado')
}
