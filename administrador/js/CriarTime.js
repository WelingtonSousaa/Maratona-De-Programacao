let usuariosSelecionados = [];
let nomeEquipe = "";
let abreviacaoTime = "";
let escudoSelecionadoId = "";

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
  // Retorna para a tela principal
  retornaPagPrincipal();

  // Exibe a mensagem de confirmação
  alert(`Time "${nomeEquipe}" foi criado com sucesso!`);

  // Esvazia as variáveis
  usuariosSelecionados = [];
  nomeEquipe = "";
  abreviacaoTime = "";
  escudoSelecionadoId = "";
}

function retornaPagEscolherEscudo() {
  let conteinerCriaTime = document.getElementById("conteinerCriaTime");
  let NewHtml = `
    <div id="escudos">
      <div class="escudo" id="escudo01"><img src="img/OIG1.jpeg" alt="" /></div>
      <div class="escudo" id="escudo02"><img src="img/OIG1.jpeg" alt="" /></div>
      <div class="escudo" id="escudo03"><img src="img/OIG1.jpeg" alt="" /></div>
      <div class="escudo" id="escudo04"><img src="img/OIG1.jpeg" alt="" /></div>
      <div class="escudo" id="escudo05"><img src="img/OIG1.jpeg" alt="" /></div>
      <div class="escudo" id="escudo06"><img src="img/OIG1.jpeg" alt="" /></div>
      <div class="escudo" id="escudo07"><img src="img/OIG1.jpeg" alt="" /></div>
    </div>
    <div id="espacoBotoes">
      <button class="voltar bi bi-arrow-left" onclick= "apertouVoltar(2)" >Voltar</button>
      <button class="prossegir">PROSSEGUIR</button>
    </div>
  `;
  conteinerCriaTime.innerHTML = NewHtml;

  // Seleciona os elementos .escudo e adiciona os ouvintes de evento após a inserção no DOM
  const escudos = document.querySelectorAll(".escudo");
  escudos.forEach((escudo) => {
    escudo.addEventListener("click", () => {
      // Remove a classe 'selecionado' de todos os escudos
      escudos.forEach((escudo) => {
        escudo.classList.remove("selecionado");
      });
      // Adiciona a classe 'selecionado' apenas ao escudo clicado
      escudo.classList.add("selecionado");
      // Armazena o ID do escudo selecionado na variável
      escudoSelecionadoId = escudo.id;
    });
  });

  const botaoProsseguir = document.querySelector("#espacoBotoes .prossegir");
  botaoProsseguir.addEventListener("click", () => {
    if (!escudoSelecionadoId) {
      alert("Por favor, selecione um escudo para prosseguir.");
    } else {
      apertouProsseguir();
      retornaPagConcluido();
    }
  });
}

// Função para verificar se todos os campos estão preenchidos e prosseguir
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
      const escudoSelecionado = document.getElementById(escudoSelecionadoId);
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

function retornaPagEscolherParticipantes() {
  let conteinerCriaTime = document.getElementById("conteinerCriaTime");
  let NewHtml = ` <div id="usuarios">
  <div class="usuario" id="usuario01">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome usuario</p>
  </div>
  <div class="usuario" id="usuario02">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome usuario</p>
  </div>
  <div class="usuario" id="usuario03">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome usuario</p>
  </div>
  <div class="usuario" id="usuario04">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome usuario</p>
  </div>
  <div class="usuario" id="usuario05">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome usuario</p>
  </div>
  
</div>
<div id="espacoBotoes">
  <button class="voltar bi bi-arrow-left" onclick= "apertouVoltar(1)">Voltar</button>
  <button class="prossegir" id="prossegir02">PROSSEGUIR</button>
</div>
  `;
  conteinerCriaTime.innerHTML = NewHtml;
  retornouParticipantes = true;

  // Seleciona os elementos .usuario e adiciona os ouvintes de evento após a inserção no DOM
  const usuarios = document.querySelectorAll(".usuario");
  usuarios.forEach((usuario) => {
    usuario.addEventListener("click", () => {
      const estaSelecionado = usuario.classList.contains("selecionado");
      const usuarioId = usuario.id;

      if (usuariosSelecionados.length >= 5 && !estaSelecionado) {
        const primeiroSelecionadoId = usuariosSelecionados.shift();
        document
          .getElementById(primeiroSelecionadoId)
          .classList.remove("selecionado");
        usuariosSelecionados.push(usuarioId);
        usuario.classList.add("selecionado");
      } else if (estaSelecionado) {
        usuario.classList.remove("selecionado");
        usuariosSelecionados = usuariosSelecionados.filter(
          (selecionadoId) => selecionadoId !== usuarioId
        );
      } else {
        usuariosSelecionados.push(usuarioId);
        usuario.classList.add("selecionado");
      }
    });
  });
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
      const escudoSelecionado = document.getElementById(escudoSelecionadoId);
      if (escudoSelecionado) {
        escudoSelecionado.classList.add("selecionado");
      }
    }
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
