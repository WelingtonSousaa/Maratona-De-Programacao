<?php
    header('Content-Type: application/json');
    
    $nome_completo = $_POST['nome_completo'];
    $email = $_POST['email'];
    $nome_usuario = $_POST['nome_usuario'];
    $senha = $_POST['senha'];
    $administrador = $_POST['administrador'];

    $pdo = new PDO('mysql:host=localhost; dbname=projeto', 'root', '');

    $stmt = $pdo->prepare('INSERT INTO usuarios (nome_completo, email, nome_usuario, senha, administrador) VALUES (:na, :em, :nu, :se, :adm)');
    $stmt ->bindValue(':na', $nome_completo);
    $stmt ->bindValue(':em', $email);
    $stmt ->bindValue(':nu', $nome_usuario);
    $stmt ->bindValue(':se', $senha);
    $stmt ->bindValue(':adm', $administrador);
    $stmt ->execute();

    if($stmt ->rowCount() >=1){
        echo json_encode('Dados salvos com sucesso!');
    }else{
        echo json_encode('Falha ao salvar os dados');
    }
?>