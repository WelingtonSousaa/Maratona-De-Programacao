<?php
// Inclui o arquivo de conexão com o banco de dados
require_once 'http://localhost/maratona/conexao.php';

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebe os dados do formulário
    $nomeCompleto = $_POST['nomeCompleto'];
    $email = $_POST['email'];
    $nomeUsuario = $_POST['nomeUsuario'];
    $senha = $_POST['senha'];
    
    // Insere os dados na tabela de usuários
    $query = "INSERT INTO usuarios (nome_completo, nome_de_usuario, senha) VALUES ('$nomeCompleto', '$nomeUsuario', '$senha')";
    
    if ($mysqli->query($query)) {
        echo "Registro inserido com sucesso!";
    } else {
        echo "Erro ao inserir registro: " . $mysqli->error;
    }
} else {
    // Se o formulário não foi enviado, redireciona para uma página de erro ou exibe uma mensagem de erro
    echo "O formulário não foi enviado!";
}
?>
