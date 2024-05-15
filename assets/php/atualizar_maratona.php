<?php
// Conectar ao banco de dados (substitua com suas próprias credenciais)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "projeto";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
  die("Erro de conexão: " . $conn->connect_error);
}

// Receber os dados do formulário via POST
$idMaratona = $_POST['id'];
$novoNome = $_POST['novoNome'];
$novaDescricao = $_POST['novaDescricao'];
$novaPremiacao = $_POST['novaPremiacao'];
$novoTempo = $_POST['novoTempo'];

// Atualizar os dados no banco de dados
$sql = "UPDATE maratonas SET Nome='$novoNome', Descricao='$novaDescricao', Premiacao='$novaPremiacao', TempoPartidas='$novoTempo' WHERE ID=$idMaratona";

if ($conn->query($sql) === TRUE) {
  echo "Dados atualizados com sucesso!";
} else {
  echo "Erro ao atualizar os dados: " . $conn->error;
}

$conn->close();
?>
