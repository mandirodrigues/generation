const readline = require('readline-sync');

let numero1 = parseInt(readline.question("Digite o primeiro número (menor): "));
let numero2 = parseInt(readline.question("Digite o segundo número (maior): "));

if (numero1 >= numero2) {
    console.log("Intervalo inválido. O primeiro número deve ser menor que o segundo.");
} else {
    console.log(`\nMúltiplos de 3 e 5 entre ${numero1} e ${numero2}:\n`);

    for (let i = numero1; i <= numero2; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}
