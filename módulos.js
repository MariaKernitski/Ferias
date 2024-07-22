const prompt = require("prompt-sync")();

const atividades = [];

const modelo = () => {
  let atividade = {
    dia: undefined,
    descriçao: [],
  };

  atividade.dia = prompt("Qual o dia? ");
  let resposta;

  console.log("Quando terminar de digitar as atividades digite 'fim'!")

  while (true) {
    resposta = prompt("O que fez nesse dia? ");

    if (resposta == "fim") {
      break;
    } else {
      atividade.descriçao.push(resposta);
    }
  }
  return atividade;
};

const criar = () => {
  let atividade = modelo();

  atividades.push(atividade);

  console.log("Atividade cadastrada com sucesso!");
};

const listar = () => {
  atividades.forEach((atividade, indice) => {
    console.log(`${indice + 1}. ${atividade.dia}`);
    
    atividade.descriçao.forEach(descriçao => console.log(`- ${descriçao}`));
  });
};

const atualizar = () => {
  listar();

  let indice = prompt("Qual índice deseja atualizar? ");

  let atividade = modelo();

  atividades[--indice] = atividade;

  console.log("Índice atualizado com sucesso!");
};

const remover = () => {
  listar();

  let indice = prompt("Qual índice deseja remover? ");

  atividades.splice(--indice, 1);

  console.log("Índice removido com sucesso!");
};

module.exports = {
  criar,
  atualizar,
  remover,
  listar,
};
