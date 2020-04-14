// Ativando o plug-in do slide
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
        time: 7000
    });
}

// Ativando o plug-in da animação
if (window.SimpleAnime) {
    new SimpleAnime()
}

//Ativando o plug-in da mensagem formulário
if (window.SimpleForm) {
    new SimpleForm({
        form: ".formphp", // seletor do formulário
        button: "#enviar", // seletor do botão
        erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
        sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso!</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
    });
}