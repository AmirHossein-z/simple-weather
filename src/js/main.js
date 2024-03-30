import "../css/style.css";
import "./weatherSlider";
import { getAllWeatherInfo } from "./api";
import { getWeatherStatus } from "../utils/getWeatherStatus";
import { getDayName } from "../utils/getDayName";

const todayWeatherMobile = document.querySelector("#today-weather-mobile");
const todayWeatherDesktop = document.querySelector("#today-weather-desktop");
const todayTemperatureMobile = document.querySelector(
    "#today-temperature-mobile",
);
const todayTemperatureDesktop = document.querySelector(
    "#today-temperature-desktop",
);
const todayDateMobile = document.querySelector("#today-date-mobile");
const todayDateDesktop = document.querySelector("#today-date-desktop");
const todayIconDesktop = document.querySelector("#today-icon-desktop");
const todayIconMobile = document.querySelector("#today-icon-mobile");
const sliderContent = document.querySelector("#slider-content");

const renderCurrentWeather = (currentWeather) => {
    const weatherStatus = getWeatherStatus(currentWeather.weatherCode);
    const temperature = Number(currentWeather.temperature2m).toFixed(0);
    const day = getDayName(currentWeather.time);
    const fullDate = currentWeather.time.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
    });

    todayWeatherDesktop.innerHTML = weatherStatus.title;
    todayWeatherMobile.innerHTML = weatherStatus.title;
    todayIconDesktop.innerHTML = `<img src="${weatherStatus.icon}" alt="${weatherStatus.alt}" class="py-6 w-[320px] text-white" />`;
    todayIconMobile.innerHTML = `<img src="${weatherStatus.icon}" alt="${weatherStatus.alt}" class="py-6 w-[200px] text-white" />`;
    todayTemperatureDesktop.innerHTML = `${temperature}°C`;
    todayTemperatureMobile.innerHTML = `${temperature}°C`;
    todayDateDesktop.innerHTML = `<p>${day} | ${fullDate}</p>`;
    todayDateMobile.innerHTML = `<p>${day} | ${fullDate}</p>`;
};

const renderDaysWeather = (times, weatherCode) => {
    let contents = ``;
    for (let i = 0; i < times.length; i++) {
        let weatherStatus = getWeatherStatus(weatherCode[i]);
        const dayName = getDayName(times[i] * 1000).substring(0, 3);

        contents += `
            <div class="swiper-slide">
                <p class="text-sm text-white">${dayName}</p>
                <img
                    src="${weatherStatus.icon}"
                    alt="${weatherStatus.alt}"
                    class="object-center w-8"
                />
            </div>
                `;
    }
    sliderContent.innerHTML = contents;
};

document.addEventListener("DOMContentLoaded", async () => {
    const weatherData = await getAllWeatherInfo();
    renderCurrentWeather(weatherData.current);
    renderDaysWeather(weatherData.daily.time, weatherData.daily.weatherCode);
});
