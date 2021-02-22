const navUl = document.getElementById("nav-ul")
const hamburgerIcon = document.getElementById("hamburger-btn")
const closeIcon = document.getElementById("close-icon")
const mainContainer = document.getElementById("body")

hamburgerIcon.addEventListener("click", () => {
    navUl.classList.toggle("show")
    mainContainer.classList.toggle("nav")
})

closeIcon.addEventListener("click", () => {
    navUl.classList.toggle("show")
    mainContainer.classList.toggle("nav")
})

