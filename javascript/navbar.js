$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() === 0) {
            $('#navbar').addClass('navbar-dark');
            $('#navbar').removeClass('navbar-light');
        } else {
            $('#navbar').addClass('navbar-light');
            $('#navbar').removeClass('navbar-dark');
        }
    });
});

