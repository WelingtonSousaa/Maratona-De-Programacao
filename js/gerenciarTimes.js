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
    ConteinerTimes = document.getElementById("meusTimes");
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

function retornaInformacoesTime() {
  const gerenciarTimes = document.getElementById("gerenciarTimes");
  let newHtml = `<div id="informacoesTime">
  <div class="topoBotoes">
    <button
      class="buttonSair bi bi-x-lg"
      onclick="sairInfoTime()"
    ></button>
  </div>
  <p>testando</p>
  <div id="informacoesGeraisTime">
    <div id="conteinerEscudo">
      <img src="img/OIG1.jpeg" alt="" />
      <button id="editaEscudo" class="bi bi-brush-fill" onclick="retornaEditaImgUsuario()"></button>
    </div>
    <div id="textos">
      <div id="abreviacao">
        <p>Abreviação do time:</p>
        <p>T03</p>
      </div>
      <div id="listaParticipantes">
        <p>Nome dos participantes:</p>
        <ul>
          <li>cristofiano</li>
          <li>jogador01</li>
          <li>hope</li>
          <li>teste01</li>
          <li>Codigo com erro</li>
        </ul>
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
    <button class="botaoexcluir bi bi-trash-fill">excluir time</button>
    <button class="botaoeditar" onclick="retornaPagEditaTime()">editar informações</button>
  </div>
</div>`;

  gerenciarTimes.innerHTML += newHtml;
}

function retornaPagGerenciarTimes() {
  let global = document.getElementById("global");
  let newHtml = ` <div id="gerenciarTimes">
  <div id="homeEPesquisa">
    <button
      class="home bi bi-house-door-fill"
      onclick="retornaPagPrincipal()"
    >
      home
    </button>
    <div id="pesquisa">
      <input type="text" id="inputPesquisa" placeholder="pesquisa" />
      <button class="bi bi-search" onclick="pesquisarTime()"></button>
    </div>
    <button
      class="bi bi-arrow-counterclockwise"
      id="refazer"
      onclick="retornaPagGerenciarTimes()"
    ></button>
  </div>
  <div id="meusTimes">
    <div class="meuTime" onclick="retornaInformacoesTime()">
      <div>
        <img src="img/OIG1.jpeg" alt="" />
        <p class="nomeTime">time aleatorio</p>
      </div>
      <p>3</p>
    </div>
    <div class="meuTime" onclick="retornaInformacoesTime()">
      <div>
        <img src="img/OIG1.jpeg" alt="" />
        <p class="nomeTime">time teste</p>
      </div>
      <p>5</p>
    </div>
    <div class="meuTime" onclick="retornaInformacoesTime()">
      <div>
        <img src="img/OIG1.jpeg" alt="" />
        <p class="nomeTime">time SOS</p>
      </div>
      <p>3</p>
    </div>
    <div class="meuTime" onclick="retornaInformacoesTime()">
      <div>
        <img src="img/OIG1.jpeg" alt="" />
        <p class="nomeTime">testando</p>
      </div>
      <p>4</p>
    </div>
    <div class="meuTime" onclick="retornaInformacoesTime()">
      <div>
        <img src="img/OIG1.jpeg" alt="" />
        <p class="nomeTime">temblarios</p>
      </div>
      <p>5</p>
    </div>
  </div>
</div>`;

  global.innerHTML = newHtml;
}

function retornaPagEditaTime() {
  let informacoesTime = document.getElementById("informacoesTime");
  let newHtml = `<div id="editarTime">
  <div class="topoBotoes">
    <button
      class="buttonSair bi bi-x-lg"
      id="SairInforUsuario"
      onclick="sairEdicaoTime()"
    ></button>
  </div>
  <form action="">
    <div>
      <label for="NovoNomeTime">Novo nome:</label>
      <input type="text" name="NovoNomeTime" id="inputNovoNomeTime" />
    </div>
    <div>
      <label for="NovaAbreviacao">Nova abreviação:</label>
      <input type="text" name="NovaAbreviacao" id="inputNovaAbreviacao" />
    </div>
    <button onclick="verificaEdicao(event)" >Editar</button>
  </form>
</div>`;

  informacoesTime.innerHTML += newHtml;
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
