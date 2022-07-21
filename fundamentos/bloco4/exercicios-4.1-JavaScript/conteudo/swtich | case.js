
mes = 'dezembro';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
}

console.log(estacaoDoAno); // 'Outono'



// let trybe = "";
// switch (trybe) {
//     case "aprovado":
//         console.log("aprovado")
//         break;
    
//     case "lista":
//         console.log("listado")
//         break;
//     case "reprovado":
//         console.log("podre fraco e sem talento")
//         break;
        
//     default:
//         console.log("me desculpa mas vc nao se encaixa no nosso perfil (fraco e sem talento dois)")
//         break;
// }