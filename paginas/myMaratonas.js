function MyMaratona() {
  const newHtml = ` <div  class="maratona">
    <img src="img/image.png" alt="" id="escudo">
    <div id="texto">
      <p id="nomeMaratona"><strong>maratona das capivaras</strong></p>
    <p id="quantParticipantes">4 equipes participando</p>
    </div>
   </div>
   <div id="newMaratona" > 
    <span class="plus bi bi-plus-circle-fill"></span>
    <p>crie um nova maratona</p>
     </div>`;

  global.innerHTML = newHtml;
}
