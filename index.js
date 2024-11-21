//este código foi adaptado para rodar com o node

const readline = require('readline');  // Importa o módulo readline

// Cria a interface de leitura e escrita no terminal
const rl = readline.createInterface({
  input: process.stdin,  // Entrada do terminal
  output: process.stdout  // Saída para o terminal
});
// Pergunta o nome do herói
rl.question('Digite o nome do Super Herói: ', (heroi) => {
  // Pergunta a experiência do herói
  rl.question('Digite a experiência do herói: ', (experiencia) => {  
    // Converte a experiência para um número inteiro
    experiencia = parseInt(experiencia);
    
    // Inicializa a variável 'nivel'
    let nivel = "";

    // Verifica o nível do herói com base na experiência
    if (experiencia <= 1000) {
        nivel = "Ferro";
    } else if (experiencia <= 2000) {
        nivel = "Bronze";
    } else if (experiencia <= 5000) {
        nivel = "Prata";
    } else if (experiencia <= 7000) {
        nivel = "Ouro";
    } else if (experiencia <= 8000) {
        nivel = "Platina";
    } else if (experiencia <= 9000) {
        nivel = "Ascendente";
    } else if (experiencia <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibe o nível do herói
    console.log("O herói de nome " + heroi + " está no nível " + nivel);

    // Fecha a interface de leitura
    rl.close();
  });
});