var deletar = document.querySelector("#deletar");

deletar.addEventListener("click", function(){    
    
    //Solicita deleção por CPF.
    $(document).ready(function () {
        //Data é o que vai pro servidor.
        $.ajax({
            url: 'deletar.php',
            type: 'POST',
            data: {
                pesquisarCampo: $('#pesquisarCampo').val(),
            },
            success: function (data) {

                //Limpar toda a tabela de dados.
                var tabela = document.getElementById("meus-dados");
                var filho = tabela.lastChild;
                while(filho)
                {
                    tabela.removeChild(filho);
                    filho = tabela.lastElementChild
                }
            
                //Exibir na página os valores do banco. (recuperar.js)
                $(document).ready(function () {
                    $.ajax({
                        url: "visualizarCadastros.php",
                        type: "POST",
                        dataType: "json",
                        success: function (objetoConsulta) {
                            //Todos os objetos estão no vetor 0!!!
            
                            //Pegar ponteiro para a porção do HTML que vou modificar.
                            var tabelaDados = document.querySelector("#meus-dados");
                            let i = 0;
                            let cont = 0;
                
                            //Laço para adicionar <=10 linhas.
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
                
                                //Pega os valores de cada campo do objeto JSON. <td>"valores"</td>
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
            },
            error: function (data) {
            },
        });
    });

    
})