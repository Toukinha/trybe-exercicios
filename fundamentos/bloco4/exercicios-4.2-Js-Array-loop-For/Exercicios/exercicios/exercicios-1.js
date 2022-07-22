let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritimetica = 0;
let maiorValor = 0;
let menorValor = Infinity;
let impares = 0;
let pares = 0;
for (let index = 0; index < numbers.length; index++) {
    soma = numbers[index] + soma;
    
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }

    if (numbers[index] < menorValor) {
            menorValor = numbers[index];
    }

    if (numbers[index] % 2 !== 0 ) {
        impares += 1;
    }else{
        pares += 1;
    }

};

mediaAritimetica = (soma / numbers.length);
console.log('a quantidade de numeros pares é de :', pares);
console.log('a quantidade de numeros impares é de :', impares);
console.log('a soma é de :', soma);
console.log('a media aritimetica é de :', mediaAritimetica);
console.log('o maior valor é de : ', maiorValor);
console.log('o menor valor é de : ', menorValor);

if (mediaAritimetica > 20) {
    console.log('A media aritimetica é um valor maior q 20');
}else{
    console.log('A media aritimetica é um valor menor ou q 20');
}