let timesSelecionados = [];
let nomeMaratona = "";
let premiacao = "";
let descricaoMaratona = "";
let tempoPartidas = "";

function retornaPagConcluirMaratona() {
  let conteinerCriaMaratona = document.getElementById("conteinerCriaMaratona");
  let NewHtml = `<h2>
  Nossa você chegou até aqui! agora vamos criar a Maratona, clique em
  "Concluir" para criar a maratona.
</h2>
<div id="espacoBotoes">
  <button class="voltar bi bi-arrow-left" onclick= "apertouVoltar(3)">Voltar</button>
  <button id="concluir" onclick="concluirCriacaoMaratona()">CONCLUIR</button>
</div>`;
  conteinerCriaMaratona.innerHTML = NewHtml;
}

function concluirCriacaoMaratona() {
  // Retorna para a tela principal
  retornaPagPrincipal();

  // Exibe a mensagem de confirmação
  alert(`Maratona "${nomeMaratona}" foi criado com sucesso!`);

  // Esvazia as variáveis
  timesSelecionados = [];
  nomeMaratona = "";
  premiacao = "";
  descricaoMaratona = "";
  tempoPartidas = "";
}

// Função para verificar se todos os campos estão preenchidos e prosseguir
function verificarPreenchimentoMaratona(event, num) {
  event.preventDefault();
  if (num === 1) {
    console.log("entrou no if do num=1");
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
      nomeMaratona = document.getElementById("inputNomeMaratona").value.trim();
      descricaoMaratona = document
        .getElementById("inputDescricaoMaratona")
        .value.trim();
      apertouProsseguir();
      let conteinerCriaMaratona = document.getElementById(
        "conteinerCriaMaratona"
      );

      conteinerCriaMaratona.innerHTML = retornaPagPremiacaoETempo();
      document.getElementById("inputPremiacao").value = premiacao;
      document.getElementById("inputTempoPartidas").value = tempoPartidas;
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
  if (num === 2) {
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
      premiacao = document.getElementById("inputPremiacao").value.trim();
      tempoPartidas = document
        .getElementById("inputTempoPartidas")
        .value.trim();
      apertouProsseguir();
      retornaPagEscolherTimes();

      const times = document.querySelectorAll(".times");
      times.forEach((time) => {
        const timeId = time.id;
        if (timesSelecionados.includes(timeId)) {
          time.classList.add("selecionado");
        } else {
          time.classList.remove("selecionado");
        }
      });
    } else {
      alert("Por favor, preencha todos os campos.");
    }
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
  let conteinerCriaMaratona = document.getElementById("conteinerCriaMaratona");
  switch (num) {
    case 1:
      conteinerCriaMaratona.innerHTML = dadosPrincipaisMaratona();
      document.getElementById("inputNomeMaratona").value = nomeMaratona;
      document.getElementById("inputDescricaoMaratona").value =
        descricaoMaratona;
      break;

    case 2:
      conteinerCriaMaratona.innerHTML = retornaPagPremiacaoETempo();
      document.getElementById("inputPremiacao").value = premiacao;
      document.getElementById("inputTempoPartidas").value = tempoPartidas;
      break;

    case 3:
      retornaPagEscolherTimes();
      const times = document.querySelectorAll(".time");
      if (times && times.length > 0) {
        // Verifica se existem elementos .time
        times.forEach((time) => {
          const timeId = time.id;
          if (timesSelecionados.includes(timeId)) {
            time.classList.add("selecionado");
          } else {
            time.classList.remove("selecionado");
          }
        });
      }
      break;

    default:
      retornaPagCriarMaratona();
  }
  atualizarProgresso(num - 1);
}

function dadosPrincipaisMaratona() {
  return `<form action="">
  <div> <label for="nomeMaratona">Nome da maratona:</label>
   <input type="text" name="nomeMaratona" id="inputNomeMaratona" placeholder="Exemplo nome">
 </div>
   <div id="ultimaDiv"> <label for="descricaoMaratona">Descrição da maratona:</label>
     <input type="text" name="descricaoMaratona" id="inputDescricaoMaratona" placeholder="descreva os objetivos e outros dados importantes para a maratona">
 </div> 
<button class="prossegir" onclick ="verificarPreenchimentoMaratona(event, 1)">PROSSEGUIR</button>
 
</form>`;
}

function retornaPagPremiacaoETempo() {
  const NewHtml = `<form action="">
  <div> <label for="premiacao">Premiação da maratona:</label>
   <input type="text" name="premiacao" id="inputPremiacao" placeholder="prêmio">
 </div>
   <div id="ultimaDiv"> <label for="tempoPartidas">Tempo de duração de cada partida em minutos:</label>
     <input type="Number" name="tempoPartidas" id="inputTempoPartidas" placeholder="10">
 </div> 
 <div id="espacoBotoes">
 <button class="voltar bi bi-arrow-left" onclick= "apertouVoltar(1)">Voltar</button>
 <button class="prossegir" onclick ="verificarPreenchimentoMaratona(event, 2)">PROSSEGUIR</button>
</div>
</form>`;

  return NewHtml;
}

function retornaPagEscolherTimes() {
  let conteinerCriaTime = document.getElementById("conteinerCriaMaratona");
  let NewHtml = ` <div id="times">
  <div class="time" id="time01">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome time</p>
    <p>abre.time</p>
  </div>
  <div class="time" id="time02">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome time</p>
    <p>abre.time</p>
  </div>
  <div class="time" id="time03">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome time</p>
    <p>abre.time</p>
  </div>
  <div class="time" id="time04">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome time</p>
    <p>abre.time</p>
  </div>
  <div class="time" id="time05">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome time</p>
    <p>abre.time</p>
  </div>
  <div class="time" id="time06">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome time</p>
    <p>abre.time</p>
  </div>
  <div class="time" id="time07">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome time</p>
    <p>abre.time</p>
  </div>
  <div class="time" id="time08">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome time</p>
    <p>abre.time</p>
  </div>
  <div class="time" id="time09">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome time</p>
    <p>abre.time</p>
  </div>
  <div class="time" id="time10">
    <img
      src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain"
      alt=""
    />
    <p>nome time</p>
    <p>abre.time</p>
  </div>
  
</div>
<div id="espacoBotoes">
  <button class="voltar bi bi-arrow-left" onclick= "apertouVoltar(2)">Voltar</button>
  <button class="prossegir" id="prossegir02">PROSSEGUIR</button>
</div>
  `;
  conteinerCriaTime.innerHTML = NewHtml;

  // Seleciona os elementos .time e adiciona os ouvintes de evento após a inserção no DOM
  const times = document.querySelectorAll(".time");
  times.forEach((time) => {
    const timeId = time.id;
    // Verifica se o time está na lista de times selecionados e aplica a classe 'selecionado' se necessário
    if (timesSelecionados.includes(timeId)) {
      time.classList.add("selecionado");
    }
    // Adiciona um ouvinte de evento para cada time
    time.addEventListener("click", () => {
      const estaSelecionado = time.classList.contains("selecionado");
      if (timesSelecionados.length >= 8 && !estaSelecionado) {
        const primeiroSelecionadoId = timesSelecionados.shift();
        document
          .getElementById(primeiroSelecionadoId)
          .classList.remove("selecionado");
        timesSelecionados.push(timeId);
        time.classList.add("selecionado");
      } else if (estaSelecionado) {
        time.classList.remove("selecionado");
        timesSelecionados = timesSelecionados.filter(
          (selecionadoId) => selecionadoId !== timeId
        );
      } else {
        timesSelecionados.push(timeId);
        time.classList.add("selecionado");
      }
    });
  });

  const botaoProsseguir = document.getElementById("prossegir02");
  botaoProsseguir.addEventListener("click", () => {
    // Verifica o número de times selecionados
    const numeroTimes = timesSelecionados.length;
    if (numeroTimes < 2 || numeroTimes > 8) {
      alert("Selecione entre 2 e 8 Times para sua equipe.");
    } else {
      apertouProsseguir();
      retornaPagConcluirMaratona();

      // caso o usuario tenha voltado, recarrega o escudo selecionado
      const timesSelecionado = document.getElementById(timesSelecionados);
      if (timesSelecionado) {
        timesSelecionado.classList.add("time selecionado");
      }
    }
  });
}

function retornaPagCriarMaratona() {
  let global = document.getElementById("global");
  let NewHtml = `<div id="criarMaratona">
  <div id="conteinerPassos">
    <div>
      <div id="passos">
        <p>Dados</p>
        <p>premiação e tempo</p>
        <p>times</p>
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
    <p>Crie maratonas incríveis e divirta-se</p>
    <img src="img/criarTime.jpeg" alt="">
  </div>
  <div id="conteinerCriaMaratona">
    ${dadosPrincipaisMaratona()}
  </div>
</div>
`;

  global.innerHTML = NewHtml;
}
