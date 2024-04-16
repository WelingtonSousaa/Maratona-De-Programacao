let usuariosSelecionados = [];
let controle = 1;

// Função para verificar se todos os campos estão preenchidos e prosseguir
function verificarPreenchimento(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll("input");
  let todosPreenchidos = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      todosPreenchidos = false;
      input.classList.add("campo-vazio");
    } else {
      input.classList.remove("campo-vazio");
    }
  });

  if (todosPreenchidos) {
    apertouProsseguir();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// Função executada quando o botão "Prosseguir" é clicado
function apertouProsseguir() {
  const spanAndamento = document.querySelector("#progresso .proximos");
  if (spanAndamento) {
    spanAndamento.classList.remove("proximos");
    spanAndamento.classList.add("andamento");
  }

  const spanConcluido = document.querySelector("#progresso .andamento");
  if (spanConcluido) {
    spanConcluido.classList.remove("andamento");
    spanConcluido.classList.add("concluido");
  }

  retornaPagEscolherParticipantes();
  controle++;
}

let retornouParticipantes = false;

function dadosPrincipais() {
  return `<form action="">
  <div> <label for="nomeTime">Nome da Equipe:</label>
   <input type="text" name="nomeTime" id="inputNomeTime" placeholder="Exemplo nome">
 </div>
   <div id="ultimaDiv"> <label for="abreviacaoTime">Abreviação do time:</label>
     <input type="text" name="abreviacaoTime" id="inputAbreviacaoTime" placeholder="EXN">
 </div> 
 <button class="prossegir" onclick ="verificarPreenchimento(event)">PROSSEGUIR</button>
 
</form>`;
}

function retornaPagEscolherParticipantes() {
  let conteinerCriaTime = document.getElementById("conteinerCriaTime");
  let NewHtml = `<div id="usuarios">
  <div class="usuario">
    <img src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain" alt="">
    <p>nome usuario</p>
  </div>
  <div class="usuario">
    <img src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain" alt="">
    <p>nome usuario</p>
  </div>
  <div class="usuario">
    <img src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain" alt="">
    <p>nome usuario</p>
  </div>
  <div class="usuario">
    <img src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain" alt="">
    <p>nome usuario</p>
  </div>
  <div class="usuario">
    <img src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain" alt="">
    <p>nome usuario</p>
  </div>
  <div class="usuario">
    <img src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain" alt="">
    <p>nome usuario</p>
  </div>
  <div class="usuario">
    <img src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain" alt="">
    <p>nome usuario</p>
  </div>
  <div class="usuario">
    <img src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain" alt="">
    <p>nome usuario</p>
  </div>
  <div class="usuario">
    <img src="https://th.bing.com/th/id/OIP.Z4bqFXAzNTYPRzWFkQsZPQAAAA?rs=1&pid=ImgDetMain" alt="">
    <p>nome usuario</p>
  </div>
  `;
  conteinerCriaTime.innerHTML = NewHtml;
  retornouParticipantes = true;

  // Seleciona os elementos .usuario e adiciona os ouvintes de evento após a inserção no DOM
  const usuarios = document.querySelectorAll(".usuario");
  usuarios.forEach((usuario) => {
    usuario.addEventListener("click", () => {
      const estaSelecionado = usuario.classList.contains("selecionado");

      if (usuariosSelecionados.length >= 5 && !estaSelecionado) {
        const primeiroSelecionado = usuariosSelecionados.shift();
        primeiroSelecionado.classList.remove("selecionado");
        usuariosSelecionados.push(usuario);
        usuario.classList.add("selecionado");
        alert(
          "Você só pode escolher 5 participantes para a equipe. O primeiro selecionado foi removido."
        );
      } else if (estaSelecionado) {
        usuario.classList.remove("selecionado");
        usuariosSelecionados = usuariosSelecionados.filter(
          (selecionado) => selecionado !== usuario
        );
      } else {
        usuariosSelecionados.push(usuario);
        usuario.classList.add("selecionado");
      }
    });
  });
}

function retornaPagCriarTime() {
  let global = document.getElementById("global");
  let NewHtml = `<div id="criarTime">
  <div id="conteinerPassos">
    <div>
      <div id="passos">
        <p>Dados</p>
        <p>Participantes</p>
        <p>Escudos</p>
        <p>Concluído</p>
      </div>
      <div id="progresso">
        <span id="span01" class="andamento"></span>
        <span id="span02" class="proximos"></span>
        <span id="span03" class="proximos"></span>
        <span id="span04" class="proximos"></span>
      </div>
    </div>
  </div>
  <div id="conteinerMensagem">
    <p>Cadastre seu time para participar de maratonas incríveis</p>
    <img src="img/criarTime.jpeg" alt="">
  </div>
  <div id="conteinerCriaTime">
    ${dadosPrincipais()}
  </div>
</div>
`;

  global.innerHTML = NewHtml;
}
