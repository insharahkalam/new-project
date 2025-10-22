const images = document.querySelectorAll(".images")

images.forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.style.width = "600px"

    })
})

images.forEach((img) => {
    img.addEventListener("mouseout", () => {
        img.style.width = "80px"

    })
})