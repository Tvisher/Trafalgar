$(document).ready(function () {
    $('.testimonials__wrapper').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $(".slider__nav"),
        appendDots: $(".slider__nav"),
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/prewArrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/nextArrow.svg"></button>',
    });

    $(window).scroll(function () {
        $('.apps__block .block__img').each(function () {
            let imagePos = $(this).offset().top;
            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass(" animate__fadeInLeft");
            }
        });
    });

    $(window).scroll(function () {
        $('.apps__block2 .block__img').each(function () {
            let imagePos = $(this).offset().top;
            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass(" animate__fadeInRight");
            }
        });
    });

    $(window).scroll(function () {
        $('.list__item').each(function () {
            let imagePos = $(this).offset().top;
            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("animate__bounceIn");
            }
        });
    });


});


let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu ');
let body = document.querySelector('body');
let overlay = document.querySelector('.overlay');
let header = document.querySelector('.header');

const removeClass = () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("active");
    header.classList.toggle("active");
}

burger.onclick = removeClass;

overlay.onclick = removeClass;

let menuLinks = document.querySelectorAll('.menu__item');
menuLinks.forEach(item => {
    item.onclick = removeClass;
})