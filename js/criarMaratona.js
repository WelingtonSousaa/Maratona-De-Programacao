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
  let NewHtml = `<div id="times"></div>`;

  // Botões de voltar e prosseguir
  NewHtml += `
    <div id="espacoBotoes">
      <button class="voltar bi bi-arrow-left" onclick= "apertouVoltar(2)">Voltar</button>
      <button class="prossegir" id="prossegir02">PROSSEGUIR</button>
    </div>
  `;

  conteinerCriaTime.innerHTML = NewHtml;

  // Faz a requisição para obter os times do PHP
  fetch('http://localhost/projeto/assets/php/requisicao_times.php')
    .then(response => response.json())
    .then(data => {
      let timesHtml = '';
      // Itera sobre os times para criar os elementos HTML dinamicamente
      data.forEach(time => {
        timesHtml += `
          <div class="time" id="time${time.id}">
            <img src="${time.escudo}" alt="${time.nome}">
            <p>${time.nome}</p>
            <p>${time.abreviacao}</p>
          </div>
        `;
      });
      // Atualiza o conteúdo do elemento #times com os times dinâmicos
      conteinerCriaTime.querySelector('#times').innerHTML = timesHtml;

      // Adiciona o evento de clique aos times
      adicionarEventoCliqueTimes();
    })
    .catch(error => {
      console.error('Erro ao carregar os times:', error);
    });

  // Adiciona o evento de clique aos botões de prosseguir
  const botaoProsseguir = document.getElementById("prossegir02");
  botaoProsseguir.addEventListener("click", () => {
    // Adicione aqui o código para prosseguir para a próxima etapa, se necessário
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

function adicionarEventoCliqueTimes() {
  const times = document.querySelectorAll('.time');
  times.forEach(time => {
    time.addEventListener('click', () => {
      const estaSelecionado = time.classList.contains("selecionado");
      if (timesSelecionados.length >= 8 && !estaSelecionado) {
        const primeiroSelecionadoId = timesSelecionados.shift();
        document
          .getElementById(primeiroSelecionadoId)
          .classList.remove("selecionado");
        timesSelecionados.push(time.id);
        time.classList.add("selecionado");
      } else if (estaSelecionado) {
        time.classList.remove("selecionado");
        timesSelecionados = timesSelecionados.filter(
          (selecionadoId) => selecionadoId !== time.id
        );
      } else {
        timesSelecionados.push(time.id);
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