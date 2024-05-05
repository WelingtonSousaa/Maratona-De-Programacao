$(document).ready(function () {
    $('#login-form').submit(function (e) {
        e.preventDefault();

        var username = $('#nome_usuario').val();
        var password = $('#senha').val();

        $.ajax({
            url: 'http://localhost/teste/assets/php/login.php',
            method: 'POST',
            data: { nome_usuario: username, senha: password },
            dataType: 'json'
        }).done(function (response) {
            if (response.success) {
                $('#login-message').text('Login bem-sucedido!');
                // prosseguir caso o login seja bem-sucedido.
            } else {
                $('#login-message').text('Nome de usuário ou senha incorretos.');
            }
        });
    });
});
