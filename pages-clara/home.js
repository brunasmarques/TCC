document.addEventListener("DOMContentLoaded", () => {
    /* =====================================================
       ELEMENTOS DO MENU
    ===================================================== */

    const menu = document.querySelector(".menu");
    const menuBurger = document.querySelector(".menuBurger");

    if (!menu) {
        console.error("ERRO: elemento .menu não encontrado.");
        return;
    }

    /* =====================================================
       ABRIR / FECHAR MENU MOBILE
    ===================================================== */

    if (menuBurger) {
        menuBurger.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            menu.classList.toggle("menu-aberto");

            const menuAberto = menu.classList.contains("menu-aberto");

            menuBurger.setAttribute(
                "aria-expanded",
                menuAberto ? "true" : "false",
            );

            console.log(menuAberto ? "MENU ABERTO" : "MENU FECHADO");
        });
    }

    /* =====================================================
       CLICAR FORA DO MENU
       FECHA O MENU
    ===================================================== */

    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target)) {
            menu.classList.remove("menu-aberto");

            if (menuBurger) {
                menuBurger.setAttribute("aria-expanded", "false");
            }
        }
    });

    /* =====================================================
       CLIQUES DENTRO DO MENU
       NÃO FECHAM AUTOMATICAMENTE
    ===================================================== */

    menu.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    /* =====================================================
       MODO ESCURO

       ESTA É A VERSÃO CLARA.

       Ao clicar em "Modo Escuro",
       o usuário volta para a página escura.
    ===================================================== */

    const botaoTema = document.querySelector(".modo-escuro");

    if (botaoTema) {
        botaoTema.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            /*
             * Como o botão está dentro de
             * pages-clara/indexClaro.html,
             * precisamos voltar uma pasta.
             */

            window.location.href = "../index.html";
        });
    }

    /* =====================================================
       LINKS DO MENU

       No mobile, depois de clicar em um link,
       o menu é fechado.
    ===================================================== */

    const linksMenu = document.querySelectorAll(".item-menu:not(.modo-escuro)");

    linksMenu.forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("menu-aberto");

            if (menuBurger) {
                menuBurger.setAttribute("aria-expanded", "false");
            }
        });
    });

    /* =====================================================
       ESC PARA FECHAR O MENU

       Melhora a acessibilidade no desktop/mobile.
    ===================================================== */

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            menu.classList.remove("menu-aberto");

            if (menuBurger) {
                menuBurger.setAttribute("aria-expanded", "false");
            }
        }
    });

    /* =====================================================
       IMPEDIR QUE O MENU MOBILE FIQUE ABERTO
       AO REDIMENSIONAR PARA DESKTOP
    ===================================================== */

    window.addEventListener("resize", () => {
        if (window.innerWidth > 600) {
            menu.classList.remove("menu-aberto");

            if (menuBurger) {
                menuBurger.setAttribute("aria-expanded", "false");
            }
        }
    });

    /* =====================================================
       INICIALIZAÇÃO
    ===================================================== */

    if (menuBurger) {
        menuBurger.setAttribute("aria-expanded", "false");
    }
});
