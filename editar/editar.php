<?PHP
    //Faz a conexão com o banco.
    include "../cadastros/conectarBanco.php";
    
    //Cria instrução a ser executada no banco.
    $instrucao = $conexao->prepare
    (
        "
        update tbpessoa
        
        set Nome =  '".$_POST['nome']."', Nascimento = '".$_POST['nascimento']."',
            Celular = '".$_POST['celular']."', Email = '".$_POST['email']."',
            Endereco = '".$_POST['endereco']."', Observacao = '".$_POST['observacao']."'
        
        where CPF =  '".$_POST['cpf']."'
        "       
    );
    
    //Executa a instrução feita acima.
    $instrucao->execute();
?>