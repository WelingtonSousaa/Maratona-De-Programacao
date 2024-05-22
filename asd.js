function recuperarAvatar(callback) {
    $.ajax({
        url: 'http://localhost/projeto/assets/php/buscarAvatar.php', // Substitua pelo caminho correto para o arquivo PHP de busca do avatar
        method: 'GET',
        dataType: 'text',
        success: function(avatar) {
            if (avatar !== "") {
                // Se o avatar for encontrado, chama a função de retorno de chamada e passa o avatar como argumento
                callback(avatar);
            } else {
                // Se ocorrer algum erro ou o avatar não for encontrado, chama a função de retorno de chamada com null
                callback(null);
            }
        },
        error: function(xhr, status, error) {
            // Em caso de erro, chama a função de retorno de chamada com null
            callback(null);
        }
    });
}