<?php

// Verifica se os parâmetros foram recebidos corretamente
if(isset($_POST['time_id']) && isset($_POST['novo_escudo'])) {
    // Conecta ao banco de dados (substitua as credenciais e nome do banco de dados conforme necessário)
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "projeto";
    
    // Cria a conexão
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    // Verifica se a conexão foi estabelecida com sucesso
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }
    
    // Prepara e executa a declaração SQL para atualizar o escudo do time no banco de dados
    $stmt = $conn->prepare("UPDATE times SET escudo = ? WHERE time_id = ?");
    $stmt->bind_param("si", $_POST['novo_escudo'], $_POST['time_id']);
    
    if ($stmt->execute()) {
        // Atualização bem-sucedida
        echo "Escudo atualizado com sucesso.";
    } else {
        // Erro ao atualizar o escudo
        echo "Erro ao atualizar o escudo: " . $conn->error;
    }
    
    // Fecha a conexão com o banco de dados
    $stmt->close();
    $conn->close();
} else {
    // Parâmetros ausentes
    echo "Parâmetros ausentes.";
}
?>
