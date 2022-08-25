const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];



const teste = () => grades
    .map((array) => array
        .reduce((acc, curr) => acc + curr))

const studentAverage = (array, grades) => {
    return array.reduce((acc, curr, index) => {
        acc[curr] = teste()[index] / grades[index].length
        return acc
    }, {})
}

console.log(studentAverage(students, grades));

