function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
 
  // Escreva seu código abaixo.

function createDays() {
  const getWeekDays = document.getElementById('days')

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  for (let index = 0; index < decemberDaysList.length; index++) {
    let decemberDays = decemberDaysList[index];
    let createLiDays = document.createElement('li');

    createLiDays.classList.add('days')
    if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18 || decemberDaysList[index] === 25) {
      createLiDays.classList.add('friday')   
    }
    if (decemberDaysList[index] === 25 || decemberDaysList[index] === 24 || decemberDaysList[index] === 31) {
      createLiDays.classList.add('holiday')
    }
    
    createLiDays.innerText = decemberDays;
    
    getWeekDays.appendChild(createLiDays)
  }

}

createDays()

function buttonTeste(holiday) {
  const divButtonContainer = document.querySelector('.buttons-container');
  
  let buttonHoliday = document.createElement('button');
  buttonHoliday.innerText = holiday
  buttonHoliday.id = 'btn-holiday'
  divButtonContainer.appendChild(buttonHoliday)
}
buttonTeste('Feriado')

let buttonHoliday = document.querySelector('#btn-holiday')

buttonHoliday.addEventListener('click', function () {
  let capClass = document.querySelectorAll('.holiday')
  
  if (capClass[0].style.background != 'white') {
    for (let index = 0; index < capClass.length; index++) {
      capClass[index].style.background = 'white'
  
    }
  }else {
    for (let index = 0; index < capClass.length; index++) {
      capClass[index].style.background = ''
  
    }
  }
})

