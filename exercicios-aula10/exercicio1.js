const readline = require('readline-sync');

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.isEmpty() ? null : this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    list() {
        return this.items;
    }
}

const filaClientes = new Queue();

let opcao;

do {
    console.log("\n=== MENU - BANCO ===");
    console.log("1 - Adicionar cliente à fila");
    console.log("2 - Listar clientes na fila");
    console.log("3 - Chamar cliente da fila");
    console.log("0 - Sair");
    opcao = readline.question("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            const nome = readline.question("Digite o nome do cliente: ");
            filaClientes.enqueue(nome);
            console.log(`${nome} foi adicionado à fila.`);
            break;

        case "2":
            if (filaClientes.isEmpty()) {
                console.log("A fila está vazia.");
            } else {
                console.log("\nClientes na fila:");
                filaClientes.list().forEach((cliente, index) => {
                    console.log(`${index + 1}. ${cliente}`);
                });
            }
            break;

        case "3":
            const clienteChamado = filaClientes.dequeue();
            if (clienteChamado === null) {
                console.log("A fila está vazia. Ninguém para chamar.");
            } else {
                console.log(`Chamando cliente: ${clienteChamado}`);
            }
            break;

        case "0":
            console.log("Encerrando o programa...");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== "0");
