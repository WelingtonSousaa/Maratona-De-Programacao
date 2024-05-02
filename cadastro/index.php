<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--  Awesome   -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <!--  Normalize -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!--  CSS       -->
    <link rel="stylesheet" href="style.css">
    <!--  Título    -->
    <title>Projeto Integrador I</title>
</head>

<body>
    <div class="container" id="container">
        <div class="form-container escolher-avatar">

            <form>
                <h1>Escolha seu avatar</h1>
                <div class="grade-avatar" id="gradeAvatar">
                    <!-- Imagens adicionadas dinamicamente -->
                </div>
                <button type="submit">Finalizar</button>
            </form>
        </div>

        <div class="form-container criar-conta">

            <form id="formularioCadastro" method="post">
                <h1>Crie sua conta</h1>
                <div>
                    <label for="inputNomeCompleto">Nome Completo:</label>
                    <input type="text" id="inputNomeCompleto" name="nome_completo" placeholder="Fulano de tal">
                </div>
                <div>
                    <label for="imputEmail">Email</label>
                    <input type="email" id="inputEmail" name="email" placeholder="fulanodetal3@gmail.com">
                </div>
                <div>
                    <label for="inputNomeUsuario">Nome de Usuário</label>
                    <input type="text" id="inputNomeUsuario" name="nome_de_usuario" placeholder="juninho321">
                </div>
                <div>
                    <label for="inputSenha">Senha</label>
                    <input type="password" id="inputSenha" name="senha" placeholder="**********">
                </div>
                <div>
                    <input type="checkbox" id="adminCheckbox" name="adminCheckbox">
                    <label for="adminCheckbox">Quero me cadastrar como administrador</label>
                </div>
                <button type="submit">Enviar dados</button>
            </form>

        </div>
        <div class="alternar-container">
            <div class="alternar">
                <div class="alternar-panel alternar-esquerda">
                    <h1>Bem vindo!</h1>
                    <p>Agradecemos por usar nossa plataforma, e estamos ansiosos para acompanhar seus desafios e
                        aprendizados</p>
                    <button class="esconder" id="login">Editar Informações</button>
                </div>
                <div class="alternar-panel alternar-direita">
                    <h1 id="tituloMensagem">Olá Invocador!</h1>
                    <p id="textoMensagem">Crie já sua conta, e venha se aventurar conosco</p>
                    <button class="esconder" id="registrar">Continuar Cadastro</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Incluindo o arquivo JavaScript -->
    <script src="script.js"></script>
</body>

</html>
