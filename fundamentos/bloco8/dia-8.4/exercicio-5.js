const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

  const containsA = (array) => {
    return array.reduce((acc, curr) => {
        if (curr.toLowerCase().includes('a')) {
            return acc.concat(curr)
        }
    }, [])
  }

  console.log(containsA(names));