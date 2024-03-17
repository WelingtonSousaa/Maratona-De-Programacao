function selecionarbotao(elemento) {
  console.log("entrou");
  const botoes = document.querySelectorAll("#botoes button");
  botoes.forEach((button) => button.classList.remove("selecionado"));

  elemento.classList.add("selecionado");
}
