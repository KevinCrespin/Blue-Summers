// Burger toggle
const burgerFunction = () => {
    const burgerMenu = document.getElementById("toggle");
    const nav = document.getElementById("nav");

    if (burgerMenu.checked == true) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

// Hide body until all images load with JQuery
$(document).ready(() => {
    document.body.style.display = "none"
    let imagesLoaded = 0;
    const totalImages = $("img").length;

    const imageLoaded = () => {
        imagesLoaded++;
        if (imagesLoaded == totalImages) {
            allImagesLoaded();
        }
    }

    $("img").each((_, img) => {
        $("<img>").on("load", imageLoaded).attr("src", $(img).attr("src"));
    });

    const allImagesLoaded = () => {
        document.body.style.display = "block";
    }
})