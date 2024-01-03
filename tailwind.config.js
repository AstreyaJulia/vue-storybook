import defaultTheme from "tailwindcss/defaultTheme";
import themeConfig from "./configs/themeConfig";

// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./configs/themeConfig.js",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      serif: ["Noto Serif", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      colors: ({ colors }) => ({
        ...Object.fromEntries(
            [...themeConfig.colors.main, ...themeConfig.colors.states].map(
                (color) => [color.name, colors[color.color]],
            ),
        ),
      }),
      keyframes: {
        zoom: {
          "0%, 100%": { transform: "scale(0.5)" },
          "50%": { transform: "scale(1)" },
        },
        tada: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "10%, 20%": {
            transform: "scale3d(1, 1, 0.95) rotate3d(0, 0, 1, -10deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg)",
          },
          "40%, 60%, 80%": {
            transform: "rotate3d(0, 0, 1, -10deg)",
          },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },

          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite", // медленное вращение по часовой стрелке
        zoom: "zoom 1s ease-in-out infinite", // больше-меньше масштаб
        tada: "tada 1.5s ease-in-out infinite", // покачивание (типа звонка) для уведомлений, привлечения внимания
        fadeIn: "fadeIn 0.5s linear", // плавное появление, для смягчения перехода между страницами
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
