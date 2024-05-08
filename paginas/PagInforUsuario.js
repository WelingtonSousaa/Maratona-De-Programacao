let userName = "nome padrão usuário";
let senha = "senha1234";
let nomeCompleto = "nome padrão completo ";
let imgUsuario = "avatars/1.svg";

function sair(num) {
  let containerUsuario = document.getElementById("conteinerUsuario");
  if (num === 1) {
    let global = document.getElementById("global");
    global.removeChild(containerUsuario);
  } else {
    let ConteinerEdicao = document.querySelectorAll(".edicao");
    ConteinerEdicao.forEach(function (element) {
      containerUsuario.removeChild(element);
    });
  }
}

function retornaEditaNomeUsuario() {
  let containerUsuario = document.getElementById("conteinerUsuario");

  let NewHtml = `<div id="editorUserName" class="edicao">
  <div class="topoBotoes">
    <button class="buttonSair bi bi-x-lg" onclick="sair(2)"></button>
  </div>
  <p>Digite seu novo nome de usuário</p>
  <input type="text" placeholder="novo nome de usuário" id="inputUserName"/>
  <div class="buttons">
    <button id="redefinir" onclick="redefinirUserName()">Redefinir</button>
  </div>
</div>`;
  containerUsuario.innerHTML += NewHtml;
}
function redefinirUserName() {
  let inputUserName = document.getElementById("inputUserName").value;
  let nomeUsuario = document.getElementById("nomeUsuario");
  userName = inputUserName;
  nomeUsuario.textContent = "Usuário: " + userName;
  sair(2);
}

function retornaEditaSenha() {
  let containerUsuario = document.getElementById("conteinerUsuario");

  let NewHtml = `<div id="editorSenha" class="edicao">
  <div class="topoBotoes">
    <button class="buttonSair bi bi-x-lg" onclick="sair(2)"></button>
  </div>
  <p>Digite sua nova senha</p>
  <input type="text" placeholder="nova senha" id="inputSenha"/>
  <div class="buttons">
    <button id="redefinir" onclick="redefinirSenha()">Redefinir</button>
  </div>
</div>`;
  containerUsuario.innerHTML += NewHtml;
}
function redefinirSenha() {
  let inputSenha = document.getElementById("inputSenha").value;
  let Senha = document.getElementById("senha");
  senha = inputSenha;
  Senha.textContent = "Senha: " + senha;
  sair(2);
}

function retornaEditaNomeCompleto() {
  let containerUsuario = document.getElementById("conteinerUsuario");

  let NewHtml = `<div id="editorNomeCompleto" class="edicao">
  <div class="topoBotoes">
    <button class="buttonSair bi bi-x-lg" onclick="sair(2)"></button>
  </div>
  <p>Digite seu nome completo</p>
  <input type="text" placeholder="novo nome completo" id="inputNomeCompleto"/>
  <div class="buttons">
    <button id="redefinir" onclick="redefinirNomeCompleto()">Redefinir</button>
  </div>
</div>`;
  containerUsuario.innerHTML += NewHtml;
}
function redefinirNomeCompleto() {
  let inputNomeCompleto = document.getElementById("inputNomeCompleto").value;
  let NomeCompleto = document.getElementById("nomeCompleto");
  nomeCompleto = inputNomeCompleto;
  NomeCompleto.textContent = "Senha: " + nomeCompleto;
  sair(2);
}

