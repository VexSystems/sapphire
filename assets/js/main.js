// Toggle Mobile Menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = document.querySelectorAll("#mobile-menu a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// Close Mobile Menu on Link Click
mobileMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
    });
});