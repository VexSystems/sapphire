document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop, // Scroll to the target's offsetTop
      behavior: 'smooth' // Smooth scroll
    });
  });
});