if (window.SimpleSlide) {
    new SimpleSlide({
        slide: "depoimentos", // nome do atributo data-slide="principal"
        nav: false, // se deve ou não mostrar a navegação
        auto: true, // se o slide deve passar automaticamente
        time: 5000 // tempo de transição dos slides
    });

    new SimpleSlide({
        slide: "portfolio",
        nav: true,
        auto: true,
        time: 5000
    });
}