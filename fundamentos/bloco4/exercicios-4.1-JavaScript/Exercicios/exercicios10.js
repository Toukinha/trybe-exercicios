const custo = 30;
const venda = 60;
let quntidadeDeVenda = 1000;
let imposto = custo * 0.20;
let custoTotal = custo + imposto;
let custoDeProducao = custoTotal * quntidadeDeVenda;
let lucroDeVenda = venda * quntidadeDeVenda;
let lucroLiquido = lucroDeVenda - custoDeProducao;
console.log(lucroLiquido);


