function burgerFunction() {
    var burgerMenu = document.getElementById("toggle");
    var nav = document.getElementById("nav");

    if (burgerMenu.checked == true) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}