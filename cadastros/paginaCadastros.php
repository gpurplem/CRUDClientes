<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../cadastrar/style.css">
    <title>Cadastros</title>
</head>

<body>

    <div id="container-2">
        <div id="cadastros">
            <div>

                <p class="titulo">Pesquisar e Apagar Cadastros</p><br>
                
                <table class="table">

                    <!-- Cabeçalho da tabela. -->
                    <tr>
                        <th>Nome</th>
                        <th>Nascimento</th>
                        <th>CPF</th>
                        <th>Celular</th>
                        <th>E-mail</th>
                        <th>Endereço</th>
                        <th>Observação</th>
                    </tr>

                    <!-- Corpo da tabela. Dados do banco. -->
                    <tbody id="meus-dados"></tbody>

                </table>

                <!-- Botão com link para criar novo cadastro. -->
                <a href="../cadastrar/index.php"><input type="button" id="paginaCadastrar" value="Novo"></a>

                <!-- Botão com link para editar cadastro. -->
                <a href="../editar/paginaEditar.php"><input type="button" id="paginaEditar" value="Editar"></a>

                <!-- Botão e código para pesquisar cadastro. -->
                <input for="pesquisarCampo" type="button" id="pesquisar" value="Pesquisar">
                <input type="text" id="pesquisarCampo" size="40" name="pesquisarCampo" maxlength="50" placeholder="Nome/E-mail">
                <script src="pesquisar.js"></script>  

                <!-- Botão e código para deletar cadastro. -->
                <input for="pesquisarCampo" type="button" id="deletar" value="Deletar (CPF)">
                <script src="deletar.js"></script>

            </div>
        </div>
    </div>

    <script src="recuperar.js"></script>

</body>

</html>