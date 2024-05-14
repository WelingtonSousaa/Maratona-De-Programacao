function pesquisarTime() {
  const inputPesquisa = document.getElementById("inputPesquisa");
  const valorInput = inputPesquisa.value.toLowerCase();
  let times = document.getElementsByClassName("meuTime");
  let semTimes = true;

  for (let i = 0; i < times.length; i++) {
    let nomeTime = times[i]
      .getElementsByClassName("nomeTime")[0]
      .innerHTML.toLowerCase();

    if (nomeTime.includes(valorInput)) {
      times[i].style.display = "flex";
      semTimes = false;
    } else {
      times[i].style.display = "none";
    }
  }
  if (semTimes === true) {
    let ConteinerTimes = document.getElementById("meusTimes");
    ConteinerTimes.innerHTML = `<div id="MsgSemMaratonas"> <p>Nenhum time com o nome "${valorInput}" foi encontrado </p>
    <span class="bi bi-exclamation-triangle-fill"></span>
     </div>`;
  }
}

function sairInfoTime() {
  let gerenciarTimes = document.getElementById("gerenciarTimes");
  let informacoesTime = document.getElementById("informacoesTime");
  gerenciarTimes.removeChild(informacoesTime);
}

function retornaPagGerenciarTimes() {
  let global = document.getElementById("global");

  // Fazendo uma requisição AJAX para obter os dados dos times
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const times = JSON.parse(xhr.responseText);
        let newHtml = `
          <div id="gerenciarTimes">
            <div id="homeEPesquisa">
              <button class="home bi bi-house-door-fill" onclick="retornaPagPrincipal()">home</button>
              <div id="pesquisa">
                <input type="text" id="inputPesquisa" placeholder="pesquisa" />
                <button class="bi bi-search" onclick="pesquisarTime()"></button>
              </div>
              <button class="bi bi-arrow-counterclockwise" id="refazer" onclick="retornaPagGerenciarTimes()"></button>
            </div>
            <div id="meusTimes">
        `;
        times.forEach(time => {
          newHtml += `
            <div class="meuTime" onclick="retornaInformacoesTime(${time.id}, '${time.nome}', '${time.abreviacao}', ${JSON.stringify(time.participantes)}, '${time.escudo}')">
              <div>
                <img src="${time.escudo}" alt="" />
                <p class="nomeTime">${time.nome}</p>
              </div>
              <p>${time.participantes.length}</p>
            </div>
          `;
        });
        newHtml += `
            </div>
          </div>
        `;
        global.innerHTML = newHtml;
      } else {
        console.error('Ocorreu um erro ao obter os times. Status:', xhr.status);
      }
    }
  };

  xhr.open('GET', 'http://localhost/projeto/assets/php/requisicao_times.php');
  xhr.send();
}


function verificaEdicao(event) {
  event.preventDefault();
  let inputNovoNomeTime = document.getElementById("inputNovoNomeTime");
  let inputNovaAbreviacao = document.getElementById("inputNovaAbreviacao");

  if (inputNovoNomeTime.value === "" || inputNovaAbreviacao.value === "") {
    window.alert(
      "A edição apresenta campos vazios, por favor preencha todos os campos"
    );
  } else {
    let resposta = confirm(
      `Você realmente deseja editar o nome do time para '${inputNovoNomeTime.value}' e sua abreviação para ${inputNovaAbreviacao.value}?`
    );

    if (resposta) {
      alert(`Informações do time alteradas com sucesso`);
      retornaPagGerenciarTimes();
    }
  }
}

function sairEdicaoTime() {
  let informacoesTime = document.getElementById("informacoesTime");
  let editarTime = document.getElementById("editarTime");

  informacoesTime.removeChild(editarTime);
}

