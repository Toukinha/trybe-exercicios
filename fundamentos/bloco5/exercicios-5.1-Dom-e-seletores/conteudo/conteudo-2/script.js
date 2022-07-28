document.querySelector('#header-container').style.background = 'green'
document.getElementById('footer-container').style.background = 'green'
const teste = document.querySelectorAll('.emergency-tasks div');

document.querySelectorAll('.no-emergency-tasks h3')
[0].style.background = 'black'
document.querySelectorAll('.no-emergency-tasks h3')
[1].style.background = 'black'
for (let index = 0; index < teste.length; index++) {
    document.querySelectorAll('.emergency-tasks')[index].style.background = 'pink'
    document.querySelectorAll('.emergency-tasks h3')[index].style.background = 'purple'
    document.querySelectorAll('.emergency-tasks h3')[index+1].style.background = 'purple'
    document.querySelectorAll('.no-emergency-tasks h3')[index].style.background = 'black'
    document.querySelectorAll('.no-emergency-tasks h3')[index].style.background = 'black'
    document.querySelectorAll('.no-emergency-tasks')[index].style.background = 'yellow'
}

