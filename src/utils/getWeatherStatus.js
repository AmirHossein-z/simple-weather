import { isDay } from "../js/api";
import sunnyIcon from "../assets/icons/sunny-icon.svg";
import rainyIcon from "../assets/icons/rainy-icon.svg";
import moonIcon from "../assets/icons/moon-icon.svg";
import snowIcon from "../assets/icons/snow-icon.svg";
import lightningIcon from "../assets/icons/lightning-icon.svg";
import thunderstormRainIcon from "../assets/icons/thunderstorm-rain-icon.svg";
import sunnyCloudyIcon from "../assets/icons/cloudy-weather-icon.svg";
import nightCloudyIcon from "../assets/icons/partially-cloudy-icon.svg";
import fogIcon from "../assets/icons/fog-icon.svg";

export const getWeatherStatus = (code) => {
    const status = {
        0: {
            day: {
                title: "Sunny",
                icon: sunnyIcon,
                alt: "Sunny icon",
            },
            night: {
                title: "Clear",
                icon: moonIcon,
                alt: "Moon icon",
            },
        },
        1: {
            day: {
                title: "Mainly Sunny",
                icon: sunnyIcon,
                alt: "Sunny icon",
            },
            night: {
                title: "Mainly Clear",
                icon: moonIcon,
                alt: "Moon icon",
            },
        },
        2: {
            day: {
                title: "Partly Cloudy",
                icon: sunnyCloudyIcon,
                alt: "Sunny cloudy icon",
            },
            night: {
                title: "Partly Cloudy",
                icon: nightCloudyIcon,
                alt: "Night cloudy icon",
            },
        },
        3: {
            day: {
                title: "Cloudy",
                icon: sunnyCloudyIcon,
                alt: "Sunny cloudy icon",
            },
            night: {
                title: "Cloudy",
                icon: nightCloudyIcon,
                alt: "Night cloudy icon",
            },
        },
        45: {
            day: {
                title: "Foggy",
                icon: fogIcon,
                alt: "Fog icon",
            },
            night: {
                title: "Foggy",
                icon: fogIcon,
                alt: "Fog icon",
            },
        },
        48: {
            day: {
                title: "Rime Fog",
                icon: fogIcon,
                alt: "Fog icon",
            },
            night: {
                title: "Rime Fog",
                icon: fogIcon,
                alt: "Fog icon",
            },
        },
        51: {
            day: {
                title: "Light Drizzle",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
            night: {
                title: "Light Drizzle",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
        },
        53: {
            day: {
                title: "Drizzle",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
            night: {
                title: "Drizzle",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
        },
        55: {
            day: {
                title: "Heavy Drizzle",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
            night: {
                title: "Heavy Drizzle",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
        },
        56: {
            day: {
                title: "Light Freezing Drizzle",
                icon: snowIcon,
                alt: "Snow icon",
            },
            night: {
                title: "Light Freezing Drizzle",
                icon: snowIcon,
                alt: "Snow icon",
            },
        },
        57: {
            day: {
                title: "Freezing Drizzle",
                icon: snowIcon,
                alt: "Snow icon",
            },
            night: {
                title: "Freezing Drizzle",
                icon: snowIcon,
                alt: "Snow icon",
            },
        },
        61: {
            day: {
                title: "Light Rain",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
            night: {
                title: "Light Rain",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
        },
        63: {
            day: {
                title: "Rain",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
            night: {
                title: "Rain",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
        },
        65: {
            day: {
                title: "Heavy Rain",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
            night: {
                title: "Heavy Rain",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
        },
        66: {
            day: {
                title: "Light Freezing Rain",
                icon: snowIcon,
                alt: "Snow icon",
            },
            night: {
                title: "Light Freezing Rain",
                icon: snowIcon,
                alt: "Snow icon",
            },
        },
        67: {
            day: {
                title: "Freezing Rain",
                icon: snowIcon,
                alt: "Snow icon",
            },
            night: {
                title: "Freezing Rain",
                icon: snowIcon,
                alt: "Snow icon",
            },
        },
        71: {
            day: {
                title: "Light Snow",
                icon: snowIcon,
                alt: "Snow icon",
            },
            night: {
                title: "Light Snow",
                icon: snowIcon,
                alt: "Snow icon",
            },
        },
        73: {
            day: {
                title: "Snow",
                icon: snowIcon,
                alt: "Snow icon",
            },
            night: {
                title: "Snow",
                icon: snowIcon,
                alt: "Snow icon",
            },
        },
        75: {
            day: {
                title: "Heavy Snow",
                icon: snowIcon,
                alt: "Snow icon",
            },
            night: {
                title: "Heavy Snow",
                icon: snowIcon,
                alt: "Snow icon",
            },
        },
        77: {
            day: {
                title: "Snow Grains",
                icon: snowIcon,
                alt: "Snow icon",
            },
            night: {
                title: "Snow Grains",
                icon: snowIcon,
                alt: "Snow icon",
            },
        },
        80: {
            day: {
                title: "Light Showers",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
            night: {
                title: "Light Showers",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
        },
        81: {
            day: {
                title: "Showers",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
            night: {
                title: "Showers",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
        },
        82: {
            day: {
                title: "Heavy Showers",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
            night: {
                title: "Heavy Showers",
                icon: rainyIcon,
                alt: "Rainy icon",
            },
        },
        85: {
            day: {
                title: "Light Snow Showers",
                icon: snowIcon,
                alt: "Snow icon",
            },
            night: {
                title: "Light Snow Showers",
                icon: snowIcon,
                alt: "Snow icon",
            },
        },
        86: {
            day: {
                title: "Snow Showers",
                icon: snowIcon,
                alt: "Snow icon",
            },
            night: {
                title: "Snow Showers",
                icon: snowIcon,
                alt: "Snow icon",
            },
        },
        95: {
            day: {
                title: "Thunderstorm",
                icon: lightningIcon,
                alt: "Lightning icon",
            },
            night: {
                title: "Thunderstorm",
                icon: lightningIcon,
                alt: "Lightning icon",
            },
        },
        96: {
            day: {
                title: "Light Thunderstorms With Hail",
                icon: thunderstormRainIcon,
                alt: "thunderstorm rain icon",
            },
            night: {
                title: "Light Thunderstorms With Hail",
                icon: thunderstormRainIcon,
                alt: "thunderstorm rain icon",
            },
        },
        99: {
            day: {
                title: "Thunderstorm With Hail",
                icon: thunderstormRainIcon,
                alt: "thunderstorm rain icon",
            },
            night: {
                title: "Thunderstorm With Hail",
                icon: thunderstormRainIcon,
                alt: "thunderstorm rain icon",
            },
        },
    };
    if (status[code]) {
        return isDay ? status[code].day : status[code].night;
    }

    return { title: "Unknown", icon: "", alt: "" };
};
