import "../css/weatherSlider.css";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".weather-slider", {
    slidesPerView: 5,
    spaceBetween: 50,
    centeredSlides: true,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        /**
         * we used tailwind default breakpoints!
         */
        640: {
            // sm
            slidesPerView: 5,
            spaceBetween: 50,
        },
        768: {
            // md
            slidesPerView: 5,
            spaceBetween: 25,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    modules: [Navigation],
    // slideActiveClass: "",
});
