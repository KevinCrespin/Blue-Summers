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

window.addEventListener("load", () => {
    document.body.style.display = "block"
    alert("loaded");
})


const checkImagesLoaded = () => {
    let dic = {};
    document.querySelectorAll("img").forEach((img, i) => {
        dic[i] = img.complete;
    });
    console.log(dic)
}

window.setInterval(updateDictionaty, 100);