import Swiper from 'swiper/bundle';

export const sliders = () => {
    const mainSlider = new Swiper(".top-slider", {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    })
    const courousel = new Swiper(".services-elements", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
          },
    })
};