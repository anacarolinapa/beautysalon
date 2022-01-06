/* ========================================================================================
    ABRIR E FECHAR MENU AO CLICAR NO ÍCONE
======================================================================================== */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

// AO CLICAR VERIFICA STATUS DO MENU PARA DEFINIR SE PRECISA ABRIR OU FECHAR
for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
}

/* ========================================================================================
    AO CLICAR EM UM ITEM DO MENU, ESCONDE O MENU
======================================================================================== */
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show');
    });
}

/* ========================================================================================
    ADICIONAR CLASSE SCROLL AO MENU
======================================================================================== */
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderScroll() {
    if(this.window.scrollY >= navHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
}

/* ========================================================================================
    TESTIMONIALS SWIPER
======================================================================================== */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        },
    }
});

/* ========================================================================================
    SCROLLREAVEL
======================================================================================== */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
});
  
scrollReveal.reveal(
    `
        #home .image, #home .text,
        #about .image, #about .text,
        #services header, #services .card,
        #testimonials header, #testimonials .testimonials
        #contact .text, #contact .links
        footer .brand, footer .social
    `,
    { interval: 100 }
);

/* ========================================================================================
    VOLTAR PARA O TOP
======================================================================================== */
var buttonTop = document.querySelector('.back-to-top');

function backToTop() {
    if(window.scrollY >= 500) {
        buttonTop.classList.add('show');
    } else {
        buttonTop.classList.remove('show');
    }
}

/* ========================================================================================
    MENU ATIVO CONFORME SESSÃO VISÍVEL NA PÁGINA
======================================================================================== */
const sections = document.querySelectorAll('main section[id]');

function activeMenuSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
    
        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight
    
        if(checkpointStart && checkpointEnd) {
          document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
        } else {
          document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
        }
    }
}

/* ========================================================================================
    THEME SITE
======================================================================================== */
let themeBtn = document.querySelector('#theme-btn');

themeBtn.addEventListener('click', function() {
    if (themeBtn.getAttribute('data-theme') === "1") {
        document.body.classList.add('active');
        themeBtn.classList.remove('icon-moon');
        themeBtn.classList.add('icon-sun');
        themeBtn.setAttribute('data-theme', "0");
    } else {
        document.body.classList.remove('active');
        themeBtn.classList.remove('icon-sun');
        themeBtn.classList.add('icon-moon');
        themeBtn.setAttribute('data-theme', "1");
    }
})

/* ========================================================================================
    AO ROLAR A PÁGINA EXECUTA AS FUNÇÕES
======================================================================================== */
window.addEventListener('scroll', function() {
    changeHeaderScroll();
    backToTop();
    activeMenuSection();
});
