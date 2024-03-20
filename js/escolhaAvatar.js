function selecionarAvatar(elemento) {
  const imagens = document.querySelectorAll("#avatas img");
  imagens.forEach((img) => img.classList.remove("avatarSelecionado"));

  elemento.classList.add("avatarSelecionado");
  const avatar = elemento.src;
  document.getElementById("avatarDoUsuario").src = avatar;
}
