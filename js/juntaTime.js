function filtrarTimes() {
  const termoDeBusca = document
    .querySelector(".caixa-de-busca")
    .value.trim()
    .toLowerCase();
  const times = document.querySelectorAll(".time");

  times.forEach(function (time) {
    const nomeTime = time
      .querySelector(".nomeEquipe strong")
      .textContent.toLowerCase();

    if (nomeTime.includes(termoDeBusca)) {
      time.style.display = "block";
    } else {
      time.style.display = "none";
    }
  });
}
