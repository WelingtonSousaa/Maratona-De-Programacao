const inputUserName = document.getElementById("userName");
const botaoEntra = document.getElementById("entrar");
const password = document.getElementById("password");
const msgErro = document.getElementById("msgErroName");
const msgErro2 = document.getElementById("msgErroPassword");

function RevisaNomeESenha(event) {
  if (inputUserName.value === "" || password.value === "") {
    event.preventDefault();
    if (inputUserName.value === "") {
      msgErro.removeAttribute("hidden");
      msgErro.textContent = "nome de usuario invalido";
    }
    if (password.value === "") {
      msgErro2.removeAttribute("hidden");
      msgErro2.textContent = "Senha incorreta";
    }
  } else {
    msgErro.setAttribute("hidden", true);
    msgErro2.setAttribute("hidden", true);
  }
}
