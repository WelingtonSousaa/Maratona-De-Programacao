function RetornaPagRanking() {
  let global = document.getElementById("global");
  const newHtml = `<div id="ranking">
  <div class="tituloEHome">
  <button class="home bi bi-house-door-fill" onclick="retornaPagPrincipal()">home</button>
  <h2>OS MELHORES ESTÃO AQUI!</h2>
  </div>

  <div id="inforMelhores">
    <p>O melhor time</p>
    <p>O melhor jogador</p>
  </div>

  <div id="melhores">
    <div id="melhorTime">
      <p>Testando</p>
      <img src="img/OIG1.jpeg" alt="" />
      <div>
        <div id="inforMelhorTime">
          <div id="abr">
            <p>Abreviação:</p>
            <p>T03</p>
          </div>

          <div id="participantesTime">
            <p>Nome dos participantes:</p>
            <ul>
              <li>cristofiano</li>
              <li>jogador01</li>
              <li>hope</li>
              <li>teste01</li>
              <li>Codigo com erro</li>
            </ul>
          </div>

          <div class="dadosVitorias">
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
    </div>
    <div id="melhorJogador">
      <p>Nome jogador</p>
      <img src="img/enemy.jpg" alt="" />
      <div>
        <div id="inforMelhorJogador">
          <div id="nomeCompleto">
            <p>Nome completo:</p>
            <p>nome completo do usuario da plataforma</p>
          </div>
          <div id="timeJogador">
            <p>Time do jogador:</p>
            <p>fugitivos</p>
          </div>

          <div class="dadosVitorias">
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
    </div>
  </div>
  <div id="dica">
    <p>ganhe maratonas junto ao seu time e atinga o topo!</p>
    <img src="img/topo.jpeg" alt="" />
  </div>
</div>`;

  global.innerHTML = newHtml;
}
