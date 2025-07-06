import readlineSync from 'readline-sync';

export function cadastrarCores() {

    let cores: Array<string> = [];

    for (let i = 1; i <= 5; i++) {
        const cor: string = readlineSync.question(`Digite a cor ${i}: `);
        cores.push(cor.trim());
    }

    console.log("\nCores cadastradas:");
    for (const cor of cores) {
        console.log(cor);
    }

    const coresOrdenadas: string[] = cores.sort()

    console.log('\nCores ordenadas:');
    console.log(coresOrdenadas);
}