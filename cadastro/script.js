let AvatarSelecionado;

window.onload = function () {
  var gradeAvatar = document.getElementById("gradeAvatar");

  // Adicionar as imagens dinamicamente usando um loop de 1 a 20
  for (var i = 1; i <= 20; i++) {
    var img = document.createElement("img");
    img.src = "http://localhost/avatars/" + i + ".png";
    img.alt = "Avatar " + i;
    img.style.width = "50px";
    img.style.height = "50px";
    img.id = "avatar" + i;
    img.className = "imgAvatar";
    gradeAvatar.appendChild(img); // Adicionar o avatar ao grid
  }

  const avatars = document.querySelectorAll(".imgAvatar");
  avatars.forEach((avatar) => {
    avatar.addEventListener("click", () => {
      // Remove a classe 'avatarSelecionado' de todos os avatars
      avatars.forEach((avatar) => {
        avatar.classList.remove("avatarSelecionado");
      });
      // Adiciona a classe 'avatarSelecionado' apenas ao avatar clicado
      avatar.classList.add("avatarSelecionado");
      // Armazena o ID do avatar selecionado na variável
      AvatarSelecionado = avatar.src;
      console.log("variavel que guarda o src da img: " + AvatarSelecionado);
    });
  });
};



const container = document.getElementById("container");
const registrarBtn = document.getElementById("registrar");
const loginBtn = document.getElementById("login");

registrarBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

