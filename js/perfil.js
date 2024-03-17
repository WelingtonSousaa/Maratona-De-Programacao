const imgUsuario = document.getElementById("imgUsuario");
const menuUsuario = document.getElementById("menuUsuario");
let controle = 0;
function sair() {
  const resposta = window.confirm(
    "VOCÊ TEM CERTEZA QUE DESEJA SAIR DA PAGINA?"
  );
  if (resposta) {
    var newWindow = window.open("login.html", "_blank");
    newWindow.focus(); // Foca na nova janela
    window.close(); // Fecha a janela anterior
  }
}

function mostrarMenuUsuario() {
  if (controle === 0) {
    menuUsuario.style.display = "block";
    controle = 1;
  } else {
    menuUsuario.style.display = "none";
    controle = 0;
  }
}
