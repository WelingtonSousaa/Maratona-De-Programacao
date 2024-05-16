<?php
// Verifica se a requisição é do tipo POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se os parâmetros necessários foram enviados
    if (isset($_POST['nome_usuario'])) {
        // Conecta-se ao banco de dados (substitua as credenciais conforme necessário)
        $conexao = new mysqli("localhost", "root", "", "projeto");

        // Verifica se houve erro na conexão
        if ($conexao->connect_error) {
            die("Erro na conexão: " . $conexao->connect_error);
        }

        // Prepara a declaração SQL para excluir o usuário
        $stmt = $conexao->prepare("DELETE FROM usuarios WHERE nome_usuario = ?");

        // Verifica se a preparação da declaração teve sucesso
        if ($stmt) {
            // Associa os parâmetros à declaração
            $stmt->bind_param("s", $_POST['nome_usuario']);

            // Executa a declaração
            if ($stmt->execute()) {
                echo "Usuário excluído com sucesso.";
            } else {
                echo "Erro ao excluir o usuário: " . $stmt->error;
            }

            // Fecha a declaração
            $stmt->close();
        } else {
            echo "Erro na preparação da declaração: " . $conexao->error;
        }

        // Fecha a conexão com o banco de dados
        $conexao->close();
    } else {
        echo "Parâmetros incompletos.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>
