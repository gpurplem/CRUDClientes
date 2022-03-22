var pesquisar = document.querySelector("#pesquisarCpf");
var editar = document.querySelector("#paginaEditar");

//Pegar valores do banco e exibir nos campos para facilitar edição: início.

pesquisar.addEventListener("click", function () {
    $(document).ready(function () {
        $.ajax({
            url: "carregarCampos.php",
            type: "POST",
            dataType: "json",
            data: {
                cpf: $('#cpf').val(),
            },
            success: function (objetoConsulta) {
                //Se não encontrar, retorna undefined.
            
                //Preencher campos com os dados do CPF pesquisado.

                var nome = document.querySelector("#nome");
                var nascimento = document.querySelector("#nascimento");
                var celular = document.querySelector("#celular");
                var email = document.querySelector("#email");
                var endereco = document.querySelector("#endereco");
                var observacao = document.querySelector("#observacao");

                nome.value = objetoConsulta[0].Nome;
                nascimento.value = objetoConsulta[0].Nascimento;
                celular.value = objetoConsulta[0].Celular;
                email.value = objetoConsulta[0].Email;
                endereco.value = objetoConsulta[0].Endereco;
                observacao.value = objetoConsulta[0].Observacao;
            }
        });
    });
})

//Pegar valores do banco e exibir nos campos para facilitar edição: fim.

//Salvar alterações no banco de dados: início.

editar.addEventListener("click", function(){
    $(document).ready(function () {
        //Data é o que vai pro servidor.
        $.ajax({
            url: 'editar.php',
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
                var campoNome = document.querySelector("#nome");
                var campoCelular = document.querySelector("#celular");
                var campoEmail = document.querySelector("#email");
                var campoEndereco = document.querySelector("#endereco");
                var campoNasci = document.querySelector("#nascimento");
                var campoObs = document.querySelector("#observacao");
                campoNome.value = "";
                campoCelular.value = "";
                campoEmail.value = "";
                campoEndereco.value = "";
                campoNasci.value = "";
                campoObs.value = "";
            },
            error: function (data) {
            },
        });
    });
})

//Salvar alterações no banco de dados: fim.