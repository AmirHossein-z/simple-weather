/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "neutral-gray": "#403B45",
                primary: "#D2982D",
                "primary-dark": "#DEA02E",
                "primary-light": "#F5B747",
                "secondary-dark": "#2B261D",
                "hokey-pokey": "#D69E36",
            },
            backgroundImage: {
                "forecast-wave-mobile":
                    "url('./assets/images/forecast-wave-mobile.svg')",
                "forecast-wave-desktop":
                    "url('./assets/images/forecast-wave-desktop.svg')",
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "24px",
                lg: "40px",
            },
        },
    },
    plugins: [],
};
