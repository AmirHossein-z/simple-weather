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
                anzac: "#DEAB4D",
                anzac2: "#DFAE53",
                putty: "#EACA8F",
            },
            backgroundImage: {
                "forecast-wave-mobile":
                    "url('./assets/images/forecast-wave-mobile.svg')",
                "forecast-wave-desktop":
                    "url('./assets/images/forecast-wave-desktop.svg')",
            },
            margin: {
                7.5: "1.875rem",
            },
            borderRadius: {
                40: "2.5rem",
                10: "0.625rem",
            },
            width: {
                7.5: "1.875rem",
            },
            fontSize: {
                xxs: "0.5rem",
                "7.5xl": "4rem",
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
