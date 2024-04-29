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
</div>
</div>`;

  gerenciarMaratona.innerHTML += newHtml;
}

function retornaPagGerenciarMaratona() {
  let global = document.getElementById("global");
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
    <div class="minhaMaratona" onclick="informacoesMaratona()">
      <p class="nomeMaratona">maracasTeste</p>
      <p class="quantTimes">4</p>
    </div>

    <div class="minhaMaratona" onclick="informacoesMaratona()">
      <p class="nomeMaratona">TesteMaracas01</p>
      <p class="quantTimes">8</p>
    </div>

    <div class="minhaMaratona" onclick="informacoesMaratona()">
      <p class="nomeMaratona">the end</p>
      <p class="quantTimes">6</p>
    </div>

    <div class="minhaMaratona" onclick="informacoesMaratona()">
      <p class="nomeMaratona">ufc Code</p>
      <p class="quantTimes">5</p>
    </div>

    <div class="minhaMaratona" onclick="informacoesMaratona()">
      <p class="nomeMaratona">maracasTeste</p>
      <p class="quantTimes">4</p>
    </div>
  </div>
</div>`;
  global.innerHTML = newHtml;
}
