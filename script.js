document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ANIMAÇÃO DE ENTRADA
    ====================================================== */

    document.body.classList.add("entrando");


    /* =====================================================
       ELEMENTOS
    ====================================================== */

    const menuButton =
        document.getElementById("mobileMenuButton");

    const menu =
        document.getElementById("mobileMenu");

    const closeButton =
        document.getElementById("mobileClose");

    const overlay =
        document.getElementById("mobileOverlay");


    /* =====================================================
       ABRIR MENU
    ====================================================== */

    function abrirMenu() {

        if (!menu || !overlay || !menuButton) {
            return;
        }


        menu.classList.add("active");

        overlay.classList.add("active");

        menuButton.classList.add("active");


        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );


        menuButton.setAttribute(
            "aria-label",
            "Fechar menu"
        );


        document.body.style.overflow = "hidden";
    }


    /* =====================================================
       FECHAR MENU
    ====================================================== */

    function fecharMenu() {

        if (!menu || !overlay || !menuButton) {
            return;
        }


        menu.classList.remove("active");

        overlay.classList.remove("active");

        menuButton.classList.remove("active");


        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );


        menuButton.setAttribute(
            "aria-label",
            "Abrir menu"
        );


        document.body.style.overflow = "";
    }


    /* =====================================================
       BOTÃO HAMBURGER
    ====================================================== */

    if (menuButton) {

        menuButton.addEventListener(
            "click",
            function () {

                if (
                    menu.classList.contains("active")
                ) {

                    fecharMenu();

                } else {

                    abrirMenu();

                }

            }
        );

    }


    /* =====================================================
       BOTÃO X
    ====================================================== */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            fecharMenu
        );

    }


    /* =====================================================
       CLICAR FORA
    ====================================================== */

    if (overlay) {

        overlay.addEventListener(
            "click",
            fecharMenu
        );

    }


    /* =====================================================
       LINKS MOBILE
    ====================================================== */

    const links =
        document.querySelectorAll(
            ".mobile-nav-item"
        );


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                fecharMenu();

            }
        );

    });


    /* =====================================================
       MODO CLARO
    ====================================================== */

    const modoClaro =
        document.querySelector(".modo-claro");

    const modoClaroMobile =
        document.querySelector(".mobile-theme");


    function mudarParaModoClaro(event) {

        event.preventDefault();

        fecharMenu();

        document.body.classList.remove(
            "entrando"
        );

        document.body.classList.add(
            "saindo"
        );


        setTimeout(function () {

            window.location.href =
                "pages-clara/indexClaro.html";

        }, 500);

    }


    if (modoClaro) {

        modoClaro.addEventListener(
            "click",
            mudarParaModoClaro
        );

    }


    if (modoClaroMobile) {

        modoClaroMobile.addEventListener(
            "click",
            mudarParaModoClaro
        );

    }


    /* =====================================================
       SABER MAIS
    ====================================================== */

    const saberMais =
        document.querySelector(".btn-primary");


    if (saberMais) {

        saberMais.addEventListener(
            "click",
            function () {

                const politicas =
                    document.querySelector(".politicas");


                if (politicas) {

                    politicas.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    /* =====================================================
       VER PROTÓTIPO
    ====================================================== */

    const verPrototipo =
        document.querySelector(".btn-secondary");


    if (verPrototipo) {

        verPrototipo.addEventListener(
            "click",
            function () {

                const prototipo =
                    document.querySelector(".prototipo");


                if (prototipo) {

                    prototipo.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }
        );

    }


    /* =====================================================
       ESC fecha o menu
    ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                menu &&
                menu.classList.contains("active")
            ) {

                fecharMenu();

            }

        }
    );


    /* =====================================================
       REDIMENSIONAMENTO
    ====================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 600 &&
                menu
            ) {

                fecharMenu();

            }

        }
    );

});