const global = document.getElementById("global");

function newTime() {
  const newHtml = `<div id="novaEquipe">
  <h2>CRIE SEU TIME</h2>
  <form action="">
    <div>
      <input
        type="text"
        name="NomeEquipe"
        placeholder="Nome da equipe"
      />
    </div>

    <div>
      <input
        type="text"
        name="AbreviaçãoEquipe"
        placeholder="Abreviação da equipe"
      />
    </div>

    <div>
      <input
        type="number"
        name="QuantMembros"
        min="2"
        max="5"
        placeholder="Quantidade de membros (2 - 5)"
        class="input-number"
      />
    </div>

    <div>
      <p>Hora de escolher o escudo</p>
      <div id="escudos">
        <img
          src="img/escudo1.jpeg"
          alt=""
          onclick="selecionarImagem(this)"
        />
        <img
          src="img/escudo3.jpg"
          alt=""
          onclick="selecionarImagem(this)"
        />
        <img
          src="img/escudo4.jpg"
          alt=""
          onclick="selecionarImagem(this)"
        />
        <img
          src="img/escudo5.jpeg"
          alt=""
          onclick="selecionarImagem(this)"
        />
      </div>
    </div>
    <input
      type="hidden"
      id="imagemSelecionada"
      name="ImagemSelecionada"
    />

    <button type="submit">criar equipe</button>
  </form>
</div>`;
  global.innerHTML = newHtml;
}
