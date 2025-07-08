const readline = require('readline-sync');

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.isEmpty() ? null : this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    list() {
        return [...this.items].reverse();
    }
}

const pilhaLivros = new Stack();

let opcao;

do {
    console.log("\n=== MENU - PILHA DE LIVROS ===");
    console.log("1 - Adicionar livro à pilha");
    console.log("2 - Listar livros da pilha");
    console.log("3 - Retirar livro da pilha");
    console.log("0 - Sair");
    opcao = readline.question("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            const livro = readline.question("Digite o nome do livro: ");
            pilhaLivros.push(livro);
            console.log(`"${livro}" foi adicionado à pilha.`);
            break;

        case "2":
            if (pilhaLivros.isEmpty()) {
                console.log("A pilha está vazia.");
            } else {
                console.log("\nLivros na pilha (do topo para base):");
                pilhaLivros.list().forEach((livro, index) => {
                    console.log(`${index + 1}. ${livro}`);
                });
            }
            break;

        case "3":
            const livroRemovido = pilhaLivros.pop();
            if (livroRemovido === null) {
                console.log("A pilha está vazia. Nenhum livro para retirar.");
            } else {
                console.log(`Livro retirado do topo da pilha: "${livroRemovido}"`);
            }
            break;

        case "0":
            console.log("Programa encerrado.");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }

} while (opcao !== "0");
