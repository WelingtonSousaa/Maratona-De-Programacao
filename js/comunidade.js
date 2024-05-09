function retornaComunidade() {
  let global = document.getElementById("global");
  let newHtml = `
  <div id="comunidade">
        <div class="textoEHome">
        <button class="home bi bi-house-door-fill" onclick="retornaPagPrincipal()">home</button>
        <h1>VEJA O QUE ANDA ACONTECENDO!</h1>
        </div>
        <div class="InforComunidade">
          <p>A maratona "insana" foi encerrada</p>
          <p>04/05/2024 13:54</p>
        </div>
        <div class="InforComunidade">
          <p>O time "Testando" foi criado</p>
          <p>03/05/2024 07:35</p>
        </div>
        <div class="InforComunidade">
          <p>O usuario "Destruidor" apagou sua conta</p>
          <p>03/05/2024 07:15</p>
        </div>

        <div class="InforComunidade">
          <p>novo usuário criado, olá Destruidor!</p>
          <p>02/05/2024 14:34</p>
        </div>
        <div class="InforComunidade">
          <p>A maratona "insana" foi criada</p>
          <p>02/05/2024 07:13</p>
        </div>
      </div>`;

  global.innerHTML = newHtml;
}
