const readline = require('readline-sync');

let totalBackend = 0;
let totalFrontendMulheres = 0;
let totalMobileHomens40mais = 0;
let totalFullstackNB30menos = 0;
let totalPessoas = 0;
let somaIdades = 0;

let continuar = 'S';

while (continuar.toUpperCase() === 'S') {

    const idade = parseInt(readline.question("Idade: "));

    console.log("\nIdentidade de Gênero:");
    console.log("1 – Mulher Cis");
    console.log("2 – Homem Cis");
    console.log("3 – Não Binário");
    console.log("4 – Mulher Trans");
    console.log("5 – Homem Trans");
    console.log("6 – Outros");
    const genero = parseInt(readline.question("Escolha (1 a 6): "));

    console.log("\nPessoa Desenvolvedora:");
    console.log("1 – Backend");
    console.log("2 – Frontend");
    console.log("3 – Mobile");
    console.log("4 – FullStack");
    const tipoDev = parseInt(readline.question("Escolha (1 a 4): "));

    if (tipoDev === 1) {
        totalBackend++;
    }

    if (tipoDev === 2 && (genero === 1 || genero === 4)) {
        totalFrontendMulheres++;
    }

    if (tipoDev === 3 && (genero === 2 || genero === 5) && idade > 40) {
        totalMobileHomens40mais++;
    }

    if (tipoDev === 4 && genero === 3 && idade < 30) {
        totalFullstackNB30menos++;
    }

    totalPessoas++;
    somaIdades += idade;

    continuar = readline.question("\nDeseja cadastrar outro colaborador? (S/N): ");
    console.log("\n-----------------------------------------\n");
}

console.log("\n===== RELATÓRIO DA PESQUISA =====");
console.log(`Número de pessoas desenvolvedoras Backend: ${totalBackend}`);
console.log(`Número de Mulheres (Cis e Trans) desenvolvedoras Frontend: ${totalFrontendMulheres}`);
console.log(`Número de Homens (Cis e Trans) desenvolvedores Mobile maiores de 40 anos: ${totalMobileHomens40mais}`);
console.log(`Número de Não Binários desenvolvedores FullStack menores de 30 anos: ${totalFullstackNB30menos}`);
console.log(`Número total de pessoas que responderam à pesquisa: ${totalPessoas}`);
console.log(`Média de idade dos participantes: ${(somaIdades / totalPessoas).toFixed(1)} anos`);
