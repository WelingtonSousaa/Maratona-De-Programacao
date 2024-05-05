<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Proj Int. I | Cadastro</title>
    <link rel="stylesheet" href="assets/css/cadastro.css">
</head>

<body>

    <div class="container">
        <form id="form">
            <div class="form-group">
                <label for="nome_completo">Nome Completo:</label>
                <input type="text" id="nome_completo" name="nome_completo" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="nome_usuario">Nome de Usuário:</label>
                <input type="text" id="nome_usuario" name="nome_usuario" required>
            </div>
            <div class="form-group">
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" required>
            </div>
            <div class="form-group">
                <input type="checkbox" id="administrador" name="administrador" />
                <label for="administrador">Ser administrador!</label>
            </div>
            <button type="submit" class="btn-submit">Enviar Dados</button>
        </form>
        <div id="message"></div>
    </div>

    <script src="assets/js/jQuery/jquery-3.7.1.min.js"></script>
    <script src="assets/js/cadastro.js"></script>
</body>

</html>