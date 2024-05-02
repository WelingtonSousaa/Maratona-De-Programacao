<?php
include '../conexao.php';

// Verificar se os dados do formulário foram enviados
if (isset($_POST['nome_completo'], $_POST['email'], $_POST['nome_de_usuario'], $_POST['senha'])) {
    // Dados para inserir na tabela de usuários
    $nomeCompleto = $_POST['nome_completo'];
    $email = $_POST['email'];
    $nomeUsuario = $_POST['nome_de_usuario'];
    $senha = $_POST['senha'];

    // Instrução SQL para inserir dados na tabela de usuários
    $sql = "INSERT INTO usuarios (nome_completo, email, nome_de_usuario, senha) VALUES ('$nomeCompleto', '$email', '$nomeUsuario', '$senha')";

    if ($conn->query($sql) === TRUE) {
        echo "Novo registro inserido com sucesso!";
    } else {
        echo "Erro ao inserir registro: " . $conn->error;
    }
} else {
    echo "Por favor, preencha todos os campos do formulário.";
}

// Fechar conexão
$conn->close();
?>


<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--  Awesome   -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    />
    <!--  Normalize -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <!--  CSS       -->
    <link rel="stylesheet" href="style.css" />
    <!--  Título    -->
    <title>Projeto Integrador I</title>
  </head>


  <body>
    <div id="logo">
      <img src="../administrador/img/OIG1.jpeg" alt="" />
      <p>nome site</p>
    </div>
    <div class="container" id="container">
      <div class="form-container escolher-avatar">
        <form>
          <h1>Escolha seu avatar</h1>
          <div class="grade-avatar" id="gradeAvatar">
            <!-- Imagens adicionadas dinamicamente -->
          </div>

          <button>Finalizar</button>
        </form>
      </div>
      <div class="form-container criar-conta">
        <div id="dadosCadastro">
          <h1>Crie sua conta</h1>
          <div>
            <label for="inputNomeCompleto">Nome Completo:</label>
            <input
              type="text"
              id="inputNomeCompleto"
              name="nomeCompleto"
              placeholder="Fulano de tal dos anzóis"
            />
          </div>
          <div>
            <label for="imputEmail">Email</label>
            <input
              type="email"
              id="inputEmail"
              name="email"
              placeholder="fulanodetal3@gmail.com"
            />
          </div>
          <div>
            <label for="inputNomeUsuario">Nome de Usuário</label>
            <input
              type="text"
              id="inputNomeUsuario"
              name="nomeUsuario"
              placeholder="juninho321"
            />
          </div>
          <div>
            <label for="inputSenha">Senha</label>
            <input
              type="senha"
              id="inputSenha"
              name="senha"
              placeholder="**********"
            />
          </div>
          <button id="submitButton" style="display: none"></button>
        </div>
      </div>
      <div class="alternar-container">
        <div class="alternar">
          <div class="alternar-panel alternar-esquerda">
            <h1>Bem vindo!</h1>
            <p>
              Agradecemos por usar nossa plataforma, e estamos ansiosos para
              acompanhar seus desafios e aprendizados
            </p>
            <button class="esconder" id="login">Editar Informações</button>
          </div>
          <div class="alternar-panel alternar-direita">
            <h1>Olá Invocador!</h1>
            <p>Crie já sua conta, e venha se aventurar conosco</p>
            <button class="esconder" id="registrar">Continuar Cadastro</button>
          </div>
        </div>
      </div>
    </div>
    <div id="user">Já sou usuário</div>
    <script src="script.js"></script>
    <script src="dados.js"></script>
  </body>
</html>
