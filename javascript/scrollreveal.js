$(document).ready(function () {
    window.sr = ScrollReveal();
    
    sr.reveal('.carousel-header', {
        duration: 1000,
        origin: 'bottom',
        distance: '2rem'
    });

    sr.reveal('.carousel-text', {
        duration: 1200,
        delay: 500,
        origin: 'bottom',
        distance: '2rem'
    });

    sr.reveal('.main-header', {
        duration: 1200,
        origin: 'bottom',
        distance: '2rem',
        viewFactor: 0.1
    });

    sr.reveal('#double-container-first', {
        duration: 1200,
        delay: 200,
        origin: 'left',
        distance: '4rem',
        viewFactor: 0.1
    });

    sr.reveal('#double-container-second', {
        duration: 1200,
        origin: 'right',
        distance: '4rem',
        viewFactor: 0.1
    });

    sr.reveal('#jumbotron-row-first', {
        duration: 1200,
        delay: 200,
        origin: 'top',
        distance: '4rem',
        viewFactor: 0.1
    });

    sr.reveal('#jumbotron-row-second', {
        duration: 1200,
        delay: 200,
        origin: 'bottom',
        distance: '4rem',
        viewFactor: 0.1
    });

    sr.reveal('.photo', {
        duration: 1200,
        origin: 'bottom',
        distance: '4rem',
        viewFactor: 0.1
    });

    sr.reveal('.info', {
        duration: 1200,
        origin: 'left',
        distance: '4rem',
        viewFactor: 0.1
    });

    sr.reveal('.media-icons', {
        duration: 1200,
        origin: 'right',
        distance: '4rem',
        viewFactor: 0.1
    });

    sr.reveal('.table', {
        duration: 1200,
        origin: 'bottom',
        distance: '4rem',
        viewFactor: 0.1
    });

    sr.reveal('#header-contact', {
        duration: 1000,
        origin: 'bottom',
        distance: '2rem'
    });
    
    sr.reveal('#button-about', {
        duration: 1200,
        delay: 400,
        origin: 'bottom',
        distance: '4rem'
    });

    sr.reveal('.about-article', {
        duration: 1200,
        delay: 200,
        origin: 'top',
        distance: '4rem'
    });

    sr.reveal('#info-contact', {
        duration: 1200,
        delay: 200,
        origin: 'right',
        distance: '4rem'
    });

});

