const escudos = document.getElementById("escudos");
let aparecer = 0;

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
