$(document).ready(function () {
    $.ajax({
        url: "visualizarCadastros.php",
        type: "POST",
        dataType: "json",
        success: function (objetoConsulta) {
            //Teste para checar como está vindo o objeto: vetor->objetos->campos.
                //Todos os objetos estão no vetor 0.
                //alert(JSON.stringify(objetoConsulta));            
                //alert(objetoConsulta[0][2].Nome);

            //Pegar ponteiro para a porção do HTML que vou modificar.
            var tabelaDados = document.querySelector("#meus-dados");
            let i = 0;
            let cont = 0;

            //Laço para adicionar 10 linhas à tela. Se não houver 10, não dá erro, por isso bastou "<10".
            while (cont < 10 && objetoConsulta[0][i] != undefined) 
            {
                //Cria uma linha e insere na tabela.
                var novaTr = document.createElement("tr");
                var tabelaDadosTr = tabelaDados.appendChild(novaTr);

                //Cria cada coluna da mesma linha.
                var nomeTd = document.createElement("td");
                var nasciTd = document.createElement("td");
                var cpfTd = document.createElement("td");
                var celularTd = document.createElement("td");
                var emailTd = document.createElement("td");
                var enderecoTd = document.createElement("td");
                var obsTd = document.createElement("td");

                //Pega os valores de cada campo do objeto JSON.
                nomeTd.textContent = objetoConsulta[0][i].Nome;
                nasciTd.textContent = objetoConsulta[0][i].Nascimento;
                cpfTd.textContent = objetoConsulta[0][i].CPF;
                celularTd.textContent = objetoConsulta[0][i].Celular;
                emailTd.textContent = objetoConsulta[0][i].Email;
                enderecoTd.textContent = objetoConsulta[0][i].Endereco;
                obsTd.textContent = objetoConsulta[0][i].Observacao;

                //Insere as colunas uma a uma.
                tabelaDadosTr.appendChild(nomeTd);
                tabelaDadosTr.appendChild(nasciTd);
                tabelaDadosTr.appendChild(cpfTd);
                tabelaDadosTr.appendChild(celularTd);
                tabelaDadosTr.appendChild(emailTd);
                tabelaDadosTr.appendChild(enderecoTd);
                tabelaDadosTr.appendChild(obsTd);

                //i controla qual linha do banco (qual objeto). cont limita para 10 registros.
                i++;
                cont++;
            }
        }
    });
});