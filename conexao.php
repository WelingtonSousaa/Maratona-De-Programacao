<?php
    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'projetointegradori';

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
    if($conexao ->connect_error) {
        echo "Erro ao conectar";
    } else {
        echo "Conexão efetuada com sucesso!";
    }

?>