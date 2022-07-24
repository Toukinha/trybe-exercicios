let word = 'tryber';
let split = [];
let invert = [];
split = word.split('');


for (let index = split.length; index > 0; index--) {
    
    invert.push(split[index-1])

}

console.log(invert.join(''));
