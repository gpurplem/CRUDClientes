//Controle booleano.
let validado = true;
var campoNome = document.querySelector("#nome");
var campoNascimento = document.querySelector("#nascimento");
var campoCpf = document.querySelector("#cpf");
var campoCelular = document.querySelector("#celular");
var campoEmail = document.querySelector("#email");
var campoEndereco = document.querySelector("#endereco");
var campoObservacao = document.querySelector("#observacao");
var botao = document.querySelector("#submit");

function validaNome() { 
    //Regex para testar string.
    validado = /^[A-Za-z\sÁáÉéÍíÓóÇçÃãÕõ]*$/.test(campoNome.value);

    //Altera cor de fundo caso houver caracter indevido OU campo vazio.
    if (validado == false || campoNome.value.length == 0) {
        campoNome.classList.toggle("valorInvalido", true);
    }
    else {
        campoNome.classList.toggle("valorInvalido", false);
    }
}

function validaOutros() {
    //Nascimento
    if (campoNascimento.value.length != 8) {
        campoNascimento.classList.toggle("valorInvalido", true);
        validado = false;
    }
    else {
        campoNascimento.classList.toggle("valorInvalido", false);
    }

    //Celular
    if (campoCelular.value.length <= 11) {
        campoCelular.classList.toggle("valorInvalido", true);
        validado = false;
    }
    else {
        campoCelular.classList.toggle("valorInvalido", false);
    }

    //Email
    if (campoEmail.value.length <= 3) {
        campoEmail.classList.toggle("valorInvalido", true);
        validado = false;
    }
    else {
        campoEmail.classList.toggle("valorInvalido", false);
    }

    //Endereco
    if (campoEndereco.value.length <= 3) {
        campoEndereco.classList.toggle("valorInvalido", true);
        validado = false;
    }
    else {
        campoEndereco.classList.toggle("valorInvalido", false);
    }

    //Observacao
    if (campoObservacao.value.length > 300) {
        campoObservacao.classList.toggle("valorInvalido", true);
        validado = false;
    }
    else {
        campoObservacao.classList.toggle("valorInvalido", false);
    }
}

function validaCpf(){

    campoCpf.classList.toggle("valorInvalido", false);

    const numeros = campoCpf.value;
    let somaDigitos = 0;
    let dig1, dig2, quociente, resto;

    if(campoCpf.value.length != 11 || !(/^[0123456789]*$/.test(campoCpf.value)))
    {
        campoCpf.classList.toggle("valorInvalido", true);
        validado = false;
        return;
    }
    else {
        campoCpf.classList.toggle("valorInvalido", false);
    }

    //i é índice do último caracter, j tem relação com a fórmula de validação.
    for (let i = 8, j = 2; i >= 0; i--, j++) {
        let dig = numeros[i];
        somaDigitos = somaDigitos + (dig * j);
    }

    //Analisar o primeiro dígito.
    quociente = Math.floor(somaDigitos / 11);
    resto = somaDigitos % 11;
    somaDigitos = 0;

    if (resto < 2) {
        dig1 = 0;
    }
    else if (resto >= 2) {
        dig1 = 11 - resto;
    }

    if (dig1 != numeros[9]) {
        campoCpf.classList.toggle("valorInvalido", true);
        validado = false;
        return;
    }

    //i é índice do último caracter, j tem relação com a fórmula de validação.
    for (let i = 9, j = 2; i >= 0; i--, j++) {
        let dig = numeros[i];
        somaDigitos = somaDigitos + (dig * j);
    }

    //Analisar o segundo dígito.
    quociente = Math.floor(somaDigitos / 11);
    resto = somaDigitos % 11;
    console.log("Resto dig2: " + resto + "e quociente dig2: " + quociente);

    if (resto < 2) {
        dig2 = 0;
    }
    else if (resto >= 2) {
        dig2 = 11 - resto;
    }

    if (dig2 != numeros[10]) {
        campoCpf.classList.toggle("valorInvalido", true);
        validado = false;
        return;
    }
}

//Clicar em "Enviar" inicia este código.
botao.addEventListener("click", function (event) {

    //Impedir que atualize a página como de padrão.
    event.preventDefault();

    validaNome();
    validaOutros();
    validaCpf();

    //JQuery para enviar valores ao inserir.php.
    //Não precisa testar CPF, pois se não validar, entra no return.
    if (validado == true) {
        $(document).ready(function () {
            //Data é o que vai pro servidor.
            $.ajax({
                url: 'inserir.php',
                type: 'POST',
                data: {
                    nome: $('#nome').val(),
                    nascimento: $('#nascimento').val(),
                    cpf: $('#cpf').val(),
                    celular: $('#celular').val(),
                    email: $('#email').val(),
                    endereco: $('#endereco').val(),
                    observacao: $('#observacao').val()
                },
                success: function (data) {                    
                    campoNome.value = "";
                    campoCpf.value = "";
                    campoCelular.value = "";
                    campoEmail.value = "";
                    campoEndereco.value = "";
                    campoNascimento.value = "";
                    campoObservacao.value = "";
                },
                error: function (data) {
                },
            });
        });

        //Limpar campos: Não funciona nenhum método...
        //Update: xampp não estava carregando minhas alterações só com F5... Só funcionou usando ctrl+shift+r.
    }
})