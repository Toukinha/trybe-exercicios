function inss (salario) {
    let salarioBase = 0;
    let impostoIR = 0;
    let salarioLiquido = 0;    
    //INSS
    if (salario <= 1556.94) {
        salarioBase = salario * 0.92;

    }else if (salario > 1556.95 && salario < 2594.92) {
        salarioBase = salario * 0.91;

    }else if (salario > 2594.93 && salario < 5189.82) {
        salarioBase = salario * 0.89;

    }else if (salario > 5189.82) {
        salarioBase = salario - 570.88;

    }
    //IR

    if (salarioBase < 1903.98) {
        impostoIR = salarioBase;

    }else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        impostoIR = salarioBase * 0.075 -142.80;
        
    }else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        impostoIR = salarioBase * 0.15 - 354.80;
        
    }else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        impostoIR = salarioBase * 0.225 - 636.13;
        
    }else if (salarioBase > 4664.68) {
        impostoIR = salarioBase * 0.275 - 869.36;
        
    }
    
    salarioLiquido = salarioBase - impostoIR;
    return salarioLiquido;

}
let salarioBruto = 3000;
let teste = 0;

console.log(inss(salarioBruto)) 

