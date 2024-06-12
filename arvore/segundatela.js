let conteudo = document.getElementById("conteudo");
let modal = document.getElementById("modal");
let modalAberto = false;


//Método para mostrar toda a segunda tela de estatisticas
function mostrarSegundaTela(no) {
  
  let timesA = no.left.time;
  let timesB = no.right.time;
  no2 = no;

  const criarListaParticipantes = (time, numer) => {
    
    return time.participantes.map((participante, index) => {
      let pontosParticipante = no.pontosParticipantes.find(p => p.nome === participante.nome);
      let pontosPartida = pontosParticipante ? pontosParticipante.pontosPartida : 0;

      return `
        <li>
          <h3>${participante.nome}.....................................<span class="pontuacaoT">${pontosPartida}</span>
          ${no.PartidaConcluida ? '' : `<button class="botaopontuacaoT" onclick="incrementarPontuacao(this, ${numer}, ${index}, no2)">+</button>`}
        </h3>
      `;
    }).join('');

  };

  if (no.partidaEmAndamento || noAtivo) {
    modalAberto = true;
    document.getElementById('conteudo-modal').innerHTML = `
    <h2>${timesA.nome}</h2>
      <span id="pontuacaoTimeA">Pontuação: ${no.left.pontuacao}</span>
      <ul class='timeA'>${criarListaParticipantes(timesA, 0)}</ul>
      <h2>${timesB.nome}</h2>
      <span id="pontuacaoTimeB">Pontuação: ${no.right.pontuacao}</span>
      <ul class='timeB'>${criarListaParticipantes(timesB, 1)}</ul>
    `;
    document.getElementById('modal').style.display = 'block';
  } else if (no.PartidaConcluida) {
    modalAberto = true;
    document.getElementById('conteudo-modal').innerHTML = `
    <h2>${timesA.nome}</h2>
      <span id="pontuacaoTimeA">Pontuação: ${no.left.pontuacao}</span>
      <ul class='timeA'>${criarListaParticipantes(timesA, 0)}</ul>
      <h2>${timesB.nome}</h2>
      <span id="pontuacaoTimeB">Pontuação: ${no.right.pontuacao}</span>
      <ul class='timeB'>${criarListaParticipantes(timesB, 1)}</ul>
    `;
    document.getElementById('modal').style.display = 'block';
    
  }
  if(modalAberto){
    conteudo.classList.add("borramento");
  }
}


//Método para fechar a segunda tela
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
    conteudo.classList.remove("borramento")
    modalAberto = false;
}

//Método para incrementar pontos nos participantes/times da partida
function incrementarPontuacao(botao, numer, index, no) {
  let timesA = no.left.time;
  let timesB = no.right.time;
  no2 = no;

  let participante;
  if (numer === 0) {
    participante = timesA.participantes[index];
  } else if (numer === 1) {
    participante = timesB.participantes[index];
  }

  let pontuacaoAtual = participante.pontosPartida;
  pontuacaoAtual++;
  participante.pontosPartida = pontuacaoAtual;

  let currentTime = document.getElementById("temporizador").textContent;  
  let currentPhase = timesA.fase;  

  participante.TempoPont.push({ tempo: currentTime, fase: currentPhase });
  console.log(participante.TempoPont);

  if (numer == 0) {
    no.left.pontuacao++;
    timesA.pontuacaoTotal++;
    timesA.pontuacaoMaratona++;
  } else if (numer == 1) {
    no.right.pontuacao++;
    timesB.pontuacaoTotal++;
    timesB.pontuacaoMaratona++;
  }

  // Atualizar a lista de pontos dos participantes no nó
  let pontosParticipante = no.pontosParticipantes.find(p => p.nome === participante.nome);
  if (pontosParticipante) {
    pontosParticipante.pontosPartida = participante.pontosPartida;
  } else {
    no.pontosParticipantes.push({
      nome: participante.nome,
      pontosPartida: participante.pontosPartida,
      tempo: currentTime,
      fase: currentPhase
    });
  }

  atualizarPontuacaoTime(no2);

  // Atualizar a pontuação na interface
  botao.previousElementSibling.textContent = pontuacaoAtual;
}


//Método para atualizar a pontuação na interface da segunda tela
function atualizarPontuacaoTime(no) {
    let totalPontosTimeA = no.left.pontuacao;
    let totalPontosTimeB = no.right.pontuacao;


    document.getElementById('pontuacaoTimeA').textContent = `Pontuação: ${totalPontosTimeA}`;

    document.getElementById('pontuacaoTimeB').textContent = `Pontuação: ${totalPontosTimeB}`;
}

//Método para mostrar a tela do campeão final do torneio
function mostrarTelaCampeao(time, date1, date2) {
  
  const telaCampeaoContainer = document.getElementById('telaCampeaoContainer');

  const listaParticipantes = time.participantes.map(participante => {
    const pontosDetalhados = participante.TempoPont.map((ponto) => `
      <li>Fase: ${ponto.fase} - Tempo: ${ponto.tempo}</li>
    `).join('');

    return `
      <li class="participantesT">${participante.nome} - Pontos: ${participante.TempoPont.length}
        <ul>${pontosDetalhados}</ul>
      </li>
    `;
  }).join('');

  telaCampeaoContainer.innerHTML = `
    <div class="tela-campeao">
      <div class="conteudo-campeao">
      <div>
      <h1>Campeão do Torneio</h1>
        <div class="detalhes-time">
          <img id="logoTimeCampeao" class="logo-time-camp" src="${time.logo}" alt="Logo do Time">
          <div id="nomeTimeCampeao" class="nome-time">${time.nome}</div>
          <div id="abreviacaoTimeCampeao" class="abreviacao-time">${time.abreviacao}</div>
        </div>
        <div class="detalhes-torneio">
          <div>Data de Início: ${date1}</div>
          <div>Data de Término: ${date2}</div>
          <div>Pontos totais da equipe: ${time.pontuacaoTotal}</div>
        </div>
        <div class="premio">Premiação do Campeonato: <h3>R$1000</h3></div>
        <button id="botaoFinalizar" class="botao-finalizar">ver resumos</button>
      </div>
        <div class="participantes">
          <strong>Participantes:</strong>
          <ul id="listaParticipantes">${listaParticipantes}</ul>
        </div>
      </div>
    </div>
  `;

  document.getElementById('botaoFinalizar').onclick = voltarParaResumos;
  
  conteudo.classList.add("borramento");
}


  // Função para fechar a tela do campeão
  function voltarParaResumos() {
    document.getElementById('telaCampeaoContainer').innerHTML = '';
    conteudo.classList.remove("borramento");
  }
  const tiraPontosPartidas = (times)=>{
    console.log(times)
    console.log("time: "+times[1].nome+ ", participante: "+times[1].participantes[1].nome+", pontuação partida: "+times[1].participantes[1].pontosPartida);
    
    for (let i = 0; i < times.length; i++) {
      for(let j = 0; j<times[i].participantes.length; j++){
        times[i].participantes[j].pontosPartida=0;
        
      }
      
    }
  }

  let conteudoModal = document.getElementById('conteudo-modal')

  document.addEventListener('click', function(event) {
    // Verificar se o clique ocorreu fora do modal e não foi no botão de pontuar
    if (modalAberto && !conteudoModal.contains(event.target) && event.target.className !== 'botao-pontuar' && event.target.className !=="resumoPartida") {
     console.log("que inferno")
      fecharModal();
    }
  });
  


  