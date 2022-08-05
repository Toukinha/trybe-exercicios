let btnSubmit = document.querySelector('#submit')
const validadeName = document.querySelector('#name');
const validadeEmail = document.querySelector('#email');



function validade(event) {
    event.preventDefault();
    let vauleName = validadeName.value;
    if (vauleName.length > 40 || vauleName.length < 10 ) {
        alert('Dados Inválidos')
    }else alert('Dados enviados com sucesso!')
    
}
btnSubmit.addEventListener('click',validade)