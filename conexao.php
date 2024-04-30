<?php
$bd_host = 'localhost';
$bd_nome = 'proj';
$bd_usuario = 'root';
$db_senha = "";

$mysqli = new mysqli($bd_host, $bd_usuario, $db_senha, $bd_nome);
if ($mysqli->connect_errno) {
    echo "falha ao conectar:(" . $mysqli->connect_errno . ")" . $mysqli->connect_errno;
} else {
    echo "Conectado ao Banco de Dados...";
}
?>