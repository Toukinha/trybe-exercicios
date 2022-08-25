const books = require('./books')
  
const reduceNames = (array) => array
    .reduce((acc, curr) => `${acc}${curr.author.name}\n`, '');

console.log(reduceNames(books));


  