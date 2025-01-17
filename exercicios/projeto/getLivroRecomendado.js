const read = require('readline-sync');
const livros = require('./database');


const getLivroRecomendado = () => {
    
    const opcaoInicial = read.question(`Voce deseja procurar por livros recomendados por outros leitores? S/N `).toUpperCase();

    if (opcaoInicial === 'N') {
    
    console.log('Vixe deu erro, não tem problema! Tem muita coisa boa a ser conferida. Bora de volta ao menu inicial?')

} else if (opcaoInicial === 'S'){
    
    console.log(' Veja aqui os livros mais comprados por nossos leitores!')
        
    const filtrarLivroRecomendado = livros.filter(livro => livro.recomendado === true);

        console.table(filtrarLivroRecomendado);
        
        const inputTitulo = read.question(`Digite o titulo desejado conforme a tabela acima: `).toUpperCase();

        const confirmarTitulo = read.question(`Tem certeza? S/N `).toUpperCase();

        if (confirmarTitulo === 'S') {

            console.log(' Legal! Você tem bom gosto para leitura!');

            const filtrarTituloLivro = livros.filter(livro => livro.titulo.toUpperCase() === inputTitulo);

            console.table(filtrarTituloLivro)

        } else {
            console.log('Retornar ao menu inicial')
        }
    }
}

module.exports = getLivroRecomendado