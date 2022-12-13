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
};