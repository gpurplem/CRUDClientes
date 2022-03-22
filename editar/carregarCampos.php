<?PHP
    //Faz a conexão com o banco.
    include "../cadastros/conectarBanco.php";
    
    //Cria instrução a ser executada no banco.
    $instrucao = $conexao->prepare
    (
        "SELECT * FROM tbpessoa WHERE CPF='".$_POST['cpf']."'"
    );
    
    //Executa a instrução feita acima.
    $instrucao->execute();

    //Pegar a linha retornada
    $linha = $instrucao->fetchAll();
    
    //Envia a linha em formato json para uso do jquery. Vira um objeto pro js.
    echo json_encode($linha);
?>