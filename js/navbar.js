
const hamberger = document.querySelector(".hamberger")
const navLinks = document.querySelector(".brand-links")
const hambergerIcon = document.querySelector(".hamberger i")

console.log(hambergerIcon.classList)

console.log(navLinks.style)
let toggleFlage = 0
hamberger.addEventListener("click", () => {
    if (toggleFlage === 0) {
        navLinks.style.display = "block"
        navLinks.style.transform = "translateX(0)";
        hambergerIcon.className = "bi bi-x"
        toggleFlage = 1
    }
    else {
        navLinks.style.display = "block"
        navLinks.style.transform = "translateX(-110%)";
        hambergerIcon.className = "bi bi-list"
        toggleFlage = 0
    }
})