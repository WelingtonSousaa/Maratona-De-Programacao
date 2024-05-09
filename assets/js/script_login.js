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
                $('#login-message').text('Login bem-sucedido!');
                // prosseguir aq
            } else {
                $('#login-message').text('Nome de usuário ou senha incorretos.');
            }
        });
    });
});
