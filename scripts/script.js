// Burger menu toggle
const burgerFunction = () => {
    const burgerMenu = document.getElementById("toggle");
    const nav = document.getElementById("nav");

    if (burgerMenu.checked == true) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

let DOMLoaded = false;
let fontsLoaded = false;

window.addEventListener("load", () => {
    DOMLoaded = true;
    if (DOMLoaded && fontsLoaded) {
        document.body.style.display = "block"
    }
})

document.fonts.ready.then(() => {
    fontsLoaded = true

    if (DOMLoaded && fontsLoaded) {
        document.body.style.display = "block"
    }
});