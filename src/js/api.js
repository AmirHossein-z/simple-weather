import { fetchWeatherApi } from "openmeteo";
import { range } from "../utils/range";

const [latitude, longitude] = import.meta.env.VITE_LOCATION.split(",");

const params = {
    latitude,
    longitude,
    current: [
        "temperature_2m",
        "weather_code",
        "wind_speed_10m",
        "is_day",
        "apparent_temperature",
    ],
    daily: ["weather_code", "uv_index_max", "wind_speed_10m_max"],
    hourly: ["temperature_2m", "weather_code", "wind_speed_10m"],
    timeformat: "unixtime",
};

export const getAllWeatherInfo = async () => {
    const responses = await fetchWeatherApi(
        import.meta.env.VITE_OPEN_METEO_API_URL,
        params,
    );
    const response = responses[0];
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const current = response.current();
    const daily = response.daily();
    const hourly = response.hourly();

    // Note: The order of weather variables in the URL query and the indices below need to match!
    return {
        current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature2m: current.variables(0).value(),
            weatherCode: current.variables(1).value(),
            windSpeed10m: current.variables(2).value(),
            isDay: current.variables(3).value(),
            apparentTemperature: current.variables(4).value(),
        },
        daily: {
            time: range(
                Number(daily.time()),
                Number(daily.timeEnd()),
                daily.interval(),
            ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
            weatherCode: daily.variables(0).valuesArray(),
            uvIndexMax: daily.variables(1).valuesArray(),
            windSpeed10mMax: daily.variables(2).valuesArray(),
        },
        hourly: {
            time: range(
                Number(hourly.time()),
                Number(hourly.timeEnd()),
                hourly.interval(),
            ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
            temperature2m: hourly.variables(0).valuesArray(),
            weatherCode: hourly.variables(1).valuesArray(),
            windSpeed10m: hourly.variables(2).valuesArray(),
        },
    };
};

export const getTodayTimeStatus = async () => {
    const responses = await fetchWeatherApi(
        import.meta.env.VITE_OPEN_METEO_API_URL,
        params,
    );
    const response = responses[0];
    const current = response.current();

    return Boolean(current.variables(3).value());
};

export const getCityName = async () => {
    const url = `${import.meta.env.VITE_CITY_API}?latitude=${latitude}&longitude=${longitude}`;
    const response = await fetch(url);
    const data = await response.json();
    return { city: data.city };
};
