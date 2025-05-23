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
});