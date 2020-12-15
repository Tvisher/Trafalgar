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
    if (!item.parentElement.classList.contains('active')) {
        item.onclick = removeClass;
    }
});



const animated = (data) => {
    Array.from(document.querySelectorAll(`${data.selector}`)).forEach((item, i) => {
        if (!item.classList.contains("animate__animated")) {
            item.style.opacity = 0;
        }
        item.classList.add("animate__animated");
        let ElemPos = item.getBoundingClientRect().top;
        let topOfWindow = ElemPos - document.documentElement.clientHeight;
        let thirdHeight = document.documentElement.clientHeight / 4;
        let actuationHeight = Number(`${data.height}`);
        if (!actuationHeight) {
            actuationHeight = thirdHeight;
        }
        if (topOfWindow + actuationHeight < 0) {
            setTimeout(() => {
                item.classList.add(`${data.animation}`);
                item.style.opacity = 1;
            }, ++i * `${data.delay}`);
        } else { return; }

    });
}

window.addEventListener('scroll', () => {
    animated({
        selector: '.services__title',
        animation: 'animate__fadeInUp',
        height: 50,
    });

    animated({
        selector: '.list__item',
        animation: 'animate__bounceIn',
        delay: 200,
        height: 80,
    });
    animated({
        selector: '.services__text',
        animation: 'animate__fadeInUp',
        height: 50,
        delay: 300,
    });
    animated({
        selector: '.apps__block .block__img',
        animation: 'animate__fadeInLeft',
    });
    animated({
        selector: '.apps__block2 .block__img',
        animation: 'animate__fadeInRight',
    });
    animated({
        selector: '.apps__block .block__content',
        animation: 'animate__jackInTheBox',
    });
    animated({
        selector: '.apps__block2 .block__content',
        animation: 'animate__jackInTheBox',
    });

    animated({
        selector: '.article__title',
        animation: 'animate__fadeInTopRight',
        height: 100,
        delay: 500
    });

    animated({
        selector: '.article__card',
        animation: 'animate__slideInUp',
        height: 200,
        delay: 100
    });
    animated({
        selector: '.testimonials__wrapper',
        animation: 'animate__fadeInBottomRight',
        height: 200,
        delay: 100
    });

    animated({
        selector: '.learn__btn',
        animation: 'animate__zoomInUp',
        height: 100,

    });
    animated({
        selector: '.footer__wrapper',
        animation: 'animate__zoomInUp',
        height: 200,
        delay: 100
    });
}
);

