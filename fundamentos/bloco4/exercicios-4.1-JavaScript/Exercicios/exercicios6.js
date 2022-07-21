let peca = "";
peca = "Reia".toLowerCase();


switch (peca) {
    
    case "rei":
        console.log("Rei: move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.");
        break;
    
    case "rainha" || "dama":
        console.log("Dama ou Rainha: é a peça mais poderosa do jogo, uma vez que seu movimento combina o da torre e o do bispo, ou seja, pode mover-se pelas colunas, fileiras e diagonal de outra cor.");
        break;
    
    case "torre" || "torres":
        console.log("Torre: movimenta-se em direção reta pelas colunas ou fileiras.");
        break;
    
    case "bispo" || "bispos":
        console.log("Nao sei nao");
        break;
    
    case "cavalo" || "cavalos":
        console.log("Cavalo: movimenta-se sempre em (L),ou seja,duas casas para frente e uma para a esquerda ou direita. O cavalo é a única peça que pode pular sobre as outras, tanto as suas quanto as adversárias.");
        break;
    
    case "peão" || "peoes":
        console.log("Peão: movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal. Ao contrário das outras peças, o peão não pode mover-se para trás.");
        break;
    default:
        console.log("Parametro invalido");
        break;
}