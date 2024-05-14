<?php
    header('Content-Type: application/json');

    $pdo = new PDO('mysql:host=localhost; dbname=projeto', 'root', '');

    $stmt = $pdo->prepare('SELECT times.nome, times.abreviacao, times.time_id AS time_id, times.escudo AS escudo, usuarios.id AS participante_id FROM participantes
                            INNER JOIN usuarios ON participantes.participante_id = usuarios.id
                            INNER JOIN times ON participantes.time_id = times.time_id');
    $stmt ->execute();

    if($stmt ->rowCount() >=1){
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Organize os resultados por time
        $times = [];
        foreach ($results as $row) {
            $time_id = $row['time_id'];
            // Se o time ainda não existe no array $times, crie um novo
            if (!isset($times[$time_id])) {
                $times[$time_id] = [
                    'nome' => $row['nome'],
                    'abreviacao' => $row['abreviacao'],
                    'id' => $time_id,
                    'escudo' => $row['escudo'],
                    'participantes' => []
                ];
            }
            // Adicione o ID do participante ao time correspondente
            $times[$time_id]['participantes'][] = $row['participante_id'];
        }

        // Converta o array associativo em array indexado
        $times = array_values($times);

        echo json_encode($times);
    } else {
        echo json_encode('Nenhum participante encontrado');
    }
?>
