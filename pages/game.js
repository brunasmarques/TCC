document.addEventListener("DOMContentLoaded", function () {
    // Entrada suave da página
    document.body.classList.add("entrando");

    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuButton = document.getElementById("mobileMenuButton");
    const menu = document.getElementById("mobileMenu");
    const closeButton = document.getElementById("mobileClose");
    const overlay = document.getElementById("mobileOverlay");

    function abrirMenu() {
        if (!menu || !overlay) return;

        menu.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function fecharMenu() {
        if (!menu || !overlay) return;

        menu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (menuButton) {
        menuButton.addEventListener("click", function () {
            if (menu.classList.contains("active")) {
                fecharMenu();
            } else {
                abrirMenu();
            }
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", fecharMenu);
    }

    if (overlay) {
        overlay.addEventListener("click", fecharMenu);
    }

    document.querySelectorAll(".mobile-nav-item").forEach(function (link) {
        link.addEventListener("click", fecharMenu);
    });

    /* =====================================================
       MODO CLARO
    ===================================================== */

    const botaoTema = document.querySelector(".modo-claro");
    const botaoTemaMobile = document.querySelector(".mobile-theme");

    function mudarTema(event) {
        event.preventDefault();

        fecharMenu();

        document.body.classList.remove("entrando");
        document.body.classList.add("saindo");

        setTimeout(function () {
            window.location.assign("../pages-clara/gameClaro.html");
        }, 500);
    }

    if (botaoTema) {
        botaoTema.addEventListener("click", mudarTema);
    }

    if (botaoTemaMobile) {
        botaoTemaMobile.addEventListener("click", mudarTema);
    }
});