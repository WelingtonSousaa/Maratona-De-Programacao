<?
// Dados do Servidor
$servername = "localhost";
$username = "root"; 
$password = "";
$dbname = "proj";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
} 
/*
else {
    die("Conexão com o Banco de Dados efetuada com sucesso!");
}
*/
?>