function retornaEditaImgUsuario() {
  let containerUsuario = document.getElementById("conteinerUsuario");

  
  let NewHtml = ` <div id="editorImgUsuario" class="edicao">
  <div class="topoBotoes">
    <button class="buttonSair bi bi-x-lg" onclick="sair(2)"></button>
  </div>
  <p>Escolha seu novo avatar</p>
  <div id="avatas">
    <img src="avatars/1.svg" alt="" class="avatar" />
    <img src="avatars/2.svg" alt="" class="avatar" />
    <img src="avatars/3.svg" alt="" class="avatar" />
    <img src="avatars/4.svg" alt="" class="avatar" />
    <img src="avatars/5.svg" alt="" class="avatar" />
    <img src="avatars/6.svg" alt="" class="avatar" />
    <img src="avatars/7.svg" alt="" class="avatar" />
    <img src="avatars/8.svg" alt="" class="avatar" />
    <img src="avatars/9.svg" alt="" class="avatar" />
    <img src="avatars/10.svg" alt="" class="avatar" />
    <img src="avatars/11.svg" alt="" class="avatar" />
    <img src="avatars/12.svg" alt="" class="avatar" />
    <img src="avatars/13.svg" alt="" class="avatar" />
    <img src="avatars/14.svg" alt="" class="avatar" />
    <img src="avatars/15.svg" alt="" class="avatar" />
    <img src="avatars/16.svg" alt="" class="avatar" />
    <img src="avatars/17.svg" alt="" class="avatar" />
    <img src="avatars/18.svg" alt="" class="avatar" />
    <img src="avatars/19.svg" alt="" class="avatar" />
    <img src="avatars/20.svg" alt="" class="avatar" />
    <img src="avatars/21.svg" alt="" class="avatar" />
    <img src="avatars/22.svg" alt="" class="avatar" />
    <img src="avatars/23.svg" alt="" class="avatar" />
    <img src="avatars/24.svg" alt="" class="avatar" />
    <img src="avatars/25.svg" alt="" class="avatar" />

  </div>
  <div class="buttons">
    <button id="redefinir" onclick="redefinirImgUsuario()">
      Redefinir
    </button>
  </div>
</div>`;
  containerUsuario.innerHTML += NewHtml;

  const avatas = document.querySelectorAll(".avatar");
  avatas.forEach((avatar) => {
    avatar.addEventListener("click", () => {
      avatas.forEach((avatar) => {
        avatar.classList.remove("avatarSelecionado");
      });

      avatar.classList.add("avatarSelecionado");
    });
  });
}

function redefinirImgUsuario() {
  let imgUsuarioSelecionado = document.querySelector(".avatarSelecionado");
  let ImagemUsuario = document.getElementById("imagemUsuario");
  imgUsuario = imgUsuarioSelecionado.getAttribute("src");
  ImagemUsuario.setAttribute("src", imgUsuario); // Use setAttribute para definir o novo src da imagem
  let imagemUsuarioNav = document.getElementById("imgUsuario"); // Selecione a imagem na navegação
  imagemUsuarioNav.setAttribute("src", imgUsuario);
  sair(2);
}
function retornaNovaImgUsuario() {
  return imgUsuario;
}

function RetornaPagInforUsuario() {
  let global = document.getElementById("global");

  let NewHtml = `<div id="conteinerUsuario">
  <div class="topoBotoes">
    <button class="buttonSair bi bi-x-lg" id="SairInforUsuario" onclick="sair(1)"></button>
  </div>
  <div id="dadosUsuario">
    <img
      id="imagemUsuario"
      src="${imgUsuario}"
      alt="Imagem do usuário"
    />
    <button id="editaFotoPerfil" class="bi bi-image" onclick="retornaEditaImgUsuario()"></button>

    <div>
      <p id="nomeUsuario">Usuário: ${userName}</p>
      <button id="buttonEditUserName" class="bi bi-pencil-fill" onclick="retornaEditaNomeUsuario()"></button>
    </div>
    <div>
      <p id="senha">Senha: ${senha}</p>
      <button id="buttonEditSenha" class="bi bi-pencil-fill" onclick="retornaEditaSenha()"></button>
    </div>
    <div>
      <p id="nomeCompleto">Nome completo: ${nomeCompleto}</p>
      <button
        id="buttonEditNome"
        class="bi bi-pencil-fill"
        onclick="retornaEditaNomeCompleto()"
      ></button>
    </div>
  </div>
  <div id="divButtonExcluir">
    <button id="buttonExcluir" class="bi bi-trash3-fill">
      excluir conta
    </button>
  </div>
</div>`;

  global.innerHTML += NewHtml;
}