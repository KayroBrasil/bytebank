let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault(); // evita recarregar a página
    if (!elementoFormulario.checkValidity()) { // verifica se todos os campos foram preenchidos
        alert("Por favor, preencha todos os campos da transação!");
        return; // para a transação
    }
    // #id
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    // .value retorna o valor do campo
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value;

    if (tipoTransacao == "Depósito") {
        saldo += valor;
    } else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    } else {
        alert("Tipo de Transação é inválido!");
        return; // para a transação
    }

    elementoSaldo.textContent = saldo;
    // cria objeto com todos os campos
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset(); // limpa o formulário
});