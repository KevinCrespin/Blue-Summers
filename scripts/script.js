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

// Hide body until all images load
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.display = "none"
    let imagesLoaded = 0;
    const totalImages = document.querySelectorAll("img").length;

    const allImagesLoaded = () => {
        console.log(document.body.style.display)
        document.body.style.display = "block";
        console.log(document.body.style.display)
    }

    const imageLoaded = () => {
        imagesLoaded++;
        if (imagesLoaded == totalImages) {
            allImagesLoaded();
        }
    }

    document.querySelectorAll("img").forEach((img) => {
        const image = document.createElement("img")
        image.setAttribute("onload", imageLoaded());
        image.setAttribute("src", img.src);
    });
})