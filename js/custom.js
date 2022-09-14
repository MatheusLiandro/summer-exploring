// Function
const aviso = (msg) => {
  alert(msg)
}

const mostraIdade = () => {
  let span = document.getElementById('txt-idade')
  let campoIdade = document.getElementById('idade')
  span.innerText = campoIdade.value
}

var dataAtual = new Date()

const mostraData = () => {
  let dia = dataAtual.getDay()
  let mes = dataAtual.getMonth() + 1
  let ano = dataAtual.getFullYear()
  let hora = dataAtual.getHours()
  let valor = dia + '/' + mes + '/' + ano + '-' + hora

  document.getElementById('dt-cadastro').value = valor
}

//Preenche o select "estado" com os estados da API do IBGE
const getEstados = () => {
  let api = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
  let select = document.getElementById('estado')

  // Lê a apai através do fecth(),1º then captura os dados, 2º then trata os dados
  fetch(api).then(resposta => resposta.json()).then(json => {
    let options = '<option>Selecione</option>'

    // Percorre o JSON pelos estados do brasil
    for (const index in json) {
      //console.log(json[index].nome)
      options += `<option value =${json[index].sigla}>${json[index].nome}</option>`
    }

    select.innerHTML = options
  })

}
// preenche a aba de cidade mediante a uf escolhida 
const getCidadesByUf = (uf) =>{
  let api = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
  let select = document.getElementById('cidade')

  fetch(api).then(resposta => resposta.json()).then(json =>{
    let options = '<option>Selecione</option>'

    for (const index in json) {
      
      options += `<option value=${json[index].sigla}>${json[index].nome}</option>`
        
      
    }
    select.innerHTML = options
  })

}



// Exemplo laço FOR

/* var meses = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez']
var texto = ''

for (let index = 0; index < meses.length; index++) {
  const element = meses[index];
  texto += element + '<br>'

  document.getElementById('explorar').innerHTML = texto
}
 */

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

// *****Function de execução autómatica*****

// aviso('Tenha um bom dia DAVE')

// document.getElementById('nome').addEventListener('click', function(){
//     aviso(ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh);
// })



getEstados()

mostraIdade()
document.getElementById('idade').addEventListener('change', mostraIdade)

mostraData()


// inicializa animações scroll do AOS 
AOS.init();

// Impede o envio do formulário quando os campos estão invalidos 

// função seta =>

(() => {
  'use strict'

  // Variavel captura as tags <form> que contem a classe 'needs-validation'
  const forms = document.querySelectorAll('.needs-validation')

  // Executa para cada formulário da variavel form
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      // se houver campos invalidos, interrompe o submit
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


document.getElementById('estado').addEventListener('change',function(){
  // this representa o objeto que dispara o valor
  getCidadesByUf(this.value)
})