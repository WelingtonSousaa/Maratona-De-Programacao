document.getElementById("registrar").addEventListener("click", function(event) {
    // Previne o comportamento padrão de envio do formuláxrio
    event.preventDefault();

    // Chama a função para salvar os dados do cadastro
    salvarDadosCadastro();

    // Simula o envio do formulário oculto
    document.getElementById("submitButton").click();
});

function salvarDadosCadastro() {
    // Captura os valores dos campos de entrada do formulário visível
    var nomeCompleto = document.getElementById("inputNomeCompleto").value;
    var email = document.getElementById("inputEmail").value;
    var nomeUsuario = document.getElementById("inputNomeUsuario").value;
    var senha = document.getElementById("inputSenha").value;

  

    // Exibe os valores capturados no console para verificação
    console.log("Nome Completo:", nomeCompleto);
    console.log("Email:", email);
    console.log("Nome de Usuário:", nomeUsuario);
    console.log("Senha:", senha);
}