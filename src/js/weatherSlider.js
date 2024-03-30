import "../css/weatherSlider.css";
import Swiper from "swiper/bundle";
import { Navigation } from "swiper/modules";

import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".weather-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    effect: "coverflow",
    coverflowEffect: {
        slideShadows: false,
        rotate: 0,
        scale: 1,
        depth: 90,
    },
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        /**
         * we used tailwind default breakpoints!
         */
        640: {
            // sm
            slidesPerView: 4,
            spaceBetween: 10,
        },
        768: {
            // md
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    modules: [Navigation],
    // slideActiveClass: "",
});
