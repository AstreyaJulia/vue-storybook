import { create } from '@storybook/theming/create';
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import themeConfig from "../configs/themeConfig.js";
export default create({
    base: 'light',
    accentColor: colors[themeConfig.colors.main[2].color]['500'], // акцентный цвет для элементов управления, генерируемых некоторыми элементами
    colorPrimary: colors[themeConfig.colors.main[1].color]['500'],
    colorSecondary: colors[themeConfig.colors.secondary[1].color][themeConfig.colors.ui.textTertiary],

    // UI
    appBg: colors.white,
    appContentBg: colors[themeConfig.colors.main[0].color][themeConfig.colors.ui.bg],
    appBorderColor: colors[themeConfig.colors.main[0].color][themeConfig.colors.ui.border],
    appBorderRadius: 4,

    // Типографика
    fontBase: `"Open Sans", ${defaultTheme.fontFamily.sans}`,
    fontCode: 'monospace',

    // Цвет текста
    textColor: colors[themeConfig.colors.main[0].color][themeConfig.colors.ui.textSecondary],

    // Цвет по-умолчанию для панели инструментов и активный цвет
    barTextColor: 'silver',
    barSelectedColor: 'black',
    barBg: '#fff', // фоновый цвет верхней панели

    // Цвета форм
    inputBg: 'white',
    inputBorder: colors[themeConfig.colors.main[0].color][themeConfig.colors.ui.border],
    inputTextColor: '#374151',
    inputBorderRadius: 2,

    //brandTitle: 'My custom storybook',
    //brandUrl: 'https://example.com',
    //brandImage: 'https://placehold.it/350x150',
});