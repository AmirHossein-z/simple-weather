import thermometerIcon from "../assets/icons/thermometer-icon.svg";
import windIcon from "../assets/icons/windy-icon.svg";
import sunnyIcon from "../assets/icons/sunny-icon.svg";
import waterDropIcon from "../assets/icons/water-drop-icon.svg";

export const getAirConditionData = ({ temperature, wind, uvIndex }) => {
    return [
        {
            src: thermometerIcon,
            alt: "thermometer icon",
            title: "Real Feel",
            description: temperature,
        },
        {
            src: windIcon,
            alt: "windy icon",
            title: "Wind",
            description: wind,
        },
        {
            src: waterDropIcon,
            alt: "water drop icon",
            title: "Chance of rain",
            description: "not available",
        },
        {
            src: sunnyIcon,
            alt: "sunny icon",
            title: "UV Index",
            description: uvIndex,
        },
    ];
};
