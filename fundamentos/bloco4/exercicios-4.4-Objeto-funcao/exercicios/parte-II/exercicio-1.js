function verificaPalindrome(teste) {
    
    let invert = teste.split('').reverse().join('');

    if (invert === teste) {
        return true;
    }else return false
}

console.log(verificaPalindrome('arara'));