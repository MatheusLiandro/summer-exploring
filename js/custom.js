// Function
const aviso = (msg)=>{
    alert(msg)
}

const mostraIdade = ()=>{
    let span = document.getElementById('txt-idade')
    let campoIdade = document.getElementById('idade')
    span.innerText = campoIdade.value
}







// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// Function de execução autómatica
// aviso('Tenha um bom dia DAVE')

// document.getElementById('nome').addEventListener('click', function(){
//     aviso(ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh);
// }
// )

mostraIdade()
document.getElementById('idade').addEventListener('change',mostraIdade)


// inicializa animações scroll do AOS 
AOS.init();

// Example starter JavaScript for disabling form submissions if there are invalid fields
// função seta =>
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()