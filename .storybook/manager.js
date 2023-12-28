import { addons } from "@storybook/manager-api";
import theme from "./theme.js";

addons.setConfig({
    isFullscreen: false, // показывать содержимое истории на полный экран
    showNav: true, // показывает панель со списком историй
    showPanel: true, // показывает панель с конфигурацией дополнений
    panelPosition: 'bottom', // где показывать панель дополнений ('bottom'|'right')
    sidebarAnimations: true, // анимация дерева сайдбара
    enableShortcuts: true, // вкл/ выкл сочетания клавиш
    isToolshown: true, // показать / спрятать панель инструментов
    selectedPanel: undefined, // id выбранной панели дополнения
    theme: theme, // настройки темы
});
