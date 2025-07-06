const readline = require('readline-sync');

const n1 = parseFloat(readline.question("numero1: "));
const n2 = parseFloat(readline.question("numero2: "));
const n3 = parseFloat(readline.question("numero3: "));
const n4 = parseFloat(readline.question("numero4: "));

const diferenca = (n1 * n2) - (n3 * n4);

console.log("Diferença: " + diferenca);
