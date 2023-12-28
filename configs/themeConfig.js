
const themeConfig = {
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
            /** Для серого цвета */
            bg: ['50'], // colors.main[0]color - цвет фона полей ввода, белой кнопки
            bgHover: ['100'], // colors.main[0]color - цвет фона полей ввода, белой кнопки при наведении мыши
            border: ['300'], // colors.main[0]color - цвет бордюра полей ввода, белой кнопки
            borderDisabled: ['100'], // colors.main[0]color - цвет бордюра полей ввода, белой кнопки
            borderHover: ['400'], // colors.main[0]color - цвет бордюра полей ввода, белой кнопки при наведении мыши
            textMain: ['800'], // colors.main[0]color - цвет основного текста, текста на белой кнопке, вводимого в поле текста
            textMainHover: ['900'], // colors.main[0]color - цвет основного текста, текста на белой кнопке, вводимого в поле текста при наведении мыши
            textSecondary: ['600'], // colors.main[0]color - цвет второстепенного текста (кнопки и т.д.)
            textSecondaryHover: ['700'], // colors.main[0]color - цвет второстепенного текста (кнопки и т.д.) при наведении мыши
            textTertiary: ['400'], // colors.main[0]color - цвет третичного текста
            textTertiaryHover: ['500'], // colors.main[0]color - цвет третичного текста при наведении мыши
        }
    },
};

export default themeConfig