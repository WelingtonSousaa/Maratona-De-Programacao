const botaoProsseguir = document.querySelector("#criarTime button");
const spans = document.querySelectorAll("#progresso span");
const form = document.querySelector("form");

botaoProsseguir.addEventListener("click", function (event) {
  event.preventDefault(); // Para evitar que o formulário seja enviado por padrão

  // Verificar se os campos do formulário estão vazios
  const inputs = form.querySelectorAll("input");
  let camposVazios = false;
  inputs.forEach(function (input) {
    if (input.value.trim() === "") {
      camposVazios = true;
      input.classList.add("campo-vazio");
    } else {
      input.classList.remove("campo-vazio");
    }
  });

  if (camposVazios) {
    alert("Por favor, preencha todos os campos.");
  } else {
    // Encontrar o primeiro span com a classe "proximos" e trocar para "andamento"
    const spanAndamento = document.querySelector("#progresso .proximos");
    if (spanAndamento) {
      spanAndamento.classList.remove("proximos");
      spanAndamento.classList.add("andamento");
    }

    // Adicionar classe "concluido" ao primeiro span com a classe "andamento"
    const spanConcluido = document.querySelector("#progresso .andamento");
    if (spanConcluido) {
      spanConcluido.classList.remove("andamento");
      spanConcluido.classList.add("concluido");
    }
  }
});
