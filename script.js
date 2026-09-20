document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("mobileMenuButton");
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("mobileOverlay");
    const closeButton = document.getElementById("mobileClose");

    menuButton.addEventListener("click", () => {
        menu.classList.add("active");
        overlay.classList.add("active");
    });

    closeButton.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
    });

});