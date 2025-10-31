const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = 'abaixo do peso'
    } else if (imc < 25) {
      classification = 'peso normal'
    } else if (imc < 30) {
      classification = 'acima do peso'
    } else if (imc < 35) {
      classification = 'obesidade grau I'
    } else if (imc < 41) {
      classification = 'obesidade grau II'
    } else {
      classification = 'obesidade Grau III'
    }
    
    resultado.innerHTML = `IMC: ${imc} (${classification})`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}