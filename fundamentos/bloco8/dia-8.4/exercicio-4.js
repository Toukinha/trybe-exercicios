const books = require('./books.js');

const longestNamedBook = (array) => {
    return array.reduce((acc, curr) => {
        console.log(`acc = ${acc.name.length} curr = ${curr.name.length}`);
        if (curr.name.length > acc.name.length) {
            return curr
        }
        return acc;
    })
}
console.log(longestNamedBook(books));