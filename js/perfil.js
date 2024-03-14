function sair() {
  const resposta = window.confirm(
    "VOCÊ TEM CERTEZA QUE DESEJA SAIR DA PAGINA?"
  );
  if (resposta) {
    window.location.href = "login.html";
  }
}
