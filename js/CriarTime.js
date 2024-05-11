let usuariosSelecionados = [];
let nomeEquipe = "";
let abreviacaoTime = "";
let escudoSelecionadoLink = "";

function retornaPagConcluido() {
  let conteinerCriaTime = document.getElementById("conteinerCriaTime");
  let NewHtml = `<h2>
  Nossa você chegou até aqui! agora vamos criar o time, clique em
  "Concluir" para criar o time.
</h2>
<div id="espacoBotoes">
  <button class="voltar bi bi-arrow-left" onclick= "apertouVoltar(3)">Voltar</button>
  <button id="concluir" onclick="concluirCriacaoTime()">CONCLUIR</button>
</div>`;
  conteinerCriaTime.innerHTML = NewHtml;
}

function concluirCriacaoTime() {
  // Recupera os valores necessários para a criação do time
  var nome = nomeEquipe;
  var abreviacao = abreviacaoTime;
  var escudo = escudoSelecionadoLink;
  var participantes = usuariosSelecionados;

  // Executa a requisição AJAX
  $.ajax({
    url: "http://localhost/projeto/assets/php/criar_time.php",
    method: "POST",
    data: {
      nome: nome,
      abreviacao: abreviacao,
      escudo: escudo,
      participantes: participantes
    },
    dataType: "json",
    success: function (result) {
      // Exibe uma mensagem de sucesso
      alert(`Time "${nome}" foi criado com sucesso!`);

      // Esvazia as variáveis
      usuariosSelecionados = [];
      nomeEquipe = "";
      abreviacaoTime = "";
      escudoSelecionadoLink = "";

      // Retorna para a tela principal
      retornaPagPrincipal();
    },
    error: function (xhr, status, error) {
      console.error(xhr.responseText); // Exibe o erro no console
      alert("Erro ao criar o time. Por favor, tente novamente."); // Exibe uma mensagem de erro
    }
  });
  escolherEscudo();
}

function retornaPagEscolherEscudo() {
  let conteinerCriaTime = document.getElementById("conteinerCriaTime");
  // Executa a requisição AJAX
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/projeto/assets/php/requisicao_escudos.php", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Manipula os dados JSON retornados
      let escudos = JSON.parse(xhr.responseText);

      // Cria o HTML dinamicamente com as imaagens recebidas
      let escudosHtml = '';
      escudos.forEach(function (escudo, index) {
        escudosHtml += `<div class="escudo" id="escudo${index + 1}"><img src="${escudo.escudo}" alt="" /></div>`;
      });

      let NewHtml = `
        <div id="escudos">
          ${escudosHtml}
        </div>
        <div id="espacoBotoes">
          <button class="voltar bi bi-arrow-left" onclick="apertouVoltar(2)">Voltar</button>
          <button class="prossegir">PROSSEGUIR</button>
        </div>
      `;

      conteinerCriaTime.innerHTML = NewHtml;

      // Seleciona os elementos .escudo e adiciona os ouvintes de evento após a inserção no DOM
      const escudosElementos = document.querySelectorAll(".escudo");
      escudosElementos.forEach((escudo) => {
        escudo.addEventListener("click", () => {
          // Remove a classe 'selecionado' de todos os escudos
          escudosElementos.forEach((escudo) => {
            escudo.classList.remove("selecionado");
          });
          // Adiciona a classe 'selecionado' apenas ao escudo clicado
          escudo.classList.add("selecionado");
          // Obtém o link da imagem do escudo selecionado
          escudoSelecionadoLink = escudo.querySelector("img").src;
        });

      });

      const botaoProsseguir = document.querySelector("#espacoBotoes .prossegir");
      botaoProsseguir.addEventListener("click", () => {
        if (!escudoSelecionadoLink) {
          alert("Por favor, selecione um escudo para prosseguir.");
        } else {
          apertouProsseguir();
          retornaPagConcluido();
        }
      });
    }
  };
  xhr.send();
}

