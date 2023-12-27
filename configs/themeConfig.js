
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
    },
};

export default themeConfig