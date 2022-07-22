let tamanhoDoArray = [];
let div = 0;
for (let index = 0; index < 25; index++) {
        tamanhoDoArray.push(index + 1);
        // console.log(tamanhoDoArray[index] + 1);

}

for (let index = 0; index < tamanhoDoArray.length; index++) {
        div = tamanhoDoArray[index] / 2;
        console.log(tamanhoDoArray[index], '/ por 2 é :', div);
}
