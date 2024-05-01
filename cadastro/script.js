window.onload = function () {
    var gradeAvatar = document.getElementById("gradeAvatar");

    // Adicionar as imagens dinamicamente usando um loop de 1 a 20
    for (var i = 1; i <= 20; i++) {
        var img = document.createElement("img");
        img.src = "http://localhost/avatars/" + i + ".png";
        img.alt = "Avatar " + i;
        img.style.width = '50px';
        img.style.height = '50px';
        gradeAvatar.appendChild(img); // Adicionar o avatar ao grid
    }
};




const container = document.getElementById('container');
const registrarBtn = document.getElementById('registrar');
const loginBtn = document.getElementById('login');

registrarBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
