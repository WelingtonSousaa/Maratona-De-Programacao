function recuperarNomeUsuario(callback) {
    $.ajax({
        url: 'http://localhost/projeto/assets/php/recuperar_usuario.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            if (data.success) {
                var username = data.username;
                // Chame a função de retorno de chamada e passe o nome de usuário como argumento
                callback(username);
            } else {
                // Se ocorrer algum erro, chame a função de retorno de chamada com null
                callback(null);
            }
        },
        error: function(xhr, status, error) {
            // Em caso de erro, chame a função de retorno de chamada com null
            callback(null);
        }
    });
  }
  