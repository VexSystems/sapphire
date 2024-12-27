// Change hero background
function heroChange() {
    const heroImages = document.querySelectorAll('.hero-image');
    let currentImageIndex = 0;

    // Function to fade images
    function fadeImages() {
        heroImages[currentImageIndex].style.opacity = 0;
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].style.opacity = 1;
    }

    // Call the fadeImages
    setInterval(fadeImages, 3000);
}

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