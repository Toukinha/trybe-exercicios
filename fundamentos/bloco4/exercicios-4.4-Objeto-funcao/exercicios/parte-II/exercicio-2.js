let array = [2,3,6,7,10,1];


function returnHigherNumber(array){
    let maior = 0;
    for (let index = 0; index < array.length; index += 1){
        if (array[index] > maior) {
        maior = index
        }
        
    }
    console.log(maior);
}
returnHigherNumber(array)