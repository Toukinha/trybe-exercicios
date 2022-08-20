const fatorial = (n) => {
    let fatorin = 1;
    for (let index = 2; index <= n; index++) {
        fatorin *= index;
        
    }
    console.log(fatorin);
}
fatorial(4);