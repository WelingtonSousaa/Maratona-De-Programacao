<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "proj";

// Criando uma conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Definindo manualmente os valores dos campos
$nomeCompleto = "Fulano de Tal";
$nomeUsuario = "fulanodetal";
$senha = "minhasenha123";

// Inserindo os dados manualmente
$sql = "INSERT INTO usuarios (nome_completo, nome_usuario, senha)
VALUES ('$nomeCompleto', '$email', '$nomeUsuario', '$senha')";

if ($conn->query($sql) === TRUE) {
    echo "Registro criado com sucesso";
} else {
    echo "Erro ao criar registro: " . $conn->error;
}

// Fechando a conexão
$conn->close();
?>
