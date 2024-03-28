import "../css/style.css";
import "./weatherSlider";
import { weatherData } from "./api";
import { getWeatherStatus } from "../utils/getWeatherStatus";

const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

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

const renderCurrentWeather = (currentWeather) => {
    const weatherStatus = getWeatherStatus(currentWeather.weatherCode);
    const temperature = Number(currentWeather.temperature2m).toFixed(0);
    const day = DAYS[currentWeather.time.getDay()];
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

renderCurrentWeather(weatherData.current);
