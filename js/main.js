function aparecerMenu(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "flex";

    // Adiciona um ouvinte de evento de clique ao documento inteiro
    document.addEventListener("click", function (event) {
      var dropdowns = document.querySelectorAll(".drop-menu");
      var buttons = document.querySelectorAll(".navBotoesDrop");

      // Verifica se o clique ocorreu dentro de algum dropdown ou nos botões
      for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].contains(event.target)) {
          dropdowns[i].style.display = "none"; // Se o clique foi dentro de um dropdown, ele o fecha
        }
      }

      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].contains(event.target)) {
          return; // Se o clique foi em um botão, não faz nada
        }
      }

      // Se o clique não foi dentro de um dropdown nem em um botão, fecha todos os dropdowns
      for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = "none";
      }
    });
  } else {
    dropdown.style.display = "none";
  }
}
