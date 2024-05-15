<?php
header('Content-Type: application/json');

try {
    // Obter os dados da requisição POST
    $dadosRequisicao = json_decode(file_get_contents("php://input"), true);

    // Verificar se todos os campos estão presentes
    if (!isset($dadosRequisicao['id'], $dadosRequisicao['novoNome'], $dadosRequisicao['novaDescricao'], $dadosRequisicao['novaPremiacao'], $dadosRequisicao['novoTempo'])) {
        // Se algum campo estiver faltando, retorna uma mensagem de erro
        echo json_encode("Dados incompletos para atualização da maratona.");
        exit;
    }

    // Extrair os dados da requisição
    $id = $dadosRequisicao['id'];
    $novoNome = $dadosRequisicao['novoNome'];
    $novaDescricao = $dadosRequisicao['novaDescricao'];
    $novaPremiacao = $dadosRequisicao['novaPremiacao'];
    $novoTempo = $dadosRequisicao['novoTempo'];

    // Aqui você deve realizar a atualização no banco de dados usando os dados fornecidos

    // Exemplo de conexão com o banco de dados e execução de uma atualização (substitua com sua lógica)
    $pdo = new PDO('mysql:host=localhost;dbname=projeto', 'root', '');
    $stmt = $pdo->prepare('UPDATE maratonas SET Nome = ?, Descricao = ?, Premiacao = ?, TempoPartidas = ? WHERE ID = ?');
    $stmt->execute([$novoNome, $novaDescricao, $novaPremiacao, $novoTempo, $id]);

    // Retorna uma mensagem de sucesso
    echo json_encode("Maratona atualizada com sucesso.");

} catch (Exception $e) {
    // Em caso de erro, retorna uma mensagem de erro
    echo json_encode("Erro ao atualizar a maratona: " . $e->getMessage());
}
?>
