window.onload = function() {
    const formularioCadastro = document.getElementById('formularioCadastro');
    const tituloMensagem = document.getElementById('tituloMensagem');
    const textoMensagem = document.getElementById('textoMensagem');

    formularioCadastro.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        // Altera o conteúdo do título e do texto da mensagem
        tituloMensagem.textContent = 'Bem vindo!';
        textoMensagem.textContent = 'Deseja cadastrar-se como administrador?';
    });
};
