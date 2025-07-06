const readline = require('readline-sync');

let nota1 = parseFloat(readline.question("Nota 1: "));
let nota2 = parseFloat(readline.question("Nota 2: "));
let nota3 = parseFloat(readline.question("Nota 3: "));
let nota4 = parseFloat(readline.question("Nota 4: "));

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("Média final: " + media.toFixed(1));