document.addEventListener("DOMContentLoaded", function () {
    /* =====================================================
       ANIMAÇÃO DE ENTRADA
    ===================================================== */

    document.body.classList.add("entrando");

    /* =====================================================
       ELEMENTOS DO MENU MOBILE
    ===================================================== */

    const menuButton = document.getElementById("mobileMenuButton");

    const menu = document.getElementById("mobileMenu");

    const closeButton = document.getElementById("mobileClose");

    const overlay = document.getElementById("mobileOverlay");

    /* =====================================================
       ABRIR MENU
    ===================================================== */

    function abrirMenu() {
        if (!menu || !overlay) {
            return;
        }

        menu.classList.add("active");

        overlay.classList.add("active");

        document.body.style.overflow = "hidden";
    }

    /* =====================================================
       FECHAR MENU
    ===================================================== */

    function fecharMenu() {
        if (!menu || !overlay) {
            return;
        }

        menu.classList.remove("active");

        overlay.classList.remove("active");

        document.body.style.overflow = "";
    }

    /* =====================================================
       BOTÃO HAMBURGER
    ===================================================== */

    if (menuButton) {
        menuButton.addEventListener("click", function () {
            if (menu.classList.contains("active")) {
                fecharMenu();
            } else {
                abrirMenu();
            }
        });
    }

    /* =====================================================
       BOTÃO FECHAR
    ===================================================== */

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            fecharMenu();
        });
    }

    /* =====================================================
       OVERLAY
    ===================================================== */

    if (overlay) {
        overlay.addEventListener("click", function () {
            fecharMenu();
        });
    }

    /* =====================================================
       FECHAR MENU AO CLICAR NOS LINKS
    ===================================================== */

    const links = document.querySelectorAll(".mobile-nav-item");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            fecharMenu();
        });
    });

    /* =====================================================
       MODO CLARO
    ===================================================== */

    const modoClaro = document.querySelector(".modo-claro");

    const modoClaroMobile = document.querySelector(".mobile-theme");

    function mudarParaModoClaro(event) {
        event.preventDefault();

        fecharMenu();

        document.body.classList.remove("entrando");

        document.body.classList.add("saindo");

        setTimeout(function () {
            window.location.href = "/pages-clara/manualClaro.html";
        }, 500);
    }

    if (modoClaro) {
        modoClaro.addEventListener("click", mudarParaModoClaro);
    }

    if (modoClaroMobile) {
        modoClaroMobile.addEventListener("click", mudarParaModoClaro);
    }
});
