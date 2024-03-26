function telaTimes() {
  const newHtml = `<div id="juntarTime">
  <div class="container-de-busca">
    <input
      type="text"
      placeholder="Digite o nome ou a abreviação do time"
      class="caixa-de-busca"
    />
    <button
      type="submit"
      class="botao-de-busca bi bi-search"
      onclick="filtrarTimes()"
    ></button>
  </div>
  <p class="info">
    só times que estão em busca de novos membros apareceram aqui
  </p>
  <div id="times">
    <div class="time">
      <img src="img/escudo1.jpeg" alt="Bandeira do Time 1" />
      <div class="informacoes-time">
        <p class="nomeEquipe"><strong>tiranos</strong></p>
        <p>Membros: 5</p>
      </div>
    </div>

    <div class="time">
      <img src="img/escudo3.jpg" alt="Bandeira do Time 2" />
      <div class="informacoes-time">
        <p class="nomeEquipe"><strong>PokeProgramadores</strong></p>
        <p>Membros: 4</p>
      </div>
    </div>

    <div class="time">
      <img src="img/escudo4.jpg" alt="Bandeira do Time 3" />
      <div class="informacoes-time">
        <p class="nomeEquipe">
          <strong>meninas super poderosas</strong>
        </p>
        <p>Membros: 3</p>
        <!-- Mais informações sobre o time aqui -->
      </div>
    </div>
  </div>
</div>`;

  global.innerHTML = newHtml;
}
