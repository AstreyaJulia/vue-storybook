const themeConfig = {
  // Настройки темы
  layout: {
    darkMode: false,
    menuCollapsed: false
  },
  colors: {
    main: [
      {
        name: 'grayscale', // серые нейтральные оттенки
        color: 'gray', // цвет tailwind
        ui: {
          light: {
            content1: '900', // текст основной, поля ввода
            content2: '700', // метки
            content3: '500',
            border: '200', // бордюры, разделители
            bgSecondary: '100',
            bgPrimary: 'white' // основной фон
          },
          dark: {
            content1: '50', // текст основной, поля ввода
            content2: '100', // метки
            content3: '400',
            border: '800', // бордюры, разделители
            bgSecondary: '900',
            bgPrimary: '950' // основной фон
          },
        }
      },
      {
        name: 'brand',
        color: 'indigo', // цвет tailwind
        ui: {
          light: {
            base: '600', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '700', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '500', // цвет статусов
            border: '200', // бордюры светлых бейджей, карточек
            bgSecondary: '100', // фон светлых аватаров, бейджей
            bgPrimary: '50' // фон карточек со светлым фоном, текст на темных карточках, кнопках, аватарах, бейджах
          },
          dark: {
            base: '50', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '100', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '400', // цвет статусов
            border: '700', // бордюры светлых бейджей, карточек
            bgSecondary: '800', // фон светлых аватаров, бейджей
            bgPrimary: '900' // фон карточек со светлым фоном, текст на темных карточках, кнопках, аватарах, бейджах
          }
        }
      },
      {
        name: 'accent',
        color: 'teal', // цвет tailwind
        ui: {
          light: {
            base: '600', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '700', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '500', // цвет статусов
            border: '200',
            bgSecondary: '100',
            bgPrimary: '50'
          },
          dark: {
            base: '50', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '100', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '400', // цвет статусов
            border: '700', // бордюры светлых бейджей, карточек
            bgSecondary: '800', // фон светлых аватаров, бейджей
            bgPrimary: '900' // фон карточек со светлым фоном, текст на темных карточках, кнопках, аватарах, бейджах
          }
        }
      }
    ],
    states: [
      {
        name: 'error',
        color: 'red', // цвет tailwind
        ui: {
          light: {
            base: '600', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '700', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '500', // цвет статусов
            border: '200',
            bgSecondary: '100',
            bgPrimary: '50'
          },
          dark: {
            base: '50', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '100', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '400', // цвет статусов
            border: '700', // бордюры светлых бейджей, карточек
            bgSecondary: '800', // фон светлых аватаров, бейджей
            bgPrimary: '900' // фон карточек со светлым фоном, текст на темных карточках, кнопках, аватарах, бейджах
          }
        }
      },
      {
        name: 'warning',
        color: 'amber', // цвет tailwind
        ui: {
          light: {
            base: '600', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '700', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '500', // цвет статусов
            border: '200',
            bgSecondary: '100',
            bgPrimary: '50'
          },
          dark: {
            base: '50', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '100', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '400', // цвет статусов
            border: '700', // бордюры светлых бейджей, карточек
            bgSecondary: '800', // фон светлых аватаров, бейджей
            bgPrimary: '900' // фон карточек со светлым фоном, текст на темных карточках, кнопках, аватарах, бейджах
          }
        }
      },
      {
        name: 'success',
        color: 'green', // цвет tailwind
        ui: {
          light: {
            base: '600', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '700', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '500', // цвет статусов
            border: '200',
            bgSecondary: '100',
            bgPrimary: '50'
          },
          dark: {
            base: '50', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '100', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '400', // цвет статусов
            border: '700', // бордюры светлых бейджей, карточек
            bgSecondary: '800', // фон светлых аватаров, бейджей
            bgPrimary: '900' // фон карточек со светлым фоном, текст на темных карточках, кнопках, аватарах, бейджах
          }
        }
      },
      {
        name: 'info',
        color: 'sky', // цвет tailwind
        ui: {
          light: {
            base: '600', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '700', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '500', // цвет статусов
            border: '200',
            bgSecondary: '100',
            bgPrimary: '50'
          },
          dark: {
            base: '50', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '100', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '400', // цвет статусов
            border: '700', // бордюры светлых бейджей, карточек
            bgSecondary: '800', // фон светлых аватаров, бейджей
            bgPrimary: '900' // фон карточек со светлым фоном, текст на темных карточках, кнопках, аватарах, бейджах
          }
        }
      }
    ],
    secondary: [
      {
        name: 'slate',
        color: 'slate', // цвет tailwind
        ui: {
          light: {
            base: '500', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '600', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '500', // цвет статусов
            border: '200',
            bgSecondary: '100',
            bgPrimary: '50'
          },
          dark: {
            base: '50', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '100', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '400', // цвет статусов
            border: '700', // бордюры светлых бейджей, карточек
            bgSecondary: '800', // фон светлых аватаров, бейджей
            bgPrimary: '900' // фон карточек со светлым фоном, текст на темных карточках, кнопках, аватарах, бейджах
          }
        }
      },
      {
        name: 'cyan',
        color: 'cyan', // цвет tailwind
        ui: {
          light: {
            base: '600', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '700', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '500', // цвет статусов
            border: '200',
            bgSecondary: '100',
            bgPrimary: '50'
          },
          dark: {
            base: '50', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '100', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '400', // цвет статусов
            border: '700', // бордюры светлых бейджей, карточек
            bgSecondary: '800', // фон светлых аватаров, бейджей
            bgPrimary: '900' // фон карточек со светлым фоном, текст на темных карточках, кнопках, аватарах, бейджах
          }
        }
      },
      {
        name: 'blue',
        color: 'blue', // цвет tailwind
        ui: {
          light: {
            base: '600', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '700', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '500', // цвет статусов
            border: '200',
            bgSecondary: '100',
            bgPrimary: '50'
          },
          dark: {
            base: '50', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '100', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '400', // цвет статусов
            border: '700', // бордюры светлых бейджей, карточек
            bgSecondary: '800', // фон светлых аватаров, бейджей
            bgPrimary: '900' // фон карточек со светлым фоном, текст на темных карточках, кнопках, аватарах, бейджах
          }
        }
      },
      {
        name: 'pink',
        color: 'pink', // цвет tailwind
        ui: {
          light: {
            base: '600', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '700', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '500', // цвет статусов
            border: '200',
            bgSecondary: '100',
            bgPrimary: '50'
          },
          dark: {
            base: '50', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '100', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '400', // цвет статусов
            border: '700', // бордюры светлых бейджей, карточек
            bgSecondary: '800', // фон светлых аватаров, бейджей
            bgPrimary: '900' // фон карточек со светлым фоном, текст на темных карточках, кнопках, аватарах, бейджах
          }
        }
      },
      {
        name: 'rose',
        color: 'rose', // цвет tailwind
        ui: {
          light: {
            base: '600', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '700', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '500', // цвет статусов
            border: '200',
            bgSecondary: '100',
            bgPrimary: '50'
          },
          dark: {
            base: '50', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '100', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '400', // цвет статусов
            border: '700', // бордюры светлых бейджей, карточек
            bgSecondary: '800', // фон светлых аватаров, бейджей
            bgPrimary: '900' // фон карточек со светлым фоном, текст на темных карточках, кнопках, аватарах, бейджах
          }
        }
      },
      {
        name: 'orange',
        color: 'orange', // цвет tailwind
        ui: {
          light: {
            base: '600', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '700', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '500', // цвет статусов
            border: '200',
            bgSecondary: '100',
            bgPrimary: '50'
          },
          dark: {
            base: '50', // фон кнопок, темных карточек, бейджей, аватаров
            hover: '100', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
            status: '400', // цвет статусов
            border: '700', // бордюры светлых бейджей, карточек
            bgSecondary: '800', // фон светлых аватаров, бейджей
            bgPrimary: '900' // фон карточек со светлым фоном, текст на темных карточках, кнопках, аватарах, бейджах
          }
        }
      }
    ]
  }
}

export default themeConfig
