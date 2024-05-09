$("form").submit(function (e) {
  e.preventDefault();

  var u_nomeCompleto = $("#nome_completo").val();
  var u_email = $("#email").val();
  var u_nomeUsuario = $("#nome_usuario").val();
  var u_senha = $("#senha").val();
  var u_administrador = $("#administrador").prop("checked") ? 1 : 0;

  //console.log(u_nomeCompleto);
  //console.log(u_email);
  //console.log(u_nomeUsuario);
  //console.log(u_senha);
  //console.log(u_administrador);

  $.ajax({
    url: "http://localhost/projeto/assets/php/conn_cadastro.php",
    method: "POST",
    data: {
      nome_completo: u_nomeCompleto,
      email: u_email,
      nome_usuario: u_nomeUsuario,
      senha: u_senha,
      administrador: u_administrador,
    },
    dataType: "json",
  }).done(function (result) {
    $("#nome_completo").val("");
    $("#email").val("");
    $("#nome_usuario").val("");
    $("#senha").val("");
    $("#administrador").val("");
    console.log(result);
  });
  escolherAvatar();
});

// Função para criar elementos HTML dos avatares
function criarElementosHTML(avataresHTML) {
  let html = `
    <div class="logo">
      <img src="img/enemy.jpg" alt="" />
      <p>nome do site</p>
    </div>
    <div id="conteinerAvatars">
      <p id="msg">Estamos quase lá, agora vamos escolher o seu avatar</p>
      <div id="Avatars">
        ${avataresHTML}
      </div>
      <div id="spcBotao">
        <button id="finalizar">Finalizar</button>
      </div>
    </div>`;

  // Atualizar o conteúdo do elemento body
  document.body.innerHTML = html;

  // Adicionar evento de clique aos avatares
  $(document).on("click", ".avatar", function() {
    let id = $(this).attr("id");
    $(".avatar").removeClass("selecionado");
    $(this).addClass("selecionado");
    avatarEscolhido = id;
    avatarLinkEscolhido = $(this).find("img").attr("src");
  });

  // Adicionar evento de clique ao botão finalizar
  $("#finalizar").on("click", function() {
    finalizarEscolha();
  });
}

// Solicitação AJAX e criar os elementos HTML dos avatares
function escolherAvatar() {
  $.ajax({
    url: 'http://localhost/projeto/assets/php/requisicao_imagens.php',
    method: 'GET',
    dataType: 'json'
  }).done(function (result) {
    let avataresHTML = result.map(avatar => `
      <div class="avatar" id="${avatar.id}">
        <img src="${avatar.imagem}" alt="" />
      </div>
    `).join('\n');

    criarElementosHTML(avataresHTML);
  });
}

// Função para enviar a escolha do avatar para o Banco de dados
function finalizarEscolha() {
  console.log("Avatar escolhido:", avatarLinkEscolhido);

  $.ajax({
    url: "http://localhost/projeto/assets/php/escolha_avatar.php",
    method: "POST",
    data: {
      avatar: avatarLinkEscolhido
    },
    dataType: "json"
  })
  .done(function (data) {
    console.log("Avatar enviado para o servidor:", data);
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    console.error("Erro ao enviar avatar para o servidor:", errorThrown);
  });
}