function retornaInformacoesTime(timeId, timeNome, timeAbreviacao, participantes, escudo) {
  const gerenciarTimes = document.getElementById("gerenciarTimes");
  let newHtml = `<div id="informacoesTime">
    <div class="topoBotoes">
      <button
        class="buttonSair bi bi-x-lg"
        onclick="sairInfoTime()"
      ></button>
    </div>
    <p>${timeNome}<p>
    <div id="informacoesGeraisTime">
      <div id="conteinerEscudo">
        <img src="${escudo}" alt="${timeNome}" />
        <button id="editaEscudo" class="bi bi-brush-fill" onclick="retornaEditaEscudoTime(${timeId})"></button>
      </div>
      <div id="textos">
        <div id="abreviacao">
          <p>Abreviação do time:</p>
          <p>${timeAbreviacao}</p>
        </div>
        <div id="nomeTime"> <!-- Adicionei uma div para o nome do time -->
          <p>Nome do time:</p>
          <p>${timeNome}</p>
        </div>
        <div id="listaParticipantes">
          <p>Nome dos participantes:</p>
          <ul id="listaNomesParticipantes"></ul>
        </div>
        <div id="vitorias">
          <div>
            <p>Vitórias em partidas:</p>
            <p>8</p>
          </div>
          <div>
            <p>Vitorias em maratonas:</p>
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
    <div id="botoesTime">
    <button class="botaoexcluir" onclick="excluirTime(${timeId})">excluir time</button>
      <button class="botaoeditar" onclick="retornaPagEditaTime(${timeId}, '${timeNome}', '${timeAbreviacao}')">editar informações</button>
    </div>
  </div>`;

  gerenciarTimes.innerHTML += newHtml;

  // Realiza uma requisição AJAX para buscar os nomes dos participantes
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const usuarios = JSON.parse(xhr.responseText);
        const listaNomesParticipantes = document.getElementById("listaNomesParticipantes");
        participantes.forEach(participanteId => {
          const participante = usuarios.find(usuario => usuario.id === participanteId);
          if (participante) {
            const nomeParticipante = participante.nome_completo;
            const li = document.createElement("li");
            li.textContent = nomeParticipante;
            listaNomesParticipantes.appendChild(li);
          }
        });
      } else {
        console.error('Erro ao buscar os nomes dos participantes:', xhr.status);
      }
    }
  };
  xhr.open('GET', 'http://localhost/projeto/assets/php/requisicao_usuarios.php');
  xhr.send();
}
function retornaPagEditaTime(timeId, timeNome, timeAbreviacao) {
  const gerenciarTimes = document.getElementById("informacoesTime");
  let newHtml = `<div id="editarTime">
  <div class="topoBotoes">
  <button
    class="buttonSair bi bi-x-lg"
    id="SairInforUsuario"
    onclick="sairEdicaoTime()"
  ></button>
  </div>
    <label for="inputNovoNomeTime">Novo nome do time:</label>
    <input type="text" id="inputNovoNomeTime" value="${timeNome}" /><br />
    <label for="inputNovaAbreviacao">Nova abreviação do time:</label>
    <input type="text" id="inputNovaAbreviacao" value="${timeAbreviacao}" /><br />
    <button onclick="verificaEdicao(${timeId})">Salvar</button>
  </div>`;
  gerenciarTimes.innerHTML += newHtml;
}

function verificaEdicao(timeId) {
  const novoNome = document.getElementById("inputNovoNomeTime").value;
  const novaAbreviacao = document.getElementById("inputNovaAbreviacao").value;

  // Realiza uma solicitação AJAX para atualizar o nome e a abreviação do time no servidor
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Nome e abreviação do time atualizados com sucesso
        console.log(xhr.responseText);
        // Aqui você pode redirecionar o usuário de volta para a página principal ou fazer outra ação
      } else {
        // Erro ao atualizar o nome e a abreviação do time
        console.error('Erro ao atualizar o nome e a abreviação do time:', xhr.status);
      }
    }
  };
  xhr.open("POST", "http://localhost/projeto/assets/php/atualizar_nome_abreviacao_time.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(`time_id=${timeId}&novo_nome=${novoNome}&nova_abreviacao=${novaAbreviacao}`);
}


let idTrocaEscudo = "";
let novoEscudo = "";

