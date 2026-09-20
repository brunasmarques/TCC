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

        if (!menu || !overlay) return;

        menu.classList.add("active");
        overlay.classList.add("active");

        document.body.style.overflow = "hidden";
    }

    /* =====================================================
       FECHAR MENU
    ===================================================== */

    function fecharMenu() {

        if (!menu || !overlay) return;

        menu.classList.remove("active");
        overlay.classList.remove("active");

        document.body.style.overflow = "";
    }

    /* =====================================================
       BOTÃO HAMBÚRGUER
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
       MODO ESCURO
    ===================================================== */

    const botaoTemaDesktop = document.querySelector(".modo-claro");
    const botaoTemaMobile = document.querySelector(".mobile-theme");

    function mudarModoEscuro(event) {

        event.preventDefault();

        fecharMenu();

        document.body.classList.remove("entrando");
        document.body.classList.add("saindo");

        setTimeout(function () {

            window.location.href = "../pages/referencias.html";

        }, 500);

    }

    if (botaoTemaDesktop) {

        botaoTemaDesktop.addEventListener("click", mudarModoEscuro);

    }

    if (botaoTemaMobile) {

        botaoTemaMobile.addEventListener("click", mudarModoEscuro);

    }

});