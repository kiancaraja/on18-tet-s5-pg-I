const read = require('readline-sync');
const livros = require('./database');

const getLivroNaoLido = () => {
    const opcaoInicial = read.question(`Voce deseja buscar livros que ainda nao foram lidos? S/N `).toUpperCase();

    if (opcaoInicial === 'N') {

        console.log('Ops! Deu algum problema comece novamente')

    } else if (opcaoInicial === 'S'){

        console.log('Se for um bom leitor, vai gostar destes livros, seja um bom amigo para eles!:')

        const filtrarLivroNaoLido = livros.filter(livro => livro.lido === false);

        console.table(filtrarLivroNaoLido);

        const inputTitulo = read.question(`Digite o titulo desejado conforme a tabela acima: `).toUpperCase();

        const confirmarTitulo = read.question(`Tem certeza? S/N `).toUpperCase();

        if (confirmarTitulo === 'S') {

            console.log('Massa! Você é 10! Que tal levar mais um com você?');

             const filtrarTituloLivro = livros.filter(livro => livro.titulo.toUpperCase() === inputTitulo);

            console.table(filtrarTituloLivro)

        } else {
            console.log('Retornar ao menu inicial')
        }
    }
}

module.exports = getLivroNaoLido