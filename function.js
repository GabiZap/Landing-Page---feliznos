let catImg = document.getElementById("kitty");
let email = document.getElementById("email");
let bodycolor = document.body;

var kitcolor = "orange";


function imgChange() {
    if (kitcolor === "orange"){
        catImg.src = "images/cat_2.png";
        kitcolor = "grey";
    }
    else {
        catImg.src = "images/cat_1.png";
        kitcolor = "orange";
    }

}

function hideEmail() {
    email.style.color = "#d47c4f";
    email.innerHTML = "<h2>¡Gracias! Estaremos en contacto</h2>";
}

function  darkMode() {
    bodycolor.classList.toggle("dark-mode");
}