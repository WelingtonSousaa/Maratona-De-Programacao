function sairEstatisticas() {
  let global = document.getElementById("global");
  let estatisticas = document.getElementById("estatisticas");
  global.removeChild(estatisticas);
}

function retornaEmNumeros() {
  let estatisticas = document.getElementById("estatisticas");

  let newHtml = `<div class="topoBotoes">
  <button
    class="buttonSair bi bi-x-lg"
    id="SairInforUsuario"
    onclick="sairEstatisticas()"
  ></button>
</div>
<div>
  <p class="infoEstatisticas">Quantidade de maratonas criadas:</p>
  <p>23</p>
</div>
<div>
  <p class="infoEstatisticas">Quantidade de maratonas finalizadas:</p>
  <p>21</p>
</div>
<div>
  <p class="infoEstatisticas">Quantidade de times criados:</p>
  <p>123</p>
</div>
<div>
  <p class="infoEstatisticas">Quantidade de usuarios criados:</p>
  <p>213</p>
</div>
<div>
  <p class="infoEstatisticas">Quantidade de usuarios ativos:</p>
  <p>5</p>
</div>
<button onclick="retornaPorcentagens()">Em porcentagens</button>`;
  estatisticas.innerHTML = newHtml;
}

function retornaPorcentagens() {
  let estatisticas = document.getElementById("estatisticas");
  let newHtml = `<div class="topoBotoes">
  <button
    class="buttonSair bi bi-x-lg"
    id="SairInforUsuario"
    onclick="sairEstatisticas()"
  ></button>
</div>

<div>
  <p class="infoEstatisticas">maratonas finalizadas:</p>
  <p>91,30%</p>
</div>

<div>
  <p class="infoEstatisticas">usuarios ativos:</p>
  <p>2,34%</p>
</div>
<button onclick="retornaEmNumeros()">Em números</button>`;
  estatisticas.innerHTML = newHtml;
}

function retornaPagEstatisticas() {
  let global = document.getElementById("global");
  let newHtml = `<div id="estatisticas">
  <div class="topoBotoes">
  <button
    class="buttonSair bi bi-x-lg"
    id="SairInforUsuario"
    onclick="sairEstatisticas()"
  ></button>
</div>

<div>
  <p class="infoEstatisticas">maratonas finalizadas:</p>
  <p>91,30%</p>
</div>

<div>
  <p class="infoEstatisticas">usuarios ativos:</p>
  <p>2,34%</p>
</div>
<button onclick="retornaEmNumeros()">Em números</button>
</div>`;

  global.innerHTML += newHtml;
}
