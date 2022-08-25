const books = require('./books.js')

const averageAge = (array) => array
    .reduce((acc, curr, index, coiso) => Math
        .round(acc + (curr.releaseYear - curr.author.birthYear) / coiso.length),0)

console.log(averageAge(books));