import readlinesync from 'readline-sync'
import { Queue } from './Queue';

const fila = new Queue<string>()

let opcao: number;
let nome: string

while (true) {
    console.log("1 Adicionar novo cliente na fila. ");
    console.log("2 listar todos os clientes na fila");
    console.log("3 chamar uma pessoa da fila");
    console.log("0 o programar deve ser finalizado");
    console.log("entre com a opçao desejada");

    opcao = readlinesync.questionInt()

    if (opcao === 0) {
        console.log("programa finalizado")
        process.exit(0)

    }
    switch (opcao) {
        case 1:
            console.log("adicionar cliente na fila")
            nome = readlinesync.question("digite o nome do cliente")
            fila.enqueue(nome)
            console.log("cliente adicionado")
            break
        case 2:
            console.log("listar cliente na fila")
            fila.printQueue()
            break
        case 3:
            console.log("chamar cliente na fila")
            if (fila.isEmpty()) {
                console.log("fila esta vazia")

            } else {
                fila.dequeue()
                console.log("cliente retirado da fila")
            }

            break
        default:
            console.log("opcao invalida ")

            break

    }

}

