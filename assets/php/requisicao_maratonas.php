<?php
header('Content-Type: application/json');

try {
    $pdo = new PDO('mysql:host=localhost;dbname=projeto', 'root', '');

    $stmt = $pdo->prepare('SELECT maratonas.ID, maratonas.Nome, maratonas.Descricao, maratonas.Premiacao, maratonas.TempoPartidas, GROUP_CONCAT(maratona_times.ID_Time) AS times FROM maratonas LEFT JOIN maratona_times ON maratonas.ID = maratona_times.ID_Maratona GROUP BY maratonas.ID');
    $stmt->execute();

    if ($stmt->rowCount() >= 1) {
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($results);
    } else {
        echo json_encode('Nenhuma maratona encontrada');
    }
} catch (PDOException $e) {
    echo json_encode('Erro ao conectar ao banco de dados: ' . $e->getMessage());
}
?>
