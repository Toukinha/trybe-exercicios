let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritimetica = 0;

for (let index = 0; index < numbers.length; index++) {
    soma = numbers[index] + soma;
    
};

mediaAritimetica = soma / numbers.length

console.log(soma)
console.log(mediaAritimetica)





// for (let inside of numbers){
//     soma = inside + soma
// }
