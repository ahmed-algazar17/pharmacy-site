
var swiperHeader = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },
    autoplay: {
        delay: 3000,
    }
    , loop: true,
});


/* sweeper slide product */

// سويبر الأدوية //

window.swiperProducts = new Swiper(".slide_product", {
    slidesPerView: 5,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1.3,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    loop: true,
});

