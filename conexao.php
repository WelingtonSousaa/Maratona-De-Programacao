<?php
// PHP será utilizado para fazer as conexões necessárias com o Banco de Dados do projeto

// Dados do Servidor
$servername = "localhost";
$username = "root"; 
$password = "";
$dbname = "proj";

// Criar conexão com o servidor
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar se a conexão teve sucesso
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
} 
/* --> Descomentar caso queira testar apenas se a conexão teve sucesso, caso for pra o uso rotineiro do site, deixar comentado.
else {
    die("Conexão com o Banco de Dados efetuada com sucesso!");
}
*/
?>