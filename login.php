<<<<<<< HEAD:login.html
<!-- <?php
?> -->
=======
<?php
    session_start(); // Inicia a sessão

    include 'conexao.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nome_usuario = $_POST['userName'];
        $senha = $_POST['password'];

        $sql = "SELECT * FROM usuarios WHERE nome_usuario = '$nome_usuario'";
        $result = $conexao->query($sql);
        // Caso senha com criptografia
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if (password_verify($senha, $row['senha'])) {
                $_SESSION['nome_usuario'] = $nome_usuario;
                echo "<script>alert('Login realizado com sucesso!');</script>";
                // Redireciona para a página principal, por exemplo:
                // header("Location: index.php");
            } else {
                echo "<script>alert('Nome de usuário ou senha incorretos. Tente novamente.');</script>";
            }
        } else {
            echo "<script>alert('Nome de usuário ou senha incorretos. Tente novamente.');</script>";
        }
        // Caso senha sem criptografia   
        /*
        if ($result->num_rows > 0) {
          $_SESSION['nome_usuario'] = $nome_usuario;
          echo "<script>alert('Login realizado com sucesso!');</script>";
          // Redireciona para a página principal, por exemplo:
          // header("Location: index.php");
      } else {
          echo "<script>alert('Nome de usuário ou senha incorretos. Tente novamente.');</script>";
      }
      */
    }
?>
>>>>>>> 28d36c1ad7e2743b12ce73ee456c9745a3dfa998:login.php

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CodeMaster</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
    />
    <link rel="stylesheet" href="css/login.css" />
  </head>

  <body>
    <header>
      <div>
        <span class="bi bi-file-earmark-code-fill"></span>
        <p>UFC CODERS</p>
      </div>
    </header>
    <div id="login">
      <h1>Bem-Vindo ao CodeMaster</h1>
      <p id="text">
        Uma plataforma de interação para hospedar competições e desafios de
        programação
      </p>
      <form action="" method="POST" id="form">  <!--adicionei o método POST-->
        <label for="userName"> Nome de usuário</label>
        <p id="msgErroName" hidden></p>
        <input
          name="userName"
          id="userName"
          type="text"
          placeholder="Digite seu Nome de usuário"
        />
        <label for="password"> Senha</label>
        <p id="msgErroPassword" hidden></p>
        <input type="password" name="password" id="password" placeholder="Digite sua senha" />
        <button type="submit" id="entrar">Entrar</button>
        <p>ou</p>
        <a href="cadastro.php">Cadastrar-se</a>
      </form>
    </div>
    <script src="js/login.js"></script>
  </body>
</html>
