let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
    {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
    },
    ],
};

leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
}

// console.log(leitor['livrosFavoritos'].length);
// console.log(leitor['livrosFavoritos']);
// let livroFavo = leitor['livrosFavoritos']['0']
// leitor ['fullName'] = leitor['nome'] + ' ' + leitor['sobrenome']
// console.log('o livro favorito de', leitor['fullName'], 'se chama', livroFavo['titulo']);

console.log(leitor['nome'], 'tem ', leitor['livrosFavoritos'].length, 'livros favoritos');