let number = 100;
let sla = [];
let maior = 0;
for (let index = 2; index <=  number; index++) {
        let primo = true;

        for (let divisor = 2; divisor < index; divisor++) {
            if (index % divisor === 0) {
                primo =false
                break;
            }
            
        }
        if (primo) sla.push(index)
}


for (let index = 0; index < sla.length; index++) {
    let compara = 0
    if (compara < sla[index]) {
        maior = (sla[index])
    }
    compara = sla[index]
}
console.log(maior);
console.log(sla);