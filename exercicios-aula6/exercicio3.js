const readline = require('readline-sync');

const salarioBruto = parseFloat(readline.question("Salário Bruto: "));
const adicionalNoturno = parseFloat(readline.question("Adicional Noturno: "));
const horasExtras = parseFloat(readline.question("Horas Extras: "));
const descontos = parseFloat(readline.question("Descontos: "));

const salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("Salário Líquido: " + salarioLiquido);
