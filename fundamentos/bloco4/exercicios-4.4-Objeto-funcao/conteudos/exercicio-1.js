let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
    bestInTheWorld: {
        winner:[2006, 2007, 2008, 2009, 2010, 2018]
    }
};

player ['fullName'] = player['name']+ ' ' + player['lastName'];


console.log('A jogadora', player['fullName'], 'tem',player['age'], 'anos de idade');
console.log('A jogadora', player['fullname'], 'foi eleita a melhor do mundo por', player['bestInTheWorld']['winner'].length, 'vezes');
console.log('A jogdadora possui', player['medals']['golden'],'medalhas de ouro e',player['medals']['silver'], 'medalhas de silver');