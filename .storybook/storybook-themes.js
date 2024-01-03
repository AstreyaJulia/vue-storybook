import { create } from '@storybook/theming/create';
import defaultTheme from "tailwindcss/defaultTheme";

const light = create({
    base: 'light',
    accentColor: '#14b8a6', // акцентный цвет для элементов управления, генерируемых некоторыми элементами
    colorPrimary: '#4f46e5',
    colorSecondary: '#3b82f6',

    // UI
    appBg: '#f3f4f6', // фоновый цвет боковой панели (сайдбара)
    appContentBg: '#ffffff', // цвет фона (бумаги) содержимого истории
    appBorderColor: '#e5e7eb', // цвет границы верхней панели
    appBorderRadius: 8,

    // Типографика
    fontBase: `"Open Sans", ${defaultTheme.fontFamily.sans}`,
    fontCode: 'monospace',

    // Цвет текста
    textColor: '#111827',

    // Цвет по-умолчанию для панели инструментов и активный цвет
    barTextColor: '#6b7280', // цвет значков на верхней панели
    barSelectedColor: '#4f46e5', // цвет активного значка на верхней панели
    barBg: '#ffffff', // фоновый цвет верхней панели

    // Цвета форм
    inputBg: 'white',
    inputBorder: '#e5e7eb',
    inputTextColor: '#374151',
    inputBorderRadius: 4,

    //brandTitle: 'My custom storybook',
    //brandUrl: 'https://example.com',
    //brandImage: 'https://placehold.it/350x150',*/
})

const dark = create({
    base: 'dark',
    accentColor: '#14b8a6', // акцентный цвет для элементов управления, генерируемых некоторыми элементами
    colorPrimary: '#818cf8',
    colorSecondary: '#3b82f6',

    // UI
    appBg: '#111827', // фоновый цвет боковой панели (сайдбара)
    appContentBg: '#030712', // цвет фона (бумаги) содержимого истории
    appBorderColor: '#1f2937', // цвет границы верхней панели
    appBorderRadius: 8,

    // Типографика
    fontBase: `"Open Sans", ${defaultTheme.fontFamily.sans}`,
    fontCode: 'monospace',

    // Цвет текста
    textColor: '#f9fafb',

    // Цвет по-умолчанию для панели инструментов и активный цвет
    barTextColor: '#e5e7eb', // цвет значков на верхней панели
    barSelectedColor: '#818cf8', // цвет активного значка на верхней панели
    barBg: '#030712', // фоновый цвет верхней панели

    // Цвета форм
    inputBg: '#030712',
    inputBorder: '#374151',
    inputTextColor: '#d1d5db',
    inputBorderRadius: 4,

    //brandTitle: 'My custom storybook',
    //brandUrl: 'https://example.com',
    //brandImage: 'https://placehold.it/350x150',*/
})

export {light, dark}