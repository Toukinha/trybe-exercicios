let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
    personagem: 'Tio Patinhas',
    ortigem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
};

info ['recorrente'] = 'sim'

// console.log('Bem-vinda,', info['personagem']);

for (let index in info){
    console.log(info[index]);
}