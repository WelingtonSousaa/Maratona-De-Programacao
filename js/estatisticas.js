function sairEstatisticas() {
  let global = document.getElementById("global");
  let estatisticas = document.getElementById("estatisticas");
  global.removeChild(estatisticas);
}

function retornaNumeros() {
  let newHtml = `<div class="topoBotoes">
  <button
    class="buttonSair bi bi-x-lg"
    id="SairInforUsuario"
    onclick="sairEstatisticas()"
  ></button>
</div>
<div>
  <p class="infoEstatisticas">Maratonas criadas:</p>
  <p>23</p>
</div>
<div>
  <p class="infoEstatisticas">Maratonas finalizadas:</p>
  <p>21</p>
</div>
<div>
  <p class="infoEstatisticas">Times criados:</p>
  <p>123</p>
</div>
<div>
  <p class="infoEstatisticas">Usuários criados:</p>
  <p>213</p>
</div>
<div>
  <p class="infoEstatisticas">Usuários ativos:</p>
  <p>5</p>
</div>
<button>probabilidades</button>`;
  return newHtml;
}

function retornaPagEstatisticas() {
  let global = document.getElementById("global");
  let newHtml = `<div id="estatisticas">
  ${retornaNumeros()}
</div>`;

  global.innerHTML += newHtml;
}
