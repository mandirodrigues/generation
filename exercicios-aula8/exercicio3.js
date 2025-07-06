const readline = require('readline-sync');

let numero;
let soma = 0;

console.log("Digite números inteiros. Para encerrar, digite 0.\n");

do {
    numero = parseInt(readline.question("Digite um número: "));

    if (numero > 0) {
        soma += numero;
    }

} while (numero !== 0);

console.log("\nA soma dos números positivos digitados é: " + soma);
