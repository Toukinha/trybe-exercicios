//exemplo sobre some =============================
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((array) => array === name)

//exemplo sobre every =============================

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 18 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => arr.every((array) => array.age >= minimumAge);
  
//   console.log(verifyAges(people, 18));

//exemplo sobre sort-array-Obj=============================

people.sort((a, b) => a.age - b.age)

// console.log(people);

//exemplo sobre Find=============================


const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  const sla  = numbers.find((number) => number % 3 === 0  && number % 5 == 0)
  return sla;
}

// console.log(findDivisibleBy3And5())



const findNameWithFiveLetters = () => {
  const nome = names.find((name) => name.length === 5)
  return nome
}

// console.log(findNameWithFiveLetters());

const musicas = [
    { id: '31031687', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031685', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    const idfind = musicas.find((musica, index) => musica.id == id)
    return idfind
  }

console.log(findMusic('31031685'))