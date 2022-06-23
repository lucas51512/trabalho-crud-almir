const campos = document.querySelectorAll('[required]');
console.log(campos);

for(campo of campos){
    campo.addEventListener('invalid', event => {
        console.log("Campo Invalido");
    })
}


document.querySelector('form').addEventListener("submit", 
(event) => {
    console.log('Pode enviar Fromulario');
    event.preventDefault();
})