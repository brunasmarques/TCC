document.addEventListener("DOMContentLoaded", function () {
    // Entrada suave da página
    document.body.classList.add("entrando");

    // Botão para mudar para o modo claro
    const botaoTema = document.querySelector(".modo-claro");

    if (botaoTema) {
        botaoTema.addEventListener("click", function () {
            // Inicia a animação de saída
            document.body.classList.remove("entrando");
            document.body.classList.add("saindo");

            // Aguarda a animação terminar
            setTimeout(function () {
                window.location.assign("../pages-clara/equipeClaro.html");
            }, 500);
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.getElementById("mobileMenuButton");

    const menu =
        document.getElementById("mobileMenu");

    const closeButton =
        document.getElementById("mobileClose");

    const overlay =
        document.getElementById("mobileOverlay");


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


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            fecharMenu
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            fecharMenu
        );

    }


    const links =
        document.querySelectorAll(
            ".mobile-nav-item"
        );


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            fecharMenu
        );

    });


    const modoClaroMobile =
        document.querySelector(".mobile-theme");


    if (modoClaroMobile) {

        modoClaroMobile.addEventListener(
            "click",
            fecharMenu
        );

    }


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