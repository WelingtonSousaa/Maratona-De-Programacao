$(document).ready(function () {
    $('#login-form').submit(function (e) {
        e.preventDefault();

        var username = $('#nome_usuario').val();
        var password = $('#senha').val();

        $.ajax({
            url: 'http://localhost/projeto/assets/php/conn_login.php',
            method: 'POST',
            data: { nome_usuario: username, senha: password },
            dataType: 'json'
        }).done(function (response) {
            if (response.success) {
                // Após o login bem-sucedido, recuperar o nome de usuário
                $.ajax({
                    url: 'http://localhost/projeto/assets/php/recuperar_usuario.php',
                    method: 'GET',
                    dataType: 'json',
                    success: function(data) {
                        var username = data.username;
                        console.log("Nome de usuário:", username);
                        // Redirecionar para a página principal ou fazer outras operações
                        $('#login-message').text('Login bem-sucedido!');
                        window.location.href = "http://localhost/projeto/main.php";
                    },
                    error: function(xhr, status, error) {
                        console.error("Erro ao recuperar o nome de usuário:", error);
                    }
                });
            } else {
                $('#login-message').text('Nome de usuário ou senha incorretos.');
            }
        });
    });
});
