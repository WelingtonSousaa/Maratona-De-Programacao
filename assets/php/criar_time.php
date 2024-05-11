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

    // Prepara os dados recebidos do formulário
    $nome = $_POST["nome"];
    $abreviacao = $_POST["abreviacao"];
    $escudo = $_POST["escudo"];
    $participantes = $_POST["participantes"];

    // Insere os dados na tabela de times
    $sql = "INSERT INTO times (nome, abreviacao, escudo) VALUES ('$nome', '$abreviacao', '$escudo')";

    if ($conn->query($sql) === TRUE) {
        // Obtém o ID do time recém-inserido
        $time_id = $conn->insert_id;

        // Insere os participantes na tabela de participantes
        foreach ($participantes as $participante) {
            $sql_participante = "INSERT INTO participantes (time_id, participante_id) VALUES ($time_id, $participante)";

            if ($conn->query($sql_participante) !== TRUE) {
                die("Erro ao inserir participante: " . $conn->error);
            }
        }

        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Erro ao criar o time: " . $conn->error]);
    }

    // Fecha a conexão com o banco de dados
    $conn->close();
}
?>
