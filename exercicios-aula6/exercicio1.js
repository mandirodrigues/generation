
const readline = require('readline-sync');

let salario = readline.questionFloat('Digite o salário: ');
let abono = readline.questionFloat('Digite o abono: ');

let novoSalario = salario + abono;

console.log('O novo salário é: ' + novoSalario);