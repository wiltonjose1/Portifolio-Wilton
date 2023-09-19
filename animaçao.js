//aqui é animaçao de scroll

const linksDeNavegacao = document.querySelectorAll('header nav ul li a');


linksDeNavegacao.forEach(link => {
    link.addEventListener('click', () => {
        
        const alvo = link.getAttribute('href');

       
        const secaoAlvo = document.querySelector(alvo);

       
        secaoAlvo.scrollIntoView({ behavior: 'smooth' });

       
        event.preventDefault();
    });
});

//aqui é animaçao da frase Desenvolvedor Front-End

window.addEventListener('load', function () {
    
    setTimeout(function () {
        document.querySelector('.texto-direito').classList.add('animaçao-texto');
    }, 1000); 
});


// levar para os links

document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = document.querySelectorAll(".social-link");

    socialLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            const url = link.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank"); // Abre o link em uma nova aba/janela
            }
        });
    });
});

