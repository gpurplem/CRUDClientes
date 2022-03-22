<?php
    include "conectarBanco.php";

    //Gerar objeto de instrução.
    $instrucao = $conexao->prepare("select * from tbpessoa");

    //Executar a instrução no banco.
    $instrucao->execute();

    //Vetor para guardar TODAS as linhas.
    $valores = array();

    //Obter valores do banco. Linha == null sai do laço. Linha é um vetor! Cada passada é uma linha.
    while($linha = $instrucao->fetchAll())
    {
        array_push($valores, $linha);
    }

    //Envia todo o vetor de valores em formato json para uso do jquery. Vira um objeto pro js.
    echo json_encode($valores);
?>