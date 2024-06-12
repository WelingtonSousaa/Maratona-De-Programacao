// Cria uma instância da classe ArvoreTorneio com os times fornecidos
let torneio = null;

// Variáveis globais para acompanhar o nó ativo, temporizador e outras funções 
let noAtivo = null;
let temporizador = null;
let contagemRegressiva = 3;
let pausado = false;
let timeC = [];
let dataV = false;
let data1 = null;
let data2 = null;

// Definição da classe NoArvore, que representa um nó na árvore do torneio
class NoArvore {
  constructor(time = null) {
    this.time = time;
    this.left = null;
    this.right = null;
    this.pontuacao = 0;
    this.partidaEmAndamento = false;
    this.PartidaConcluida = false;
    this.pontosParticipantes = [];
  }
}

// Definição da classe Time
class Time {
  constructor(idTime, logo, nome, participantes, pontuacaoTotal, pontuacaoMaratona, abreviacao, perdeu) {
    this.idTime = idTime;
    this.logo = logo;
    this.nome = nome;
    this.participantes = participantes;
    this.pontuacaoTotal = 0;
    this.pontuacaoMaratona = 0;
    this.abreviacao = abreviacao;
    this.perdeu = perdeu
    this.fase = 1;
  }
}

//Definição da classe Participante
class Participante {
  constructor(nome, pontosTotais = 0, pontosPartida = 0, TempoPont = []) {
    this.nome = nome;
    this.pontosTotais = pontosTotais;
    this.pontosPartida = pontosPartida;
    this.TempoPont = TempoPont;
  }
}

// Definição da classe ArvoreTorneio, que representa a estrutura do torneio
class ArvoreTorneio {
  constructor(times) {
    if (times.length !== 8) {
      throw new Error(
        "Precisamos exatamente de 8 times para criar a árvore do torneio"
      );
    }
    this.raiz = this.construirArvore(times);
  }

  // Método para construir a árvore do torneio de forma recursiva
  construirArvore(times) {
    if (times.length === 1) {
      return new NoArvore(times[0]);
    }

    const meio = Math.floor(times.length / 2);
    const filholeft = this.construirArvore(times.slice(0, meio));
    const filhoright = this.construirArvore(times.slice(meio));

    const no = new NoArvore();
    no.left = filholeft;
    no.right = filhoright;

    return no;
  }

  // Método para avançar um time vencedor na árvore do torneio
  avancartime(no, vencedor) {
    if (!no.left || !no.right) return;
    no.time = vencedor;
  }

  // Método para obter os níveis da árvore do torneio
  obterNiveisArvore(no = this.raiz, nivel = 0, resultado = []) {
    if (!no) return;
    if (!resultado[nivel]) resultado[nivel] = [];
    resultado[nivel].push(no);

    this.obterNiveisArvore(no.left, nivel + 1, resultado);
    this.obterNiveisArvore(no.right, nivel + 1, resultado);
    return resultado;
  }
}
//Método para embaralhar o array de times
function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Lista de times participantes do torneio
let times = [
  new Time(
    1,
    "escudotesteS.jpg",
    "Time A",
    [
      new Participante("Participante 1A"),
      new Participante("Participante 2A"),
      new Participante("Participante 3A"),
      new Participante("Participante 4A"),
      new Participante("Participante 5A")
    ],
    0, 0,
    "ABV",
    false

  ),
  new Time(
    2,
    "escudoteste2S.jpg",
    "Time B",
    [
      new Participante("Participante 1B"),
      new Participante("Participante 2B"),
      new Participante("Participante 3B"),
      new Participante("Participante 4B"),
      new Participante("Participante 5B")
    ],
    0, 0,
    "BBV"
    ,
    false
  ),
  new Time(
    3,
    "escudotesteS.jpg",
    "Time C",
    [
      new Participante("Participante 1C"),
      new Participante("Participante 2C"),
      new Participante("Participante 3C"),
      new Participante("Participante 4C"),
      new Participante("Participante 5C")
    ],
    0, 0,
    "CBV"
    ,
    false
  ),
  new Time(
    4,
    "escudoteste2S.jpg",
    "Time D",
    [
      new Participante("Participante 1D"),
      new Participante("Participante 2D"),
      new Participante("Participante 3D"),
      new Participante("Participante 4D"),
      new Participante("Participante 5D")
    ],
    0, 0,
    "DBV",
    false
  ),
  new Time(
    5,
    "escudotesteS.jpg",
    "Time E",
    [
      new Participante("Participante 1E"),
      new Participante("Participante 2E"),
      new Participante("Participante 3E"),
      new Participante("Participante 4E"),
      new Participante("Participante 5E")
    ],
    0, 0,
    "EBV",
    false
  ),
  new Time(
    6,
    "escudoteste2S.jpg",
    "Time F",
    [
      new Participante("Participante 1F"),
      new Participante("Participante 2F"),
      new Participante("Participante 3F"),
      new Participante("Participante 4F"),
      new Participante("Participante 5F")
    ],
    0, 0,
    "FBV",
    false
  ),
  new Time(
    7,
    "escudotesteS.jpg",
    "Time G",
    [
      new Participante("Participante 1G"),
      new Participante("Participante 2G"),
      new Participante("Participante 3G"),
      new Participante("Participante 4G"),
      new Participante("Participante 5G")
    ],
    0, 0,
    "GBV",
    false
  ),
  new Time(
    8,
    "escudoteste2S.jpg",
    "Time H",
    [
      new Participante("Participante 1H"),
      new Participante("Participante 2H"),
      new Participante("Participante 3H"),
      new Participante("Participante 4H"),
      new Participante("Participante 5H")
    ],
    0, 0,
    "HBV",
    false
  ),
];

