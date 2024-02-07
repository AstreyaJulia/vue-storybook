import defaultTheme from 'tailwindcss/defaultTheme'
import themeConfig from './configs/themeConfig'

export default {
  content: [
    './index.html',
    './configs/themeConfig.js',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    colors: ({colors}) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      ...themeConfig.themeColors
    }),
    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      serif: ['Noto Serif', ...defaultTheme.fontFamily.serif]
    },
    boxShadow: {
      sm: '0px 1px 2px 0px rgba(18, 18, 23, 0.05)',
      DEFAULT: '0px 1px 2px 0px rgba(18, 18, 23, 0.06), 0px 1px 3px 0px rgba(18, 18, 23, 0.10)',
      md: '0px 2px 4px -1px rgba(18, 18, 23, 0.06), 0px 4px 6px -1px rgba(18, 18, 23, 0.08)',
      lg: '0px 4px 6px -2px rgba(18, 18, 23, 0.05), 0px 10px 15px -3px rgba(18, 18, 23, 0.08)',
      xl: '0px 10px 10px -5px rgba(18, 18, 23, 0.04), 0px 20px 25px -5px rgba(18, 18, 23, 0.10)',
      '2xl': '0px 25px 50px -12px rgba(18, 18, 23, 0.25)',
      overlay:
        '0px 2px 4px 0px rgba(18, 18, 23, 0.04), 0px 5px 8px 0px rgba(18, 18, 23, 0.04), 0px 10px 18px 0px rgba(18, 18, 23, 0.03), 0px 24px 48px 0px rgba(18, 18, 23, 0.03), 0px 0px 0px 1px rgba(18, 18, 23, 0.10)'
    },
    extend: {
      colors: () => ({
        ...Object.fromEntries(
          [...themeConfig.colors.main.slice(1), ...themeConfig.colors.states].map((color) => [
            color.name,
            themeConfig.themeColors[color.color]
          ])
        )
      }),
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(0.5)' },
          '50%': { transform: 'scale(1)' }
        },
        tada: {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '10%, 20%': {
            transform: 'scale3d(1, 1, 0.95) rotate3d(0, 0, 1, -10deg)'
          },
          '30%, 50%, 70%, 90%': {
            transform: 'scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg)'
          },
          '40%, 60%, 80%': {
            transform: 'rotate3d(0, 0, 1, -10deg)'
          },
          '100%': { transform: 'scale3d(1, 1, 1)' }
        },
        fadeIn: {
          from: {
            opacity: '0'
          },

          to: {
            opacity: '1'
          }
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // медленное вращение по часовой стрелке
        zoom: 'zoom 1s ease-in-out infinite', // больше-меньше масштаб
        tada: 'tada 1.5s ease-in-out infinite', // покачивание (типа звонка) для уведомлений, привлечения внимания
        fadeIn: 'fadeIn 0.5s linear' // плавное появление, для смягчения перехода между страницами
      }
    }
  },
  plugins: ['@tailwindcss/forms']
}
