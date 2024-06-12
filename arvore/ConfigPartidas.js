let selectedTimes = [];

//Método para escolher a ordem dos times ous sortear os times novamente
const TelaEscolhaTime = (times) => {
  let telaSorteioTimes = document.getElementById("tela-sorteio-times");
  telaSorteioTimes.innerHTML = "";

  let divPartidas = document.createElement("div");
  divPartidas.classList = "partidas";
  telaSorteioTimes.appendChild(divPartidas);

  const manipularTimeClick = (index) => {
    let timeElement = document.getElementById(`time-${index}`);
    timeElement.classList.toggle("selecionado");

    if (selectedTimes.includes(index)) {
      selectedTimes = selectedTimes.filter((i) => i !== index);
    } else {
      selectedTimes.push(index);
    }

    if (selectedTimes.length === 2) {
      trocarPosicoes(times, selectedTimes);
      selectedTimes.forEach((i) => {
        document.getElementById(`time-${i}`).classList.remove("selecionado");
      });
      selectedTimes = [];
      TelaEscolhaTime(times);
    }
  };

  for (let i = 0; i < times.length; i++) {
    let divtime = document.createElement("div");
    divtime.classList = "time";
    divtime.id = `time-${i}`;
    divtime.innerHTML = `
      <img id="timeLogo" src="${times[i].logo}" alt="" />
      <div>
        <p>${times[i].nome}</p>
        <p>${times[i].abreviacao}</p>
      </div>`;
    divtime.onclick = () => manipularTimeClick(i);

    if (i % 2 === 0) {
      divPartidas.appendChild(divtime);
    } else {
      let h2 = document.createElement("h2");
      h2.textContent = "X";
      h2.classList = "versos";
      divPartidas.appendChild(h2);
      divPartidas.appendChild(divtime);
    }
  }

  let divBotoes = document.createElement("div");
  divBotoes.id = "div-botoes";

  let botaoNovoSorteio = document.createElement("button");
  botaoNovoSorteio.textContent = "sortear novamente";
  botaoNovoSorteio.onclick = () => {
    embaralharArray(times);
    TelaEscolhaTime(times);
  };

  let botaoSalvar = document.createElement("button");
  botaoSalvar.textContent = "salvar";
  botaoSalvar.onclick = () => salvarTimes(times);


  divBotoes.appendChild(botaoNovoSorteio);
  divBotoes.appendChild(botaoSalvar);

  telaSorteioTimes.appendChild(divBotoes);
};

//Método para trocar os times de posições 
const trocarPosicoes = (array, posicoes) => {
  const [index1, index2] = posicoes;
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

//Método para salvar a ordem dos times
const salvarTimes = (times) => {
  let telaSorteioTimes = document.getElementById("tela-sorteio-times");
  telaSorteioTimes.innerHTML = "";
  torneio = new ArvoreTorneio(times);
  gerarTorneio();
};
