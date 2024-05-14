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
function sairInfoMaratona() {
  let gerenciarMaratona = document.getElementById("gerenciarMaratona");
  let informacoesMaratona = document.getElementById("informacoesMaratona");
  gerenciarMaratona.removeChild(informacoesMaratona);
}

function informacoesMaratona() {
  let gerenciarMaratona = document.getElementById("gerenciarMaratona");
  let newHtml = `<div id="informacoesMaratona">
<div class="topoBotoes">
  <button class="buttonSair bi bi-x-lg" onclick="sairInfoMaratona()"></button>
</div>
<div id="conteinerNome">
  <p>maracasTeste</p>
</div>
<div id="informacoesGeraisMaratona">
  <div>
    <p>premiação:</p>
    <p class="texto">5000 reais</p>
  </div>
  <div>
    <p>Tempo por partida:</p>
    <p class="texto">10 min</p>
  </div>
  <div>
    <p>Descrição da maratona:</p>
    <p class="texto">
      Nessa maratonas os competidores iram testa o mais novo sistema de
      gerenciamento de maratonas
    </p>
  </div>
  <div id="listaTimes">
    <p>Nome das equipes participantes:</p>
    <ul>
    <li>time número 1</li>
    <li>capivaras do sertão</li>
    <li>time007</li>
    <li>jurubebas</li>
    <li>Codigo com erro</li>
    </ul>
  </div>
</div>
<div id="botoesMaratona">
  <button class="botaoMaratona">Iniciar Maratona</button>
  <button class="botaoeditar" onclick="retornaPagEditaMaratona()">editar informações</button>
</div>
</div>`;

  gerenciarMaratona.innerHTML += newHtml;
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
          maratonasHtml += `
            <div class="minhaMaratona" onclick="informacoesMaratona()">
              <p class="nomeMaratona">${maratona.nome}</p>
              <p class="quantTimes">${maratona.participantes.length}</p>
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

  xhr.open('GET', 'http://localhost/projeto/assets/php/requisicao_maratonas.php');
  xhr.send();
}


function retornaPagEditaMaratona() {
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
    <button onclick="verificaEdicaoMaratona(event)">Editar</button>
  </form>
</div>`;

  informacoesMaratona.innerHTML += newHtml;
}

function verificaEdicaoMaratona(event) {
  event.preventDefault();
  let inputNovoNomeMaratona = document.getElementById("inputNovoNomeMaratona");
  let inputNovaDescricao = document.getElementById("inputNovaDescricao");
  let inputNovaPremiacao = document.getElementById("inputNovaPremiacao");
  let inputNovoTempo = document.getElementById("inputNovoTempo");

  if (
    inputNovoNomeMaratona.value === "" ||
    inputNovaDescricao.value === "" ||
    inputNovaPremiacao.value === "" ||
    inputNovoTempo.value === "" ||
    inputNovoTempo.value <= 0
  ) {
    alert(
      "A edição apresenta campos vazios ou erros no preenchimento, por favor preencha todos os campos"
    );
  } else {
    let resposta = confirm(
      `Você realmente deseja fazer essas alterações na maratona?`
    );

    if (resposta) {
      alert(`Informações do time alteradas com sucesso`);
      retornaPagGerenciarMaratona();
    }
  }
}
function sairEdicaoMaratona() {
  let informacoesMaratona = document.getElementById("informacoesMaratona");
  let editarMaratona = document.getElementById("editarMaratona");

  informacoesMaratona.removeChild(editarMaratona);
}