embaralharArray(times);

//Parte principal do torneio, gera base e estrutura do mesmo
const gerarTorneio = () => {
  const containerArvore = document.getElementById("arvore");
  const containerCampeao = document.getElementById("campeao");
  const temporizadorElem = document.createElement("div");
  let divTemporizador = document.getElementById("div-temporizador");

  temporizadorElem.id = "temporizador";

  containerArvore.appendChild(temporizadorElem);

  const atualizarArvore = (torneio) => {
    const dadosArvore = torneio.obterNiveisArvore();
    renderizarArvore(dadosArvore);
    if (dadosArvore[0][0].time) {
      containerCampeao.innerText = `Campeão: ${dadosArvore[0][0].time.nome}`;
      timeC = dadosArvore[0][0].time;
      var dataCompleta = new Date();
      var ano = dataCompleta.getFullYear();
      var mes = (dataCompleta.getMonth() + 1).toString().padStart(2, '0'); // Mês começa do zero, então somamos 1
      var dia = dataCompleta.getDate().toString().padStart(2, '0');

      data2 = `${dia}/${mes}/${ano}`;
      console.log(data2);
      mostrarTelaCampeao(timeC, data1, data2);
      containerCampeao.addEventListener("click", () => {
        mostrarTelaCampeao(timeC, data1, data2);
      });
    }
  };

  const renderizarArvore = (dadosArvore) => {
    containerArvore.innerHTML = "";
    containerArvore.appendChild(temporizadorElem);
    dadosArvore.forEach((nivel, indice) => {
      const divNivel = document.createElement("div");
      divNivel.className = "nivel";
      divNivel.innerHTML = `<strong>Fase ${indice + 1}:</strong> `;
      if (indice === 3) {
        divNivel.innerHTML = "";
      }

      nivel.forEach((no) => {
        const divNo = document.createElement("div");
        divNo.className = "no";
        if (indice === 3) {
          divNo.classList.add("nivel4");
        }
        divNo.innerHTML = `
                ${no.time ? no.time.nome : "*"}
                <div class="pontuacao">${no.pontuacao} pts</div>
            `;
        if (no.left && no.right) {
          const botaoIniciar = document.createElement("button");
          botaoIniciar.className = "botao-iniciar";
          botaoIniciar.innerText = "Iniciar Partida";
          botaoIniciar.onclick = () => iniciarPartida(no);

          const botoesPontuacao = document.createElement("div");
          botoesPontuacao.className = "botoes-pontuacao";

          const divPontuacaoLeft = document.createElement("div");
          divPontuacaoLeft.className = "espaco-time";
          const logoLeft = document.createElement("img");
          logoLeft.src = no.left.time ? no.left.time.logo : "escudoDuvida.jpg";
          logoLeft.className = "logo-time";
          divPontuacaoLeft.appendChild(logoLeft);

          const divPontuacaoRight = document.createElement("div");
          divPontuacaoRight.classList = "espaco-time";
          const logoRight = document.createElement("img");
          logoRight.src = no.right.time ? no.right.time.logo : "escudoDuvida.jpg";
          logoRight.className = "logo-time";
          divPontuacaoRight.appendChild(logoRight);

          const timesContainer = document.createElement("div");
          timesContainer.className = "times";
          timesContainer.appendChild(divPontuacaoLeft);
          timesContainer.appendChild(divPontuacaoRight);

          const botaoPontuar = document.createElement("button");
          botaoPontuar.innerText = "Pontuar";
          botaoPontuar.className = "botao-pontuar";
          botaoPontuar.classList.add("oculto");
          botaoPontuar.onclick = () => mostrarSegundaTela(no);

          botoesPontuacao.appendChild(timesContainer);
          botoesPontuacao.appendChild(botaoPontuar);

          divNo.appendChild(botaoIniciar);
          divNo.appendChild(botoesPontuacao);

          if (no.PartidaConcluida) {
            botaoIniciar.classList.add("oculto");
            botaoIniciar.classList.add("desabilitado");
            timesContainer.classList.add("desabilitado");
            botaoPontuar.innerText = "Resumo";
            botaoPontuar.classList.remove("oculto");
            botaoPontuar.classList.remove("botao-pontuar")
            botaoPontuar.classList.add("resumoPartida");
          } else if (no.partidaEmAndamento || noAtivo) {
            botaoIniciar.classList.add("oculto");

          }
          if (no.partidaEmAndamento) {
            botaoPontuar.classList.remove("oculto");
            divNo.classList.add("partidaAtual");
          }
        }
        divNivel.appendChild(divNo);
      });
      containerArvore.appendChild(divNivel);
    });
  };

  //Método para inicipar uma partida de um nó especifico/Pegar data do momento em que iniciou a partida
  const iniciarPartida = (no) => {
    if (dataV == false) {
      var dataCompleta = new Date();
      var ano = dataCompleta.getFullYear();
      var mes = (dataCompleta.getMonth() + 1).toString().padStart(2, '0');
      var dia = dataCompleta.getDate().toString().padStart(2, '0');

      data1 = `${dia}/${mes}/${ano}`;
      dataV = true;
    }
    if (noAtivo) return;

    if (!no.left.time || !no.right.time) {
      alert("Não é possível iniciar uma partida sem dois times.");
      return;
    }

    noAtivo = no;
    no.partidaEmAndamento = true;
    tiraPontosPartidas(times);
    document
      .querySelectorAll(".botao-iniciar")
      .forEach((btn) => btn.classList.add("oculto"));

    iniciarTemporizador(no);

  };

  //Cronometro do torneio
  const iniciarTemporizador = (no) => {
    let contagemProgressiva = 0;
    const tempoTotal = 5; // Tempo total desejado
    pausado = false;

    const botaoPausar
      = document.createElement("button");
    botaoPausar.id = "botao-pausar";
    botaoPausar.classList = "bi bi-pause-fill";
    botaoPausar.onclick = pausarTemporizador;
    divTemporizador.appendChild(botaoPausar);

    temporizador = setInterval(() => {
      if (!pausado) {
        if (contagemProgressiva >= tempoTotal) {

          clearInterval(temporizador);
          if (noAtivo) {
            torneio.avancartime(
              noAtivo,
              noAtivo.left.pontuacao > noAtivo.right.pontuacao
                ? noAtivo.left.time
                : noAtivo.right.time
            );
            noAtivo.left.pontuacao < noAtivo.right.pontuacao
              ? noAtivo.left.time.perdeu = true
              : noAtivo.right.time.perdeu = true

            noAtivo.partidaEmAndamento = false;
            noAtivo.PartidaConcluida = true;
            noAtivo = null;


            if (no.left.pontuacao > no.right.pontuacao) {
              no.left.time.fase++;
              console.log(no.left.time.fase);
            }
            else {
              no.right.time.fase++;
              console.log(no.right.time.fase);
            }

            document
              .querySelectorAll(".botao-iniciar")
              .forEach((btn) => btn.classList.remove("oculto"));
            document.getElementById("botao-pausar").remove();
          }
          fecharModal();
          atualizarArvore(torneio);
        } else {
          contagemProgressiva++;
          atualizarArvore(torneio);
          document.getElementById("temporizador").innerText = `00:${contagemProgressiva < 10
            ? "0" + contagemProgressiva
            : contagemProgressiva
            }`;
        }
      }
    }, 1000);
  };

  //Pausar cronometro
  const pausarTemporizador = () => {
    pausado = !pausado;
    let botaoPausar = document.getElementById("botao-pausar");
    if (pausado) {
      botaoPausar.classList = "bi bi-play-fill";
    } else {
      botaoPausar.classList = "bi bi-pause-fill";
    }
  };
  const dadosArvoreInicial = torneio.obterNiveisArvore();
  renderizarArvore(dadosArvoreInicial);
};
TelaEscolhaTime(times);
