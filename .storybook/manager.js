import { addons } from "@storybook/manager-api";

import {dark, light} from "./storybook-themes.js";

const getPreferredColorScheme = () => {
    if (!globalThis || !globalThis.matchMedia) return 'light';

    const isDarkThemePreferred = globalThis.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;
    if (isDarkThemePreferred) return 'dark';

    return 'light';
};

addons.setConfig({
    isFullscreen: false, // показывать содержимое истории на полный экран
    showNav: true, // показывает панель со списком историй
    showPanel: true, // показывает панель с конфигурацией дополнений
    panelPosition: 'bottom', // где показывать панель дополнений ('bottom'|'right')
    sidebarAnimations: true, // анимация дерева сайдбара
    enableShortcuts: true, // вкл/ выкл сочетания клавиш
    isToolshown: true, // показать / спрятать панель инструментов
    selectedPanel: undefined, // id выбранной панели дополнения
    theme: getPreferredColorScheme() === 'dark' ? dark : light, // настройки темы
});
