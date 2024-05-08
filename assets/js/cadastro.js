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
    url: "http://localhost/projeto/assets/php/cadastro.php",
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
});

let btnSubmitCadastro = document.getElementById("btn-submit-cadastro");

btnSubmitCadastro.addEventListener("click", function () {
  let senha = document.getElementById("senha");
  let nome_completo = document.getElementById("nome_completo");
  let nome_usuario = document.getElementById("nome_usuario");
  let email = document.getElementById("email").value;

  if (
    senha.value === "" ||
    nome_completo.value === "" ||
    nome_usuario.value === "" ||
    email === ""
  ) {
    alert("ops! campos vazios por favor preencha todos");
  } else if (!email.includes("@")) {
    alert("email inválido, por favor coloque um email válido");
  } else {
    let bodyElement = document.body;
    let newHtml = `
  <div class="logo">
      <img src="img/enemy.jpg" alt="" />
      <p>nome do site</p>
    </div>
  <div id="conteinerAvatars">
  <p id="msg">Estamos quase lá, agora vamos esconher o seu avatar</p>

  <div id="Avatars">
    <div class="avatar">
      <img src="img/enemy.jpg" alt="" />
    </div>
    <div class="avatar">
      <img src="img/enemy.jpg" alt="" />
    </div>
    <div class="avatar">
      <img src="img/enemy.jpg" alt="" />
    </div>
    <div class="avatar">
      <img src="img/enemy.jpg" alt="" />
    </div>
    <div class="avatar">
      <img src="img/enemy.jpg" alt="" />
    </div>
  </div>
  <div id="spcBotao">
    <button id="finalizar">Finalizar</button>
  </div>
</div>`;
    bodyElement.innerHTML = newHtml;
  }
});
