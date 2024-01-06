import '../src/assets/styles/main.css'
// Storybook Styles
import './styles.css'
import {light, dark} from './storybook-themes.js'
import { withThemeByClassName } from '@storybook/addon-themes'

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    previewTabs: {
      'storybook/docs/panel': {
        index: -1,
        title: 'Документация'
      },
      canvas: { title: 'Code', hidden: false }
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        order: [
          'Палитра',
          'Типографика',
          'Значки',
          'Тени и размытие фона',
          'Сетки и отступы',
          'Анимации',
          'Компоненты',
          [
            'Кнопки',
            ['Кнопка', 'Группа кнопок'],
            'Бейдж',
            'Аватары',
            ['Аватар', 'Группа аватаров'],
            'Карточки',
            ['Карточка', ['Элементы карточек', ['Содержимое карточки', 'Заголовок карточки']]],
            'Вкладки',
            ['Вкладки с подчёркиванием'],
            'Выпадающее меню',
            'Формы',
            ['Текстовое поле'],
            'Текстовые элементы'
          ]
        ],
        locales: 'ru-RU'
      }
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark'
      },
      defaultTheme: 'light'
    })
  ],
}

export default preview
