const sorteio = () => Math.floor(Math.random() * (6 - 0) + 0);

const result = () => {
    const num = 5;
    const sort = sorteio()
    if (num === sort) {
        return `O numero sorteado foi ${sort} Parabéns você ganhou`
    }
    return "Tente novamente";
}
console.log(result());