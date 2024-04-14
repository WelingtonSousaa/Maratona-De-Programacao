function aparecerMenu(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
}