// Verificar se todos os campos estão preenchidos e prosseguir
function verificarPreenchimento(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll("input");
  let todosPreenchidos = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      todosPreenchidos = false;
      input.classList.add("campo-vazio");
    } else {
      input.classList.remove("campo-vazio");
    }
  });

  if (todosPreenchidos) {
    nomeEquipe = document.getElementById("inputNomeTime").value.trim();
    abreviacaoTime = document
      .getElementById("inputAbreviacaoTime")
      .value.trim();
    apertouProsseguir();
    retornaPagEscolherParticipantes();

    //caso o usuario tenha voltando para a tela de dados, recarregue os participantes selecionados
    const usuarios = document.querySelectorAll(".usuario");
    usuarios.forEach((usuario) => {
      const usuarioId = usuario.id;
      if (usuariosSelecionados.includes(usuarioId)) {
        usuario.classList.add("selecionado");
      } else {
        usuario.classList.remove("selecionado");
      }
    });
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function atualizarProgresso(paginaAtual) {
  const spans = document.querySelectorAll("#progresso span");
  spans.forEach((span, index) => {
    if (index < paginaAtual) {
      span.classList.remove("andamento", "proximos");
      span.classList.add("concluido");
    } else if (index === paginaAtual) {
      span.classList.remove("concluido", "proximos");
      span.classList.add("andamento");
    } else {
      span.classList.remove("concluido", "andamento");
      span.classList.add("proximos");
    }
  });
}

// Função executada quando o botão "Prosseguir" é clicado
function apertouProsseguir() {
  const spanAndamento = document.querySelector("#progresso .proximos");
  if (spanAndamento) {
    spanAndamento.classList.remove("proximos");
    spanAndamento.classList.add("andamento");
  }

  const spanConcluido = document.querySelector("#progresso .andamento");
  if (spanConcluido) {
    spanConcluido.classList.remove("andamento");
    spanConcluido.classList.add("concluido");
  }
}

function apertouVoltar(num) {
  let conteinerCriaTime = document.getElementById("conteinerCriaTime");
  switch (num) {
    case 1:
      conteinerCriaTime.innerHTML = dadosPrincipais();
      document.getElementById("inputNomeTime").value = nomeEquipe;
      document.getElementById("inputAbreviacaoTime").value = abreviacaoTime;
      break;

    case 2:
      retornaPagEscolherParticipantes();
      const usuarios = document.querySelectorAll(".usuario");
      usuarios.forEach((usuario) => {
        const usuarioId = usuario.id;
        if (usuariosSelecionados.includes(usuarioId)) {
          usuario.classList.add("selecionado");
        } else {
          usuario.classList.remove("selecionado");
        }
      });
      break;
    case 3:
      retornaPagEscolherEscudo();
      // Verifica se há um escudo selecionado e adiciona a classe 'selecionado' a ele
      const escudoSelecionado = document.querySelector(".escudo.selecionado");
      if (escudoSelecionado) {
        escudoSelecionado.classList.add("selecionado");
      }
      break;

    default:
      retornaPagCriarTime();
  }
  atualizarProgresso(num - 1);
}

function dadosPrincipais() {
  return `<form action="">
  <div> <label for="nomeTime">Nome da Equipe:</label>
   <input type="text" name="nomeTime" id="inputNomeTime" placeholder="Exemplo nome">
 </div>
   <div id="ultimaDiv"> <label for="abreviacaoTime">Abreviação do time:</label>
     <input type="text" name="abreviacaoTime" id="inputAbreviacaoTime" placeholder="EXN">
 </div> 
<button class="prossegir" onclick ="verificarPreenchimento(event)">PROSSEGUIR</button>
 
</form>`;
}

function escolherEscudo() {
  $.ajax({
    url: 'http://localhost/projeto/assets/php/requisicao_escudos.php',
    method: 'GET',
    dataType: 'json'
  }).done(function (result) {
    let avataresHTML = result.map(escudo => `
      <div class="avatar" id="${escudo.id}">
        <img src="${escudo.imagem}" alt="" />
      </div>
    `).join('\n');

    criarElementosHTML(avataresHTML);
  });
}

function criarElementosHTML(participantes) {
  const usuariosHTML = participantes.map(usuario => `
    <div class="usuario" id="usuario${usuario.id}">
      <img src="${usuario.avatar ? usuario.avatar : 'caminho_para_imagem_padrao.jpg'}" alt="Avatar" />
      <p>${usuario.nome_usuario ? usuario.nome_usuario : 'Nome de Usuário'}</p>
    </div>
  `).join('\n');

  // Inserindo os elementos HTML gerados no DOM
  $('#usuarios').html(usuariosHTML);

  // Agora que os elementos foram inseridos, adicione os ouvintes de eventos
  adicionarOuvintes();
}

function adicionarOuvintes() {
  // Seleciona os elementos .usuario e adiciona os ouvintes de evento após a inserção no DOM
  const usuarios = document.querySelectorAll(".usuario");
  usuarios.forEach((usuario) => {
    usuario.addEventListener("click", () => {
      const estaSelecionado = usuario.classList.contains("selecionado");
      const usuarioId = usuario.id.substr(7); // Remove "usuario" do início do ID para obter apenas o número

      if (usuariosSelecionados.includes(usuarioId)) {
        usuario.classList.remove("selecionado");
        usuariosSelecionados = usuariosSelecionados.filter(
          (selecionadoId) => selecionadoId !== usuarioId
        );
      } else {
        if (usuariosSelecionados.length >= 5 && !estaSelecionado) {
          const primeiroSelecionadoId = usuariosSelecionados.shift();
          document
            .getElementById(`usuario${primeiroSelecionadoId}`)
            .classList.remove("selecionado");
        }
        usuariosSelecionados.push(usuarioId);
        usuario.classList.add("selecionado");
      }
    });
  });

  // Adiciona o ouvinte de evento ao botão "Prosseguir"
  const botaoProsseguir = document.getElementById("prossegir02");
  botaoProsseguir.addEventListener("click", () => {
    // Verifica o número de participantes selecionados
    const numeroParticipantes = usuariosSelecionados.length;
    if (numeroParticipantes < 3 || numeroParticipantes > 5) {
      alert("Selecione entre 3 e 5 participantes para sua equipe.");
    } else {
      apertouProsseguir();
      retornaPagEscolherEscudo();

      // caso o usuario tenha voltado, recarrega o escudo selecionado
      const escudoSelecionado = document.getElementById(escudoSelecionadoLink);
      if (escudoSelecionado) {
        escudoSelecionado.classList.add("selecionado");
      }
    }
  });
}

function getParticipantes() {
  return $.ajax({
    url: 'http://localhost/projeto/assets/php/requisicao_usuarios.php',
    method: 'GET',
    dataType: 'json'
  });
}

function retornaPagEscolherParticipantes() {
  let conteinerCriaTime = document.getElementById("conteinerCriaTime");
  conteinerCriaTime.innerHTML = `<div id="usuarios"></div>
    <div id="espacoBotoes">
      <button class="voltar bi bi-arrow-left" onclick= "apertouVoltar(1)">Voltar</button>
      <button class="prossegir" id="prossegir02">PROSSEGUIR</button>
    </div>`;

  // Obtém os participantes e cria os elementos HTML quando a requisição estiver completa
  getParticipantes().done(function (result) {
    criarElementosHTML(result);
  });
}

function retornaPagCriarTime() {
  let global = document.getElementById("global");
  let NewHtml = `<div id="criarTime">
  <div id="conteinerPassos">
    <div>
      <div id="passos">
        <p>Dados</p>
        <p>Participantes</p>
        <p>Escudos</p>
        <p>Concluído</p>
      </div>
      <div id="progresso">
        <span id="span01" class="andamento"></span>
        <span id="span02" class="proximos"></span>
        <span id="span03" class="proximos"></span>
        <span id="span04" class="proximos"></span>
      </div>
    </div>
  </div>
  <div id="conteinerMensagem">
    <p>Cadastre seu time para participar de maratonas incríveis</p>
    <img src="img/criarTime.jpeg" alt="">
  </div>
  <div id="conteinerCriaTime">
    ${dadosPrincipais()}
  </div>
</div>
`;

  global.innerHTML = NewHtml;
}
