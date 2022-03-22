<?PHP
    //Faz a conexão com o banco.
    include "../cadastros/conectarBanco.php";
    
    //Cria instrução a ser executada no banco.
    //Cuidado: .$_POST[] fica global pro script todo.
    $instrucao = $conexao->prepare
    (
        "insert into tbpessoa (Nome, Nascimento, CPF, Celular, Email, Endereco, Observacao) 
        values 
        (
            '".$_POST['nome']."', '".$_POST['nascimento']."', '".$_POST['cpf']."', 
            '".$_POST['celular']."', '".$_POST['email']."', '".$_POST['endereco']."', 
            '".$_POST['observacao']."'
        )"
    );
    
    //Executa a instrução feita acima.
    $instrucao->execute();
?>