// eu fiz 
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS=['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compara = (Gabarito, respostas) => { 
    let count = 0
    for (const key in Gabarito) {
        if (Gabarito[key] === respostas[key]) {
            return 1
        } if (respostas[key] == 'N.A') {
            return 1
        } return -0.5
    }
    return count;
}

const countPoints = (Gabarito, respostas) => {
    const result = compara(Gabarito, respostas)
    console.log(result);
    return result;
}   

func(RIGHT_ANSWERS, STUDENT_ANSWERS)
// gabarito (o gabarito só e posto no script após o termina da minha função)

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// const compareAnswers = (rightAnswer, studentAnswer) => {
//   if (rightAnswer === studentAnswer) {
//     return 1;
//   } if (studentAnswer === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// };

// const countPoints = (rightAnswers, studentAnswers, action) => {
//   let counter = 0;
//   for (let index = 0; index < rightAnswers.length; index += 1) {
//     const actionReturn = action(rightAnswers[index], studentAnswers[index]);
//     counter += actionReturn;
//   }
//   return `Resultado final: ${counter} pontos`;
// };

// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));