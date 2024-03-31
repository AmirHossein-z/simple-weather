import "../css/style.css";
import "./weatherSlider";
import { getAllWeatherInfo, getCityName } from "./api";
import { getWeatherStatus } from "../utils/getWeatherStatus";
import { getDayName } from "../utils/getDayName";
import { getAirConditionData } from "../utils/getAirConditionData";

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
const currentTimezone = document.querySelector("#current-timezone");
const airConditionSection = document.querySelector("#air-condition-section");
const cityInfo = document.querySelector("#city-info");

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
    todayDateDesktop.innerHTML = `<p class="text-lg font-normal">${day} | ${fullDate}</p>`;
    todayDateMobile.innerHTML = `<p class="text-lg font-normal">${day} | ${fullDate}</p>`;
};

const renderOtherDaysWeather = (times, weatherCode) => {
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

const renderCurrentTimezone = (time) => {
    currentTimezone.innerHTML = time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
    });
};

const renderAirConditionSection = (currentWeather, uvIndex) => {
    const data = getAirConditionData({
        temperature: currentWeather.temperature2m.toFixed(0),
        wind: `${currentWeather.windSpeed10m.toFixed(0)} km/h`,
        uvIndex: uvIndex.toFixed(0),
    });

    let contents = ``;
    for (let i = 0; i < data.length; i++) {
        contents += `
            <div class="flex flex-col">
                <div class="flex gap-1">
                    <img
                        src="${data[i].src}"
                        alt="${data[i].alt}"
                        class="w-4"
                    />
                    <p class="py-1 text-xs">${data[i].title}</p>
                </div>
                <p
                    class="ml-5 justify-self-end text-base font-medium"
                >
                ${data[i].description}
                </p>
            </div>
        `;
    }
    airConditionSection.innerHTML = contents;
};

const renderCityInfo = (city) => {
    cityInfo.innerHTML = city;
};

document.addEventListener("DOMContentLoaded", async () => {
    const weatherData = await getAllWeatherInfo();
    const { city } = await getCityName();

    renderCurrentWeather(weatherData.current);
    renderOtherDaysWeather(
        weatherData.daily.time,
        weatherData.daily.weatherCode,
    );
    renderCurrentTimezone(weatherData.current.time);
    renderAirConditionSection(
        weatherData.current,
        weatherData.daily.uvIndexMax[0],
    );
    renderCityInfo(city);
});
