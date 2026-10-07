document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const menuToggle = document.getElementById("menuToggle");
    const menuOverlay = document.getElementById("menuOverlay");

    const trilhaComponentes = document.getElementById("trilhaComponentes");
    const componenteAnterior = document.getElementById("componenteAnterior");
    const componenteProximo = document.getElementById("componenteProximo");
    const indicadores = document.querySelectorAll(".indicador");

    const menuLinks = menu.querySelectorAll(".item-menu:not(.modo-claro)");

    /* =====================================================
       ABRIR / FECHAR MENU
    ===================================================== */

    function abrirMenu() {
        document.body.classList.add("menu-aberto");

        menuToggle.setAttribute("aria-expanded", "true");

        menuToggle.setAttribute("aria-label", "Fechar menu");
    }

    function fecharMenu() {
        document.body.classList.remove("menu-aberto");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Abrir menu");
    }

    /* =====================================================
       HAMBURGER
    ===================================================== */

    menuToggle.addEventListener("click", () => {
        const menuAberto = document.body.classList.contains("menu-aberto");

        if (menuAberto) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    });

    /* =====================================================
       CLICAR FORA DO MENU
    ===================================================== */

    menuOverlay.addEventListener("click", fecharMenu);

    /* =====================================================
       LINKS DO MENU
    ===================================================== */

    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            fecharMenu();
        });
    });

    /* =====================================================
       ESC FECHA O MENU
    ===================================================== */

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            document.body.classList.contains("menu-aberto")
        ) {
            fecharMenu();
        }
    });

    /* =====================================================
       AO VOLTAR PARA DESKTOP
    ===================================================== */

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            fecharMenu();
        }
    });

    /* =====================================================
       CARROSSEL DE COMPONENTES
    ===================================================== */

    if (trilhaComponentes && componenteAnterior && componenteProximo) {
        let componenteAtual = 0;
        const totalComponentes = indicadores.length;

        function mostrarComponente(indice) {
            componenteAtual = (indice + totalComponentes) % totalComponentes;

            trilhaComponentes.style.transform = `translateX(-${componenteAtual * 100}%)`;

            indicadores.forEach((indicador, index) => {
                indicador.classList.toggle("ativo", index === componenteAtual);
            });
        }

        componenteProximo.addEventListener("click", () => {
            mostrarComponente(componenteAtual + 1);
        });

        componenteAnterior.addEventListener("click", () => {
            mostrarComponente(componenteAtual - 1);
        });

        indicadores.forEach((indicador, index) => {
            indicador.addEventListener("click", () => {
                mostrarComponente(index);
            });
        });

        /* Arrastar no celular */

        let inicioToque = 0;

        trilhaComponentes.addEventListener(
            "touchstart",
            (event) => {
                inicioToque = event.touches[0].clientX;
            },
            { passive: true },
        );

        trilhaComponentes.addEventListener(
            "touchend",
            (event) => {
                const fimToque = event.changedTouches[0].clientX;
                const distancia = fimToque - inicioToque;

                if (Math.abs(distancia) < 50) {
                    return;
                }

                if (distancia < 0) {
                    mostrarComponente(componenteAtual + 1);
                } else {
                    mostrarComponente(componenteAtual - 1);
                }
            },
            { passive: true },
        );
    }
});
