<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "projeto";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Erro na conexão: " . $conn->connect_error);
    }

    $nome = $_POST["nome"];
    $descricao = $_POST["descricao"];
    $premiacao = $_POST["premio"];
    $tempo = $_POST["tempo"];
    $times = $_POST["times"];

    // Converta os IDs dos times para inteiros
    $times = array_map('intval', $times);

    // Lembre-se de fazer as devidas verificações e tratamentos dos dados antes de inseri-los no banco de dados

    $sql = "INSERT INTO maratonas (Nome, Descricao, Premiacao, TempoPartidas) VALUES ('$nome', '$descricao', '$premiacao', '$tempo')";

    if ($conn->query($sql) === TRUE) {
        $id_maratona = $conn->insert_id;

        foreach ($times as $time_id) {
            $time_id = intval($time_id); // Convertendo para inteiro
            $sql_time = "INSERT INTO maratona_times (ID_Maratona, ID_Time) VALUES ($id_maratona, $time_id)";

            if ($conn->query($sql_time) !== TRUE) {
                die("Erro ao inserir times: " . $conn->error);
            }
        }
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Erro ao criar a maratona: " . $conn->error]);
    }

    $conn->close();
}

?>
