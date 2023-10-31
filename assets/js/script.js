/** script.js */

/** Menu Mobile */

window.jQuery(document).ready(function ($) {

    var pagina = $("#pagina");
    var ul = $("#nav_menu ul");
    var menu = $("#nav_menu .menu_img");
    var fechar = $("#nav_menu .fechar_img");
    var tamanho = window.innerWidth;

    fechar.hide();

    if (tamanho <= 786) {

        menu.show();
        menu.on("click", function () {
            menu.hide();
            fechar.show();
            ul.show();
            pagina.css("height", "100vh");
            pagina.css("overflow", "hidden");
        });

        fechar.on("click", function () {
            menu.show();
            fechar.hide();
            ul.hide();
            pagina.css("height", "100%");     
        });
    }
    else {
        menu.hide();
        ul.show();
    }

    // Efeitos

    var imagem_banner_1 = $("#banner_1 img");
    var imagem_banner_2 = $("#banner_2 img");
    var imagem_1 = $("#main_sec_1 img");
    var imagem_2 = $("#main_sec_2 img");
    var imagem_3 = $("#main_sec_3 img");
    var texto_1 = $("#beneficios");
    var texto_2 = $("#mudancas");
    var texto_3 = $("#avanco");

    imagem_banner_1.css("animation-name", "efeitoImagem1");
    imagem_banner_1.css("animation-duration", "0.6s");

    imagem_banner_2.css("animation-name", "efeitoImagem2");
    imagem_banner_2.css("animation-duration", "0.6s");

    imagem_1.css("animation-name", "efeito1");
    imagem_1.css("animation-duration", "1.2s");

    imagem_2.css("animation-name", "efeito2");
    imagem_2.css("animation-duration", "1.2s");

    imagem_3.css("animation-name", "efeito3");
    imagem_3.css("animation-duration", "1.2s");

    texto_1.css("animation-name", "efeito2");
    texto_1.css("animation-duration", "1.5s");

    texto_2.css("animation-name", "efeito1");
    texto_2.css("animation-duration", "1.5s");

    texto_3.css("animation-name", "efeito2");
    texto_3.css("animation-duration", "1.5s");
});