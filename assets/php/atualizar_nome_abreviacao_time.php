<?php
// Verifica se os dados foram recebidos por meio de uma solicitação POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados enviados pela solicitação AJAX
    $timeId = $_POST['time_id'];
    $novoNome = $_POST['novo_nome'];
    $novaAbreviacao = $_POST['nova_abreviacao'];

    // Conecta-se ao banco de dados (substitua os valores conforme necessário)
    $conexao = new mysqli("localhost", "root", "", "projeto");

    // Verifica se houve algum erro na conexão
    if ($conexao->connect_error) {
        die("Erro de conexão: " . $conexao->connect_error);
    }

    // Prepara a consulta SQL para atualizar o nome e a abreviação do time
    $sql = "UPDATE times SET nome = ?, abreviacao = ? WHERE time_id = ?";

    // Prepara a declaração SQL
    $stmt = $conexao->prepare($sql);

    // Verifica se houve algum erro na preparação da declaração SQL
    if (!$stmt) {
        die("Erro na preparação da declaração SQL: " . $conexao->error);
    }

    // Liga os parâmetros à declaração SQL
    $stmt->bind_param("ssi", $novoNome, $novaAbreviacao, $timeId);

    // Executa a declaração SQL
    if ($stmt->execute()) {
        // Retorna uma mensagem de sucesso
        echo "Nome e abreviação do time atualizados com sucesso.";
    } else {
        // Retorna uma mensagem de erro, se a execução da declaração SQL falhar
        echo "Erro ao atualizar o nome e a abreviação do time: " . $stmt->error;
    }

    // Fecha a declaração e a conexão com o banco de dados
    $stmt->close();
    $conexao->close();
}
?>
