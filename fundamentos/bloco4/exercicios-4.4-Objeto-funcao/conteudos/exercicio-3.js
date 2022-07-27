//adicao
function mat(a,b) {
    let adicao = a+b
    let sub = a-b
    let multi = a*b
    let div = a/b
    let mod = a%b
    

    return ['soma '+adicao,'subtracao '+sub,'multiplicaca '+multi,'divisao '+div,'mod '+mod]
}



//maior
function maior(a,b) {
    if (a > b) {
        return a +' é maior q ' + b
    }else if (b > a) {
        return b +' é maior q ' + a
    }else {
        return a+' e '+b +' sao iguais'
    }
    
}


//menor
function menor (a,b){
    if (a < b) {
        return a + ' é menor q '+ b
    }else if (b < a) {
        return b + ' é menor q ' + a
    }else {
        return a + ' e ' + b + ' sao iguais'
    }

}


//positivo
function positivo(a){
    if (a < 0) {
        return  'negative' 
    }else return 'positivo'
}
//ehTriangulo
function ehTriangulo(a,b,c) {
    if (a + b + c === 180) {
        return true;
    }else if (a < 0 || b < 0 || c < 0) {
        return 'invalido';
    }else return false;
}

console.log(ehTriangulo(60,60,-60));
console.log(menor(11,5));
console.log(maior(11,11));
console.log(mat(5,8));
console.log(positivo(-5));

