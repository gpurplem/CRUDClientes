<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../cadastrar/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>Editar</title>
</head>

<body>
    <div id="container-1">
        <div id="form-1">

            <!-- Campos a serem preenchidos. -->
            <form id="form" method="POST">

                <!-- Título. -->
                <p class="titulo">Editar</p><br>

                <!-- Campo para pesquisar CPF. -->
                <label for="cpf">CPF: <input type="button" id="pesquisarCpf" value="Pesquisar"></label>
                <input type="text" id="cpf" size="40" required name="cpf" maxlength="11" placeholder="11122233344"><br><hr><br>

                <!-- Outros campos: início. -->

                <label for="nome">Nome Completo*:</label>
                <input type="text" id="nome" size="40" required name="nome" maxlength="50" placeholder="Stuart Big"><br><br>

                <label for="nascimento">Nascimento*:</label>
                <input type="text" id="nascimento" size="40" required name="nascimento" maxlength="8" placeholder="11/11/1111"><br><br>             

                <label for="celular">Celular*:</label>
                <input type="text" id="celular" size="40" required name="celular" maxlength="14" placeholder="000111222223333"><br><br>

                <label for="email">E-mail*:</label>
                <input type="text" id="email" size="40" required name="email" maxlength="30" placeholder="@"><br><br>

                <label for="endereco">Endereço*:</label>
                <input type="text" id="endereco" size="40" required name="endereco" maxlength="50"><br><br>

                <label for="observacao">Observação:</label>
                <textarea cols="35" rows="3" id="observacao" maxlength="300" name="observacao"></textarea><br><br>

                <!-- Outros campos: fim. -->

                <!-- Botão para executar as mudanças no banco. -->
                <input type="button" id="paginaEditar" value="Editar">

                <!-- Botão com link para criar novo cadastro. -->
                <a href="../cadastrar/index.php"><input type="button" id="paginaCadastrar" value="Novo"></a>

                <!-- Botão com link para visualizer cadastros. -->
                <a href="../cadastros/paginaCadastros.php"><input type="button" id="submit" value="Cadastros"></a>

                <script src="editar.js"></script>

            </form>
        </div>
    </div>
</body>

</html>