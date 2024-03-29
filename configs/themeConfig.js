const themeConfig = {
    // Настройки темы
    layout: {
        darkMode: false,
        menuCollapsed: false
    },
    themeColors: {
        black: '#121416',
        white: '#ffffff',
        test: {
            50: '#f3f3f6',
            100: '#e4e6ec',
            200: '#c7cad8',
            300: '#abafc4',
            400: '#8e94af',
            500: '#646c8f',
            600: '#505673',
            700: '#3c4156',
            800: '#2f3243',
            900: '#1e202b',
            950: '#0d0e13',
        }
        ,
        test2: {
            50: '#f0f8f0',
            100: '#dff1e0',
            200: '#bce3be',
            300: '#9ad49c',
            400: '#77c67b',
            500: '#48ac4c',
            600: '#398a3d',
            700: '#2b672d',
            800: '#215023',
            900: '#153316',
            950: '#09170a',
        },
        test3: {
            50: '#fff8ea',
            100: '#feefd2',
            200: '#ffdfa1',
            300: '#ffcf70',
            400: '#ffbe3f',
            500: '#f4a200',
            600: '#c38200',
            700: '#926100',
            800: '#724b00',
            900: '#493000',
            950: '#201500',
        },
        gray: {
            50: '#FBFBFB',
            100: '#E7E7E7',
            200: '#CCCCCC',
            300: '#B2B2B2',
            400: '#969696',
            500: '#767676',
            600: '#5E5E5E',
            700: '#3F3F3F',
            800: '#353535',
            900: '#111111'
        },
        slate: {
            50: '#f3f3f6',
            100: '#e4e6ec',
            200: '#c7cad8',
            300: '#abafc4',
            400: '#8e94af',
            500: '#646c8f',
            600: '#505673',
            700: '#3c4156',
            800: '#2f3243',
            900: '#1e202b',
            950: '#0d0e13',
        },
        red: {
            50: '#fcecee',
            100: '#fadee1',
            200: '#f6b9c0',
            300: '#f2959f',
            400: '#ec6a78',
            500: '#da1a2f',
            600: '#ae1526',
            700: '#82101c',
            800: '#650c16',
            900: '#41080e',
            950: '#1d0306',
        },
        pink: {
            50: '#fcecf2',
            100: '#fbdee8',
            200: '#f6b2cb',
            300: '#f28db2',
            400: '#ed6195',
            500: '#db1961',
            600: '#af144d',
            700: '#8b0f3d',
            800: '#660b2d',
            900: '#41071d',
            950: '#240410',
        },
        purple: {
            50: '#F7EDFC',
            100: '#F1DFFB',
            200: '#E2BBF7',
            300: '#D49AF4',
            400: '#C97EF1',
            500: '#BB5EED',
            600: '#AA35E9',
            700: '#7A17DE',
            800: '#5910A2',
            900: '#360764',
          950: '#27063C'
        },
        violet: {
            50: '#f1eefb',
            100: '#e6e0f8',
            200: '#c6b7f0',
            300: '#a58ee8',
            400: '#8566e0',
            500: '#643dd7',
            600: '#4c26be',
            700: '#3c1e95',
            800: '#2b156c',
            900: '#1b0d43',
            950: '#100828'
        },
        indigo: {
            50: '#F7F7FD',
            100: '#F2F4FD',
            200: '#D7E0F9',
            300: '#B9C2F3',
            400: '#869AE9',
            500: '#4765DC',
            600: '#2343c0',
            700: '#1c3597',
            800: '#14266e',
            900: '#0c1844',
            950: '#070e29'
        },
        blue: {
            50: '#eef5fa',
            100: '#d4e5f4',
            200: '#99c1e6',
            300: '#5e9dd7',
            400: '#2e9bff',
            500: '#0072dc',
            600: '#0059ab',
            700: '#004482',
            800: '#003361',
            900: '#001d39',
            950: '#001120',
        },
        cyan: {
            50: '#ecfafc',
            100: '#cdf4fb',
            200: '#a0ebf7',
            300: '#73e1f4',
            400: '#45d8f0',
            500: '#18ceec',
            600: '#0fabc4',
            700: '#0b8397',
            800: '#085c69',
            900: '#04343c'
        },
        teal: {
            50: '#e7faf4',
            100: '#bef2e2',
            200: '#49dbb0',
            300: '#25bf91',
            400: '#1d9672',
            500: '#156d53',
            600: '#115843',
            700: '#0e4b39',
            800: '#0b3d2e',
            900: '#062219',
            950: '#03140f'
        },
        green: {
            50: '#effced',
            100: '#dcf9d7',
            200: '#b7f3ad',
            300: '#91ec82',
            400: '#6ce657',
            500: '#46e02c',
            600: '#33c01c',
            700: '#289515',
            800: '#1c6a0f',
            900: '#114009',
            950: '#0b2a06'
        },
        lime: {
            50: '#f6fcec',
            100: '#e8face',
            200: '#d3f6a1',
            300: '#bef274',
            400: '#a9ee47',
            500: '#94ea1a',
            600: '#79c311',
            700: '#5d960d',
            800: '#416909',
            900: '#253c05'
        },
        yellow: {
            50: '#fff8ea',
            100: '#feefd2',
            200: '#ffdfa1',
            300: '#ffcf70',
            400: '#ffbe3f',
            500: '#f4a200',
            600: '#c38200',
            700: '#926100',
            800: '#724b00',
            900: '#493000',
            950: '#201500',
        },
        orange: {
            50: '#fef3eb',
            100: '#fddfcb',
            200: '#fcc29b',
            300: '#faa56c',
            400: '#f9883c',
            500: '#f86b0c',
            600: '#ce5605',
            700: '#9e4204',
            800: '#6f2e03',
            900: '#3f1a01'
        }
    },
    colors: {
        main: [
            {
                name: 'gray', // серые нейтральные оттенки
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
                        content1: 'white', // текст основной, поля ввода
                        content2: '100', // метки
                        content3: '400',
                        border: '700', // бордюры, разделители
                        bgSecondary: '800',
                        bgPrimary: '900' // основной фон
                    }
                }
            },
            {
                name: 'brand',
                color: 'blue', // цвет tailwind
                ui: {
                    light: {
                        base: '500', // фон кнопок, темных карточек, бейджей, аватаров
                        hover: '600', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
                        status: '400', // цвет статусов
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
                        base: '500', // фон кнопок, темных карточек, бейджей, аватаров
                        hover: '600', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
                        status: '400', // цвет статусов
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
                        base: '500', // фон кнопок, темных карточек, бейджей, аватаров
                        hover: '600', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
                        status: '400', // цвет статусов
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
                color: 'yellow', // цвет tailwind
                ui: {
                    light: {
                        base: '500', // фон кнопок, темных карточек, бейджей, аватаров
                        hover: '600', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
                        status: '400', // цвет статусов
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
                        base: '500', // фон кнопок, темных карточек, бейджей, аватаров
                        hover: '600', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
                        status: '400', // цвет статусов
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
                color: 'cyan', // цвет tailwind
                ui: {
                    light: {
                        base: '500', // фон кнопок, темных карточек, бейджей, аватаров
                        hover: '600', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
                        status: '400', // цвет статусов
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
                name: 'pink',
                color: 'pink', // цвет tailwind
                ui: {
                    light: {
                        base: '500', // фон кнопок, темных карточек, бейджей, аватаров
                        hover: '600', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
                        status: '400', // цвет статусов
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
                        base: '500', // фон кнопок, темных карточек, бейджей, аватаров
                        hover: '600', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
                        status: '400', // цвет статусов
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
                        base: '500', // фон кнопок, темных карточек, бейджей, аватаров
                        hover: '600', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
                        status: '400', // цвет статусов
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
                name: 'purple',
                color: 'purple', // цвет tailwind
                ui: {
                    light: {
                        base: '500', // фон кнопок, темных карточек, бейджей, аватаров
                        hover: '600', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
                        status: '400', // цвет статусов
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
                name: 'lime',
                color: 'lime', // цвет tailwind
                ui: {
                    light: {
                        base: '500', // фон кнопок, темных карточек, бейджей, аватаров
                        hover: '600', // текст на светлом фоне, аватарах, бейджах, карточках, бордюры темных бейджей, карточек, кнопок
                        status: '400', // цвет статусов
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
