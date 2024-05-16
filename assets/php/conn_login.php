<?php
header('Content-Type: application/json');

// Dados para efetuar conexão com o BD
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "projeto"; 

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

$nome_usuario = $_POST['nome_usuario'];
$senha = $_POST['senha'];

// Consulta SQL para verificar se o usuário e a senha correspondem
$sql = "SELECT * FROM usuarios WHERE nome_usuario='$nome_usuario' AND senha='$senha'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Autenticação bem-sucedida
    session_start(); // Inicia a sessão
    $_SESSION['authenticated'] = true; // Define uma variável de sessão para indicar autenticação
    $_SESSION['username'] = $nome_usuario; // Armazena o nome de usuário na sessão
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false));
}

$conn->close();
?> 
