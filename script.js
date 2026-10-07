document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("mobileMenuButton");
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("mobileOverlay");
    const closeButton = document.getElementById("mobileClose");

    if (!menuButton || !menu || !overlay) return;

    function abrirMenu() {
        menu.classList.add("active");
        overlay.classList.add("active");
        menuButton.classList.add("active");

        document.body.style.overflow = "hidden";
    }

    function fecharMenu() {
        menu.classList.remove("active");
        overlay.classList.remove("active");
        menuButton.classList.remove("active");

        document.body.style.overflow = "";
    }

    function alternarMenu() {

        if (menu.classList.contains("active")) {
            fecharMenu();
        } else {
            abrirMenu();
        }

    }

    menuButton.addEventListener("click", alternarMenu);

    if (closeButton) {
        closeButton.addEventListener("click", fecharMenu);
    }

    overlay.addEventListener("click", fecharMenu);

    document.querySelectorAll(".mobile-nav-item").forEach(item => {
        item.addEventListener("click", fecharMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 600) {
            fecharMenu();
        }
    });

});