<?php
?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CodeMaster</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/main.css" />
  <link rel="stylesheet" href="css/nav.css" />
  <link rel="stylesheet" href="css/NewEquipe.css" />
  <link rel="stylesheet" href="css/myMaratonas.css" />
  <link rel="stylesheet" href="css/juntarTime.css" />
</head>

<body>
  <nav>
    <div id="logo">
      <span class="bi bi-file-earmark-code-fill"></span>
      <p><strong>UFC code</strong></p>
    </div>
    <img src="img/d330a217bfa83e78e013d40a259d5819.jpg" alt="usuario" id="imgUsuario" class="dropdown"
      onclick="mostrarMenuUsuario()" />
  </nav>

  <div class="dropdown-menu" id="menuUsuario">
    <button class="opcao bi bi-pencil-fill">editar meu perfil</button>
    <a href="" class="opcao bi bi-graph-up">minhas estatisticas</a>
    <a href="" class="opcao zonaVermelha bi bi-person-fill-x">apagar conta</a>
    <a href="" class="opcao zonaVermelha bi bi-door-open-fill" onclick="sair()">sair</a>
  </div>

  <div id="tela">
    <section id="botoes">
      <button class="botao bi bi-controller" onclick="maratonas(), selecionarbotao(this)">
        maratonas
      </button>

      <div>
        <button class="botao bi bi-people-fill" id="time" onclick="mostrarOpcaoTime(), selecionarbotao(this)">
          time
        </button>
        <div id="opcao-time">
          <button class="botao bi bi-people-fill" onclick="mostrarOpcaoTime(),newTime()">
            criar time
          </button>
          <button class="botao bi bi-people-fill" onclick="mostrarOpcaoTime(), telaTimes()">
            juntar-se a um time
          </button>
        </div>
      </div>

      <button class="botao bi bi-diagram-3-fill" onclick="MyMaratona(), selecionarbotao(this)">
        minhas maratonas
      </button>

      <button class="botao bi bi-clock-history" onclick="selecionarbotao(this)">
        meu histórico
      </button>

      <button class="botao bi bi-person-fill" onclick="selecionarbotao(this)">
        meu perfil
      </button>
    </section>
    <section id="global"></section>
  </div>

  <script src="js/main.js"></script>
  <script src="paginas/myMaratonas.js"></script>
  <script src="js/nav.js"></script>
  <script src="js/perfil.js"></script>
  <script src="js/NewEquipe.js"></script>
  <script src="paginas/newTime.js"></script>
  <script src="paginas/maratonas.js"></script>
  <script src="js/juntaTime.js"></script>
  <script src="paginas/telaTimes.js"></script>
</body>

</html>