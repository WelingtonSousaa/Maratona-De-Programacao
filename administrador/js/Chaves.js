class Time {
    constructor(logo, nome, participantes) {
        this.logo = logo;
        this.nome = nome;
        this.participantes = participantes;
    }
}
const times = [
    new Time("escudotesteS.jpg", "Time A", ["Participante 1A", "Participante 2A", "Participante 3A", "Participante 4A", "Participante 5A"]),
    new Time("escudoteste2S.jpg", "Time B", ["Participante 1B", "Participante 2B", "Participante 3B", "Participante 4B", "Participante 5B"]),
    new Time("escudotesteS.jpg", "Time C", ["Participante 1C", "Participante 2C", "Participante 3C", "Participante 4C", "Participante 5C"]),
    new Time("escudoteste2S.jpg", "Time D", ["Participante 1D", "Participante 2D", "Participante 3D", "Participante 4D", "Participante 5D"]),
    new Time("escudotesteS.jpg", "Time E", ["Participante 1E", "Participante 2E", "Participante 3E", "Participante 4E", "Participante 5E"]),
    new Time("escudoteste2S.jpg", "Time F", ["Participante 1F", "Participante 2F", "Participante 3F", "Participante 4F", "Participante 5F"]),
    new Time("escudotesteS.jpg", "Time G", ["Participante 1G", "Participante 2G", "Participante 3G", "Participante 4G", "Participante 5G"]),
    new Time("escudoteste2S.jpg", "Time H", ["Participante 1H", "Participante 2H", "Participante 3H", "Participante 4H", "Participante 5H"]),
];

function sortearConfrontos() {
    const limparQuadrado = document.querySelectorAll('.quadrado');
    limparQuadrado.forEach(quadrado => {
        quadrado.textContent = ''; 
    });
    const limparMensagensV = document.querySelectorAll('.mensagem-vitoria');
    limparMensagensV.forEach(mensagem => {
        mensagem.remove();
    });
        
    const confrontos = [];
   
    
    while (times.length > 1) {
        const indiceA = Math.floor(Math.random() * times.length);
        let timeA = times.splice(indiceA, 1)[0];

        const indiceB = Math.floor(Math.random() * times.length);
        let timeB = times.splice(indiceB, 1)[0];

        confrontos.push([timeA, timeB]);
       
    }
   
    
    const linhaBaixo = document.querySelector('.linha-baixo');
    const quadrados = linhaBaixo.getElementsByClassName('quadrado');
    for (let i = 0; i < confrontos.length; i++) {
        const parQuadrados = quadrados[i * 2];
        const imparQuadrados = quadrados[i * 2 + 1]; 
        
      
        parQuadrados.innerHTML = `<img src="img/${confrontos[i][0].logo}" alt="${confrontos[i][0].nome}">`;
        imparQuadrados.innerHTML = `<img src="img/${confrontos[i][1].logo}" alt="${confrontos[i][1].nome}">`;

        parQuadrados.addEventListener('click', () => semiFinais(confrontos[i][0]));
        imparQuadrados.addEventListener('click', () => semiFinais(confrontos[i][1]));

        parQuadrados.dataset.time = JSON.stringify(confrontos[i][0]);
        imparQuadrados.dataset.time = JSON.stringify(confrontos[i][1]);
    }
        iniciarCronometro(tempoTotal);
}

function semiFinais(time) {
    const linhaBaixo = document.querySelector('.linha-baixo');
    const quadrados = linhaBaixo.querySelectorAll('.quadrado');
    const linhaMeio = document.querySelector('.linha-meio');
    const meioQuadrados = linhaMeio.querySelectorAll('.quadrado');

    for (let i = 0; i < quadrados.length; i++) {
        if (i === time - 1 && quadrados[i].innerHTML) {
            for (let j = 0; j < meioQuadrados.length; j++) {
                if (!meioQuadrados[j].innerHTML) {
                    meioQuadrados[j].innerHTML = quadrados[i].innerHTML;
                    quadrados[i].innerHTML = '';
                    break;
                }
            }
            break;
        }
    }
}
function moverFinal(time){
const linhaMeio = document.querySelector('.linha-meio');
const quadrados = linhaMeio.querySelectorAll('.quadrado');
const linhaCima = document.querySelector('.linha-cima');
const cimaQuadrados = linhaCima.querySelectorAll('.quadrado');

for (let i = 0; i < quadrados.length; i++) {
        if (i === time - 1 && quadrados[i].innerHTML) {
            for (let j = 0; j < cimaQuadrados.length; j++) {
                if (!cimaQuadrados[j].innerHTML) {
                    cimaQuadrados[j].innerHTML = quadrados[i].innerHTML;
                    quadrados[i].innerHTML = '';
                    break;
                }
            }
            break;
        }
    }

}
function DecidirVencedor(botao) {
    
    const quadrado = botao.previousElementSibling;
    const timeVencedor = quadrado.innerHTML;

    
    const mensagemVitoria = document.createElement('p');
    mensagemVitoria.innerHTML = `${timeVencedor} Vencedor`;
    mensagemVitoria.classList.add('mensagem-vitoria');

   
    quadrado.parentNode.insertBefore(mensagemVitoria, quadrado);
}


const botoesTopRow = document.querySelectorAll('.linha-cima .botao');
botoesTopRow.forEach(botao => {
    botao.addEventListener('click', () => {
        DecidirVencedor(botao);
    });
});
function formatarTempo(tempo) {
    let horas = Math.floor(tempo / 3600);
    let minutos = Math.floor((tempo % 3600) / 60);
    let segundos = tempo % 60;
    return `${horas < 10 ? '0' : ''}${horas}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}

let tempoTotal = 7200; 
let intervalo;

function iniciarCronometro(tempoInicial) {
    tempoTotal = tempoInicial; 
    intervalo = setInterval(() => {
        if (tempoTotal > 0) {
            tempoTotal--;
            document.getElementById('cronometro').textContent = formatarTempo(tempoTotal);
        } else {
            pararCronometro();
        }
    }, 1000);
}
function pararCronometro() {
    clearInterval(intervalo);
}


