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


const updateDictionaty = () => {
    let dic = {};

    document.querySelectorAll("img").forEach((img, i) => {
        dic[i] = img.complete;
    });

    console.log(dic)

    return dic;
}

window.setInterval(updateDictionaty, 100);

// Hide body until all images load
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.display = "block"

    // checkIfImagesLoaded();
})

// const checkIfImagesLoaded = () => {
//     const imagesLoaded = updateDictionaty();
//     console.log(imagesLoaded);

//     document.querySelectorAll("img").forEach((img) => {
//         if (imagesLoaded[img] === false) {
//             // await new Promise(resolve => setTimeout(resolve, 3000));
//             // checkIfImagesLoaded()
//         } else {
//             document.body.style.display = "block";
//         }
//     });
// }