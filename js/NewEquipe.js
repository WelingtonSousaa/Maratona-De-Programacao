const escudos = document.getElementById("escudos");
const time = document.getElementById("time");
const OpcaoTime = document.getElementById("opcao-time");
let aparecer = 0;
let apareceTime = 0;

function MostarEscudos() {
  if (aparecer === 0) {
    escudos.style.display = "block";
    aparecer = 1;
  } else {
    escudos.style.display = "none";
    aparecer = 0;
  }
}

function selecionarImagem(elemento) {
  const imagens = document.querySelectorAll("#escudos img");
  imagens.forEach((img) => img.classList.remove("escudoSelecionado"));

  elemento.classList.add("escudoSelecionado");
  const caminhoImagem = elemento.src;
  document.getElementById("imagemSelecionada").value = caminhoImagem;
}

function mostrarOpcaoTime() {
  if (apareceTime === 0) {
    OpcaoTime.style.display = "block";
    apareceTime = 1;
  } else {
    OpcaoTime.style.display = "none";
    apareceTime = 0;
  }
}
