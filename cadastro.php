
<?php
  include 'conexao.php';

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $nome = $_POST['name'];
      $email = $_POST['email'];
      $nome_usuario = $_POST['userName'];
      // $senha = $_POST['password']; // Senha sem criptografia
      $senha = password_hash($_POST['password'], PASSWORD_DEFAULT); // Senha criptografada
  
      $sql = "INSERT INTO usuarios (nome_completo, email, nome_usuario, senha) VALUES ('$nome', '$email', '$nome_usuario', '$senha')";
  
      if ($conexao->query($sql) === TRUE) {
          echo "Cadastro realizado com sucesso!";
      } else {
          echo "Erro ao cadastrar: " . $conexao->error;
          //teste 
          echo "testando"
      }
  }
  ?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeMaster</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="css/cadastro.css">
    <link rel="stylesheet" href="css/login.css">
</head>

<body>
    <header>
        <div>
            <span class="bi bi-file-earmark-code-fill"></span>
            <p>UFC CODERS</p>
        </div>
        <a href="login.php" id="volta">Entrar</a>
    </header>
    <div id="login">
        <h1>Crie sua conta</h1>

        <form action="cadastro.php" method="POST" id="form">
            <label for="name">Nome completo</label>
            <p id="msgErroName" hidden></p>
            <input name="name" type="text" placeholder="Digite seu Nome completo" id="fullName" />

            <label for="email">Email</label>
            <p id="msgErroEmail" hidden></p>
            <input type="email" name="email" id="email" placeholder="Digite seu email" />

            <label for="userName">Nome de usuário</label>
            <p id="msgErroUserName" hidden></p>
            <input name="userName" type="text" id="userName" placeholder="Digite um nome de usuário" />

            <label for="password">Senha</label>
            <p id="msgErroPassword" hidden></p>
            <input type="password" name="password" id="password" placeholder="Digite uma senha" />

            <button type="submit" id="entrar" onclick="RevisaComponentes(event)">Realizar cadastro</button>
        </form>
    </div>
    <script src="./js/cadastro.js"></script>
</body>
</html>
