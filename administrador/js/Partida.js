function mostrarSegundaTela() {
    
        document.getElementById('conteudo-modal').innerHTML = `
            <span id="pontuacaoTimeA">Pontuação: 0</span>
            <h2>Time A</h2>
            <ul class = 'timeA'>
                <li><h3>Participante 1.....................................<span class="pontuacao">0</span> <button class="botao-pontuacao" onclick="incrementarPontuacao(this)">+</button></h3></li>
                <li><h3>Participante 2.....................................<span class="pontuacao">0</span> <button class="botao-pontuacao" onclick="incrementarPontuacao(this)">+</button></h3></li>
                <li><h3>Participante 3.....................................<span class="pontuacao">0</span> <button class="botao-pontuacao" onclick="incrementarPontuacao(this)">+</button></h3></li>
                <li><h3>Participante 4.....................................<span class="pontuacao">0</span> <button class="botao-pontuacao" onclick="incrementarPontuacao(this)">+</button></h3></li>
                <li><h3>Participante 5.....................................<span class="pontuacao">0</span> <button class="botao-pontuacao" onclick="incrementarPontuacao(this)">+</button></h3></li>
            </ul>
            <span id="pontuacaoTimeB">Pontuação: 0</span>
            <h2>Time B</h2>
            <ul class = 'timeB'>
                <li><h3>Participante 1.....................................<span class="pontuacao">0</span> <button class="botao-pontuacao" onclick="incrementarPontuacao(this)">+</button></h3></li>
                <li><h3>Participante 2.....................................<span class="pontuacao">0</span> <button class="botao-pontuacao" onclick="incrementarPontuacao(this)">+</button></h3></li>
                <li><h3>Participante 3.....................................<span class="pontuacao">0</span> <button class="botao-pontuacao" onclick="incrementarPontuacao(this)">+</button></h3></li>
                <li><h3>Participante 4.....................................<span class="pontuacao">0</span> <button class="botao-pontuacao" onclick="incrementarPontuacao(this)">+</button></h3></li>
                <li><h3>Participante 5.....................................<span class="pontuacao">0</span> <button class="botao-pontuacao" onclick="incrementarPontuacao(this)">+</button></h3></li>
            </ul>
                `;
        document.getElementById('modal').style.display = 'block';
    }

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}
function incrementarPontuacao(botao) {
    let participanteItem = botao.parentNode;
    let pontuacaoSpan = participanteItem.querySelector('.pontuacao');
    let pontuacaoAtual = parseInt(pontuacaoSpan.textContent);
    pontuacaoAtual++;
    pontuacaoSpan.textContent = pontuacaoAtual;

    atualizarPontuacaoTime();
}

function atualizarPontuacaoTime() {
    let pontuacoesTimeA = document.querySelectorAll('.timeA .pontuacao');
    let pontuacoesTimeB = document.querySelectorAll('.timeB .pontuacao');

    
    let totalPontosTimeA = 0;
    pontuacoesTimeA.forEach(pontuacao => {
        totalPontosTimeA += parseInt(pontuacao.textContent);
    });
    document.getElementById('pontuacaoTimeA').textContent = `Pontuação: ${totalPontosTimeA}`;

    let totalPontosTimeB = 0;
    pontuacoesTimeB.forEach(pontuacao => {
        totalPontosTimeB += parseInt(pontuacao.textContent);
    });
    document.getElementById('pontuacaoTimeB').textContent = `Pontuação: ${totalPontosTimeB}`;
}