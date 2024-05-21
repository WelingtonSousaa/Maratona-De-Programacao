<?php
session_start(); // Inicia a sessão
if (!isset($_SESSION['authenticated']) || $_SESSION['authenticated'] !== true) {
  // Se o usuário não estiver autenticado, redirecione-o para a página de login
  header('Location: http://localhost/projeto/login.php');
  exit(); // Certifique-se de sair após o redirecionamento
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Site</title>
  <link rel="stylesheet" href="css/main.css" />
  <link rel="stylesheet" href="css/criarTime.css" />
  <link rel="stylesheet" href="css/criarMaratona.css" />
  <link rel="stylesheet" href="css/inforUsuario.css" />
  <link rel="stylesheet" href="css/principal.css" />
  <link rel="stylesheet" href="css/gerenciarMaratona.css" />
  <link rel="stylesheet" href="css/gerenciarTimes.css" />
  <link rel="stylesheet" href="css/ranking.css" />
  <link rel="stylesheet" href="css/comunidade.css" />
  <link rel="stylesheet" href="css/estatisticas.css" />

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
</head>

<body>
  <input type="hidden" id="hidden-username" value="" />
  <nav id="navegacao">
    <ul>
      <li>
        <p onclick="retornaPagPrincipal()"><strong>NOME DO SITE</strong></p>
      </li>

      <li>
        <button class="navBotoes navBotoesDrop" onclick="aparecerMenu('timesDropdown')">
          Times
        </button>
        <div id="timesDropdown" class="drop-menu">
          <button onclick="retornaPagCriarTime()">Criar times</button>
          <button onclick="retornaPagGerenciarTimes()">
            Gerenciar times
          </button>
        </div>
      </li>

      <li>
        <button class="navBotoes navBotoesDrop" onclick="aparecerMenu('maratonasDropdown')">
          Maratonas
        </button>
        <div id="maratonasDropdown" class="drop-menu">
          <button onclick="retornaPagCriarMaratona()">Criar maratona</button>
          <button onclick="retornaPagGerenciarMaratona()">
            Gerenciar maratona
          </button>
          <button>Buscar maratona</button>
        </div>
      </li>

      <li>
        <button class="navBotoes" onclick="RetornaPagRanking()">
          Ranking
        </button>
      </li>

      <li>
        <button class="navBotoes" onclick="retornaComunidade()">
          Comunidade
        </button>
      </li>

      <li>
        <img src="avatars/1.svg" alt="Imagem do usuario" id="imgUsuario" onclick="RetornaPagInforUsuario()" />
      </li>
    </ul>
  </nav>
  <div id="global">
    <div id="principal">
      <h1 id="boasVindas">Bem-vindo ao nosso site!</h1>
      <div id="conteiner">
        <p>
          Crie novos times, gerencie novas maratonas e aprimore suas
          habilidades
        </p>
        <div id="conteinerBotoes">
          <button onclick="retornaPagCriarMaratona()">
            criar uma maratona
          </button>

          <button onclick="retornaPagCriarTime()">criar um time</button>
        </div>
      </div>
      <h2>Inicie sua jornada em site</h2>
      <div id="Opcoes">
        <div class="opcao" onclick="retornaPagCriarTime()">
          <img src="img/imagem criar time em jpeg.jpeg" alt="" />
          <p>Criar um time</p>
        </div>

        <div class="opcao" onclick="retornaPagGerenciarTimes()">
          <img src="img/gerenciartime.jpeg" alt="" />
          <p>Gerenciar times</p>
        </div>

        <div class="opcao" onclick="retornaPagCriarMaratona()">
          <img src="img/criar maratona em jpng.jpeg" alt="" />
          <p>Criar maratonas</p>
        </div>

        <div class="opcao" onclick="retornaPagGerenciarMaratona()">
          <img src="img/gerenciarmara.jpg" alt="" />
          <p>Gerenciar maratonas</p>
        </div>

        <div class="opcao">
          <img src="img/image.png" alt="" />
          <p>Gerenciar partidas</p>
        </div>

        <div class="opcao" onclick="retornaPagEstatisticas()">
          <img src="img/estatisticas.jpg" alt="" />
          <p>Estatísticas</p>
        </div>
      </div>
    </div>
  </div>

  <script src="utils.js"></script>
  <script src="assets/js/jQuery/jquery-3.7.1.min.js"></script>
  <script src="js/main.js"></script>
  <script src="paginas/PagPrincipal.js"></script>
  <script src="js/CriarTime.js"></script>
  <script src="js/criarMaratona.js"></script>
  <script src="paginas/PagInforUsuario.js"></script>
  <script src="js/gerenciarMaratona.js"></script>
  <script src="js/gerenciarTimes.js"></script>
  <script src="js/ranking.js"></script>
  <script src="js/comunidade.js"></script>
  <script src="js/estatisticas.js"></script>
  <script>
    $(document).ready(function() {
    // Chamando a função recuperarNomeUsuario com uma função de retorno de chamada
    recuperarNomeUsuario(function(username) {
        if (username !== null) {
            // Atualizar o valor do elemento oculto com o nome de usuário recuperado
            $('#hidden-username').val(username);
            console.log("Nome de usuário recuperado:", username);
        } else {
            console.error("Nome de usuário não encontrado.");
        }
    });
});
  </script>
  
</body>

</html>