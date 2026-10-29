/* Função que irá executar quando clicar no botão btn-gerar. */
function gerarTabuada(){

    //Pega o valor do campo input no HTML
    const numeroInput = document.getElementById('numero-input')

    //converte o texto que veio no HTML para número inteiro
    let numero = parseInt(numeroInput.value)
      
    //Pega o elemento onde a tabuada será exibida no HTML e associa a uma constante
    // (Atenção: no HTML o id gerado anteriormente foi "resultado", não "resultado-aqui")
    const resultadoDiv = document.getElementById('resultado')

    //Limpa o conteúdo anterior no campo onde o resultado será exibido.
    resultadoDiv.innerHTML = ''

    //Adiciona o titulo da tabuada com tag h2 (faltavam crases e a barra no fechamento </h2>)
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`

    for (let i = 1; i <= 10; i++){
        let calculo = numero * i
        // Laço de repetição para gerar tabuada de 1 até 10 (faltavam crases e a variável ${i})
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${calculo}</p>`
    }
}

const btnGerar = document.getElementById('btn-gerar')
btnGerar.addEventListener('click', gerarTabuada)