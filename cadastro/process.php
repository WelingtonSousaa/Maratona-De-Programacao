<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "proj";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Processamento do formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os dados do formulário
    $nomeCompleto = $_POST["nomeCompleto"];
    // Insere os dados no banco de dados
    $sql = "INSERT INTO usuarios (nome_completo)
    VALUES ('$nomeCompleto')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro criado com sucesso";
    } else {
        echo "Erro ao criar registro: " . $conn->error;
    }
}

// Não é necessário fechar a conexão aqui, o PHP fecha automaticamente quando o script termina
?>
