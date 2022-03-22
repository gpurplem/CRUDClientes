<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>Cadastrar</title>
</head>

<body>
    <div id="container-1">
        <div id="form-1">

            <!-- Campos a serem preenchidos. -->
            <form id="form" method="POST">

                <!-- Título. -->
                <p class="titulo">Novo Cadastro</p><br>

                <!-- Campos do cadastro: início. -->

                <label for="nome">Nome Completo*:</label>
                <input type="text" id="nome" size="40" required name="nome" maxlength="50" placeholder="Stuart Big"><br><br>

                <label for="nascimento">Nascimento*:</label>
                <input type="text" id="nascimento" size="40" required name="nascimento" maxlength="8" placeholder="00/00/0000"><br><br>

                <label for="cpf">CPF*:</label>
                <input type="text" id="cpf" size="40" required name="cpf" maxlength="11" placeholder="000.000.000-00"><br><br>

                <label for="celular">Celular*:</label>
                <input type="text" id="celular" size="40" required name="celular" maxlength="12" placeholder="+55(00)00000-0000"><br><br>

                <label for="email">E-mail*:</label>
                <input type="text" id="email" size="40" required name="email" maxlength="30" placeholder="@"><br><br>

                <label for="endereco">Endereço*:</label>
                <input type="text" id="endereco" size="40" required name="endereco" maxlength="50"><br><br>

                <label for="observacao">Observação:</label>
                <textarea cols="35" rows="3" id="observacao" maxlength="300" name="observacao"></textarea><br><br>

                <input type="submit" id="submit">
                <a href="../cadastros/paginaCadastros.php"><input type="button" id="submit" value="Cadastros"></a>
                <a href="../editar/paginaEditar.php"><input type="button" id="paginaEditar" value="Editar"></a>

                <!-- Campos do cadastro: fim. -->

                <!-- Executar validação de nomes e enviar dados ao banco. -->
                <script src="validarCampos.js"></script>

            </form>
        </div>
    </div>
</body>

</html>