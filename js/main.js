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

// let burgerMenu = document.querySelector('.header__burger');
// document.addEventListener('click', (e) => {
//     if (!e.target.closest('.header__burger')) {
//         return;
//     }
//     let burgerBtn = document.querySelector('.header__burger');
//     let overlay = document.querySelector('.overlay');
//     let menu = document.querySelector('.header__menu');
//     menu.classList.toggle('active');
//     overlay.classList.toggle('active');
//     burgerBtn.classList.toggle('active');

// })

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