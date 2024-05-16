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
    <button id="redefinir" onclick="confirmarNomeUsuario()">Redefinir</button>
  </div>
</div>`;
  containerUsuario.innerHTML += NewHtml;
}

function confirmarNomeUsuario() {
  const novoNomeUsuario = document.getElementById("inputUserName").value.trim();
  const nomeUsuario = $('#hidden-username').val(); // Obtém o nome de usuário
  // Verifica se foi inserido um novo nome de usuário
  if (novoNomeUsuario) {
    // Faz uma requisição AJAX para atualizar o nome de usuário do usuário
    $.ajax({
      url: 'http://localhost/projeto/assets/php/atualizar_nome_usuario.php',
      type: 'POST',
      data: {
        nome_usuario: nomeUsuario,
        novo_nome_usuario: novoNomeUsuario
      },
      success: function(response) {
        console.log(response);
        // Aqui você pode adicionar alguma lógica para atualizar a interface ou fornecer feedback ao usuário
      },
      error: function(xhr, status, error) {
        console.error("Erro ao atualizar o nome de usuário:", error);
      }
    });
  } else {
    console.error("O novo nome de usuário não pode estar em branco.");
  }
}

function retornaEditaSenha() {
  var username = $('#hidden-username').val();
  console.log("Nome de usuário recuperado:", username);
  let containerUsuario = document.getElementById("conteinerUsuario");

  let NewHtml = `<div id="editorSenha" class="edicao">
  <div class="topoBotoes">
    <button class="buttonSair bi bi-x-lg" onclick="sair(2)"></button>
  </div>
  <p>Digite sua nova senha</p>
  <input type="password" placeholder="nova senha" id="inputSenha"/>
  <div class="buttons">
    <button id="redefinir" onclick="confirmarSenha()">Redefinir</button>
  </div>
</div>`;
  containerUsuario.innerHTML += NewHtml;
}

function confirmarSenha() {
  const novaSenha = document.getElementById("inputSenha").value.trim();
  const nomeUsuario = $('#hidden-username').val(); // Obtém o nome de usuário

  // Verifica se foi inserida uma nova senha
  if (novaSenha && nomeUsuario) {
    // Faz uma requisição AJAX para atualizar a senha do usuário
    $.ajax({
      url: 'http://localhost/projeto/assets/php/atualizar_senha_usuario.php',
      type: 'POST',
      data: {
        nome_usuario: nomeUsuario,
        nova_senha: novaSenha
      },
      success: function(response) {
        console.log(response);
        // Aqui você pode adicionar alguma lógica para atualizar a interface ou fornecer feedback ao usuário
      },
      error: function(xhr, status, error) {
        console.error("Erro ao atualizar a senha:", error);
      }
    });
  } else {
    console.error("A nova senha não pode estar em branco.");
  }
}

function retornaEditaNomeCompleto() {
  let containerUsuario = document.getElementById("conteinerUsuario");

  let NewHtml = `<div id="editorNomeCompleto" class="edicao">
  <div class="topoBotoes">
    <button class="buttonSair bi bi-x-lg" onclick="sair(2)"></button>
  </div>
  <p>Digite seu novo nome completo</p>
  <input type="text" placeholder="novo nome completo" id="inputNomeCompleto"/>
  <div class="buttons">
    <button id="redefinir" onclick="confirmarNomeCompleto()">Redefinir</button>
  </div>
