<?php
header('Content-Type: application/json');

session_start(); // Inicia a sessão

if (isset($_SESSION['authenticated']) && $_SESSION['authenticated'] === true && isset($_SESSION['username'])) {
    // Se o usuário estiver autenticado e o nome de usuário estiver definido na sessão
    $username = $_SESSION['username'];
    echo json_encode(array('success' => true, 'username' => $username));
} else {
    // Se o usuário não estiver autenticado ou o nome de usuário não estiver definido na sessão
    echo json_encode(array('success' => false, 'error' => 'Usuário não autenticado.'));
}
?>
 