function retornaEditaEscudoTime(timeId) {
  // Realiza uma solicitação AJAX para o arquivo PHP que retorna os dados dos escudos
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Dados recebidos com sucesso
        let escudos = JSON.parse(xhr.responseText);
        // Cria o HTML dinamicamente com base nos dados recebidos
        let informacoesTime = document.getElementById("informacoesTime");
        let newHtml = `<div id="editaEscudoTime">
          <div class="topoBotoes">
            <button
              class="buttonSair bi bi-x-lg"
              id="SairInforUsuario"
              onclick="sairEdicaoEscudos()"
            ></button>
          </div>
          <div id="trocaEscudos">`;
        // Loop pelos dados dos escudos
        escudos.forEach(escudo => {
          // Adiciona um evento de clique para cada imagem de escudo
          newHtml += `<img src="${escudo.escudo}" alt="" class="opcaoEscudo" onclick="selecionarEscudo('${escudo.escudo}')"/>`;
        });
        newHtml += `</div>
          <button id="btnSalvarEscudo" class="bi bi-check2-square" onclick="salvarEscudo(${timeId})">
            Salvar
          </button>
        </div>`;
        // Atualiza o HTML do elemento informacoesTime
        informacoesTime.innerHTML += newHtml;
      } else {
        // Ocorreu um erro ao receber os dados
        console.error('Erro ao receber os dados dos escudos:', xhr.status);
      }
    }
  };
  xhr.open("GET", "http://localhost/projeto/assets/php/requisicao_escudos.php", true);
  xhr.send();
}

// Função para selecionar o escudo quando o usuário clica em uma das opções de escudo
function selecionarEscudo(escudo) {
  novoEscudo = escudo;
}

function editaEscudo() {
  if (idTrocaEscudo === "") {
    alert("nenhum escudo foi selecionado");
  } else {
    let resposta = confirm(
      "Voce vai trocar seu escudo para esse, você tem certeza?"
    );
    if (resposta) {
      retornaPagGerenciarTimes();
    }
  }
}

function sairEdicaoEscudos() {
  let informacoesTime = document.getElementById("informacoesTime");
  let editaEscudoTime = document.getElementById("editaEscudoTime");
  informacoesTime.removeChild(editaEscudoTime);
}

function salvarEscudo(timeId) {
  // Verifica se um novo escudo foi selecionado
  if (novoEscudo === "") {
    alert("Nenhum escudo foi selecionado.");
    return;
  }

  // Realiza uma solicitação AJAX para o arquivo PHP que atualiza o escudo no banco de dados
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Escudo atualizado com sucesso
        console.log(xhr.responseText);
      } else {
        // Erro ao atualizar o escudo
        console.error('Erro ao atualizar o escudo:', xhr.status);
      }
    }
  };
  xhr.open("POST", "http://localhost/projeto/assets/php/atualizar_escudo.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(`time_id=${timeId}&novo_escudo=${novoEscudo}`);
}

function excluirTime(timeId) {
  console.log("Excluir time clicado. ID do time:", timeId);

  // Confirmação antes de excluir o time
  if (confirm("Tem certeza de que deseja excluir este time?")) {
    // Realiza uma solicitação AJAX para o arquivo PHP que exclui o time do banco de dados
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Time excluído com sucesso
          console.log("Resposta do servidor:", xhr.responseText);
          // Remover o elemento HTML do time após excluí-lo do banco de dados
          const informacoesTime = document.getElementById(`informacoesTime${timeId}`);
          console.log("Elemento HTML do time:", informacoesTime);
          if (informacoesTime) {
            informacoesTime.remove();
              // Adiciona feedback visual para o usuário
            alert("Time excluído com sucesso!");
          } else {
            console.error("Elemento HTML do time não encontrado.");
          }
        } else {
          // Erro ao excluir o time
          console.error('Erro ao excluir o time:', xhr.status);
          // Adiciona feedback visual para o usuário
          alert("Erro ao excluir o time. Por favor, tente novamente mais tarde.");
        }
      }
    };

    xhr.open("POST", "http://localhost/projeto/assets/php/excluir_time.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(`time_id=${timeId}`);

    retornaPagGerenciarTimes();
  }
}
