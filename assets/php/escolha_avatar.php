<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifique se o avatar foi enviado
    if (isset($_POST['avatar'])) {
        $avatar = $_POST['avatar'];

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "projeto";

        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            die("Conexão falhou: " . $conn->connect_error);
        }

        $stmt = $conn->prepare("UPDATE usuarios SET avatar = ? ORDER BY id DESC LIMIT 1");
        $stmt->bind_param("s", $avatar);

        if ($stmt->execute() === TRUE) {
            // Avatar atualizado com sucesso
            $response = array("status" => "success", "message" => "Avatar atualizado com sucesso.");
            echo json_encode($response);
        } else {
            // Erro ao atualizar o avatar
            $response = array("status" => "error", "message" => "Erro ao atualizar o avatar: " . $conn->error);
            echo json_encode($response);
        }

        $stmt->close();
        $conn->close();
    } else {
        // Avatar não foi enviado
        $response = array("status" => "error", "message" => "Avatar não recebido.");
        echo json_encode($response);
    }
} else {
    // Método da requisição não é POST
    $response = array("status" => "error", "message" => "Método de requisição inválido.");
    echo json_encode($response);
}
?>