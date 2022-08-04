//Captura o pai q ira receber o filho a baixo

let bodyVar = document.querySelectorAll('body')[0];

//cria o elemento filho

let mainTitle = document.createElement('h1');

//adiciona oq o filho ira receber / repassar para o html

mainTitle.innerText = 'Exercício 5.2 - JavaScript DOM'

//vincular filho com o pai

bodyVar.appendChild(mainTitle);


//cria a tag main no html 
let mainVar = document.createElement('main');

//vincula o  filho com o pai 

bodyVar.appendChild(mainVar);

//adiciona classe 

mainVar.className = 'main-content';

//cria tag section

let sectionCenterContent = document.createElement('section');

//adciona ao pai q agr é o main

mainTitle.appendChild(sectionCenterContent);

//adiciona classe a section1

sectionCenterContent.className = 'center-content';

// repetiondo paços a acima com outras tags

let paragh = document.createElement('p');

sectionCenterContent.appendChild(paragh);

let sectionLeftContent = document.createElement('section');

let sectionRightContent = document.createElement('section');

sectionLeftContent.className = 'left-content';
sectionRightContent.className = 'right-content';

bodyVar.appendChild(sectionLeftContent);
bodyVar.appendChild(sectionRightContent);

let img =  document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200'

sectionLeftContent.appendChild(img);

let listaNao =document.createElement('ul');
