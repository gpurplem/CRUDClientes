<?PHP
    //Faz a conexão com o banco.
    include "conectarBanco.php";
    
    //Cria instrução a ser executada no banco.
    $instrucao = $conexao->prepare
    (
        "DELETE FROM tbpessoa WHERE CPF='".$_POST['pesquisarCampo']."'"
    );
    
    //Executa a instrução feita acima.
    $instrucao->execute();
?>