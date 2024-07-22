const prompt = require("prompt-sync")();

const {
    criar,
    atualizar,
    listar,
    remover 
} = require("./módulos.js")

while(true) {

console.log(`Digite '1' para 'criar';
Digite '2' para 'listar';
Digite '3' para 'atualizar';
Digite '4' para 'remover';
Digite '5' para 'sair'.`)

    let opção = Number(prompt());

    switch(opção) {
        case 1: 
        criar();
        break;
        case 2: 
        listar();
        break;
        case 3: 
        atualizar();
        break;
        case 4:
        remover();
        break;
        case 5: 
        console.log("Até logo!")
        process.exit();
    }

}