</div>`;
  containerUsuario.innerHTML += NewHtml;
}

function confirmarNomeCompleto() {
  const novoNomeCompleto = document.getElementById("inputNomeCompleto").value.trim();
  const nomeUsuario = $('#hidden-username').val(); // Obtém o nome de usuário

  // Verifica se foi inserido um novo nome completo
  if (novoNomeCompleto && nomeUsuario) {
    // Faz uma requisição AJAX para atualizar o nome completo do usuário
    $.ajax({
      url: 'http://localhost/projeto/assets/php/atualizar_nome_completo_usuario.php',
      type: 'POST',
      data: {
        nome_usuario: nomeUsuario,
        novo_nome_completo: novoNomeCompleto
      },
      success: function(response) {
        console.log(response);
        // Aqui você pode adicionar alguma lógica para atualizar a interface ou fornecer feedback ao usuário
      },
      error: function(xhr, status, error) {
        console.error("Erro ao atualizar o nome completo:", error);
      }
    });
  } else {
    console.error("O novo nome completo não pode estar em branco.");
  }
}

function retornaEditaImgUsuario() {
  let containerUsuario = document.getElementById("conteinerUsuario");

  // Faz uma requisição AJAX para obter a lista de avatares disponíveis
  $.ajax({
    url: 'http://localhost/projeto/assets/php/requisicao_avatars.php',
    type: 'GET',
    dataType: 'json',
    success: function(avatares) {
      let avataresHtml = ''; // Variável para armazenar o HTML dos avatares

      // Itera sobre os avatares obtidos
      avatares.forEach(function(avatar) {
        avataresHtml += `<img src="${avatar.imagem}" alt="" class="avatar" data-avatar="${avatar.imagem}" />`;
      });

      // Cria o HTML dinâmico com os avatares
      let NewHtml = `<div id="editorImgUsuario" class="edicao">
        <div class="topoBotoes">
          <button class="buttonSair bi bi-x-lg" onclick="sair(2)"></button>
        </div>
        <p>Escolha seu novo avatar</p>
        <div id="avatas">${avataresHtml}</div>
        <div class="buttons">
          <button id="redefinir" onclick="confirmarAvatar()">
            Redefinir
          </button>
          
        </div>
      </div>`;

      // Adiciona o HTML dinâmico ao container de usuário
      containerUsuario.innerHTML += NewHtml;

      // Adiciona o evento de clique para selecionar o avatar
      const avatas = document.querySelectorAll(".avatar");
      avatas.forEach((avatar) => {
        avatar.addEventListener("click", () => {
          avatas.forEach((avatar) => {
            avatar.classList.remove("avatarSelecionado");
          });

          avatar.classList.add("avatarSelecionado");
        });
      });
    },
    error: function(xhr, status, error) {
      console.error("Erro ao obter avatares:", error);
    }
  });
}

function confirmarAvatar() {
  const avatarSelecionado = document.querySelector(".avatarSelecionado");
  let nomeUsuario = $('#hidden-username').val();
  console.log(nomeUsuario);
  const novoAvatar = avatarSelecionado ? avatarSelecionado.dataset.avatar : null;

  // Verifica se foi selecionado um novo avatar
  if (novoAvatar) {
    // Faz uma requisição AJAX para atualizar o avatar do usuário
    $.ajax({
      url: 'http://localhost/projeto/assets/php/atualizar_avatar_usuario.php',
      type: 'POST',
      data: {
        nome_usuario: nomeUsuario,
        avatar: novoAvatar
      },
      success: function(response) {
        console.log(response);
        // Aqui você pode adicionar alguma lógica para atualizar a interface ou fornecer feedback ao usuário
      },
      error: function(xhr, status, error) {
        console.error("Erro ao atualizar o avatar:", error);
      }
    });
  } else {
    console.error("Nenhum avatar selecionado.");
  }
}


function RetornaPagInforUsuario() {
  // Obtém o nome de usuário do HTML
  var username = $('#hidden-username').val();

  // Faz uma requisição AJAX para obter os usuários cadastrados
  $.ajax({
    url: 'http://localhost/projeto/assets/php/requisicao_usuarios.php',
    type: 'GET',
    dataType: 'json',
    success: function(usuarios) {
      // Filtra o usuário logado
      var usuarioLogado = usuarios.find(function(usuario) {
        return usuario.nome_usuario === username;
      });

      // Verifica se o usuário logado foi encontrado
      if (usuarioLogado) {
        // Cria o HTML dinâmico com as informações do usuário logado
        let NewHtml = `<div id="conteinerUsuario">
          <div class="topoBotoes">
            <button class="buttonSair bi bi-x-lg" id="SairInforUsuario" onclick="sair(1)"></button>
          </div>
          <div id="dadosUsuario">
            <img
              id="imagemUsuario"
              src="${usuarioLogado.avatar}"
              alt="Imagem do usuário"
            />
            <button id="editaFotoPerfil" class="bi bi-image" onclick="retornaEditaImgUsuario()"></button>
            <div>
              <p id="nomeUsuario">Usuário: ${usuarioLogado.nome_usuario}</p>
              <button id="buttonEditUserName" class="bi bi-pencil-fill" onclick="retornaEditaNomeUsuario()"></button>
            </div>
            <div>
              <p id="senha">Senha: ${usuarioLogado.senha}</p>
              <button id="buttonEditSenha" class="bi bi-pencil-fill" onclick="retornaEditaSenha()"></button>
            </div>
            <div>
              <p id="nomeCompleto">Nome completo: ${usuarioLogado.nome_completo}</p>
              <button
                id="buttonEditNome"
                class="bi bi-pencil-fill"
                onclick="retornaEditaNomeCompleto()"
              ></button>
            </div>
          </div>
          <div id="divButtonExcluir">
            <button id="buttonExcluir" class="bi bi-trash3-fill" onclick="excluirUsuario()">
              excluir conta
            </button>
          </div>
        </div>`;

        // Adiciona o HTML dinâmico ao elemento global
        $("#global").append(NewHtml);
      } else {
        console.error("Usuário não encontrado.");
      }
    },
    error: function(xhr, status, error) {
      console.error("Erro ao obter usuários:", error);
    }
  });
}

function excluirUsuario() {
  const nomeUsuario = $('#hidden-username').val(); // Obtém o nome de usuário
  
  // Exibe um diálogo de confirmação
  const confirmacao = confirm("Tem certeza de que deseja excluir sua conta?");
  
  // Verifica se o usuário confirmou a exclusão
  if (confirmacao) {
    // Faz uma requisição AJAX para excluir o usuário do banco de dados
    $.ajax({
      url: 'http://localhost/projeto/assets/php/excluir_usuario.php',
      type: 'POST',
      data: {
        nome_usuario: nomeUsuario
      },
      success: function(response) {
        console.log(response);
        // Aqui você pode adicionar alguma lógica para lidar com a resposta do servidor após a exclusão
      },
      error: function(xhr, status, error) {
        console.error("Erro ao excluir o usuário:", error);
      }
    });
  } else {
    // O usuário cancelou a exclusão
    console.log("Exclusão cancelada.");
  }
}