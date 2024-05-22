<?php
session_start(); // Inicia a sessão

// Verifica se o usuário está autenticado
if (isset($_SESSION['authenticated']) && $_SESSION['authenticated'] === true && isset($_SESSION['username'])) {
    // Dados para efetuar conexão com o BD
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "projeto";

    // Conexão com o banco de dados
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar a conexão
    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }

    // Nome de usuário autenticado
    $nome_usuario = $_SESSION['username'];

    // Consulta SQL para buscar o avatar do usuário
    $sql = "SELECT avatar FROM usuarios WHERE nome_usuario='$nome_usuario'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Retorna o avatar do usuário se encontrado
        $row = $result->fetch_assoc();
        $avatar = $row['avatar'];
        echo $avatar;
    } else {
        // Retorna uma mensagem de erro se o avatar não for encontrado
        echo "Avatar não encontrado";
    }

    $conn->close();
} else {
    // Retorna uma mensagem de erro se o usuário não estiver autenticado
    echo "Usuário não autenticado";
}
?>
