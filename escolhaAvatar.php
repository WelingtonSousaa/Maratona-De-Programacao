<?php
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="css/escolhaAvatar.css" />
</head>

<body>
  <div>
    <h1>Agora é a hora de você escolher seu avatar!</h1>
    <div id="escolhaAvatar">
      <p><strong>avatar selecionado</strong></p>
      <img src="img/image.png" alt="" id="avatarDoUsuario" />
    </div>
    <div id="avatas">
      <img src="img/image.png" alt="" class="avatar avatarSelecionado" onclick="selecionarAvatar(this)" />
      <img src="https://www.shutterstock.com/image-photo/green-hello-world-260nw-1311244001.jpg" alt="" class="avatar"
        onclick="selecionarAvatar(this)" />
      <img src="https://live.staticflickr.com/3451/3350512370_22a50ef2f2.jpg" alt="" class="avatar"
        onclick="selecionarAvatar(this)" />
      <img src="img/d330a217bfa83e78e013d40a259d5819.jpg" alt="" class="avatar" onclick="selecionarAvatar(this)" />
      <img
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--az7po7le--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/2alu8dnpjxvet6abacp5.png"
        alt="" class="avatar" onclick="selecionarAvatar(this)" />
      <img
        src="https://i.em.com.br/4EQdAAUT7PzEBXDEtvYp0zMDhw8=/1200x750/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/12/06/1328889/imagem-de-um-sapo-cururu_1_151268.jpg"
        alt="" class="avatar" onclick="selecionarAvatar(this)" />
      <img src="https://odia.ig.com.br/_midias/jpg/2023/05/24/385x420/1_azul_caneta-29197997.jpg" alt="" class="avatar"
        onclick="selecionarAvatar(this)" />
      <img src="https://cdn.awsli.com.br/600x700/255/255164/produto/97545176/b0ce6d00e2.jpg" alt="" class="avatar"
        onclick="selecionarAvatar(this)" />
    </div>
  </div>
  <script src="js/escolhaAvatar.js"></script>
</body>

</html>