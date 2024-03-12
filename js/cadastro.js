const nomeCompleto = document.getElementById("fullName");
const email = document.getElementById("email");
const UserName = document.getElementById("userName");
const password = document.getElementById("password");

const botaoEntra = document.getElementById("entrar");
const msgErro = document.getElementById("msgErroName");
const msgErro2 = document.getElementById("msgErroPassword");
const msgErro3 = document.getElementById("msgErroEmail");
const msgErro4 = document.getElementById("msgErroUserName");

function RevisaComponentes(event) {
  if (
    UserName.value === "" ||
    password.value === "" ||
    email.value === "" ||
    nomeCompleto.value === ""
  ) {
    event.preventDefault();
    if (nomeCompleto.value === "") {
      msgErro.removeAttribute("hidden");
      msgErro.textContent = "digite seu nome";
    }
    if (password.value === "") {
      msgErro2.removeAttribute("hidden");
      msgErro2.textContent = "digite uma senha valida";
    }
    if (email.value === "") {
      msgErro3.removeAttribute("hidden");
      msgErro3.textContent = "digite uma email valido";
    }
    if (UserName.value === "") {
      msgErro4.removeAttribute("hidden");
      msgErro4.textContent = "Digite um nome de usuário valido";
    }
  } else {
    console.log("entrou no else");
    msgErro.setAttribute("hidden", true);
    msgErro2.setAttribute("hidden", true);
    msgErro3.setAttribute("hidden", true);
    msgErro4.setAttribute("hidden", true);
  }
}
