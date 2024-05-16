// Outros scripts

function pesquisarMaratona() {
  const inputPesquisa = document.getElementById("inputPesquisa");
  const valorInput = inputPesquisa.value.toLowerCase();
  let maratonas = document.getElementsByClassName("minhaMaratona");
  let semMaratonas = true;

  for (let i = 0; i < maratonas.length; i++) {
    let nomeMaratona = maratonas[i]
      .getElementsByClassName("nomeMaratona")[0]
      .innerHTML.toLowerCase();

    if (nomeMaratona.includes(valorInput)) {
      maratonas[i].style.display = "flex";
      semMaratonas = false;
    } else {
      maratonas[i].style.display = "none";
    }
  }
  if (semMaratonas === true) {
    let informa = document.getElementById("informa");
    informa.style.display = "none";
    ConteinerMaratonas = document.getElementById("minhasMaratonas");
    ConteinerMaratonas.innerHTML = `<div id="MsgSemMaratonas"> <p>Nenhuma maratona com o nome "${valorInput}" foi encontrada </p>
    <span class="bi bi-exclamation-triangle-fill"></span>
     </div>`;
  }
}

function exibirInformacoesMaratona(maratona) {
  let gerenciarMaratona = document.getElementById("gerenciarMaratona");
  let newHtml = `
  <div id="informacoesMaratona">
    <div class="topoBotoes">
      <button class="buttonSair bi bi-x-lg" onclick="sairInfoMaratona()"></button>
    </div>
    <div id="conteinerNome">
      <p>${maratona.Nome}</p>
    </div>
    <div id="informacoesGeraisMaratona">
      <div>
        <p>Premiação:</p>
        <p class="texto">${maratona.Premiacao}</p>
      </div>
      <div>
        <p>Tempo por partida:</p>
        <p class="texto">${maratona.TempoPartidas} min</p>
      </div>
      <div>
        <p>Descrição da maratona:</p>
        <p class="texto">${maratona.Descricao}</p>
      </div>
      <div id="listaTimes">
        <p>Nome das equipes participantes:</p>
        <ul>
        ${maratona.times.split(',').map(time => `<li>${time.trim()}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div id="botoesMaratona">
      <button class="botaoMaratona">Iniciar Maratona</button>
      <button class="botaoeditar" onclick="retornaPagEditaMaratona(${maratona.ID})">editar informações</button>
    </div>
  </div>`;

  gerenciarMaratona.innerHTML += newHtml;
}

function selecionarMaratona(maratonaID) {
  const id = maratonaID.getAttribute("data-id");
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        try {
          const maratonas = JSON.parse(xhr.responseText);
          const maratonaSelecionada = maratonas.find(maratona => maratona.ID === parseInt(id));
          if (maratonaSelecionada) {
            exibirInformacoesMaratona(maratonaSelecionada);
            console.log('Dados da maratona:', maratonaSelecionada);
          } else {
            console.error('Maratona não encontrada.');
          }
        } catch (error) {
          console.error('Erro ao analisar os dados da maratona:', error);
        }
      } else {
        console.error('Ocorreu um erro ao obter os dados da maratona. Status:', xhr.status);
      }
    }
  };

  xhr.open('GET', 'http://localhost/projeto/assets/php/requisicao_maratonas.php');
  xhr.send();
}



function sairInfoMaratona() {
  let gerenciarMaratona = document.getElementById("gerenciarMaratona");
  let informacoesMaratona = document.getElementById("informacoesMaratona");
  gerenciarMaratona.removeChild(informacoesMaratona);
}


function retornaPagGerenciarMaratona() {
  let global = document.getElementById("global");

  // Fazendo uma requisição AJAX para obter os dados das maratonas
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const maratonas = JSON.parse(xhr.responseText);
        let maratonasHtml = '';
        maratonas.forEach(maratona => {
          // Calcula a quantidade de times em cada maratona
          const quantidadeTimes = maratona.times.split(',').length;

          maratonasHtml += `
  <div class="minhaMaratona" data-id="${maratona.ID}" onclick="selecionarMaratona(this);">
    <p class="nomeMaratona">${maratona.Nome}</p>
    <p class="quantTimes">${quantidadeTimes}</p>
  </div>
`;
        });

        let newHtml = ` <div id="gerenciarMaratona">
          <div id="homeEPesquisa">
            <button class="home bi bi-house-door-fill" onclick="retornaPagPrincipal()">home</button>
            <div id="pesquisa">
              <input type="text" id="inputPesquisa" placeholder="pesquisa" />
              <button class="bi bi-search" onclick="pesquisarMaratona()"></button>
            </div>
            <button class="bi bi-arrow-counterclockwise" id="refazer" onclick="retornaPagGerenciarMaratona()"></button>
          </div>
          <div id="informa">
            <p>nome</p>
            <p>quantidade de times</p>
          </div>
          <div id="minhasMaratonas">
            ${maratonasHtml}
          </div>
        </div>`;

        global.innerHTML = newHtml;
      } else {
        console.error('Ocorreu um erro ao obter as maratonas. Status:', xhr.status);
      }
    }
  };

  xhr.open('GET', 'http://localhost/projeto/assets/php/requisicao_maratonas.php'); // Arquivo local simulando resposta do banco de dados
  xhr.send();
}


function retornaPagEditaMaratona(idMaratona) {
  console.log('ID da Maratona:', idMaratona);
  let informacoesMaratona = document.getElementById("informacoesMaratona");
  let newHtml = `<div id="editarMaratona">
  <div class="topoBotoes">
    <button
      class="buttonSair bi bi-x-lg"
      id="SairInforUsuario"
      onclick="sairEdicaoMaratona()"
    ></button>
  </div>
  <form action="">
    <div>
      <label for="NovoNomeMaratona">Novo nome da maratona:</label>
      <input type="text" name="NovoNomeMaratona" id="inputNovoNomeMaratona" />
    </div>
    <div>
      <label for="NovaDescricao">Nova descrição:</label>
      <input type="text" name="NovaDescricao" id="inputNovaDescricao" />
    </div>
    <div>
      <label for="NovaPremiacao">Nova Premiação:</label>
      <input type="text" name="NovaPremiacao" id="inputNovaPremiacao" />
    </div>
    <div>
      <label for="NovoTempo">Novo tempo das partidas:</label>
      <input type="Number" name="NovaTempo" id="inputNovoTempo" min="0" />
    </div>
    <button onclick="salvarEdicaoMaratona(${idMaratona})">Editar</button>
  </form>
</div>`;

  informacoesMaratona.innerHTML += newHtml;
}

function sairEdicaoMaratona() {
  // Limpa os campos de entrada
  document.getElementById("inputNovoNomeMaratona").value = "";
  document.getElementById("inputNovaDescricao").value = "";
  document.getElementById("inputNovaPremiacao").value = "";
  document.getElementById("inputNovoTempo").value = "";

  let informacoesMaratona = document.getElementById("informacoesMaratona");
  let editarMaratona = document.getElementById("editarMaratona");

  informacoesMaratona.removeChild(editarMaratona);
}

function salvarEdicaoMaratona(idMaratona) {
  // Obter os valores dos campos de edição
  const novoNome = document.getElementById("inputNovoNomeMaratona").value;
  const novaDescricao = document.getElementById("inputNovaDescricao").value;
  const novaPremiacao = document.getElementById("inputNovaPremiacao").value;
  const novoTempo = document.getElementById("inputNovoTempo").value;

  // Verificar se todos os campos estão preenchidos
  if (!novoNome || !novaDescricao || !novaPremiacao || !novoTempo) {
    alert("Todos os campos devem ser preenchidos.");
    return;
  }

  // Montar o objeto com os dados da edição
  const dadosEdicao = {
    id: idMaratona,
    novoNome: novoNome,
    novaDescricao: novaDescricao,
    novaPremiacao: novaPremiacao,
    novoTempo: novoTempo
  };

  // Enviar os dados para o servidor via AJAX
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Exibir mensagem de sucesso
        alert(xhr.responseText);
        // Atualizar a página para refletir as alterações
        retornaPagGerenciarMaratona();
      } else {
        // Exibir mensagem de erro
        alert('Erro ao salvar as alterações.');
      }
    }
  };

  xhr.open('POST', 'http://localhost/projeto/assets/php/atualizar_maratona.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(dadosEdicao));

  // Adiciona console.log para verificar no terminal
  console.log('Dados da edição:', dadosEdicao);
}
