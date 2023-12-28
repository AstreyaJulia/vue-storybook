
const themeConfig = {
    app: {
        name: "Vue App Storybook.JS Demo",
    },
    // Настройки темы
    layout: {
        darkMode: false,
        menuCollapsed: false,
    },
    colors: {
        main: [
            { name: "gray", color: "gray" },
            { name: "brand", color: "indigo" },
            { name: "accent", color: "teal" },
        ],
        states: [
            { name: "error", color: "red" },
            {
                name: "warning",
                color: "amber",
            },
            {
                name: "success",
                color: "green",
            },
            { name: "info", color: "sky" },
        ],
        secondary: [
            { name: "slate", color: "slate" },
            { name: "cyan", color: "cyan" },
            { name: "blue", color: "blue" },
            { name: "pink", color: "pink" },
            { name: "rose", color: "rose" },
            { name: "orange", color: "orange" },
        ],
        ui: {
            bg: ['50'], // colors.main[0]color - цвет фона
            border: ['200'], // colors.main[0]color - цвет бордюра полей ввода
            textMain: ['900'], // colors.main[0]color - цвет основного текста
            textSecondary: ['700'], // colors.main[0]color - цвет второстепенного текста
            textTertiary: ['500'], // colors.main[0]color - цвет третичного текста
        }
    },
};

export default themeConfig