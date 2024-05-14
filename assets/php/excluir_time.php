<?php
// Verifica se os dados foram enviados via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conexão com o banco de dados (substitua pelas suas credenciais)
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "projeto";

    // Cria a conexão
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica a conexão
    if ($conn->connect_error) {
        die("Erro na conexão: " . $conn->connect_error);
    }

    // Obtém o ID do time a ser excluído
    $time_id = $_POST["time_id"];

    // Remove os participantes do time
    $sql_delete_participantes = "DELETE FROM participantes WHERE time_id = $time_id";
    if ($conn->query($sql_delete_participantes) !== TRUE) {
        die("Erro ao excluir participantes: " . $conn->error);
    }

    // Remove o time da tabela de times
    $sql_delete_time = "DELETE FROM times WHERE time_id = $time_id";
    if ($conn->query($sql_delete_time) === TRUE) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Erro ao excluir o time: " . $conn->error]);
    }

    // Fecha a conexão com o banco de dados
    $conn->close();
}
?>
