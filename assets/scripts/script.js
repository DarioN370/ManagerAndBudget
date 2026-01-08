// ADICIONANDO SALDO
// document.getElementById('id'): É como se o JS estivesse esticando o braço e pegando uma peça específica do seu monitor (o HTML).
// .value: Usamos para ler o que está escrito dentro de uma caixa de texto.
// .innerText: Usamos para trocar o texto que aparece para o usuário.

let saldo = 0;
function adicionarSaldo() {
    // Aqui estou pegando o campo input-deposito pelo id dele e guardando na constante inputDeposito para poder usar
    const inputDeposito = document.getElementById('input-deposito');

    //Pegando o VALUE do inputDeposito e transformando em NUMBER, e adicionando ele na constante valorAdicionado
    const valorAdicionado = Number(inputDeposito.value);

    //validacao para saber se o numero é positivo
    if (valorAdicionado > 0) {
        //somando ao saldo, o valor que o usuario digita
        saldo += valorAdicionado

        //Agora vamos atualizar o valor no HTML
        document.getElementById('valor-saldo').innerText = saldo.toFixed(2);

        // Limpamos o campo de texto e damos um feedback
        inputDeposito.value = '';
        document.getElementById('feedback').innerText = "Saldo atualizado com sucesso";
        document.getElementById('feedback').style.color = "#4caf50";
        setTimeout(() => {
            feedback.textContent = "";
        }, 2000);
    } else { //tratando caso o valor seja invalido ou menor que 0
        document.getElementById('feedback').innerText = "Digite um valor válido!";
        document.getElementById('feedback').style.color = "#ff5252";
        setTimeout(() => {
            feedback.textContent = "";
        }, 2000);
    }
}

function verificarCompra() {
    // pegar o valor da peça selecionada 
    const selecao = document.getElementById('select-peca'); //pega a peca
    const precoPeca = Number(selecao.value) // transforma em numero

    //vamos pegar o nome da peca para dar um feedback para o user
    const nomePeca = selecao.options[selecao.selectedIndex].text;

    //vamos verificar se ele selecionou algo, o valor 0 é o padrao
    if(precoPeca == 0){
        feedback.innerText = "Escolha uma peça"
        feedback.style.color = "#ff5252"
    } else if (saldo >= precoPeca) {
        saldo -= precoPeca // Subtrai o valor

        //atualiza o saldo na tela
        document.getElementById('valor-saldo').innerText = saldo.toFixed(2);

        feedback.innerText = `Upgrade contabilizado: ${nomePeca}! 🚀`;
        feedback.style.color = "#4caf50";
    } else {
        const falta = precoPeca - saldo;
        feedback.innerText = `TA DURO DORME! Faltam R$ ${falta.toFixed(2)}`;
        feedback.style.color = "#ff5252";
    }

    // Limpa os feedbacks depois de 2 segundos
    setTimeout(() => {
        feedback.textContent = "";
    }, 2000);
}