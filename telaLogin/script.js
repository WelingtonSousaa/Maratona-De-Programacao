window.onload = function () {
    var avatarGrid = document.getElementById("avatarGrid");

    // Adicionar as imagens dinamicamente usando um loop de 1 a 20
    for (var i = 1; i <= 20; i++) {
        var img = document.createElement("img");
        img.src = "http://localhost/avatars/" + i + ".png"; // Substitua .jpg pelo formato correto das suas imagens
        img.alt = "Avatar " + i;
        img.style.width = '50px';
        img.style.height = '50px';
        avatarGrid.appendChild(img); // Adicionar o avatar ao grid
    }
};

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
