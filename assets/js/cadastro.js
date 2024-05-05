$('form').submit(function (e) {
    e.preventDefault();

    var u_nomeCompleto = $('#nome_completo').val();
    var u_email = $('#email').val();
    var u_nomeUsuario = $('#nome_usuario').val();
    var u_senha = $('#senha').val();
    var u_administrador = $('#administrador').prop('checked') ? 1 : 0;

    //console.log(u_nomeCompleto);
    //console.log(u_email);
    //console.log(u_nomeUsuario);
    //console.log(u_senha);
    //console.log(u_administrador);

    $.ajax({
        url: 'http://localhost/teste/assets/php/cadastro.php',
        method: 'POST',
        data: { nome_completo: u_nomeCompleto, email: u_email, nome_usuario: u_nomeUsuario, senha: u_senha, administrador: u_administrador },
        dataType: 'json'
    }).done(function (result) {
        $('#nome_completo').val('');
        console.log(result);
    });
});