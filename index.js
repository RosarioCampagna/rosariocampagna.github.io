const projectsSection = document.getElementById("projectsSection");
const projectsButton = document.getElementById("projectsButton");
const contactsButton = document.getElementById("contactsButton");
const contactSection = document.getElementById("contact");
const homeButton = document.getElementById("homepage");

homeButton.addEventListener("click", () => window.scrollTo({ top }))
projectsButton.addEventListener("click", () => { projectsSection.scrollIntoView({ block: "start" }); hamburger.classList.remove("active"); offMenu.classList.remove("active"); })
contactsButton.addEventListener("click", () => { contactSection.scrollIntoView({ block: "start" }); hamburger.classList.remove("active"); offMenu.classList.remove("active"); })

const footerProjectsButton = document.getElementById("footerProjectsButton");
const footerContactsButton = document.getElementById("footerContactsButton");

footerProjectsButton.addEventListener("click", () => projectsSection.scrollIntoView({ block: "start" }))
footerContactsButton.addEventListener("click", () => contactSection.scrollIntoView({ block: "start" }))

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => window.scrollTo({ top }))

const hamburger = document.querySelector(".hamburger");
const offMenu = document.querySelector(".navbar")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    offMenu.classList.toggle("active");
})