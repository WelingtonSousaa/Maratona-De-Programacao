const global = document.getElementById("global");

function newTime() {
  const newHtml = `<div id="novaEquipe">
<form action="">
  <div>
    <label for="NomeEquipe">Digite o nome da sua equipe</label>
    <input type="text" name="NomeEquipe" placeholder="Nome da equipe" />
  </div>

  <div>
    <label for="AbreviaçãoEquipe">
      qual vai ser a apreviação do seu time
    </label>
    <input
      type="text"
      name="AbreviaçãoEquipe"
      placeholder="Abreviação da equipe"
    />
  </div>

  <div>
    <label for="QuantMembros">digite a quantidade de membros</label>
    <input
      type="number"
      name="QuantMembros"
      min="2"
      max="5"
      placeholder="1 - 5"
    />
  </div>

  <div>
    <label id="EscolhaEscudo" onclick="MostarEscudos()">
      Clique aqui para escolha seu escudo
    </label>
    <div id="escudos">
      <img src="img/escudo1.jpeg" alt="" onclick="selecionarImagem(this)" />
      <img src="img/escudo3.jpg" alt="" onclick="selecionarImagem(this)" />
      <img src="img/escudo4.jpg" alt="" onclick="selecionarImagem(this)" />
      <img src="img/escudo5.jpeg" alt="" onclick="selecionarImagem(this)" />
    </div>
  </div>
  <input type="hidden" id="imagemSelecionada" name="ImagemSelecionada" />

  <button type="submit">criar equipe</button>
</form>
</div>`;
  global.innerHTML = newHtml;
}
