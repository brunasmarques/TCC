document.addEventListener("DOMContentLoaded", function () {
    // Entrada suave da página
    document.body.classList.add("entrando");

    // Botão para voltar ao modo escuro
    const botaoTema = document.querySelector(".modo-escuro");

    if (botaoTema) {
        botaoTema.addEventListener("click", function () {
            // Inicia a animação de saída
            document.body.classList.remove("entrando");
            document.body.classList.add("saindo");

            // Aguarda a animação terminar antes de trocar de página
            setTimeout(function () {
                window.location.assign("../pages/equipe.html");
            }, 500);
        });
    }
});
