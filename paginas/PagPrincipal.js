function retornaPagPrincipal() {
  let global = document.getElementById("global");
  let NewHtml = `<div id="principal">
  <h1 id="boasVindas">Bem-vindo ao nosso site!</h1>
  <div id="conteiner">
    <p>
      Crie novos times, gerencie novas maratonas e aprimore suas
      habilidades
    </p>
    <div id="conteinerBotoes">
      <button onclick="retornaPagCriarMaratona()">
        criar uma maratona
      </button>

      <button onclick="retornaPagCriarTime()">criar um time</button>
    </div>
  </div>
  <h2>Inicie sua jornada em site</h2>
  <div id="Opcoes">
    <div class="opcao" onclick="retornaPagCriarTime()">
      <img src="img/imagem criar time em jpeg.jpeg" alt="" />
      <p>Criar um time</p>
    </div>

    <div class="opcao" onclick="retornaPagGerenciarTimes()">
      <img src="img/gerenciartime.jpeg" alt="" />
      <p>Gerenciar times</p>
    </div>

    <div class="opcao" onclick="retornaPagCriarMaratona()">
      <img src="img/criar maratona em jpng.jpeg" alt="" />
      <p>Criar maratonas</p>
    </div>

    <div class="opcao" onclick="retornaPagGerenciarMaratona()">
      <img src="img/criar maratona em jpng.jpeg" alt="" />
      <p>Gerenciar maratonas</p>
    </div>

    <div class="opcao">
      <img src="img/image.png" alt="" />
      <p>Gerenciar partidas</p>
    </div>

    <div class="opcao" onclick="retornaPagEstatisticas()">
            <img src="img/gerenciartime.jpeg" alt="" />
            <p>Estatísticas</p>
          </div>
  </div>
</div>`;
  global.innerHTML = NewHtml;
}
