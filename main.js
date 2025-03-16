const logo = document.querySelector(".title");

logo.addEventListener("click", () => window.scrollTo({ top, behavior: "smooth" }))

const hamburger = document.querySelector(".hamburger");
const offMenu = document.querySelector(".off-screen-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    offMenu.classList.toggle("active");
})
