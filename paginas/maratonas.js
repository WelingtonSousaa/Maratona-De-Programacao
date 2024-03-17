function maratonas() {
  const newHtml = `<div><h2>todas as maratonas estão aqui</h2>
  <div id="maratonas">
    <div class="maratona">
      <img
        src="https://cdn.awsli.com.br/600x700/255/255164/produto/97545176/b0ce6d00e2.jpg"
        alt=""
        id="escudo"
      />
      <div id="texto">
        <p id="nomeMaratona"><strong>ganhe a rapadura</strong></p>
        <p id="quantParticipantes">5 equipes participando</p>
      </div>
    </div>
    <div class="maratona">
      <img src="img/image.png" alt="" id="escudo" />
      <div id="texto">
        <p id="nomeMaratona"><strong>maratona das capivaras</strong></p>
        <p id="quantParticipantes">4 equipes participando</p>
      </div>
    </div>
    <div class="maratona">
      <img
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--az7po7le--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/2alu8dnpjxvet6abacp5.png"
        alt=""
        id="escudo"
      />
      <div id="texto">
        <p id="nomeMaratona"><strong>false return</strong></p>
        <p id="quantParticipantes">3 equipes participando</p>
      </div>
    </div>
    <div class="maratona">
      <img
        src="https://www.shutterstock.com/image-photo/green-hello-world-260nw-1311244001.jpg"
        alt=""
        id="escudo"
      />
      <div id="texto">
        <p id="nomeMaratona">
          <strong>só sei fazer o "hello world"</strong>
        </p>
        <p id="quantParticipantes">5 equipes participando</p>
      </div>
    </div>
    <div class="maratona">
      <img
        src="https://live.staticflickr.com/3451/3350512370_22a50ef2f2.jpg"
        alt=""
        id="escudo"
      />
      <div id="texto">
        <p id="nomeMaratona"><strong>códigos verificados</strong></p>
        <p id="quantParticipantes">5 equipes participando</p>
      </div>
    </div>
  </div></div>`;
  global.innerHTML = newHtml;
}
