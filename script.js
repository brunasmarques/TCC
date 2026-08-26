document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const menuBurger = document.querySelector(".menuBurger");

    if (!menu || !menuBurger) {
        console.error("ERRO: .menu ou .menuBurger não encontrado.");
        return;
    }

    /* =====================================================
       ABRIR / FECHAR MENU
    ===================================================== */

    menuBurger.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        menu.classList.toggle("menu-aberto");

        console.log(
            menu.classList.contains("menu-aberto")
                ? "MENU ABERTO"
                : "MENU FECHADO",
        );
    });

    /* =====================================================
       CLICAR FORA → FECHAR
    ===================================================== */

    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target)) {
            menu.classList.remove("menu-aberto");
        }
    });

    /* =====================================================
       CLIQUES DENTRO DO MENU
       NÃO FECHAM O MENU
    ===================================================== */

    menu.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    /* =====================================================
       MODO CLARO
    ===================================================== */

    const botaoTema = document.querySelector(".modo-claro");

    if (botaoTema) {
        botaoTema.addEventListener("click", () => {
            window.location.href = "pages-clara/indexClaro.html";
        });
    }
});
